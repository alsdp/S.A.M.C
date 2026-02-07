import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Brain, UserCheck, HeartHandshake, 
  ShieldCheck, Sparkles, Fingerprint, ChevronRight, FileHeart, Lock 
} from 'lucide-react';

const Pssd = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen min-w-[280px] bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* --- AMBIANCE DE FOND (GRID & GLOW VIOLET) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         {/* Grille technique */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
         {/* Lueurs d'ambiance - Ajustées mobile */}
         <div className="absolute top-[-10%] right-[-5%] w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-purple-600/20 rounded-full blur-[80px] md:blur-[120px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-600/10 rounded-full blur-[80px] md:blur-[120px]"></div>
      </div>

      {/* --- HEADER IMMERSIF --- */}
      <header className="relative pt-16 pb-6 md:pt-24 md:pb-12 overflow-hidden z-10">
        <div className="container mx-auto px-4 md:px-6 relative">
          
          {/* Fil d'ariane */}
          <Link to="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-6 md:mb-10 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] border-b border-purple-500/30 pb-1">
             <ArrowLeft className="w-3 h-3" /> Retour Dashboard
          </Link>

          <div className="flex flex-col md:flex-row items-end justify-between gap-4 md:gap-8">
            <div className="max-w-4xl w-full">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                 <div className="h-px w-4 md:w-8 bg-purple-500"></div>
                 <span className="text-purple-400 font-mono text-[10px] md:text-xs uppercase tracking-widest">Santé Mentale</span>
              </div>
              
              {/* TITRE RESPONSIVE : Psychologique est long, on réduit fort sur mobile */}
              <h1 className="text-3xl xs:text-4xl md:text-8xl font-black uppercase text-white leading-[0.9] tracking-tighter mb-4 md:mb-6 break-words">
                Dép. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">Psychologique</span>
              </h1>
              
              <p className="text-sm md:text-xl text-slate-400 max-w-2xl leading-relaxed border-l-2 border-purple-500/50 pl-4 md:pl-6">
                 Le <strong className="text-white">P.S.S (Psychological Support Service)</strong> est le sanctuaire de l'esprit au sein du S.A.M.C. Un espace sécurisé où la confidentialité est absolue.
              </p>
            </div>

            {/* Indicateur de Status (Desktop only) */}
            <div className="hidden md:block text-right">
                <div className="flex items-center gap-2 justify-end text-purple-400 font-mono text-sm mb-1">
                   <span className="relative flex h-3 w-3">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                   </span>
                   CONSULTATIONS OUVERTES
                </div>
                <div className="text-slate-500 text-xs font-mono">ENCRYPTION LVL.5 // SECURE</div>
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
                   <div className="p-2 md:p-3 bg-purple-500/10 rounded group-hover:bg-purple-500/20 transition">
                       <UserCheck className="w-4 h-4 md:w-6 md:h-6 text-purple-400" />
                   </div>
                   <div>
                       <div className="text-lg md:text-2xl font-bold text-white font-mono">+1000</div>
                       <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500">Dossiers</div>
                   </div>
               </div>

               {/* Stat 2 */}
               <div className="p-4 md:py-6 md:px-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left group cursor-default">
                   <div className="p-2 md:p-3 bg-indigo-500/10 rounded group-hover:bg-indigo-500/20 transition">
                       <Brain className="w-4 h-4 md:w-6 md:h-6 text-indigo-400" />
                   </div>
                   <div>
                       <div className="text-lg md:text-2xl font-bold text-white font-mono">10</div>
                       <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500">Experts</div>
                   </div>
               </div>

               {/* Stat 3 */}
               <div className="p-4 md:py-6 md:px-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left group cursor-default">
                   <div className="p-2 md:p-3 bg-pink-500/10 rounded group-hover:bg-pink-500/20 transition">
                       <Fingerprint className="w-4 h-4 md:w-6 md:h-6 text-pink-500" />
                   </div>
                   <div>
                       <div className="text-lg md:text-2xl font-bold text-pink-500 font-mono">100%</div>
                       <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-pink-400/60">Anonymat</div>
                   </div>
               </div>

               {/* Stat 4 */}
               <div className="p-4 md:py-6 md:px-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left group cursor-default">
                   <div className="p-2 md:p-3 bg-teal-500/10 rounded group-hover:bg-teal-500/20 transition">
                       <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-teal-400" />
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
            
            {/* GAUCHE : MANIFESTE & LEADERSHIP (7/12) */}
            <div className="lg:col-span-7 space-y-8 md:space-y-12">
                
                {/* Note de la direction */}
                <div className="bg-slate-900/50 border border-purple-500/30 p-4 md:p-8 rounded-tr-3xl relative overflow-hidden group hover:border-purple-500/50 transition-colors">
                    <div className="absolute top-0 left-0 w-1 h-full bg-purple-600"></div>
                    <div className="absolute -right-6 -bottom-6 text-purple-900/20 group-hover:text-purple-800/20 transition-colors">
                        <FileHeart className="w-24 h-24 md:w-32 md:h-32" />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4 md:mb-6 border-b border-white/5 pb-4">
                             <div className="flex items-center gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-500 rounded flex items-center justify-center font-bold text-white text-xs md:text-base">CP</div>
                                <div>
                                    <h3 className="font-mono text-xs md:text-sm text-purple-300 uppercase tracking-wider">Note de la Fondatrice</h3>
                                    <p className="text-[10px] md:text-xs text-slate-500">Ref: INIT-PSS-2023</p>
                                </div>
                             </div>
                             <Lock className="w-3 h-3 md:w-4 md:h-4 text-purple-500/50" />
                        </div>

                        <p className="text-xs md:text-base text-slate-300 italic leading-relaxed font-light mb-4 md:mb-6">
                            "J'ai voulu créer le Pôle Psychological Support Service (PSS) parce que j’ai vraiment pris conscience de l’importance de l’accompagnement psychologique aujourd’hui. En voyant de plus en plus de personnes autour de moi traverser des crises émotionnelles, des épreuves traumatisantes ou des changements de vie sans le soutien adéquat, j’ai compris qu’il y avait un besoin urgent."
                        </p>
                        
                        <div className="flex justify-end">
                            <div className="text-right">
                                <div className="font-anton uppercase text-white tracking-widest text-sm md:text-base">Candice Park</div>
                                <div className="text-[8px] md:text-[10px] font-mono text-purple-400 uppercase">Fire & Health Chief</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Compétences */}
                <div>
                     <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 font-mono flex items-center gap-3">
                        <span className="text-purple-500">01.</span> IMPACT CLINIQUE
                    </h3>
                    
                    <div className="space-y-4 md:space-y-6">
                        {/* Barre 1 */}
                        <div className="relative group">
                            <div className="flex justify-between mb-2 text-[10px] md:text-xs font-mono uppercase tracking-wider text-green-400">
                                <span>Prévention Suicide (Code Noir)</span>
                                <span>80%</span>
                            </div>
                            <div className="h-1.5 md:h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-[80%] shadow-[0_0_15px_rgba(34,197,94,0.5)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>

                        {/* Barre 2 */}
                        <div className="relative group">
                            <div className="flex justify-between mb-2 text-[10px] md:text-xs font-mono uppercase tracking-wider text-purple-400">
                                <span>Traitement des Addictions</span>
                                <span>75%</span>
                            </div>
                            <div className="h-1.5 md:h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-600 w-[75%] shadow-[0_0_15px_rgba(147,51,234,0.5)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>

                         {/* Barre 3 */}
                         <div className="relative group">
                            <div className="flex justify-between mb-2 text-[10px] md:text-xs font-mono uppercase tracking-wider text-indigo-400">
                                <span>Réinsertion Post-Trauma</span>
                                <span>88%</span>
                            </div>
                            <div className="h-1.5 md:h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 w-[88%] shadow-[0_0_15px_rgba(99,102,241,0.5)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DROITE : SERVICES & PROTOCOLES (5/12) */}
            <div className="lg:col-span-5 space-y-4 md:space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                    <h2 className="text-lg md:text-xl font-bold text-white font-mono">PROTOCOLES P.S.S</h2>
                    <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-slate-500" />
                </div>

                {/* Card 1 */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-purple-500/50 p-4 md:p-6 rounded transition-all duration-300">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-purple-400 w-4 h-4" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[32px]">
                            <Brain className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
                        </div>
                        <div>
                            <h4 className="text-base md:text-lg font-bold text-white mb-2 font-mono">SOUTIEN PSYCHO</h4>
                            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                                Consultations individuelles pour anxiété, stress et dépression. Espace neutre.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-indigo-500/50 p-4 md:p-6 rounded transition-all duration-300">
                     <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-indigo-400 w-4 h-4" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[32px]">
                            <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-indigo-500" />
                        </div>
                        <div>
                            <h4 className="text-base md:text-lg font-bold text-white mb-2 font-mono">RÉSILIENCE</h4>
                            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                                Développement de mécanismes de défense. Préparation mentale pour SASP/EMS.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-teal-500/50 p-4 md:p-6 rounded transition-all duration-300">
                     <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-teal-400 w-4 h-4" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[32px]">
                            <HeartHandshake className="w-6 h-6 md:w-8 md:h-8 text-teal-500" />
                        </div>
                        <div>
                            <h4 className="text-base md:text-lg font-bold text-white mb-2 font-mono">RÉHABILITATION</h4>
                            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                                Accompagnement sur-mesure pour les victimes d'addictions. Réintégration sociale.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-8 p-4 border border-dashed border-slate-700 rounded bg-slate-900/50 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-500/5 pointer-events-none"></div>
                    <p className="text-[10px] md:text-xs text-slate-500 font-mono uppercase mb-2">Canal Sécurisé</p>
                    <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 md:px-6 py-2 rounded font-bold text-xs md:text-sm transition-colors w-full uppercase tracking-widest shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]">
                        Demander un RDV
                    </button>
                </div>

            </div>
        </div>
      </div>

    </div>
  );
};

export default Pssd;