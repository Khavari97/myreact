import React, { useState ,useContext,useEffect} from "react";
import {otpUser, registerUser} from "../../api/UserService";
import SimpleContext from "../contextApi/simpleContext";
import CountDown from "./Timer";
import { test } from "../register/Register";
import Phone from "../register/Phone";
import OTPInput from "otp-input-react";

const Otp = (props) => {

    const context = useContext(SimpleContext);
    const ts = useContext(test);

    const [fullname, setFullname] = useState("");
    const [phone , setPhone] = useState("");

    // timer

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [timeString, setTimeString] = useState("");

    //func timer
    const Timer = () => {
        setIsSubmitting(true)
        let start = Date.now(),
            diff,
            minutes,
            seconds;

        const startTimer = () => {
            diff = 120 - (((Date.now() - start) / 1000) | 0);
            minutes = (diff / 60) | 0;
            seconds = (diff % 60) | 0;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            setTimeString(minutes + ":" + seconds)
            if (diff <= 0) {
                clearInterval(interval)
                setIsSubmitting(false)
            }
        }
        const interval = setInterval(startTimer, 1000)
    }

    useEffect(()=>{
        Timer();

    },[]);

    const handleClick =()=>{
        setIsSubmitting(true)
        Timer()
    }
    // end function timer

    const resetInput = () => {
        setFullname("");
        
        


    }
    const clientID = "mobileApp";
    const deviceId = "string";
    const deviceName = "string";
    const otpTicket = context.ticket;
   // const phone = context.numberphone;

    const handleSubmit = event => {
        event.preventDefault();

        //setPhone(phonenumber);
        setPhone(context.numberphone);
        
        const user = {
            //  fullname : fullname

            //clientID,deviceId,deviceName,fullname,otpTicket
            phone,fullname
        };
        //send data
        otpUser(user).
        then(response =>{
            //resetInput();
            console.log(user);
            console.log(response);
            console.log(response.data['token']);
            localStorage.setItem('token',response.data['token']);
            window.location.href = "/archive";
            console.log(user);
            var a = localStorage.getItem('token');
            console.log('token is');
            console.log(a);
        } ).
        catch(er => console.log(er))

        console.log(user);

        console.log(JSON.stringify(user));
    }
    return (
        <main  className="client-page">

            <div className="container-content">

                <header><h4 style={{textAlign:'center',marginBottom:'15px'}}> لطفا کد وارد شده به شماره 09121234567 را وارد کنید </h4></header>
                                <div className="form-layer">
                    <form onSubmit={handleSubmit}>

                        <div style={{display:'flex',margin:'15px auto'}}>
                            <OTPInput
                                value={fullname}
                                onChange={setFullname}
                                autoFocus
                                OTPLength={6}
                                otpType="number"
                                disabled={false}
                                className='otp'
                                style={{direction:'ltr'}}

                            />
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="username"><i className="zmdi zmdi-account"></i></span>
                            <input type="text"
                                   className="form-control"
                                   placeholder="کد"
                                   aria-describedby="username"
                                   value={fullname}
                                   onChange={e => setFullname(e.target.value)} />
                        </div>
                        <p>time :{timeString} </p>
                        {/* <p>  زمان باقیمانده <CountDown duration={120}/></p> */}
                        <p><Phone/></p>

                        {/*<div className="input-group">*/}
                        {/*    <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>*/}
                        {/*    <input type="number"*/}
                        {/*           className="form-control"*/}
                        {/*           placeholder="ایمیل"*/}
                        {/*           aria-describedby="email-address"*/}
                        {/*           value={email}*/}
                        {/*           onChange={e => setEmail(e.target.value)} />*/}
                        {/*</div>*/}

                        {/*<div className="input-group">*/}
                        {/*    <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>*/}
                        {/*    <input*/}
                        {/*        type="password"*/}
                        {/*        className="form-control"*/}
                        {/*        placeholder="رمز عبور "*/}
                        {/*        aria-describedby="password"*/}
                        {/*        value={password}*/}
                        {/*        onChange={e => setPassword(e.target.value)} />*/}
                        {/*</div>*/}

                        <div className="link">
                            <a href=""> <i className="zmdi zmdi-account"></i> ورود به سایت </a>
                        </div>

                        <button className="btn btn-success" disabled={isSubmitting} onClick={Timer}> عضویت در سایت </button>

                    </form>
                </div>

            </div>
        </main>

    );
}

export default Otp;