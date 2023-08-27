import React from 'react';

const RocketCard = ({ rocket, onRocketClick }) => {
  return (
    <div className="rocket-card" onClick={() => onRocketClick(rocket)}>
      <h3>{rocket.name}</h3>
      <img src={rocket.image} alt={rocket.name} />
    </div>
  );
};

export default RocketCard;
