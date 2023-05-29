import React,{useState} from "react";
import Guidense from "./guide/Guidense";
import GuideUser from "./guide/GuideUser";
import Payment from "./guide/Payment";
import CertToken from "./forms/CertToken";
import CertCsr from "./forms/CertCsr";

const RegGuide =()=>{

    const [select , setSelect] = useState('HTML');

    const handleSelect =(event)=>{
        setSelect(event.target.value);
    }

    return(
        <>
            <Guidense/>

            <section className="why-us section-bg" style={{marginTop:'-100px'}}>
                <div className="container" data-aos="fade-up">
                    <div className="section-header">

                        <p><span>{"نوع گواهی خود را انتخاب نمایید"}</span></p>
                    </div>

                    <div className="cardStyle">
                        <p>{"لطفا در صورتی که از نوع مناسب اطلاع ندارید، با مشاورین ایران ساین تماس حاصل فرمایید"}</p>

                        <div>


                            <input
                                type="radio"
                                id="html"
                                name="fav_language"
                                value="HTML"
                                onChange={handleSelect}
                                checked={select === 'HTML'}/>
                            <label htmlFor="html" style={{marginRight:'10px'}}> {"گواهی الکترونیکی در توکن سخت افزاری"}</label>

                            <input type="radio" id="css" name="fav_language" value="CSS" onChange={handleSelect} checked={select === 'CSS'} style={{marginRight:'20px'}}/>
                            <label htmlFor="css" style={{marginRight:'10px'}}>{"گواهی الکتونیکی به شکل CSR"}</label>

                        </div>
                    </div>

                    {select === 'HTML' ?
                        <CertToken/>
                        :
                        <CertCsr/>
                    }
                </div>
            </section>

            <GuideUser/>
            <Payment/>
        </>
    );
}

export default RegGuide