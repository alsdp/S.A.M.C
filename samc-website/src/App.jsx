import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- IMPORTS DES PAGES ---
import Home from './pages/Home';
import Surgery from './pages/Surgery';
import Pssd from './pages/Pssd';
import Gos from './pages/Gos';
import Ams from './pages/Ams';
import Sar from './pages/Sar';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route vers l'accueil */}
        <Route path="/" element={<Home />} />
        
        {/* Routes vers les départements */}
        <Route path="/surgery" element={<Surgery />} />
        <Route path="/pssd" element={<Pssd />} />
        <Route path="/gos" element={<Gos />} />
        <Route path="/ams" element={<Ams />} />
        <Route path="/sar" element={<Sar />} />
        
      </Routes>
    </Router>
  );
}

export default App;