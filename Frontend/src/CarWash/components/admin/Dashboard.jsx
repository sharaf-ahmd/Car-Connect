
import Sidebar from "./Sidebar";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAdminServices } from "../../actions/serviceActions";

export default function Dashboard () {
    const { services = [] } = useSelector( state => state.servicesState);
    useEffect(() => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css';
      document.head.appendChild(link);
    
      return () => {
        document.head.removeChild(link); // Removes Bootstrap when component unmounts
      };
    }, []);
 
    const dispatch = useDispatch();
   


    



    useEffect( () => {
       dispatch(getAdminServices);
       
       
    }, [])


    return (
        <div className="row">
            <div className="col-12 col-md-2">
                    <Sidebar/>
            </div>
            <div className="col-12 col-md-10">
                <h1 className="my-4">Dashboard</h1>
                <div className="row pr-4">
                    <div className="col-xl-12 col-sm-12 mb-3">
                        <div className="card text-white bg-primary o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Total Amount<br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pr-4">
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-success o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Services<br /> <b>{services.length}</b></div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/services/ahamed">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>


                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-danger o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Booking<br /> <b>{}</b></div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/orders/ahamed">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>


                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-info o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Users<br /> <b></b></div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/users/ahamed">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>


                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-warning o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Out of Stock<br /> <b></b></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}