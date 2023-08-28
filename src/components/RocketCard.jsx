import React from 'react';

const RocketsPerPage = 10;

const RocketCard = ({ rocketsToDisplay,  onRocketClick }) => {
  return (
    <div className="flex flex-wrap justify-center -mx-2">
      {rocketsToDisplay.map((rocket, index) => (
        <div
          key={index}
          className="rocket-card-item mx-2 my-2 p-4 bg-white rounded-lg shadow-md cursor-pointer"
          onClick={() => onRocketClick(rocket)}
        >
          <img 
            src={rocket.flickr_images[0]}
            alt={`Rocket ${index}`} 
            className="w-full h-auto max-h-40 object-cover"
          />
          <h3>{rocket.name}</h3>
        </div>
      ))}
      
    </div>
  );
};

export default RocketCard;
