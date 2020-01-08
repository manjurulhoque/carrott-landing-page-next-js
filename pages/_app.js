import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import { SiteWrapper, SiteContent } from "../components/Global/styles";
import { withRouter } from "next/router";

// // fonts live in next.js public directory
// const fontAssetPath = './public/fonts';
// // we dont' need this config at the moment
// const getImageSource = () => {};

const theme = {
  secondaryColor: "FFC055",
  primaryColor: "#FC9246"
};

class CarrottWeb extends App {
  // "de-optimize" the app to avoid Next from statically optimizing the page, e.g. by inlining
  // build time configs.
  // https://nextjs.org/docs#automatic-static-optimization
  static async getInitialProps(context) {
    const appProps = await App.getInitialProps(context);
    return { ...appProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <SiteWrapper>
          <SiteContent>
            {/* 

                // you can add stylesheets here rather than using next/head

            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" /> 
            */}
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-152424262-1"
            ></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-152424262-1');
            `
                }}
            ></script>
            <meta charset="utf-8" />>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
            <title>Discover Freelance Talent | Carrott App London</title>
            <link rel="stylesheet" href="css/fontawesome-all.css" />
            {/* <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
            /> */}
            <script src="js/jquery-3.4.1.min.js"></script>
            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script async src="js/aos.js"></script>
            <script async src="js/mCustomScrollbar.js"></script>
            <script async src="js/custom.js"></script>
            {/* <link rel="stylesheet" href="/assets/css/style.css" /> */}
            <Component {...pageProps} />
          </SiteContent>
        </SiteWrapper>
      </ThemeProvider>
    );
  }
}

export default withRouter(CarrottWeb);
