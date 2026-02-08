import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Search, Calendar, MapPin, ShieldCheck, ChevronRight, 
  ChevronLeft, X, CheckCircle, User, Phone, FileText, Activity, 
  Lock, Filter, UserX, Clock, AlertCircle, Check, Stethoscope, 
  HeartPulse, Brain, Baby, Syringe, Ambulance, Star
} from 'lucide-react';

const API_URL = "http://localhost/api/doctors.php"; 

const DEFAULT_SLOTS = [
    "18:00", "18:30", "19:00", "19:30", 
    "20:00", "20:30", "21:00", "21:30", 
    "22:00", "22:30", "23:00", "23:30"
];

// Configuration avancée des départements avec Icônes
const DEPARTMENTS = [
    { id: 'ALL', label: 'Tout', icon: Star, color: 'from-slate-500 to-slate-700', text: 'text-slate-400' },
    { id: 'CONSULTATION GÉNÉRALE', label: 'Général', icon: Stethoscope, color: 'from-blue-500 to-blue-700', text: 'text-blue-400' },
    { id: 'CHIRURGIE', label: 'Chirurgie', icon: Activity, color: 'from-red-500 to-red-700', text: 'text-red-400' },
    { id: 'PSYCHOLOGIE', label: 'Psy', icon: Brain, color: 'from-purple-500 to-purple-700', text: 'text-purple-400' },
    { id: 'MATERNITÉ', label: 'Maternité', icon: Baby, color: 'from-pink-500 to-pink-700', text: 'text-pink-400' },
    { id: 'A.M.S', label: 'A.M.S', icon: Syringe, color: 'from-orange-500 to-orange-700', text: 'text-orange-400' },
    { id: 'S.A.R', label: 'S.A.R', icon: Ambulance, color: 'from-yellow-500 to-yellow-700', text: 'text-yellow-400' }
];

// --- STYLES CSS INJECTÉS ---
const CustomStyles = () => (
  <style>{`
    .hide-scrollbar::-webkit-scrollbar { display: none; }
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-card { animation: fadeIn 0.4s ease-out forwards; }
    
    .glass-panel {
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
  `}</style>
);

// --- TOAST NOTIFICATION ---
const Toast = ({ message, type, onClose }) => (
    <div className={`fixed top-6 right-6 z-[120] flex items-center gap-4 px-5 py-4 rounded-xl shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-xl animate-bounce-in
      ${type === 'error' ? 'bg-red-950/80 text-red-100 border-red-500/30' : 'bg-emerald-950/80 text-emerald-100 border-emerald-500/30'}`}>
      <div className={`p-2 rounded-full ${type === 'error' ? 'bg-red-500/20' : 'bg-emerald-500/20'}`}>
        {type === 'error' ? <AlertCircle className="w-5 h-5" /> : <Check className="w-5 h-5" />}
      </div>
      <div>
        <h4 className="font-bold text-sm">{type === 'error' ? 'Erreur' : 'Succès'}</h4>
        <p className="text-xs opacity-80">{message}</p>
      </div>
      <button onClick={onClose} className="ml-2 p-1 hover:bg-white/10 rounded transition-colors"><X className="w-4 h-4" /></button>
    </div>
);

