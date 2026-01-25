import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Calendar, Users, HeartHandshake, ShieldCheck, Smile, Zap, UserCheck, Quote, Activity } from 'lucide-react';

const Pssd = () => {
  // Remonter en haut de page au chargement
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#050b14] text-white font-sans selection:bg-purple-600">
      
      {/* Background Ambiances (Violet/Indigo) */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[200px] opacity-10"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900 rounded-full blur-[150px] opacity-10"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      {/* --- HEADER --- */}
      <header className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920" 
            alt="Psychology Office" 
            className="w-full h-full object-cover opacity-30 grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050b14] via-[#050b14]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-10">
          <Link to="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-white transition mb-8 font-mono text-xs uppercase tracking-widest group">
             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour au QG
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
               <div className="p-3 bg-purple-600/20 border border-purple-500/50 rounded">
                  <Brain className="w-8 h-8 text-purple-400" />
               </div>
               <span className="text-purple-500 font-mono text-sm tracking-[0.3em] uppercase">P.S.S • Psychological Support Service</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-anton uppercase tracking-tight text-white mb-6 leading-none">
              Bien-être <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">Mental</span>
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-purple-600 pl-6 bg-purple-900/10 py-6 pr-6 rounded-r-lg backdrop-blur-sm">
              Bienvenue au Psychological Support Service du S.A.M.C., un espace dédié à l’accompagnement, à l’écoute et au bien-être mental de tous nos patients et membres du personnel. 
              <br /><br />
              Nous reconnaissons que la santé mentale est un pilier essentiel du rétablissement et de la qualité de vie, et nous sommes là pour vous aider à chaque étape, que ce soit après une intervention, pendant une phase de stress ou pour toute autre raison personnelle.
            </p>
          </div>
        </div>
      </header>

      {/* --- STATISTIQUES CLÉS --- */}
      <div className="bg-[#0f071a]/50 border-y border-white/5 backdrop-blur-md relative z-20 -mt-20">
         <div className="container mx-auto px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
               
               {/* Stat 1 */}
               <div className="px-4">
                  <div className="flex justify-center mb-3">
                     <Calendar className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="text-4xl font-anton text-white mb-1">2023</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Année de Fondation</div>
               </div>

               {/* Stat 2 */}
               <div className="px-4 pt-8 md:pt-0">
                  <div className="flex justify-center mb-3">
                     <Users className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="text-4xl font-anton text-white mb-1">+1000</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Patients accompagnés</div>
               </div>

               {/* Stat 3 */}
               <div className="px-4 pt-8 md:pt-0">
                  <div className="flex justify-center mb-3">
                     <UserCheck className="w-8 h-8 text-indigo-400" />
                  </div>
                  <div className="text-4xl font-anton text-white mb-1">10</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Psychologues (2024)</div>
               </div>

            </div>
         </div>
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           
           {/* GAUCHE : MISSION & CITATION */}
           <div className="space-y-12">
              
              {/* Mission */}
              <div>
                <h2 className="text-4xl font-anton uppercase text-white flex items-center gap-3 mb-6">
                  <span className="w-2 h-8 bg-purple-600"></span> La Mission
                </h2>
                <p className="text-gray-300 text-lg font-light leading-relaxed">
                  Créer un environnement sûr, inclusif, et respectueux pour que chacun puisse bénéficier d’un accompagnement bienveillant et spécialisé. Nos professionnels qualifiés sont disponibles pour offrir un soutien adapté et confidentiel, incluant des consultations individuelles et des groupes de parole.
                </p>
              </div>

              {/* Barres de réussite */}
              <div className="bg-[#0f071a] p-8 border border-purple-500/20 rounded-lg space-y-8">
                 <div>
                    <div className="flex justify-between items-end mb-2">
                       <span className="font-bold uppercase text-sm text-purple-200">Tentatives de suicide évitées</span>
                       <span className="text-2xl font-anton text-green-400">80%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                       <div className="h-full bg-green-500 w-[80%] shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                    </div>
                 </div>

                 <div>
                    <div className="flex justify-between items-end mb-2">
                       <span className="font-bold uppercase text-sm text-purple-200">Addictions soignées</span>
                       <span className="text-2xl font-anton text-purple-400">75%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                       <div className="h-full bg-purple-500 w-[75%] shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                    </div>
                 </div>
              </div>

              {/* CITATION CANDICE PARK */}
              <div className="relative mt-12">
                 <div className="absolute -top-6 -left-4 text-purple-700/20">
                    <Quote className="w-24 h-24" />
                 </div>
                 <div className="relative bg-gradient-to-br from-purple-900/30 to-indigo-900/10 border-l-4 border-purple-500 p-8 rounded-r-xl backdrop-blur-sm">
                    <p className="italic text-gray-300 mb-6 font-light leading-relaxed">
                       "J'ai voulu créer le Pôle Psychological Support Service (PSS) parce que j’ai vraiment pris conscience de l’importance de l’accompagnement psychologique aujourd’hui. En voyant de plus en plus de personnes autour de moi traverser des crises émotionnelles, des épreuves traumatisantes ou des changements de vie sans le soutien adéquat, j’ai compris qu’il y avait un besoin urgent."
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center font-anton text-xl">CP</div>
                       <div>
                          <h4 className="font-anton uppercase text-white tracking-wider">Candice Park</h4>
                          <p className="text-xs font-mono text-purple-400 uppercase">Créatrice du pôle PSS | Fire & Health Chief</p>
                       </div>
                    </div>
                 </div>
              </div>

           </div>

           {/* DROITE : RÉSULTATS ATTENDUS (GRID CARDS) */}
           <div>
              <h2 className="text-4xl font-anton uppercase text-white mb-10 flex items-center gap-3">
                 <span className="w-2 h-8 bg-white"></span> Résultats Attendus
              </h2>
              
              <div className="grid grid-cols-1 gap-6">
                 
                 {/* Card 1 */}
                 <div className="group bg-white/5 border border-white/10 p-6 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                       <div className="bg-purple-600/20 p-3 rounded shrink-0">
                          <Smile className="w-6 h-6 text-purple-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-purple-400 transition-colors">Amélioration du Bien-être</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                             Diminution significative des symptômes d'anxiété, de stress, et autres troubles liés aux soins médicaux ou à la pression du travail.
                          </p>
                       </div>
                    </div>
                 </div>

                 {/* Card 2 */}
                 <div className="group bg-white/5 border border-white/10 p-6 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                       <div className="bg-purple-600/20 p-3 rounded shrink-0">
                          <ShieldCheck className="w-6 h-6 text-purple-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-purple-400 transition-colors">Renforcement de la Résilience</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                             Aider patients et personnel à développer des mécanismes de défense sains pour mieux faire face aux situations de crise et au stress quotidien.
                          </p>
                       </div>
                    </div>
                 </div>

                 {/* Card 3 */}
                 <div className="group bg-white/5 border border-white/10 p-6 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                       <div className="bg-purple-600/20 p-3 rounded shrink-0">
                          <HeartHandshake className="w-6 h-6 text-purple-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-purple-400 transition-colors">Soutien Personnalisé</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                             Accompagnement sur-mesure et confidentiel pour chaque individu, avec un suivi régulier pour garantir une évolution positive.
                          </p>
                       </div>
                    </div>
                 </div>

                 {/* Card 4 */}
                 <div className="group bg-white/5 border border-white/10 p-6 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                       <div className="bg-purple-600/20 p-3 rounded shrink-0">
                          <Zap className="w-6 h-6 text-purple-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-purple-400 transition-colors">Rétablissement Accéléré</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                             Encourager un engagement actif dans le processus de soin pour un rétablissement plus rapide, plus efficace et plus durable.
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

export default Pssd;