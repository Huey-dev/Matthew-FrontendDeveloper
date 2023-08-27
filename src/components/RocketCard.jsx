import React from 'react';

const RocketsPerPage = 10;

const RocketCard = ({ rocketsToDisplay, currentPage, onPageChange, onRocketClick }) => {
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
      {/* Pagination controls */}
      <div className="flex justify-center mt-4">
      <button
          onClick={() => onPageChange(currentPage - 1)}
          className={`px-4 py-2 border rounded ${
          currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-4">{currentPage}</span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className={`px-4 py-2 border rounded ${
          rocketsToDisplay.length < RocketsPerPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={rocketsToDisplay.length < RocketsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RocketCard;
