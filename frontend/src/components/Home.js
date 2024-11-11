// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './footer.css';


function Home() {
  return (
    <div className="home-container">
      <header className="navbar">
        <nav>

        </nav>
      </header>

      <section className="welcome-section">
        <h1>Welcome to the Scholarship Portal</h1>
        <p>Explore scholarships and manage your applications with ease.</p>
        
        <Link to="/apply">
        <button className="apply-button">Apply Now</button>
        </Link>
       
        <Link to="/scholarhships/:id">
        <button className="view-scholarships-button">View Scholarships</button>
        </Link>
      </section>

      <footer className="footer">
  <p className="footer-content">
    <a href="https://pes.edu/" target="_blank" rel="noopener noreferrer">
      Know more about PES University
    </a>
    <span className="footer-email">
      <strong>Email:</strong> <a href="mailto:example@college.com">example@college.com</a>
    </span>
  </p>
</footer>


    </div>
  );
}

export default Home;
