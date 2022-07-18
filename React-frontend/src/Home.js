import React from "react";
import ImgCarousel from './components/carousel/ImgCarousel';
import Destinations from './components/destinations/Destinations'

import Hero from './components/hero/Hero'

import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import AddEmployeeComponent from "./components/Booking/Book";
const Home = () => {
    return (
        <>
            <Hero />
            <Destinations />
            <Search />
            <Selects />
            <ImgCarousel />

        </>
    )
}
export default Home;