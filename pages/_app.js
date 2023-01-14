import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/globalStyle';
import Layout from 'components/Layout/index';
import Head from 'next/head';
import { companyInfo } from '../static/data/companyInfo';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  const MAINTENANCE = process.env.NEXT_PUBLIC_MAINTENANCE;

  if (MAINTENANCE === 'false') {
    return (
      <ThemeProvider theme={theme}>
        <NextNProgress color="#ff9a01" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <GlobalStyle />
      </ThemeProvider>
    );
  } else {
    return (
      <>
        <Head>
          <title>{companyInfo.companyName}</title>
        </Head>
      </>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default MyApp;
