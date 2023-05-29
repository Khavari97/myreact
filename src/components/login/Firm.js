import React, {useRef, useState} from "react";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import Navbar from "./Navbar";

const Firm =()=>{

    const [one , setone] = useState('');
    const [two , settwo] = useState('');
    const [three , setthree] = useState('');
    const [four , setfour] = useState('');
    const [five , setfive] = useState('');
    const [six , setsix] = useState('');
    const [show , setShow] = useState(false);
    const checkbox = useRef();

    return(
        <>
            <main  className="client-page col-lg-12 col-sm-12">
                <div  className="container-content" style={{width:'900px'}}>



                    <div  className="form-layer">

                        <form>

                            <div className="col-lg-6">
                                <h3 style={{textAlign:'center',paddingBottom:'10px'}}> اطلاعات موسسه </h3>
                                <div  className="input-group">
                                    <span  className="input-group-addon" id="email-address"><i  className="zmdi zmdi-accounts"></i></span>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="نام موسسه"
                                           aria-describedby="email-address"
                                           value={one}
                                           onChange={e => setone(e.target.value)}/>
                                </div>
                                <div className="input-group">
                                    <span  className="input-group-addon" id="email-address"><i  className="zmdi zmdi-accounts"></i></span>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="شناسه ملی موسسه"
                                           aria-describedby="email-address"
                                           value={two}
                                           onChange={e => settwo(e.target.value)}/>
                                </div>
                                <div className="input-group">
                                    <span  className="input-group-addon" id="email-address"><i  className="zmdi zmdi-accounts"></i></span>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="کد اقتصادی"
                                           aria-describedby="email-address"
                                           value={three}
                                           onChange={e => setthree(e.target.value)}/>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <h3 style={{textAlign:'center',paddingBottom:'10px'}}> اطلاعات مدیر عامل </h3>
                                <div  className="input-group">
                                    <span  className="input-group-addon" id="email-address"><i  className="zmdi zmdi-account"></i></span>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="نام مدیر عامل"
                                           aria-describedby="email-address"
                                           value={four}
                                           onChange={e => setfour(e.target.value)}/>
                                </div>
                                <div className="input-group">
                                    <span  className="input-group-addon" id="email-address"><i  className="zmdi zmdi-account"></i></span>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="کد ملی مدیر عامل"
                                           aria-describedby="email-address"
                                           value={five}
                                           onChange={e => setfive(e.target.value)}/>
                                </div>
                                <div className="input-group">
                                    <span  className="input-group-addon" id="email-address"><i  className="zmdi zmdi-account"></i></span>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="تلفن همراه مدیر عامل"
                                           aria-describedby="email-address"
                                           value={six}
                                           onChange={e => setsix(e.target.value)}/>
                                </div>
                            </div>
                            <div className="accept-rules">
                                <label style={{marginTop:'10px '}}><input type="checkbox" name="" ref={checkbox}/>  قوانین و مقررات سایت را میپذیرم </label>
                            </div>
                            <div className="link">
                                <a href=""> <i className="zmdi zmdi-account"></i> ورود به پنل </a>
                            </div>

                            <button  className="btn btn-success"> ثبت نام </button>

                        </form>
                    </div>

                </div>
            </main>
        </>
    );
}

export default Firm;