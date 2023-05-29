import React from "react";

const AboutUs =()=>{
    return(
        <>
            <section id="stats-counter" className="stats-counter">
                <div className="container" data-aos="zoom-out">

                    <div className="row gy-4">
                    </div>
                </div>
            </section>

            <section id="contact" className="menu" >
                <div className="container" data-aos="fade-up">

                    <div className="section-header">

                        <p><span>ارائه ی امن ترین بستر امضای دیجیتال کشور</span></p>
                    </div>

                    <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">

                        <li className="nav-item">
                            <a className="nav-link  active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
                                <h4>چرا ما؟</h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
                                <h4>هدف ما</h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
                                <h4>درباره ما</h4>
                            </a>
                        </li>
                    </ul>

                    <div className="tab-content" data-aos="fade-up" data-aos-delay="300" style={{marginTop:'20px',lineHeight:'2'}}>

                        <div className="tab-pane fade active show" id="menu-starters" style={{width:'50%',margin:'0 auto'}}>
                            <div>
                                <p>
                                    وجه تمایز ایران ساین استفاده از تلفن همراه به جای توکن می باشد تا برای دریافت گواهیِ امضا نیاز به رفت و آمد و حضور افراد در مراکز به حداقل رسد
                                </p>
                            </div>
                        </div>


                        <div className="tab-pane fade" id="menu-breakfast" style={{width:'50%',margin:'0 auto'}}>
                            <div>
                                <p>
                                    استفاده از سرویس امضای دیجیتال ایران ساین، برای شرکت ها کاهش هزینه ها، افزایش کارآمدی و مدیریت بهینه اسناد، برای افراد کاهش رفت و آمد و افزایش سرعت دریافت خدمات و از همه مهمتر برای محیط زیست کم شدن مصرف کاغذ و درنتیجه کاهش قطع درختان را به همراه دارد
                                </p>
                            </div>
                        </div>


                        <div className="tab-pane fade" id="menu-lunch" style={{width:'50%',margin:'0 auto'}}>
                            <div className="book-a-table">

                                ایران ساین با هدف ایجاد نظام اداری مدرن و بدون کاغذ ایجاد شد تا با ارائه راهکار امضای دیجیتال فرآیند امضای اسناد را تسریع و هزینه ها را کاهش دهد

                                <div className="buttonsize">
                                    <a href="https://iran-sign.ir/IranSign.pdf">
                                        <button type="button"
                                                style={{backgroundColor:'#1a3c6a',border:'0',padding:'8px 20px',color:'white',borderRadius:'50px',fontSize:'12px',margin:'10px'}}>

                                            معرفی محصول ایران ساین</button>
                                    </a>

                                    <a href="https://iran-sign.ir/IranSign.apk">
                                        <button type="button"
                                                style={{backgroundColor:'#1a3c6a',border:'0',padding:'8px 20px',color:'white',borderRadius:'50px',fontSize:'12px',margin:'10px'}}>

                                            دانلود اپلیکیشن(فایل نصبی)</button>
                                    </a>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </section>
        </>
    );
}

export default AboutUs