import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, Phone, Shield, Siren, Activity, HeartPulse, Stethoscope, 
  ChevronRight, Crosshair, Radio, Brain, Skull, Baby, Mountain, 
  Flame, Wind, Anchor, X 
} from 'lucide-react';

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  // Configuration du Menu Latéral
  const menuItems = [
    { id: "01", to: "/surgery", label: "Surgery Care", sub: "S.C.S Service", icon: Stethoscope, color: "text-blue-500", border: "group-hover:border-blue-500" },
    { id: "02", to: "/pssd", label: "Psychology Unit", sub: "P.S.S Service", icon: Brain, color: "text-purple-500", border: "group-hover:border-purple-500" },
    { id: "03", to: "/gos", label: "Gynecology", sub: "G.O.S Service", icon: Baby, color: "text-pink-500", border: "group-hover:border-pink-500" },
    { id: "04", to: "/ams", label: "Mortuary Service", sub: "A.M.S Service", icon: Skull, color: "text-gray-400", border: "group-hover:border-gray-400" },
    { id: "05", to: "/sar", label: "Search & Rescue", sub: "S.A.R Service", icon: Mountain, color: "text-orange-500", border: "group-hover:border-orange-500" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#09090b] text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      
      {/* --- MENU ELITE OVERLAY --- */}
      <div className={`fixed inset-0 z-[100] transition-all duration-700 ${isMenuOpen ? 'visible' : 'invisible'}`}>
         <div 
            className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-700 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsMenuOpen(false)}
         ></div>

         <div className={`absolute right-0 top-0 h-full w-full md:w-[500px] bg-[#09090b]/95 border-l border-white/5 shadow-[20px_0_50px_rgba(0,0,0,0.5)] transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] scanlines"></div>
            <div className="relative z-10 h-full flex flex-col">
               <div className="p-10 flex justify-between items-center">
                  <div>
                     <span className="block text-[0.6rem] font-mono text-red-500 tracking-[0.4em] uppercase mb-1">Navigation System</span>
                     <span className="font-anton text-3xl tracking-wider">DIRECTORIES</span>
                  </div>
                  <button onClick={() => setIsMenuOpen(false)} className="group relative w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:border-red-500 transition-colors duration-500">
                     <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-500" />
                  </button>
               </div>

               <nav className="flex-1 px-6 space-y-3">
                  {menuItems.map((item, index) => (
                     <Link 
                        key={item.id} 
                        to={item.to} 
                        onClick={() => setIsMenuOpen(false)}
                        style={{ 
                           transitionDelay: isMenuOpen ? `${(index + 1) * 100}ms` : '0ms',
                           transform: isMenuOpen ? 'translateX(0)' : 'translateX(50px)',
                           opacity: isMenuOpen ? 1 : 0
                        }}
                        className={`group relative flex items-center p-5 rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.05] ${item.border}`}
                     >
                        <span className="absolute right-6 top-4 font-mono text-[0.6rem] text-white/10 group-hover:text-white/30">SEC_{item.id}</span>
                        <div className={`w-14 h-14 flex items-center justify-center rounded-lg bg-black/40 border border-white/5 ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                           <item.icon className="w-7 h-7" />
                        </div>
                        <div className="ml-6">
                           <h4 className="font-anton text-2xl tracking-wide uppercase group-hover:tracking-[0.1em] transition-all duration-500">{item.label}</h4>
                           <span className="block text-[0.6rem] font-mono text-gray-500 uppercase tracking-widest mt-1">{item.sub}</span>
                        </div>
                        <ChevronRight className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0 translate-x-4" />
                     </Link>
                  ))}
               </nav>

               <div className="p-10 border-t border-white/5 bg-black/40">
                  <div className="flex items-center justify-between mb-6">
                     <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        <span className="text-[0.65rem] font-mono text-gray-400 uppercase tracking-tighter">Connection: Encrypted</span>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <button className="py-3 px-4 bg-white/5 border border-white/10 rounded font-mono text-[0.6rem] uppercase hover:bg-white hover:text-black transition-all">Support</button>
                     <button className="py-3 px-4 bg-red-600/10 border border-red-500/20 rounded font-mono text-[0.6rem] text-red-500 uppercase hover:bg-red-600 hover:text-white transition-all">Recrutement</button>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <style>{`
        @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .scanlines { background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.02)); background-size: 100% 4px; }
        .animate-enter { animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.3s; }
        .delay-300 { animation-delay: 0.5s; }
        .text-stroke { -webkit-text-stroke: 1px rgba(255,255,255,0.3); }
      `}</style>

      {/* --- IMMERSION LAYERS --- */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
      <div className="fixed inset-0 pointer-events-none z-40 scanlines opacity-5"></div>
      <div className="fixed inset-0 pointer-events-none z-30 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_100%)]"></div>
      <div className="fixed inset-0 pointer-events-none z-40 bg-gradient-to-b from-transparent via-red-500/5 to-transparent h-[20vh] w-full animate-[scanline_8s_linear_infinite] opacity-30"></div>

      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1652047402296-46b0ab72266e?q=80&w=1170&auto=format&fit=crop" 
            alt="SAMC Background" 
            className="w-full h-full object-cover opacity-40 scale-110 transition-transform duration-[30s] ease-linear"
            style={{ transform: loaded ? 'scale(1.0)' : 'scale(1.2)' }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent"></div>
        </div>

        <nav className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center animate-enter">
          <div className="flex items-center gap-4 group cursor-pointer">
             <div className="relative p-2">
                <img 
  src='https://i.goopics.net/tjnk1o.png' 
  alt="SAMC Logo"
  className="w-12 h-12 relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]"/>
                <div className="absolute inset-0 bg-red-600 blur-xl opacity-40 animate-pulse"></div>
             </div>
             <div className="flex flex-col">
                <span className="font-anton text-3xl tracking-widest text-white">S.A.M.C</span>
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gray-400 font-bold flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> System Online
                </span>
             </div>
          </div>
          <button onClick={() => setIsMenuOpen(true)} className="group relative px-6 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md transition-all hover:bg-white/10 cursor-pointer">
             <div className="flex items-center gap-3">
               <span className="text-xs font-bold tracking-widest uppercase text-gray-300">Menu</span>
               <Menu className="w-5 h-5 text-gray-300" />
             </div>
          </button>
        </nav>

        <div className="relative z-10 container mx-auto px-6 mt-10">
          <div className="max-w-6xl space-y-6">
            <div className={`flex items-center gap-4 animate-enter ${loaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="h-px w-12 bg-red-600"></div>
              <span className="text-red-500 font-mono text-xs tracking-[0.4em] uppercase">Courage, Integrity & Pride • Est. 1885</span>
            </div>
            <div className="font-anton italic tracking-tighter leading-[0.8] transform -skew-x-2">
              <h1 className="text-[6rem] md:text-[11rem] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 animate-enter delay-100">San Andreas</h1>
              <div className="relative animate-enter delay-200">
                <h1 className="text-[6rem] md:text-[11rem] text-white relative z-10 drop-shadow-lg">Medical Care</h1>
              </div>
            </div>
            <p className="max-w-lg text-gray-400 text-lg font-light leading-relaxed animate-enter delay-300 border-l-2 border-red-600/60 pl-6 backdrop-blur-sm bg-black/30 py-4">
              Le San Andreas Medical Care déploie ses unités d'élite. Rapidité chirurgicale. Dévouement total.
            </p>
            <div className="flex flex-wrap gap-8 mt-12 animate-enter delay-300">
              <button className="group relative px-12 py-6 bg-red-700 text-white font-bold uppercase tracking-[0.2em] transform skew-x-[-10deg] hover:bg-red-600 transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                <div className="skew-x-[10deg] flex items-center gap-4"><Phone className="w-5 h-5" /><span>Appel 911</span></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- TICKER --- */}
      <div className="relative z-20 bg-red-700 border-y-2 border-red-500 py-3 overflow-hidden transform -skew-y-1 shadow-2xl">
        <div className="animate-marquee whitespace-nowrap flex gap-16 text-white font-anton text-2xl tracking-widest items-center">
          {[
            { icon: Phone, text: "URGENCE VITALE : COMPOSEZ LE 911", color: "text-white" },
            { icon: Shield, text: "PILLBOX HILL MEDICAL CENTER : OUVERT 24/7", color: "text-blue-200" },
            { icon: Activity, text: "CAMPAGNE DE DON DU SANG", color: "text-white" },
            { icon: Phone, text: "URGENCE VITALE : COMPOSEZ LE 911", color: "text-white" }
          ].map((item, i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-4"><item.icon className="w-6 h-6" /> <span className={item.color}>{item.text}</span></span>
              <span className="opacity-30 text-4xl italic text-gray-300">///</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* --- SERVICES SECTION --- */}
      <div className="relative bg-[#09090b] z-10 py-32">
        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 border-b border-white/10 pb-8">
             <div>
               <div className="flex items-center gap-3 text-red-500 font-mono text-xs mb-4"><Crosshair className="w-4 h-4" /><span className="tracking-[0.4em] uppercase">Sector Alpha • Medical Wing</span></div>
               <h2 className="text-5xl md:text-8xl font-anton text-white uppercase tracking-tight">Nos Départements</h2>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/surgery" className="group relative h-[450px] bg-white/5 border border-white/10 overflow-hidden hover:border-blue-600/50 transition-all block">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent"></div>
               <div className="absolute bottom-0 p-8 w-full">
                  <div className="w-12 h-12 bg-blue-600 flex items-center justify-center mb-6 shadow-lg"><Stethoscope className="w-6 h-6 text-white" /></div>
                  <h3 className="text-3xl font-anton text-white mb-2 uppercase">Surgery Care</h3>
                  <p className="text-gray-400 text-sm font-light mb-6 border-l-2 border-blue-600 pl-4">Blocs opératoires haute technologie. Chirurgie traumatique.</p>
                  <div className="flex items-center gap-2 text-blue-500 text-xs font-bold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-all"><span>Détails SCS</span><ChevronRight className="w-4 h-4" /></div>
               </div>
            </Link>

            <Link to="/pssd" className="group relative h-[450px] bg-white/5 border border-white/10 overflow-hidden hover:border-purple-600/50 transition-all block">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=687&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent"></div>
               <div className="absolute bottom-0 p-8 w-full">
                  <div className="w-12 h-12 bg-purple-600 flex items-center justify-center mb-6 shadow-lg"><Brain className="w-6 h-6 text-white" /></div>
                  <h3 className="text-3xl font-anton text-white mb-2 uppercase">Psychological Support</h3>
                  <p className="text-gray-400 text-sm font-light mb-6 border-l-2 border-purple-600 pl-4">Soutien psychologique, gestion de crise et suivi post-traumatique.</p>
                  <div className="flex items-center gap-2 text-purple-500 text-xs font-bold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-all"><span>Détails PSS</span><ChevronRight className="w-4 h-4" /></div>
               </div>
            </Link>

            <Link to="/gos" className="group relative h-[450px] bg-white/5 border border-white/10 overflow-hidden hover:border-pink-600/50 transition-all block">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1609741200145-7401a2c32e4e?q=80&w=627&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent"></div>
               <div className="absolute bottom-0 p-8 w-full">
                  <div className="w-12 h-12 bg-pink-600 flex items-center justify-center mb-6 shadow-lg"><Baby className="w-6 h-6 text-white" /></div>
                  <h3 className="text-3xl font-anton text-white mb-2 uppercase">Gynecology & Obstretics</h3>
                  <p className="text-gray-400 text-sm font-light mb-6 border-l-2 border-pink-600 pl-4">Suivi de maternité, naissances et soins pédiatriques.</p>
                  <div className="flex items-center gap-2 text-pink-500 text-xs font-bold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-all"><span>Détails GOS</span><ChevronRight className="w-4 h-4" /></div>
               </div>
            </Link>

            <Link to="/ams" className="group relative h-[450px] bg-white/5 border border-white/10 overflow-hidden hover:border-gray-400/50 transition-all block">
               <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1725408021124-21990ff260c8?q=80&w=1170&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent"></div>
               <div className="absolute bottom-0 p-8 w-full">
                  <div className="w-12 h-12 bg-gray-600 flex items-center justify-center mb-6 shadow-lg"><Skull className="w-6 h-6 text-white" /></div>
                  <h3 className="text-3xl font-anton text-white mb-2 uppercase">Ambulatory Mortuary</h3>
                  <p className="text-gray-400 text-sm font-light mb-6 border-l-2 border-gray-500 pl-4">Médecine légale de terrain, constats de décès.</p>
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-all"><span>Détails AMS</span><ChevronRight className="w-4 h-4" /></div>
               </div>
            </Link>

            <Link to="/sar" className="group relative h-[450px] bg-white/5 border border-white/10 overflow-hidden hover:border-orange-600/50 transition-all block lg:col-span-2">
               <div className="absolute inset-0 bg-[url('https://i.goopics.net/4cly66.png')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent"></div>
               <div className="absolute bottom-0 p-8 w-full">
                  <div className="w-12 h-12 bg-orange-600 flex items-center justify-center mb-6 shadow-lg"><Mountain className="w-6 h-6 text-white" /></div>
                  <h3 className="text-3xl font-anton text-white mb-2 uppercase">Search & Rescue</h3>
                  <p className="text-gray-400 text-sm font-light mb-6 border-l-2 border-orange-600 pl-4 max-w-lg">Extraction héliportée et interventions d'urgence hors zone urbaine.</p>
                  <div className="flex items-center gap-2 text-orange-500 text-xs font-bold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-all"><span>Détails S&R</span><ChevronRight className="w-4 h-4" /></div>
               </div>
            </Link>
          </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="relative bg-black border-t border-white/10 py-24 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 border border-white/10 bg-white/5 rounded-full flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 bg-red-600 blur-2xl opacity-20 animate-pulse"></div>
              <img src="https://i.goopics.net/tjnk1o.png" alt="Footer Logo" className="w-12 h-12 object-contain relative z-10" />
            </div>
            <h2 className="text-4xl font-anton text-white tracking-[0.2em] mb-4 uppercase">Rejoignez l'élite</h2>
            <p className="max-w-xl text-gray-500 mb-10 font-mono text-sm leading-relaxed">Le S.A.M.C recrute des profils déterminés. Formations payées. Primes de risque. Carrière d'honneur au service de Los Santos.</p>
            <button className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300">Déposer une candidature</button>
            <div className="mt-20 pt-10 border-t border-white/10 w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono uppercase tracking-widest">
              <p>&copy; 2024 S.A.M.C - Los Santos</p>
              <div className="flex gap-6 mt-4 md:mt-0">
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