const Rdv = () => {
  // --- ETATS ---
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("ALL");
  const [weekOffset, setWeekOffset] = useState(0);
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [selectedRdv, setSelectedRdv] = useState(null);
  
  const [formData, setFormData] = useState({ 
      fullName: '', dob: '', phone: '', reason: '', history: '', specificDept: '', deceasedName: '' 
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // --- HELPERS ---
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // --- LOGIC: CALENDAR GENERATOR ---
  const displayDays = useMemo(() => {
    const days = [];
    const today = new Date();
    const startDayIndex = 1 + (weekOffset * 7); 
    
    for (let i = 0; i < 7; i++) { 
        const d = new Date(today);
        d.setDate(today.getDate() + startDayIndex + i);
        
        days.push({
            labelFull: d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }),
            dayName: d.toLocaleDateString('fr-FR', { weekday: 'short' }).replace('.', ''),
            dayNum: d.getDate(),
            month: d.toLocaleDateString('fr-FR', { month: 'short' }),
            key: d.toISOString().split('T')[0]
        });
    }
    return days;
  }, [weekOffset]);

  // --- API FETCH ---
  const fetchDoctors = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const cleanData = data.map(doc => {
            let cleanDepts = [];
            if (Array.isArray(doc.dept)) cleanDepts = doc.dept;
            else if (typeof doc.dept === 'string') {
                try { cleanDepts = JSON.parse(doc.dept); } catch(e) { cleanDepts = [doc.dept]; }
            }
            return { ...doc, dept: cleanDepts, color: doc.color || 'blue' };
        });
        setDoctors(cleanData);
        setLoading(false);
    } catch (error) {
        console.error("Erreur API :", error);
        setLoading(false);
    }
  };

  useEffect(() => { fetchDoctors(); }, []);

  // --- FILTRAGE ---
  const filteredDoctors = useMemo(() => {
    return doctors.filter(doc => {
        const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              doc.job.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDept = selectedDept === "ALL" || doc.dept.includes(selectedDept);
        return matchesSearch && matchesDept;
    });
  }, [doctors, searchTerm, selectedDept]);

  // --- HANDLERS ---
  const handleSlotClick = (doctor, dayLabel, dayKey, time) => {
    setSelectedRdv({ doctor, dayLabel, dayKey, time });
    setFormData({ fullName: '', dob: '', phone: '', reason: '', history: '', specificDept: '', deceasedName: '' });
    setModalStep(doctor.dept.length > 1 ? 0 : 1);
    if (doctor.dept.length === 1) setFormData(prev => ({ ...prev, specificDept: doctor.dept[0] }));
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedRdv) return;
    setBookingLoading(true);
    
    let fullReason = `[${formData.specificDept}] ${formData.reason}`;
    if (formData.specificDept === 'A.M.S' && formData.deceasedName) fullReason += ` (Défunt : ${formData.deceasedName})`;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                doctorId: selectedRdv.doctor.id,
                day: selectedRdv.dayKey,
                time: selectedRdv.time,
                patientName: formData.fullName,
                patientPhone: formData.phone,
                reason: fullReason
            })
        });
        const result = await response.json();
        
        if (result.success) {
            fetchDoctors();
            setModalStep(2);
            showToast("Réservation confirmée avec succès !");
        } else { 
            showToast(result.message || "Erreur de réservation", "error"); 
        }
    } catch (error) { 
        showToast("Erreur de connexion serveur", "error");
    } finally {
        setBookingLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      <CustomStyles />
      
      {/* --- BACKGROUND DYNAMIQUE --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[80px]"></div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 py-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                
                {/* Logo & Titre */}
                <div className="flex items-center gap-4 w-full lg:w-auto">
                    <Link to="/" className="p-2.5 rounded-xl bg-slate-800/50 hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 transition-all border border-slate-700/50 hover:border-blue-500/50 group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
                            CENTRAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">BOOKING</span>
                        </h1>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">San Andreas Medical Care</p>
                    </div>
                </div>

                {/* Barre de Recherche */}
                <div className="relative w-full lg:w-[450px] group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                    </div>
                    <input type="text" placeholder="Rechercher un médecin, une spécialité..." 
                        className="block w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900/60 border border-slate-700/60 text-slate-200 placeholder-slate-600 focus:outline-none focus:bg-slate-900 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-xl" 
                        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
            </div>

            {/* Barre de Filtres (Pills) */}
            <div className="mt-6 flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1 mask-linear-fade">
                {DEPARTMENTS.map((dept) => {
                    const isActive = selectedDept === dept.id;
                    const Icon = dept.icon;
                    return (
                        <button key={dept.id} onClick={() => setSelectedDept(dept.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide transition-all border whitespace-nowrap
                            ${isActive 
                                ? `bg-gradient-to-r ${dept.color} text-white border-transparent shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] scale-105` 
                                : 'bg-slate-800/40 text-slate-400 border-slate-700/50 hover:bg-slate-800 hover:border-slate-600'
                            }`}>
                            <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : dept.text}`} />
                            {dept.label}
                        </button>
                    );
                })}
            </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="container mx-auto px-4 md:px-6 py-8 relative z-10 pb-20">
        {loading ? (
            <div className="grid grid-cols-1 gap-6">
                {[1,2,3].map(i => (
                    <div key={i} className="h-64 bg-slate-900/50 rounded-2xl border border-slate-800 animate-pulse"></div>
                ))}
            </div>
        ) : (
            <div className="space-y-6">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doc, idx) => (
                        <div key={doc.id} style={{ animationDelay: `${idx * 0.1}s` }} 
                             className="animate-card glass-panel rounded-3xl overflow-hidden flex flex-col lg:flex-row group transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] hover:border-blue-500/30">
                            
                            {/* PARTIE GAUCHE : PROFIL */}
                            <div className="p-6 lg:w-[300px] flex flex-col justify-center items-center text-center lg:items-start lg:text-left border-b lg:border-b-0 lg:border-r border-slate-700/50 bg-slate-900/30 relative">
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${doc.color}-500 to-transparent lg:w-1 lg:h-full lg:bg-gradient-to-b`}></div>
                                
                                <div className="relative mb-4">
                                    <div className={`w-24 h-24 rounded-2xl overflow-hidden border-2 border-${doc.color}-500/30 shadow-2xl p-1 bg-slate-950/50`}>
                                        {doc.avatar ? (
                                            <img src={doc.avatar} alt={doc.name} className="w-full h-full object-cover rounded-xl" />
                                        ) : (
                                            <div className="w-full h-full bg-slate-800 rounded-xl flex items-center justify-center">
                                                <User className="w-10 h-10 text-slate-500" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-slate-900 px-2 py-1 rounded-lg border border-slate-700 shadow-lg flex items-center gap-1.5">
                                        <span className="relative flex h-2 w-2">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        <span className="text-[9px] font-bold text-slate-300">DISPO</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-1">{doc.name}</h3>
                                <p className={`text-xs font-bold uppercase tracking-wider mb-4 px-2 py-1 rounded bg-${doc.color}-500/10 text-${doc.color}-400 border border-${doc.color}-500/20`}>
                                    {doc.job}
                                </p>

                                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                                    {doc.dept.map((d, i) => (
                                        <span key={i} className="text-[10px] bg-slate-950/80 border border-slate-800 text-slate-400 px-2 py-1 rounded-md">{d}</span>
                                    ))}
                                </div>
                                
                                <div className="mt-auto flex items-center gap-2 text-xs text-slate-500 bg-slate-950/30 px-3 py-2 rounded-lg w-full justify-center lg:justify-start">
                                    <MapPin className="w-3 h-3" /> {doc.location || "Bureau non assigné"}
                                </div>
                            </div>

                            {/* PARTIE DROITE : CALENDRIER */}
                            <div className="flex-1 bg-slate-950/20 p-4 lg:p-6 flex flex-col">
                                <div className="flex justify-between items-center mb-4">
                                    <button onClick={() => setWeekOffset(prev => Math.max(0, prev - 1))} disabled={weekOffset === 0} 
                                        className={`p-2 rounded-lg transition-all ${weekOffset === 0 ? 'text-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <span className="text-xs font-bold text-slate-500 tracking-[0.2em]">PLANNING SEMAINE {weekOffset + 1}</span>
                                    <button onClick={() => setWeekOffset(prev => prev + 1)} className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x">
                                    {displayDays.map((day, dIdx) => (
                                        <div key={dIdx} className="snap-start flex-shrink-0 w-[120px] bg-slate-900/40 rounded-2xl border border-slate-800 overflow-hidden group/day hover:border-slate-600 transition-colors">
                                            <div className="bg-slate-900/80 p-3 text-center border-b border-slate-800">
                                                <div className="text-[10px] font-bold text-slate-500 uppercase">{day.dayName}</div>
                                                <div className="text-xl font-black text-white group-hover/day:text-blue-400 transition-colors">{day.dayNum}</div>
                                                <div className="text-[9px] font-bold text-slate-600 uppercase">{day.month}</div>
                                            </div>
                                            <div className="p-2 space-y-2 h-[200px] overflow-y-auto custom-scrollbar">
                                                {DEFAULT_SLOTS.map((time, tIdx) => {
                                                    const isBooked = doc.booked && doc.booked[day.key] && doc.booked[day.key].includes(time);
                                                    return isBooked ? (
                                                        <div key={tIdx} className="w-full py-2 bg-slate-800/30 rounded-lg border border-slate-800 text-slate-600 text-[10px] font-bold text-center flex items-center justify-center gap-1 opacity-50 cursor-not-allowed">
                                                            <Lock className="w-2.5 h-2.5" />
                                                        </div>
                                                    ) : (
                                                        <button key={tIdx} onClick={() => handleSlotClick(doc, day.labelFull, day.key, time)}
                                                            className="w-full py-2 bg-blue-500/5 hover:bg-blue-600 hover:text-white text-blue-400 rounded-lg text-[11px] font-bold transition-all border border-blue-500/20 hover:border-transparent hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                                                            {time}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="glass-panel p-12 rounded-3xl text-center border-dashed border-2 border-slate-800 flex flex-col items-center">
                        <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-6 shadow-inner">
                            <Search className="w-8 h-8 text-slate-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Aucun praticien trouvé</h3>
                        <p className="text-slate-500 max-w-md mx-auto mb-8">Nous n'avons trouvé aucun médecin correspondant à vos critères actuels.</p>
                        <button onClick={() => {setSearchTerm(""); setSelectedDept("ALL");}} className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/25">
                            Réinitialiser la recherche
                        </button>
                    </div>
                )}
            </div>
        )}
      </main>

      {/* --- MODAL DE RÉSERVATION --- */}
      {isModalOpen && selectedRdv && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
            <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-md transition-opacity" onClick={() => setIsModalOpen(false)}></div>
            
            <div className="relative w-full max-w-lg bg-[#0f172a] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden flex flex-col max-h-[90vh] animate-slide-up">
                {/* Header Modal */}
                <div className="relative bg-slate-900 p-6 pb-8 border-b border-slate-800">
                    <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
                    <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedRdv.doctor.color === 'blue' ? 'from-blue-500 to-blue-700' : 'from-slate-500 to-slate-700'} flex items-center justify-center shadow-lg`}>
                            <Calendar className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Confirmation RDV</h3>
                            <p className="text-sm text-slate-400 flex items-center gap-2">
                                Dr. {selectedRdv.doctor.name} <span className="w-1 h-1 rounded-full bg-slate-600"></span> {selectedRdv.time}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 overflow-y-auto custom-scrollbar">
                    {modalStep === 0 && (
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Sélectionnez le service</h4>
                            <div className="grid gap-3">
                                {selectedRdv.doctor.dept.map((dept, i) => {
                                    const deptInfo = DEPARTMENTS.find(d => d.id === dept) || {};
                                    return (
                                        <button key={i} onClick={() => { setFormData(prev => ({ ...prev, specificDept: dept })); setModalStep(1); }}
                                            className="w-full p-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-blue-500 rounded-xl transition-all flex items-center justify-between group">
                                            <span className="font-bold">{dept}</span>
                                            <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {modalStep === 1 && (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Patient</label>
                                    <input required type="text" name="fullName" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} placeholder="Nom Prénom" className="w-full bg-slate-950/50 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Téléphone</label>
                                    <input required type="tel" name="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="555-..." className="w-full bg-slate-950/50 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                                </div>
                                {(formData.specificDept === 'MATERNITÉ' || formData.specificDept === 'A.M.S') && (
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-400 uppercase ml-1">Date de Naissance</label>
                                        <input required type="date" name="dob" value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} className="w-full bg-slate-950/50 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-blue-500 outline-none" />
                                    </div>
                                )}
                                {formData.specificDept === 'A.M.S' && (
                                    <div className="space-y-1 p-3 bg-red-950/20 border border-red-900/50 rounded-xl">
                                        <label className="text-xs font-bold text-red-400 uppercase ml-1">Identité du défunt</label>
                                        <input required type="text" name="deceasedName" value={formData.deceasedName} onChange={(e) => setFormData({...formData, deceasedName: e.target.value})} className="w-full bg-slate-950/50 border border-red-900/50 rounded-lg p-3 text-sm text-white focus:border-red-500 outline-none" />
                                    </div>
                                )}
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Motif</label>
                                    <input required type="text" name="reason" value={formData.reason} onChange={(e) => setFormData({...formData, reason: e.target.value})} className="w-full bg-slate-950/50 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-blue-500 outline-none" />
                                </div>
                            </div>
                            <button type="submit" disabled={bookingLoading} className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl font-bold uppercase tracking-widest shadow-lg shadow-blue-900/30 transition-all transform active:scale-95 flex justify-center items-center gap-2">
                                {bookingLoading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Confirmer"}
                            </button>
                        </form>
                    )}

                    {modalStep === 2 && (
                        <div className="text-center py-8">
                            <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in">
                                <CheckCircle className="w-12 h-12 text-emerald-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">RDV Validé !</h3>
                            <p className="text-slate-400 mb-8">Votre rendez-vous a été transmis au Dr. {selectedRdv.doctor.name}.</p>
                            <button onClick={() => setIsModalOpen(false)} className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold uppercase transition-colors">Fermer</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Rdv;