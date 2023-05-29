import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import baseUrl from "../../../../api/basi_url.json";
import SimpleReactValidator from "simple-react-validator";
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CertToken =()=>{


    const [name_fa , setName_fa] = useState('');
    const [org_agent , setOrg_agent] = useState('');
    const [national_id , setNational_id] = useState('');
    const [token,setToken] = useState('');
    const [,forceUpdate] = useState();
    const validator = useRef(new SimpleReactValidator({
        messages:{
            required : "پر کردن این فیلد الزامی می باشد!",
            email : "ایمیل وارد شده صحیح نمی باشد!"

        },element:message =><div style={{color:'red'}}>{message}</div>
    }));

    useEffect(()=>{
        setToken(window.sessionStorage.getItem('access'));
        console.log(token);
    })

    const certificateToken = async (event)=>{
        event.preventDefault();

        const certificate ={name_fa,org_agent,national_id};

        try{
            if (validator.current.allValid()){
                await axios.post(`${baseUrl.baseUrl}/en/api/certificate-token/`,JSON.stringify(certificate),{
                    headers : {
                        "Authorization":`Bearer ${token}`,
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin":"*",
                    }
                }).then((res)=>{
                    console.log(res);
                    if (res.status === 201){
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
            toast.error('', {
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
            <div className="formDivStyle">
                <h4 style={{textAlign:'center'}}>{"اخذ اطلاعات شرکت جهت پیگیری صدور توکن گواهی الکترونیک"}</h4>

                <div>
                    <form style={{padding:'40px'}}>
                        <p> {"اطلاعات این فرم صرفا جهت امکان پیگیری صدور توکن شما توسط ایران ساین اخذ میشود"}</p>

                        <div style={{margin:'5px 0'}}>
                            <label style={{width:'170px'}}>{"عنوان شرکت به فارسی"}</label>

                            <input
                                style={{width:'230px',padding:'5px'}}
                                placeholder={'مثال:پیشگامان اعتماد دیجیتال ایرانیان'}
                                name={'name_fa'}
                                value={name_fa}
                                onChange={
                                    (e) =>{
                                        setName_fa(e.target.value);
                                        validator.current.showMessageFor("name_fa");}}
                            />
                            <p style={{color:'#6c757d',fontSize:'11px'}}>{"(دقیقا مطابق با آگهی تاسیس شرکت)"}</p>
                            {validator.current.message("name_fa",name_fa,"required")}

                        </div>


                        <div style={{margin:'5px 0'}}>
                            <label  style={{width:'170px'}}>{"نام و نام خانوادگی نماینده"}</label>

                            <input
                                style={{width:'230px',padding:'5px'}}
                                placeholder='مثال:محمد امینی'
                                value={org_agent}
                                name={'org_agent'}
                                onChange={(e)=>{
                                    setOrg_agent(e.target.value);
                                    validator.current.showMessageFor("org_agent");
                                }}
                            />
                            <p style={{color:'#6c757d',fontSize:'10px'}}>{"(فردی که توسط شرکت با نامه نمایندگی معرفی میگردد)"}</p>
                            {validator.current.message("org_agent",org_agent,"required")}
                        </div>


                        <div style={{margin:'5px 0'}}>
                            <label  style={{width:'170px'}}>{"شناسه ملی شرکت"} </label>

                            <input
                                style={{width:'230px',padding:'5px'}}
                                placeholder={'مثال:1410501932'}
                                value={national_id}
                                name={'national_id'}
                                onChange={(e)=>{
                                    setNational_id(e.target.value);
                                    validator.current.showMessageFor("national_id");
                                }}
                            />
                            <p style={{color:'#6c757d',fontSize:'9px'}}>{"(شناسه 11 رقمی)"}</p>
                            {validator.current.message("national_id",national_id,"required")}

                        </div>

                        <div style={{marginTop:'40px'}}>
                            <button
                                style={{backgroundColor:'#1a3c6a',border:'0',padding:'9px 20px',color:'white',borderRadius:'18px',fontSize:'14px'}}
                                onClick={certificateToken}>
                                {"ثبت اطلاعات"}</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}

export default CertToken