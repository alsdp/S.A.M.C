import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- IMPORTS DES PAGES ---
import Home from './pages/Home';
import Surgery from './pages/Surgery';
import Pssd from './pages/Pssd';
import Gos from './pages/Gos';
import Ams from './pages/Ams';
import Sar from './pages/Sar';
import Faq from './pages/Faq'; // <--- J'ai ajouté l'import ici

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

        {/* Route vers la FAQ */}
        <Route path="/faq" element={<Faq />} /> {/* <--- J'ai ajouté la route ici */}
        
      </Routes>
    </Router>
  );
}

export default App;