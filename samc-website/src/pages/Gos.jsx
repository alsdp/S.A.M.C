import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Baby, HeartPulse, Activity, 
  Dna, Calendar, Microscope, ChevronRight, Sparkles, ClipboardList 
} from 'lucide-react';

const Gos = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-pink-500/30 overflow-x-hidden">
      
      {/* --- AMBIANCE DE FOND (GRID & GLOW ROSE) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         {/* Grille technique */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
         {/* Lueurs d'ambiance */}
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* --- HEADER IMMERSIF --- */}
      <header className="relative pt-24 pb-12 overflow-hidden z-10">
        <div className="container mx-auto px-6 relative">
          
          {/* Fil d'ariane */}
          <Link to="/" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors mb-10 font-mono text-xs uppercase tracking-[0.2em] border-b border-pink-500/30 pb-1">
             <ArrowLeft className="w-3 h-3" /> Retour au Dashboard
          </Link>

          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                 <div className="h-px w-8 bg-pink-500"></div>
                 <span className="text-pink-400 font-mono text-xs uppercase tracking-widest">Maternité & Chirurgie</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black uppercase text-white leading-[0.9] tracking-tighter mb-6">
                Santé de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-600">Femme</span>
              </h1>
              
              <p className="text-xl text-slate-400 max-w-2xl leading-relaxed border-l-2 border-pink-500/50 pl-6">
                 Le <strong className="text-white">G.O.S (Gynecology & Obstetrics Service)</strong> est l'alliance de la douceur et de la haute technologie. 
                 De la genèse de la vie jusqu'au suivi pathologique complexe, notre unité assure une prise en charge d'élite pour toutes les étapes de la vie féminine.
              </p>
            </div>

            {/* Indicateur de Status */}
            <div className="hidden md:block text-right">
                <div className="flex items-center gap-2 justify-end text-pink-400 font-mono text-sm mb-1">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                    </span>
                    UNITÉ NÉONATALE ACTIVE
                </div>
                <div className="text-slate-500 text-xs font-mono">INCUBATORS // ONLINE</div>
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
                    <div className="p-3 bg-pink-500/10 rounded group-hover:bg-pink-500/20 transition">
                        <Baby className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">15+</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500">Naissances / Mois</div>
                    </div>
                </div>

                {/* Stat 2 */}
                <div className="py-6 md:px-6 flex items-center gap-4 group cursor-default">
                    <div className="p-3 bg-rose-500/10 rounded group-hover:bg-rose-500/20 transition">
                        <Activity className="w-6 h-6 text-rose-400" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">24/7</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500">Urgence Obstétrique</div>
                    </div>
                </div>

                {/* Stat 3 */}
                <div className="py-6 md:px-6 flex items-center gap-4 group cursor-default">
                    <div className="p-3 bg-purple-500/10 rounded group-hover:bg-purple-500/20 transition">
                        <Dna className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">LAB</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500">Génétique & Analyse</div>
                    </div>
                </div>

                 {/* Stat 4 */}
                 <div className="py-6 md:px-6 flex items-center gap-4 group cursor-default">
                    <div className="p-3 bg-teal-500/10 rounded group-hover:bg-teal-500/20 transition">
                        <Calendar className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white font-mono">RDV</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-500">Délais &lt; 24h</div>
                    </div>
                </div>

            </div>
         </div>
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* GAUCHE : LE MANIFESTE */}
            <div className="lg:col-span-7 space-y-12">
                
                {/* Intro Section / Manifeste */}
                <div className="bg-slate-900/50 border border-pink-500/30 p-8 rounded-bl-3xl relative overflow-hidden group hover:border-pink-500/50 transition-colors">
                    <div className="absolute top-0 right-0 w-1 h-full bg-pink-600"></div>
                    <div className="absolute -left-6 -bottom-6 text-pink-900/20 group-hover:text-pink-800/20 transition-colors">
                        <Microscope className="w-32 h-32" />
                    </div>
                    
                    <div className="relative z-10">
                         <h2 className="text-3xl font-bold text-white mb-6 font-mono flex items-center gap-3">
                            <span className="text-pink-500">01.</span> NOTRE ENGAGEMENT
                        </h2>
                        <div className="space-y-4 text-slate-300 leading-loose text-justify font-light">
                            <p>
                                Le pôle G.O.S dépasse la simple consultation. Nous sommes les gardiens de la santé féminine, opérant à la frontière de la médecine préventive et de la chirurgie d'urgence.
                            </p>
                            <p>
                                Que ce soit pour le suivi d'une grossesse à risque, une chirurgie réparatrice complexe ou un accompagnement hormonal, nos spécialistes disposent d'un plateau technique de dernière génération pour assurer sécurité et confidentialité.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section Compétences */}
                <div>
                     <h3 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-3">
                        <span className="text-pink-500">02.</span> PERFORMANCE DU SERVICE
                    </h3>
                    
                    <div className="space-y-6">
                        {/* Barre 1 */}
                        <div className="relative group">
                            <div className="flex justify-between mb-2 text-xs font-mono uppercase tracking-wider text-green-400">
                                <span>Suivi de Grossesse (Santé Fœtale)</span>
                                <span>99%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-[99%] shadow-[0_0_15px_rgba(34,197,94,0.5)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>

                        {/* Barre 2 */}
                        <div className="relative group">
                            <div className="flex justify-between mb-2 text-xs font-mono uppercase tracking-wider text-pink-400">
                                <span>Chirurgie Gynécologique</span>
                                <span>95%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-pink-600 w-[95%] shadow-[0_0_15px_rgba(219,39,119,0.5)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>

                         {/* Barre 3 */}
                         <div className="relative group">
                            <div className="flex justify-between mb-2 text-xs font-mono uppercase tracking-wider text-rose-400">
                                <span>Urgences Vitales Néonatales</span>
                                <span>100%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-rose-500 w-[100%] shadow-[0_0_15px_rgba(244,63,94,0.5)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DROITE : PROTOCOLES */}
            <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                    <h2 className="text-xl font-bold text-white font-mono">DOMAINES D'INTERVENTION</h2>
                    <Sparkles className="w-5 h-5 text-slate-500" />
                </div>

                {/* Card 1 */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-pink-500/50 p-6 rounded transition-all duration-300">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-pink-400" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1">
                            <Baby className="w-8 h-8 text-pink-500" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 font-mono">OBSTÉTRIQUE</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Suivi complet pré et post-natal. Échographies 3D haute définition, dépistage génétique et accouchement en salle sécurisée aseptisée.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-rose-500/50 p-6 rounded transition-all duration-300">
                     <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-rose-400" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1">
                            <HeartPulse className="w-8 h-8 text-rose-500" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 font-mono">GYNÉCOLOGIE</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Dépistage, contraception et traitement des pathologies. Approche chirurgicale mini-invasive pour un rétablissement accéléré.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 - ICONE FIABLE ICI */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-purple-500/50 p-6 rounded transition-all duration-300">
                     <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-purple-400" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1">
                            {/* Remplacement de l'icône qui buggait par une sûre */}
                            <ClipboardList className="w-8 h-8 text-purple-500" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 font-mono">SUIVI & PRÉVENTION</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Campagnes de dépistage et éducation à la santé sexuelle. Accompagnement psychologique et physique post-opératoire.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Zone de Call to Action RP */}
                <div className="mt-8 p-4 border border-dashed border-slate-700 rounded bg-slate-900/50 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-pink-500/5 pointer-events-none"></div>
                    <p className="text-xs text-slate-500 font-mono uppercase mb-2">Planning S.A.M.C</p>
                    <button className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-2 rounded font-bold text-sm transition-colors w-full uppercase tracking-widest shadow-[0_0_20px_rgba(219,39,119,0.3)] hover:shadow-[0_0_30px_rgba(219,39,119,0.5)]">
                        Contacter une Sage-Femme
                    </button>
                </div>

            </div>
        </div>
      </div>

    </div>
  );
};

export default Gos;