import React from 'react';
import './Home.scss';
import Faq from "../../components/Faq/Faq";
// import Clients from "../../components/Clients/Clients";
import Testimonials from "../../components/Testimonials/Testimonials";
import TopSelling from "../../components/TopSelling/TopSelling";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import Whyus from "../../components/Whyus/Whyus";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Marquees from "../../components/Marquees/Marquees";


const Home = () => {
    return (
        <React.Fragment>
            <HomeBanner />
            <Marquees/>
            <About/>
            <TopSelling/>
            <Whyus/>
            <ProductCategories/>
            <Faq/>
            {/*<Clients/>*/}
            <Footer/>
            <Testimonials/>
        </React.Fragment>
    );
};

export default Home;
