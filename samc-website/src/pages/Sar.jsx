import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Mountain, Flame, Waves, Anchor, 
  Wind, ShieldCheck, Siren, Activity, Compass, LifeBuoy, ChevronRight,
  X, Hammer // Ajout des icônes pour la modale
} from 'lucide-react';

const Sar = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // --- NOUVEAU : État pour gérer l'ouverture de la fenêtre ---
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen min-w-[280px] bg-[#020617] text-slate-200 font-sans selection:bg-orange-500/30 overflow-x-hidden relative">
      
      {/* --- NOUVEAU : LA MODALE (Version Orange pour S.A.R) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Fond sombre et flou */}
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={() => setIsModalOpen(false)}
            ></div>

            {/* La fenêtre elle-même (Bordures Orange) */}
            <div className="relative bg-slate-900 border border-orange-500/50 p-6 md:p-8 rounded-2xl max-w-sm w-full shadow-[0_0_50px_rgba(249,115,22,0.3)] transform transition-all scale-100">
                
                {/* Bouton fermer (X) */}
                <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Contenu */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-orange-500/10 rounded-full">
                        <Hammer className="w-8 h-8 text-orange-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white font-mono">EN DÉVELOPPEMENT</h3>
                    
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Ce service n'est pas encore disponible. Nos équipes techniques travaillent dessus pour l'activer prochainement.
                    </p>

                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="mt-2 bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded text-sm font-bold uppercase tracking-wider transition-colors w-full"
                    >
                        Compris
                    </button>
                </div>
            </div>
        </div>
      )}
      {/* ------------------------------------------------ */}

      {/* --- AMBIANCE DE FOND (GRID & GLOW ORANGE) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         {/* Grille technique */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
         {/* Lueurs d'ambiance - Ajustées mobile */}
         <div className="absolute top-[-10%] right-[-5%] w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-orange-600/20 rounded-full blur-[80px] md:blur-[120px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-900/20 rounded-full blur-[80px] md:blur-[120px]"></div>
      </div>

      {/* --- HEADER IMMERSIF --- */}
      <header className="relative pt-16 pb-6 md:pt-24 md:pb-12 overflow-hidden z-10">
        <div className="container mx-auto px-4 md:px-6 relative">
          
          {/* Fil d'ariane */}
          <Link to="/" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-6 md:mb-10 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] border-b border-orange-500/30 pb-1">
             <ArrowLeft className="w-3 h-3" /> Retour Dashboard
          </Link>

          <div className="flex flex-col md:flex-row items-end justify-between gap-4 md:gap-8">
            <div className="max-w-4xl w-full">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                 <div className="h-px w-4 md:w-8 bg-orange-500"></div>
                 <span className="text-orange-400 font-mono text-[10px] md:text-xs uppercase tracking-widest">Opérations Spéciales</span>
              </div>
              
              {/* TITRE RESPONSIVE */}
              <h1 className="text-3xl xs:text-4xl md:text-8xl font-black uppercase text-white leading-[0.9] tracking-tighter mb-4 md:mb-6">
                Search & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Rescue</span>
              </h1>
              
              <p className="text-sm md:text-xl text-slate-400 max-w-2xl leading-relaxed border-l-2 border-orange-500/50 pl-4 md:pl-6">
                 Le <strong className="text-white">S.A.R (Search & Rescue)</strong> est l'élite opérationnelle. Quand l'accès est impossible et que les éléments se déchaînent, nous intervenons.
              </p>
            </div>

            {/* Indicateur de Status (Desktop only) */}
            <div className="hidden md:block text-right">
                <div className="flex items-center gap-2 justify-end text-orange-400 font-mono text-sm mb-1">
                   <span className="relative flex h-3 w-3">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                   </span>
                   UNITÉS DÉPLOYÉES
                </div>
                <div className="text-slate-500 text-xs font-mono">GPS TRACKING // ONLINE</div>
            </div>
          </div>
        </div>
      </header>

      {/* --- STATS HUD (GRID 2x2 Mobile) --- */}
      <div className="border-y border-white/5 bg-slate-900/40 backdrop-blur-sm z-20 relative">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5 border-l border-r border-white/5">
               
               {/* Stat 1 */}
               <div className="p-4 md:py-6 md:px-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left group cursor-default">
                   <div className="p-2 md:p-3 bg-orange-500/10 rounded group-hover:bg-orange-500/20 transition">
                       <Activity className="w-4 h-4 md:w-6 md:h-6 text-orange-400" />
                   </div>
                   <div>
                       <div className="text-lg md:text-2xl font-bold text-white font-mono">3</div>
                       <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500">Divisions</div>
                   </div>
               </div>

               {/* Stat 2 */}
               <div className="p-4 md:py-6 md:px-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left group cursor-default">
                   <div className="p-2 md:p-3 bg-red-500/10 rounded group-hover:bg-red-500/20 transition">
                       <Siren className="w-4 h-4 md:w-6 md:h-6 text-red-500 animate-pulse" />
                   </div>
                   <div>
                       <div className="text-lg md:text-2xl font-bold text-white font-mono">&lt; 3m</div>
                       <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500">Réponse</div>
                   </div>
               </div>

               {/* Stat 3 */}
               <div className="p-4 md:py-6 md:px-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left group cursor-default">
                   <div className="p-2 md:p-3 bg-blue-500/10 rounded group-hover:bg-blue-500/20 transition">
                       <Compass className="w-4 h-4 md:w-6 md:h-6 text-blue-400" />
                   </div>
                   <div>
                       <div className="text-lg md:text-2xl font-bold text-white font-mono">100%</div>
                       <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500">Couverture</div>
                   </div>
               </div>

               {/* Stat 4 */}
               <div className="p-4 md:py-6 md:px-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left group cursor-default">
                   <div className="p-2 md:p-3 bg-yellow-500/10 rounded group-hover:bg-yellow-500/20 transition">
                       <ShieldCheck className="w-4 h-4 md:w-6 md:h-6 text-yellow-400" />
                   </div>
                   <div>
                       <div className="text-lg md:text-2xl font-bold text-white font-mono">2023</div>
                       <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500">Fondation</div>
                   </div>
               </div>

            </div>
         </div>
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            
            {/* GAUCHE : MANIFESTE (7/12) */}
            <div className="lg:col-span-7 space-y-8 md:space-y-12">
                
                {/* Intro Section */}
                <div className="bg-slate-900/50 border border-orange-500/30 p-4 md:p-8 rounded-bl-3xl relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                    <div className="absolute top-0 right-0 w-1 h-full bg-orange-600"></div>
                    <div className="absolute -left-6 -bottom-6 text-orange-900/20 group-hover:text-orange-800/20 transition-colors">
                        <LifeBuoy className="w-24 h-24 md:w-32 md:h-32" />
                    </div>
                    
                    <div className="relative z-10">
                         <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 font-mono flex items-center gap-3">
                            <span className="text-orange-500">01.</span> NOTRE DOCTRINE
                        </h2>
                        <div className="space-y-4 text-xs md:text-base text-slate-300 leading-relaxed text-justify font-light">
                            <p>
                                Le S.A.R. ne connaît pas de limites géographiques. Au sommet du Mont Chiliad, dans l'océan ou au cœur d'un brasier, nos spécialistes vont là où les autres ne peuvent pas aller.
                            </p>
                            <p>
                                Composé de pompiers aguerris, de pilotes tactiques (ASU) et de plongeurs de combat (Dive Unit), ce service est le bouclier ultime.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section Compétences */}
                <div>
                     <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 font-mono flex items-center gap-3">
                        <span className="text-orange-500">02.</span> CAPACITÉ OPÉRATIONNELLE
                    </h3>
                    
                    <div className="space-y-4 md:space-y-6">
                        {/* Barre 1 */}
                        <div className="relative group">
                            <div className="flex justify-between mb-2 text-[10px] md:text-xs font-mono uppercase tracking-wider text-red-400">
                                <span>Maîtrise des Incendies</span>
                                <span>100%</span>
                            </div>
                            <div className="h-1.5 md:h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-red-600 w-[100%] shadow-[0_0_15px_rgba(220,38,38,0.5)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>

                        {/* Barre 2 */}
                        <div className="relative group">
                            <div className="flex justify-between mb-2 text-[10px] md:text-xs font-mono uppercase tracking-wider text-orange-400">
                                <span>Extraction Rapide (Air/Sol)</span>
                                <span>95%</span>
                            </div>
                            <div className="h-1.5 md:h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 w-[95%] shadow-[0_0_15px_rgba(249,115,22,0.5)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>

                         {/* Barre 3 */}
                         <div className="relative group">
                            <div className="flex justify-between mb-2 text-[10px] md:text-xs font-mono uppercase tracking-wider text-blue-400">
                                <span>Sauvetage Maritime</span>
                                <span>90%</span>
                            </div>
                            <div className="h-1.5 md:h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-[90%] shadow-[0_0_15px_rgba(59,130,246,0.5)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DROITE : UNITÉS (5/12) */}
            <div className="lg:col-span-5 space-y-4 md:space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                    <h2 className="text-lg md:text-xl font-bold text-white font-mono">UNITÉS SPÉCIALISÉES</h2>
                    <Mountain className="w-4 h-4 md:w-5 md:h-5 text-slate-500" />
                </div>

                {/* Card 1 */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-red-500/50 p-4 md:p-6 rounded transition-all duration-300">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-red-400 w-4 h-4" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[32px]">
                            <Flame className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
                        </div>
                        <div>
                            <h4 className="text-base md:text-lg font-bold text-white mb-2 font-mono">FIRE UNIT</h4>
                            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                                Lutte contre les incendies. Spécialistes en désincarcération et milieux périlleux.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 - ASU */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-orange-500/50 p-4 md:p-6 rounded transition-all duration-300">
                     <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-orange-400 w-4 h-4" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[32px]">
                            <Wind className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
                        </div>
                        <div>
                            <h4 className="text-base md:text-lg font-bold text-white mb-2 font-mono">A.S.U (AIR SUPPORT)</h4>
                            <p className="text-xs md:text-sm text-slate-400 leading-relaxed mt-2">
                                Unité héliportée pour extraction Medevac. Rapidité de projection sur zones inaccessibles.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-blue-500/50 p-4 md:p-6 rounded transition-all duration-300">
                     <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-blue-400 w-4 h-4" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[32px]">
                            <Anchor className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
                        </div>
                        <div>
                            <h4 className="text-base md:text-lg font-bold text-white mb-2 font-mono">DIVE UNIT</h4>
                            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                                Opérations maritimes. Recherche de victimes noyées et sécurisation nautique.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA - BOUTON CONTACT QUI OUVRE LA MODALE */}
                <div className="mt-8 p-4 border border-dashed border-slate-700 rounded bg-slate-900/50 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-orange-500/5 pointer-events-none"></div>
                    <p className="text-[10px] md:text-xs text-slate-500 font-mono uppercase mb-2">Urgence Absolue ?</p>
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="bg-orange-600 hover:bg-orange-500 text-white px-4 md:px-6 py-2 rounded font-bold text-xs md:text-sm transition-colors w-full uppercase tracking-widest shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] cursor-pointer z-50 relative"
                    >
                        Déclencher une Alerte
                    </button>
                </div>

            </div>
        </div>
      </div>

    </div>
  );
};

export default Sar;