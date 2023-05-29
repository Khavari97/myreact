import React, { useState , createContext ,useRef} from "react";
import { registerUser } from "../../api/UserService";
import { Outlet } from "react-router-dom";
import Otp from "../otp/Otp";
import SimpleContext from "../contextApi/simpleContext";
import { ToastContainer,toast } from "react-toastify";
import * as yup from 'yup';
import { useFormik } from "formik";
import Modal from "../otp/Modal";
import Phone from "./Phone";



export const test = createContext();

const Register = (props) => {

    

    const checkbox = useRef();

    const [phoneNumber, setphoneNumber] = useState("");
    const [nationalCode, setnationalCode] = useState("");
    const [ticket, setTicket] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [timeString, setTimeString] = useState("");

    const [show , setShow] = useState(false);

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
    
    const validationSchema = yup.object({
        phoneNumber: yup
            .string()
            .required("لطفا ایمیل خودرا وارد کنید")
            .email("لطفا ایمیل خود را به درستی وارد کنید")
            .min(1, "حداقل 1 حرف میتوانید وارد کنید")
            .max(224, "حداکثر 224 حرف میتوانید وارد کنید"),

    });

    const resetInput = () => {
        setphoneNumber("");
        setnationalCode("");

    }

    const handleSubmit = event => {
        event.preventDefault();
        const user = {
            //  fullname : fullname
            phoneNumber, nationalCode
        };
        //send data
        if(checkbox.current.checked){
            setShow(false);
            registerUser(user).
            then(response => {
                resetInput();
                console.log(response)
                console.log(user);
                console.log(response.data);
                // console.log(fullname);
                setTicket(phoneNumber);
                console.log(ticket);
                Timer();
                toast.error("کد یکبار مصرف ارسال شد", {
                    position: "top-right",
                    closeOnClick: true
                });

                window.location.href = "/otp";



            }).
            catch(er => console.log(er))
        }else{
            setShow(true);
        }

        console.log(user);

        console.log(JSON.stringify(user));
    }
    console.log("ticket");
    console.log(ticket);
    return (
       
         <>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                       aria-controls="home" aria-selected="true">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                       aria-controls="profile" aria-selected="false">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                       aria-controls="contact" aria-selected="false">Contact</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <h1>hello</h1>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            </div>
            <ToastContainer />
         </>

    );
}

export default Register;