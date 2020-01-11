import Head from "next/head";
import "../assets/css/bootstrap.min.css";
// import "../assets/css/fontawesome-all.css";
import "../assets/css/aos.css";
import "../assets/css/style.css";

const IndexLayout = props => {
    return (
        <Head>
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
            <meta charSet="utf-8" />>
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
        </Head>
    );
};

export default IndexLayout;
