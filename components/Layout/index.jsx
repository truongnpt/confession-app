import React from 'react';
import { Header } from 'containers/Header/index';
import { Footer } from 'containers/Footer/index';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
// import env from 'utils/env';
// import { initGA, logPageView } from '../../utils/analytics';
// import { hotjar } from 'react-hotjar';


const Layout = (props) => {
  const { children, router } = props;
  const singlePaths = ['/thank-you', '/'];

  /* 
  * Hotjar and GA implementation here. Do not delete.
  */
  // useEffect(() => {
  //   if (!window.GA_INITIALIZED) {
  //     initGA();
  //     window.GA_INITIALIZED = true;
  //   }
  //   logPageView();
  //   hotjar.initialize(env.HOTJAR_SITE_ID, 6);
  // }, []);

  return (
    <div className="layout">
      {singlePaths.includes(router.pathname) || <Header />}
      {children}
      {singlePaths.includes(router.pathname) || <Footer />}
    </div>
  );
};

export default withRouter(Layout);

Layout.propTypes = {
  children: PropTypes.element,
  router: PropTypes.object,
};
