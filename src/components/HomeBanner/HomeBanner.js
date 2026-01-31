import React from "react";
import "./HomeBanner.scss";
import ProductBanner from "../../assets/img/banner-product.webp";

const HomeBanner = () => {
    return (
    <section className="section-home-banner">
        <div className="container custom-container">
            <div className="row">
                <div className="col-md-4 text-center order-md-2">
                    <div className="main-banner">
                        <img
                            src={ProductBanner}
                            alt="Marquees Jain namkeen"
                            loading="lazy"
                            className="jain-store img-fluid w-100"
                        />
                    </div>
                </div>
                <div className="col-md-8 order-md-1">
                    <div className="home-banner" style={{ maxWidth: "700px" }}>
                        <h1 className="font-70 text-white gelica-regular">Welcome to Jain Namkeen & Jain Chawana mart</h1>
                        <p className="font-18 text-white gilroy-regular mt-3" style={{ maxWidth: "700px" }}>At Jain Namkeen, we take pride in offering a wide range of savory treats, meticulously crafted to tantalize your taste buds</p>
                        <a href="/about" className="font-18 gilroy-medium common-primary-btn mt-3 mt-md-4">Read More</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
};

export default HomeBanner;
