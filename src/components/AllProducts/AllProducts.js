import React, { useState, useMemo } from "react";
import "./AllProducts.scss";
import { Helmet } from "react-helmet-async";

import alooSev from "../../assets/img/products/aloo-sev.webp";
import aluMasalaWafer from "../../assets/img/products/alu-masala-wafer.webp";
import aluPlainWafer from "../../assets/img/products/alu-plain-wafer.webp";
import americanKelaWafer from "../../assets/img/products/american-kela-wafers.webp";
import bangaliSamosaPuri from "../../assets/img/products/bangali-samosa-puri.webp";
import babyFryer from "../../assets/img/products/beby-fryer.webp";
import bhavnagariGathiya from "../../assets/img/products/bhavnagari-gadhiya.webp";
import bhimGathiya from "../../assets/img/products/bhim-gathiya.webp";
import bikaneriSev from "../../assets/img/products/bikaneri-sev.webp";
import bombaySev from "../../assets/img/products/bombay-sev.webp";
import butterBhakharwadi from "../../assets/img/products/butter-bhakkharwadi.webp";
import butterPista from "../../assets/img/products/butter-pisata.webp";
import chakri from "../../assets/img/products/chakri.webp";
import chanaChorGaram from "../../assets/img/products/chana-chor-garam.webp";
import chanaDal from "../../assets/img/products/chana-dal.webp";
import dahiMamriMori from "../../assets/img/products/dahi-mamri-mori.webp";
import discoBikaneriPapad from "../../assets/img/products/drayfruit-naylon-farali-chwda.webp";
import dryfruitNylonFaraliChewda from "../../assets/img/products/drayfruit-naylon-farali-chwda.webp";
import dryfruitNylonSweetChewda from "../../assets/img/products/drayfruit-naylon-farali-sweet-chwda.webp";
import dryKachori from "../../assets/img/products/dry-kachori.webp";
import faraliChewda from "../../assets/img/products/farali-chewda.webp";
import faraliFudinaSev from "../../assets/img/products/farali-fudina-sev.webp";
import farsiJeeraPuri from "../../assets/img/products/farsi-jeera-puri.webp";
import gehuChewda from "../../assets/img/products/gehu-chewda.webp";
import indoriMix from "../../assets/img/products/indori-mix.webp";
import indoriSev from "../../assets/img/products/indori-sev.webp";
import jadiMasalaSev from "../../assets/img/products/jadi-masala-sev.webp";
import jainFulvadi from "../../assets/img/products/jain-fulvadi.webp";
import jiniSev from "../../assets/img/products/jini-sev.webp";
import jodhpuriTikhaMix from "../../assets/img/products/jodhpuri-tikha-mix.webp";
import jumboKelaMariWafers from "../../assets/img/products/jumbo-kela-mari-wafers.webp";
import jumboKelaMasalaWafers from "../../assets/img/products/jumbo-kela-masala-wafers.webp";
import kajuPara from "../../assets/img/products/kajupara.webp";
import lakkadSev from "../../assets/img/products/lakkad-sev.webp";
import lilaVatana from "../../assets/img/products/lila-vatana.webp";
import magMogar from "../../assets/img/products/mag-mogar.webp";
import makaiChewdo from "../../assets/img/products/makai-chevdo.webp";
import makhaniyaGathiya from "../../assets/img/products/makhaniya-gadhiya.webp";
import mariGathiya from "../../assets/img/products/mari-gathiya.webp";
import masalaBundi from "../../assets/img/products/masala-bundi.webp";
import masalaMamra from "../../assets/img/products/masala-mamra.webp";
import masalaMoong from "../../assets/img/products/masala-moong.webp";
import masalaPapdi from "../../assets/img/products/masala-papdi.webp";
import masalaSing from "../../assets/img/products/masala-sing.webp";
import methiGathiya from "../../assets/img/products/methi-gadhiya.webp";
import methiMasalaPuri from "../../assets/img/products/methi-masala-puri.webp";
import methiPara from "../../assets/img/products/methi-para.webp";
import miniBhakharwadi from "../../assets/img/products/mini-bhakkharwadi.webp";
import mixBhel from "../../assets/img/products/mix-bhel.webp";
import moriSev from "../../assets/img/products/mori-sev.webp";
import motiBhakharwadi from "../../assets/img/products/moti-bhakkharwadi.webp";
import moongChorGaram from "../../assets/img/products/mug-chor-garam.webp";
import mumbaiMasalaMix from "../../assets/img/products/mumbai-musal-mix.webp";
import navrangMudDal from "../../assets/img/products/navrang-mud-dal.webp";
import navratnaMix from "../../assets/img/products/navratna-mix.webp";
import nylonGathiya from "../../assets/img/products/naylon-gadhiya.webp";
import palakSev from "../../assets/img/products/palak-sev.webp";
import pauvaMolaChewda from "../../assets/img/products/pauaa-mola-chewda.webp";
import pauvaTikhaChewda from "../../assets/img/products/pauaa-tikha-chewda.webp";
import plainNylonPapdi from "../../assets/img/products/plan-naylon-papdi.webp";
import punjabiMasalaPuri from "../../assets/img/products/punjabi-masala-puri.webp";
import ratlamiSev from "../../assets/img/products/ratlami-sev.webp";
import redMixChawana from "../../assets/img/products/redi-nix-chawana.webp";
import riceChewda from "../../assets/img/products/rice-chewda.webp";
import roastedMix from "../../assets/img/products/rosted-mix.webp";
import royalDalmud from "../../assets/img/products/royal-dalmudd.webp";
import sakkarPara from "../../assets/img/products/sakkar-para.webp";
import singBhujia from "../../assets/img/products/sing-bhujiya.webp";
import singChikki from "../../assets/img/products/sing-chikki.webp";
import softGhehuChawana from "../../assets/img/products/soft-ghehu-chawana.webp";
import soyaBingoMasala from "../../assets/img/products/soya-bingo-masala.webp";
import soyaChips from "../../assets/img/products/soya-chips.webp";
import specialRajwadiMix from "../../assets/img/products/spe-rajwadi-mix.webp";
import tametoPara from "../../assets/img/products/tameto-para.webp";
import tamTam from "../../assets/img/products/tamtam.webp";
import tejbaharMix from "../../assets/img/products/tejbahar-mix.webp";
import tikhaChewda from "../../assets/img/products/tikha-chewda.webp";
import tikhiSev from "../../assets/img/products/tikhi-sev.webp";
import tilChikki from "../../assets/img/products/til-chikki.webp";
import star from "../../assets/img/star.svg";

