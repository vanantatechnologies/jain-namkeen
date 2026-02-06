import React, { useEffect, useRef, useState } from "react";
import "./HomeBanner.scss";
import ProductBanner from "../../assets/img/banner-product-new.webp";

const HomeBanner = () => {
    const bannerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // animate only once
                }
            },
            { threshold: 0.3 }
        );

        if (bannerRef.current) {
            observer.observe(bannerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section-home-banner position-relative" ref={bannerRef}>
            <div className="container custom-container">
                <div className="row align-items-center">
                    {/* IMAGE */}
                    <div className="col-md-5 text-center order-md-2">
                        <div
                            className={`main-banner ${
                                isVisible
                                    ? "animate__animated animate__fadeIn"
                                    : ""
                            }`}
                        >
                            <img
                                src={ProductBanner}
                                alt="Marquees Jain Namkin"
                                loading="lazy"
                                className="jain-store img-fluid w-100"
                                width={1250} height={805} />
                            />
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="col-md-7 order-md-1">
                        <div className="home-banner" style={{ maxWidth: "700px" }}>
                            <h1
                                className={`font-70 text-white gelica-regular overflow-hidden ${
                                    isVisible
                                        ? "animate__animated animate__fadeInUp"
                                        : ""
                                }`}
                            >
                                Welcome to Jain Namkin & Jain Chawana mart
                            </h1>

                            <p
                                className={`font-18 text-white gilroy-regular mt-3 ${
                                    isVisible
                                        ? "animate__animated animate__fadeInUp animate__delay-1s"
                                        : ""
                                }`}
                                style={{ maxWidth: "700px" }}
                            >
                                At Jain Namkin, we take pride in offering a wide range of savory treats, meticulously crafted to tantalize your taste buds
                            </p>

                            <a
                                href="/about"
                                className={`font-18 gilroy-medium common-primary-btn mt-sm-2 mt-md-4 ${
                                    isVisible
                                        ? "animate__animated animate__fadeInUp animate__delay-2s"
                                        : ""
                                }`}
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
