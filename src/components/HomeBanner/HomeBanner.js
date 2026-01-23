import React from "react";
import "./HomeBanner.scss";
import jainlogo from "../../assets/img/banner-top.png";

const HomeBanner = () => {
    return (
        <section className="section-home-banner">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12 p-0">
                        <div className="home-banner">
                            <img
                                src={jainlogo}
                                alt="Marquees Jain namkeen"
                                loading="lazy"
                                className="jain-store img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
