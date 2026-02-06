import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./WeAre.scss";
import CrispyNylonPapdi from "../../assets/img/gallery/crispy-nylon-papdi.webp";
import DryfruitFaraliChevda from "../../assets/img/gallery/dryfruit-faravi-chevda.webp";
import KhattaMeethaMix from "../../assets/img/gallery/khatta-meetha-mix.webp";
import MasalaCornFlakes from "../../assets/img/gallery/masala-corn-flakes.webp";
import MasalaKachori from "../../assets/img/gallery/masala-kachori.webp";
import MasalaPuri from "../../assets/img/gallery/masala-puri.webp";
import RoastedWheatPuffs from "../../assets/img/gallery/roasted-wheat-puffs.webp";
import SoyaBingo from "../../assets/img/gallery/soya-bingo.webp";
import SpecialFulwadi from "../../assets/img/gallery/special-fulwadi.webp";
import TomatoFaraliPara from "../../assets/img/gallery/tomato-farali-para.webp";

import rightarrow from "../../assets/img/right-arrow.svg";
import leftarrow from "../../assets/img/left-arrow.svg";

/* =========================
   Gallery Data
========================= */
const galleryData = [
    {
        image: CrispyNylonPapdi,
        imageAlt: "Crispy Nylon Papdi namkeen",
        name: "Crispy Nylon Papdi",
    },
    {
        image: DryfruitFaraliChevda,
        imageAlt: "Dryfruit Farali Chevda namkeen",
        name: "Dryfruit Farali Chevda",
    },
    {
        image: KhattaMeethaMix,
        imageAlt: "Khatta Meetha Mix namkeen",
        name: "Khatta Meetha Mix",
    },
    {
        image: MasalaCornFlakes,
        imageAlt: "Masala Corn Flakes namkeen",
        name: "Masala Corn Flakes",
    },
    {
        image: MasalaKachori,
        imageAlt: "Masala Kachori snack",
        name: "Masala Kachori",
    },
    {
        image: MasalaPuri,
        imageAlt: "Masala Puri snack",
        name: "Masala Puri",
    },
    {
        image: RoastedWheatPuffs,
        imageAlt: "Roasted Wheat Puffs namkeen",
        name: "Roasted Wheat Puffs",
    },
    {
        image: SoyaBingo,
        imageAlt: "Soya Bingo snack",
        name: "Soya Bingo",
    },
    {
        image: SpecialFulwadi,
        imageAlt: "Special Fulwadi namkeen",
        name: "Special Fulwadi",
    },
    {
        image: TomatoFaraliPara,
        imageAlt: "Tomato Farali Para snack",
        name: "Tomato Farali Para",
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
                                slidesPerView={2.5}
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
                                                        className="mx-auto img-fluid w-100"
                                                        width={592} height={400} loading="lazy"
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
