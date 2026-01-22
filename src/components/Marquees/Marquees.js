import React from "react";
import "./Marquees.scss";

const Marquees = () => {
    const words = [
        "Fresh Snacks",
        "100% Quality",
        "Fast Delivery",
        "Best Taste",
        "Premium Ingredients",
        "Hygienic Packing",
        "Made in India",
    ];

    return (
        <section className="marquee-section">
            <div className="marquee-wrapper">
                <div className="marquee-track">
                    {/* First copy */}
                    <div className="marquee-content">
                        {words.map((word, index) => (
                            <span key={index} className="marquee-item font-24 gilroy-medium text-white">
                {word}
              </span>
                        ))}
                    </div>

                    {/* Second copy (duplicate for smooth loop) */}
                    <div className="marquee-content" aria-hidden="true">
                        {words.map((word, index) => (
                            <span key={`dup-${index}`} className="marquee-item font-24 gilroy-medium text-white">
                {word}
              </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="patterns-top">
                <div className="pattern-design"></div>
            </div>
            <div className="patterns-bottom">
                <div className="pattern-design"></div>
            </div>
        </section>
    );
};

export default Marquees;
