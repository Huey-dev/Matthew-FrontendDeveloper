import React from 'react';

const RocketPopup = ({ rocket, onClosePopup }) => {
  return (
    <div className="rocket-popup">
      <button className="close-button" onClick={onClosePopup}>
        Close
      </button>
      <h2>{rocket.name}</h2>
      {rocket.flickr_images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Rocket ${index}`} />
      ))}
      {/* Other details */}
    </div>
  );
};

export default RocketPopup;
