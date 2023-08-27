import React, { useState } from 'react';

function SearchBar({ onFilterChange, onApplyFilters }) {
  const [filters, setFilters] = useState({
    filterType: '',
    filterValue: '',
  });

  return (
    <div>
      <select
        value={filters.filterType}
        onChange={(e) => setFilters({ ...filters, filterType: e.target.value })}
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
        onChange={(e) => setFilters({ ...filters, filterValue: e.target.value })}
      />
      <button onClick={() => onApplyFilters(filters)}>Search</button>
    </div>
  );
}

export default SearchBar;
