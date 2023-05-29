import React from "react";
import Layout from "../../layout/Layout";
import AboutUs from "../../components/aboutUs/AboutUs";
import PropertyProducts from "../../components/propertyProducts/PropertyProducts";
import Standards from "../../components/Standards/Standards";
import Video from "../../components/video/Video";
import ContactUs from "../../components/contactUs/ContactUs";
import Slider from "../../components/Slider/Slider";

const Home =()=>{
    return(
        <>
            <AboutUs/>
            <PropertyProducts/>
            <Standards/>
            <Video/>
            <Slider/>
            <ContactUs/>
        </>
    );
}

export default Home