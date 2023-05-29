import React,{useState} from "react";

const SellToken =()=>{

    const [show1 , setShow1] = useState(false);
    const [show2 , setShow2] = useState(false);

    const handleShow1 =()=>{
        setShow1(!show1);
    }

    const handleShow2 =()=>{
        setShow2(!show2);
    }

    return(
        <>
            <section id="book-a-table" className="book-a-table" style={{marginTop:'20px'}}>
                <div className="container" data-aos="fade-up">

                    <div className="section-header">

                        <p>نماینده فروش توکن های سخت افزاری امضای دیجیتال</p>
                    </div>

                    <div className="row g-0">

                        <img className="col-lg-4 col-sm-6 reservation-img" src={'/img/gallery/token1.jpg'}
                            // style={{height:'300px',width:'400px'}}
                             data-aos="zoom-out"
                             data-aos-delay="200"/>

                        <div className="col-lg-8 col-sm-6 d-flex align-items-center reservation-form-bg" style={{borderRadius:'20px',marginBottom:'10px',padding:'10px'}}>
                            <div style={{fontSize:'13px'}}>
                                <p style={{fontWeight:'700',color:'#1a3c6a'}}>

                                    EPass3003 Auto
                                </p>

                                <p>
                                    راستین طلایی توکن امضای دیجیتال است که با فرایند رمزنگاری و رمزگشایی اطلاعات سرویس های محرمانگی، انکارناپذیری، احرازهویت، دست نخوردگی و حفظ تمامیت اطلاعات الکترونیکی را فراهم می کند و در سامانه هایی که توانایی استفاده از زیرساخت کلیدعمومی در آن ها فراهم شده، قابل استفاده می باشد. توکن بومی امضای دیجیتال راستین طلایی، مدل پیشرفته و توسعه یافته توکن امضای دیجیتال ePass3003 بوده و بدون شک از ایمن ترین توکن های بومی امضای دیجیتال است.
                                </p>
                                {show1?
                                    <div>
                                        <p>برخی از سامانه های قابل استفاده</p>

                                        <p>سامانه تدارکات الکترونیک دولت(ستاد)،سامانه بانک ملت،سامانه جامع تجارت،سامانه بارنامه برخط سازمان راهداری،سامانه املاک و مستغلات،درگاه واحد خدمات الکتونیک سازمان بنادر و دریانوردی،سامانه تبادل الکترونیکی قراردادها در ساپکو،سامانه ثبت ازدواج،دفتریاران و سردفتران و بسیاری سامانه های دیگر.</p>

                                        <p>ویژگی ها</p>
                                        <ul>
                                            <li>پرفروش ترین توکن در سراسر دنیا</li>
                                            <li>دارای امتیاز 840 از مرکز دولتی صدور گواهی الکترونیکی ریشه</li>
                                            <li>قابلیت نصب خودکار(Plug & Play)</li>
                                            <li>بدون نیاز به نصب رایور(Driverless)</li>
                                            <li>قابلیت نگهداری تا 8 گواهی امضای دیجیتال</li>
                                            <li>سازگار با سیستم عامل های 32 و 64 بیتی</li>
                                            <li>دارای گارانتی تعویض بدون پرسش</li>
                                            <li>دارای شبکه گسترده نمایندگی فروش و گارانتی</li>
                                            <li>پشتیبانی سیستم عامل های ویندوز، مک و لینوکس</li>
                                            <li>سازگار با تمام سامانه های مجهز به امضای دیجیتال</li>
                                        </ul>



                                    </div>
                                    :
                                    null}

                                <button onClick={handleShow1}
                                        style={{backgroundColor:'#1a3c6a',border:'0',padding:'8px 30px',display:'flex',margin:'0 auto',color:'white',borderRadius:'50px',fontSize:'12px'}}
                                >{show1 ? 'مشاهده کمتر':'مشاهده بیشتر'}</button>



                            </div>
                        </div>


                    </div>

                    <div className="row g-0">

                        <img className="col-lg-4 col-sm-6 reservation-img" src={'/img/gallery/token2.jpg'}
                            // style={{height:'300px',width:'400px'}}
                             data-aos="zoom-out"
                             data-aos-delay="200"/>

                        <div className="col-lg-8 col-sm-6 d-flex align-items-center reservation-form-bg" style={{borderRadius:'20px',marginBottom:'10px',padding:'10px'}}>
                            <div style={{fontSize:'13px'}}>
                                <p style={{fontWeight:'700',color:'#1a3c6a'}}>
                                    راستین طلایی
                                </p>

                                <p>
                                    سخت افزار ePass3003 Auto توکن امضای دیجیتال است که با فرایند رمزنگاری و رمزگشایی اطلاعات، سرویس های محرمانگی، انکارناپذیری، احراز هویت، دست نخوردگی و تمامیت را فراهم می کند و در سامانه هایی که توانایی استفاده از زیرساخت کلید عمومی در آن ها فراهم شده است، قایل استفاده می باشد.
                                </p>
                                {show2?
                                    <div>
                                        <p>برخی از سامانه های قابل استفاده</p>
                                        <p>
                                            سامانه تدارکات الکترونیک دولت(ستاد)،سامانه بانک ملت،سامانه جامع تجارت،سامانه بارنامه برخط سازمان راهداری،سامانه املاک و مستغلات،درگاه واحد خدمات الکتونیک سازمان بنادر و دریانوردی،سامانه تبادل الکترونیکی قراردادها در ساپکو،سامانه ثبت ازدواج،دفتریاران و سردفتران و بسیاری سامانه های دیگر.
                                        </p>
                                        <p>ویژگی ها</p>

                                        <ul>
                                            <li>دارای امتیاز 840 از مرکز دولتی صدور گواهی الکترونیکی ریشه</li>
                                            <li>قابلیت نصب خودکار(Plug & Play)</li>
                                            <li>بدون نیاز به نصب رایور(Driverless)</li>
                                            <li>قابلیت نگهداری تا 8 گواهی امضای دیجیتال</li>
                                            <li>سازگار با سیستم عامل های 32 و 64 بیتی</li>
                                            <li>دارای گارانتی تعویض بدون پرسش</li>
                                            <li>دارای شبکه گسترده نمایندگی فروش و گارانتی</li>
                                            <li>پشتیبانی سیستم عامل های ویندوز، مک و لینوکس</li>
                                            <li>سازگار با تمام سامانه های مجهز به امضای دیجیتال</li>
                                        </ul>
                                    </div>
                                    :
                                    null}

                                <button onClick={handleShow2}
                                        style={{backgroundColor:'#1a3c6a',border:'0',padding:'8px 30px',display:'flex',margin:'0 auto',color:'white',borderRadius:'50px',fontSize:'12px'}}
                                >{show2 ? 'مشاهده کمتر':'مشاهده بیشتر'}</button>

                            </div>
                        </div>


                    </div>

                </div>
            </section>
        </>
    );
}

export default SellToken