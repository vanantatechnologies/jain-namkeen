import React from "react";
import "./Header.scss";
import Navbar from "../Navbar/Navbar";
import TopContact from "../TopContact/TopContact";

const Header = () => {
    return (
        <header className="header">
            <TopContact/>
            <Navbar/>
        </header>
    );
};

export default Header;
