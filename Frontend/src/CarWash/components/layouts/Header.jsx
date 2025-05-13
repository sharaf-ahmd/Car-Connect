import React from "react";
import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DropdownButton, Dropdown, Image } from 'react-bootstrap'
import { Fragment, useEffect, useState } from "react";
import '../css.module.css'


export default function Header() {
  const {isAuthenticated, user} = useSelector(state => state.authState);
  const dispatch = useDispatch()
  const navigate = useNavigate();
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
    <nav className="navbar row">
      <div className="col-12 col-md-3">
        
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Search/>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        {isAuthenticated ? 
          (
            <Dropdown className='d-inline'>
              <Dropdown.Toggle variant='default text-white pr-5' id='dropdown-basic'>
                
                <span>{user.name}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                 { user.role === 'admin' && <Dropdown.Item onClick={() => {navigate('admin/dashboard')}} className='text-dark'>Dashboard</Dropdown.Item> }
                    
                    <Dropdown.Item onClick={() => {navigate('/order')}} className='text-dark'>Orders</Dropdown.Item>
                    
              </Dropdown.Menu>
            </Dropdown>
          )
        
        :

          <></>
        }
        <span id="cart" className="ml-3">Cart</span>
        <span className="ml-1" id="cart_count">2</span>
      </div>
    </nav>
  );
}