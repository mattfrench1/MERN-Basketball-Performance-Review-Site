// import logo from './logo.svg';

import React, { useState } from "react";

// import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav.js';

import HomePage from './pages/HomePage.js';
import UpcomingPage from './pages/UpcomingPage.js';
import AboutPage from './pages/AboutPage.js';
import ShoesPage from './pages/ShoesPage.js';
import CreatePage from './pages/CreatePage.js';
import EditPage from './pages/EditPage.js';
import RotationPage from './pages/RotationPage.js';

import './App.css';

function App() {
  const [shoe, setShoe] = useState([])
  return (
    <div className="App">
      <BrowserRouter>

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1> 
           .
        </h1>
        </header>

        <Nav />

        <main>
          <section className="App-article">

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shoes" element={<ShoesPage setShoe={setShoe} />} />
              <Route path="/add-shoe" element={<CreatePage />} />
              <Route path="/edit-shoe" element={<EditPage shoe={shoe} />} />
              <Route path="/rotation" element={<RotationPage />} />
              <Route path="/upcoming" element={<UpcomingPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </section>
        </main>

        <footer>
          <p>&copy; 2023 Matthew French</p>
        </footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
