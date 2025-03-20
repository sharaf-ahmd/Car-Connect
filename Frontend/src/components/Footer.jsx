import React from 'react'
import './header.css'
import { FaFacebook,FaWhatsapp,FaLocationDot  } from "react-icons/fa6";
import { IoMail,IoCall,IoLocate  } from "react-icons/io5";
const Footer = () => {
  return (
    <div class="footerContainer">
    <div class="footer">
      <div class="col1">
        <img src="/MarketImages/carconnect.png" class="footerLogo"/>
        <p class="meezan">Car Connect offers top-notch vehicle service solutions, ensuring your car stays in peak condition. From routine maintenance to advanced diagnostics, Car Connect delivers reliable, efficient, and affordable services. Trust Car Connect for expert care, quality parts, and exceptional customer support every time.</p>
           <div class="socials">
            <FaFacebook  
                        color={'#f8f8f6'}
                        size="1.4em"
                        style={{marginRight:"10px",cursor:"pointer",marginTop:"20px",padding:"6px",borderRadius:"50px"}}
                        
                        
                    />
                    <FaWhatsapp  
                        color={'#f8f8f6'}
                        size="1.4em"
                        style={{marginRight:"10px",cursor:"pointer",marginTop:"20px",padding:"6px",borderRadius:"50px"}}
                        
                        
                    />
                    <IoMail  
                        color={'#f8f8f6'}
                        size="1.4em"
                        style={{marginRight:"10px",cursor:"pointer",marginTop:"20px",padding:"6px",borderRadius:"50px"}}
                        
                        
                    />
                    <IoCall   
                        color={'#f8f8f6'}
                        size="1.4em"
                        style={{marginRight:"10px",cursor:"pointer",marginTop:"20px",padding:"6px",borderRadius:"50px"}}
                        
                        
                    />
                    <FaLocationDot  
                        color={'#f8f8f6'}
                        size="1.4em"
                        style={{marginRight:"10px",cursor:"pointer",marginTop:"20px",padding:"6px",borderRadius:"50px"}}
                        
                        
                    />
            <ion-icon class="footerSocial" name="logo-facebook"></ion-icon>
           <ion-icon class="footerSocial" name="logo-whatsapp"></ion-icon>
           <ion-icon class="footerSocial" name="mail"></ion-icon>
           <ion-icon class="footerSocial" name="call"></ion-icon>
           <ion-icon class="footerSocial" name="location"></ion-icon>
           </div>
           
      </div>
      <div class="col2">
        <div class="col21">
          <a class="footer_text" href="index.html"><p class="footerLink">Home</p></a>
          <a class="footer_text" href="#"><p class="footerLink">Shop</p></a>
          <a class="footer_text" href="#"><p class="footerLink">Products</p></a>
          <a class="footer_text" href="#"><p class="footerLink">Delivery Areas</p></a>
          <a class="footer_text" href="#"><p class="footerLink">FAQ</p></a>
        </div>
        <div class="col22">
          <a class="footer_text" href="#"><p class="footerLink">Help</p></a>
          <a class="footer_text" href="#"><p class="footerLink">Support</p></a>
          <a class="footer_text" href="#"><p class="footerLink">Privacy Policy</p></a>
          <a class="footer_text" href="#"><p class="footerLink">Refud Policy</p></a>
          <a class="footer_text" href="#"><p class="footerLink">Terms & Conditions</p></a>
        </div>
      </div>
      <div class="col3">
        <h3 class="accepted">ACCEPTED PAYMENT METHODS</h3>
        <div class="paymentImages">
          <img src="/MarketImages/american.png" class="paymentlogo"/>
          
          <img src="/MarketImages/visa.png" class="paymentlogo"/>
          
          <img src="/MarketImages/mastercard.png" class="paymentlogo"/>
          
          <img src="/MarketImages/cod.png" class="paymentlogo"/>
          
          <img src="/MarketImages/transfer.png" class="paymentlogo"/>
        </div>
        <p class="meezan">We ensure secure online payments through trusted gateways. 
          All transactions are encrypted, ensuring your payment details are safe and secure.</p>
      </div>
    </div>
    
    <p class="copyright">© Copyright 2024, All Rights Reserved by CarConnect.lk</p>
  </div>
  
    
  

  )
}

export default Footer
