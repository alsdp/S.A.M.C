import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Stethoscope, Calendar, Activity, Crosshair, HeartHandshake, Info, Users, CheckCircle } from 'lucide-react';

const Surgery = () => {
  // Remonter en haut de page au chargement
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#050b14] text-white font-sans selection:bg-blue-600">
      
      {/* Background Ambiances */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[200px] opacity-10"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600 rounded-full blur-[150px] opacity-5"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      {/* --- HEADER --- */}
      <header className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1920" 
            alt="Surgery Block" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050b14] via-[#050b14]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition mb-8 font-mono text-xs uppercase tracking-widest group">
             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour au QG
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
               <div className="p-3 bg-blue-600/20 border border-blue-500/50 rounded">
                  <Stethoscope className="w-8 h-8 text-blue-400" />
               </div>
               <span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase">S.C.S • Surgery Care Service</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-anton uppercase tracking-tight text-white mb-6 leading-none">
              Pôle de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Chirurgie</span>
            </h1>
            
            <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-blue-600 pl-6 bg-blue-900/10 py-4 pr-4 rounded-r-lg backdrop-blur-sm">
              Le pôle de chirurgie, aussi connu sous le nom de <strong>S.C.S</strong>, représente une composante essentielle de l'hôpital, se consacrant aux interventions chirurgicales. Les chirurgiens interviennent lorsque des traitements nécessitent une intervention manuelle ou instrumentale sur un patient pour effectuer des opérations visant à traiter ou soulager une pathologie.
            </p>
          </div>
        </div>
      </header>

      {/* --- STATISTIQUES CLÉS --- */}
      <div className="bg-blue-950/30 border-y border-white/5 backdrop-blur-md relative z-20 -mt-20">
         <div className="container mx-auto px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
               
               {/* Stat 1 */}
               <div className="px-4">
                  <div className="flex justify-center mb-3">
                     <Calendar className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="text-4xl font-anton text-white mb-1">2023</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Année de Fondation</div>
               </div>

               {/* Stat 2 */}
               <div className="px-4 pt-8 md:pt-0">
                  <div className="flex justify-center mb-3">
                     <Activity className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="text-4xl font-anton text-white mb-1">50+</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Opérations par semaine</div>
               </div>

               {/* Stat 3 */}
               <div className="px-4 pt-8 md:pt-0">
                  <div className="flex justify-center mb-3">
                     <Crosshair className="w-8 h-8 text-red-500 animate-pulse" />
                  </div>
                  <div className="text-4xl font-anton text-white mb-1">PAR BALLE</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-400">Opération la plus courante</div>
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
                 <span className="w-2 h-8 bg-blue-600"></span> La Mission
              </h2>
              <div className="prose prose-invert text-gray-300 leading-loose">
                 <p>
                    Assurer des soins chirurgicaux de haute qualité, respectueux et sécurisés, en mettant le patient au cœur de chaque intervention.
                 </p>
                 <p>
                    Offrir un accompagnement personnalisé avant, pendant et après l’opération, en fournissant des informations claires et un soutien adapté.
                 </p>
                 <p>
                    Coordonner efficacement les ressources médicales et les équipes pour garantir une prise en charge complète et un parcours de soins fluide, visant à optimiser la récupération et le bien-être de chaque patient.
                 </p>
              </div>

              {/* Barres de réussite */}
              <div className="bg-[#0a101f] p-8 border border-white/5 rounded-lg space-y-8 mt-8">
                 
                 {/* Barre 1 */}
                 <div>
                    <div className="flex justify-between items-end mb-2">
                       <span className="font-bold uppercase text-sm">Opérations Réussies</span>
                       <span className="text-2xl font-anton text-green-400">90%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                       <div className="h-full bg-green-500 w-[90%] shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                    </div>
                 </div>

                 {/* Barre 2 */}
                 <div>
                    <div className="flex justify-between items-end mb-2">
                       <span className="font-bold uppercase text-sm">Traitement Cancer Réussi</span>
                       <span className="text-2xl font-anton text-blue-400">75%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 w-[75%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
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
                 <div className="group bg-white/5 border border-white/10 p-6 hover:border-blue-500 transition-colors duration-300">
                    <div className="flex items-start gap-4">
                       <div className="bg-blue-600/20 p-3 rounded">
                          <HeartHandshake className="w-6 h-6 text-blue-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-blue-400 transition-colors">Prise en Charge Respectueuse</h3>
                          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                             <li>Soins chirurgicaux sécurisés et adaptés.</li>
                             <li>Garantie de la dignité et de l'intimité du patient.</li>
                             <li>Confort assuré avant, pendant et après l'intervention.</li>
                          </ul>
                       </div>
                    </div>
                 </div>

                 {/* Card 2 */}
                 <div className="group bg-white/5 border border-white/10 p-6 hover:border-blue-500 transition-colors duration-300">
                    <div className="flex items-start gap-4">
                       <div className="bg-blue-600/20 p-3 rounded">
                          <Info className="w-6 h-6 text-blue-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-blue-400 transition-colors">Accompagnement & Information</h3>
                          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                             <li>Informations claires sur les risques et le suivi.</li>
                             <li>Soutien psychologique pour les patients anxieux.</li>
                             <li>Transparence totale sur les procédures complexes.</li>
                          </ul>
                       </div>
                    </div>
                 </div>

                 {/* Card 3 */}
                 <div className="group bg-white/5 border border-white/10 p-6 hover:border-blue-500 transition-colors duration-300">
                    <div className="flex items-start gap-4">
                       <div className="bg-blue-600/20 p-3 rounded">
                          <Users className="w-6 h-6 text-blue-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-blue-400 transition-colors">Coordination & Suivi</h3>
                          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                             <li>Organisation efficace minimisant l'attente.</li>
                             <li>Optimisation de la récupération post-opératoire.</li>
                             <li>Lien fluide entre équipes chirurgicales et autres services.</li>
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

export default Surgery;