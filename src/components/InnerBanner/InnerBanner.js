import React from "react";
import "./InnerBanner.scss";

const InnerBanner = ({ title }) => {
    return (
        <section className="section-inner-banner position-relative">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12 p-0">
                        <div className="home-banner text-center">
                            <h1 className="font-50 text-white gelica-regular mb-40">
                                {title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="patterns-bottom">
                <div className="pattern-design"></div>
            </div>
        </section>
    );
};

export default InnerBanner;
