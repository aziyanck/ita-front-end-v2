// FlippingCard.js

import React from 'react';
import './FlippingCard.css';
import house from '../../assets/house.png';

const FlippingCard = ({ title, desc }) => {
  return (
    <div className=" card ">
      <img src={house} alt="house icon" className="card__image" />
      <div className="card__content">
        <p className="card__title">{title}</p>
        <ul className="card__description">
          {desc.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FlippingCard;
