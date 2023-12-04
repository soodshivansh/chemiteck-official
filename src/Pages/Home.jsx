import React from "react";

import About from "../Components/About";
import Hero from "../Components/Hero";
import Markers from "../Components/Markers";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Parallaxcarousel from "../Components/Parallaxcarousel";
import Articles from "../Components/Articles";
import Location from "../Components/Location";
import Footer from "../Components/Footer";
import Catalogue from '../Components/Catalogue';


export default function Home (){
    return(
        <div>
            <Navbar />
            <Hero />
            <Parallaxcarousel />
            <Catalogue />
            <Markers />
            <About />
            <Products />
            <Articles />
            <Location />
            <Footer />
        </div>
    )
}