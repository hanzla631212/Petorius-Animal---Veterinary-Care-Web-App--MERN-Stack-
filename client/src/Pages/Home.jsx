import React, { useState, useEffect } from "react";
// import Navbar from "../Component/Navbar/Navbar";
import MainPageCard from "../Components/MainPageCarCard/Mainpagecarcard";
// import Footer from "../Component/Footermain/Footermain";
import SmallBanner from "../Components/SmallBanner/SmallBanner";
import TopDestinations from "../Components/TopDestinations/TopDestinations";
import Rooms from "../Components/Room/Room";
import HeroSection from "../Components/Hero/Hero";
// import BookCarForm from "../Component/BookCarForm/BookCarForm";



function Home() {
 
  return (
    <>
      
      <HeroSection/>
      <TopDestinations/>
      <MainPageCard/>
      <Rooms/>
      <SmallBanner />
      
  
    </>
  );
}

export default Home;
