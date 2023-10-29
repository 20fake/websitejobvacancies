import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import LokerCard from "../components/lokerCard";
import Navbar from "../components/navbar";
import SearchBar from "../components/searchBar";

const Home = () => {

    return (
        <>
        <Navbar />
        <SearchBar />
        
        <Hero />

        <LokerCard />
        <Footer />
        </>
    )
}

export default Home;
