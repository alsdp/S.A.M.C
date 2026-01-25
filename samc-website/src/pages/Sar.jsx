import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mountain, Flame, Waves, Anchor, Wind, ShieldCheck, Siren, Activity } from 'lucide-react';

const Sar = () => {
  // Remonter en haut de page au chargement
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#050b14] text-white font-sans selection:bg-orange-600">
      
      {/* Background Ambiances (Orange/Ambre) */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600 rounded-full blur-[200px] opacity-10"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900 rounded-full blur-[150px] opacity-10"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      {/* --- HEADER --- */}
      <header className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.goopics.net/4cly66.png" 
            alt="Search and Rescue" 
            className="w-full h-full object-cover opacity-30 grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050b14] via-[#050b14]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-10">
          <Link to="/" className="inline-flex items-center gap-2 text-orange-400 hover:text-white transition mb-8 font-mono text-xs uppercase tracking-widest group">
             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour au QG
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
               <div className="p-3 bg-orange-600/20 border border-orange-500/50 rounded">
                  <Mountain className="w-8 h-8 text-orange-400" />
               </div>
               <span className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase">S.A.R • Search & Rescue Service</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-anton uppercase tracking-tight text-white mb-6 leading-none">
              Search & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Rescue</span>
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-orange-600 pl-6 bg-orange-900/10 py-6 pr-6 rounded-r-lg backdrop-blur-sm">
              Le service de Recherche et Sauvetage, aussi appelé S&R (Search & Rescue Service), représente une composante vitale de la sécurité et du secours d'urgence, rassemblant des équipes spécialisées dans des interventions critiques.
              <br/><br/>
              Composé de pompiers, de l'ASU (Aerial Support Unit - Hélicoptère), et de la Dive Unit (Unité de Plongée - Bateau), ce service intervient dans des situations de sauvetage complexes en milieux terrestre, aérien et aquatique pour secourir et protéger les vies en danger.
            </p>
          </div>
        </div>
      </header>

      {/* --- STATISTIQUES CLÉS --- */}
      <div className="bg-[#1a0f05]/50 border-y border-white/5 backdrop-blur-md relative z-20 -mt-20">
         <div className="container mx-auto px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
               
               {/* Stat 1 */}
               <div className="px-4">
                  <div className="flex justify-center mb-3">
                     <ShieldCheck className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="text-4xl font-anton text-white mb-1">2023</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Fondé en</div>
               </div>

               {/* Stat 2 */}
               <div className="px-4 pt-8 md:pt-0">
                  <div className="flex justify-center mb-3">
                     <Activity className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="text-4xl font-anton text-white mb-1">3</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Unités Spécialisées</div>
               </div>

               {/* Stat 3 */}
               <div className="px-4 pt-8 md:pt-0">
                  <div className="flex justify-center mb-3">
                     <Siren className="w-8 h-8 text-red-500 animate-pulse" />
                  </div>
                  <div className="text-4xl font-anton text-white mb-1">24/7</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Disponibilité</div>
               </div>

            </div>
         </div>
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           
           {/* GAUCHE : LA MISSION & PERFORMANCES */}
           <div className="space-y-8">
              <h2 className="text-4xl font-anton uppercase text-white flex items-center gap-3">
                 <span className="w-2 h-8 bg-orange-600"></span> Performance Opérationnelle
              </h2>
              <div className="prose prose-invert text-gray-300 leading-loose text-lg">
                 <p>
                    Notre mission est de garantir une réponse rapide et efficace face à toute menace, qu'il s'agisse d'un incendie majeur, d'une disparition en mer ou d'une extraction en montagne.
                 </p>
              </div>

              {/* Barres de réussite */}
              <div className="bg-[#1a0f05] p-8 border border-orange-500/20 rounded-lg space-y-8 mt-8">
                 
                 {/* Barre 1 : Rapidité */}
                 <div>
                    <div className="flex justify-between items-end mb-2">
                       <span className="font-bold uppercase text-sm text-orange-200">Rapidité d'Intervention</span>
                       <span className="text-2xl font-anton text-orange-400">90%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                       <div className="h-full bg-orange-500 w-[90%] shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                    </div>
                 </div>

                 {/* Barre 2 : Feu éteint */}
                 <div>
                    <div className="flex justify-between items-end mb-2">
                       <span className="font-bold uppercase text-sm text-orange-200">Feux Éteints / Maîtrisés</span>
                       <span className="text-2xl font-anton text-red-500">100%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                       <div className="h-full bg-red-600 w-[100%] shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
                    </div>
                 </div>

              </div>
           </div>

           {/* DROITE : UNITÉS SPÉCIALISÉES */}
           <div>
              <h2 className="text-4xl font-anton uppercase text-white mb-10 flex items-center gap-3">
                 <span className="w-2 h-8 bg-white"></span> Nos Unités
              </h2>
              
              <div className="space-y-6">
                 
                 {/* Card 1: Pompiers */}
                 <div className="group bg-white/5 border border-white/10 p-6 hover:border-red-500 transition-colors duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                       <div className="bg-red-600/20 p-3 rounded">
                          <Flame className="w-6 h-6 text-red-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-red-400 transition-colors">Pompiers (Fire Unit)</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                             Lutte contre les incendies urbains et forestiers, désincarcération et protection des biens et des personnes.
                          </p>
                       </div>
                    </div>
                 </div>

                 {/* Card 2: ASU */}
                 <div className="group bg-white/5 border border-white/10 p-6 hover:border-orange-500 transition-colors duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                       <div className="bg-orange-600/20 p-3 rounded">
                          <Wind className="w-6 h-6 text-orange-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-orange-400 transition-colors">A.S.U (Aerial Support)</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                             Support aérien par hélicoptère pour les évacuations d'urgence (Medevac) et les recherches en zones inaccessibles.
                          </p>
                       </div>
                    </div>
                 </div>

                 {/* Card 3: Dive Unit */}
                 <div className="group bg-white/5 border border-white/10 p-6 hover:border-blue-500 transition-colors duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                       <div className="bg-blue-600/20 p-3 rounded">
                          <Anchor className="w-6 h-6 text-blue-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-blue-400 transition-colors">Dive Unit (Plongée)</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                             Sauvetage maritime par bateau, recherches sous-marines et interventions en milieu aquatique complexe.
                          </p>
                       </div>
                    </div>
                 </div>

              </div>
           </div>

        </div>
      </div>

    </div>
  );
};

export default Sar;