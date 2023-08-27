import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RocketCard from './components/RocketCard';
import RocketPopup from './components/RocketPopup';

function App() {
  const [rockets, setRockets] = useState([]); // State to store fetched rockets
  const [selectedRocket, setSelectedRocket] = useState(null); // State to manage selected rocket for popup

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

  return (
    <div className="app">
      <Header />
      <SearchBar />
      <section className="rocket-grid">
        {rockets.map((rocket) => (
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
