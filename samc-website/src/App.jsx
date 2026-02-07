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

function App() {
  return (
    <Router>
      {/* --- CONTENEUR GLOBAL "RESPONSIVE" --- 
         J'ai ajouté cette div pour forcer le site à s'adapter proprement.
         - min-w-[280px] : Assure que le site ne "casse" pas en dessous de 280px.
         - w-full : Prend toute la largeur disponible.
         - min-h-screen : Prend toute la hauteur (512px et plus).
         - bg-[#09090b] : Couleur de fond unifiée pour éviter les blancs lors du chargement.
         - text-sm : Réduit la taille de police par défaut pour les petits écrans.
         - overflow-x-hidden : Empêche le scroll horizontal indésirable sur mobile.
      */}
      <div className="relative w-full min-h-screen min-w-[280px] bg-[#09090b] text-white overflow-x-hidden font-sans text-sm md:text-base">
        
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
          <Route path="/faq" element={<Faq />} />
          
        </Routes>

      </div>
    </Router>
  );
}

export default App;