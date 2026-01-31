import React from 'react';
import './Gallery.scss';
import InnerBanner from "../../components/InnerBanner/InnerBanner";
import WeAre from "../../components/WeAre/WeAre";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";


const Gallery = () => {
    return (
        <React.Fragment>
            <InnerBanner title="Gallery" />
            <WeAre/>
            <Faq/>
            <Footer/>
        </React.Fragment>
    );
};

export default Gallery;
