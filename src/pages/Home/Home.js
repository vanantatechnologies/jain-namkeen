import React from "react";
import "./Home.scss";
import { Helmet } from "react-helmet-async";

import Faq from "../../components/Faq/Faq";
// import Clients from "../../components/Clients/Clients";
import Testimonials from "../../components/Testimonials/Testimonials";
import TopSelling from "../../components/TopSelling/TopSelling";
import About from "../../components/About/About";
import Whyus from "../../components/Whyus/Whyus";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Marquees from "../../components/Marquees/Marquees";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

const Home = () => {
    return (
        <React.Fragment>
            {/* ================= SEO : Home Page ================= */}
            <Helmet>
                <title>Jain Namkeen – Authentic Indian Namkeen & Traditional Snacks</title>

                <meta
                    name="description"
                    content="Jain Namkeen offers authentic Indian namkeen and traditional snacks made with premium ingredients and rich flavors. Taste purity and tradition in every bite."
                />

                <meta
                    name="keywords"
                    content="Jain Namkeen, Indian namkeen, traditional snacks, farsan, bhujia, mixture, Jain food, Indian snacks"
                />

                <link rel="canonical" href="http://www.jainnamkin.com/" />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="Jain Namkeen – Authentic Indian Namkeen & Traditional Snacks"
                />
                <meta
                    property="og:description"
                    content="Experience the authentic taste of Jain Namkeen – premium Indian snacks crafted with tradition and quality."
                />
                <meta
                    property="og:url"
                    content="http://www.jainnamkin.com/"
                />
                <meta
                    property="og:image"
                    content="http://www.jainnamkin.com/images/jain-namkeen-og.jpg"
                />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Jain Namkeen – Authentic Indian Namkeen & Snacks"
                />
                <meta
                    name="twitter:description"
                    content="Traditional Indian namkeen and snacks by Jain Namkeen. Pure ingredients, authentic taste."
                />
                <meta
                    name="twitter:image"
                    content="http://www.jainnamkin.com/images/jain-namkeen-og.jpg"
                />

                {/* Structured Data – Home Page */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FoodEstablishment",
                        "name": "Jain Namkeen",
                        "url": "http://www.jainnamkin.com/",
                        "image": "http://www.jainnamkin.com/images/jain-namkeen-og.jpg",
                        "servesCuisine": "Indian Snacks",
                        "priceRange": "₹₹",
                    })}
                </script>
            </Helmet>
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
