import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./WeAre.scss";

import Ganeshlal from "../../assets/img/ganeshji.webp";
import GaneshlalKamla from "../../assets/img/ganesh-kamla.webp";
import staff from "../../assets/img/staff.webp";
import boxing from "../../assets/img/boxing.webp";
import rightarrow from "../../assets/img/right-arrow.svg";
import leftarrow from "../../assets/img/left-arrow.svg";

/* =========================
   Gallery Data
========================= */
const galleryData = [
    {
        image: Ganeshlal,
        imageAlt: "Founder Ganeshlal preparing traditional Ratlami Sev",
        name: "Ratlami Sev",
    },
    {
        image: GaneshlalKamla,
        imageAlt: "Ganeshlal and Kamla working together on Ratlami Sev production",
        name: "Ratlami Sev",
    },
    {
        image: staff,
        imageAlt: "Staff members involved in Ratlami Sev preparation process",
        name: "Ratlami Sev",
    },
    {
        image: boxing,
        imageAlt: "Packaging and boxing of Ratlami Sev for distribution",
        name: "Ratlami Sev",
    },
];

/* =========================
   WeAre Component
========================= */
const WeAre = () => {
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
        <section className="our-gallery ptb-80 position-relative" ref={sectionRef}>
            <div className="container custom-container">
                <div className="row mb-40">
                    <div className="col-md-6">
                        <h2
                            className={`font-50 font-black gelica-regular ${
                                visible ? "animate__animated animate__fadeInUp" : ""
                            }`}
                        >
                            Our <span className="font-primary">Gallery</span>
                        </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 position-relative">
                        <div className={`gallery-slider ${visible ? "animate__animated animate__fadeInUp" : ""}`}>
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                loop={true}
                                centeredSlides={true}
                                slidesPerView={1.5}
                                spaceBetween={30}
                                speed={600}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                onBeforeInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                }}
                                navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                breakpoints={{
                                    0: { slidesPerView: 1, centeredSlides: false },
                                    768: { slidesPerView: 1, centeredSlides: false },
                                    992: { slidesPerView: 2, centeredSlides: true },
                                }}
                            >
                                {galleryData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="gallery-item">
                                            <div className="gallery-top position-relative border">
                                                <div className="gallery-box mx-auto">
                                                    <img
                                                        src={item.image}
                                                        alt={item.imageAlt}
                                                        className="mx-auto img-fluid"
                                                    />
                                                </div>

                                                <div className="gallery-bottom text-center d-none">
                                                    <div className="font-20 font-black gilroy-medium py-1">
                                                        {item.name}
                                                    </div>
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
                </div>
            </div>
        </section>
    );
};

export default WeAre;
