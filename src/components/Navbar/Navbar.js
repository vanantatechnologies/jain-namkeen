import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

// Assets
import jainlogo from "../../assets/img/Jain-Namkin-Logo.svg";
import menuOpenIcon from "../../assets/img/common/menu-open.svg";
import menuCloseIcon from "../../assets/img/common/menu-close.svg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    // Disable body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <nav className="navbar p-0">
            <div className="navbar-container">

                {/* Logo */}
                <div className="navbar-logo">
                    <NavLink to="/" onClick={closeMenu}>
                        <img
                            src={jainlogo}
                            alt="Jain Namkin"
                            loading="lazy"
                            className="jain-store img-fluid"
                        />
                    </NavLink>
                </div>

                {/* Navigation Menu */}
                <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
                    <ul className="navbar-menu">

                        <li className="navbar-item">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    isActive ? "navbar-link active" : "navbar-link"
                                }
                                onClick={closeMenu}
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
                                to="/about#howto-order"
                                className={({ isActive }) =>
                                    isActive ? "navbar-link active" : "navbar-link"
                                }
                                onClick={closeMenu}
                            >
                                Order
                            </NavLink>
                        </li>

                        {/* Mobile-only links */}
                        <div className="mobileview-only d-flex">
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

                            <li className="navbar-item ms-2 ms-md-3">
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
                        </div>

                    </ul>
                </div>

                {/* Mobile Toggle Button */}
                <div
                    className="navbar-toggle"
                    onClick={toggleMenu}
                    role="button"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                    <img
                        src={menuOpen ? menuCloseIcon : menuOpenIcon}
                        alt=""
                        className="menu-toggle-icon"
                    />
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
