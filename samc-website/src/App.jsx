import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- IMPORTS DES PAGES ---
import Home from './pages/Home';
import Surgery from './pages/Surgery';
import Pssd from './pages/Pssd';
import Gos from './pages/Gos';
import Ams from './pages/Ams';
import Sar from './pages/Sar';
import Faq from './pages/Faq';
import Rdv from './pages/Rdv';
import Admin from './pages/Admin'; 

function App() {
  return (
    // ⚠️ IMPORTANT : Le <Router> doit être le parent ABSOLU
    <Router> 
      
      <div className="relative w-full min-h-screen min-w-[280px] bg-[#09090b] text-white overflow-x-hidden font-sans text-sm md:text-base">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surgery" element={<Surgery />} />
          <Route path="/pssd" element={<Pssd />} />
          <Route path="/gos" element={<Gos />} />
          <Route path="/ams" element={<Ams />} />
          <Route path="/sar" element={<Sar />} />
          <Route path="/rdv" element={<Rdv />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>

      </div>

    </Router> 
    // ⚠️ Fin du Router
  );
}

export default App;