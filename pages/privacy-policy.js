import Layout from "../components/IndexLayout";
import "../assets/css/bootstrap.min.css";
import { Fragment } from "react";
import "../assets/css/aos.css";
import "../assets/css/style.css";
import SiteNav from "../components/SideNav/Index";
import { Col } from "@bootstrap-styled/v4";

function PrivacyPolicyPage() {
    return (
        <Fragment>
            <Layout />
            <div id="thetop"></div>
            <div id="backtotop">
                <a href="#" id="scroll">
                    <i className="far fa-arrow-up"></i>
                </a>
            </div>

            <SiteNav />

            <div className="sidebar-menu-wrapper">
                <div id="sidebar-menu" className="sidebar-menu">
                    <div className="dismiss text-right mb-60 clearfix">
                        <span className="close-btn">
                            <i className="fal fa-times"></i>
                        </span>
                    </div>

                    <div className="menu-list ul-li-block clearfix">
                        <ul className="clearfix">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="index.html">About</a>
                            </li>
                            <li>
                                <a href="index.html">Our Services</a>
                            </li>
                            <li>
                                <a
                                    href="http://eepurl.com/gKEhfD"
                                    className="nav-link scrollspy-btn"
                                >
                                    Sign up
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>

            <main>
                <section
                    id="breadcrumb-section"
                    className="breadcrumb-section text-white clearfix"
                    data-background="images/background/bg_1.jpg"
                >
                    <div className="container position-relative">
                        <h1 className="title-text mb-0">Privacy Policy</h1>
                    </div>
                </section>

                <section
                    id="privacy-policy-section"
                    className="privacy-policy-section sec-ptb-130 clearfix"
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <Col lg={10}>
                                <div className="privacy-policy-item mb-60">
                                    <p className="mb-30">
                                        This mobile application (the “App”) is
                                        made available by The Drinkaware Trust,
                                        a company limited by guarantee and
                                        registered in England and Wales with
                                        number 4547974 and with registered
                                        address Salisbury House 3rd Floor (Room
                                        519), London Wall, London, England EC2M
                                        5QQ
                                    </p>
                                    <p className="mb-0">
                                        You, the user of the App, confirm your
                                        acceptance of these App terms of use
                                        (“App Terms”). If you do not agree to
                                        these App Terms, you must immediately
                                        uninstall the App and discontinue its
                                        use. These App Terms should be read
                                        alongside our Privacy Policy and Cookie
                                        Policy.
                                    </p>
                                </div>

                                <div className="privacy-policy-item mb-60">
                                    <h3 className="item-title mb-30">
                                        App and Related Terms
                                    </h3>
                                    <p className="mb-30">
                                        Depending on the version of the
                                        Application you have downloaded, these
                                        App Terms incorporate Apple’s or Google
                                        Android’s terms and conditions and
                                        privacy policies (“Platform Terms”). If
                                        there is any conflict between these App
                                        Terms and the Platform Terms then these
                                        App Terms will prevail.
                                    </p>
                                    <p className="mb-0">
                                        We may from time to time vary these App
                                        Terms. Please check these App Terms
                                        regularly to ensure you are aware of any
                                        variations made by us. If you continue
                                        to use this App, you are deemed to have
                                        accepted such variations. If you do not
                                        agree to such variations, you should not
                                        use the App.
                                    </p>
                                </div>

                                <div className="privacy-policy-item mb-0">
                                    <h3 className="item-title mb-30">
                                        Use of the App
                                    </h3>
                                    <p className="mb-30">
                                        You acknowledge that your agreement with
                                        your mobile network provider (“Mobile
                                        Provider”) will apply to your use of the
                                        App. You acknowledge that you may be
                                        charged by the Mobile Provider for data
                                        services while using certain features of
                                        the App or any such third party charges
                                        as may arise and you accept
                                        responsibility for such charges. If you
                                        are not the bill payer for the Device
                                        being used to access the App, you will
                                        be assumed to have received permission
                                        from the bill payer for using the App.
                                    </p>
                                    <p className="mb-0">
                                        You acknowledge that where you use
                                        services provided by Apple or Google (or
                                        any other third parties) in connection
                                        with your use of the App, you will be
                                        subject to Apple’s, Google’s (or the
                                        applicable third party’s) terms and
                                        conditions and privacy policy and you
                                        should ensure that you have read such
                                        terms.
                                    </p>
                                </div>
                            </Col>
                        </div>
                    </div>
                </section>

                <section
                    id="advertisement-section"
                    className="advertisement-section sec-ptb-80 bg-default-orange text-white clearfix"
                >
                    <div className="container">
                        <div className="deco-image deco-image-1">
                            <img src="images/c-left.png" alt="carrot_image" />
                        </div>
                        <div className="deco-image deco-image-2">
                            <img src="images/c-right.png" alt="carrot_image" />
                        </div>

                        <div className="section-title text-center mb-60">
                            <h2 className="title-text text-white mb-30">
                                Coming Soon
                            </h2>
                            <p className="mb-0">
                                Join the Carrott family to discover the best
                                local freelance talent within your community
                                today!
                            </p>
                        </div>

                        <div className="btns-group ul-li-center mb-30 clearfix">
                            <ul className="clearfix">
                                <li>
                                    <a href="#!">
                                        <img
                                            src="images/app-store.png"
                                            alt="app_store_button"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <img
                                            src="images/google-play.png"
                                            alt="play_store_button"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="social-links ul-li-center clearfix">
                            <ul className="clearfix">
                                <li>
                                    <a href="#!">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <footer id="footer-section" className="footer-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="contact-info">
                                <p className="mb-0">
                                    Contact us at{" "}
                                    <a href="#!">hello@carrott.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="useful-links ul-li-center clearfix">
                                <ul className="clearfix">
                                    <li>
                                        <a href="terms.html">Terms of Use</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy.html">
                                            Privacy Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="copyright-text text-right">
                                <p className="mb-0">
                                    © 2019 Carrott | All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default PrivacyPolicyPage;
