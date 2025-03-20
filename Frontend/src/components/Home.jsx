import React from 'react'
import './Header.css'
const Home = () => {
  return (
    <div className='container'>
      
      <div class="hero" id="hero">
        <div class="text">
          <p class="we">
            Drive with <br /> <span class="ai">Confidence, </span> 
            Shine with <br /> <span class="ai">Excellence.</span> 
          </p>
          <br />
          <p class="collaborate">
            Unmatched care for peak performance and lasting shine.
          </p>
          <br />

          <a href="register.html"><p class="schedule">Register Now</p></a>
        </div>
        <img
          class="video"
          src="/MarketImages/car.avif"
          
        />
      </div>
      
      <br/>
      <div class="hero" id="hero">
        <div class="car_logo">
          <img class="carLogo" src="/MarketImages/tesla.png" alt=""/>
          <img class="audilogo" src="/MarketImages/audi.png" alt=""/>
          <img class="carLogo" src="/MarketImages/toyota.png" alt=""/>
          <img class="carLogo" src="/MarketImages/suzuki.png" alt=""/>
          <img class="isuzulogo" src="/MarketImages/isuzu.png" alt=""/>
          <img class="carLogo" src="/MarketImages/benz.png" alt=""/>
          <img class="carLogo" src="/MarketImages/mahindra.png" alt=""/>
          <img class="kialogo" src="/MarketImages/kia.png" alt=""/>
        </div>
        
      </div>
      
      <br/>
      <div class="hero1" >
        <h1 class="what" id="services">Our Services</h1>
        <div class="row">
          <div class="col1_service"> 
            <a class="service_list" href="a.hml">
            <span class="no">01</span><br/>
            Spare Parts<br/>
            <p class="quote">
              
              Your Digital Bridge to Quality Spare Parts.
            </p></a>
          </div>
          <div class="col1_service">
            <a class="service_list" href="a.hml">
            <span class="no">02</span> <br/>
            Car Wash <br/>
            <p class="quote">
              
              Where Every Wash Feels Like New.
              </p></a>
            
          </div>
          <div class="col1_service">
            <a class="service_list" href="a.hml">
            <span class="no">03</span> <br/>
            Car Repair <br/>
            <p class="quote">
              
              Precision Repairs for Peak Performance.
          
              </p></a>
            </div>
        </div>
        <div class="row1">
          <div class="col1_service"> 
            <a class="service_list" href="a.hml">
            <span class="no">04</span><br/>
            Towing <br/>
            <p class="quote">
              
              Your Roadside Rescue Team.
            </p></a>
           
          </div>
          <div class="col1_service">
            <a class="service_list" href="a.hml">
            <span class="no">05</span> <br/>
           Engine Repair <br/>
           <p class="quote">
              
            Engine Trouble? We’ve Got the Fix.
          </p></a>
           
          </div>
          <div class="col1_service">
            <a class="service_list" href="a.hml">
            <span class="no">06</span> <br/>
            Electrical Repair <br/>
            <p class="quote">
              
              Keeping Currents Flowing, Miles Going.
            </p></a>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home
