import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Aeroponics from './pages/Aeroponics';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Aeroponics" element={<Aeroponics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;