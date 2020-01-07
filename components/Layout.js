import Head from 'next/head';
import '../assets/css/bootstrap.min.css';
// import '../assets/css/fontawesome-all.css';
import '../assets/css/aos.css';

const Layout = (props) => {
    return (
        <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-152424262-1"></script>
            <script dangerouslySetInnerHTML={{__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-152424262-1');
            `}}>
            </script>
            <title>Carrott Landing Page</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"/>
        </Head>
    )
};

export default Layout;