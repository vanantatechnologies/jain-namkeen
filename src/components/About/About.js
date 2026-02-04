import React, { useEffect, useRef, useState } from "react";
import "./About.scss";

const About = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // animate once
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="ptb-80" ref={sectionRef}>
            <div className="container custom-container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-xl-10">
                        <div className="row">
                            {/* TITLE */}
                            <div className="col-12 col-sm-4">
                                <h2
                                    className={`font-50 font-black gelica-regular mb-40 ${
                                        isVisible
                                            ? "animate__animated animate__fadeInUp"
                                            : ""
                                    }`}
                                >
                                    About <span className="font-primary">Jain Namkeen</span>
                                </h2>
                            </div>

                            {/* CONTENT */}
                            <div className="col-12 col-sm-8">
                                <div
                                    className={`font-22 gelica-medium-italic mb-2 mb-md-3 font-primary ${
                                        isVisible
                                            ? "animate__animated animate__fadeInUp "
                                            : ""
                                    }`}
                                >
                                    Authentic Namkeen Since 1948
                                </div>

                                <p
                                    className={`font-18 font-black-80 gilroy-regular mb-2 mb-md-3 ${
                                        isVisible
                                            ? "animate__animated animate__fadeInUp"
                                            : ""
                                    }`}
                                >
                                    Founded in 1948, Jain Chawana Mart is a name synonymous with authenticity, tradition, and unmatched taste. What began as a humble cart in Ahmedabad has grown into one of the city’s most iconic namkeen destinations—trusted across generations.
                                </p>
                                <ul className={`list-unstyled about-us-points ${
                                    isVisible
                                        ? "animate__animated animate__fadeInUp animate__delay-1s"
                                        : ""
                                }`}>
                                    <li className="font-18 font-black-80 gilroy-regular">Over 75 years of authentic namkeen legacy</li>
                                    <li className="font-18 font-black-80 gilroy-regular">Original recipes crafted with honesty & care</li>
                                    <li className="font-18 font-black-80 gilroy-regular">Iconic flavors loved across generations</li>
                                    <li className="font-18 font-black-80 gilroy-regular">Two original outlets, countless loyal customers</li>
                                </ul>


                                <a
                                    href="/about"
                                    className={`font-18 gilroy-medium common-primary-btn mt-3 mt-md-4 ${
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
            </div>
        </section>
    );
};

export default About;
