import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Stethoscope, Activity, Siren, 
  HeartPulse, ShieldAlert, Microscope, ChevronRight 
} from 'lucide-react';

const Surgery = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen min-w-[280px] bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* --- AMBIANCE DE FOND (GRID & GLOW) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         {/* Grille technique en fond */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
         {/* Lueurs d'ambiance - Ajustées pour mobile */}
         <div className="absolute top-[-10%] right-[-5%] w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-600/10 rounded-full blur-[80px] md:blur-[120px]"></div>
      </div>

      {/* --- HEADER IMMERSIF --- */}
      <header className="relative pt-16 pb-6 md:pt-24 md:pb-12 overflow-hidden z-10">
        <div className="container mx-auto px-4 md:px-6 relative">
          
          {/* Fil d'ariane stylisé */}
          <Link to="/" className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-300 transition-colors mb-6 md:mb-10 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] border-b border-cyan-500/30 pb-1">
             <ArrowLeft className="w-3 h-3" /> Retour Dashboard
          </Link>

          <div className="flex flex-col md:flex-row items-end justify-between gap-4 md:gap-8">
            <div className="max-w-4xl w-full">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                 <div className="h-px w-4 md:w-8 bg-cyan-500"></div>
                 <span className="text-cyan-400 font-mono text-[10px] md:text-xs uppercase tracking-widest">Dép. Prioritaire</span>
              </div>
              
              {/* TITRE RESPONSIVE : Commence à 3xl pour tenir sur 280px */}
              <h1 className="text-3xl xs:text-4xl md:text-8xl font-black uppercase text-white leading-[0.9] tracking-tighter mb-4 md:mb-6 break-words">
                Bloc <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Opératoire</span>
              </h1>
              
              <p className="text-sm md:text-xl text-slate-400 max-w-2xl leading-relaxed border-l-2 border-cyan-500/50 pl-4 md:pl-6">
                Le <strong className="text-white">Service de Chirurgie (S.C.S)</strong> représente l'élite technique. Spécialisé en traumatologie lourde et urgence vitale.
              </p>
            </div>

            {/* Indicateur de Status (Caché sur très petits écrans, visible sur Tablette/PC) */}
            <div className="hidden md:block text-right">
                <div className="flex items-center gap-2 justify-end text-emerald-400 font-mono text-sm mb-1">
                   <span className="relative flex h-3 w-3">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                   </span>
                   OPÉRATIONNEL
                </div>
                <div className="text-slate-500 text-xs font-mono">SYS.V.2.0.4 // ONLINE</div>
            </div>
          </div>
        </div>
      </header>

      {/* --- STATS HUD (GRID 2x2 sur Mobile pour gagner de la place) --- */}
      <div className="border-y border-white/5 bg-slate-900/40 backdrop-blur-sm z-20 relative">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5 border-l border-r border-white/5">
               
               {/* Stat 1 */}
               <div className="p-4 md:py-6 md:px-6 flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4 text-center md:text-left group cursor-default">
                   <div className="p-2 md:p-3 bg-blue-500/10 rounded group-hover:bg-blue-500/20 transition">
                       <Activity className="w-4 h-4 md:w-6 md:h-6 text-blue-400" />
                   </div>
                   <div>
                       <div className="text-lg md:text-2xl font-bold text-white font-mono">24/7</div>
                       <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500">Disponibilité</div>
                   </div>
               </div>

               {/* Stat 2 */}
               <div className="p-4 md:py-6 md:px-6 flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4 text-center md:text-left group cursor-default">
                   <div className="p-2 md:p-3 bg-cyan-500/10 rounded group-hover:bg-cyan-500/20 transition">
                       <Stethoscope className="w-4 h-4 md:w-6 md:h-6 text-cyan-400" />
                   </div>
                   <div>
                       <div className="text-lg md:text-2xl font-bold text-white font-mono">Type A</div>
                       <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500">Trauma</div>
                   </div>
               </div>

               {/* Stat 3 */}
               <div className="p-4 md:py-6 md:px-6 flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4 text-center md:text-left group cursor-default">
                   <div className="p-2 md:p-3 bg-red-500/10 rounded group-hover:bg-red-500/20 transition">
                       <Siren className="w-4 h-4 md:w-6 md:h-6 text-red-500 animate-pulse" />
                   </div>
                   <div>
                       <div className="text-lg md:text-2xl font-bold text-red-500 font-mono">GSW</div>
                       <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-red-400/60">Balles</div>
                   </div>
               </div>

                 {/* Stat 4 */}
                 <div className="p-4 md:py-6 md:px-6 flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4 text-center md:text-left group cursor-default">
                   <div className="p-2 md:p-3 bg-purple-500/10 rounded group-hover:bg-purple-500/20 transition">
                       <Microscope className="w-4 h-4 md:w-6 md:h-6 text-purple-400" />
                   </div>
                   <div>
                       <div className="text-lg md:text-2xl font-bold text-white font-mono">100%</div>
                       <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500">Asepsie</div>
                   </div>
               </div>

            </div>
         </div>
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            
            {/* GAUCHE : LE MANIFESTE (Largeur 7/12) */}
            <div className="lg:col-span-7 space-y-8 md:space-y-12">
                
                {/* Section Introduction */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-white/10 p-4 md:p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>
                    <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 font-mono flex items-center gap-3">
                        <span className="text-blue-500">01.</span> NOS MISSIONS
                    </h2>
                    <div className="space-y-4 text-xs md:text-base text-slate-300 leading-relaxed text-justify">
                        <p>
                            Le service de chirurgie n'est pas une simple salle d'opération, c'est un <span className="text-white font-semibold">sanctuaire de survie</span>. Nos équipes interviennent dans des contextes de haute intensité.
                        </p>
                        <p>
                            Notre doctrine est simple : stabiliser, réparer, réhabiliter. De l'extraction de projectiles à la réparation d'organes vitaux.
                        </p>
                    </div>
                </div>

                {/* Section Compétences */}
                <div>
                     <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 font-mono flex items-center gap-3">
                        <span className="text-blue-500">02.</span> TAUX DE RÉUSSITE
                    </h3>
                    
                    <div className="space-y-4 md:space-y-6">
                        {/* Barre 1 */}
                        <div className="relative group">
                            <div className="flex justify-between mb-2 text-[10px] md:text-xs font-mono uppercase tracking-wider text-cyan-400">
                                <span>Chirurgie Viscérale</span>
                                <span>94%</span>
                            </div>
                            <div className="h-1.5 md:h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-cyan-500 w-[94%] shadow-[0_0_15px_rgba(6,182,212,0.5)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>

                        {/* Barre 2 */}
                        <div className="relative group">
                            <div className="flex justify-between mb-2 text-[10px] md:text-xs font-mono uppercase tracking-wider text-blue-400">
                                <span>Extraction Balistique</span>
                                <span>98%</span>
                            </div>
                            <div className="h-1.5 md:h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-600 w-[98%] shadow-[0_0_15px_rgba(37,99,235,0.5)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>

                         {/* Barre 3 */}
                         <div className="relative group">
                            <div className="flex justify-between mb-2 text-[10px] md:text-xs font-mono uppercase tracking-wider text-purple-400">
                                <span>Neurochirurgie</span>
                                <span>82%</span>
                            </div>
                            <div className="h-1.5 md:h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-600 w-[82%] shadow-[0_0_15px_rgba(147,51,234,0.5)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DROITE : PROTOCOLES (Largeur 5/12) */}
            <div className="lg:col-span-5 space-y-4 md:space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                    <h2 className="text-lg md:text-xl font-bold text-white font-mono">PROTOCOLES S.C.S</h2>
                    <ShieldAlert className="w-4 h-4 md:w-5 md:h-5 text-slate-500" />
                </div>

                {/* Card 1 */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-cyan-500/50 p-4 md:p-6 rounded transition-all duration-300">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-cyan-400 w-4 h-4" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[32px]">
                            <HeartPulse className="w-6 h-6 md:w-8 md:h-8 text-cyan-500" />
                        </div>
                        <div>
                            <h4 className="text-base md:text-lg font-bold text-white mb-2 font-mono">PRISE EN CHARGE</h4>
                            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                                Analyse immédiate des constantes. Mise en condition (Code Rouge). Préparation stérile.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-blue-500/50 p-4 md:p-6 rounded transition-all duration-300">
                     <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-blue-400 w-4 h-4" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[32px]">
                            <Activity className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
                        </div>
                        <div>
                            <h4 className="text-base md:text-lg font-bold text-white mb-2 font-mono">INTERVENTION</h4>
                            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                                Actes chirurgicaux. Coagulants avancés et moniteur cardiaque temps réel.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-purple-500/50 p-4 md:p-6 rounded transition-all duration-300">
                     <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-purple-400 w-4 h-4" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[32px]">
                            <Stethoscope className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
                        </div>
                        <div>
                            <h4 className="text-base md:text-lg font-bold text-white mb-2 font-mono">SUIVI POST-OP</h4>
                            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                                Transfert salle de réveil. Prescription d'antalgiques. Rééducation programmée.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action RP */}
                <div className="mt-8 p-4 border border-dashed border-slate-700 rounded bg-slate-900/50 text-center">
                    <p className="text-[10px] md:text-xs text-slate-500 font-mono uppercase mb-2">Besoin d'une consultation ?</p>
                    <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 md:px-6 py-2 rounded font-bold text-xs md:text-sm transition-colors w-full uppercase tracking-widest">
                        Contacter un Chirurgien
                    </button>
                </div>

            </div>
        </div>
      </div>

    </div>
  );
};

export default Surgery;