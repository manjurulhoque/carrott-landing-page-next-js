import React from "react";
import Row from "../styled/Row";
import { Col, Container } from "@bootstrap-styled/v4";

const SiteNav = () => {
    return (
        <header
            id="header-section"
            className="header-section sticky-header clearfix"
        >
            <div className="container">
                <Row>
                    <Col lg={3} md={12} sm={12}>
                        <div className="brand-logo clearfix">
                            <a
                                href="#thetop"
                                className="brand-link nav-link scrollspy-btn float-left"
                            >
                                <img
                                    src="images/logo/logo_1.svg"
                                    alt="logo_not_found"
                                />
                                Carrott
                            </a>
                            <button
                                type="button"
                                id="sidebar-collapse"
                                className="mobile-menu-btn float-right"
                            >
                                <i className="fal fa-bars"></i>
                            </button>
                        </div>
                    </Col>

                    <Col lg={9} md={12} sm={12}>
                        <div className="main-menubar ul-li clearfix">
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
                    </Col>
                </Row>
            </div>
        </header>
    );
};

export default SiteNav;
