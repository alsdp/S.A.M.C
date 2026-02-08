import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Baby, HeartPulse, Activity, 
  Dna, Calendar, Microscope, ChevronRight, Sparkles, ClipboardList,
  X, Hammer, Stethoscope 
} from 'lucide-react';

const Gos = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- STYLES CSS INJECTÉS ---
  const CustomStyles = () => (
    <style>{`
      .glass-panel {
        background: rgba(15, 23, 42, 0.6);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(236, 72, 153, 0.1);
      }
      .glass-panel:hover {
        border-color: rgba(236, 72, 153, 0.3);
        box-shadow: 0 0 30px -10px rgba(236, 72, 153, 0.15);
      }
    `}</style>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-pink-500/30 overflow-x-hidden relative">
      <CustomStyles />

      {/* --- BACKGROUND DYNAMIQUE (PINK THEME) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-pink-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[400px] h-[400px] bg-fuchsia-500/5 rounded-full blur-[80px]"></div>
        {/* Grille technique */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#370018_1px,transparent_1px),linear-gradient(to_bottom,#370018_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      {/* --- MODALE "EN DÉVELOPPEMENT" --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-md transition-opacity" onClick={() => setIsModalOpen(false)}></div>
            <div className="relative w-full max-w-sm bg-[#0f172a] border border-pink-500/30 p-8 rounded-2xl shadow-[0_0_50px_rgba(236,72,153,0.15)] transform transition-all scale-100 animate-in fade-in zoom-in duration-200">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-pink-500/10 rounded-full border border-pink-500/20 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                        <Hammer className="w-8 h-8 text-pink-400 animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-mono tracking-wide">MODULE GESTATION</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Le suivi de grossesse numérique est en cours de déploiement (v3.0). Veuillez utiliser le formulaire standard.
                    </p>
                    <button onClick={() => setIsModalOpen(false)} className="w-full py-3 bg-pink-900/30 hover:bg-pink-600 border border-pink-500/30 text-pink-200 hover:text-white rounded-lg font-bold uppercase text-xs tracking-widest transition-all">
                        Fermer
                    </button>
                </div>
            </div>
        </div>
      )}

      {/* --- HEADER --- */}
      <header className="relative pt-8 pb-12 z-10">
        <div className="container mx-auto px-4 md:px-6">
            <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 text-pink-400 hover:text-white hover:bg-pink-600/20 border border-pink-500/10 hover:border-pink-500/50 transition-all mb-8 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Retour Dashboard</span>
            </Link>

            <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                <div className="max-w-4xl w-full">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-pink-500 to-transparent"></div>
                        <span className="text-pink-400 font-mono text-xs uppercase tracking-[0.2em]">Maternité & Chirurgie</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                        SANTÉ DE LA <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-600">FEMME</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed border-l-2 border-pink-500/30 pl-6">
                        Le <strong className="text-white">G.O.S (Gynecology & Obstetrics Service)</strong> est l'alliance de la douceur et de la haute technologie. De la genèse de la vie jusqu'au suivi pathologique.
                    </p>
                </div>

                <div className="flex flex-col items-end gap-2">
                    <div className="px-4 py-2 bg-pink-900/10 border border-pink-500/30 rounded-lg flex items-center gap-3">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                        </span>
                        <span className="text-xs font-bold text-pink-200 tracking-wider">UNITÉ NÉONATALE ACTIVE</span>
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">INCUBATORS // ONLINE</div>
                </div>
            </div>
        </div>
      </header>

      {/* --- STATS BAR --- */}
      <div className="border-y border-white/5 bg-slate-900/30 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5">
                <div className="p-6 flex items-center gap-4 group hover:bg-white/5 transition-colors">
                    <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400 group-hover:bg-pink-500/20 transition-colors">
                        <Baby className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">15+</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Naissances/Mois</div>
                    </div>
                </div>
                <div className="p-6 flex items-center gap-4 group hover:bg-white/5 transition-colors">
                    <div className="p-3 rounded-lg bg-rose-500/10 text-rose-400 group-hover:bg-rose-500/20 transition-colors">
                        <Activity className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">24/7</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Urgences Obst.</div>
                    </div>
                </div>
                <div className="p-6 flex items-center gap-4 group hover:bg-white/5 transition-colors">
                    <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                        <Dna className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">LAB</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Génétique</div>
                    </div>
                </div>
                <div className="p-6 flex items-center gap-4 group hover:bg-white/5 transition-colors">
                    <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                        <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">RDV</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Rapide</div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- CONTENU --- */}
      <main className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* GAUCHE : ENGAGEMENT ET STATS */}
            <div className="lg:col-span-7 space-y-12">
                
                {/* Intro Section */}
                <div className="glass-panel p-8 rounded-bl-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-1 h-full bg-pink-500 transition-all group-hover:bg-rose-500"></div>
                    <div className="absolute -left-10 -bottom-10 text-pink-500/10 transform -rotate-12 group-hover:scale-110 transition-transform duration-700">
                        <Microscope className="w-48 h-48" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-3 relative z-10">
                        <span className="text-pink-500">01.</span> NOTRE ENGAGEMENT
                    </h2>
                    <div className="space-y-6 text-slate-300 leading-relaxed text-lg font-light relative z-10">
                        <p>
                            Le pôle G.O.S dépasse la simple consultation. Nous sommes les gardiens de la santé féminine, opérant à la frontière de la médecine préventive et de la chirurgie d'urgence.
                        </p>
                        <p>
                            Que ce soit pour le suivi d'une grossesse à risque ou une chirurgie réparatrice complexe, nos spécialistes disposent d'un plateau technique de dernière génération.
                        </p>
                    </div>
                </div>

                {/* Performance (Barres) */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-8 font-mono flex items-center gap-3">
                        <span className="text-pink-500">02.</span> PERFORMANCE DU SERVICE
                    </h3>
                    <div className="space-y-6">
                        {/* Bar 1 */}
                        <div className="group">
                            <div className="flex justify-between mb-2 text-xs font-mono uppercase tracking-wider text-green-400">
                                <span>Suivi de Grossesse</span>
                                <span className="text-white">99%</span>
                            </div>
                            <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                                <div className="h-full bg-green-500 w-[99%] relative shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>
                        {/* Bar 2 */}
                        <div className="group">
                            <div className="flex justify-between mb-2 text-xs font-mono uppercase tracking-wider text-pink-400">
                                <span>Chirurgie Gynécologique</span>
                                <span className="text-white">95%</span>
                            </div>
                            <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                                <div className="h-full bg-pink-600 w-[95%] relative shadow-[0_0_15px_rgba(219,39,119,0.5)]">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>
                        {/* Bar 3 */}
                        <div className="group">
                            <div className="flex justify-between mb-2 text-xs font-mono uppercase tracking-wider text-rose-400">
                                <span>Urgences Vitales Néonatales</span>
                                <span className="text-white">100%</span>
                            </div>
                            <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                                <div className="h-full bg-rose-500 w-full relative shadow-[0_0_15px_rgba(244,63,94,0.5)]">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DROITE : PROTOCOLES */}
            <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center justify-between border-b border-pink-500/20 pb-4 mb-6">
                    <h2 className="text-lg font-bold text-white font-mono tracking-wider">DOMAINES D'INTERVENTION</h2>
                    <Sparkles className="w-5 h-5 text-pink-500" />
                </div>

                {/* Card 1 */}
                <div className="group glass-panel p-6 rounded-xl hover:bg-pink-900/10 transition-all duration-300 relative">
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-pink-400 w-5 h-5" />
                    </div>
                    <div className="flex gap-5">
                        <div className="mt-1 p-2 bg-pink-900/30 rounded-lg border border-pink-500/30 h-fit group-hover:border-pink-400 transition-colors">
                            <Baby className="w-6 h-6 text-pink-300" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 font-mono">OBSTÉTRIQUE</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Suivi complet pré et post-natal. Échographies 3D et accouchement sécurisé.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group glass-panel p-6 rounded-xl hover:bg-rose-900/10 transition-all duration-300 relative">
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-rose-400 w-5 h-5" />
                    </div>
                    <div className="flex gap-5">
                        <div className="mt-1 p-2 bg-rose-900/30 rounded-lg border border-rose-500/30 h-fit group-hover:border-rose-400 transition-colors">
                            <HeartPulse className="w-6 h-6 text-rose-300" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 font-mono">GYNÉCOLOGIE</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Dépistage, contraception et traitement des pathologies. Approche chirurgicale mini-invasive.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group glass-panel p-6 rounded-xl hover:bg-purple-900/10 transition-all duration-300 relative">
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-purple-400 w-5 h-5" />
                    </div>
                    <div className="flex gap-5">
                        <div className="mt-1 p-2 bg-purple-900/30 rounded-lg border border-purple-500/30 h-fit group-hover:border-purple-400 transition-colors">
                            <ClipboardList className="w-6 h-6 text-purple-300" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 font-mono">SUIVI & PRÉVENTION</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Éducation à la santé sexuelle. Accompagnement psychologique post-opératoire.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA - LIEN VERS RDV */}
                <div className="mt-8 p-1 rounded-xl bg-gradient-to-r from-pink-900/50 to-rose-900/50 shadow-lg">
                    <div className="bg-[#020617] rounded-lg p-6 text-center border border-pink-500/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-pink-500/5 pointer-events-none"></div>
                        <p className="text-xs text-pink-400 font-mono uppercase mb-4 tracking-widest">Planning S.A.M.C</p>
                        
                        <Link 
                            to="/rdv"
                            className="block w-full py-4 bg-pink-600 hover:bg-pink-500 text-white rounded-lg font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all duration-300 text-sm"
                        >
                            Contacter une Sage-Femme
                        </Link>
                    </div>
                </div>

            </div>
        </div>
      </main>
    </div>
  );
};

export default Gos;