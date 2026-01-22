import React, { useState } from "react";
import "./Navbar.scss";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import jainlogo from "../../assets/img/jain-namkeen.svg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(""); // Track which submenu is open

    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Toggle dropdowns — one open at a time
    const handleToggle = (menu, e) => {
        if (window.innerWidth <= 991) {
            e.preventDefault();
            setActiveMenu(activeMenu === menu ? "" : menu);
        }
    };

    // Hover handling for desktop
    const handleMouseEnter = (menu) => {
        if (window.innerWidth > 991) setActiveMenu(menu);
    };
    const handleMouseLeave = () => {
        if (window.innerWidth > 991) setActiveMenu("");
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/"><img
                        src={jainlogo}
                        alt="Marquees Jain namkeen"
                        loading="lazy"
                        className="jain-store img-fluid"
                    /></a>
                </div>

                <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
                    <ul className="navbar-menu">
                        <li className="navbar-item">
                            <a href="/" className="navbar-link">Home</a>
                        </li>

                        <li className="navbar-item">
                            <a href="/about" className="navbar-link">Marquees</a>
                        </li>

                        <li className="navbar-item">
                            <a href="/about" className="navbar-link">Products</a>
                        </li>

                        <li className="navbar-item">
                            <a href="/about" className="navbar-link">Gallery</a>
                        </li>

                        <li className="navbar-item">
                            <a href="/download" className="navbar-link">Download Brochure</a>
                        </li>

                        <li className="navbar-item">
                            <a href="/contact" className="navbar-link">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="navbar-toggle" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
