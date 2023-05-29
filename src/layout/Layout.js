import React from "react";
import { NavLink } from "react-router-dom";
import PermissionsLogo from "./PermissionsLogo";

const Layout =({children})=>{
    return(
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="containers d-flex align-items-center justify-content-between" >
                    <div>
                        <img src="/img/menu/irsign.png" style={{width:'70px',height:'70px'}} />
                        <span><b>پیشگامان اعتماد دیجیتال  ایرانیان</b></span>
                    </div>

                    <nav id="navbar" className="navbar" style={{margin:'0 auto'}}>
                        <ul>
                            <li><NavLink to={"/"} style={{color:'#1a3c6a'}}>خانه</NavLink></li>
                            <li><NavLink to={"/guide-products"}>راهنمای محصولات</NavLink></li>
                            <li><NavLink to={"register"}>موديان مالياتی</NavLink></li>
                            <li><NavLink to={"sell-token"}>فروش توكن سخت افزاری</NavLink></li>
                            <li>
                                {/*<LocaleSwitcher />*/}
                            </li>
                        </ul>
                    </nav>

                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                </div>
            </header>
            {children}
            <footer id="footer" className="footer">


                <div className="container" style={{marginRight:'0'}}>
                    <div className="row gy-3">
                        <div className="col-lg-3 col-md-6 d-flex">
                            <i className="bi bi-geo-alt icon"></i>
                            <div>
                                <h4>آدرس</h4>
                                <p>

                                    تهران، خیابان آزادی <br/>
                                    بین اسکندری و قریب <br/>
                                    پلاک 147/1, طبقه چهارم, واحد 33
                                </p>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 footer-links d-flex">
                            <i className="bi bi-telephone icon"></i>
                            <div>
                                <h4>ارتباط با ما</h4>

                                <p style={{direction:'ltr'}}>+982166120759</p>
                                info@iran-sign.ir<br/>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>ما را در شبکه های اجتماعی دنبال کنید</h4>
                            <div className="social-links d-flex">
                                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links d-flex">
                            <PermissionsLogo/>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        تمامی حقوق این وبسایت محفوظ و متعلق به شرکت پیشگامان اعتماد دیجیتال ایرانیان می باشد
                    </div>

                </div>

            </footer>

            <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a>
        </>
    );
}

export default Layout