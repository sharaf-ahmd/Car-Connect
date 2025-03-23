import React from 'react'
import '../Profile/Login.css'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveShippingInfo } from "./slice/cartSlice"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const validateShipping = (shippingInfo, navigate) => {
   
  if(!shippingInfo.address) {
          toast.error('Please fill the shipping information')
          navigate('/shipping')
  }
} 

export default function Shipping(){
  const { shippingInfo = { address: "", city: "", phoneNo: ""} } = useSelector(state => state.cartState);
  const [address,setAddress] =useState(shippingInfo.address)
    const [city,setCity] =useState(shippingInfo.city)
    const [phoneNo,setPhoneNo] =useState(shippingInfo.phoneNo)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(saveShippingInfo({address,city,phoneNo}))
        navigate('/order/confirm')
    }
  
    return (
    <div className="container1">
       <div className='register'>
      
      <p className="login-title">Shipping Info</p>
            
            <div className="form-div">
  
              <form onSubmit={submitHandler}>
                  <label className="label" for="address">Address</label><br/>
                <input type="text" id='address' value={address} required onChange={(e)=>setAddress(e.target.value)} placeholder="Enter Address"/><br/><br/>
                
                <label className="label" for="city">City</label><br/>
                <input type="tel" id='city' value={city} onChange={(e)=>setCity(e.target.value)} required placeholder="Enter City"/><br/><br/>
                <label className="label"  for="phone">Phone Number</label><br/>
                <input type="tel" id="phone" value={phoneNo}  onChange={(e)=>setPhoneNo(e.target.value)} required placeholder="Enter Phone Number"/>
                
                <br/><br/>
                <input type="submit" className="submit" value="Continue"/>
                
            
              </form>
              
            </div>
    </div>
    </div>
   
  )
}

