import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';

export default function Alert(props) {
    return (
        <>
        <div className="space" style={{height: '60px'}}>
        {props.alerts && <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{props.alerts.type} </strong> {props.alerts.msg}
        </div>}
        </div>
        {/* <ToastContainer limit={1} theme='dark'/> */}
        </>
    )
}
 