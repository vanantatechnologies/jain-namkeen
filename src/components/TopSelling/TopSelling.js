import React, { useRef, useState, useEffect } from "react";
import "./TopSelling.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import star from "../../assets/img/star.svg";
import rightarrow from "../../assets/img/right-arrow.svg";
import leftarrow from "../../assets/img/left-arrow.svg";

// Import all product images
import navrangMudDal from "../../assets/img/products/navrang-mud-dal.webp";
import mumbaiMasalaMix from "../../assets/img/products/mumbai-musal-mix.webp";
import indoriMix from "../../assets/img/products/indori-mix.webp";
import specialRajwadiMix from "../../assets/img/products/spe-rajwadi-mix.webp";
import dryfruitNylonFaraliChewda from "../../assets/img/products/drayfruit-naylon-farali-chwda.webp";
import dryfruitNylonSweetChewda from "../../assets/img/products/drayfruit-naylon-farali-sweet-chwda.webp";

/* =========================
   Product Data
========================= */
const productData = [
    { image: navrangMudDal, imageAlt: "Navrang Dal Moth", name: "Navrang Dal Moth", orderLink: "/contact" },
    { image: mumbaiMasalaMix, imageAlt: "Mumbai Missal Mix", name: "Mumbai Missal Mix", orderLink: "/contact" },
    { image: indoriMix, imageAlt: "Indori Mix", name: "Indori Mix", orderLink: "/contact" },
    { image: specialRajwadiMix, imageAlt: "Special Rajwadi Mix", name: "Special Rajwadi Mix", orderLink: "/contact" },
    { image: dryfruitNylonFaraliChewda, imageAlt: "Dryfruit Nylon Farali Chewda", name: "Dryfruit Nylon Farali Chewda", orderLink: "/contact" },
    { image: dryfruitNylonSweetChewda, imageAlt: "Dryfruit Nylon Sweet Chewda", name: "Dryfruit Nylon Sweet Chewda", orderLink: "/contact" },
];

const TopSelling = () => {
    const sectionRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [visible, setVisible] = useState(false);

    // IntersectionObserver for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // animate only once
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
        <section className="ptb-80 bglight position-relative" ref={sectionRef}>
            <div className="container custom-container">
                <div className="row mb-40">
                    <div className="col-md-6">
                        <h2 className={`font-50 font-black gelica-regular ${visible ? "animate__animated animate__fadeInUp" : ""}`}>
                            Top <span className="font-primary">Selling</span>
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
                                0: { slidesPerView: 1.15 },
                                768: { slidesPerView: 2.15 },
                                992: { slidesPerView: 3.25 },
                                1499: { slidesPerView: 3.25 },
                                1600: { slidesPerView: 4 },
                            }}
                        >
                            {productData.map((product, index) => (
                                <SwiperSlide key={index}>
                                    <div className={`product-slider ${visible ? "animate__animated animate__fadeInUp" : ""}`}>
                                        <div className="product-item">
                                            <div className="product-top position-relative">
                                                <div className="product-quality d-flex justify-content-between align-items-center">
                                                    <span className="font-12 gilroy-medium text-white bedge-left">
                                                        Top Selling
                                                    </span>
                                                    <span className="bedge-right">
                                                        <img src={star} alt="rating"/>
                                                    </span>
                                                </div>

                                                <div className="product-box mx-auto">
                                                    <img src={product.image} alt={product.imageAlt} className="mx-auto img-fluid" width={1000} height={800} loading="lazy" />
                                                </div>
                                            </div>

                                            <div className="product-bottom text-center">
                                                <div className="font-20 font-black gilroy-medium py-1">
                                                    {product.name}
                                                </div>
                                                <a href={product.orderLink} className="font-16 order-now-link text-white gilroy-medium text-decoration-none d-none mt-2">
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
                        <a href="/products" className={`font-18 gilroy-medium common-primary-btn mt-4 mt-md-5 ${visible ? "animate__animated animate__fadeInUp" : ""}`}>
                            View all products
                        </a>
                    </div>
                </div>
            </div>

            <div className="for-gray-slider">
                <div className="section-with-curve green"></div>
            </div>
        </section>
    );
};

export default TopSelling;
