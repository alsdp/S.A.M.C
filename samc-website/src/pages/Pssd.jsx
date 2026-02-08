import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Brain, UserCheck, HeartHandshake, 
  ShieldCheck, Sparkles, Fingerprint, ChevronRight, FileHeart, Lock, X, Hammer 
} from 'lucide-react';

const Pssd = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- STYLES CSS INJECTÉS ---
  const CustomStyles = () => (
    <style>{`
      .glass-panel {
        background: rgba(15, 23, 42, 0.6);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(168, 85, 247, 0.1);
      }
      .glass-panel:hover {
        border-color: rgba(168, 85, 247, 0.3);
        box-shadow: 0 0 30px -10px rgba(168, 85, 247, 0.15);
      }
    `}</style>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
      <CustomStyles />

      {/* --- BACKGROUND DYNAMIQUE (PURPLE THEME) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[400px] h-[400px] bg-fuchsia-500/5 rounded-full blur-[80px]"></div>
        {/* Grille technique */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      {/* --- MODALE "EN DÉVELOPPEMENT" --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-md transition-opacity" onClick={() => setIsModalOpen(false)}></div>
            <div className="relative w-full max-w-sm bg-[#0f172a] border border-purple-500/30 p-8 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.15)] transform transition-all scale-100 animate-in fade-in zoom-in duration-200">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-purple-500/10 rounded-full border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <Hammer className="w-8 h-8 text-purple-400 animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-mono tracking-wide">SECTION RESTREINTE</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        L'accès à ce module nécessite une accréditation de niveau 5 (Psychiatrie Avancée).
                    </p>
                    <button onClick={() => setIsModalOpen(false)} className="w-full py-3 bg-purple-900/30 hover:bg-purple-600 border border-purple-500/30 text-purple-200 hover:text-white rounded-lg font-bold uppercase text-xs tracking-widest transition-all">
                        Fermer
                    </button>
                </div>
            </div>
        </div>
      )}

      {/* --- HEADER --- */}
      <header className="relative pt-8 pb-12 z-10">
        <div className="container mx-auto px-4 md:px-6">
            <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 text-purple-400 hover:text-white hover:bg-purple-600/20 border border-purple-500/10 hover:border-purple-500/50 transition-all mb-8 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Retour Dashboard</span>
            </Link>

            <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                <div className="max-w-4xl w-full">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-transparent"></div>
                        <span className="text-purple-400 font-mono text-xs uppercase tracking-[0.2em]">Santé Mentale</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                        DÉP. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">PSYCHOLOGIQUE</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed border-l-2 border-purple-500/30 pl-6">
                        Le <strong className="text-white">P.S.S (Psychological Support Service)</strong> est le sanctuaire de l'esprit au sein du S.A.M.C. Un espace sécurisé où la confidentialité est absolue.
                    </p>
                </div>

                <div className="flex flex-col items-end gap-2">
                    <div className="px-4 py-2 bg-purple-900/10 border border-purple-500/30 rounded-lg flex items-center gap-3">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                        </span>
                        <span className="text-xs font-bold text-purple-200 tracking-wider">CONSULTATIONS OUVERTES</span>
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">ENCRYPTION LVL.5 // SECURE</div>
                </div>
            </div>
        </div>
      </header>

      {/* --- STATS BAR --- */}
      <div className="border-y border-white/5 bg-slate-900/30 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5">
                <div className="p-6 flex items-center gap-4 group hover:bg-white/5 transition-colors">
                    <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                        <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">+1000</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Dossiers</div>
                    </div>
                </div>
                <div className="p-6 flex items-center gap-4 group hover:bg-white/5 transition-colors">
                    <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                        <Brain className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">10</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Experts</div>
                    </div>
                </div>
                <div className="p-6 flex items-center gap-4 group hover:bg-white/5 transition-colors">
                    <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400 group-hover:bg-pink-500/20 transition-colors">
                        <Fingerprint className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">100%</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Anonymat</div>
                    </div>
                </div>
                <div className="p-6 flex items-center gap-4 group hover:bg-white/5 transition-colors">
                    <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                        <Sparkles className="w-6 h-6" />
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
            
            {/* GAUCHE : NOTE ET STATS */}
            <div className="lg:col-span-7 space-y-12">
                
                {/* Note Fondatrice */}
                <div className="glass-panel p-8 rounded-tr-3xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 transition-all group-hover:bg-indigo-500"></div>
                    <div className="absolute -right-10 -bottom-10 text-purple-500/10 transform rotate-12 group-hover:scale-110 transition-transform duration-700">
                        <FileHeart className="w-48 h-48" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center font-bold text-white">CP</div>
                            <div>
                                <h3 className="font-mono text-sm text-purple-300 uppercase tracking-wider">Note de la Fondatrice</h3>
                                <p className="text-xs text-slate-500">Ref: INIT-PSS-2023</p>
                            </div>
                        </div>
                        <Lock className="w-4 h-4 text-purple-500/50" />
                    </div>

                    <p className="text-slate-300 italic leading-relaxed font-light mb-6 relative z-10">
                        "J'ai voulu créer le Pôle Psychological Support Service (PSS) parce que j’ai vraiment pris conscience de l’importance de l’accompagnement psychologique aujourd’hui. En voyant de plus en plus de personnes autour de moi traverser des crises émotionnelles, des épreuves traumatisantes ou des changements de vie sans le soutien adéquat, j’ai compris qu’il y avait un besoin urgent."
                    </p>

                    <div className="flex justify-end relative z-10">
                        <div className="text-right">
                            <div className="font-anton uppercase text-white tracking-widest text-lg">Candice Park</div>
                            <div className="text-xs font-mono text-purple-400 uppercase">Fire & Health Chief</div>
                        </div>
                    </div>
                </div>

                {/* Impact Clinique (Barres) */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-8 font-mono flex items-center gap-3">
                        <span className="text-purple-500">01.</span> IMPACT CLINIQUE
                    </h3>
                    <div className="space-y-6">
                        {/* Bar 1 */}
                        <div className="group">
                            <div className="flex justify-between mb-2 text-xs font-mono uppercase tracking-wider text-green-400">
                                <span>Prévention Suicide (Code Noir)</span>
                                <span className="text-white">80%</span>
                            </div>
                            <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                                <div className="h-full bg-green-500 w-[80%] relative shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>
                        {/* Bar 2 */}
                        <div className="group">
                            <div className="flex justify-between mb-2 text-xs font-mono uppercase tracking-wider text-purple-400">
                                <span>Traitement des Addictions</span>
                                <span className="text-white">75%</span>
                            </div>
                            <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                                <div className="h-full bg-purple-600 w-[75%] relative shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>
                        {/* Bar 3 */}
                        <div className="group">
                            <div className="flex justify-between mb-2 text-xs font-mono uppercase tracking-wider text-indigo-400">
                                <span>Réinsertion Post-Trauma</span>
                                <span className="text-white">88%</span>
                            </div>
                            <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                                <div className="h-full bg-indigo-500 w-[88%] relative shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DROITE : PROTOCOLES */}
            <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center justify-between border-b border-purple-500/20 pb-4 mb-6">
                    <h2 className="text-lg font-bold text-white font-mono tracking-wider">PROTOCOLES P.S.S</h2>
                    <ShieldCheck className="w-5 h-5 text-purple-500" />
                </div>

                {/* Card 1 */}
                <div className="group glass-panel p-6 rounded-xl hover:bg-purple-900/10 transition-all duration-300 relative">
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-purple-400 w-5 h-5" />
                    </div>
                    <div className="flex gap-5">
                        <div className="mt-1 p-2 bg-purple-900/30 rounded-lg border border-purple-500/30 h-fit group-hover:border-purple-400 transition-colors">
                            <Brain className="w-6 h-6 text-purple-300" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 font-mono">SOUTIEN PSYCHO</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Consultations individuelles pour anxiété, stress et dépression. Espace neutre et bienveillant.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group glass-panel p-6 rounded-xl hover:bg-indigo-900/10 transition-all duration-300 relative">
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-indigo-400 w-5 h-5" />
                    </div>
                    <div className="flex gap-5">
                        <div className="mt-1 p-2 bg-indigo-900/30 rounded-lg border border-indigo-500/30 h-fit group-hover:border-indigo-400 transition-colors">
                            <ShieldCheck className="w-6 h-6 text-indigo-300" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 font-mono">RÉSILIENCE</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Développement de mécanismes de défense. Préparation mentale pour les agents du SASP/EMS.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group glass-panel p-6 rounded-xl hover:bg-teal-900/10 transition-all duration-300 relative">
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-teal-400 w-5 h-5" />
                    </div>
                    <div className="flex gap-5">
                        <div className="mt-1 p-2 bg-teal-900/30 rounded-lg border border-teal-500/30 h-fit group-hover:border-teal-400 transition-colors">
                            <HeartHandshake className="w-6 h-6 text-teal-300" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 font-mono">RÉHABILITATION</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Accompagnement sur-mesure pour les victimes d'addictions. Réintégration sociale progressive.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA - LIEN VERS RDV */}
                <div className="mt-8 p-1 rounded-xl bg-gradient-to-r from-purple-900/50 to-indigo-900/50 shadow-lg">
                    <div className="bg-[#020617] rounded-lg p-6 text-center border border-purple-500/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-purple-500/5 pointer-events-none"></div>
                        <p className="text-xs text-purple-400 font-mono uppercase mb-4 tracking-widest">Canal Sécurisé</p>
                        
                        <Link 
                            to="/rdv"
                            className="block w-full py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 text-sm"
                        >
                            Demander un RDV
                        </Link>
                    </div>
                </div>

            </div>
        </div>
      </main>
    </div>
  );
};

export default Pssd;