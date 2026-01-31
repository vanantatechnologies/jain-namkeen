import React from "react";
import "./Footer.scss"; // optional (if you have footer styles)

// Images Imports
import footerLogo from "../../assets/img/jain-namkeen.svg";
import phoneIcon from "../../assets/img/svg/phone.svg";
import emailIcon from "../../assets/img/svg/email.svg";
import globeIcon from "../../assets/img/svg/globe.svg";
import buildingIcon from "../../assets/img/svg/building.svg";
import fbIcon from "../../assets/img/common/fb.svg";
import instaIcon from "../../assets/img/common/insta.svg";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <section className="section-footer position-relative" id="contactus">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-main">
                            <div className="footer-container">
                                <div className="footer-left">
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

                                <div className="footer-right">
                                    <div className="inner-box">
                                        <div className="footer-menus">
                                            <h4 className="font-24 text-white gelica-regular">Links</h4>
                                            <div className="quick-contact">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <Link to="/" className="font-18 text-white gilroy-regular text-decoration-none">
                                                            Home
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/about" className="font-18 text-white gilroy-regular text-decoration-none">
                                                            About us
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/products" className="font-18 text-white gilroy-regular text-decoration-none">
                                                            Products
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/gallery" className="font-18 text-white gilroy-regular text-decoration-none">
                                                            Gallery
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/contact" className="font-18 text-white gilroy-regular text-decoration-none">
                                                            Contact us
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="inner-box">
                                        <div className="footer-menus">
                                            <h4 className="font-24 text-white gelica-regular">Contact us</h4>
                                            <div className="footer-quick-contact">
                                                <ul>
                                                    <li>
                                                        <span className="icon-box">
                                                          <img
                                                              src={phoneIcon}
                                                              alt="Phone icon"
                                                              loading="lazy"
                                                          />
                                                        </span>
                                                        <a href="tel:+918460300847">+91 8460300847</a>
                                                    </li>

                                                    <li>
                            <span className="icon-box">
                              <img
                                  src={emailIcon}
                                  alt="Email icon"
                                  loading="lazy"
                              />
                            </span>
                                                        <a href="mailto:info@jainnamkeen.com">info@jainnamkeen.com</a>
                                                    </li>

                                                    <li>
                            <span className="icon-box">
                              <img
                                  src={globeIcon}
                                  alt="Website icon"
                                  loading="lazy"
                              />
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
          aria-label="Visit Jain Namkeen Facebook page"
      >
        <img
            src={fbIcon}
            alt="Jain Namkeen on Facebook"
            loading="lazy"
        />
      </a>
    </span>
                                                    </li>

                                                    <li>
    <span className="icon-box">
      <a
          href="https://www.instagram.com/jainnamkin?igsh=dDJiMjR3OWx1ZXN0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Jain Namkeen Instagram profile"
      >
        <img
            src={instaIcon}
            alt="Jain Namkeen on Instagram"
            loading="lazy"
        />
      </a>
    </span>
                                                    </li>
                                                </ul>
                                            </div>


                                        </div>
                                    </div>

                                    <div className="inner-box">
                                        <div className="footer-menus">
                                            <h4 className="font-24 text-white gelica-regular">Our location</h4>
                                            <div className="footer-quick-contact">
                                                <ul>
                                                    <li>
                                                        <span className="icon-box">
                                                          <img
                                                              src={buildingIcon}
                                                              alt="Office icon"
                                                              loading="lazy"
                                                          />
                                                        </span>

                                                        <div className="font-16 text-white">
                                                            In Lalakaka Sabji Market, Outside Delhi Darwaja, Dudheshwar Rd,
                                                            Ahmedabad – 380004
                                                        </div>
                                                    </li>
                                                    <li className="mt-3">
                                                        <span className="icon-box">
                                                          <img
                                                              src={buildingIcon}
                                                              alt="Office icon"
                                                              loading="lazy"
                                                          />
                                                        </span>

                                                        <div className="font-16 text-white">
                                                            G-44, Ashta Mangal Complex, Near HDFC Bank, Shahibaug Rd, Ahmedabad – 380004
                                                        </div>
                                                    </li>
                                                </ul>
                                                {/*<a href="#" className="font-24 text-white gelica-regular text-decoration-none mt-3">View More Branches</a>*/}
                                            </div>
                                        </div>
                                    </div>
                                    {/* inner-box end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copy-right">
                    <div className="left">
                        Copyright © 2026 JAIN NAMKEEN. All Rights Reserved
                    </div>
                    <div className="right">
                        Designed and Developed by <a href="/about">Sunny Soni.</a>
                    </div>
                </div>
            </div>
            <div className="patterns">
                <div className="pattern-design"></div>
            </div>
        </section>
    );
};

export default Footer;
