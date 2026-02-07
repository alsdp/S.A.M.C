import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Skull, HeartHandshake, Truck, 
  FileText, ClipboardList, Shield, Hourglass, ChevronRight, UserMinus 
} from 'lucide-react';

const Ams = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen min-w-[280px] bg-[#020617] text-slate-200 font-sans selection:bg-slate-500/30 overflow-x-hidden">
      
      {/* --- AMBIANCE DE FOND (GRID & GLOW GRIS) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
         {/* Grille technique */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
         {/* Lueurs d'ambiance - Ajustées mobile */}
         <div className="absolute top-[-10%] right-[-5%] w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-slate-600/20 rounded-full blur-[80px] md:blur-[120px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gray-600/10 rounded-full blur-[80px] md:blur-[120px]"></div>
      </div>

      {/* --- HEADER IMMERSIF --- */}
      <header className="relative pt-16 pb-6 md:pt-24 md:pb-12 overflow-hidden z-10">
        <div className="container mx-auto px-4 md:px-6 relative">
          
          {/* Fil d'ariane */}
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 md:mb-10 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] border-b border-slate-500/30 pb-1">
             <ArrowLeft className="w-3 h-3" /> Retour Dashboard
          </Link>

          <div className="flex flex-col md:flex-row items-end justify-between gap-4 md:gap-8">
            <div className="max-w-4xl w-full">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                 <div className="h-px w-4 md:w-8 bg-slate-500"></div>
                 <span className="text-slate-400 font-mono text-[10px] md:text-xs uppercase tracking-widest">Service Funéraire</span>
              </div>
              
              {/* TITRE RESPONSIVE : Ambulatory est long, on réduit la taille mobile */}
              <h1 className="text-3xl xs:text-4xl md:text-8xl font-black uppercase text-white leading-[0.9] tracking-tighter mb-4 md:mb-6">
                Ambulatory <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-slate-600">Mortuary Service</span>
              </h1>
              
              <p className="text-sm md:text-xl text-slate-400 max-w-2xl leading-relaxed border-l-2 border-slate-500/50 pl-4 md:pl-6">
                 Le <strong className="text-white">A.M.S</strong> est l'unité la plus silencieuse mais essentielle. Nous assurons le respect de la dignité humaine au-delà de la vie.
              </p>
            </div>

            {/* Indicateur de Status (Desktop only) */}
            <div className="hidden md:block text-right">
                <div className="flex items-center gap-2 justify-end text-slate-400 font-mono text-sm mb-1">
                   <span className="relative flex h-3 w-3">
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-500"></span>
                   </span>
                   ZONE FROIDE ACTIVE
                </div>
                <div className="text-slate-600 text-xs font-mono">TEMP -4°C // STABLE</div>
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
                   <div className="p-2 md:p-3 bg-slate-500/10 rounded group-hover:bg-slate-500/20 transition">
                       <UserMinus className="w-4 h-4 md:w-6 md:h-6 text-slate-400" />
                   </div>
                   <div>
                       <div className="text-lg md:text-2xl font-bold text-white font-mono">300+</div>
                       <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500">Prises en Charge</div>
                   </div>
               </div>

               {/* Stat 2 */}
               <div className="p-4 md:py-6 md:px-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left group cursor-default">
                   <div className="p-2 md:p-3 bg-gray-500/10 rounded group-hover:bg-gray-500/20 transition">
                       <Truck className="w-4 h-4 md:w-6 md:h-6 text-gray-400" />
                   </div>
                   <div>
                       <div className="text-lg md:text-2xl font-bold text-white font-mono">24/7</div>
                       <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500">Réponse</div>
                   </div>
               </div>

               {/* Stat 3 */}
               <div className="p-4 md:py-6 md:px-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left group cursor-default">
                   <div className="p-2 md:p-3 bg-zinc-500/10 rounded group-hover:bg-zinc-500/20 transition">
                       <FileText className="w-4 h-4 md:w-6 md:h-6 text-zinc-400" />
                   </div>
                   <div>
                       <div className="text-lg md:text-2xl font-bold text-white font-mono">LÉGAL</div>
                       <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500">Conformité</div>
                   </div>
               </div>

               {/* Stat 4 */}
               <div className="p-4 md:py-6 md:px-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left group cursor-default">
                   <div className="p-2 md:p-3 bg-slate-700/10 rounded group-hover:bg-slate-700/20 transition">
                       <Hourglass className="w-4 h-4 md:w-6 md:h-6 text-slate-300" />
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
            
            {/* GAUCHE : LE MANIFESTE (7/12) */}
            <div className="lg:col-span-7 space-y-8 md:space-y-12">
                
                {/* Intro Section */}
                <div className="bg-slate-900/50 border border-slate-500/30 p-4 md:p-8 rounded-tr-3xl relative overflow-hidden group hover:border-slate-500/50 transition-colors">
                    <div className="absolute top-0 left-0 w-1 h-full bg-slate-500"></div>
                    <div className="absolute -right-6 -bottom-6 text-slate-800/20 group-hover:text-slate-700/20 transition-colors">
                        <Skull className="w-24 h-24 md:w-32 md:h-32" />
                    </div>
                    
                    <div className="relative z-10">
                         <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 font-mono flex items-center gap-3">
                            <span className="text-slate-500">01.</span> NOTRE CODE
                        </h2>
                        <div className="space-y-4 text-xs md:text-base text-slate-300 leading-relaxed text-justify font-light">
                            <p>
                                Le service A.M.S. opère dans l'ombre, mais son rôle est crucial. Nous traitons la mort avec le même professionnalisme que la chirurgie traite la vie.
                            </p>
                            <p>
                                De la levée de corps sur scène de crime à la préparation finale, nos agents suivent des protocoles stricts pour garantir l'intégrité des preuves et le respect des familles.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section Compétences */}
                <div>
                     <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 font-mono flex items-center gap-3">
                        <span className="text-slate-500">02.</span> RIGOUREUX & EFFICACE
                    </h3>
                    
                    <div className="space-y-4 md:space-y-6">
                        {/* Barre 1 */}
                        <div className="relative group">
                            <div className="flex justify-between mb-2 text-[10px] md:text-xs font-mono uppercase tracking-wider text-green-400">
                                <span>Respect Protocoles Sanitaires</span>
                                <span>100%</span>
                            </div>
                            <div className="h-1.5 md:h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-[100%] shadow-[0_0_15px_rgba(34,197,94,0.3)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>

                        {/* Barre 2 */}
                        <div className="relative group">
                            <div className="flex justify-between mb-2 text-[10px] md:text-xs font-mono uppercase tracking-wider text-blue-400">
                                <span>Satisfaction des Familles</span>
                                <span>98%</span>
                            </div>
                            <div className="h-1.5 md:h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-[98%] shadow-[0_0_15px_rgba(59,130,246,0.3)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>

                         {/* Barre 3 */}
                         <div className="relative group">
                            <div className="flex justify-between mb-2 text-[10px] md:text-xs font-mono uppercase tracking-wider text-slate-400">
                                <span>Rapidité d'Intervention</span>
                                <span>95%</span>
                            </div>
                            <div className="h-1.5 md:h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-slate-500 w-[95%] shadow-[0_0_15px_rgba(100,116,139,0.3)] relative">
                                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DROITE : SERVICES (5/12) */}
            <div className="lg:col-span-5 space-y-4 md:space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                    <h2 className="text-lg md:text-xl font-bold text-white font-mono">DOMAINES D'INTERVENTION</h2>
                    <Shield className="w-4 h-4 md:w-5 md:h-5 text-slate-500" />
                </div>

                {/* Card 1 */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-slate-500/50 p-4 md:p-6 rounded transition-all duration-300">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-slate-400 w-4 h-4" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[32px]">
                            <HeartHandshake className="w-6 h-6 md:w-8 md:h-8 text-slate-400" />
                        </div>
                        <div>
                            <h4 className="text-base md:text-lg font-bold text-white mb-2 font-mono">GESTION DIGNE</h4>
                            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                                Soins de conservation et de présentation. Préservation de l'image du défunt.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 - Truck Icon -> Hearse */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-gray-500/50 p-4 md:p-6 rounded transition-all duration-300">
                     <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-gray-400 w-4 h-4" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[32px]">
                            <Truck className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
                        </div>
                        <div>
                            <h4 className="text-base md:text-lg font-bold text-white mb-2 font-mono">LOGISTIQUE</h4>
                            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                                Flotte de véhicules discrets. Coordination avec les autorités (SASP).
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group relative bg-slate-800/30 hover:bg-slate-800/50 border border-white/5 hover:border-zinc-500/50 p-4 md:p-6 rounded transition-all duration-300">
                     <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="text-zinc-400 w-4 h-4" />
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[32px]">
                            <FileText className="w-6 h-6 md:w-8 md:h-8 text-zinc-400" />
                        </div>
                        <div>
                            <h4 className="text-base md:text-lg font-bold text-white mb-2 font-mono">ADMINISTRATION</h4>
                            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                                Gestion des certificats de décès et formalités. Accompagnement des familles.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-8 p-4 border border-dashed border-slate-700 rounded bg-slate-900/50 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-slate-500/5 pointer-events-none"></div>
                    <p className="text-[10px] md:text-xs text-slate-500 font-mono uppercase mb-2">Ligne Directe 24/7</p>
                    <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 md:px-6 py-2 rounded font-bold text-xs md:text-sm transition-colors w-full uppercase tracking-widest shadow-[0_0_20px_rgba(100,116,139,0.3)] hover:shadow-[0_0_30px_rgba(100,116,139,0.5)]">
                        Contacter la Régulation
                    </button>
                </div>

            </div>
        </div>
      </div>

    </div>
  );
};

export default Ams;