import Layout from "../components/IndexLayout";
import "../assets/css/bootstrap.min.css";
import React, { Fragment } from "react";
import "../assets/css/aos.css";
import "../assets/css/style.css";
import Row from "../components/styled/Row";
import { Col } from "@bootstrap-styled/v4";
import SiteNav from "../components/SideNav/Index";

function HomePage() {
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
                                <a
                                    href="#thetop"
                                    className="nav-link scrollspy-btn"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about-section"
                                    className="nav-link scrollspy-btn"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#service-section"
                                    className="nav-link scrollspy-btn"
                                >
                                    Our Services
                                </a>
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
                    id="banner-section"
                    className="banner-section text-white bg-default-orange clearfix"
                >
                    <div className="deco-image deco-image-1">
                        <img src="images/carrot_white.svg" alt="carrot_image" />
                    </div>
                    <div className="deco-image deco-image-2">
                        <img src="images/carrot_white.svg" alt="carrot_image" />
                    </div>

                    <div className="container">
                        <Row>
                            <div className="col-lg-4 order-last">
                                <div className="banner-image">
                                    <img
                                        src="images/phone.png"
                                        alt="phone_not_found"
                                    />
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <div className="banner-content">
                                    <h1 className="title-text text-white mb-30">
                                        Discover local freelance talent from
                                        your area!
                                    </h1>
                                    <p className="mb-60">
                                        We connect freelance local talent to
                                        customers through our on-demand and
                                        instant service. Discover hidden talent
                                        in your community today!
                                    </p>
                                    <div className="btns-group ul-li clearfix">
                                        <h3 className="list-title text-white mb-30">
                                            COMING SOON
                                        </h3>
                                        <div className="sng-btn">
                                            <a
                                                href="http://eepurl.com/gKEhfD"
                                                className="signup-btn"
                                            >
                                                Sign up now
                                            </a>
                                        </div>
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
                                </div>
                            </div>
                        </Row>
                    </div>
                </section>

                <section
                    id="about-section"
                    className="about-section sec-ptb-130 clearfix"
                >
                    <div className="container">
                        <div className="section-title mb-60 text-center">
                            <h3 className="sub-title mb-30">ABOUT US</h3>
                            <h2 className="title-text mb-30">
                                Join The Carrott Family
                            </h2>
                            <p className="mb-0">
                                Become either a Customer or a Provider within
                                the Carrott family to find your service needs or
                                earn money with us!
                            </p>
                        </div>

                        <div className="row justify-content-lg-around">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-item-grid text-center clearfix">
                                    <div className="about-image">
                                        <img
                                            src="images/about/Onboarding_One.png"
                                            alt="image_not_found"
                                        />
                                    </div>
                                    <h3 className="item-title mb-30">
                                        Become a Customer
                                    </h3>
                                    <p className="mb-0">
                                        Join Carrott as a Customer so you to
                                        find services for your every need,
                                        whenever you need them!
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-item-grid text-center clearfix">
                                    <div className="about-image">
                                        <img
                                            src="images/about/Onboarding_Two.png"
                                            alt="image_not_found"
                                        />
                                    </div>
                                    <h3 className="item-title mb-30">
                                        Become a Provider
                                    </h3>
                                    <p className="mb-0">
                                        Join Carrott as a Provider so you can
                                        start selling your service and promoting
                                        your talents!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="feature-section"
                    className="feature-section clearfix"
                >
                    <div className="container">
                        <div className="feature-item clearfix">
                            <div className="row justify-content-lg-between justify-content-md-center">
                                <Col
                                    lg="5"
                                    sm="12"
                                    md="6"
                                    className="order-last"
                                >
                                    <div
                                        className="feature-image text-center"
                                        data-background="images/shapes/img_11.png"
                                    >
                                        <img
                                            src="images/phone.png"
                                            alt="image_not_found"
                                            data-aos="zoom-out"
                                            data-aos-delay="100"
                                        />

                                        <div
                                            className="shape-image shape-1"
                                            data-aos="zoom-in-up"
                                            data-aos-delay="300"
                                        >
                                            <img
                                                src="images/shapes/img_1.png"
                                                alt="image_not_found"
                                            />
                                        </div>
                                        <div
                                            className="shape-image shape-2"
                                            data-aos="zoom-in-up"
                                            data-aos-delay="400"
                                        >
                                            <img
                                                src="images/shapes/img_2.png"
                                                alt="image_not_found"
                                            />
                                        </div>
                                        <div
                                            className="shape-image shape-3"
                                            data-aos="zoom-in-up"
                                            data-aos-delay="500"
                                        >
                                            <img
                                                src="images/shapes/img_3.png"
                                                alt="image_not_found"
                                            />
                                        </div>
                                    </div>
                                </Col>

                                <div className="col-lg-6 col-md-8 col-sm-12 d-flex">
                                    <div className="feature-fontant">
                                        <h3 className="item-title mb-30">
                                            <i className="fal fa-map-marker-alt mr-2"></i>{" "}
                                            Discover and Promote
                                        </h3>
                                        <p className="mb-0">
                                            Search from a range of our local
                                            service providers in our map view to
                                            instantly discover and choose the
                                            nearest, most affordable and highly
                                            rated providers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="feature-item clearfix">
                            <div className="row justify-content-lg-between justify-content-md-center">
                                <div className="col-lg-5 col-md-6 col-sm-12">
                                    <div
                                        className="feature-image text-center"
                                        data-background="images/shapes/img_10.png"
                                    >
                                        <img
                                            src="images/phone.png"
                                            alt="image_not_found"
                                            data-aos="zoom-out"
                                            data-aos-delay="100"
                                        />
                                        >
                                        <div
                                            className="shape-image shape-1"
                                            data-aos="zoom-in-up"
                                            data-aos-delay="300"
                                        >
                                            <img
                                                src="images/shapes/img_7.png"
                                                alt="image_not_found"
                                            />
                                        </div>
                                        <div
                                            className="shape-image shape-2"
                                            data-aos="zoom-in-up"
                                            data-aos-delay="400"
                                        >
                                            <img
                                                src="images/shapes/img_8.png"
                                                alt="image_not_found"
                                            />
                                        </div>
                                        <div
                                            className="shape-image shape-3"
                                            data-aos="zoom-in-up"
                                            data-aos-delay="500"
                                        >
                                            <img
                                                src="images/shapes/img_9.png"
                                                alt="image_not_found"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <Col lg="6" md="8" sm="12" className="d-flex">
                                    <div className="feature-fontant">
                                        <h3 className="item-title mb-30">
                                            <i className="far fa-calendar-alt mr-2"></i>{" "}
                                            Book & Connect
                                        </h3>
                                        <p className="mb-0">
                                            Send general or specific requests to
                                            service providers to instantly open
                                            a chat. Negotiate prices and dates
                                            through proposals to get work done
                                            fast and efficiently!
                                        </p>
                                    </div>
                                </Col>
                            </div>
                        </div>

                        <div className="feature-item clearfix">
                            <div className="row justify-content-lg-between justify-content-md-center">
                                <div className="col-lg-5 col-md-6 col-sm-12 order-last">
                                    <div
                                        className="feature-image text-center"
                                        data-background="images/shapes/img_11.png"
                                    >
                                        <img
                                            src="images/phone.png"
                                            alt="image_not_found"
                                            data-aos="zoom-out"
                                            data-aos-delay="100"
                                        />

                                        <div
                                            className="shape-image shape-1"
                                            data-aos="zoom-in-up"
                                            data-aos-delay="300"
                                        >
                                            <img
                                                src="images/shapes/img_4.png"
                                                alt="image_not_found"
                                            />
                                        </div>
                                        <div
                                            className="shape-image shape-2"
                                            data-aos="zoom-in-up"
                                            data-aos-delay="400"
                                        >
                                            <img
                                                src="images/shapes/img_5.png"
                                                alt="image_not_found"
                                            />
                                        </div>
                                        <div
                                            className="shape-image shape-3"
                                            data-aos="zoom-in-up"
                                            data-aos-delay="500"
                                        >
                                            <img
                                                src="images/shapes/img_6.png"
                                                alt="image_not_found"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <Col lg="6" md="8" sm="12" className="d-flex">
                                    <div className="feature-fontant">
                                        <h3 className="item-title mb-30">
                                            <i className="fas fa-user mr-2"></i>{" "}
                                            Grow your Business
                                        </h3>
                                        <p className="mb-0">
                                            You have access to be able to expand
                                            your brand and business by selling
                                            your service’s to a large and
                                            collaborative community full of
                                            talented people.
                                        </p>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="service-section"
                    className="service-section sec-ptb-130 clearfix"
                >
                    <div className="container">
                        <div className="section-title text-center mb-60">
                            <h3 className="sub-title mb-30">OUR SERVICES</h3>
                            <h2 className="title-text mb-30">
                                What we provide for you
                            </h2>
                            <p className="mb-0">
                                We have carefully selected a wide variety of
                                categories so you can easily find a service that
                                you require.
                            </p>
                        </div>

                        <div className="service-items-wrapper text-center clearfix">
                            <div className="service-item clearfix">
                                <div className="item-icon d-flex">
                                    <img
                                        src="images/icons/icon_1.png"
                                        alt="icon_not_found"
                                    />
                                </div>
                                <h3 className="item-title mb-0">Aesthetics</h3>
                            </div>

                            <div className="service-item clearfix">
                                <div className="item-icon d-flex">
                                    <img
                                        src="images/icons/icon_2.png"
                                        alt="icon_not_found"
                                    />
                                </div>
                                <h3 className="item-title mb-0">Beauty</h3>
                            </div>

                            <div className="service-item clearfix">
                                <div className="item-icon d-flex">
                                    <img
                                        src="images/icons/icon_3.png"
                                        alt="icon_not_found"
                                    />
                                </div>
                                <h3 className="item-title mb-0">Education</h3>
                            </div>

                            <div className="service-item clearfix">
                                <div className="item-icon d-flex">
                                    <img
                                        src="images/icons/icon_4.png"
                                        alt="icon_not_found"
                                    />
                                </div>
                                <h3 className="item-title mb-0">
                                    Entertainment
                                </h3>
                            </div>

                            <div className="service-item clearfix">
                                <div className="item-icon d-flex">
                                    <img
                                        src="images/icons/icon_5.png"
                                        alt="icon_not_found"
                                    />
                                </div>
                                <h3 className="item-title mb-0">Florist</h3>
                            </div>

                            <div className="service-item clearfix">
                                <div className="item-icon d-flex">
                                    <img
                                        src="images/icons/icon_6.png"
                                        alt="icon_not_found"
                                    />
                                </div>
                                <h3 className="item-title mb-0">Food</h3>
                            </div>

                            <div className="service-item clearfix">
                                <div className="item-icon d-flex">
                                    <img
                                        src="images/icons/icon_7.png"
                                        alt="icon_not_found"
                                    />
                                </div>
                                <h3 className="item-title mb-0">
                                    Health/Fitness
                                </h3>
                            </div>

                            <div className="service-item clearfix">
                                <div className="item-icon d-flex">
                                    <img
                                        src="images/icons/icon_8.png"
                                        alt="icon_not_found"
                                    />
                                </div>
                                <h3 className="item-title mb-0">Household</h3>
                            </div>

                            <div className="service-item clearfix">
                                <div className="item-icon d-flex">
                                    <img
                                        src="images/icons/icon_9.png"
                                        alt="icon_not_found"
                                    />
                                </div>
                                <h3 className="item-title mb-0">
                                    Motor Vehicle
                                </h3>
                            </div>
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
        </Fragment>
    );
}

export default HomePage;
