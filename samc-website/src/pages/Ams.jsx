import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Skull, Calendar, Users, HeartHandshake, Truck, FileText, ClipboardList } from 'lucide-react';

const Ams = () => {
  // Remonter en haut de page au chargement
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#050b14] text-white font-sans selection:bg-gray-500">
      
      {/* Background Ambiances (Gris/Acier) */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-600 rounded-full blur-[200px] opacity-10"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-800 rounded-full blur-[150px] opacity-20"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      {/* --- HEADER --- */}
      <header className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1920" 
            alt="Forensic Lab" 
            className="w-full h-full object-cover opacity-30 grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050b14] via-[#050b14]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-10">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8 font-mono text-xs uppercase tracking-widest group">
             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour au QG
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
               <div className="p-3 bg-gray-600/20 border border-gray-500/50 rounded">
                  <Skull className="w-8 h-8 text-gray-400" />
               </div>
               <span className="text-gray-500 font-mono text-sm tracking-[0.3em] uppercase">A.M.S • Ambulatory Mortuary Service</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-anton uppercase tracking-tight text-white mb-6 leading-none">
              Ambulatory <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-slate-600">Mortuary</span>
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-gray-600 pl-6 bg-gray-900/10 py-6 pr-6 rounded-r-lg backdrop-blur-sm">
              Le Service Mortuaire Ambulatoire du S.A.M.C. assure un accompagnement respectueux et professionnel dans la prise en charge des défunts. 
              <br/><br/>
              Ce service se distingue par une approche humaine, garantissant dignité et respect aux patients décédés et un soutien chaleureux à leurs proches.
            </p>
          </div>
        </div>
      </header>

      {/* --- STATISTIQUES CLÉS --- */}
      <div className="bg-[#0a0a0f]/50 border-y border-white/5 backdrop-blur-md relative z-20 -mt-20">
         <div className="container mx-auto px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
               
               {/* Stat 1 */}
               <div className="px-4">
                  <div className="flex justify-center mb-3">
                     <Calendar className="w-8 h-8 text-gray-400" />
                  </div>
                  <div className="text-4xl font-anton text-white mb-1">2023</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-500">Fondé en</div>
               </div>

               {/* Stat 2 */}
               <div className="px-4 pt-8 md:pt-0">
                  <div className="flex justify-center mb-3">
                     <Skull className="w-8 h-8 text-gray-400" />
                  </div>
                  <div className="text-4xl font-anton text-white mb-1">300+</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-500">Décès par mois</div>
               </div>

               {/* Stat 3 */}
               <div className="px-4 pt-8 md:pt-0">
                  <div className="flex justify-center mb-3">
                     <Users className="w-8 h-8 text-slate-400" />
                  </div>
                  <div className="text-4xl font-anton text-white mb-1">5,000+</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-500">Familles accompagnées</div>
               </div>

            </div>
         </div>
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           
           {/* GAUCHE : LA MISSION */}
           <div className="space-y-8">
              <h2 className="text-4xl font-anton uppercase text-white flex items-center gap-3">
                 <span className="w-2 h-8 bg-gray-500"></span> La Mission
              </h2>
              <div className="prose prose-invert text-gray-300 leading-loose text-lg">
                 <p>
                    Fournir un accompagnement professionnel et bienveillant pour le transfert et la gestion des défunts, tout en soutenant les familles dans cette période de deuil.
                 </p>
              </div>

              {/* Barres de réussite / Focus */}
              <div className="bg-[#0f1116] p-8 border border-gray-500/20 rounded-lg space-y-8 mt-8">
                 
                 {/* Barre 1 */}
                 <div>
                    <div className="flex justify-between items-end mb-2">
                       <span className="font-bold uppercase text-sm text-gray-300">Respect des Protocoles</span>
                       <span className="text-2xl font-anton text-green-400">100%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                       <div className="h-full bg-green-500 w-[100%] shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>
                    </div>
                 </div>

                 {/* Barre 2 */}
                 <div>
                    <div className="flex justify-between items-end mb-2">
                       <span className="font-bold uppercase text-sm text-gray-300">Satisfaction des Familles</span>
                       <span className="text-2xl font-anton text-blue-400">98%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 w-[98%] shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
                    </div>
                 </div>

              </div>
           </div>

           {/* DROITE : RÉSULTATS ATTENDUS */}
           <div>
              <h2 className="text-4xl font-anton uppercase text-white mb-10 flex items-center gap-3">
                 <span className="w-2 h-8 bg-white"></span> Résultats Attendus
              </h2>
              
              <div className="space-y-6">
                 
                 {/* Card 1 */}
                 <div className="group bg-white/5 border border-white/10 p-6 hover:border-gray-500 transition-colors duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                       <div className="bg-gray-600/20 p-3 rounded">
                          <HeartHandshake className="w-6 h-6 text-gray-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-gray-300 transition-colors">Gestion Respectueuse des Défunts</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                             Manipulation professionnelle et soins adaptés, garantissant le respect et la dignité en tout temps.
                          </p>
                       </div>
                    </div>
                 </div>

                 {/* Card 2 */}
                 <div className="group bg-white/5 border border-white/10 p-6 hover:border-gray-500 transition-colors duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                       <div className="bg-gray-600/20 p-3 rounded">
                          <Users className="w-6 h-6 text-gray-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-gray-300 transition-colors">Accompagnement des Familles</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                             Offrir des informations claires et un soutien psychologique adapté pour faciliter le processus de deuil.
                          </p>
                       </div>
                    </div>
                 </div>

                 {/* Card 3 */}
                 <div className="group bg-white/5 border border-white/10 p-6 hover:border-gray-500 transition-colors duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                       <div className="bg-gray-600/20 p-3 rounded">
                          <ClipboardList className="w-6 h-6 text-gray-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-gray-300 transition-colors">Transfert et Coordination</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                             Coordination minutieuse du transport et des documents nécessaires, assurant un service sans tracas pour les familles.
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

export default Ams;