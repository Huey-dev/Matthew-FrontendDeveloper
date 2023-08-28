import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RocketCard from './components/RocketCard';
import RocketPopup from './components/RocketPopup';

function App() {
  const [rockets, setRockets] = useState([]); // State to store fetched rockets
  const [selectedRocket, setSelectedRocket] = useState(null); // State to manage selected rocket for popup
  const [filteredRockets, setFilteredRockets] = useState([]); // State to store filtered rockets
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const RocketsPerPage = 10; // Number of rockets to display per page

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
    setCurrentPage(1); // Reset current page when applying filters
  };

  // Paginate rockets based on current page
  const indexOfLastRocket = currentPage * RocketsPerPage;
  const indexOfFirstRocket = indexOfLastRocket - RocketsPerPage;
  const currentRockets = filteredRockets.length > 0 ? filteredRockets : rockets;
  const rocketsToDisplay = currentRockets.slice(indexOfFirstRocket, indexOfLastRocket);

  return (
    <div className="app">
      <Header />
      <div className='px-4 md:px-0' >
        <SearchBar onApplyFilters={handleApplyFilters} />
      </div>
      <section className="rocket-grid">
          <RocketCard
            rocketsToDisplay={rocketsToDisplay} // Pass rocketsToDisplay instead of rockets
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onRocketClick={handleRocketClick}
          />
      </section>
      {selectedRocket && (
        <RocketPopup rocket={selectedRocket} onClosePopup={handleClosePopup} />
      )}

      {/* Pagination controls */}
      <div className=" flex justify-center mt-4flex justify-between items-center mt-4 space-x-4">
        <button
            onClick={() => onPageChange(currentPage - 1)}
            className={`px-4 py-2 border rounded ${
            currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-4 p-2 rounded-lg bg-white shadow-md">{currentPage}</span>
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
}

export default App;
