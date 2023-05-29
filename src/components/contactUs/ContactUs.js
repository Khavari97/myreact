import React, {useRef, useState} from 'react';
import axios from "axios";
import baseUrl from "../../api/basi_url.json";
import SimpleReactValidator from "simple-react-validator";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs =()=>{

    const [name , setName] = useState('');
    const [phone_number , setPhone_number] = useState('');
    const [email , setEmail] = useState('');
    const [message , setMessage] = useState('');
    const [,forceUpdate] = useState();
    const validator = useRef(new SimpleReactValidator({
        messages:{
            required : "پر کردن این فیلد الزامی می باشد!",
            email : "ایمیل وارد شده صحیح نمی باشد!"

        },element:message =><div style={{color:'red'}}>{message}</div>
    }));

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const user = {name,phone_number,email,message};
        try{
            if(validator.current.allValid()){
                console.log(user);
                await axios.post(`${baseUrl.baseUrl}/en/api/contact-us/`,JSON.stringify(user),{
                        headers:{
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin":"*",
                        }
                    }
                ).then((res)=>{
                    console.log(user);
                    if(res.status === 201){
                        console.log(res);
                        toast.success("پیام شما با موفقیت ارسال شد", {
                            position: "top-center",
                            closeOnClick: true,
                            autoClose:2000,
                            rtl:true,
                            theme:"colored",
                        });
                    }
                })
            }else{
                validator.current.showMessages();
                forceUpdate(1);
            }

        }catch (e){
            console.log(e);
            toast.error('لطفا موارد خواسته شده را به درستی وارد کنید', {
                position: "top-center",
                closeOnClick: true,
                autoClose:3000,
                rtl:true,
                theme:"colored",

            });
        }
    }

    return(
        <section id="events" className="contact" style={{backgroundColor:'#eee'}}>
            <div className="container" data-aos="fade-up">

                <div className="section-header">

                    <p><span>تماس با ما</span></p>
                </div>

                {/*<div className="mb-3">*/}
                {/*    <iframe style={{border:'0', width: '100%', height: '350px'}}*/}
                {/*            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"*/}
                {/*            frameBorder="0" allowFullScreen></iframe>*/}
                {/*</div>*/}

                {/*    className="php-email-form p-3 p-md-4"   */}
                <form onSubmit={handleSubmit} role="form"  style={{borderRadius:'10px',backgroundColor:'white',padding:'30px'}}>
                    <div className="row">
                        <div className="col-xl-6 form-group">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="email" placeholder={'ایمیل'}
                                style={{textAlign:'right'}}
                                value={email}
                                onChange={e =>{
                                    setEmail(e.target.value);
                                    validator.current.showMessageFor("email");
                                }}/>
                            {validator.current.message("email",email,"required|email")}
                        </div>
                        <div className="col-xl-6 form-group">
                            <input type="text" className="form-control" name="name" id="name"
                                   placeholder={'نام و نام خانوادگی'}  style={{textAlign:'right'}}
                                   value={name}
                                   onChange={e => {
                                       setName(e.target.value);
                                       validator.current.showMessageFor("name");
                                   }}/>
                            {validator.current.message("name",name,"required")}
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="phone_number" id="phone_number" placeholder={'شماره تلفن'}
                               style={{textAlign:'right'}}
                               value={phone_number}
                               onChange={e =>{
                                   setPhone_number(e.target.value);
                                   validator.current.showMessageFor("phone_number");
                               }}/>
                        {validator.current.message("phone_number",phone_number,"required")}
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="message" id="message" rows="5" placeholder={'پیام شما'}
                                  style={{textAlign:'right',resize:'none'}}
                                  value={message}
                                  onChange={e => {
                                      setMessage(e.target.value);
                                      validator.current.showMessageFor("message");
                                  }}></textarea>
                        {validator.current.message("message",message,"required")}
                    </div>

                    <div className="text-center" style={{marginTop:'10px'}}>
                        <button className="buttonStyle" >ارسال پیام</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </section>
    );
}

export default ContactUs