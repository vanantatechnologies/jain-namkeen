import React from 'react';
import './Products.scss';
import Faq from "../../components/Faq/Faq";
import InnerBanner from "../../components/InnerBanner/InnerBanner";
import AllProducts from "../../components/AllProducts/AllProducts";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import SEO from "../../components/SEO";


const Products = () => {
    return (
        <React.Fragment>
            {/* ================= START SEO ================= */}
            <SEO
                title="Our Products | Jain Namkin – Authentic Indian Snacks"
                description="Explore Jain Namkin’s wide range of authentic Indian Namkin and snacks including sev, gathiya, farsan, wafers, and traditional favorites."
                keywords="Jain Namkin products, Indian snacks, Namkin varieties, sev, gathiya, farsan, wafers"
                url="https://www.jainnamkin.com/products"
                image="https://www.jainnamkin.com/images/products-og.jpg"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Jain Namkin Products",
                    "url": "https://www.jainnamkin.com/products"
                }}
            />
            {/* ================= END SEO ================= */}
            <InnerBanner title="Our Products" />
            <AllProducts />
            <FeaturedProducts />
            <Faq/>
        </React.Fragment>
    );
};
export default Products;
