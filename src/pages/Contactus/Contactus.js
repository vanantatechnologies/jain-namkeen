import React, { useEffect, useRef, useState } from 'react';
import './Contactus.scss';
import { Helmet } from "react-helmet-async";
import InnerBanner from "../../components/InnerBanner/InnerBanner";
import phoneIcon from "../../assets/img/svg/phone.svg";
import emailIcon from "../../assets/img/svg/email.svg";
import globeIcon from "../../assets/img/svg/globe.svg";
import jainChawana from "../../assets/img/common/jain-chawana.webp";
import jainNamkeen from "../../assets/img/common/jain-namkeen.webp";
import InquiryForm from "../../components/InquiryForm/InquiryForm";

const Contactus = () => {
    const sectionRef = useRef(null);
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

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <title>Contact Us | Jain Namkeen – Get in Touch</title>

                <meta
                    name="description"
                    content="Contact Jain Namkeen for product inquiries, bulk orders, and business opportunities. We’re happy to assist you."
                />

                <meta
                    name="keywords"
                    content="Contact Jain Namkeen, namkeen supplier, Indian snacks contact"
                />

                <link rel="canonical" href="http://www.jainnamkin.com/contact-us" />

                {/* Open Graph */}
                <meta property="og:title" content="Contact Us | Jain Namkeen" />
                <meta
                    property="og:description"
                    content="Get in touch with Jain Namkeen for orders and inquiries."
                />
                <meta property="og:url" content="http://www.jainnamkin.com/contact-us" />
                <meta
                    property="og:image"
                    content="http://www.jainnamkin.com/images/contact-og.jpg"
                />
                <meta property="og:type" content="website" />

                {/* Local Business Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Jain Namkeen",
                        "url": "http://www.jainnamkin.com/",
                        "telephone": "+91-XXXXXXXXXX",
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "IN"
                        }
                    })}
                </script>
            </Helmet>
            <InnerBanner title="Contact us" />

            <section
                ref={sectionRef}
                className="section-contactus ptb-80"
            >
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-12 col-sm-5 col-xxl-6 order-md-2">
                            <div
                                className={`contactus-right-main h-100 ${
                                    visible ? "animate__animated animate__fadeInUp" : ""
                                }`}
                                style={{ animationDelay: "0s" }}
                            >
                                <InquiryForm />
                            </div>
                        </div>

                        <div className="col-12 col-sm-7 col-xxl-6 order-md-1">
                            <div className="contactus-left-main">
                                <div
                                    className={`contactus-left ${
                                        visible ? "animate__animated animate__fadeInUp" : ""
                                    }`}
                                    style={{ animationDelay: "0.2s" }}
                                >
                                    <div
                                        className={`inner-one ${
                                            visible ? "animate__animated animate__fadeInUp" : ""
                                        }`}
                                        style={{ animationDelay: "0.3s" }}
                                    >
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
                                                    <img src={phoneIcon} alt="" loading="lazy" />
                                                </span>
                                                <div className="phone-number">
                                                    <a href="tel:+919723535365">+91 97235 35365</a>
                                                    <a href="tel:+917778026236"> +91 77780 26236</a>
                                                </div>
                                            </li>

                                            <li>
                                                <span className="icon-box">
                                                    <img src={emailIcon} alt="" loading="lazy" />
                                                </span>
                                                <a href="mailto:jainchawana1948@gmail.com">
                                                    jainchawana1948@gmail.com
                                                </a>
                                            </li>

                                            <li>
                                                <span className="icon-box">
                                                    <img src={globeIcon} alt="" loading="lazy" />
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

                                    <div
                                        className={`inner-two d-none d-lg-block ${
                                            visible ? "animate__animated animate__fadeInUp" : ""
                                        }`}
                                        style={{ animationDelay: "0.4s" }}
                                    >
                                        <img
                                            src={jainChawana}
                                            alt="Jain Chawana"
                                            loading="lazy"
                                            className="jain-store img-fluid w-100"
                                        />
                                    </div>
                                </div>

                                <div
                                    className={`contactus-left ${
                                        visible ? "animate__animated animate__fadeInUp" : ""
                                    }`}
                                    style={{ animationDelay: "0.6s" }}
                                >
                                    <div
                                        className={`inner-one ${
                                            visible ? "animate__animated animate__fadeInUp" : ""
                                        }`}
                                        style={{ animationDelay: "0.7s" }}
                                    >
                                        <h3 className="font-22 font-black gelica-regular mb-2">
                                            Jain Namkin (Shahibaug)
                                        </h3>

                                        <p className="font-16 font-black-80 gilroy-regular mb-2 mb-md-3">
                                            G-44, Ashta Mangal Complex, Near HDFC Bank, Shahibaug Rd, Ahmedabad – 380004
                                        </p>

                                        <ul className="list-unstyled">
                                            <li>
                                                <span className="icon-box">
                                                    <img src={phoneIcon} alt="" loading="lazy" />
                                                </span>
                                                <div className="phone-number">
                                                    <a href="tel:+919723535365">+91 079 2562 6529</a>
                                                </div>
                                            </li>

                                            <li>
                                                <span className="icon-box">
                                                    <img src={emailIcon} alt="" loading="lazy" />
                                                </span>
                                                <a href="mailto:jainchawana1948@gmail.com">
                                                    jainchawana1948@gmail.com
                                                </a>
                                            </li>

                                            <li>
                                                <span className="icon-box">
                                                    <img src={globeIcon} alt="" loading="lazy" />
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

                                    <div
                                        className={`inner-two d-none d-lg-block ${
                                            visible ? "animate__animated animate__fadeInUp" : ""
                                        }`}
                                        style={{ animationDelay: "0.8s" }}
                                    >
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
                            <div
                                className={`location-map ${
                                    visible ? "animate__animated animate__fadeInUp" : ""
                                }`}
                                style={{ animationDelay: "1s" }}
                            >
                                <iframe
                                    title="Jain Chawana Mart - Delhi Darwaja"
                                    src="https://www.google.com/maps?q=Jain%20Chawana%20Mart%20Delhi%20Darwaja%20Ahmedabad&output=embed"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6">
                            <div
                                className={`location-map ${
                                    visible ? "animate__animated animate__fadeInUp" : ""
                                }`}
                                style={{ animationDelay: "1.1s" }}
                            >
                                <iframe
                                    title="Jain Namkin - Shahibaug"
                                    src="https://www.google.com/maps?q=Jain%20Namkin%20Shahibaug%20Ahmedabad&output=embed"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Contactus;
