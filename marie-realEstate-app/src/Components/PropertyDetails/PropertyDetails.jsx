import React from 'react';
import './PropertyDetails.css'; // Ensure the path to your CSS file is correct
import { data } from '../data';
import { Link, useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const PropertyDetails = () => {
  const { id } = useParams();
  const house = data.find(house => house.id === parseInt(id));

  return (
    <section className="property-details">
      <div className="container">
        <div className="header-section">
          <h2 className="property-title">{house.name}</h2>
          <h3 className="property-address">{house.address}</h3>
        </div>
        <div className="info-section">
          <div className="property-type">{house.type}</div>
          <div className="property-country">{house.country}</div>
        </div>
        <div className="property-price">$ {house.price}</div>
        <div className="image-section">
          <img src={house.imageLg} alt={house.name} className="property-image" />
        </div>
        <div className="details-section">
          <div className="property-icons">
            <BiBed className="icon" />
            <div>{house.bedrooms}</div>
          </div>
          <div className="property-icons">
            <BiBath className="icon" />
            <div>{house.bathrooms}</div>
          </div>
          <div className="property-icons">
            <BiArea className="icon" />
            <div>{house.surface}</div>
          </div>
        </div>
        <div className="property-description">{house.description}</div>
        <div className="agent-section">
          <img src={house.agent.image} alt={`Agent ${house.agent.name}`} className="agent-image" />
          <div className="agent-info">
            <div className="agent-name">{house.agent.name}</div>
            <Link to="/agent-listings" className="agent-listings-link">
              View Listings
            </Link>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Name" className="form-input" />
          <input type="text" placeholder="Email" className="form-input" />
          <input type="text" placeholder="Phone no" className="form-input" />
          <textarea placeholder="Message" className="form-textarea"></textarea>
          <div className="form-actions">
            <button type="submit" className="send-message-btn">Send message</button>
            <button type="button" className="call-btn">Call</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PropertyDetails;
