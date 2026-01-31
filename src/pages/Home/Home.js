import React from 'react';
import './Home.scss';
import Faq from "../../components/Faq/Faq";
// import Clients from "../../components/Clients/Clients";
import Testimonials from "../../components/Testimonials/Testimonials";
import TopSelling from "../../components/TopSelling/TopSelling";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import Whyus from "../../components/Whyus/Whyus";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Marquees from "../../components/Marquees/Marquees";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";


const Home = () => {
    return (
        <React.Fragment>
            <HomeBanner />
            <Marquees/>
            <About/>
            <TopSelling/>
            <Whyus/>
            <FeaturedProducts/>
            <Faq/>
            {/*<Clients/>*/}
            <Footer/>
            <Testimonials/>
        </React.Fragment>
    );
};

export default Home;
