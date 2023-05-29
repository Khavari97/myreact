import React from "react";

const Video =()=>{
    return(
        <>
            <div style={{margin:'40px 0'}}>

                <iframe style={{width:'85%',height:'500px',display:'flex',margin:'0 auto'}} src="https://www.aparat.com/video/video/embed/videohash/pk6YE/vt/frame">
                </iframe>
                <div>
                    <p style={{textAlign:'center',marginTop:'30px'}}> <b>امضای دیجیتال سازمان نظام پزشکی</b> </p>
                    <p style={{textAlign:'center',marginBottom:'20px'}}>
                        عدالت اجتماعی در زیرساخت بهداشت و درمان کشور با تکیه بر زیرساخت کلید عمومی توسط تیم ایران ساین محقق شد
                    </p>
                    <button type="button"
                            style={{backgroundColor:'#1a3c6a',border:'0',padding:'12px 40px',display:'flex',margin:'0 auto',color:'white',borderRadius:'50px',fontSize:'12px'}}>

                        اپلیکیشن ثبت نام نظام پزشکی</button>
                </div>



            </div>
        </>
    );
}

export default Video