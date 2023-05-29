import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import baseUrl from "../../../../api/basi_url.json";
import SimpleReactValidator from "simple-react-validator";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const GuideUser =()=>{

    const [tax_code , settax_code] = useState('');
    const [token,setToken] = useState('');
    const [,forceUpdate] = useState();
    const validator = useRef(new SimpleReactValidator({
        messages:{
            required : "پر کردن این فیلد الزامی می باشد!"
        },element:message =><div style={{color:'red'}}>{message}</div>
    }));

    useEffect(()=>{
        setToken(window.sessionStorage.getItem('access'));
        console.log(token);
    })

    const handleCode = async (event)=>{
        event.preventDefault();

        const code ={tax_code};

        try{
          if (validator.current.allValid()){
              await axios.put(`${baseUrl.baseUrl}/en/api/tax-code/`,JSON.stringify(code),{
                  headers : {
                      "Authorization":`Bearer ${token}`,
                      "Content-Type": "application/json",
                      "Access-Control-Allow-Origin":"*",
                  }
              }).then((res)=>{
                  console.log(res);
                  if (res.status === 200){
                      toast.success("عملیات مورد نظر با موفقیت انجام شد", {
                          position: "top-center",
                          closeOnClick: true,
                          autoClose:2000,
                          rtl:true,
                          theme:"colored",

                      });
                  }
              })
          }else {
              validator.current.showMessages();
              forceUpdate(1);
          }

        }catch (e){
            console.log(e);
        }
    }

    return(
        <section className="why-us section-bg" style={{marginTop:'-50px'}}>
            <div className="container" data-aos="fade-up">
                <div>
                    <div className="section-header">

                        <p><span>{"راهنمای درخواست اخذ گواهی الکترونیک جهت استفاده در سامانه مودیان مالیاتی"}</span></p>
                    </div>

                    {/***/}
                    <div className="cardStyle" >

                        <p>{"1. ابتدا وارد وبسایت « مرکز میانی عام » به نشانی https://gica.ir شوید"}</p>
                        <p>{"2. از منوی بالای سایت، گزینه «ثبت نام گواهی» را انتخاب نمایید و سپس گزینه «ثبت نام غیر حضوری گواهی الکترونیک» را انتخاب نمایید"}</p>
                        <p>
                            {"3. در اواسط صفحه دکمه آبی رنگ «ثبت نام» را کلیک نمایی"}
                        </p>
                        <p>
                            {"4. مراحل سه گانه ثبت نام را تکمیل نمایید. ثبت نام باید به نام و شماره تلفن همراه مدیر عامل یا نماینده معرفی شده شرکت باشد"}
                        </p>

                    </div>


                    {/* 1 */}
                    <div className="row g-0" style={{marginBottom:'30px',backgroundColor:'white',padding:'10px',borderRadius:'5px'}}>

                        <img className="col-lg-8 col-sm-8 reservation-img ImgStyle" src={'/img/guide/1.jpg'}

                             data-aos="zoom-out"
                             data-aos-delay="200"/>

                        <div className="col-lg-4 col-sm-4 d-flex align-items-center reservation-form-bg" style={{borderRadius:'20px',marginBottom:'10px',padding:'10px'}}>
                            <div style={{fontSize:'13px'}}>
                                <p>
                                    {"پس از اتمام مراحل ثبت نام نماینده، به طور خودکار به صفحه ابتدایی باز میگردید. در این مرحله باید با کد ملی و کلمه عبوری که در مرحله قبل انتخاب کرده اید در سامانه وارد شود. مطابق با تصویر زیر از کادر کوشه بالای سمت راست صفحه وارد شود. جهت ورود از دکمه «ورود متقاضیان امضای الکترونیکی» استفاده نمایید"}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="row g-0" style={{marginBottom:'30px',backgroundColor:'white',padding:'10px',borderRadius:'5px'}}>

                        <img className="col-lg-8 col-sm-8 reservation-img ImgStyle" src={'/img/guide/2.jpg'}

                             data-aos="zoom-out"
                             data-aos-delay="200"/>

                        <div className="col-lg-4 col-sm-4 d-flex align-items-center reservation-form-bg" style={{borderRadius:'20px',marginBottom:'10px',padding:'10px'}}>
                            <div style={{fontSize:'13px'}}>
                                <p>
                                    {"  5. پس از ورود به سامانه، از منوی سمت راست گزینه «ثبت درخواست گواهی الکترونیک» و سپس گزینه «ثبت درخواست گواهی» را انتخاب نمایید"}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="row g-0" style={{marginBottom:'30px',backgroundColor:'white',padding:'10px',borderRadius:'5px'}}>
                        <img className="col-lg-8 col-sm-8 reservation-img ImgStyle" src={'/img/guide/3.jpg'}

                             data-aos="zoom-out"
                             data-aos-delay="200"/>

                        <div className="col-lg-4 col-sm-4 d-flex align-items-center reservation-form-bg" style={{borderRadius:'20px',marginBottom:'10px',padding:'10px'}}>
                            <div style={{fontSize:'13px'}}>
                                <p>
                                    {"  در این مرحله باید نوع گواهی را انتخاب نمایید. در قسمت وسط صفحه نوع گواهی را «متقاضی وابسته به غیر دولت» انتخاب نمایید. سپس در پنجره پایین گزینه «گواهی مهر سازمانی وابسته به غیر دولت» را انتخاب نمایید"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="row g-0" style={{marginBottom:'30px',backgroundColor:'white',padding:'10px',borderRadius:'5px'}}>

                        <img className="col-lg-8 col-sm-8 reservation-img ImgStyle" src={'/img/guide/4.jpg'}

                             data-aos="zoom-out"
                             data-aos-delay="200"/>

                        <div className="col-lg-4 col-sm-4 d-flex align-items-center reservation-form-bg" style={{borderRadius:'20px',marginBottom:'10px',padding:'10px'}}>
                            <div style={{fontSize:'13px'}}>
                                <p>
                                    {" در این مرحله باید نوع گواهی را انتخاب نمایید. در قسمت وسط صفحه نوع گواهی را «متقاضی وابسته به غیر دولت» انتخاب نمایید. سپس در پنجره پایین گزینه «گواهی مهر سازمانی وابسته به غیر دولت» را انتخاب نمایید"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 5 */}
                    <div className="row g-0" style={{marginBottom:'30px',backgroundColor:'white',padding:'10px',borderRadius:'5px'}}>

                        <img className="col-lg-8 col-sm-8 reservation-img ImgStyle" src={'/img/guide/5.jpg'}

                             data-aos="zoom-out"
                             data-aos-delay="200"/>

                        <div className="col-lg-4 col-sm-4 d-flex align-items-center reservation-form-bg" style={{borderRadius:'20px',marginBottom:'10px',padding:'10px'}}>
                            <div style={{fontSize:'13px'}}>
                                <p>
                                    {"  در ادامه در بخش پایینتر باید «اطلاعات سازمان» را کامل نمایید. ابتدا میبایست «شناسه ملی 11 رقمی» شرکت را در کادر مربوطه وارد نمایید. سپس دکمه سمت چپ صفحه «تکمیل اطلاعات» را کلیک نمایید. پس از کمی صبر اطلاعات شرکت شما در کادر پایین نمایان میشود. پس از اطمینان از صحت اطلاعات، کادر های خالی لازم را مطابق تصویر پایین کامل نمایید. و دکمه پایین صفحه «پیش ثبت نام» را کلیک نمایید"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 6 */}
                    <div className="row g-0" style={{marginBottom:'30px',backgroundColor:'white',padding:'10px',borderRadius:'5px'}}>

                        <img className="col-lg-8 col-sm-8 reservation-img ImgStyle" src={'/img/guide/6.jpg'}

                             data-aos="zoom-out"
                             data-aos-delay="200"/>

                        <div className="col-lg-4 col-sm-4 d-flex align-items-center reservation-form-bg" style={{borderRadius:'20px',marginBottom:'10px',padding:'10px'}}>
                            <div style={{fontSize:'13px'}}>
                                <p>
                                    {"  در مرحله بعد به درگاه پرداخت منتقل میشود و سهم دولتی گواهی را پرداخت می نمایید. در ادامه به وبسایت بازگشته و با صفحه زیر مواجه می شوید. ثبت نام اولیه شما کامل شده است. حال می بایست «کد رهگیری» که در کادر سبز رنگ قرار دارد را کپی کرده و در ساین پنل خود در ایران ساین (پایین همین صفحه) وارد نمایید"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* sabte code */}
                    <div className="cardStyle" >
                        <div>
                            <h2>{"ثبت کد مالیاتی"}</h2>
                            <p> {" کد دریافتی از سامانه جیکا را در کادر زیر وارد کنید و دکمه ثبت را فشار دهید"} </p>
                            {validator.current.message("tax_code",tax_code,"required")}
                            <input placeholder={"کدمالیاتی"}
                                   style={{padding:'5px',margin:'0 10px'}}
                                   name={'tax_code'} value={tax_code}
                                   onChange={e =>{
                                       settax_code(e.target.value);
                                       validator.current.showMessageFor("tax_code");
                                   }}/>

                            <button onClick={handleCode} className="coderehgiri" > {" ثبت کد رهگیری"}</button>
                        </div>
                    </div>
                    {/* 10 */}
                    <div className="cardStyle">
                        <div>

                            <p>{"10. در مرحله نهایی نوع خدمات خود را از لیست محصولات پایین همین صفحه انتخاب نمایید و پس از واریز وجه، بقیه مراحل توسط ایران سایت پی گیری خواهد شد و گواهی شما در محل شرکت شما تحویل می گردد"}</p>

                        </div>
                    </div>

                </div>

            </div>
            <ToastContainer />
        </section>
    );
}

export default GuideUser