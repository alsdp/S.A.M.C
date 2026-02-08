import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Skull, HeartHandshake, Truck, 
  FileText, ClipboardList, Shield, Hourglass, ChevronRight, UserMinus,
  X, Hammer, Church, Briefcase 
} from 'lucide-react';

const Ams = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- STYLES CSS INJECTÉS ---
  const CustomStyles = () => (
    <style>{`
      .glass-panel {
        background: rgba(15, 23, 42, 0.6);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(148, 163, 184, 0.1);
      }
      .glass-panel:hover {
        border-color: rgba(148, 163, 184, 0.3);
        box-shadow: 0 0 30px -10px rgba(148, 163, 184, 0.15);
      }
    `}</style>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-slate-500/30 overflow-x-hidden relative">
      <CustomStyles />

      {/* --- BACKGROUND DYNAMIQUE (SLATE/MONOCHROME THEME) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-slate-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gray-600/10 rounded-full blur-[100px]"></div>
        {/* Grille technique */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      {/* --- MODALE "EN DÉVELOPPEMENT" (Si besoin) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-md transition-opacity" onClick={() => setIsModalOpen(false)}></div>
            <div className="relative w-full max-w-sm bg-[#0f172a] border border-slate-500/30 p-8 rounded-2xl shadow-[0_0_50px_rgba(148,163,184,0.15)] transform transition-all scale-100 animate-in fade-in zoom-in duration-200">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-slate-500/10 rounded-full border border-slate-500/20 shadow-[0_0_20px_rgba(148,163,184,0.2)]">
                        <Hammer className="w-8 h-8 text-slate-400 animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-mono tracking-wide">SERVICE INDISPONIBLE</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Le module de gestion funéraire est en cours de maintenance. Veuillez contacter l'administration par téléphone.
                    </p>
                    <button onClick={() => setIsModalOpen(false)} className="w-full py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600/30 text-slate-200 hover:text-white rounded-lg font-bold uppercase text-xs tracking-widest transition-all">
                        Fermer
                    </button>
                </div>
            </div>
        </div>
      )}

      {/* --- HEADER --- */}
      <header className="relative pt-8 pb-12 z-10">
        <div className="container mx-auto px-4 md:px-6">
            <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-500 transition-all mb-8 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Retour Dashboard</span>
            </Link>

            <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                <div className="max-w-4xl w-full">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-slate-500 to-transparent"></div>
                        <span className="text-slate-400 font-mono text-xs uppercase tracking-[0.2em]">Service Funéraire</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                        AMBULATORY <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">MORTUARY</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed border-l-2 border-slate-500/30 pl-6">
                        Le <strong className="text-white">A.M.S</strong> est l'unité la plus silencieuse mais essentielle. Nous assurons le respect de la dignité humaine au-delà de la vie.
                    </p>
                </div>

                <div className="flex flex-col items-end gap-2">
                    <div className="px-4 py-2 bg-slate-900/50 border border-slate-700/50 rounded-lg flex items-center gap-3">
                        <span className="relative flex h-3 w-3">
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-500"></span>
                        </span>
                        <span className="text-xs font-bold text-slate-300 tracking-wider">ZONE FROIDE ACTIVE</span>
                    </div>
                    <div className="text-[10px] font-mono text-slate-600 uppercase">TEMP -4°C // STABLE</div>
                </div>
            </div>
        </div>
      </header>

      {/* --- STATS BAR --- */}
      <div className="border-y border-slate-800/60 bg-slate-900/30 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-800/60">
                <div className="p-6 flex items-center gap-4 group hover:bg-slate-800/20 transition-colors">
                    <div className="p-3 rounded-lg bg-slate-800/50 text-slate-400 group-hover:text-white transition-colors">
                        <UserMinus className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">300+</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Prises en Charge</div>
                    </div>
                </div>
                <div className="p-6 flex items-center gap-4 group hover:bg-slate-800/20 transition-colors">
                    <div className="p-3 rounded-lg bg-slate-800/50 text-slate-400 group-hover:text-white transition-colors">
                        <Truck className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">24/7</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Réponse</div>
                    </div>
                </div>
                <div className="p-6 flex items-center gap-4 group hover:bg-slate-800/20 transition-colors">
                    <div className="p-3 rounded-lg bg-slate-800/50 text-slate-400 group-hover:text-white transition-colors">
                        <FileText className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">LÉGAL</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Conformité</div>
                    </div>
                </div>
                <div className="p-6 flex items-center gap-4 group hover:bg-slate-800/20 transition-colors">
                    <div className="p-3 rounded-lg bg-slate-800/50 text-slate-400 group-hover:text-white transition-colors">
                        <Hourglass className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">2023</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Fondation</div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- CONTENU --- */}
      <main className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* GAUCHE : INFO */}
            <div className="lg:col-span-7 space-y-12">
                
                {/* Introduction */}
                <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-slate-500 transition-all group-hover:bg-white"></div>
                    <div className="absolute -right-10 -bottom-10 text-slate-800/30 transform rotate-12 group-hover:scale-110 transition-transform duration-700">
                        <Skull className="w-48 h-48" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-3 relative z-10">
                        <span className="text-slate-500">01.</span> NOTRE CODE
                    </h2>
                    <div className="space-y-6 text-slate-300 leading-relaxed text-lg font-light relative z-10">
                        <p>
                            Le service A.M.S. opère dans l'ombre, mais son rôle est crucial. Nous traitons la mort avec le même professionnalisme que la chirurgie traite la vie.
                        </p>
                        <p>
                            De la levée de corps sur scène de crime à la préparation finale, nos agents suivent des protocoles stricts pour garantir l'intégrité des preuves et le respect des familles.
                        </p>
                    </div>
                </div>

                {/* Compétences (Stats Bars) */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-8 font-mono flex items-center gap-3">
                        <span className="text-slate-500">02.</span> RIGOUREUX & EFFICACE
                    </h3>
                    <div className="space-y-6">
                        {/* Bar 1 */}
                        <div>
                            <div className="flex justify-between mb-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                                <span>Respect Protocoles Sanitaires</span>
                                <span className="text-white">100%</span>
                            </div>
                            <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                                <div className="h-full bg-slate-400 w-full relative shadow-[0_0_15px_rgba(148,163,184,0.5)]"></div>
                            </div>
                        </div>
                        {/* Bar 2 */}
                        <div>
                            <div className="flex justify-between mb-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                                <span>Satisfaction des Familles</span>
                                <span className="text-white">98%</span>
                            </div>
                            <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                                <div className="h-full bg-slate-500 w-[98%] relative shadow-[0_0_15px_rgba(100,116,139,0.5)]"></div>
                            </div>
                        </div>
                        {/* Bar 3 */}
                        <div>
                            <div className="flex justify-between mb-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                                <span>Rapidité d'Intervention</span>
                                <span className="text-white">95%</span>
                            </div>
                            <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                                <div className="h-full bg-slate-600 w-[95%] relative shadow-[0_0_15px_rgba(71,85,105,0.5)]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DROITE : SERVICES */}
            <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                    <h2 className="text-lg font-bold text-white font-mono tracking-wider">DOMAINES D'INTERVENTION</h2>
                    <Shield className="w-5 h-5 text-slate-500" />
                </div>

                {/* Card 1 */}
                <div className="group glass-panel p-6 rounded-xl hover:bg-slate-800/40 transition-all duration-300 relative">
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-slate-400 w-5 h-5" />
                    </div>
                    <div className="flex gap-5">
                        <div className="mt-1 p-2 bg-slate-900/50 rounded-lg border border-slate-700/50 h-fit group-hover:border-slate-500 transition-colors">
                            <HeartHandshake className="w-6 h-6 text-slate-300" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 font-mono">GESTION DIGNE</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Soins de conservation et de présentation. Préservation de l'image du défunt pour les proches.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group glass-panel p-6 rounded-xl hover:bg-slate-800/40 transition-all duration-300 relative">
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-slate-400 w-5 h-5" />
                    </div>
                    <div className="flex gap-5">
                        <div className="mt-1 p-2 bg-slate-900/50 rounded-lg border border-slate-700/50 h-fit group-hover:border-slate-500 transition-colors">
                            <Truck className="w-6 h-6 text-slate-300" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 font-mono">LOGISTIQUE</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Flotte de véhicules discrets (Coroner). Coordination radio directe avec le S.A.S.P et le L.S.F.D.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group glass-panel p-6 rounded-xl hover:bg-slate-800/40 transition-all duration-300 relative">
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-slate-400 w-5 h-5" />
                    </div>
                    <div className="flex gap-5">
                        <div className="mt-1 p-2 bg-slate-900/50 rounded-lg border border-slate-700/50 h-fit group-hover:border-slate-500 transition-colors">
                            <FileText className="w-6 h-6 text-slate-300" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 font-mono">ADMINISTRATION</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Gestion des certificats de décès, scellés judiciaires et formalités légales complexes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA - LIEN VERS RDV */}
                <div className="mt-8 p-1 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 shadow-lg">
                    <div className="bg-[#020617] rounded-lg p-6 text-center border border-slate-800 relative overflow-hidden">
                        <div className="absolute inset-0 bg-slate-500/5 pointer-events-none"></div>
                        <p className="text-xs text-slate-500 font-mono uppercase mb-4 tracking-widest">Ligne Directe 24/7</p>
                        
                        <Link 
                            to="/rdv"
                            className="block w-full py-4 bg-slate-200 hover:bg-white text-slate-900 rounded-lg font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 text-sm"
                        >
                            Contacter la Régulation
                        </Link>
                    </div>
                </div>

            </div>
        </div>
      </main>
    </div>
  );
};

export default Ams;