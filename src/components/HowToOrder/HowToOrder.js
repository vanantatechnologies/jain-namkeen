import React, { useEffect, useRef, useState } from "react";
import "./HowToOrder.scss";
import jainstore from "../../assets/img/common/jain-chawana-mart.webp";

const faqData = [
    {
        question: "Authentic Taste & Traditional Recipes",
        answer:
            "At Jain Namkeen & Sweets, we follow time-tested recipes to deliver authentic taste in every namkeen and sweet, loved by all age groups.",
    },
    {
        question: "Premium Quality Ingredients",
        answer:
            "We use carefully selected ingredients and maintain consistent quality to ensure rich flavor, freshness, and the perfect crunch in every bite.",
    },
    {
        question: "Hygienic Preparation & Packaging",
        answer:
            "Our products are prepared under hygienic conditions and packed with care to maintain freshness, taste, and quality from our kitchen to your home.",
    },
    {
        question: "Wide Variety of Namkeen & Sweets",
        answer:
            "From spicy mixtures and crispy snacks to delicious traditional sweets, we offer a wide range of options for daily cravings and festive celebrations.",
    },
    {
        question: "Jain-Friendly Options Available",
        answer:
            "We provide Jain-friendly choices with no onion and no garlic options wherever applicable, ensuring purity without compromising on taste.",
    },
    {
        question: "Trusted by Customers for Consistency",
        answer:
            "Our customers choose us for consistent taste, reliable quality, and the satisfaction of enjoying fresh namkeen and sweets every time.",
    },
];

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
        <section className="section-howto-order ptb-80" ref={sectionRef}>
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

                            {/* IMAGE */}
                            <div className="col-12 col-sm-6 mb-4 mb-md-0">
                                <div
                                    className={`howto-order-left ${
                                        visible
                                            ? "animate__animated animate__fadeInUp"
                                            : ""
                                    }`}
                                >
                                    <div className="font-22 gelica-medium-italic font-primary mb-3">
                                        Ordering from Jain Namkeen is simple. Choose your product and contact us directly.
                                    </div>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="col-12 col-sm-6">
                                <div className="howto-order-right">
                                    <div className="quick-order">
                                        <span className="step-number">1</span>
                                        <h4 className="font-18 font-black gelica-regular">Choose Your Product</h4>
                                        <p className="font-18 font-black-80 gilroy-regular mt-1 mt-md-2">Browse products and click “Order Now”.</p>
                                    </div>
                                    <div className="quick-order">
                                        <span className="step-number">2</span>
                                        <h4 className="client-name font-18 font-black gelica-regular">Contact Us</h4>
                                        <p className="font-18 font-black-80 gilroy-regular mt-1 mt-md-2">Order via WhatsApp, Email, or Inquiry Form.</p>
                                    </div>
                                    <div className="quick-order">
                                        <span className="step-number">3</span>
                                        <h4 className="client-name font-18 font-black gelica-regular">Confirm & Receive</h4>
                                        <p className="font-18 font-black-80 gilroy-regular mt-1 mt-md-2">We confirm your order and delivery details.</p>
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
