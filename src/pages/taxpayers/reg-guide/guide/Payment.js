import React from "react";
import {NavLink} from "react-router-dom";

const Payment =()=>{



    return(
        <section id="gallery" className="why-us section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-header">

                    <p><span>{"پرداخت هزینه"}</span></p>
                </div>

                <div className="row gy-4">

                    <div className="col-lg-12 d-flex align-items-center">
                        <div className="row gy-4"  style={{width:'100%'}}>
                            {/* 1 */}

                            <div className="col-xl-3" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon-box d-flex flex-column justify-content-center align-items-center" style={{direction:'rtl'}}>

                                    <h4>{"بسته برنزی"}</h4>
                                    <p>{"استخراج کلید عمومی"}</p>
                                    <p>{"پشتیبانی یک ساله"}</p>

                                    <NavLink to={"https://iran-sign.com/fa/basket/3924000"}>
                                        <button className="paymentBtn">
                                            {"هزینه"}<br/>
                                            {"360000 تومان"}<br/>
                                            {"هزینه با مالیات برارزش افزوده"}<br/>
                                            {"392400 تومان"}
                                        </button>
                                    </NavLink>

                                </div>
                            </div>

                            {/* 2 */}

                            <div className="col-xl-3" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon-box d-flex flex-column justify-content-center align-items-center" style={{direction:'rtl'}}>

                                    <h4>{"بسته نقره ای"}</h4>

                                    <p>{"صدور گواهی الکترونیکی امضای دیجیتال"}</p>
                                    <p>{"استخراج کلید عمومی"}</p>
                                    <p>{"پشتیبانی یک ساله"}</p>

                                    <NavLink to={"https://iran-sign.com/fa/basket/8175000"}>
                                        <button className="paymentBtn">
                                            {"هزینه"}<br/>
                                            {"750000 تومان"}<br/>
                                            {"هزینه با مالیات برارزش افزوده"}<br/>
                                            {"817500 تومان"}
                                        </button>
                                    </NavLink>

                                </div>
                            </div>

                            {/* 3 */}

                            <div className="col-xl-3" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon-box d-flex flex-column justify-content-center align-items-center" style={{direction:'rtl'}}>

                                    <h4>{"بسته طلایی"}</h4>
                                    <p>{"صدور گواهی الکترونیکی امضای دیجیتال"}</p>
                                    <p>{"استخراج کلید عمومی"}</p>
                                    <p>{"ارائه خدمات در محل متقاضی"}</p>
                                    <p>{"پشتیبانی یک ساله"}</p>

                                    <NavLink to={"https://iran-sign.com/fa/basket/11554000"}>
                                        <button className="paymentBtn">
                                            {"هزینه"}<br/>
                                            {"1060000 تومان"}<br/>
                                            {"هزینه با مالیات برارزش افزوده"}<br/>
                                            {"1155400 تومان"}
                                        </button>
                                    </NavLink>

                                </div>
                            </div>

                            {/* 4 */}

                            <div className="col-xl-3" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon-box d-flex flex-column justify-content-center align-items-center" style={{direction:'rtl'}}>

                                    <h4>{"بسته پلاتینیومی"}</h4>
                                    <p>{"صدور گواهی الکترونیکی امضای دیجیتال"}</p>
                                    <p>{"استخراج کلید عمومی"}</p>
                                    <p>{"توکن سخت افزاری"}</p>
                                    <p>{"ارائه خدمات در محل متقاضی"}</p>
                                    <p>{"پشتیبانی یک ساله"}</p>

                                    <NavLink to={"https://iran-sign.com/fa/basket/15260000"}>
                                        <button className="paymentBtn">
                                            {"هزینه"}<br/>
                                            {"1400000 تومان"}<br/>
                                            {"هزینه با مالیات برارزش افزوده"}<br/>
                                            {"1526000 تومان"}
                                        </button>
                                    </NavLink>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Payment