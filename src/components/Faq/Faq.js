import React, { useState } from "react";
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


/*const faqData = [
    {
        question: "What types of namkeen does Jain Namkeen manufacture?",
        answer:
            "Jain Namkeen manufactures a wide variety of traditional Indian namkeen, including spicy mixtures, sev, bhujia, chivda, fried snacks, and regional specialty namkeen."
    },
    {
        question: "Are Jain Namkeen products made using quality ingredients?",
        answer:
            "Yes, all Jain Namkeen products are prepared using carefully selected, high-quality ingredients to ensure consistent taste, freshness, and hygiene."
    },
    {
        question: "Do you offer Jain-friendly or no-onion, no-garlic products?",
        answer:
            "Yes, Jain Namkeen offers Jain-friendly namkeen options prepared without onion and garlic, adhering to Jain dietary principles."
    },
    {
        question: "Are your products suitable for bulk or wholesale purchase?",
        answer:
            "Yes, Jain Namkeen supplies products for retail, bulk orders, and wholesale distribution, catering to shops, distributors, and corporate requirements."
    },
    {
        question: "How do you ensure hygiene and quality control?",
        answer:
            "Our manufacturing process follows strict hygiene standards and quality control measures at every stage, from raw material sourcing to final packaging."
    },
    {
        question: "Do you provide customized namkeen varieties?",
        answer:
            "Yes, customized namkeen blends and packaging options can be developed based on specific customer or market requirements."
    },
    {
        question: "How should Jain Namkeen products be stored?",
        answer:
            "Namkeen should be stored in a cool, dry place in airtight packaging to maintain freshness and crispness."
    }
];*/


const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <React.Fragment>
            <section className="ptb-80">
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
                                            className={`custom-accordion-item bglight ${
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
