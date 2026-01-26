import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Mountain, Flame, Waves, Anchor, 
  Wind, ShieldCheck, Siren, Activity, Compass, LifeBuoy, ChevronRight 
} from 'lucide-react';

const Sar = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* --- AMBIANCE DE FOND (GRID & GLOW ORANGE) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         {/* Grille technique */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
         {/* Lueurs d'ambiance */}
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[120px]"></div>
      </div>

      {/* --- HEADER IMMERSIF --- */}
      <header className="relative pt-24 pb-12 overflow-hidden z-10">
        <div className="container mx-auto px-6 relative">
          
          {/* Fil d'ariane */}
          <Link to="/" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-10 font-mono text-xs uppercase tracking-[0.2em] border-b border-orange-500/30 pb-1">
             <ArrowLeft className="w-3 h-3" /> Retour au Dashboard
          </Link>

          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                 <div className="h-px w-8 bg-orange-500"></div>
                 <span className="text-orange-400 font-mono text-xs uppercase tracking-widest">Opérations Spéciales</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black uppercase text-white leading-[0.9] tracking-tighter mb-6">
                Search & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Rescue</span>
              </h1>
              
              <p className="text-xl text-slate-400 max-w-2xl leading-relaxed border-l-2 border-orange-500/50 pl-6">
                 Le <strong className="text-white">S.A.R (Search & Rescue Service)</strong> est l'élite opérationnelle du S.A.M.C.
                 Quand l'accès est impossible, quand le temps est compté et que les éléments se déchaînent, nos unités terrestres, aériennes et maritimes interviennent.
              </p>
            </div>

            {/* Indicateur de Status */}
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

      {/* --- STATS HUD --- */}
      <div className="border-y border-white/5 bg-slate-900/40 backdrop-blur-sm z-20 relative">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
                
                {/* Stat 1 */}
                <div className="py-6 md:px-6 flex items-center gap-4 group cursor-default">
                    <div className="p-3 bg-orange-500/10 rounded group-hover:bg-orange-500/20 transition">
                        <Activity className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">3</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500">Divisions d'Élite</div>
                    </div>
                </div>

                {/* Stat 2 */}
                <div className="py-6 md:px-6 flex items-center gap-4 group cursor-default">
                    <div className="p-3 bg-red-500/10 rounded group-hover:bg-red-500/20 transition">
                        <Siren className="w-6 h-6 text-red-500 animate-pulse" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">&lt; 3 MIN</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500">Temps de Réponse</div>
                    </div>
                </div>

                {/* Stat 3 */}
                <div className="py-6 md:px-6 flex items-center gap-4 group cursor-default">
                    <div className="p-3 bg-blue-500/10 rounded group-hover:bg-blue-500/20 transition">
                        <Compass className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">GLOBAL</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500">Couverture Totale</div>
                    </div>
                </div>

                 {/* Stat 4 */}
                 <div className="py-6 md:px-6 flex items-center gap-4 group cursor-default">
                    <div className="p-3 bg-yellow-500/10 rounded group-hover:bg-yellow-500/20 transition">
                        <ShieldCheck className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">2023</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500">Année de Fondation</div>
                    </div>
                </div>

            </div>
         </div>
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* GAUCHE : LE MANIFESTE (Largeur 7/12) */}
            <div className="lg:col-span-7 space-y-12">
                
                {/* Intro Section */}
                <div className="bg-slate-900/50 border border-orange-500/30 p-8 rounded-bl-3xl relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                    <div className="absolute top-0 right-0 w-1 h-full bg-orange-600"></div>
                    <div className="absolute -left-6 -bottom-6 text-orange-900/20 group-hover:text-orange-800/20 transition-colors">
                        <LifeBuoy className="w-32 h-32" />
                    </div>
                    
                    <div className="relative z-10">
                         <h2 className="text-3xl font-bold text-white mb-6 font-mono flex items-center gap-3">
                            <span className="text-orange-500">01.</span> NOTRE DOCTRINE
                        </h2>
                        <div className="space-y-4 text-slate-300 leading-loose text-justify font-light">
                            <p>
                                Le S.A.R. ne connaît pas de limites géographiques. Que ce soit au sommet du Mont Chiliad, dans les profondeurs de l'océan Pacifique ou au cœur d'un brasier urbain, nos spécialistes vont là où les autres ne peuvent pas aller.
                            </p>
                            <p>
                                Composé de pompiers aguerris, de pilotes tactiques (ASU) et de plongeurs de combat (Dive Unit), ce service est le bouclier ultime contre les catastrophes majeures.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section Compétences (Stats Barres) */}
                <div>
                     <h3 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-3">
                        <span className="text-orange-500">02.</span> CAPACITÉ OPÉRATIONNELLE
                    </h3>
                    
                    <div className="space-y-6">
                        {/* Barre 1 */}
                        <div className="relative group">
                            <div className="flex justify-between mb-2 text-xs font-mono uppercase tracking-wider text-red-400">
                                <span>Maîtrise des Incendies (Fire Suppression)</span>
                                <span>100%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-red-600 w-[100%] shadow-[0_0_15px_rgba(220,38,38,0.5)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>

                        {/* Barre 2 */}
                        <div className="relative group">
                            <div className="flex justify-between mb-2 text-xs font-mono uppercase tracking-wider text-orange-400">
                                <span>Extraction Rapide (Air/Sol)</span>
                                <span>95%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 w-[95%] shadow-[0_0_15px_rgba(249,115,22,0.5)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>

                         {/* Barre 3 */}
                         <div className="relative group">
                            <div className="flex justify-between mb-2 text-xs font-mono uppercase tracking-wider text-blue-400">
                                <span>Sauvetage Maritime</span>
                                <span>90%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-[90%] shadow-[0_0_15px_rgba(59,130,246,0.5)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DROITE : UNITÉS (Largeur 5/12) */}
            <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                    <h2 className="text-xl font-bold text-white font-mono">UNITÉS SPÉCIALISÉES</h2>
                    <Mountain className="w-5 h-5 text-slate-500" />
                </div>

                {/* Card 1 */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-red-500/50 p-6 rounded transition-all duration-300">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-red-400" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1">
                            <Flame className="w-8 h-8 text-red-500" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 font-mono">FIRE UNIT (POMPIERS)</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Lutte contre les incendies industriels et forestiers. Spécialistes en désincarcération (accidentologie routière) et milieux périlleux.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-orange-500/50 p-6 rounded transition-all duration-300">
                     <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-orange-400" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1">
                            <Wind className="w-8 h-8 text-orange-500" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 font-mono">A.S.U (AIR SUPPORT)</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                

[Image of rescue helicopter]

                                Unité héliportée pour extraction Medevac (Medical Evacuation). Rapidité de projection sur zones inaccessibles aux véhicules terrestres.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-blue-500/50 p-6 rounded transition-all duration-300">
                     <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-blue-400" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1">
                            <Anchor className="w-8 h-8 text-blue-500" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 font-mono">DIVE UNIT (PLONGÉE)</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Opérations maritimes et subaquatiques. Recherche de victimes noyées et sécurisation de périmètres nautiques.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Zone de Call to Action RP */}
                <div className="mt-8 p-4 border border-dashed border-slate-700 rounded bg-slate-900/50 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-orange-500/5 pointer-events-none"></div>
                    <p className="text-xs text-slate-500 font-mono uppercase mb-2">Urgence Absolue ?</p>
                    <button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded font-bold text-sm transition-colors w-full uppercase tracking-widest shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]">
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