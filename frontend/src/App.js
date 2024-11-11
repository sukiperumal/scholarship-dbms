// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import donors from './components/donors';
import StudentsList from './components/StudentList';
import Scholarship from './components/Scholarship';
import ScholarshipDetails from './components/ScholarshipDetails';
import Apply from './components/Apply';
import AwardHistory from './components/AwardHistory';
import CNR from './components/CNR';
import MRD from './components/MRD';
import DAC from './components/DAC';
import ApplicationFormMRD from './components/ApplicationFormMRD';
import ApplicationFormCNR from './components/ApplicationFormCNR';
import ApplicationFormDAC from './components/ApplicationFormDAC';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* Using a single <Routes> block for all routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donorsus" element={<donors />} />
          <Route path="/studentslist" element={<StudentsList />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/scholarships/:id" element={<ScholarshipDetails />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/award-history" element={<AwardHistory />} />

          {/* Scholarship-specific routes */}
          <Route path="/apply/mrd" element={<MRD />} />
          <Route path="/apply/cnr" element={<CNR />} />
          <Route path="/apply/dac" element={<DAC />} />

          <Route path="/apply/dac/applicationformmrd" element={<ApplicationFormMRD />} />
          <Route path="/apply/dac/applicationformcnr" element={<ApplicationFormCNR />} />
          <Route path="/apply/dac/applicationformdac" element={<ApplicationFormDAC />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
