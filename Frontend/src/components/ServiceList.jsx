import React from 'react';
import { MapPin, Star, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';


const ServiceList = ({ services }) => {
  return (
    <div className="service-grid">
      {services.map((service) => (
        <div key={service._id} className="service-card">
          <h3 className="service-title">{service.name}</h3>
          <div className="shop-name">{service.shop}</div>
          
          <div className="service-details">
            <div className="detail-item">
              <MapPin className="detail-icon" />
              <span>{service.distance} miles</span>
            </div>
            <div className="detail-item">
              <Star className="detail-icon star" />
              <span>{service.rating}</span>
            </div>
          </div>
          
          <div className="service-footer">
            <div className="price">
              <DollarSign className="price-icon" />
              <span className="price-amount">{service.price}</span>
            </div>
                    
            <button className="book-button" key={service._id}>Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;