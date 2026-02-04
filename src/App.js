import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Contactus from "./pages/Contactus/Contactus";
import AboutUs from "./pages/AboutUs/AboutUs";
import Gallery from "./pages/Gallery/Gallery";
import "animate.css";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/products" element={<Products />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contactus />} />
            </Routes>

            <WhatsAppButton />
            <Footer />
        </>
    );
}

export default App;
