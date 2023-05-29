import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Course from "../components/course/Course";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Archive from "../components/archive/Archive";
import Otp from "../components/otp/Otp";
import { Route, Routes } from "react-router-dom";
import Firm from "../components/login/Firm";


const Toplearn = (props) => {

    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Course/>} exact />
                <Route path="/login"element={<Login/>} />
                <Route path="/register" element={<Register/>}/>
                <Route path="/archive" element={<Archive/>}/>
                <Route path="/otp" element={<Otp/>}/>
                <Route path="/firm" element={<Firm/>}/>
            </Routes>

        </MainLayout>
    );

}

export default Toplearn;