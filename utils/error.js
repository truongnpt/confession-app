import { ToastAlert } from 'services/alert.service';

export class ApiError extends Error {}

export const handleError = (error) => {
  switch (true) {
    case error instanceof ApiError:
      ToastAlert.error(error.message);
      break;
    case typeof error === 'string':
      ToastAlert.error(error);
      break;
    default:
      ToastAlert.error(error);
  }
};
