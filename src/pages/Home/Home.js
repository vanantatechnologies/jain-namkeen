import React from "react";
import "./Home.scss";
import Faq from "../../components/Faq/Faq";
// import Clients from "../../components/Clients/Clients";
import Testimonials from "../../components/Testimonials/Testimonials";
import TopSelling from "../../components/TopSelling/TopSelling";
import About from "../../components/About/About";
import Whyus from "../../components/Whyus/Whyus";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Marquees from "../../components/Marquees/Marquees";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import SEO from "../../components/SEO";

const Home = () => {
    return (
        <React.Fragment>
            {/* ================= START SEO ================= */}
            <SEO
                title="Jain Namkin | Authentic Indian Namkin & Snacks"
                description="Explore Jain Namkin’s authentic Indian Namkin, sev, farsan, wafers, and traditional snacks made with high-quality ingredients since 1948."
                keywords="Jain Namkin, Indian snacks, Namkin, sev, farsan, wafers, traditional snacks"
                url="https://www.jainnamkin.com/"
                image="https://www.jainnamkin.com/images/home-og.jpg"
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
            <HomeBanner />
            <Marquees />
            <About />
            <TopSelling />
            <Whyus />
            <FeaturedProducts />
            <Faq />
            {/* <Clients/> */}
            <Testimonials />
        </React.Fragment>
    );
};

export default Home;
