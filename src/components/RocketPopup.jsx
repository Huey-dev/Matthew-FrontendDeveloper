import React from 'react';

const RocketPopup = ({ rocket, onClosePopup }) => {
  return (
    <div className="rocket-popup">
      <button className="close-button" onClick={onClosePopup}>
        Close
      </button>
      <h2>{rocket.name}</h2>
      <img src={rocket.image} alt={rocket.name} />
      {/* Display other detailed rocket information */}
    </div>
  );
};

export default RocketPopup;
