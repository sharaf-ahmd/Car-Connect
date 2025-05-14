import { Link } from 'react-router-dom';
import '../css.module.css'
import { Fragment, useEffect } from "react";
export default function Service({ service, col }) {
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
        <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
            <div className="card p-3 rounded h-100 d-flex flex-column">
                <img
                    className="card-img-top mx-auto"
                    src={service.image}
                    alt={service.name}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        <Link to={`/service/${service._id}`}>{service.name}</Link>
                    </h5>
                    <p className="card-text">{service.description}</p>
                    <p className="card-text">
                        <strong>LKR {Number(service.price).toFixed(2)}</strong>
                    </p>
                    <Link to={`/service/${service._id}`} className="btn mt-auto w-100">
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
}