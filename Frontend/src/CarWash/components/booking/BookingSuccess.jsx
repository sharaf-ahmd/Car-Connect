import '../css.module.css'
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function BookingSuccess() {
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
        <div className="row justify-content-center">
            <div className="col-6 mt-5 text-center">
                <img className="my-5 img-fluid d-block mx-auto" src="/CarWashImages/success.png" alt="Order Success" width="200" height="200" />

                <h2>Your Booking has been placed successfully.</h2>

                <Link to="/bookings/ahamed">Go to Bookings</Link>
            </div>

        </div>
    )
}