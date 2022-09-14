import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import Location from './pages/Location';

import './App.css';

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </div>
  );
};

export default App;