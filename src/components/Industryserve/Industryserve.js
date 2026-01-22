import React from "react";
import Slider from "react-slick";
import "./Industryserve.scss";

// Import all your industry images
import energy from "../../assets/img/common/industry/energy.png";


const industryData = [
    {
        title: "Food and Beverages",
        image: energy,
        imageAlt: "Food and Beverages",
    },
    {
        title: "Petroleum",
        image: energy,
        imageAlt: "Petroleum",
    },
    {
        title: "Pharmaceuticals",
        image: energy,
        imageAlt: "Pharmaceuticals",
    },
    {
        title: "Automobiles",
        image: energy,
        imageAlt: "Automobiles",
    }
];

const Industryserve = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1.15,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="ptb-80 bg-primary-5">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="">
                            <h2 className="">
                                Industries We Serve
                            </h2>
                            <p
                                className=""
                                style={{ maxWidth: "900px", margin: "auto" }}
                            >
                                Trackzer Switchgears Pvt. Ltd. serves industries like
                                manufacturing, utilities, oil & gas, and services, providing
                                reliable power panels and industrial automation solutions for
                                optimal efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industry Cards Slider */}
            <div className="container-fluid custom-ind-slider">
                <div className="row">
                    <div className="col-md-12 overflow-hidden">
                        <div className="clients-slider">
                            <Slider {...settings}>
                                {industryData.map((industry, index) => (
                                    <div key={index} className="industry-card">
                                        <div className="industry-thumbnail-main">
                                            <img
                                                src={industry.image}
                                                alt={industry.imageAlt}
                                                className="industry-thumbnail img-fluid"
                                            />
                                        </div>
                                        <div className="ind-details">
                                            <h3 className="industry-name font-22">{industry.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industryserve;
