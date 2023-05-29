import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import MainNavs from "../navs/MainNavs";
import TopNav from "../navs/TopNav";
import Navbar from "../login/Navbar";

const MainLayout = (props) => {
    return (
        <>
            <div className="landing-layer">
                <div className="container">
                    <TopNav />
                    <Header />
                </div>
            </div>

            <MainNavs/>


            <main id="home-page">
                <div className="container">
                    {props.children}
                </div>
            </main>

           <Footer/>
        </>
    )
}

export default MainLayout
