import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RocketCard from './components/RocketCard';
import RocketPopup from './components/RocketPopup';

function App() {
  const [rockets, setRockets] = useState([]); // State to store fetched rockets
  const [selectedRocket, setSelectedRocket] = useState(null); // State to manage selected rocket for popup
  const [filteredRockets, setFilteredRockets] = useState([]); // State to store filtered rockets

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
    fetchRockets();
  }, []);

  // Handler for rocket card click, opens the popup
  const handleRocketClick = (rocket) => {
    setSelectedRocket(rocket);
  };

  // Handler to close the rocket popup
  const handleClosePopup = () => {
    setSelectedRocket(null);
  };

  // Handler for applying filters and updating filteredRockets state
  const handleApplyFilters = (filters) => {
    const { filterType, filterValue } = filters;

    if (filterType === "original_launch" && filterValue) {
      const year = parseInt(filterValue);
      const newFilteredRockets = rockets.filter((rocket) => {
        const launchYear = new Date(rocket.first_flight).getFullYear();
        return launchYear === year;
      });
      setFilteredRockets(newFilteredRockets);
    } else if (filterType === "status" && filterValue) {
      const newFilteredRockets = rockets.filter(
        (rocket) => rocket.active.toString() === filterValue
      );
      setFilteredRockets(newFilteredRockets);
    } else if (filterType === "type" && filterValue) {
      const newFilteredRockets = rockets.filter(
        (rocket) => rocket.type === filterValue
      );
      setFilteredRockets(newFilteredRockets);
    } else {
      setFilteredRockets([]);
    }
  };

  return (
    <div className="app">
      <Header />
      <SearchBar onApplyFilters={handleApplyFilters} />
      <section className="rocket-grid">
        {filteredRockets.length > 0
          ? filteredRockets.map((rocket) => (
              <RocketCard
                key={rocket.id}
                rocket={rocket}
                onRocketClick={handleRocketClick}
              />
            ))
          : rockets.map((rocket) => (
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
