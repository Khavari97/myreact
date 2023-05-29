import {Route,Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import GuideProducts from "../pages/guideProducts/GuideProducts";
import SellToken from "../pages/token/SellToken";
import Register from "../pages/taxpayers/register/Register";
import RegGuide from "../pages/taxpayers/reg-guide/RegGuide";

const MainRoutes =()=>{
    return(
        <Routes>
            <Route path={'/'} element={<Home/>} exact />
            <Route path={'/guide-products'} element={<GuideProducts/>} />
            <Route path={'/sell-token'} element={<SellToken/>} />
            <Route path={'/register'} element={<Register/>} />
            <Route path={'/reg-guide'} element={window.sessionStorage.getItem('access') == null ? <Register/> : <RegGuide/>} />
        </Routes>
    );
}

export default MainRoutes