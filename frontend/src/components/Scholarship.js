// src/components/Scholarship.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Scholarship.css';

function Scholarship() {
  // Mock data for scholarships with more details
  const scholarships = [
    { id: 1, name: 'MRD', eligibility: 'Minimum GPA of 3.5', amount: '$1500', description: 'Awarded to high-achieving students in all disciplines.' },
    { id: 2, name: 'CMR', eligibility: 'Minimum GPA of 3.0', amount: '$1200', description: 'Focused on students demonstrating financial need and academic merit.' },
    { id: 3, name: 'DAC', eligibility: 'Minimum GPA of 3.7', amount: '$2000', description: 'For students in data science and computer science fields.' }
  ];

  return (
    <div className="scholarship-container">
      <h2>Available Scholarships</h2>
      <ul className="scholarship-list">
        {scholarships.map((scholarship) => (
          <li key={scholarship.id} className="scholarship-item">
            <h3>{scholarship.name}</h3>
            <p><strong>Eligibility:</strong> {scholarship.eligibility}</p>
            <p><strong>Amount:</strong> {scholarship.amount}</p>
            <p>{scholarship.description}</p>
            <Link to={`/scholarships/${scholarship.id}`} className="view-details-link">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Scholarship;
