import React from 'react';
import './Contactus.scss';
import InnerBanner from "../../components/InnerBanner/InnerBanner";
import Footer from "../../components/Footer/Footer";
import phoneIcon from "../../assets/img/svg/phone.svg";
import emailIcon from "../../assets/img/svg/email.svg";
import globeIcon from "../../assets/img/svg/globe.svg";
import jainChawana from "../../assets/img/common/jain-chawana.webp";
import jainNamkeen from "../../assets/img/common/jain-namkeen.webp";
import InquiryForm from "../../components/InquiryForm/InquiryForm";


const Contactus = () => {
    return (
        <React.Fragment>
            <InnerBanner title="Contact us" />

            <section className="section-contactus ptb-80">
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-12 col-sm-5 col-xxl-6 order-md-2">
                            <div className="contactus-right-main h-100">
                                <InquiryForm/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-7 col-xxl-6 order-md-1">
                            <div className="contactus-left-main">
                                <div className="contactus-left">
                                    <div className="inner-one">
                                        <h3 className="font-22 font-black gelica-regular mb-2">
                                            Jain Chawana Mart (Delhi Darwaja)
                                        </h3>

                                        <p className="font-16 font-black-80 gilroy-regular mb-2 mb-md-3">
                                            In Lalakaka Sabji Market, Outside Delhi Darwaja, Dudheshwar Rd,
                                            Ahmedabad – 380004
                                        </p>

                                        <ul className="list-unstyled">
                                            <li>
                    <span className="icon-box">
                        <img
                            src={phoneIcon}
                            alt="Phone icon"
                            loading="lazy"
                        />
                    </span>

                                                <div className="phone-number">
                                                    <a href="tel:+919723535365">+91 97235 35365</a>
                                                    <a href="tel:+917778026236"> +91 77780 26236</a>
                                                    {/*<a href="tel:+917778028580"> +91 77780 28580</a>*/}
                                                </div>

                                            </li>

                                            <li>
                <span className="icon-box">
                    <img
                        src={emailIcon}
                        alt="Email icon"
                        loading="lazy"
                    />
                </span>
                                                <a href="mailto:jainchawana1948@gmail.com">
                                                    jainchawana1948@gmail.com
                                                </a>
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
                                                    href="https://www.jainnamkin.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    www.jainnamkin.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="inner-two d-none d-lg-block">
                                        <img
                                            src={jainChawana}
                                            alt="Jain Chawana"
                                            loading="lazy"
                                            className="jain-store img-fluid w-100"
                                        />
                                    </div>
                                </div>

                                <div className="contactus-left">
                                    <div className="inner-one">
                                        <h3 className="font-22 font-black gelica-regular mb-2">
                                            Jain Namkin (Shahibaug)
                                        </h3>

                                        <p className="font-16 font-black-80 gilroy-regular mb-2 mb-md-3">
                                            G-44, Ashta Mangal Complex, Near HDFC Bank, Shahibaug Rd, Ahmedabad – 380004
                                        </p>

                                        <ul className="list-unstyled">
                                            <li>
                    <span className="icon-box">
                        <img
                            src={phoneIcon}
                            alt="Phone icon"
                            loading="lazy"
                        />
                    </span>

                                                <div className="phone-number">
                                                    <a href="tel:+919723535365">+91 079 2562 6529</a>
                                                </div>

                                            </li>

                                            <li>
                <span className="icon-box">
                    <img
                        src={emailIcon}
                        alt="Email icon"
                        loading="lazy"
                    />
                </span>
                                                <a href="mailto:jainchawana1948@gmail.com">
                                                    jainchawana1948@gmail.com
                                                </a>
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
                                                    href="https://www.jainnamkin.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    www.jainnamkin.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="inner-two d-none d-lg-block">
                                        <img
                                            src={jainNamkeen}
                                            alt="Jain namkeen"
                                            loading="lazy"
                                            className="jain-store img-fluid w-100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <div className="location-map">
                                <iframe
                                    title="Jain Chawana Mart - Delhi Darwaja"
                                    src="https://www.google.com/maps?q=Jain%20Chawana%20Mart%20Delhi%20Darwaja%20Ahmedabad&output=embed"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6">
                            <div className="location-map">
                                <iframe
                                    title="Jain Namkin - Shahibaug"
                                    src="https://www.google.com/maps?q=Jain%20Namkin%20Shahibaug%20Ahmedabad&output=embed"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer/>
        </React.Fragment>
    );
};

export default Contactus;
