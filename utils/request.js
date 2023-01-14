import { cloneDeep } from 'lodash';

function parseJSON(response) {
  return response.json
    ? response.json().then((data) => ({ response: data }))
    : response;
}

function formatQueryParams(params) {
  return Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return parseJSON(response).then(() => {
    const error = {
      response,
    };
    throw error;
  });
}

export default function request(url, options = {}) {
  const reqOptions = cloneDeep(options);
  let urlFetch = url;
  // Set headers
  if (!options.headers) {
    reqOptions.headers = Object.assign(
      {},
      {
        'Content-Type': 'application/json',
      }
    );
  } else {
    reqOptions.headers = Object.assign({}, options.headers);
  }

  if (options && options.params) {
    const params = formatQueryParams(options.params);
    urlFetch = `${url}?${params}`;
  }
  // Stringify body object
  if (options && options.body) {
    if (
      options.headers &&
      options.headers['Content-Type'] === 'multipart/form-data'
    ) {
      reqOptions.body = options.body;
    } else {
      reqOptions.body = JSON.stringify(options.body);
    }
  }

  return fetch(urlFetch, reqOptions)
    .then(checkStatus)
    .then((response) => parseJSON(response))
    .catch((err) => {
      throw err;
    });
}
