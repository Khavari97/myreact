import React,{useState,useRef} from "react";
import SimpleReactValidator from "simple-react-validator";
import {toast, ToastContainer} from "react-toastify";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import baseUrl from "../../../api/basi_url.json";

const Register =()=>{

    const [show , setShow] = useState(false);
    const [phone_number,setphone_number] = useState('');
    const [code , setCode] = useState('');
    const [,forceUpdate] = useState();
    const [,forceUpdate2] = useState();
    const validator = useRef(new SimpleReactValidator({
        messages:{
            required : "پر کردن این فیلد الزامی می باشد!",

        },element:message =><div style={{color:'red'}}>{message}</div>
    }));

    const validator2 = useRef(new SimpleReactValidator({
        messages:{
            required : "پر کردن این فیلد الزامی می باشد!",

        },element:message =><div style={{color:'red'}}>{message}</div>
    }));

    const handleLogin = async (event)=>{
        event.preventDefault();
        setShow(false);
        const user = {phone_number};
        try{
            if(validator.current.allValid()){
                console.log(user);
                await axios.post(`${baseUrl.baseUrl}/en/api/tax/login/`,JSON.stringify(user),{
                        headers:{
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin":"*",
                        }
                    }
                ).then((res)=>{

                    if(res.status === 201){
                        setShow(true);
                    }else{
                        setShow(false);
                    }
                })
            }else{
                validator.current.showMessages();
                forceUpdate(1);
            }

        }catch (e){
            console.log(e);
            console.log('user : ',user);
            toast.error(e.response.request.response, {
                position: "top-center",
                closeOnClick: true,
                autoClose:3000,
                rtl:true,
                theme:"colored",

            });
        }
    }

    const handleVerify = async (event)=>{
        event.preventDefault();
        const user = {phone_number,code};
        try{

            if (validator2.current.allValid()){
                console.log(user);
                await axios.post(`${baseUrl.baseUrl}/en/api/tax/verify-otp/`,JSON.stringify(user),{
                        headers:{
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin":"*",
                        }
                    }
                ).then((res)=>{
                    console.log(user);
                    if(res.status === 200){

                        window.sessionStorage.setItem('access',res.data['access']);
                        window.location.href ="/reg-guide";
                    }
                })
            }else{
                validator2.current.showMessages();
                forceUpdate2(1);

            }

        }catch (e){
            console.log(e);
            console.log('user : ',user);
            toast.error(e.response.request.response, {
                position: "top-center",
                closeOnClick: true,
                autoClose:3000,
                rtl:true,
                theme:"colored",

            });
        }
    }

    return(
        <>
            <section style={{margin:'62px'}}>
                {show ?

                    <div className="container" data-aos="fade-up">
                        <div className="section-header">

                            <p style={{fontSize: '18px'}}><span>ارسال کد</span></p>
                            <p style={{fontSize: '16px'}}>کد ارسال شده را وارد کنید</p>
                        </div>
                        <div>
                            <form>
                                <div className="row">
                                    <div className="col-xl-6 form-group" style={{margin: '0 auto'}}>
                                        <input type="text" name="code" className="form-control" id="name"
                                               placeholder='کد ارسال شده'
                                               value={code}
                                               onChange={(e) =>{
                                                   setCode(e.target.value);
                                                   validator2.current.showMessageFor("code");
                                               }}
                                               style={{width:'50%',margin:'0 auto'}}/>
                                        <p style={{textAlign:'center'}}>{validator2.current.message("code",code,"required")}</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="button"
                                            style={{
                                                backgroundColor: '#1a3c6a',
                                                border: '0',
                                                padding: '8px 30px',
                                                display: 'flex',
                                                margin: '10px auto',
                                                color: 'white',
                                                borderRadius: '50px',
                                                fontSize: '12px'
                                            }}
                                            onClick={handleVerify}>
                                        ارسال کد
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    :
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">

                            <p style={{fontSize: '18px'}}><span>ورود/ثبت نام</span></p>
                            <p style={{fontSize: '16px'}}>شماره موبایل مدیرعامل(یا نماینده مدیرعامل)</p>
                        </div>
                        <div>
                            <form>
                                <div className="row">
                                    <div className="col-xl-6 form-group" style={{margin: '0 auto'}}>
                                        <input type="text" name="phone_number" className="form-control" id="name"
                                               placeholder={"+989121234567"}
                                               value={phone_number}
                                               onChange={(e) => {
                                                   setphone_number(e.target.value);
                                                   validator.current.showMessageFor("phone_number");
                                               }}
                                               style={{width:'50%',margin:'0 auto',direction:'ltr'}}
                                        />
                                        <p style={{textAlign:'center'}}>{validator.current.message("phone_number",phone_number,"required")}</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="button"
                                            style={{
                                                backgroundColor: '#1a3c6a',
                                                border: '0',
                                                padding: '8px 30px',
                                                display: 'flex',
                                                margin: '10px auto',
                                                color: 'white',
                                                borderRadius: '50px',
                                                fontSize: '12px'
                                            }}
                                            onClick={handleLogin}
                                    > ورود به حساب کاربری
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                }
                <ToastContainer />
            </section>
        </>
    );
}

export default Register