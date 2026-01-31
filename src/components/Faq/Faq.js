import React, { useState } from "react";
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

// -- JSON FAQ Data --
const faqData = [
    {
        question: "Do you use palm oil or preservatives in your products?",
        answer:
            "No. We do not use palm oil or any preservatives. All our products are prepared using pure groundnut oil and cottonseed oil in an appropriate ratio, ensuring quality and authenticity."
    },
    {
        question: "How can I place an order?",
        answer:
            'You can place an order by sending a message on our WhatsApp number <a href="https://wa.me/919XXXXXXXXX" target="_blank" rel="noopener noreferrer">+91 9XXXXXXXXX</a> with the list of items, required quantities, and complete delivery address. Orders are usually delivered within 3–5 working days.'
    },
    {
        question: "What is the shelf life of your products?",
        answer:
            "The shelf life of all our products is 2 months when stored in a cool, dry place."
    },
    {
        question: "Do you accept bulk or wholesale orders?",
        answer:
            'Yes, we accept bulk and wholesale orders. For bulk inquiries, please contact us via WhatsApp at <a href="https://wa.me/919XXXXXXXXX" target="_blank" rel="noopener noreferrer">+91 9XXXXXXXXX</a> or email us at <a href="mailto:contact@yourbrandname.com">contact@yourbrandname.com</a>.'
    }
];
const Faq = () => {
    const location = useLocation();

    const isGalleryPage = location.pathname === "/gallery";

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <React.Fragment>
            <section className={`ptb-80 ${location.pathname === "/gallery" ? "bglight" : ""}`}>
            <div className="container custom-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="font-50 font-black gelica-regular text-center mb-40">
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
                                            }`}
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
        </React.Fragment>
    );
};

export default Faq;
