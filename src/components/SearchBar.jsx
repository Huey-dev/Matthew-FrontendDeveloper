import React, { useState } from 'react';

function SearchBar({ onFilterChange, onApplyFilters }) {
  const [filters, setFilters] = useState({
    filterType: '',
    filterValue: '',
  });

  return (
    <div className="flex flex-col items-center my-8">
      <div className="flex space-x-2">
        <select
          className="p-2 border rounded bg-gray-100"
          value={filters.filterType}
          onChange={(e) => setFilters({ ...filters, filterType: e.target.value })}
        >
          <option value="">Select Filter Type</option>
          <option value="status">Status</option>
          <option value="original_launch">Original Launch</option>
          <option value="type">Type</option>
        </select>
        <input
          className="p-2 border rounded"
          type="text"
          placeholder="Filter Value"
          value={filters.filterValue}
          onChange={(e) => setFilters({ ...filters, filterValue: e.target.value })}
        />
        <button
          className="p-2 bg-gray-900 text-white rounded"
          onClick={() => onApplyFilters(filters)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
