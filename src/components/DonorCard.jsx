import React from 'react';

export const DonorCard = ({ donor, onRequest, isRequested }) => {
  return (
    <div className="donor-card">
      <div className="donor-header">
        <h3 className="donor-name">{donor.name}</h3>
        <span className="blood-group">{donor.bloodGroup}</span>
      </div>

      <div className="donor-info">
        <p><strong>City:</strong> {donor.address?.city || 'Unknown'}</p>
        <p><strong>Email:</strong> {donor.email}</p>
        <p><strong>Phone:</strong> {donor.phone}</p>
        <p>
          <strong>Availability:</strong>{' '}
          <span className={`availability ${donor.availability ? 'available' : 'unavailable'}`}>
            {donor.availability ? 'Available' : 'Unavailable'}
          </span>
        </p>
      </div>

      <button
        className={`request-btn ${isRequested ? 'requested' : ''}`}
        onClick={() => onRequest(donor.id)}
        disabled={isRequested}
      >
        {isRequested ? 'Request Sent' : 'Request Help'}
      </button>
    </div>
  );
};
