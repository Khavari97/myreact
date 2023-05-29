import React from "react";
import './otp.css';

const Modal =()=>{
    return(
        <>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" style={{textAlign:'center',color:'red'}}>خطا در صحت اطلاعات</h5>
                        </div>
                        <div className="modal-body" style={{margin:'40px 0'}}>
                            <h2 style={{textAlign:'center'}}> لطفا اطلاعات خود را به درستی وارد کنید </h2>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">تلاش دوباره</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;