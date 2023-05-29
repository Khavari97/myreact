import React,{useState,useEffect} from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";
import baseUrl from "../../api/basi_url.json";

const Slider =()=>{



    const [data , setData] = useState([]);

    const getImages = async () =>{
        try{
            await axios.get(`${baseUrl.baseUrl}/en/api/logo/`,{
                headers:{
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin":"*",
                }
            }).then((res)=>{
                console.log(res.data);
                setData(res.data);
            })
        }catch (e){
            console.log(e);
        }
    }

    useEffect(()=>{
        getImages();

    },[]);

    const renderPrevButton = ({isDisabled}) => {
        return <span style={{
            opacity: isDisabled ? '0.5' : 1,
            position: 'absolute',
            top: '45%',
            cursor: 'pointer',
            transform: 'translateY(-50%)',
            left: '-25px',
            fontSize: '50px',
            fontWeight: 900,
            color: '#046B00',


        }}
        >&lt;</span>;
    };

    const renderNextButton = ({isDisabled}) => {
        return <span style={{
            opacity: isDisabled ? '0.5' : 1,
            position: 'absolute',
            top: '45%',
            cursor: 'pointer',
            transform: 'translateY(-50%)',
            right: '-25px',
            fontSize: '50px',
            fontWeight: 900,
            color: '#046B00',


        }}>&gt;</span>;
    };

    const responsive = {
        0: { items: 1 },
        500:{ items: 2 },
        700: { items: 3 },
        1024: { items: 5 },
    };

    return(
        <div style={{marginTop:'100px'}}>
            <h2 style={{textAlign:'center',color:'#1a3c6a',marginBottom:'30px'}}>همکاران ما</h2>
            <AliceCarousel
                autoPlay
                animationDuration={1000}
                animationType="fadeout"
                infinite
                touchTracking={false}
                data-test="AliceCarousel"
                responsive={responsive}
                autoPlayInterval={2000}
                autoPlayDirection="rtl"
                // renderPrevButton={renderPrevButton}
                // renderNextButton={renderNextButton}
            >
                {
                    data.map((image,key)=>(
                        <img src={image.image} key={image.id} style={{width:'150px',height:'150px',borderRadius:'4px'}}/>
                    ))
                }
            </AliceCarousel>
        </div>
    );
}

export default Slider