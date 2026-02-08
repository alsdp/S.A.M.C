import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, Phone, Shield, Siren, Activity, Stethoscope, 
  ChevronRight, Crosshair, Brain, Skull, Baby, Mountain, 
  X, HelpCircle, Lock, AlertTriangle, MessageCircle, Home as HomeIcon,
  Calendar, Key 
} from 'lucide-react';

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRecruitmentModal, setShowRecruitmentModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  const menuItems = [
    { to: "/", label: "Accueil", icon: HomeIcon },
    { to: "/rdv", label: "Prendre Rendez-vous", icon: Calendar },
    { to: "/surgery", label: "Surgery Care", icon: Stethoscope },
    { to: "/pssd", label: "Psychological Support", icon: Brain },
    { to: "/gos", label: "Gynecology & Obstretics", icon: Baby },
    { to: "/ams", label: "Ambulatory Mortuary", icon: Skull },
    { to: "/sar", label: "Search & Rescue", icon: Mountain },
    { to: "/faq", label: "Centre d'Aide", icon: HelpCircle },
  ];

  
  const glassCard = "bg-white/[0.02] backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]";

  return (
    <div className="relative w-full min-h-screen bg-[#09090b] text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      
      {/* --- MENU LATÉRAL GLASS --- */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}>
         <div 
           className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
           onClick={() => setIsMenuOpen(false)}
         ></div>

         <div className={`absolute right-0 top-0 h-full w-[300px] bg-black/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col border-l border-white/10 overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

            <div className="flex items-center justify-between p-6 pb-4 relative z-10 border-b border-white/5">
               <span className="font-anton italic text-3xl tracking-wider text-white select-none drop-shadow-lg">MENU</span>
               <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
               >
                  <X className="w-6 h-6" />
               </button>
            </div>

            <div className="px-6 py-4 relative z-10">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Navigation</span>
            </div>

            <div className="flex-1 overflow-y-auto py-2 px-4 space-y-2 relative z-10">
               {menuItems.map((item, index) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <Link 
                        key={index}
                        to={item.to}
                        onClick={() => setIsMenuOpen(false)}
                        className={`
                            group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 border
                            ${isActive 
                                ? 'bg-blue-900/30 border-blue-500/50 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]' 
                                : 'border-transparent hover:bg-white/5 hover:border-white/10 text-gray-300 hover:text-white'}
                        `}
                    >
                        <item.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isActive ? 'text-blue-400' : 'text-gray-400 group-hover:text-white'}`} />
                        <span className="font-medium text-sm tracking-wide">{item.label}</span>
                    </Link>
                  );
               })}
            </div>

            {/* AJOUT DU LIEN ADMIN DANS LE BAS DU MENU */}
            <div className="p-4 border-t border-white/5 bg-black/20 relative z-10 space-y-3">
                <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-gray-500 hover:text-red-400 transition-colors text-xs font-mono uppercase tracking-widest group p-2 rounded hover:bg-white/5">
                    <Lock className="w-3 h-3 group-hover:text-red-500 transition-colors" /> <span>Accès Personnel</span>
                </Link>
                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group px-2">
                    <MessageCircle className="w-4 h-4 group-hover:text-blue-400 transition-colors" /> <span>Support Technique</span>
                </a>
            </div>
         </div>
      </div>

      <style>{`
        @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-enter { animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; }
        .animate-blink { animation: blink 2s infinite; }
        .delay-100 { animation-delay: 0.1s; } .delay-200 { animation-delay: 0.3s; } .delay-300 { animation-delay: 0.5s; }
        .text-stroke { -webkit-text-stroke: 1px rgba(255,255,255,0.3); }
      `}</style>

      {/* --- LAYERS D'IMMERSION --- */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
      <div className="fixed inset-0 pointer-events-none z-40 scanlines opacity-5"></div>
      <div className="fixed inset-0 pointer-events-none z-30 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_100%)]"></div>
      <div className="fixed inset-0 pointer-events-none z-40 bg-gradient-to-b from-transparent via-red-500/5 to-transparent h-[20vh] w-full animate-[scanline_8s_linear_infinite] opacity-30"></div>

      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
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

        {/* Navbar Glass */}
        <nav className="absolute top-0 w-full z-50 px-4 md:px-6 py-4 md:py-6 flex justify-between items-center animate-enter border-b border-white/5 bg-black/10 backdrop-blur-sm">
          <div className="flex items-center gap-3 md:gap-4 group cursor-pointer">
             <div className="relative p-1 md:p-2">
                <img src="https://i.goopics.net/tjnk1o.png" alt="SAMC Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
                <div className="absolute inset-0 bg-red-600 blur-xl opacity-40 animate-pulse"></div>
             </div>
             <div className="flex flex-col">
                <span className="font-anton text-2xl md:text-3xl tracking-widest leading-none text-white drop-shadow-md">S.A.M.C</span>
                <div className="flex items-center gap-2">
                   <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-green-500 rounded-full animate-pulse box-shadow-[0_0_10px_#22c55e]"></div>
                   <span className="text-[0.5rem] md:text-[0.6rem] uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-300 font-bold">System Online</span>
                </div>
             </div>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="group flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300 cursor-pointer shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
          >
             <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-300 group-hover:text-white">Menu</span>
             <Menu className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white" />
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 mt-10">
          <div className="absolute -left-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-red-500/20 to-transparent hidden lg:block"></div>
          
          <div className="max-w-6xl space-y-6 md:space-y-8">
            <div className={`flex items-center gap-2 md:gap-4 animate-enter ${loaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="h-px w-8 md:w-12 bg-red-600/80 box-shadow-[0_0_10px_#dc2626]"></div>
              <span className="text-red-400 font-mono text-[0.6rem] md:text-xs tracking-[0.2em] md:tracking-[0.4em] uppercase font-bold">Est. 1885 • Los Santos</span>
            </div>

            <div className="font-anton italic tracking-tighter leading-[0.8] select-none transform -skew-x-2 mix-blend-lighten relative">
              <h1 className="text-5xl xs:text-6xl md:text-[11rem] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 animate-enter delay-100 drop-shadow-2xl relative z-10">
                San Andreas
              </h1>
              <div className="relative animate-enter delay-200">
                <h1 className="text-5xl xs:text-6xl md:text-[11rem] text-transparent text-stroke opacity-30 absolute top-0 left-1 z-0 blur-[1px]">
                  Medical Care
                </h1>
                <h1 className="text-5xl xs:text-6xl md:text-[11rem] text-white relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  Medical Care
                </h1>
              </div>
            </div>

            <p className={`max-w-lg text-gray-300 text-sm md:text-lg font-light leading-relaxed animate-enter delay-300 p-6 rounded-2xl border border-red-500/20 relative overflow-hidden group ${glassCard}`}>
               <span className="absolute top-0 left-0 w-1 h-full bg-red-600/60 group-hover:bg-red-500 transition-colors duration-500"></span>
               <span className="absolute -top-10 -right-10 w-32 h-32 bg-red-600/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-red-600/20 transition-colors duration-500"></span>
               <b className="text-white font-medium">Le S.A.M.C.</b> déploie ses unités d'élite. Rapidité chirurgicale. Dévouement total.
            </p>

            <div className="flex flex-wrap gap-6 mt-8 md:mt-12 animate-enter delay-300">
              
              {/* BOUTON 1 : URGENCE 911 */}
              <button className="group relative px-8 py-4 md:px-12 md:py-6 bg-gradient-to-r from-red-700 to-red-900 text-white font-bold uppercase tracking-[0.2em] overflow-hidden transform skew-x-[-10deg] hover:from-red-600 hover:to-red-800 transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_50px_rgba(220,38,38,0.7)] text-xs md:text-base rounded-lg border border-red-500/30">
                <div className="absolute inset-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute inset-0 w-1 bg-white/30 translate-x-[-100%] group-hover:translate-x-[500%] transition-transform duration-700 blur-sm"></div>
                <div className="skew-x-[10deg] flex items-center gap-3 md:gap-4 relative z-10">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 drop-shadow" />
                  <span className="drop-shadow">Appel 911</span>
                </div>
              </button>

              {/* BOUTON 2 : PRENDRE RDV */}
              <Link to="/rdv" className="group relative px-8 py-4 md:px-12 md:py-6 bg-blue-900/30 text-blue-200 font-bold uppercase tracking-[0.2em] overflow-hidden transform skew-x-[-10deg] hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] text-xs md:text-base rounded-lg border border-blue-500/30 backdrop-blur-md">
                 <div className="absolute inset-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                 <div className="absolute inset-0 w-1 bg-white/30 translate-x-[-100%] group-hover:translate-x-[500%] transition-transform duration-700 blur-sm"></div>
                 <div className="skew-x-[10deg] flex items-center gap-3 md:gap-4 relative z-10">
                   <Calendar className="w-4 h-4 md:w-5 md:h-5 drop-shadow" />
                   <span className="drop-shadow">Prendre RDV</span>
                 </div>
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* Marquee Glass */}
      <div className="animate-marquee whitespace-nowrap flex gap-8 md:gap-16 text-white font-anton text-xl md:text-2xl tracking-widest items-center bg-white/[0.02] py-3 md:py-4 border-y border-white/10 backdrop-blur-lg shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] relative z-20">
        {[
          { icon: Phone, text: "URGENCE VITALE : 911", color: "text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" },
          { icon: Shield, text: "PILLBOX HILL : 24/7", color: "text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" },
          { icon: Activity, text: "DON DU SANG ", color: "text-white drop-shadow" },
          { icon: Calendar, text: "CONSULTATION SUR RDV", color: "text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]" },
          { icon: Phone, text: "URGENCE : 911", color: "text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" },
        ].map((item, i) => (
          <React.Fragment key={i}>
            <span className="flex items-center gap-2 md:gap-4">
              <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.color.includes('red') ? 'animate-pulse' : ''}`} /> 
              <span className={item.color}>{item.text}</span>
            </span>
            <span className="opacity-20 text-2xl md:text-4xl italic text-gray-500 font-light">///</span>
          </React.Fragment>
        ))}
      </div>

      {/* --- SECTION SERVICES GLASS  --- */}
       <div className="relative bg-[#09090b] z-10 py-16 md:py-32 overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse duration-[10s]"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse duration-[10s] delay-5000"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-20">
           <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-24 border-b border-white/10 pb-6 md:pb-8 relative">
               <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
               <div>
                 <div className="flex items-center gap-2 md:gap-3 text-red-500 font-mono text-[0.6rem] md:text-xs mb-2 md:mb-4">
                    <Crosshair className="w-3 h-3 md:w-4 md:h-4" /> 
                    <span className="tracking-[0.2em] md:tracking-[0.4em] uppercase">Sector Alpha • Medical Wing</span>
                 </div>
                 <h2 className="text-4xl md:text-8xl font-anton text-white uppercase tracking-tight leading-none drop-shadow-lg">
                   Nos Départements
                 </h2>
               </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
             {/* 1. Surgery Care Service (SCS) */}
             <Link to="/surgery" className={`group relative h-[350px] md:h-[500px] rounded-2xl overflow-hidden transition-all duration-500 block hover:-translate-y-2 ${glassCard} hover:border-blue-500/30 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.3)]`}>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700 transform group-hover:scale-110 mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm border-t border-white/5">
                   <div className="w-12 h-12 bg-blue-600/80 backdrop-blur-md flex items-center justify-center mb-4 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform border border-white/10">
                      <Stethoscope className="w-6 h-6 text-white" />
                   </div>
                   <h3 className="text-2xl md:text-3xl font-anton text-white mb-2 uppercase drop-shadow-md">Surgery Care</h3>
                   <p className="text-gray-300 text-sm font-light leading-relaxed mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                     Blocs opératoires de pointe. Traumatologie, orthopédie et soins intensifs.
                   </p>
                   <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform group-hover:text-blue-300">
                      <span>Explorer</span> <ChevronRight className="w-4 h-4" />
                   </div>
                </div>
             </Link>

             {/* 2. PSSD */}
             <Link to="/pssd" className={`group relative h-[350px] md:h-[500px] rounded-2xl overflow-hidden transition-all duration-500 block hover:-translate-y-2 ${glassCard} hover:border-purple-500/30 hover:shadow-[0_20px_40px_-10px_rgba(147,51,234,0.3)]`}>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=687&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700 transform group-hover:scale-110 mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm border-t border-white/5">
                   <div className="w-12 h-12 bg-purple-600/80 backdrop-blur-md flex items-center justify-center mb-4 rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.4)] group-hover:scale-110 transition-transform border border-white/10">
                      <Brain className="w-6 h-6 text-white" />
                   </div>
                   <h3 className="text-2xl md:text-3xl font-anton text-white mb-2 uppercase drop-shadow-md">Psychological Support</h3>
                   <p className="text-gray-300 text-sm font-light leading-relaxed mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                      Soutien psychologique, gestion de crise et suivi post-traumatique.
                   </p>
                   <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform group-hover:text-purple-300">
                      <span>Explorer</span> <ChevronRight className="w-4 h-4" />
                   </div>
                </div>
             </Link>

              {/* 3. GOS */}
              <Link to="/gos" className={`group relative h-[350px] md:h-[500px] rounded-2xl overflow-hidden transition-all duration-500 block hover:-translate-y-2 ${glassCard} hover:border-pink-500/30 hover:shadow-[0_20px_40px_-10px_rgba(219,39,119,0.3)]`}>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1609741200145-7401a2c32e4e?q=80&w=627&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700 transform group-hover:scale-110 mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm border-t border-white/5">
                   <div className="w-12 h-12 bg-pink-600/80 backdrop-blur-md flex items-center justify-center mb-4 rounded-xl shadow-[0_0_20px_rgba(219,39,119,0.4)] group-hover:scale-110 transition-transform border border-white/10">
                      <Baby className="w-6 h-6 text-white" />
                   </div>
                   <h3 className="text-2xl md:text-3xl font-anton text-white mb-2 uppercase drop-shadow-md">Gynecology & Obstretics</h3>
                   <p className="text-gray-300 text-sm font-light leading-relaxed mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                      Suivi de grossesse, naissances et soins pédiatriques spécialisés.
                   </p>
                   <div className="flex items-center gap-2 text-pink-400 text-xs font-bold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform group-hover:text-pink-300">
                      <span>Explorer</span> <ChevronRight className="w-4 h-4" />
                   </div>
                </div>
             </Link>

             {/* 4. AMS */}
             <Link to="/ams" className={`group relative h-[350px] md:h-[500px] rounded-2xl overflow-hidden transition-all duration-500 block hover:-translate-y-2 ${glassCard} hover:border-gray-400/30 hover:shadow-[0_20px_40px_-10px_rgba(156,163,175,0.3)]`}>
                <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1725408021124-21990ff260c8?q=80&w=1170&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700 transform group-hover:scale-110 mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm border-t border-white/5">
                   <div className="w-12 h-12 bg-gray-600/80 backdrop-blur-md flex items-center justify-center mb-4 rounded-xl shadow-[0_0_20px_rgba(156,163,175,0.4)] group-hover:scale-110 transition-transform border border-white/10">
                      <Skull className="w-6 h-6 text-white" />
                   </div>
                   <h3 className="text-2xl md:text-3xl font-anton text-white mb-2 uppercase drop-shadow-md">Ambulatory Mortuary</h3>
                   <p className="text-gray-300 text-sm font-light leading-relaxed mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                      Médecine légale de terrain, constats et transport sécurisé.
                   </p>
                   <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform group-hover:text-gray-300">
                      <span>Explorer</span> <ChevronRight className="w-4 h-4" />
                   </div>
                </div>
             </Link>

             {/* 5. SAR */}
             <Link to="/sar" className={`group relative h-[350px] md:h-[500px] rounded-2xl overflow-hidden transition-all duration-500 lg:col-span-2 block hover:-translate-y-2 ${glassCard} hover:border-orange-500/30 hover:shadow-[0_20px_40px_-10px_rgba(234,88,12,0.3)]`}>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1692176961746-e3b5aeb9669a?q=80&w=880&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700 transform group-hover:scale-110 mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm border-t border-white/5">
                   <div className="w-12 h-12 bg-orange-600/80 backdrop-blur-md flex items-center justify-center mb-4 rounded-xl shadow-[0_0_20px_rgba(234,88,12,0.4)] group-hover:scale-110 transition-transform border border-white/10">
                      <Mountain className="w-6 h-6 text-white" />
                   </div>
                   <h3 className="text-2xl md:text-3xl font-anton text-white mb-2 uppercase drop-shadow-md">Search & Rescue</h3>
                   <p className="text-gray-300 text-sm font-light leading-relaxed mb-4 opacity-80 group-hover:opacity-100 transition-opacity max-w-lg">
                      Sauvetage en milieu périlleux (mer, montagne, désert). Extraction héliportée et interventions d'urgence complexes.
                   </p>
                   <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform group-hover:text-orange-300">
                      <span>Explorer</span> <ChevronRight className="w-4 h-4" />
                   </div>
                </div>
             </Link>
           </div>
        </div>
      </div>

      {/* --- FOOTER GLASS --- */}
      <footer className="relative bg-[#09090b] border-t border-white/5 py-12 md:py-24 overflow-hidden relative z-20">
         <div className="absolute inset-0 opacity-[0.05] grayscale bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/USA_location_map.svg')] bg-center bg-no-repeat bg-cover pointer-events-none mix-blend-overlay"></div>
         {/* Lumière de fond footer */}
         <div className="absolute bottom-[-20%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] bg-red-900/20 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center">
               <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 relative ${glassCard} rounded-full p-0`}>
                  <div className="absolute inset-0 bg-red-600 rounded-full blur-md opacity-30 animate-pulse"></div>
                  <img src="https://i.goopics.net/tjnk1o.png" alt="SAMC Logo Footer" className="w-12 h-12 object-contain relative z-10 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
               </div>
               <h2 className="text-2xl md:text-4xl font-anton text-white tracking-[0.2em] mb-4 drop-shadow-lg">REJOIGNEZ L'ÉLITE</h2>
               <p className="max-w-xl text-gray-400 mb-10 font-mono text-sm leading-relaxed px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/5">
                  Le S.A.M.C recrute des profils déterminés. Carrière d'honneur au service de Los Santos.
               </p>
               
               <button 
                onClick={() => setShowRecruitmentModal(true)}
                className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(220,38,38,0.6)] text-sm rounded-lg relative overflow-hidden group"
               >
                  <span className="relative z-10">Déposer une candidature</span>
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-red-600/30"></div>
               </button>

               <div className="mt-20 pt-8 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono uppercase tracking-widest backdrop-blur-sm bg-white/[0.01] rounded-t-xl p-4">
                  <p>&copy; 2024 S.A.M.C - Los Santos </p>
                  
                  {/* AJOUT DU LIEN ADMIN DANS LE FOOTER (PETIT CADENAS) */}
                  <div className="flex items-center gap-6 mt-4 md:mt-0">
                      <Link to="/admin" className="hover:text-red-500 transition-colors flex items-center gap-1 group" title="Accès Admin">
                          <Key className="w-3 h-3 group-hover:rotate-45 transition-transform" />
                      </Link>
                      <Link to="/faq" className="hover:text-red-400 cursor-pointer transition-colors hover:underline">FAQ</Link>
                      <span className="hover:text-red-400 cursor-pointer transition-colors hover:underline">Discord</span>
                      <span className="hover:text-red-400 cursor-pointer transition-colors hover:underline">Gouvernement</span>
                  </div>
               </div>
            </div>
         </div>
      </footer>

      {/* --- CUSTOM ALERT MODAL (POPUP) GLASS --- */}
      {showRecruitmentModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-md animate-enter transition-opacity"
            onClick={() => setShowRecruitmentModal(false)}
          ></div>

          <div className={`relative w-full max-w-md p-8 animate-enter border-t-4 border-t-red-600 overflow-hidden rounded-3xl ${glassCard}`}>
             {/* Reflet Diagonal */}
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
             
             <div className="absolute top-3 right-3 flex gap-1.5">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-blink shadow-[0_0_10px_#dc2626]"></div>
                <div className="w-1.5 h-1.5 bg-red-600/30 rounded-full"></div>
             </div>

             <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center relative group ${glassCard} p-0 bg-red-900/10 border-red-500/20`}>
                   <div className="absolute inset-0 bg-red-600/30 rounded-full animate-ping opacity-40"></div>
                   <Lock className="w-10 h-10 text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                </div>

                <div className="space-y-3">
                   <h3 className="font-anton text-4xl text-white uppercase tracking-wider text-red-500 drop-shadow-md">
                      ACCÈS REFUSÉ
                   </h3>
                   <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
                   <p className="font-mono text-sm text-gray-300 pt-2 leading-relaxed">
                      <span className="text-red-400 font-bold drop-shadow-[0_0_5px_rgba(239,68,68,0.6)]">[ERREUR 403]</span> : Le protocole de recrutement est actuellement suspendu par la direction.
                   </p>
                </div>

                <button 
                   onClick={() => setShowRecruitmentModal(false)}
                   className="mt-2 w-full py-3 bg-red-600/10 hover:bg-red-600/80 text-red-400 hover:text-white border border-red-600/30 hover:border-red-600 uppercase font-bold tracking-widest text-xs transition-all duration-300 rounded-lg backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                >
                   Fermer la notification
                </button>
             </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;