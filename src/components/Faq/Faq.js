import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Faq.scss";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const faqData = [
    {
        question: "Do you use palm oil or preservatives in your products?",
        answer:
            "No. We do not use palm oil or any preservatives. All our products are prepared using pure groundnut oil and cottonseed oil in an appropriate ratio, ensuring quality and authenticity."
    },
    {
        question: "How can I place an order?",
        answer:
            'You can place an order by sending a message on our WhatsApp number <a href="https://wa.me/918460300947" target="_blank" rel="noopener noreferrer">+91 8460300947</a> with the list of items, required quantities, and complete delivery address. Orders are usually delivered within 3–5 working days.'
    },
    {
        question: "What is the shelf life of your products?",
        answer:
            "The shelf life of all our products is 2 months when stored in a cool, dry place."
    },
    {
        question: "Do you accept bulk or wholesale orders?",
        answer:
            'Yes, we accept bulk and wholesale orders. For bulk inquiries, please contact us via WhatsApp at <a href="https://wa.me/918460300947" target="_blank" rel="noopener noreferrer">+91 8460300947</a> or email us at <a href="mailto:jainchawanamart1948@gmail.com">jainchawanamart1948@gmail.com</a>.'
    }
];

const Faq = () => {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);
    const faqRef = useRef(null);
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

        if (faqRef.current) observer.observe(faqRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={faqRef}
            className={`ptb-80 ${location.pathname === "/gallery" ? "bglight" : ""}`}
        >
            <div className="container custom-container">
                <div className="row">
                    <div className="col-md-12">
                        <h2
                            className={`font-50 font-black gelica-regular text-center mb-40 ${
                                visible ? "animate__animated animate__fadeInUp" : ""
                            }`}
                        >
                            FAQ
                        </h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-8">
                        <div className="faq-main">
                            <Accordion
                                allowZeroExpanded
                                preExpanded={[0]}
                                className="border-0"
                                onChange={(uuids) =>
                                    setActiveIndex(uuids.length ? uuids[0] : null)
                                }
                            >
                                {faqData.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        uuid={index}
                                        className={`custom-accordion-item bglightnew ${
                                            activeIndex === index ? "active" : ""
                                        } ${visible ? "animate__animated animate__fadeInUp" : ""}`}
                                        style={{
                                            animationDelay: visible
                                                ? `${index * 0.2}s`
                                                : "0s",
                                        }}
                                    >
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="font-18 font-black gelica-regular custom-accordion-button">
                                                {item.question}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel className="custom-accordion-panel">
                                            <p
                                                className="font-18 font-black-80 gilroy-regular"
                                                dangerouslySetInnerHTML={{
                                                    __html: item.answer,
                                                }}
                                            />
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
