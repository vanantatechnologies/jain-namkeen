import React, { useRef, useState, useEffect } from "react";
import "./OurJourney.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import rightarrow from "../../assets/img/right-arrow.svg";
import leftarrow from "../../assets/img/left-arrow.svg";

/* =========================
   Journey Data
========================= */
const journeyData = [
    {
        year: "1948",
        description:
            "Mr. Devilalji Jain begins his journey with a humble cart in Ahmedabad",
    },
    {
        year: "1950",
        description:
            "Establishment of Jain Chawana Mart near Delhi Darwaja",
    },
    {
        year: "1980",
        description:
            "Second generation expands the legacy with quality & consistency",
    },
    {
        year: "1990",
        description:
            "Signature products like Rajwadi Mixture & Nylon Papdi are introduced",
    },
    {
        year: "2025",
        description:
            "Third & fourth generations prepare to take Jain Namkin global",
    },
];

const OurJourney = () => {
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
        <section className="ptb-80 bglight position-relative our-journey-section" ref={sectionRef}>
            <div className="container custom-container">
                <div className="row mb-40">
                    <div className="col-md-6">
                        <h2
                            className={`font-50 font-black gelica-regular ${
                                visible ? "animate__animated animate__fadeInUp" : ""
                            }`}
                        >
                            Our <span className="font-primary">Journey</span>
                        </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 position-relative">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={3}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1.1 },
                                768: { slidesPerView: 2.2 },
                                992: { slidesPerView: 3 },
                                1600: { slidesPerView: 3 },
                            }}
                        >
                            {journeyData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className={`journey-slider ${
                                            visible ? "animate__animated animate__fadeInUp" : ""
                                        }`}
                                    >
                                        <div className="journey-item">
                                            <div className="journey-year font-24 font-primary gelica-regular d-block mb-2">
                                                {item.year}
                                            </div>
                                            <p className="font-18 font-black-80">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation */}
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

            <div className="for-gray-slider">
                <div className="section-with-curve green"></div>
            </div>
        </section>
    );
};

export default OurJourney;
