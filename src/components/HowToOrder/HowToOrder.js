import React, { useEffect, useRef, useState } from "react";
import "./HowToOrder.scss";

const HowToOrder = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // animate once
                }
            },
            { threshold: 0.25 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section-howto-order ptb-80" id="howto-order" ref={sectionRef}>
            <div className="container custom-container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-xl-10">
                        <div className="row">
                            {/* TITLE */}
                            <div className="col-12">
                                <h2
                                    className={`font-50 font-black gelica-regular mb-40 ${
                                        visible
                                            ? "animate__animated animate__fadeInUp"
                                            : ""
                                    }`}
                                >
                                    How to <span className="font-primary">Order</span>
                                </h2>
                            </div>

                            {/* IMAGE / LEFT SIDE */}
                            <div className="col-12 col-sm-6 mb-4 mb-md-0">
                                <div
                                    className={`howto-order-left ${
                                        visible
                                            ? "animate__animated animate__fadeInUp animate__delay-1s"
                                            : ""
                                    }`}
                                >
                                    <div className="font-22 gelica-medium-italic font-primary mt--10">
                                        Ordering from Jain Namkin is simple. Choose your product and contact us directly.
                                    </div>
                                </div>
                            </div>

                            {/* CONTENT / RIGHT SIDE */}
                            <div className="col-12 col-sm-6">
                                <div className="howto-order-right">
                                    <div
                                        className={`quick-order ${
                                            visible
                                                ? "animate__animated animate__fadeInUp animate__delay-1s"
                                                : ""
                                        }`}
                                    >
                                        <span className="step-number">1</span>
                                        <h4 className="font-18 font-black gelica-regular">
                                            Choose Your Product
                                        </h4>
                                        <p className="font-18 font-black-80 gilroy-regular mt-1 mt-md-2">
                                            Browse products and click “Order Now”.
                                        </p>
                                    </div>
                                    <div
                                        className={`quick-order ${
                                            visible
                                                ? "animate__animated animate__fadeInUp animate__delay-2s"
                                                : ""
                                        }`}
                                    >
                                        <span className="step-number">2</span>
                                        <h4 className="client-name font-18 font-black gelica-regular">
                                            Contact Us
                                        </h4>
                                        <p className="font-18 font-black-80 gilroy-regular mt-1 mt-md-2">
                                            Order via WhatsApp, Email, or Inquiry Form.
                                        </p>
                                    </div>
                                    <div
                                        className={`quick-order ${
                                            visible
                                                ? "animate__animated animate__fadeInUp animate__delay-3s"
                                                : ""
                                        }`}
                                    >
                                        <span className="step-number">3</span>
                                        <h4 className="client-name font-18 font-black gelica-regular">
                                            Confirm & Receive
                                        </h4>
                                        <p className="font-18 font-black-80 gilroy-regular mt-1 mt-md-2">
                                            We confirm your order and delivery details.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToOrder;
