import React, { useEffect, useRef, useState } from "react";
import "./Footer.scss";
import footerLogo from "../../assets/img/jain-namkeen.svg";
import phoneIcon from "../../assets/img/svg/phone.svg";
import emailIcon from "../../assets/img/svg/email.svg";
import globeIcon from "../../assets/img/svg/globe.svg";
import buildingIcon from "../../assets/img/svg/building.svg";
import fbIcon from "../../assets/img/common/fb.svg";
import instaIcon from "../../assets/img/common/insta.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    const footerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        if (footerRef.current) observer.observe(footerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={footerRef}
            className="section-footer position-relative"
            id="contactus"
        >
            <div className="container custom-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-main">
                            <div className="footer-container">
                                <div
                                    className={`footer-left ${
                                        visible ? "animate__animated animate__fadeInUp" : ""
                                    }`}
                                    style={{ animationDelay: "0s" }}
                                >
                                    <a
                                        className="mb-2 mb-md-3 text-sm-center text-lg-start"
                                        href="/about"
                                    >
                                        <img
                                            src={footerLogo}
                                            className="company-logo pb-1 mb-1"
                                            loading="lazy"
                                            width="160"
                                            alt="Footer Logo"
                                        />
                                    </a>

                                    <p className="font-18 text-white gilroy-regular mb-2">
                                        We are a namkeen / farsan brand based in Ahmedabad offering the utmost best quality namkeen snacks made from top-notch quality of ingredients since 1948. Our products are made in high quality groundnut oil and use the highest quality Besan flour and all.
                                    </p>
                                </div>

                                <div
                                    className={`footer-right ${
                                        visible ? "animate__animated animate__fadeInUp" : ""
                                    }`}
                                    style={{ animationDelay: "0.2s" }}
                                >
                                    <div
                                        className={`inner-box ${
                                            visible ? "animate__animated animate__fadeInUp" : ""
                                        }`}
                                        style={{ animationDelay: "0.4s" }}
                                    >
                                        <div className="footer-menus">
                                            <h4 className="font-24 text-white gelica-regular">Links</h4>
                                            <div className="quick-contact">
                                                <ul className="list-unstyled">
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/about">About us</Link></li>
                                                    <li><Link to="/products">Products</Link></li>
                                                    <li><Link to="/gallery">Gallery</Link></li>
                                                    <li><Link to="/contact">Contact us</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`inner-box ${
                                            visible ? "animate__animated animate__fadeInUp" : ""
                                        }`}
                                        style={{ animationDelay: "0.6s" }}
                                    >
                                        <div className="footer-menus">
                                            <h4 className="font-24 text-white gelica-regular">Contact us</h4>
                                            <div className="footer-quick-contact">
                                                <ul>
                                                    <li>
                                                        <span className="icon-box">
                                                            <img src={phoneIcon} alt="" />
                                                        </span>
                                                        <a href="tel:+918460300847">+91 8460300847</a>
                                                    </li>
                                                    <li>
                                                        <span className="icon-box">
                                                            <img src={emailIcon} alt="" />
                                                        </span>
                                                        <a href="mailto:info@jainnamkeen.com">info@jainnamkeen.com</a>
                                                    </li>
                                                    <li>
                                                        <span className="icon-box">
                                                            <img src={globeIcon} alt="" />
                                                        </span>
                                                        <a
                                                            href="https://www.jainnamkeen.com"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            www.jainnamkeen.com
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="social-media">
                                                <ul>
                                                    <li>
                                                        <span className="icon-box">
                                                            <a
                                                                href="https://www.facebook.com/share/17qS2K4pVb/"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <img src={fbIcon} alt="" />
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="icon-box">
                                                            <a
                                                                href="https://www.instagram.com/jainnamkin?igsh=dDJiMjR3OWx1ZXN0"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <img src={instaIcon} alt="" />
                                                            </a>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`inner-box ${
                                            visible ? "animate__animated animate__fadeInUp" : ""
                                        }`}
                                        style={{ animationDelay: "0.8s" }}
                                    >
                                        <div className="footer-menus">
                                            <h4 className="font-24 text-white gelica-regular">Our location</h4>
                                            <div className="footer-quick-contact">
                                                <ul>
                                                    <li>
                                                        <span className="icon-box">
                                                            <img src={buildingIcon} alt="" />
                                                        </span>
                                                        <div className="font-16 text-white">
                                                            In Lalakaka Sabji Market, Outside Delhi Darwaja, Dudheshwar Rd,
                                                            Ahmedabad – 380004
                                                        </div>
                                                    </li>
                                                    <li className="mt-3">
                                                        <span className="icon-box">
                                                            <img src={buildingIcon} alt="" />
                                                        </span>
                                                        <div className="font-16 text-white">
                                                            G-44, Ashta Mangal Complex, Near HDFC Bank, Shahibaug Rd, Ahmedabad – 380004
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`copy-right ${
                        visible ? "animate__animated animate__fadeInUp" : ""
                    }`}
                    style={{ animationDelay: "1s" }}
                >
                    <div className="left">
                        Copyright © 2026 JAIN NAMKEEN. All Rights Reserved
                    </div>
                    <div className="right">
                        Designed and Developed by <a href="/about">Sunny Soni.</a>
                    </div>
                </div>
            </div>

            {/*<div className="patterns">
                <div className="pattern-design"></div>
            </div>*/}

            <div className="for-footer">
                <div className="section-with-curve white"></div>
            </div>

        </section>
    );
};

export default Footer;
