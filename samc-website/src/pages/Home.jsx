import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, Phone, Shield, Siren, Activity, Stethoscope, 
  ChevronRight, Crosshair, Brain, Skull, Baby, Mountain, 
  X, HelpCircle 
} from 'lucide-react';

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  const menuItems = [
    { 
      to: "/surgery", 
      label: "Surgery Care", 
      icon: Stethoscope, 
      color: "text-blue-500", 
      shadow: "group-hover:shadow-blue-500/20", 
      desc: "Blocs opératoires & Traumatologie" 
    },
    { 
      to: "/pssd", 
      label: "Psychology Unit", 
      icon: Brain, 
      color: "text-purple-500", 
      shadow: "group-hover:shadow-purple-500/20", 
      desc: "Soutien & Santé mentale" 
    },
    { 
      to: "/gos", 
      label: "Gynecology", 
      icon: Baby, 
      color: "text-pink-500", 
      shadow: "group-hover:shadow-pink-500/20", 
      desc: "Maternité & Obstétrique" 
    },
    { 
      to: "/ams", 
      label: "Mortuary Service", 
      icon: Skull, 
      color: "text-gray-400", 
      shadow: "group-hover:shadow-gray-500/20", 
      desc: "Médecine légale & Funéraire" 
    },
    { 
      to: "/sar", 
      label: "Search & Rescue", 
      icon: Mountain, 
      color: "text-orange-500", 
      shadow: "group-hover:shadow-orange-500/20", 
      desc: "Sauvetage en milieu périlleux" 
    },
    { 
      to: "/faq", 
      label: "Centre d'Aide", 
      icon: HelpCircle, 
      color: "text-cyan-400", 
      shadow: "group-hover:shadow-cyan-500/20", 
      desc: "Questions fréquentes & Candidatures" 
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#09090b] text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      
      {/* --- MENU LATÉRAL "GLASSMORPHISM" --- */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}>
         
         {/* Fond noir semi-transparent avec FLOU (Backdrop) */}
         <div 
           className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
           onClick={() => setIsMenuOpen(false)}
         ></div>

         {/* Panneau Latéral effet Verre Dépoli */}
         <div className={`absolute right-0 top-0 h-full w-full md:w-[500px] bg-[#09090b]/90 backdrop-blur-2xl border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-transform duration-500 cubic-bezier(0.33, 1, 0.68, 1) transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
            
            {/* Header du Menu */}
            <div className="flex items-center justify-between p-8 border-b border-white/10">
               <div>
                  <span className="font-anton text-3xl tracking-wider text-white block">MENU</span>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Navigation Système</span>
               </div>
               <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-3 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:rotate-90"
               >
                  <X className="w-6 h-6" />
               </button>
            </div>

            {/* Liste des Liens */}
            <div className="flex-1 overflow-y-auto py-8 px-6 space-y-3">
               {menuItems.map((item, index) => (
                  <Link 
                     key={index}
                     to={item.to}
                     onClick={() => setIsMenuOpen(false)}
                     className="group flex items-center gap-5 p-5 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300"
                  >
                     {/* Icône avec léger halo coloré au survol */}
                     <div className={`p-3 rounded-lg bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300 ${item.shadow} group-hover:shadow-[0_0_20px_]`}>
                        <item.icon className={`w-6 h-6 transition-colors duration-300 ${item.color.replace('text-', 'group-hover:text-')}`} />
                     </div>
                     
                     <div className="flex-1">
                        <h4 className="font-medium text-xl text-gray-200 group-hover:text-white transition-colors duration-300">
                           {item.label}
                        </h4>
                        <p className="text-sm text-gray-500 font-normal mt-1 leading-snug">
                           {item.desc}
                        </p>
                     </div>
                     
                     <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
               ))}
            </div>

            {/* Footer Menu */}
            <div className="p-8 border-t border-white/10 bg-black/20">
               <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-4 text-center text-sm font-bold text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 border border-white/10 hover:border-white/20 uppercase tracking-[0.2em]"
               >
                  Retour à l'accueil
               </Link>
            </div>
         </div>
      </div>

      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-enter {
          animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.3s; }
        .delay-300 { animation-delay: 0.5s; }
        .text-stroke { -webkit-text-stroke: 1px rgba(255,255,255,0.3); }
      `}</style>

      {/* --- LAYERS D'IMMERSION --- */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
      <div className="fixed inset-0 pointer-events-none z-40 scanlines opacity-5"></div>
      <div className="fixed inset-0 pointer-events-none z-30 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_100%)]"></div>
      <div className="fixed inset-0 pointer-events-none z-40 bg-gradient-to-b from-transparent via-red-500/5 to-transparent h-[20vh] w-full animate-[scanline_8s_linear_infinite] opacity-30"></div>

      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1652047402296-46b0ab72266e?q=80&w=1170&auto=format&fit=crop" 
            alt="SAMC Cinematic Background" 
            className="w-full h-full object-cover opacity-40 scale-110 transition-transform duration-[30s] ease-linear"
            style={{ transform: loaded ? 'scale(1.0)' : 'scale(1.2)' }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-transparent to-[#09090b]/80"></div>
        </div>

        {/* Navbar */}
        <nav className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center animate-enter">
          <div className="flex items-center gap-4 group cursor-pointer">
             <div className="relative p-2">
                <img 
                  src="https://i.goopics.net/tjnk1o.png" 
                  alt="SAMC Logo" 
                  className="w-12 h-12 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                />
                <div className="absolute inset-0 bg-red-600 blur-xl opacity-40 animate-pulse"></div>
             </div>
             <div className="flex flex-col">
                <span className="font-anton text-3xl tracking-widest leading-none text-white">S.A.M.C</span>
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gray-400 font-bold">System Online</span>
                </div>
             </div>
          </div>
          
          {/* BOUTON MENU */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-black/40 hover:bg-white/10 hover:border-white/30 backdrop-blur-md transition-all duration-300 cursor-pointer"
          >
             <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-300 group-hover:text-white">Menu</span>
             <Menu className="w-5 h-5 text-gray-300 group-hover:text-white" />
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 mt-10">
          <div className="absolute -left-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-red-500/20 to-transparent hidden lg:block"></div>
          
          <div className="max-w-6xl space-y-6">
            <div className={`flex items-center gap-4 animate-enter ${loaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="h-px w-12 bg-red-600"></div>
              <span className="text-red-500 font-mono text-xs tracking-[0.4em] uppercase">Courage, Integrity & Pride • Est. 1885</span>
            </div>

            <div className="font-anton italic tracking-tighter leading-[0.8] select-none transform -skew-x-2 mix-blend-lighten">
              <h1 className="text-[6rem] md:text-[11rem] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 animate-enter delay-100 drop-shadow-2xl">
                San Andreas
              </h1>
              <div className="relative animate-enter delay-200">
                <h1 className="text-[6rem] md:text-[11rem] text-transparent text-stroke opacity-30 absolute top-0 left-1">
                  Medical Care
                </h1>
                <h1 className="text-[6rem] md:text-[11rem] text-white relative z-10 drop-shadow-lg">
                  Medical Care
                </h1>
                <div className="absolute -inset-10 bg-red-600/10 blur-[100px] z-0 pointer-events-none"></div>
              </div>
            </div>

            <p className="max-w-lg text-gray-400 text-lg font-light leading-relaxed animate-enter delay-300 border-l-2 border-red-600/60 pl-6 backdrop-blur-sm bg-black/30 py-4 rounded-r-lg">
              <b className="text-white"></b> Le San Andreas Medical Care déploie ses unités d'élite. Rapidité chirurgicale. Dévouement total.
            </p>

            <div className="flex flex-wrap gap-8 mt-12 animate-enter delay-300">
              <button className="group relative px-12 py-6 bg-red-700 text-white font-bold uppercase tracking-[0.2em] overflow-hidden transform skew-x-[-10deg] hover:bg-red-600 transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(220,38,38,0.6)]">
                <div className="absolute inset-0 w-1 bg-white/20 translate-x-[-100%] group-hover:translate-x-[500%] transition-transform duration-700"></div>
                <div className="skew-x-[10deg] flex items-center gap-4">
                  <Phone className="w-5 h-5" />
                  <span>Appel 911</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
           <div className="w-px h-16 bg-gradient-to-b from-red-600 to-transparent"></div>
        </div>
      </div>

      <div className="animate-marquee whitespace-nowrap flex gap-16 text-white font-anton text-2xl tracking-widest items-center bg-black/50 py-4 border-y border-white/5 backdrop-blur-sm">
        {[
          { icon: Phone, text: "URGENCE VITALE : COMPOSEZ LE 911", color: "text-red-500" },
          { icon: Shield, text: "PILLBOX HILL MEDICAL CENTER : OUVERT 24/7", color: "text-blue-400" },
          { icon: Activity, text: "CAMPAGNE DE DON DU SANG ", color: "text-white" },
          { icon: Phone, text: "URGENCE VITALE : COMPOSEZ LE 911", color: "text-red-500" },
          { icon: Shield, text: "PILLBOX HILL MEDICAL CENTER : OUVERT 24/7", color: "text-blue-400" }
        ].map((item, i) => (
          <React.Fragment key={i}>
            <span className="flex items-center gap-4">
              <item.icon className={`w-6 h-6 ${item.color === 'text-red-500' ? 'animate-pulse' : ''}`} /> 
              <span className={item.color}>{item.text}</span>
            </span>
            <span className="opacity-30 text-4xl italic text-gray-500">///</span>
          </React.Fragment>
        ))}
      </div>

      {/* --- SECTION SERVICES --- */}
       <div className="relative bg-[#09090b] z-10 py-32">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none"></div>

         <div className="container mx-auto px-6 relative z-20">
           
           <div className="flex flex-col md:flex-row items-end justify-between mb-24 border-b border-white/10 pb-8">
               <div>
                 <div className="flex items-center gap-3 text-red-500 font-mono text-xs mb-4">
                    <Crosshair className="w-4 h-4" /> 
                    <span className="tracking-[0.4em] uppercase">Sector Alpha • Medical Wing</span>
                 </div>
                 <h2 className="text-5xl md:text-8xl font-anton text-white uppercase tracking-tight">
                    Nos Départements
                 </h2>
               </div>
               <div className="text-right hidden md:block">
                 <div className="text-4xl font-anton text-white/20">05</div>
                 <div className="text-xs text-gray-500 font-mono uppercase tracking-widest">Divisions Spécialisées</div>
               </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             
             {/* 1. Surgery Care Service (SCS) - BLUE */}
             <Link to="/surgery" className="group relative h-[450px] bg-white/5 border border-white/10 overflow-hidden hover:border-blue-600/50 transition-colors duration-500 block">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 transform group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                   <div className="w-12 h-12 bg-blue-600 flex items-center justify-center mb-6 skew-x-[-10deg] shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                      <Stethoscope className="w-6 h-6 text-white skew-x-[10deg]" />
                   </div>
                   <h3 className="text-3xl font-anton text-white mb-2 uppercase">Surgery Care</h3>
                   <p className="text-gray-400 text-sm font-light mb-6 border-l-2 border-blue-600 pl-4">
                     Blocs opératoires haute technologie. Chirurgie traumatique, orthopédie et soins intensifs.
                   </p>
                   <div className="flex items-center gap-2 text-blue-500 text-xs font-bold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                      <span>Détails SCS</span> <ChevronRight className="w-4 h-4" />
                   </div>
                </div>
             </Link>

             {/* 2. Psychological Support Service (PSSD) - VIOLET */}
             <Link to="/pssd" className="group relative h-[450px] bg-white/5 border border-white/10 overflow-hidden hover:border-purple-600/50 transition-colors duration-500 block">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=687&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 transform group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                   <div className="w-12 h-12 bg-purple-600 flex items-center justify-center mb-6 skew-x-[-10deg] shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                      <Brain className="w-6 h-6 text-white skew-x-[10deg]" />
                   </div>
                   <h3 className="text-3xl font-anton text-white mb-2 uppercase">Psychological Support</h3>
                   <p className="text-gray-400 text-sm font-light mb-6 border-l-2 border-purple-600 pl-4">
                      Soutien psychologique, gestion de crise et suivi post-traumatique pour civils et agents.
                   </p>
                   <div className="flex items-center gap-2 text-purple-500 text-xs font-bold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                      <span>Détails PSS</span> <ChevronRight className="w-4 h-4" />
                   </div>
                </div>
             </Link>

              {/* 3. Gynecology & Obstretics Service (GOS) - ROSE */}
              <Link to="/gos" className="group relative h-[450px] bg-white/5 border border-white/10 overflow-hidden hover:border-pink-600/50 transition-colors duration-500 block">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1609741200145-7401a2c32e4e?q=80&w=627&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 transform group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                   <div className="w-12 h-12 bg-pink-600 flex items-center justify-center mb-6 skew-x-[-10deg] shadow-[0_0_20px_rgba(219,39,119,0.3)]">
                      <Baby className="w-6 h-6 text-white skew-x-[10deg]" />
                   </div>
                   <h3 className="text-3xl font-anton text-white mb-2 uppercase">Gynecology & Obstretics</h3>
                   <p className="text-gray-400 text-sm font-light mb-6 border-l-2 border-pink-600 pl-4">
                     Suivi de maternité, naissances et soins pédiatriques spécialisés.
                   </p>
                   <div className="flex items-center gap-2 text-pink-500 text-xs font-bold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                      <span>Détails GOS</span> <ChevronRight className="w-4 h-4" />
                   </div>
                </div>
             </Link>

             {/* 4. Ambulatory Mortuary Service (AMS) - ZINC/GRAY */}
             <Link to="/ams" className="group relative h-[450px] bg-white/5 border border-white/10 overflow-hidden hover:border-gray-400/50 transition-colors duration-500 block">
                <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1725408021124-21990ff260c8?q=80&w=1170&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 transform group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                   <div className="w-12 h-12 bg-gray-600 flex items-center justify-center mb-6 skew-x-[-10deg] shadow-[0_0_20px_rgba(156,163,175,0.3)]">
                      <Skull className="w-6 h-6 text-white skew-x-[10deg]" />
                   </div>
                   <h3 className="text-3xl font-anton text-white mb-2 uppercase">Ambulatory Mortuary</h3>
                   <p className="text-gray-400 text-sm font-light mb-6 border-l-2 border-gray-500 pl-4">
                      Médecine légale de terrain, constats de décès et transport funéraire sécurisé.
                   </p>
                   <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                      <span>Détails AMS</span> <ChevronRight className="w-4 h-4" />
                   </div>
                </div>
             </Link>

             {/* 5. Search & Rescue Service (S&R) - ORANGE */}
             <Link to="/sar" className="group relative h-[450px] bg-white/5 border border-white/10 overflow-hidden hover:border-orange-600/50 transition-colors duration-500 lg:col-span-2 block">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1692176961746-e3b5aeb9669a?q=80&w=880&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 transform group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                   <div className="w-12 h-12 bg-orange-600 flex items-center justify-center mb-6 skew-x-[-10deg] shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                      <Mountain className="w-6 h-6 text-white skew-x-[10deg]" />
                   </div>
                   <h3 className="text-3xl font-anton text-white mb-2 uppercase">Search & Rescue</h3>
                   <p className="text-gray-400 text-sm font-light mb-6 border-l-2 border-orange-600 pl-4 max-w-lg">
                      Sauvetage en milieu périlleux (mer, montagne, désert). Extraction héliportée et interventions d'urgence hors zone urbaine.
                   </p>
                   <div className="flex items-center gap-2 text-orange-500 text-xs font-bold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                      <span>Détails S&R</span> <ChevronRight className="w-4 h-4" />
                   </div>
                </div>
             </Link>

           </div>
         </div>
       </div>

      {/* --- FOOTER --- */}
      <footer className="relative bg-black border-t border-white/10 py-24 overflow-hidden">
         <div className="absolute inset-0 opacity-[0.03] grayscale bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/USA_location_map.svg')] bg-center bg-no-repeat bg-cover pointer-events-none"></div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center">
               <div className="w-20 h-20 border border-white/10 bg-white/5 rounded-full flex items-center justify-center mb-8 relative">
                  <div className="absolute inset-0 bg-red-600 blur-2xl opacity-20 animate-pulse"></div>
                  <img 
                    src="https://i.goopics.net/tjnk1o.png" 
                    alt="SAMC Logo Footer" 
                    className="w-12 h-12 object-contain relative z-10"
                  />
               </div>
               <h2 className="text-4xl font-anton text-white tracking-[0.2em] mb-4">REJOIGNEZ L'ÉLITE</h2>
               <p className="max-w-xl text-gray-500 mb-10 font-mono text-sm leading-relaxed">
                  Le S.A.M.C recrute des profils déterminés. Formations payées. Primes de risque. Carrière d'honneur au service de Los Santos.
               </p>
               <button className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  Déposer une candidature
               </button>
               <div className="mt-20 pt-10 border-t border-white/10 w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono uppercase tracking-widest">
                  <p>&copy; 2024 S.A.M.C - Los Santos </p>
                  <div className="flex gap-6 mt-4 md:mt-0">
                     <Link to="/faq" className="hover:text-red-500 cursor-pointer transition">FAQ</Link>
                     <span className="hover:text-red-500 cursor-pointer transition">Discord</span>
                     <span className="hover:text-red-500 cursor-pointer transition">Gouvernement</span>
                  </div>
               </div>
            </div>
         </div>
      </footer>

    </div>
  );
};

export default Home;