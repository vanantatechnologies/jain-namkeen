import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.scss";
import InnerBanner from "../../components/InnerBanner/InnerBanner";

/* ----------------------------------
   IMAGE ASSETS
---------------------------------- */
import img1 from "../../assets/img/ganeshji.webp";
import img2 from "../../assets/img/ganesh-kamla.webp";
import img3 from "../../assets/img/kamlaben-new.webp";
import img4 from "../../assets/img/jain-chawana.webp";
import OurJourney from "../../components/OurJourney/OurJourney";
import HowToOrder from "../../components/HowToOrder/HowToOrder";
import Faq from "../../components/Faq/Faq";
import SEO from "../../components/SEO";

const AboutUs = () => {
    /* ----------------------------------
   REFS & STATE
---------------------------------- */

    // Intro animation
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Sticky image logic
    const [activeImg, setActiveImg] = useState(img1);

    /* ----------------------------------
       INTRO SECTION ANIMATION (UNCHANGED)
    ---------------------------------- */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    /* ----------------------------------
       FIXED SCROLL IMAGE SWITCH LOGIC
       ✔ No animation
       ✔ Image always visible
       ✔ Switch at viewport center (50%)
    ---------------------------------- */
    useEffect(() => {
        const items = document.querySelectorAll(".story-item");
        if (!items.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const newImg = entry.target.dataset.image;
                        if (newImg) {
                            setActiveImg(newImg);
                        }
                    }
                });
            },
            {
                root: null,
                // 🔥 Activate when item crosses middle of screen
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0,
            }
        );

        items.forEach((item) => observer.observe(item));
        return () => observer.disconnect();
    }, []);

    return (
        <React.Fragment>
            {/* ================= START SEO ================= */}
            <SEO
                title="About Us | Jain Namkin – 75 Years of Authentic Namkin"
                description="Learn about Jain Namkin’s 75+ years of legacy crafting traditional Indian snacks with authentic recipes and premium quality ingredients."
                keywords="Jain Namkin, About us, Indian snacks, Namkin, history, legacy"
                url="https://www.jainnamkin.com/about-us"
                image="https://www.jainnamkin.com/images/about-og.jpg"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Jain Namkin",
                    "url": "https://www.jainnamkin.com",
                    "logo": "https://www.jainnamkin.com/images/logo.png",
                    "sameAs": [
                        "https://www.facebook.com/jainNamkin",
                        "https://www.instagram.com/jainNamkin"
                    ]
                }}
            />

            {/* ================= END SEO ================= */}

            <InnerBanner title="About us" />

            {/* INTRO SECTION */}
            <section className="ptb-80" ref={sectionRef}>
                <div className="container custom-container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-xl-10">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <h2 className={`font-50 font-black gelica-regular mb-40 ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
                                        Our <span className="font-primary">Story</span>
                                    </h2>
                                </div>

                                <div className="col-12 col-sm-8">
                                    <div className={`font-22 gelica-medium-italic font-primary mb-3 mt--10 ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
                                        A legacy of taste, trust, and tradition since 1948
                                    </div>

                                    <p className={`font-18 font-black-80 mb-3 ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
                                        The story of Jain Chawana Mart began in 1948 when a young visionary, Mr. Devilalji Jain, arrived in Ahmedabad from Rajasthan carrying little more than determination and a deep love for authentic flavors.
                                    </p>

                                    <p className={`font-18 font-black-80 mb-3 ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
                                        From a humble vendor’s cart, he began crafting handmade Namkin such as Ratlami Sev and Farsi Puri—prepared with unmatched care, honesty, and tradition. The people of Ahmedabad soon embraced these flavors with immense love and trust.
                                        <span className="font-22 gelica-medium-italic font-primary mb-3"> we are</span>
                                    </p>

                                    <ul
                                        className={`list-unstyled about-us-points ${
                                            isVisible
                                                ? "animate__animated animate__fadeInUp animate__delay-1s"
                                                : ""
                                        }`}
                                    >
                                        <li className="font-18 font-black-80 gilroy-regular">
                                            Authentic recipes passed through generations
                                        </li>
                                        <li className="font-18 font-black-80 gilroy-regular">
                                            Uncompromising quality and honesty
                                        </li>
                                        <li className="font-18 font-black-80 gilroy-regular">
                                            Iconic flavors with unmatched taste
                                        </li>
                                        <li className="font-18 font-black-80 gilroy-regular">
                                            Original stores with original products
                                        </li>
                                        <li className="font-18 font-black-80 gilroy-regular">
                                            Trusted by generations since 1948
                                        </li>
                                    </ul>


                                    <a href="/contact" className={`common-primary-btn mt-sm-2 mt-md-4 ${isVisible ? "animate__animated animate__fadeInUp animate__delay-2s" : ""}`}>
                                        Contact now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* SCROLL STORY SECTION */}
            <section className="ptb-80 we-story bglight">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-xl-10">
                            <div className="row">
                                {/* STICKY IMAGE */}
                                <div className="col-md-6">
                                    <div className="sticky-image">
                                        <img
                                            src={activeImg}
                                            alt="Jain Namkin"
                                            className="img-fluid w-100"
                                            height={705} width={413} loading="lazy"
                                        />
                                    </div>
                                </div>

                                {/* STORY CONTENT */}
                                <div className="col-md-6">
                                    <div className="our-real-story">
                                        <div className="story-item" data-image={img1}>
                                            <p className="font-18 font-black-80 mb-3">
                                                Encouraged by overwhelming customer affection, Mr. Jain established a small shop near Ahmedabad’s historic Delhi Darwaja—naming it Jain Chawana Mart.
                                            </p>
                                            <p className="font-18 font-black-80 mb-3">
                                                Decades later, the same shop proudly stands as one of Ahmedabad’s most beloved and iconic Namkin destinations, continuing its journey without compromising authenticity.
                                            </p>
                                        </div>

                                        <div className="story-item" data-image={img2}>
                                            <p className="font-18 font-black-80 mb-3">
                                                The legacy flourished further under the leadership of Mr. Ganeshlalji Jain and his inspiring wife, Mrs. Kamlaben. With the passion and innovation of their son Vikrantbhai, Jain Chawana Mart entered a new era of growth.
                                            </p>
                                            <p className="font-18 font-black-80 mb-3">
                                                It was during this time that signature creations like Rajwadi Mixture and Jain Special Nylon Papdi were born—recipes so distinctive that they remain unmatched to this day.
                                            </p>
                                        </div>

                                        <div className="story-item" data-image={img3}>
                                            <p className="font-18 font-black-80 mb-3">
                                                Today, nearly 80 years later, Jain Chawana Mart at Delhi Darwaja and Jain Namkin at Shahibaug continue to delight generations with what many proudly call the finest Namkin Ahmedabad has ever known.
                                            </p>
                                            <p className="font-18 font-black-80 mb-3">
                                                While the market may be filled with imitations, true connoisseurs know that authentic Jain Namkin can only be experienced at its original stores.
                                            </p>
                                        </div>

                                        <div className="story-item" data-image={img4}>
                                            <p className="font-18 font-black-80 mb-3">
                                                Guided by the fresh vision of the fourth generation—Kulinkumar and Shalinkumar—the brand now looks beyond borders. Their mission is simple yet powerful: to carry the unmistakable taste of authentic Jain Namkin to every corner of the world.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <HowToOrder/>
            <OurJourney/>
            <Faq/>

  {/*          <section className="section-with-curve white"></section>

            <section className="section-with-curve green"></section>
*/}



        </React.Fragment>
    );
};

export default AboutUs;
