import React, { useState }  from 'react'
{/*https://react-icons.github.io/react-icons/search/#q=close */}
import { IoMenu  } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../Profile/actions/userActions'
import './header.css'
const Header = () => {
  const {isAuthenticated,user}=useSelector(state=>state.authState)
    const dispatch=useDispatch()
    const logoutHandler=()=>{
        dispatch(logout);
    }
  const [menu,setMenu]=useState(false)
  const toggle=()=>{
      if(!menu){
          setMenu(true)
      }else{
          setMenu(false)
      }
  }

  return (
    <div className='container'>
      <div className="nav">
            
            <img  className="logo" src="/MarketImages/carconnect.png" alt="logo"/>
            {menu?<IoClose  
            color={'#f8f8f6'}
            size="2.2em"
            style={{marginRight:"20px",cursor:"pointer"}}
            onClick={toggle}
            
        />
            : <IoMenu 
            color={'#f8f8f6'}
            size="2.2em"
            
            style={{marginRight:"20px",cursor:"pointer"}}
            onClick={toggle}
            
        />}
        </div>
        {
            menu?<div id="navmenu" className="navmenu">
            <ul>
             <Link to="/" class="navmenus" onClick={toggle}><li>Home</li></Link>
             
             <Link to="/" class="navmenus" onClick={toggle}><li>About Us</li></Link>
             <Link to="/" class="navmenus" onClick={toggle}><li>Contact Us</li></Link>
             {isAuthenticated?(
                <>
                <Link to="/" class="navmenus" onClick={toggle}><li onClick={logoutHandler} >Logout</li></Link>
                <Link to="/myprofile" class="navmenus" onClick={toggle}><li onClick={toggle}>My Profile</li></Link>
                <Link to="/" class="navmenus" onClick={toggle}><li >My Orders</li></Link>
                {user.role==='admin'?<Link class="navmenus" to="/admin/dashboard" onClick={toggle}><li >Dashboard</li></Link>:<></>}
                
                </>
                
  ):(
             <>
             <Link to="/login" class="navmenus" onClick={toggle}><li>Login</li></Link>
             <Link to="/register" class="navmenus" onClick={toggle}><li>Register</li></Link>
             </>
             
             
             )}
             
             
   
            </ul>
           </div>:<></>
        }
        </div>
  )
}

export default Header
