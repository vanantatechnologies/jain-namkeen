import React from 'react';
import './Products.scss';
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import InnerBanner from "../../components/InnerBanner/InnerBanner";
import AllProducts from "../../components/AllProducts/AllProducts";
import ProductCategories from "../../components/ProductCategories/ProductCategories";


const Products = () => {
    return (
        <React.Fragment>
            <InnerBanner title="Our Products" />
            <AllProducts />
            <ProductCategories/>
            <Faq/>
            <Footer/>
        </React.Fragment>
    );
};
export default Products;
