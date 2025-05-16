import { Link } from "react-router-dom";
import '../css.module.css'
import { Fragment, useEffect, useState } from 'react';
export default function CheckoutSteps({shipping, confirmBooking, payment}) {
    useEffect(() => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css';
      document.head.appendChild(link);
    
      return () => {
        document.head.removeChild(link); // Removes Bootstrap when component unmounts
      };
    }, []);
    return (

        <div className="checkout-progress d-flex justify-content-center mt-5">
            {
            shipping ?
            <Link to="/booking/ahamed">
                <div className="triangle2-active"></div>
                <div className="step active-step">Shipping Info</div>
                <div className="triangle-active"></div>
            </Link>:
             <Link to="/booking/ahamed">
                <div className="triangle2-incomplete"></div>
                <div className="step incomplete">Shipping Info</div>
                <div className="triangle-incomplete"></div>
             </Link>
            }

            { confirmBooking ?
            <Link to="/booking/confirm/ahamed">
                <div className="triangle2-active"></div>
                <div className="step active-step">Confirm Order</div>
                <div className="triangle-active"></div>
            </Link>:
             <Link to="/booking/confirm/ahamed">
                <div className="triangle2-incomplete"></div>
                <div className="step incomplete">Confirm Order</div>
                <div className="triangle-incomplete"></div>
             </Link>
            }

            
            { payment ?
            <Link to="/payment/ahamed">
                <div className="triangle2-active"></div>
                <div className="step active-step">Payment</div>
                <div className="triangle-active"></div>
            </Link>:
             <Link to="/payment/ahamed">
                <div className="triangle2-incomplete"></div>
                <div className="step incomplete">Payment</div>
                <div className="triangle-incomplete"></div>
             </Link>
            }
    
      </div>
    )
}