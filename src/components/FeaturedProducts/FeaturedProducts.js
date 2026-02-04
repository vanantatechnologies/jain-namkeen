import React, { useRef } from "react";
import "./FeaturedProducts.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import abb from "../../assets/img/banner-product.png";
import star from "../../assets/img/star.svg";
import rightarrow from "../../assets/img/right-arrow.svg";
import leftarrow from "../../assets/img/left-arrow.svg";

/* =========================
   Product Data
========================= */
const productData = [
    { image: abb, imageAlt: "ABB Product", name: "Ratlami sev", orderLink: "/order-now" },
    { image: abb, imageAlt: "ABB Product", name: "Ratlami sev", orderLink: "/order-now" },
    { image: abb, imageAlt: "ABB Product", name: "Ratlami sev", orderLink: "/order-now" },
    { image: abb, imageAlt: "ABB Product", name: "Ratlami sev", orderLink: "/order-now" },
    { image: abb, imageAlt: "ABB Product", name: "Ratlami sev", orderLink: "/order-now" },
];

const FeaturedProducts = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="ptb-80 bglight position-relative">
            <div className="container custom-container">
                <div className="row mb-40">
                    <div className="col-md-6">
                        <h2 className="font-50 font-black gelica-regular">
                            Featured <span className="font-primary">Products</span>
                        </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 position-relative">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={15}
                            slidesPerView={4}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.15,
                                },
                                768: {
                                    slidesPerView: 2.15,
                                },
                                992: {
                                    slidesPerView: 3.25,
                                },
                                1499: {
                                    slidesPerView: 3.25,
                                },
                                1600: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {productData.map((product, index) => (
                                <SwiperSlide key={index}>
                                    <div className="product-slider">
                                        <div className="product-item">
                                            <div className="product-top position-relative">
                                                <div className="d-none product-quality d-flex justify-content-between align-items-center">
                                                        <span className="font-12 gilroy-medium text-white bedge-left">
                                                            Top Selling
                                                        </span>
                                                                    <span className="bedge-right">
                                                            <img src={star} alt="rating" />
                                                        </span>
                                                </div>

                                                <div className="product-box mx-auto">
                                                    <img
                                                        src={product.image}
                                                        alt={product.imageAlt}
                                                        className="mx-auto img-fluid"
                                                    />
                                                </div>
                                            </div>

                                            <div className="product-bottom text-center">
                                                <div className="font-20 font-black gilroy-medium py-1">
                                                    {product.name}
                                                </div>
                                                <a
                                                    href={product.orderLink}
                                                    className="font-16 order-now-link text-white gilroy-medium text-decoration-none d-block mt-2"
                                                >
                                                    Order Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="all-next-prev-buttons">
                            <button ref={prevRef} className="custom-arrows prev">
                                <img src={leftarrow} alt="Previous" className="arrow-size" />
                            </button>
                            <button ref={nextRef} className="custom-arrows next ms-2">
                                <img src={rightarrow} alt="Next" className="arrow-size" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <a href="/products" className="font-18 gilroy-medium common-primary-btn mt-4 mt-md-5">View all products</a>
                    </div>
                </div>
            </div>


            <div className="for-gray-slider">
                <div className="section-with-curve green"></div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
