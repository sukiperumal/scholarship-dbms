// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50',
      padding: '1rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    link: {
      color: '#ecf0f1',
      textDecoration: 'none',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      margin: '0 1rem',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    linkHover: {
      backgroundColor: '#3498db',
      color: '#ffffff',
    },
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = styles.linkHover.backgroundColor;
    e.target.style.color = styles.linkHover.color;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = styles.link.color;
  };

  return (
    <nav style={styles.nav}>
      <Link
        to="/"
        style={styles.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={styles.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        About
      </Link>
      <Link
        to="/donors"
        style={styles.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Donors
      </Link>
      <Link
        to="/studentslist"
        style={styles.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Students
      </Link>
      <Link
        to="/scholarship"
        style={styles.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Scholarships
      </Link>
      <Link
        to="/award-history"
        style={styles.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Award History
      </Link>
      
    </nav>
  );
}

export default Navbar;
