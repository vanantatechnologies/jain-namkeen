import React from 'react';
import './Gallery.scss';
import InnerBanner from "../../components/InnerBanner/InnerBanner";
import WeAre from "../../components/WeAre/WeAre";
import Faq from "../../components/Faq/Faq";
import SEO from "../../components/SEO";


const Gallery = () => {
    return (
        <React.Fragment>
            {/* ================= START SEO ================= */}
            <SEO
                title="Gallery | Jain Namkin – Authentic Namkin & Snacks"
                description="View the delicious and traditional Indian snacks made by Jain Namkin. See our varieties of sev, gathiya, farsan, wafers, and more."
                keywords="Jain Namkin gallery, Indian snacks images, Namkin, sev, gathiya, farsan"
                url="https://www.jainnamkin.com/gallery"
                image="https://www.jainnamkin.com/images/gallery-og.jpg"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Jain Namkin Gallery",
                    "url": "https://www.jainnamkin.com/gallery"
                }}
            />
            {/* ================= END SEO ================= */}
            <InnerBanner title="Gallery" />
            <WeAre/>
            <Faq/>
        </React.Fragment>
    );
};

export default Gallery;
