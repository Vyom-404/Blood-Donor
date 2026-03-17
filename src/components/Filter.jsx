import React from 'react';

export const Filter = ({ selectedBloodGroup, onBloodGroupChange, totalDonors }) => {
  const bloodGroups = ['All', 'A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'];

  return (
    <div className="filter-section">
      <div className="filter-group">
        <label htmlFor="blood-group">Filter by Blood Group:</label>
        <select
          id="blood-group"
          value={selectedBloodGroup}
          onChange={(e) => onBloodGroupChange(e.target.value)}
          className="filter-select"
        >
          {bloodGroups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>

      <div className="donor-count">
        <p>Available Donors: <strong>{totalDonors}</strong></p>
      </div>
    </div>
  );
};
