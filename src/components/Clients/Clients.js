import React from "react";
import Slider from "react-slick";
import "./Clients.scss";
import abb from "../../assets/img/common/clients/clients.png";

// OPTIONAL (if you want same arrow images like ProductCategories)
import rightarrow from "../../assets/img/right-arrow.svg";
import leftarrow from "../../assets/img/left-arrow.svg";

/* =========================
   Client Data (JSON)
========================= */
const clientData = [
    {
        image: abb,
        imageAlt: "Client Logo",
        name: "Rohit Mehta",
        description:
            "Jain Namkeen & Sweets has the perfect balance of taste and freshness. Their namkeen is always crispy and full of flavor, and the sweets are absolutely delicious.",
        location: "Ahmedabad",
    },
    {
        image: abb,
        imageAlt: "Client Logo",
        name: "Neha Shah",
        description:
            "The quality is consistently excellent. I especially love their Jain-friendly options—great taste, hygienic packing, and always fresh delivery.",
        location: "Surat",
    },
    {
        image: abb,
        imageAlt: "Client Logo",
        name: "Amit Patel",
        description:
            "Best place for authentic namkeen and sweets. Their products are perfect for festivals and family functions. Everyone in my home loves the taste.",
        location: "Vadodara",
    },
    {
        image: abb,
        imageAlt: "Client Logo",
        name: "Priya Desai",
        description:
            "Amazing variety and premium quality. The sweets are rich in taste and the namkeen stays fresh for a long time. Highly recommended!",
        location: "Rajkot",
    },
];


/* =========================
   Custom Arrows
========================= */
const NextArrow = ({ onClick, currentSlide, slideCount, slidesToShow }) => {
    const isDisabled = currentSlide >= slideCount - slidesToShow;

    return (
        <button
            type="button"
            className={`custom-arrow next ${isDisabled ? "disabled" : ""}`}
            onClick={onClick}
            disabled={isDisabled}
            aria-label="Next Slide"
        >
            {/* If using icons */}
            <img src={rightarrow} alt="arrow" className="arrow-size" />

            {/* If you want text arrow instead, remove img and use this */}
            {/* → */}
        </button>
    );
};

const PrevArrow = ({ onClick, currentSlide }) => {
    const isDisabled = currentSlide === 0;

    return (
        <button
            type="button"
            className={`custom-arrow prev ${isDisabled ? "disabled" : ""}`}
            onClick={onClick}
            disabled={isDisabled}
            aria-label="Previous Slide"
        >
            {/* If using icons */}
            <img src={leftarrow} alt="arrow" className="arrow-size" />

            {/* If you want text arrow instead, remove img and use this */}
            {/* ← */}
        </button>
    );
};

/* =========================
   Clients Component
========================= */
const Clients = () => {
    // Dynamically set slidesToShow based on window width
    let defaultSlides = 2;

    if (typeof window !== "undefined") {
        const width = window.innerWidth;

        if (width < 768) defaultSlides = 1.15; // mobile
        else if (width < 992) defaultSlides = 1.5; // tablet
        else defaultSlides = 2; // desktop
    }

    const settings = {
        arrows: true,
        dots: false,
        speed: 500,
        slidesToShow: defaultSlides,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        nextArrow: <NextArrow slidesToShow={defaultSlides} />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1.15 } }, // mobile
            { breakpoint: 992, settings: { slidesToShow: 1.5 } }, // tablet
            { breakpoint: 1200, settings: { slidesToShow: 2 } }, // desktop
        ],
    };

    return (
        <section className="ptb-80 bg-primary-5 bglight position-relative">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="font-50 font-black gelica-regular mb-40">
                            Client <span className="font-primary">Testimonials</span>
                        </h2>
                    </div>
                </div>

                <div className="clients-slider">
                    <Slider {...settings}>
                        {clientData.map((client, index) => (
                            <div key={index} className="client-item">
                                <div className="img-box">
                                    <img src={client.image} alt={client.imageAlt} />
                                </div>

                                <div className="client-name font-18 font-black gelica-regular mt-2 mt-md-3">
                                    {client.name}
                                </div>

                                <div className="client-desc font-18 font-black-80 gilroy-regular mt-1 mt-md-2">
                                    {client.description}
                                </div>

                                <div className="client-location font-18 font-black gelica-regular mt-4">
                                    {client.location}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="patterns-top">
                <div className="pattern-design"></div>
            </div>
        </section>
    );
};

export default Clients;
