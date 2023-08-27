import React from 'react';

const RocketCard = ({ rocket, onRocketClick }) => {
  return (
    <div className="rocket-card" onClick={() => onRocketClick(rocket)}>
      {/* Display rocket information */}
    </div>
  );
};

export default RocketCard;
