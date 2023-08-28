import React, { useState } from 'react';
import { HiX, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const RocketPopup = ({ rocket, onClosePopup }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % rocket.flickr_images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? rocket.flickr_images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50 bg-black">
      <div className='bg-white rounded-lg shadow-md p-4 md:p-8 relative'>
        <button className="close-button absolute top-2 right-2 text-gray-500" onClick={onClosePopup}>
          <HiX />
        </button>
        <h2 className="text-xl font-semibold mb-2">{rocket.name}</h2>
        <div className="relative">
          {rocket.flickr_images.length > 1 && (
            <button
              className="prev-button absolute top-1/2 left-8 transform -translate-y-1/2 -translate-x-4 bg-gray-100 rounded-full p-2"
              onClick={prevImage}
            >
              <HiOutlineChevronLeft />
            </button>
          )}
          <img
            src={rocket.flickr_images[currentImageIndex]}
            alt={`Rocket ${currentImageIndex}`}
            className="w-full h-auto max-h-64 object-contain mx-auto"
          />
          {rocket.flickr_images.length > 1 && (
            <button
              className="next-button absolute top-1/2 right-8 transform -translate-y-1/2 translate-x-4 bg-gray-100 rounded-full p-2"
              onClick={nextImage}
            >
              <HiOutlineChevronRight />
            </button>
          )}
        </div>
      </div> 
    </div>
  );
};

export default RocketPopup;
