import React from "react";
import "./TopContact.scss";
import phoneIcon from "../../assets/img/svg/phone.svg";
import emailIcon from "../../assets/img/svg/email.svg";
const TopContact = () => {
    return (
        <section className="section-top-contact">
            <div className="container custom-container">
                <div className="row justify-content-center">
                    <div className="col-md-12 d-flex justify-content-between">
                        <div className="top-contact-left">
                            <div className="since font-16 text-white gelica-regular">Since 1948</div>
                            <div className="font-16 text-white gelica-regular d-none d-md-block">Free Delivery on ₹1000 Across India.</div>
                        </div>
                        <div className="top-contact-right d-flex justify-content-between align-items-center ">
                                <li className="list-unstyled ">
                                                        <span className="icon-box">
                                                          <img
                                                              src={phoneIcon}
                                                              alt="Phone icon"
                                                              loading="lazy"
                                                          />
                                                        </span>
                                    <a href="tel:+918460300847" className="font-16 text-white gelica-regular text-decoration-none">+91 8460300847</a>
                                </li>

                                <li className="list-unstyled d-none d-md-flex">
                            <span className="icon-box">
                              <img
                                  src={emailIcon}
                                  alt="Email icon"
                                  loading="lazy"
                              />
                            </span>
                                    <a href="mailto:info@jainnamkeen.com" className="font-16 text-white gelica-regular text-decoration-none">info@jainnamkeen.com</a>
                                </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopContact;
