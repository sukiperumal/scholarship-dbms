// donationReport.js

import './ApplicationFormMRD.css';



document.addEventListener('DOMContentLoaded', () => {
  const reportContainer = document.getElementById('report-container');

  // Fetch donation report from the server
  async function fetchDonationReport() {
    try {
      const response = await fetch('http://localhost:3000/donation-report');
      const reportData = await response.json();

      // Generate table with report data
      const table = document.createElement('table');
      table.classList.add('donation-report-table');
      
      // Table headers
      const headers = ['Scholarship Name', 'Total Donations'];
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);

      // Table body
      const tbody = document.createElement('tbody');
      reportData.forEach(row => {
        const tr = document.createElement('tr');
        const scholarshipCell = document.createElement('td');
        const donationCell = document.createElement('td');
        
        scholarshipCell.textContent = row.scholarship_name;
        donationCell.textContent = row.total_donations.toFixed(2);

        tr.appendChild(scholarshipCell);
        tr.appendChild(donationCell);
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);

      // Add table to container
      reportContainer.innerHTML = ''; // Clear any previous content
      reportContainer.appendChild(table);
    } catch (error) {
      console.error('Error fetching donation report:', error);
      reportContainer.textContent = 'Error loading report.';
    }
  }

  // Call the function to fetch and display report
  fetchDonationReport();
});
