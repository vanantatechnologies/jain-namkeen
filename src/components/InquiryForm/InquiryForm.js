import React, { useState, useRef, useEffect } from 'react';
import './InquiryForm.scss';
import emailjs from '@emailjs/browser';

const InquiryForm = () => {
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

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

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
            .then(() => {
                alert('✅ Inquiry sent successfully!');

                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    products: '',
                    message: '',
                });

                setLoading(false);
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                alert('Something went wrong. Please try again.');
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
                <div className="col-md-6">
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

                <div className="col-md-6">
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

                <div className="col-md-6">
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

                <div className="col-md-6">
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
                        Enter product names separated by commas (e.g., Bhujia, Sev, Chivda)
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
    );
};

export default InquiryForm;
