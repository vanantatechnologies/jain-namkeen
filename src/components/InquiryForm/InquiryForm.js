import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './InquiryForm.scss';
import emailjs from '@emailjs/browser';

const InquiryForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        products: '',
        message: '',
    });

    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    // ===== EmailJS Hardcoded (Working Config) =====
    const SERVICE_ID = 'service_gfh6w3f';
    const TEMPLATE_ID = 'template_kcwothc';
    const PUBLIC_KEY = '2cLqZ87OfKioKNDOy';
    // ==============================================

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const { firstName, lastName, email, phone, products, message } = formData;

        if (!firstName || !lastName || !email || !phone || !products || !message) {
            alert('Please fill all required fields.');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formRef.current) return;
        if (!validateForm()) return;

        setLoading(true);

        emailjs
            .sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                PUBLIC_KEY
            )
            .then((result) => {
                console.log('Email sent:', result.text);

                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    products: '',
                    message: '',
                });

                setLoading(false);
                setShowPopup(true);

                // Redirect to Home after 3 sec
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                alert('Email failed: ' + error.text);
                setLoading(false);
            });
    };

    useEffect(() => {
        setTimeout(() => {
            if (window.LocomotiveScrollInstance) {
                window.LocomotiveScrollInstance.update();
            }
        }, 300);
    }, []);

    return (
        <>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="contct-us-form"
            >
                <h2 className="font-22 font-black gelica-regular mb-1">
                    <span className="d-block">HAVE QUESTIONS?</span>
                    Send Us A Message
                </h2>

                <p className="font-16 font-black-80 gilroy-regular mb-2 mb-md-3">
                    Whether you have a question, feedback, or wish to share your experience,
                    feel free to reach out. Our team is here to assist you.
                </p>

                <div className="row g-3 custom-gap">
                    <div className="col-sm-6">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                            className="form-control form-control-custom"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-sm-6">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                            className="form-control form-control-custom"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-sm-6">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email ID"
                            required
                            className="form-control form-control-custom"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-sm-6">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            className="form-control form-control-custom"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-12">
                        <input
                            type="text"
                            name="products"
                            placeholder="Product Name(s)"
                            required
                            className="form-control form-control-custom"
                            value={formData.products}
                            onChange={handleChange}
                        />
                        <small className="text-muted font-12">
                            Enter product names (Ex., Bhujia, Sev)
                        </small>
                    </div>
                </div>

                <div className="mt-3">
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        required
                        className="form-control form-control-custom"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <div className="mt-4 text-center">
                    <button
                        type="submit"
                        className="font-18 gilroy-medium common-primary-btn transition"
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Inquiry'}
                    </button>
                </div>
            </form>

            {showPopup && (
                <div className="inquiry-success-overlay">
                    <div className="inquiry-success-box">
                        Your inquiry has been submitted successfully. We will contact you soon.
                    </div>
                </div>
            )}
        </>
    );
};

export default InquiryForm;
