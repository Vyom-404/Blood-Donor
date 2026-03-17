import React from 'react';

export const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-section">
      <input
        type="text"
        placeholder="Search donors by city..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
};
