import { useEffect } from 'react'
import '../Profile/Login.css'
import { useElements, useStripe } from "@stripe/react-stripe-js"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from 'axios'
import { CardNumberElement,CardExpiryElement,CardCvcElement } from "@stripe/react-stripe-js"
import {orderCompleted} from './slice/cartSlice.jsx'
import {validateShipping} from './Shipping.jsx'
import {createOrder} from './actions/orderActions.jsx'
import {clearError as clearOrderError} from './slice/orderSlice.jsx'
const payment = () => {
    const stripe=useStripe()
    const elements=useElements()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'))
    const {user}=useSelector(state=>state.authState)
    const {items:cartItems,shippingInfo}=useSelector(state=>state.cartState)
    const {error:orderError}=useSelector(state=>state.orderState)
    const paymentData={
        amount:Math.round(orderInfo.totalPrice*100),
        shipping:{
            name:user.name,
            address:{
                city:shippingInfo.city,
                postal_code:shippingInfo.postalCode,
                country:shippingInfo.country,
                line2:shippingInfo.district,
                line1:shippingInfo.address,
            },
        phone:shippingInfo.phoneNo,
    }}
    const order={
        orderItems:cartItems,
        shippingInfo
    }
    if(orderInfo){
        order.itemsPrice=orderInfo.itemsPrice
        order.shippingPrice=orderInfo.shippingPrice
        order.totalPrice=orderInfo.totalPrice
    }
    useEffect(()=>{
        validateShipping(shippingInfo,navigate)
        if(orderError){
            toast.error(orderError,{
                onOpen:()=>{dispatch(clearOrderError())}
            })
        }
    })
    const submitHandler=async(e)=>{
        e.preventDefault()
        document.querySelector('#pay_btn').disabled=true
        try {
            
            const {data}=await axios.post(`/api/payment/process`,paymentData)
            
            const clientSecret=data.client_secret
           
            const result=stripe.confirmCardPayment(clientSecret,{
                payment_method:{
                    card:elements.getElement(CardNumberElement),
                    billing_details:{
                        name:user.name,
                        phone:user.phoneNo,
                    }
                }
            }
        )
            if(result.error){
                toast.error((await result).error.message)
                document.querySelector('#pay_btn').disabled=false
                
        
            }else{
                if((await result).paymentIntent.status==='succeeded'){
                    toast.success("Payment Success")
                    order.paymentInfo={
                        id:(await result).paymentIntent.id,
                        status:(await result).paymentIntent.status
                    }
                    dispatch(orderCompleted())
                    dispatch(createOrder(order))
                    navigate('/order/success')
                }else{
                    toast.error("Please try again")
                }
                
            }
            } catch (error) {
            toast.error("Check card details")
            
        document.querySelector('#pay_btn').disabled=false
        }
    }
  return (
    <div className='container1'>
      
      <div className="register">
        <p className="login-title">Payment</p>
        
        <div className="form-div">

          <form onSubmit={submitHandler}>
              <label className="label" htmlFor="cNo">Card Number</label><br/>
              <CardNumberElement
                    type="text"
                    id="card_num_field"
                    className="input"
                    
                    
                  />
            <br/><br/>
            
            <label className="label" htmlFor="exp">Card Expiry</label><br/>
            <CardExpiryElement
                    type="text"
                    id="card_exp_field"
                    className="input"
                    
                  /><br/><br/>
            <label className="label"  htmlFor="cvc">Card CVC</label><br/>
            <CardCvcElement
                    type="text"
                    id="card_cvc_field"
                    className="input"
                    value=""
                  /><br/>
        
            
            
            <input type="submit" id="pay_btn" className="submit" value={`Pay-Rs. ${orderInfo.totalPrice}`}/>
            <br /><br />
            
            <div className="paymentImages" style={{width:"250px",marginLeft:"25px"}}>
          <img src="/MarketImages/american.png" className="paymentlogo" style={{marginRight:"30px",marginLeft:"20px"}}/>
          
          <img src="/MarketImages/visa.png" className="paymentlogo" style={{marginRight:"30px"}}/>
          
          <img src="/MarketImages/mastercard.png" className="paymentlogo"/>
        </div>
          </form>
          
        </div>
      </div>
    
    </div>
  )
}

export default payment
