import React from 'react'
import '../Profile/Login.css'
import { Link } from 'react-router-dom'
const SupplierDashboard = () => {
  return (
    <div className='container1'>
      <div className="hero1" >
        <h1 className="what" id="services">Dashboard</h1>
        <div className="row">
          <div className="col1_service"> 
            <Link className="service_list" to="/new/product">
            <span className="no">New Product</span><br/>
            
            <p className="quote">
              
              Add new product.
            </p></Link>
          </div>
          <div className="col1_service">
            <a className="service_list" href="a.hml">
            <span className="no"> Products </span> <br/>
           
            <p className="quote">
              
              10 products
              </p></a>
            
          </div>
          <div className="col1_service">
            <a className="service_list" href="a.hml">
            <span className="no">Orders</span> <br/>
             
            <p className="quote">
              
              10 orders
          
              </p></a>
            </div>
        </div>
        
          
          
        
        
      </div>
    </div>
  )
}

export default SupplierDashboard
