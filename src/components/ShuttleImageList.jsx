import React, { useState, useEffect } from 'react';
import fetchShuttleImages from '../utils/api'; // Import from the correct path
import { filterShuttleImages } from '../utils/utils'; // Import the filter function

function ShuttleImageList() {
  const [shuttleImages, setShuttleImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [filters, setFilters] = useState({
    filterType: '',
    filterValue: '',
  });

  useEffect(() => {
    fetchShuttleImages().then(data => {
      setShuttleImages(data);
      setFilteredImages(data); // Initially, display all images
    });
  }, []);

  const applyFilters = () => {
    const newFilteredImages = filterShuttleImages(shuttleImages, filters);
    setFilteredImages(newFilteredImages);
  };

  return (
    <div>
      <h2>Shuttle Images</h2>
      <div>
        <select
          value={filters.filterType}
          onChange={e => setFilters({ ...filters, filterType: e.target.value })}
        >
          <option value="">Select Filter Type</option>
          <option value="status">Status</option>
          <option value="original_launch">Original Launch</option>
          <option value="type">Type</option>
        </select>
        <input
          type="text"
          placeholder="Filter Value"
          value={filters.filterValue}
          onChange={e => setFilters({ ...filters, filterValue: e.target.value })}
        />
        <button onClick={applyFilters}>Search</button>
      </div>
      <ul>
        {filteredImages.map((image) => (
          <li key={image.id}>{image.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShuttleImageList;
