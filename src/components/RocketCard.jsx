import React from 'react';

const RocketCard = ({ rocket, onRocketClick }) => {
  return (
    <div className="rocket-card" onClick={() => onRocketClick(rocket)}>
      {rocket.flickr_images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Rocket ${index}`} />
      ))}
      <h3>{rocket.name}</h3>
    </div>
  );
};

export default RocketCard;
