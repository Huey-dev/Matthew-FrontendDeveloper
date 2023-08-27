import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RocketCard from './components/RocketCard';
import RocketPopup from './components/RocketPopup';

function App() {
  const [rockets, setRockets] = useState([]); // State to store fetched rockets
  const [selectedRocket, setSelectedRocket] = useState(null); // State to manage selected rocket for popup
  // store filtered rockets
  const [filteredImages, setFilteredImages] = useState([])
  const [shouldRenderRockets, setShouldRenderRockets] = useState(false)

  // Fetch rockets from the SpaceX API and set them in the state
  const fetchRockets = async () => {
    try {
      const response = await fetch("https://api.spacexdata.com/v4/rockets");
      const data = await response.json();
      setRockets(data);
    } catch (error) {
      console.error("Error fetching rockets:", error);
    }
  };
  useEffect(() => {
    fetchRockets()
  }, [])
  

  // Handler for rocket card click, opens the popup
  const handleRocketClick = (rocket) => {
    setSelectedRocket(rocket);
  };

  // Handler to close the rocket popup
  const handleClosePopup = () => {
    setSelectedRocket(null);
  };

  // Handler for applying filters and updating filteredImages state
  const handleApplyFilters = (filters) => {
    const {filterType, filterValue} = filters
    if (filterType && filterValue) {
      const newFilteredRockets = rockets.filter((rocket) => {
        if (filterType === "status") {
          return rocket.status === filterValue
        } else if (filterType === "original_launch") {
          return rocket.original_launch === filterValue
        } else if (filterType === "type") {
          return rocket.type === filterValue
        }
        return false
      })
      setFilteredImages(newFilteredRockets)
    } else {
      setFilteredImages([])
    }
    setShouldRenderRockets(true)
  };

  return (
    <div className="app">
      <Header />
      <SearchBar onApplyFilters={handleApplyFilters}/>
      <section className="rocket-grid">
        {shouldRenderRockets &&
        (filteredImages.length > 0 ? filteredImages : rockets).map ((rocket) => (
          <RocketCard
            key={rocket.id}
            rocket={rocket}
            onRocketClick={handleRocketClick}
          />
        ))}
      </section>
      {selectedRocket && (
        <RocketPopup rocket={selectedRocket} onClosePopup={handleClosePopup} />
      )}
    </div>
  );
}

export default App;
