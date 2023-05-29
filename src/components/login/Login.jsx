import React , {useState,useContext} from "react";
import { ToastContainer,toast } from "react-toastify";
import { loginUser } from "../../api/UserService";
import SimpleContext from "../contextApi/simpleContext";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import Switch from "react-switch";

const Login =()=>{

    const [email , setEmail] = useState("");
    const [ password, setPassword ] = useState('');
    const [checked , setchecked] = useState(false);

    const handleCheck =()=>{
        setchecked(!checked);
    }
    var ticket;

    const resetInput =()=>{
        setEmail("");
    
    }

    const handleSubmit =(event)=>{
        event.preventDefault();

        const user ={
            email
        };

        loginUser(user)
        .then(response =>{
            
            if(response.status == 200){
                console.log(response.status);
            console.log(response.data.message);
            console.log(response)
            console.log(user);
            console.log(response.data);
           
            toast.error("کد یکبار مصرف ارسال شد", {
                position: "top-right",
                closeOnClick: true
            });
            window.location.href = "/archive";

            }
            

        }).catch((err) =>{
            console.log(err);
        })
    }
    return(
        <SimpleContext.Provider value={{ticket : ticket}}>
            <main  className="client-page">
            <div  className="container-content">

                <header><h2> ورود به سایت </h2></header>

                <div  className="form-layer">

                    <form onSubmit={handleSubmit}>

                        <label>
        <span>Switch with default style</span>
        {/* <Switch onChange={handleCheck} checked={checked} /> */}
        <Switch
            checked={checked}
            onChange={handleCheck}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
      </label>

                        <div  className="input-group">
                            <span  className="input-group-addon" id="email-address"><i  className="zmdi zmdi-email"></i></span>
                            <input type="text"
                              className="form-control"
                               placeholder="شماره تلفن"
                                aria-describedby="email-address"
                                value={email}
                                onChange={e => setEmail(e.target.value)}/>
                        </div>
                       
                        <PasswordStrengthMeter password={password} />

                        {/* <div  className="input-group">
                            <span  className="input-group-addon" id="password"><i  className="zmdi zmdi-lock"></i></span>
                            <input type="password"
                              className="form-control"
                               placeholder="رمز عبور "
                                aria-describedby="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                />
                        </div> */}

                         <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                            </div>
                        <div  className="remember-me">
                            <label><input type="checkbox" name=""/>  مرا بخاطر بسپار </label>
                        </div>

                        <div  className="link">
                            <a href=""> <i  className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                            <a href=""> <i  className="zmdi zmdi-account"></i> عضویت در سایت </a>
                        </div>
                        
                        <button  className="btn btn-success"> ورود به سایت </button>
                        <ToastContainer />

                    </form>
                </div>

            </div>
            
        </main>

        </SimpleContext.Provider>

    );
}

export default Login;