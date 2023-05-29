import React from "react";

const Navbar =()=>{
    return(
        <>
            <div className="main-menu">
                <div className="container-fluid">
                    <nav style={{padding:'0 25px'}}>
                        <span className="responsive-sign"><i className="zmdi zmdi-menu"></i></span>
                        <ul>
                            <li>
                                <a href=""><i className="zmdi zmdi-account" style={{color:'white',fontSize:'26px'}}></i></a>
                                <ul>
                                    <li><a href=""> پروفایل </a></li>
                                    <li><a href=""> خروج </a></li>
                                </ul>
                            </li>

                            <li><a href=""><i className="zmdi zmdi-notifications" style={{color:'white',fontSize:'24px'}}></i></a> </li>

                            <li><a href="">افراد</a></li>

                            <li><a href=""> شرکت ها </a></li>
                            <li><a href=""> پروژه ها </a></li>
                            <li><a href=""> فرم ها </a></li>
                            <li><a href=""> گزارش ها </a></li>
                            <li style={{float:'left'}}><a href=""><i className="zmdi zmdi-card" style={{color:'white',fontSize:'26px'}}></i></a></li>
                            <li style={{float:'left'}}><a href=""> نام موسسه </a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Navbar;