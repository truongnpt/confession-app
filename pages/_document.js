import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { companyInfo } from 'static/data/companyInfo';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang={companyInfo.language}>
        <Head>
          <link href="/fonts/EuclidCircularB.css" rel="stylesheet" />
          <link
            rel="shortcut icon"
            href={companyInfo.companyFavicon}
            type="image/png"
          />
          <meta name="keywords" content={companyInfo.keywordsContent} />
          {/* Global site tag (gtag.js) - Google Analytics */}
          {/* {process.env.NODE_ENV === 'production' ? (
            <>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-J10LJKL64B"
              ></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-J10LJKL64B');
                `,
                }}
              />
            </>
          ) : null} */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
