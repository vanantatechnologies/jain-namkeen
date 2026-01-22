import React from "react";
import Slider from "react-slick";
import "./ProductCategories.scss";
import abb from "../../assets/img/products/sev.png";
import star from "../../assets/img/star.svg";
import rightarrow from "../../assets/img/right-arrow.svg";
import leftarrow from "../../assets/img/left-arrow.svg";

const productData = [
    { image: abb, imageAlt: "ABB Product", name: "Ratlami sev", orderLink: "/order-now" },
    { image: abb, imageAlt: "ABB Product", name: "Ratlami sev", orderLink: "/order-now" },
    { image: abb, imageAlt: "ABB Product", name: "Ratlami sev", orderLink: "/order-now" },
    { image: abb, imageAlt: "ABB Product", name: "Ratlami sev", orderLink: "/order-now" },
    { image: abb, imageAlt: "ABB Product", name: "Ratlami sev", orderLink: "/order-now" },
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
            <img src={rightarrow} alt="arrow" className="arrow-size" />
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
            <img src={leftarrow} alt="arrow" className="arrow-size" />
        </button>
    );
};

/* =========================
   ProductCategories Component
========================= */
const ProductCategories = () => {
    // Dynamically set slidesToShow based on window width
    let defaultSlides = 4;
    if (typeof window !== "undefined") {
        const width = window.innerWidth;
        if (width < 768) defaultSlides = 1.15; // mobile
        else if (width < 992) defaultSlides = 2.25; // tablet
        else if (width < 1200) defaultSlides = 3.25; // small laptop
        else if (width < 1400) defaultSlides = 3.5; // small desktop
        else defaultSlides = 4; // desktop
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
            { breakpoint: 992, settings: { slidesToShow: 2.25 } }, // tablet
            { breakpoint: 1200, settings: { slidesToShow: 3.25 } }, // small laptop
            { breakpoint: 1400, settings: { slidesToShow: 3.5 } }, // small desktop
            { breakpoint: 1600, settings: { slidesToShow: 4 } }, // desktop
        ],
    };

    return (
        <section className="ptb-80 bg-primary-5 bglight">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="font-50 font-black gelica-regular mb-40">
                            Product <span className="font-primary">Categories</span>
                        </h2>
                    </div>
                    <div className="col-md-6">
                        <div className="">Custom Arrows Code</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="product-slider">
                            <Slider {...settings}>
                                {productData.map((product, index) => (
                                    <a href="/about" key={index} className="product-item text-decoration-none">
                                        <div className="product-top position-relative">
                                            <div className="product-quality d-flex justify-content-between align-items-center">
                                        <span className="font-12 gilroy-medium text-white bedge-left d-none">
                                            Top Selling
                                        </span>
                                                <span className="bedge-right ms-auto">
                                            <img src={star} alt="rating" className="mx-auto" />
                                        </span>
                                            </div>
                                            <div className="product-box mx-auto">
                                                <img src={product.image} alt={product.imageAlt} className="mx-auto" />
                                            </div>
                                        </div>

                                        <div className="product-bottom text-center">
                                            <div className="font-20 font-black gilroy-medium py-1">
                                                {product.name}
                                            </div>
                                            <div className="font-18 font-black-80 gilroy-regular mt-2 d-none">
                                                <a
                                                    href={product.orderLink}
                                                    className="font-16 order-now-link text-white gilroy-medium text-decoration-none d-block"
                                                >
                                                    Order Now
                                                </a>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <a href="/about" className="font-18 gilroy-medium common-primary-btn mt-4 mt-md-5">View all products</a>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ProductCategories;
