import React, { useState, useMemo } from "react";
import "./AllProducts.scss";
import abb from "../../assets/img/products/sev.png";
import star from "../../assets/img/star.svg";

/* =========================
   Product Data
========================= */
const productData = [
    { id: 1, name: "Ratlami Sev", category: "spicy", image: abb },
    { id: 2, name: "Ujjaini Sev", category: "spicy", image: abb },
    { id: 3, name: "Laung Sev", category: "medium", image: abb },
    { id: 4, name: "Garlic Sev", category: "spicy", image: abb },
    { id: 5, name: "Plain Sev", category: "medium", image: abb },
    { id: 6, name: "Indori Mixture", category: "spicy", image: abb },
    { id: 7, name: "Moong Dal", category: "medium", image: abb },
    { id: 8, name: "Aloo Bhujia", category: "spicy", image: abb },
    { id: 9, name: "Corn Mixture", category: "medium", image: abb },
    { id: 10, name: "Chana Dal", category: "medium", image: abb },
    { id: 11, name: "Tikha Gathiya", category: "spicy", image: abb },
    { id: 12, name: "Nylon Sev", category: "medium", image: abb },
    { id: 13, name: "Khatta Meetha", category: "medium", image: abb },
    { id: 14, name: "Special Ratlami", category: "spicy", image: abb },
    { id: 15, name: "Jeera Sev", category: "medium", image: abb },
    { id: 16, name: "Tikhi Sev", category: "spicy", image: abb },
];

const ITEMS_PER_LOAD = 8;

const AllProducts = () => {
    const [category, setCategory] = useState("all");
    const [search, setSearch] = useState("");
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

    const filteredProducts = useMemo(() => {
        return productData
            .filter(p => category === "all" || p.category === category)
            .filter(p =>
                p.name.toLowerCase().includes(search.toLowerCase())
            );
    }, [category, search]);

    const visibleProducts = filteredProducts.slice(0, visibleCount);

    return (
        <section className="section-all-products ptb-80 position-relative">
            <div className="container custom-container">

                {/* FILTER */}
                <div className="row">
                    <div className="">
                        <div className="filter-option">

                            <div className="filter-option-left">
                                <h3 className="font-18 font-black gelica-regular">
                                    All Products
                                </h3>
                            </div>

                            <div className="filter-option-center d-none">
                                {["all", "medium", "spicy"].map(item => (
                                    <label key={item} className="custom-radio">
                                        <input
                                            type="radio"
                                            name="spice"
                                            checked={category === item}
                                            onChange={() => {
                                                setCategory(item);
                                                setVisibleCount(ITEMS_PER_LOAD);
                                            }}
                                        />
                                        <span className="radio-box">
                                            <svg viewBox="0 0 12 10">
                                                <polyline points="1 5 4 8 11 1" />
                                            </svg>
                                        </span>
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </label>
                                ))}
                            </div>

                            <div className="filter-option-right ms-auto">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="product-search"
                                    value={search}
                                    onChange={e => {
                                        setSearch(e.target.value);
                                        setVisibleCount(ITEMS_PER_LOAD);
                                    }}
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* PRODUCTS GRID */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="all-product">
                            {visibleProducts.map(product => (
                                <div key={product.id} className="product-item">
                                    <div className="product-top position-relative">
                                        <div className="product-quality d-flex justify-content-between align-items-center">
                                            <span className="font-12 gilroy-medium text-white bedge-left">
                                                Top Selling
                                            </span>
                                            <span className="bedge-right">
                                                <img src={star} alt="rating" />
                                            </span>
                                        </div>
                                        <div className="product-box mx-auto">
                                            <img src={product.image} alt={product.name} />
                                        </div>
                                    </div>

                                    <div className="product-bottom text-center">
                                        <div className="font-20 font-black gilroy-medium py-1">
                                            {product.name}
                                        </div>
                                        <div className="font-18 font-black-80 gilroy-regular mt-2">
                                            <a
                                                href="/order-now"
                                                className="font-16 order-now-link text-white gilroy-medium text-decoration-none d-block"
                                            >
                                                Order Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* LOAD MORE */}
                {visibleCount < filteredProducts.length && (
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button
                                className="font-18 gilroy-medium common-primary-btn mt-4 mt-md-5"
                                onClick={() =>
                                    setVisibleCount(prev => prev + ITEMS_PER_LOAD)
                                }
                            >
                                Load More
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default AllProducts;
