import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import jainlogo from "../../assets/img/jain-namkeen.svg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar p-0">
            <div className="navbar-container">

                {/* Logo */}
                <div className="navbar-logo">
                    <NavLink to="/" onClick={closeMenu}>
                        <img
                            src={jainlogo}
                            alt="Marquees Jain namkeen"
                            loading="lazy"
                            className="jain-store img-fluid"
                        />
                    </NavLink>
                </div>

                {/* Menu */}
                <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
                    <ul className="navbar-menu">

                        <li className="navbar-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "navbar-link active" : "navbar-link"
                                }
                                onClick={closeMenu}
                                end
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="navbar-item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "navbar-link active" : "navbar-link"
                                }
                                onClick={closeMenu}
                            >
                                About Us
                            </NavLink>
                        </li>

                        <li className="navbar-item">
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    isActive ? "navbar-link active" : "navbar-link"
                                }
                                onClick={closeMenu}
                            >
                                Products
                            </NavLink>
                        </li>

                        <li className="navbar-item">
                            <NavLink
                                to="/gallery"
                                className={({ isActive }) =>
                                    isActive ? "navbar-link active" : "navbar-link"
                                }
                                onClick={closeMenu}
                            >
                                Gallery
                            </NavLink>
                        </li>

                        <li className="navbar-item">
                            <NavLink
                                to="/download"
                                className={({ isActive }) =>
                                    isActive ? "navbar-link active" : "navbar-link"
                                }
                                onClick={closeMenu}
                            >
                                Download Brochure
                            </NavLink>
                        </li>

                        <li className="navbar-item">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "navbar-link active" : "navbar-link"
                                }
                                onClick={closeMenu}
                            >
                                Contact Us
                            </NavLink>
                        </li>

                    </ul>
                </div>

                {/* Mobile Toggle */}
                <div className="navbar-toggle" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