/* =========================
   Product Data
========================= */
const productData = [
    { id: 18, name: "Dryfruit Nylon Farali Chewda", category: "NA", image: dryfruitNylonFaraliChewda },
    { id: 19, name: "Dryfruit Nylon Sweet Chewda", category: "NA", image: dryfruitNylonSweetChewda },
    { id: 43, name: "Masala Papdi", category: "NA", image: masalaPapdi },
    { id: 7, name: "Bhavnagari Gathiya", category: "NA", image: bhavnagariGathiya },
    { id: 73, name: "Special Rajwadi Mix", category: "NA", image: specialRajwadiMix },
    { id: 1, name: "Aloo Sev", category: "NA", image: alooSev },
    { id: 2, name: "Alu Masala Wafer", category: "NA", image: aluMasalaWafer },
    { id: 3, name: "Alu Plain Wafer", category: "NA", image: aluPlainWafer },
    { id: 4, name: "American Banana Wafer", category: "NA", image: americanKelaWafer },
    { id: 5, name: "Bengali Samosa Puri", category: "NA", image: bangaliSamosaPuri },
    { id: 6, name: "Baby Fryer", category: "NA", image: babyFryer },

    { id: 8, name: "Bhim Gathiya", category: "NA", image: bhimGathiya },
    { id: 9, name: "Bikaneri Sev", category: "NA", image: bikaneriSev },
    { id: 10, name: "Bombay Sev", category: "NA", image: bombaySev },
    { id: 11, name: "Butter Bhakharwadi", category: "NA", image: butterBhakharwadi },
    { id: 12, name: "Butter Pista", category: "NA", image: butterPista },
    { id: 13, name: "Chakri", category: "NA", image: chakri },
    { id: 14, name: "Chana Chor Garam", category: "NA", image: chanaChorGaram },
    { id: 15, name: "Chana Dal", category: "NA", image: chanaDal },
    { id: 16, name: "Dahi Mamri Mori", category: "NA", image: dahiMamriMori },
    { id: 17, name: "Disco Bikaneri Papad", category: "NA", image: discoBikaneriPapad },

    { id: 20, name: "Dry Kachori", category: "NA", image: dryKachori },
    { id: 21, name: "Farali Chewda", category: "NA", image: faraliChewda },
    { id: 22, name: "Farali Fudina Sev", category: "NA", image: faraliFudinaSev },
    { id: 23, name: "Farsi Jeera Puri", category: "NA", image: farsiJeeraPuri },
    { id: 24, name: "Gehu Chewda", category: "NA", image: gehuChewda },
    { id: 25, name: "Indori Mix", category: "NA", image: indoriMix },
    { id: 26, name: "Indori Sev", category: "NA", image: indoriSev },
    { id: 27, name: "Jadi Masala Sev", category: "NA", image: jadiMasalaSev },
    { id: 28, name: "Jain Fulvadi", category: "NA", image: jainFulvadi },
    { id: 29, name: "Jini Sev", category: "NA", image: jiniSev },
    { id: 30, name: "Jodhpuri Tikha Mix", category: "NA", image: jodhpuriTikhaMix },
    { id: 31, name: "Jumbo Kela Mari Wafers", category: "NA", image: jumboKelaMariWafers },
    { id: 32, name: "Jumbo Kela Masala Wafers", category: "NA", image: jumboKelaMasalaWafers },
    { id: 33, name: "Kaju Para", category: "NA", image: kajuPara },
    { id: 34, name: "Lakkad Sev", category: "NA", image: lakkadSev },
    { id: 35, name: "Lila Vatana", category: "NA", image: lilaVatana },
    { id: 36, name: "Mag Mogar", category: "NA", image: magMogar },
    { id: 37, name: "Makai Chewdo", category: "NA", image: makaiChewdo },
    { id: 38, name: "Makhaniya Gathiya", category: "NA", image: makhaniyaGathiya },
    { id: 39, name: "Mari Gathiya", category: "NA", image: mariGathiya },
    { id: 40, name: "Masala Bundi", category: "NA", image: masalaBundi },
    { id: 41, name: "Masala Mamra", category: "NA", image: masalaMamra },
    { id: 42, name: "Masala Moong", category: "NA", image: masalaMoong },

    { id: 44, name: "Masala Sing", category: "NA", image: masalaSing },
    { id: 45, name: "Methi Gathiya", category: "NA", image: methiGathiya },
    { id: 46, name: "Methi Masala Puri", category: "NA", image: methiMasalaPuri },
    { id: 47, name: "Methi Para", category: "NA", image: methiPara },
    { id: 48, name: "Mini Bhakharwadi", category: "NA", image: miniBhakharwadi },
    { id: 49, name: "Mix Bhel", category: "NA", image: mixBhel },
    { id: 50, name: "Mori Sev", category: "NA", image: moriSev },
    { id: 51, name: "Moti Bhakharwadi", category: "NA", image: motiBhakharwadi },
    { id: 52, name: "Moong Chor Garam", category: "NA", image: moongChorGaram },
    { id: 53, name: "Mumbai Masala Mix", category: "NA", image: mumbaiMasalaMix },
    { id: 54, name: "Navrang Mud Dal", category: "NA", image: navrangMudDal },
    { id: 55, name: "Navratna Mix", category: "NA", image: navratnaMix },
    { id: 56, name: "Nylon Gathiya", category: "NA", image: nylonGathiya },
    { id: 57, name: "Palak Sev", category: "NA", image: palakSev },
    { id: 58, name: "Pauva Mola Chewda", category: "NA", image: pauvaMolaChewda },
    { id: 59, name: "Pauva Tikha Chewda", category: "NA", image: pauvaTikhaChewda },
    { id: 60, name: "Plain Nylon Papdi", category: "NA", image: plainNylonPapdi },
    { id: 61, name: "Punjabi Masala Puri", category: "NA", image: punjabiMasalaPuri },
    { id: 62, name: "Ratlami Sev", category: "NA", image: ratlamiSev },
    { id: 63, name: "Red Mix Chawana", category: "NA", image: redMixChawana },
    { id: 64, name: "Rice Chewda", category: "NA", image: riceChewda },
    { id: 65, name: "Roasted Mix", category: "NA", image: roastedMix },
    { id: 66, name: "Royal Dalmud", category: "NA", image: royalDalmud },
    { id: 67, name: "Sakkar Para", category: "NA", image: sakkarPara },
    { id: 68, name: "Sing Bhujia", category: "NA", image: singBhujia },
    { id: 69, name: "Sing Chikki", category: "NA", image: singChikki },
    { id: 70, name: "Soft Ghehu Chawana", category: "NA", image: softGhehuChawana },
    { id: 71, name: "Soya Bingo Masala", category: "NA", image: soyaBingoMasala },
    { id: 72, name: "Soya Chips", category: "NA", image: soyaChips },

    { id: 74, name: "Tameto Para", category: "NA", image: tametoPara },
    { id: 75, name: "Tam Tam", category: "NA", image: tamTam },
    { id: 76, name: "Tejbahar Mix", category: "NA", image: tejbaharMix },
    { id: 77, name: "Tikha Chewda", category: "NA", image: tikhaChewda },
    { id: 78, name: "Tikhi Sev", category: "NA", image: tikhiSev },
    { id: 79, name: "Til Chikki", category: "NA", image: tilChikki }
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
        <React.Fragment>
            <Helmet>
                <title>Our Products | Jain Namkeen – Authentic Indian Snacks</title>

                <meta
                    name="description"
                    content="Explore Jain Namkeen’s wide range of authentic Indian namkeen and snacks including sev, gathiya, farsan, mixtures, wafers, and traditional favorites."
                />

                <meta
                    name="keywords"
                    content="Jain Namkeen products, Indian snacks, namkeen varieties, sev, gathiya, farsan, wafers"
                />

                <link rel="canonical" href="http://www.jainnamkin.com/products" />

                {/* Open Graph */}
                <meta property="og:title" content="Our Products | Jain Namkeen" />
                <meta
                    property="og:description"
                    content="Discover premium quality Indian namkeen and snacks by Jain Namkeen."
                />
                <meta property="og:url" content="http://www.jainnamkin.com/products" />
                <meta
                    property="og:image"
                    content="http://www.jainnamkin.com/images/products-og.jpg"
                />
                <meta property="og:type" content="website" />

                {/* Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Jain Namkeen Products",
                        "url": "http://www.jainnamkin.com/products",
                    })}
                </script>
            </Helmet>
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
        </React.Fragment>

    );
};

export default AllProducts;
