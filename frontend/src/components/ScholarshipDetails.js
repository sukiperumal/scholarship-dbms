// src/components/ScholarshipDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ScholarshipDetails() {
  const { id } = useParams();

  // Mock details
  const scholarship = {
    id,
    name: id === '1' ? 'MHRD' : id === '2' ? 'CMR' : 'DAC',
    eligibility: 'Criteria goes here',
    amount: '10000',
    deadline: '2024-12-31',
    description: 'Scholarship description here'
  };

  return (
    <div>
      <h2>{scholarship.name}</h2>
      <p>Eligibility: {scholarship.eligibility}</p>
      <p>Amount: ${scholarship.amount}</p>
      <p>Deadline: {scholarship.deadline}</p>
      <p>Description: {scholarship.description}</p>
      <Link to="/apply">Apply Now</Link>
    </div>
  );
}

export default ScholarshipDetails;
