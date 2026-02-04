import React from 'react';
import './Gallery.scss';
import { Helmet } from "react-helmet-async";
import InnerBanner from "../../components/InnerBanner/InnerBanner";
import WeAre from "../../components/WeAre/WeAre";
import Faq from "../../components/Faq/Faq";


const Gallery = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Gallery | Jain Namkeen – Snacks, Factory & Packaging</title>

                <meta
                    name="description"
                    content="Browse the Jain Namkeen gallery showcasing our snacks, manufacturing process, quality packaging, and brand journey."
                />

                <meta
                    name="keywords"
                    content="Jain Namkeen gallery, namkeen images, snack factory, Indian snacks photos"
                />

                <link rel="canonical" href="http://www.jainnamkin.com/gallery" />

                {/* Open Graph */}
                <meta property="og:title" content="Gallery | Jain Namkeen" />
                <meta
                    property="og:description"
                    content="Explore photos of Jain Namkeen products, factory, and packaging."
                />
                <meta property="og:url" content="http://www.jainnamkin.com/gallery" />
                <meta
                    property="og:image"
                    content="http://www.jainnamkin.com/images/gallery-og.jpg"
                />
                <meta property="og:type" content="website" />
            </Helmet>
            <InnerBanner title="Gallery" />
            <WeAre/>
            <Faq/>
        </React.Fragment>
    );
};

export default Gallery;
