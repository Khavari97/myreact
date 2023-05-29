import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import baseUrl from "../../../../api/basi_url.json";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import {NavLink} from "react-router-dom";

const CertCsr =()=>{


    const [name_fa , setName_fa] = useState('');
    const [name_en , setName_en] = useState('');
    const [national_id , setNational_id] = useState('');
    const [org_id , setorg_id] = useState('');
    const [token,setToken] = useState('');
    const [show , setShow] = useState(false);
    const [publicKey , setPublicKey] = useState('');
    const [,forceUpdate2] = useState();
    const validator2 = useRef(new SimpleReactValidator({
        messages:{
            required : "پر کردن این فیلد الزامی می باشد!",
            email : "ایمیل وارد شده صحیح نمی باشد!"

        },element:message =><div style={{color:'red'}}>{message}</div>
    }));

    useEffect(()=>{
        setToken(window.sessionStorage.getItem('access'));
        console.log(token);
    })

    const certificateCsr = async (event)=>{
        event.preventDefault();

        const certificate ={name_fa,name_en,national_id};

        try{
            if (validator2.current.allValid()){
                await axios.post(`${baseUrl.baseUrl}/en/api/certificate-csr/`,JSON.stringify(certificate),{
                    headers : {
                        "Authorization":`Bearer ${token}`,
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin":"*",
                    }
                }).then((res)=>{
                    console.log(res);
                    if(res.status === 200){
                        setorg_id(res.data['org_id']);
                        setPublicKey(res.data['csr_pem']);
                        setShow(true);
                    }else{
                        setShow(false);
                    }
                })
            }else {
                validator2.current.showMessages();
                forceUpdate2(1);
            }

        }catch (e){
            console.log(e);
            setShow(false);
            toast.error('', {
                position: "top-center",
                closeOnClick: true,
                autoClose:3000,
                rtl:true,
                theme:"colored",

            });
        }
    }

    const copyPublicKey = (event)=>{
        event.preventDefault();
        navigator.clipboard.writeText(publicKey);
        toast.info("کلید عمومی کپی شد", {
            position: "top-center",
            closeOnClick: true,
            autoClose:1000,
            rtl:true,
            theme:"colored",

        });
    }

    // const downloadKeyPem =async (event)=>{
    //     event.preventDefault();
    //     try{
    //
    //             await axios.get(`${baseUrl.baseUrl}/en/api/download-key-pem/${org_id}`,{
    //                 headers : {
    //                     "Authorization":`Bearer ${token}`,
    //                     "Content-Type": "application/json",
    //                     "Access-Control-Allow-Origin":"*",
    //                 }
    //             }).then((res)=>{
    //                 console.log(res.data);
    //             })
    //
    //
    //     }catch (e){
    //         console.log(e);
    //
    //     }
    //
    // }

    return(
        <>
            <div className="formDivStyle">
                <h4 style={{textAlign:'center'}}>{"ساخت فایل درخواست صدور گواهی الکترونیکی(CSR)"}</h4>

                <div>
                    <form style={{padding:'40px'}}>
                        <p style={{direction:'rtl'}}>{"پس از صدور CSR در این بخش، آن را کپی و در مرحله بعد در سامانه مرکز میانی عام استفاده نمایید"}</p>

                        <div style={{margin:'5px 0'}}>
                            <label style={{width:'170px'}}>{"عنوان شرکت به فارسی"}</label>
                            <input
                                style={{width:'255px',padding:'5px'}}
                                placeholder={'مثال:پیشگامان اعتماد دیجیتال ایرانیان'}
                                value={name_fa}
                                name={'name_fa'}
                                onChange={(e)=>{
                                    setName_fa(e.target.value);
                                    validator2.current.showMessageFor("name_fa");}}
                            />
                            <p style={{color:'#6c757d',fontSize:'11px'}}>{"(دقیقا مطابق با آگهی تاسیس شرکت)"}</p>
                            {validator2.current.message("name_fa",name_fa,"required")}

                        </div>


                        <div style={{margin:'5px 0'}}>
                            <label  style={{width:'170px'}}>{"عنوان شرکت به انگلیسی"}</label>
                            <input
                                style={{width:'255px',padding:'5px'}}
                                placeholder={'pishgamanEtemedDigitalIranian : مثال'}
                                value={name_en}
                                name={'name_en'}
                                onChange={(e)=>{
                                    setName_en(e.target.value);
                                    validator2.current.showMessageFor("name_en");
                                }}
                            />
                            <p style={{color:'#6c757d',fontSize:'10px'}}>{"(بدون فاصله)"}</p>
                            {validator2.current.message("name_en",name_en,"required")}

                        </div>


                        <div style={{margin:'5px 0'}}>
                            <label  style={{width:'170px'}}> {"شناسه ملی شرکت"} </label>
                            <input
                                style={{width:'255px',padding:'5px'}}
                                placeholder={'مثال:1410501932'}
                                value={national_id}
                                name={'national_id'}
                                onChange={(e)=>{
                                    setNational_id(e.target.value);
                                    validator2.current.showMessageFor("national_id");
                                }}
                            />
                            <p style={{color:'#6c757d',fontSize:'9px'}}>{"(شناسه 11 رقمی)"}</p>
                            {validator2.current.message("national_id",national_id,"required")}

                        </div>

                        <div style={{marginTop:'40px'}}>
                            <button
                                style={{backgroundColor:'#1a3c6a',border:'0',padding:'9px 20px',color:'white',borderRadius:'18px',fontSize:'14px'}}
                                onClick={certificateCsr}
                            >{"دریافت csr"}</button>
                        </div>
                        {show ?
                            <div className="buttonsize">
                                <button
                                    style={{backgroundColor:'#1a3c6a',border:'0',padding:'8px 20px',color:'white',borderRadius:'50px',fontSize:'12px',margin:'10px'}}
                                    onClick={copyPublicKey}
                                > کپی کردن کلید عمومی</button>

                                <button
                                    style={{backgroundColor:'#1a3c6a',border:'0',padding:'8px 20px',color:'white',borderRadius:'50px',fontSize:'12px',margin:'10px'}}
                                >
                                    <NavLink to={`${baseUrl.baseUrl}/en/api/download-key-pem/${org_id}`} style={{color:'white'}}>
                                        دانلود کلید خصوصی

                                    </NavLink>
                                </button>
                            </div>
                            :
                            null
                        }

                    </form>
                </div>
            </div>
        </>
    );
}

export default CertCsr