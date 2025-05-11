import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import './navbar.css';  // Import the custom CSS file
import { useSelector } from 'react-redux'
const Navbar = () => {
  const {user}=useSelector(state=>state.authState)
  return (
    <div className="navbar-container-yassien">
      <div className="navbar-yassien">
        <div className="logo-yassien">
          <Link to="/home">Towing Service</Link>
        </div>
        {user.role==='towing'?<div className="nav-actions-yassien">
          <Link to="/ct">
            <button className="add-btn-yassien">
              <AiOutlinePlusSquare />
              Add Service
            </button>
          </Link>
        </div>:<div></div>}
        <div className="nav-actions2">
          <Link to="/history">
            <button className="his-btn">
              View History
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;