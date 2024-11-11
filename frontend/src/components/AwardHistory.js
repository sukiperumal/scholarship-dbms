// src/components/AwardHistory.js
import React, { useEffect, useState } from 'react';
import './AwardHistory.css';

function AwardHistory({ refreshKey }) {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    const fetchAwardHistory = async () => {
      try {
        console.log('Fetching award history...');
        const response = await fetch('http://localhost:3000/award-history');
        const data = await response.json();
        console.log('Data fetched:', data);
        setAwards(data);
      } catch (error) {
        console.error('Error fetching award history:', error);
      }
    };

    fetchAwardHistory();
  }, [refreshKey]); // Re-fetch data when refreshKey changes

  return (
    <div className="award-history-container">
      <h2>Award History</h2>
      <table className="award-history-table">
        <thead>
          <tr>
            <th>Award ID</th>
            <th>Student ID</th>
            <th>Scholarship Name</th>
            <th>Award Date</th>
            <th>Award Amount</th>
          </tr>
        </thead>
        <tbody>
          {awards.map((award) => (
            <tr key={award.award_id}>
              <td>{award.award_id}</td>
              <td>{award.std_id}</td>
              <td>{award.scholarship_name}</td>
              <td>{new Date(award.award_date).toLocaleDateString()}</td>
              <td>{award.award_amt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AwardHistory;
