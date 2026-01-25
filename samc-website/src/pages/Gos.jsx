import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Baby, Calendar, Heart, Stethoscope, Users, CheckCircle, Activity, ClipboardList } from 'lucide-react';

const Gos = () => {
  // Remonter en haut de page au chargement
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#050b14] text-white font-sans selection:bg-pink-600">
      
      {/* Background Ambiances (Rose/Magenta) */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-600 rounded-full blur-[200px] opacity-10"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-900 rounded-full blur-[150px] opacity-10"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      {/* --- HEADER --- */}
      <header className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1920" 
            alt="Maternity Care" 
            className="w-full h-full object-cover opacity-30 grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050b14] via-[#050b14]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-10">
          <Link to="/" className="inline-flex items-center gap-2 text-pink-400 hover:text-white transition mb-8 font-mono text-xs uppercase tracking-widest group">
             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour au QG
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
               <div className="p-3 bg-pink-600/20 border border-pink-500/50 rounded">
                  <Baby className="w-8 h-8 text-pink-400" />
               </div>
               <span className="text-pink-500 font-mono text-sm tracking-[0.3em] uppercase">G.O.S • Gynecology & Obstetrics Service</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-anton uppercase tracking-tight text-white mb-6 leading-none">
              Santé de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-600">Femme</span>
            </h1>
            
            <div className="text-gray-300 text-lg leading-relaxed border-l-4 border-pink-600 pl-6 bg-pink-900/10 py-6 pr-6 rounded-r-lg backdrop-blur-sm space-y-4">
              <p>
                Le pôle G.O.S est le domaine médical qui étudie le fonctionnement et la prise en charge de la femme.
              </p>
              <p>
                Le gynécologue est donc l'interlocuteur privilégié des femmes enceintes ou au début de leur vie sexuelle de la puberté à la ménopause.
              </p>
              <p>
                Le gynécologue-obstétricien est lui spécialisé dans la chirurgie lui permettant de pratiquer des interventions lors de l'accouchement mais aussi dans le cadre de la prise en charge d'autres affections.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* --- STATISTIQUES CLÉS --- */}
      <div className="bg-[#1a0514]/50 border-y border-white/5 backdrop-blur-md relative z-20 -mt-20">
         <div className="container mx-auto px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
               
               {/* Stat 1 */}
               <div className="px-4">
                  <div className="flex justify-center mb-3">
                     <Calendar className="w-8 h-8 text-pink-500" />
                  </div>
                  <div className="text-4xl font-anton text-white mb-1">2023</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Fondé En</div>
               </div>

               {/* Stat 2 */}
               <div className="px-4 pt-8 md:pt-0">
                  <div className="flex justify-center mb-3">
                     <Baby className="w-8 h-8 text-pink-500" />
                  </div>
                  <div className="text-4xl font-anton text-white mb-1">10+</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Naissances par mois</div>
               </div>

               {/* Stat 3 (Générique pour équilibrer le design) */}
               <div className="px-4 pt-8 md:pt-0">
                  <div className="flex justify-center mb-3">
                     <Activity className="w-8 h-8 text-rose-400 animate-pulse" />
                  </div>
                  <div className="text-4xl font-anton text-white mb-1">24/7</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Prise en charge</div>
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
                 <span className="w-2 h-8 bg-pink-600"></span> La Mission
              </h2>
              <div className="prose prose-invert text-gray-300 leading-loose text-lg">
                 <p>
                    Fournir un accompagnement professionnel et bienveillant pour le suivi gynécologique et obstétrical des patientes, en assurant une prise en charge adaptée à chaque étape de leur vie.
                 </p>
              </div>

              {/* Barres de réussite (Visuelles) */}
              <div className="bg-[#1a0514] p-8 border border-pink-500/20 rounded-lg space-y-8 mt-8">
                 
                 <div>
                    <div className="flex justify-between items-end mb-2">
                       <span className="font-bold uppercase text-sm text-pink-200">Suivi Maternité</span>
                       <span className="text-2xl font-anton text-green-400">98%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                       <div className="h-full bg-green-500 w-[98%] shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                    </div>
                 </div>

                 <div>
                    <div className="flex justify-between items-end mb-2">
                       <span className="font-bold uppercase text-sm text-pink-200">Chirurgie Obstétrique</span>
                       <span className="text-2xl font-anton text-pink-400">100%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                       <div className="h-full bg-pink-500 w-[100%] shadow-[0_0_10px_rgba(219,39,119,0.5)]"></div>
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
                 <div className="group bg-white/5 border border-white/10 p-6 hover:border-pink-500 transition-colors duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                       <div className="bg-pink-600/20 p-3 rounded">
                          <Heart className="w-6 h-6 text-pink-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-pink-400 transition-colors">Gestion Respectueuse des Patientes</h3>
                          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                             <li>Assurer des soins adaptés et respectueux, dans un environnement sécurisé et bienveillant.</li>
                             <li>Garantir le respect de la dignité et de l’intimité des patientes à chaque étape de leur prise en charge.</li>
                          </ul>
                       </div>
                    </div>
                 </div>

                 {/* Card 2 */}
                 <div className="group bg-white/5 border border-white/10 p-6 hover:border-pink-500 transition-colors duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                       <div className="bg-pink-600/20 p-3 rounded">
                          <Users className="w-6 h-6 text-pink-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-pink-400 transition-colors">Accompagnement et Soutien</h3>
                          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                             <li>Fournir des informations claires et un accompagnement personnalisé.</li>
                             <li>Offrir un soutien psychologique adapté, en particulier dans les situations sensibles.</li>
                          </ul>
                       </div>
                    </div>
                 </div>

                 {/* Card 3 */}
                 <div className="group bg-white/5 border border-white/10 p-6 hover:border-pink-500 transition-colors duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                       <div className="bg-pink-600/20 p-3 rounded">
                          <ClipboardList className="w-6 h-6 text-pink-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-pink-400 transition-colors">Coordination et Suivi des Soins</h3>
                          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                             <li>Assurer une organisation fluide des rendez-vous et des interventions.</li>
                             <li>Faciliter la coordination avec les autres services médicaux pour une prise en charge globale.</li>
                          </ul>
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

export default Gos;