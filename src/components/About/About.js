import React from "react";
import "./About.scss";

const About = () => {
    return (
        <section className="ptb-80">
            <div className="container custom-container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10">
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <h2 className="font-50 font-black gelica-regular mb-40">
                                    About <span className="font-primary">us</span>
                                </h2>
                            </div>
                            <div className="col-12 col-sm-8">
                                <p  className="font-18 font-black-80 gilroy-regular mb-2 mb-md-3">
                                    We are a premium namkeen and farsan brand based in Ahmedabad, offering the finest quality traditional snacks since 1948. Our products are crafted using top-notch ingredients, including high-quality groundnut oil, premium besan (gram flour), and select Kashmiri dry fruits. We strictly adhere to a “BIG NO” policy toward preservatives and artificial flavorings, ensuring authentic taste and uncompromised quality.
                                </p>
                                <p  className="font-18 font-black-80 gilroy-regular">
                                    Each product has a minimum shelf life of two months from the date of manufacturing, reflecting our commitment to freshness without compromising on purity.
                                    All products are manufactured by Jain Namkeen Industries, where our management enforces a strict no cost-cutting policy in the manufacturing process. Production is carried out by skilled artisans with decades of experience in namkeen making, preserving traditional methods while maintaining consistent quality standards.
                                </p>
                                <a href="/about" className="font-18 gilroy-medium common-primary-btn mt-3 mt-md-4">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
