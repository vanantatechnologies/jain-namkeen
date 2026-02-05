import React, { useEffect, useRef, useState } from "react";
import "./Whyus.scss";
import jainstore from "../../assets/img/common/jain-chawana-mart.webp";

const faqData = [
    {
        question: "Authentic Taste & Traditional Recipes",
        answer:
            "At Jain Namkin & Sweets, we follow time-tested recipes to deliver authentic taste in every Namkin and sweet, loved by all age groups.",
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
        question: "Wide Variety of Namkin & Sweets",
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
            "Our customers choose us for consistent taste, reliable quality, and the satisfaction of enjoying fresh Namkin and sweets every time.",
    },
];

const Whyus = () => {
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
        <section className="section-about ptb-80" ref={sectionRef}>
            <div className="container custom-container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-xl-10">
                        <div className="row">
                            {/* TITLE */}
                            <div className="col-12 text-center">
                                <h2
                                    className={`font-50 font-black gelica-regular mb-40 ${
                                        visible
                                            ? "animate__animated animate__fadeInUp"
                                            : ""
                                    }`}
                                >
                                    Why <span className="font-primary">us</span>
                                </h2>
                            </div>

                            {/* IMAGE */}
                            <div className="col-12 col-sm-6 mb-4 mb-md-0">
                                <div
                                    className={`about-left ${
                                        visible
                                            ? "animate__animated animate__fadeInUp"
                                            : ""
                                    }`}
                                >
                                    <img
                                        src={jainstore}
                                        alt="Marquees Jain Namkin"
                                        loading="lazy"
                                        className="jain-store img-fluid w-100"
                                    />
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="col-12 col-sm-6">
                                <div className="about-right">
                                    {faqData.map((item, index) => (
                                        <div
                                            className={`we-are ${
                                                visible
                                                    ? "animate__animated animate__fadeInUp"
                                                    : ""
                                            }`}
                                            style={{
                                                animationDelay: visible
                                                    ? `${index * 0.15}s`
                                                    : "0s",
                                            }}
                                            key={index}
                                        >
                                            <div className="client-name font-18 font-black gelica-regular">
                                                {item.question}
                                            </div>

                                            <div className="client-desc font-18 font-black-80 gilroy-regular mt-1 mt-md-2">
                                                {item.answer}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Whyus;
