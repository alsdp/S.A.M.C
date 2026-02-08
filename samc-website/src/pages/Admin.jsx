import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ShieldAlert, Trash2, UserPlus, Stethoscope, 
  MapPin, Save, Upload, Loader2, Search, Users, 
  CalendarDays, Phone, X, FileText, Clock, Check, AlertCircle, RefreshCw,
  Pen, Lock, LogOut, Key 
} from 'lucide-react';

// --- CONFIGURATION ---
const API_URL = "http://localhost/api/admin.php";
const ADMIN_PASSWORD = "S@MC-Riviere-Bleu-99!"; 

const AVAILABLE_DEPTS = [
    { id: 'CONSULTATION GÉNÉRALE', label: 'Général', color: 'bg-blue-500' }, 
    { id: 'CHIRURGIE', label: 'Chirurgie', color: 'bg-red-500' },
    { id: 'PSYCHOLOGIE', label: 'Psy', color: 'bg-purple-500' },
    { id: 'MATERNITÉ', label: 'Maternité', color: 'bg-pink-500' },
    { id: 'A.M.S', label: 'A.M.S', color: 'bg-orange-500' },
    { id: 'S.A.R', label: 'S.A.R', color: 'bg-yellow-500' }
];

// --- COMPOSANT TOAST (Notification) ---
const Toast = ({ message, type, onClose }) => (
  <div className={`fixed top-4 right-4 z-[100] flex items-center gap-3 px-4 py-3 rounded-lg shadow-xl border border-white/10 backdrop-blur-md animate-slide-in ${type === 'error' ? 'bg-red-900/90 text-red-100' : 'bg-emerald-900/90 text-emerald-100'}`}>
    {type === 'error' ? <AlertCircle className="w-5 h-5" /> : <Check className="w-5 h-5" />}
    <span className="font-medium text-sm">{message}</span>
    <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100"><X className="w-4 h-4" /></button>
  </div>
);

const Admin = () => {
  // --- GESTION AUTHENTIFICATION ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState(false);

  // Vérifier si déjà connecté au chargement
  useEffect(() => {
    const isLogged = localStorage.getItem('samc_admin_auth');
    if (isLogged === 'true') {
        setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
        setIsAuthenticated(true);
        localStorage.setItem('samc_admin_auth', 'true');
        setAuthError(false);
    } else {
        setAuthError(true);
        setPasswordInput("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('samc_admin_auth');
    setDoctors([]); // Vider les données pour sécurité
  };

  // --- ETATS ---
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null); 

  // États Gestion Médecins
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({ name: '', job: '', location: '', depts: [], image: null });

  // États Filtres
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDept, setFilterDept] = useState("ALL");

  // États RDV
  const [viewRdvDoc, setViewRdvDoc] = useState(null);
  const [rdvList, setRdvList] = useState([]);
  const [loadingRdv, setLoadingRdv] = useState(false);

  // --- HELPERS ---
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // --- API CALLS ---
  const fetchDoctors = useCallback(async () => {
    // 🔒 SÉCURITÉ : Ne pas fetch si pas connecté
    if (!isAuthenticated) return;

    setLoading(true);
    try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Erreur serveur");
        const data = await res.json();
        setDoctors(Array.isArray(data) ? data : []);
    } catch (err) { 
        console.error(err); 
        showToast("Impossible de charger la liste du personnel.", "error");
    } finally {
        setLoading(false);
    }
  }, [isAuthenticated]); // Dépend de isAuthenticated

  // Lancer le fetch uniquement quand on devient authentifié
  useEffect(() => { 
      if (isAuthenticated) {
          fetchDoctors(); 
      }
  }, [isAuthenticated, fetchDoctors]);

  const handleViewRdv = async (doc) => {
      setViewRdvDoc(doc);
      setLoadingRdv(true);
      try {
          const res = await fetch(`${API_URL}?doctor_id=${doc.id}`);
          const data = await res.json();
          setRdvList(Array.isArray(data) ? data : []);
      } catch (err) {
          console.error(err);
          showToast("Erreur lors du chargement des rendez-vous.", "error");
      } finally {
          setLoadingRdv(false);
      }
  };

  // --- GESTION FORMULAIRE ---
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
          setFormData({ ...formData, image: file });
          setPreview(URL.createObjectURL(file));
      }
  };

  const toggleDept = (deptId) => {
    setFormData(prev => {
        const newDepts = prev.depts.includes(deptId) 
            ? prev.depts.filter(d => d !== deptId) 
            : [...prev.depts, deptId];
        return { ...prev, depts: newDepts };
    });
  };

  const resetForm = () => {
    setIsEditing(false); 
    setEditId(null);
    setFormData({ name: '', job: '', location: '', depts: [], image: null });
    setPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.name || !formData.job || formData.depts.length === 0) 
        return showToast("Veuillez remplir les champs obligatoires (Nom, Job, Départements).", "error");
    
    setIsSubmitting(true);

    const data = new FormData();
    data.append('name', formData.name);
    data.append('job', formData.job);
    data.append('location', formData.location);
    data.append('depts', JSON.stringify(formData.depts));
    if (formData.image) data.append('image', formData.image);
    if (isEditing) data.append('id', editId);

    try {
        const res = await fetch(API_URL, { method: 'POST', body: data });
        const result = await res.json();
        if (result.success) { 
            resetForm(); 
            fetchDoctors();
            showToast(isEditing ? "Médecin modifié avec succès." : "Nouveau médecin ajouté.");
        } else { 
            throw new Error(result.error);
        }
    } catch (err) { 
        console.error(err);
        showToast("Erreur lors de l'enregistrement : " + err.message, "error");
    } finally { 
        setIsSubmitting(false); 
    }
  };

  const handleEdit = (doc) => {
    setIsEditing(true); setEditId(doc.id);
    let safeDepts = [];
    if (Array.isArray(doc.dept)) safeDepts = doc.dept;
    else if (typeof doc.dept === 'string') safeDepts = JSON.parse(doc.dept || '[]');
    
    setFormData({ name: doc.name, job: doc.job, location: doc.location || '', depts: safeDepts, image: null });
    setPreview(doc.avatar || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if(!window.confirm("Êtes-vous sûr de vouloir supprimer ce dossier ? Cette action est irréversible.")) return;
    try {
        await fetch(API_URL, { method: 'DELETE', body: JSON.stringify({ id }) });
        fetchDoctors();
        showToast("Dossier supprimé.", "success");
    } catch (err) { 
        console.error(err);
        showToast("Erreur lors de la suppression.", "error");
    }
  };

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doc => {
        const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              doc.job.toLowerCase().includes(searchTerm.toLowerCase());
        let docDepts = Array.isArray(doc.dept) ? doc.dept : (typeof doc.dept === 'string' ? [doc.dept] : []);
        if(docDepts.length === 1 && docDepts[0].startsWith('[')) {
             try { docDepts = JSON.parse(docDepts[0]); } catch(e){}
        }
        const matchesDept = filterDept === "ALL" || docDepts.includes(filterDept);
        return matchesSearch && matchesDept;
    });
  }, [doctors, searchTerm, filterDept]);

  // 🔒 --- ÉCRAN DE CONNEXION ---
  if (!isAuthenticated) {
    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>
            </div>

            <div className="w-full max-w-md bg-slate-900/50 border border-slate-700/50 p-8 rounded-2xl shadow-2xl backdrop-blur-xl relative z-10 animate-in fade-in zoom-in duration-300">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-700 shadow-inner">
                        <Lock className="w-8 h-8 text-red-500" />
                    </div>
                    <h1 className="text-2xl font-black text-white tracking-widest uppercase">Accès Restreint</h1>
                    <p className="text-slate-400 text-sm mt-2 text-center">Cette zone est réservée à la direction du S.A.M.C.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">Mot de passe de sécurité</label>
                        <div className="relative">
                            <Key className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                            <input 
                                type="password" 
                                value={passwordInput} 
                                onChange={(e) => setPasswordInput(e.target.value)}
                                placeholder="••••••••"
                                className={`w-full bg-slate-950 border ${authError ? 'border-red-500 focus:border-red-500 animate-shake' : 'border-slate-700 focus:border-blue-500'} rounded-lg p-3 pl-10 text-white outline-none transition-all placeholder:text-slate-700`}
                                autoFocus
                            />
                        </div>
                        {authError && <p className="text-xs text-red-500 font-bold ml-1">Mot de passe incorrect.</p>}
                    </div>

                    <button type="submit" className="w-full bg-white text-slate-900 font-black py-3 rounded-lg uppercase tracking-widest hover:bg-slate-200 transition-colors shadow-lg">
                        Déverrouiller
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <Link to="/" className="text-xs text-slate-500 hover:text-white transition-colors flex items-center justify-center gap-2">
                        <ArrowLeft className="w-3 h-3" /> Retour à l'accueil
                    </Link>
                </div>
            </div>
        </div>
    );
  }

  // --- INTERFACE ADMIN (Si Connecté) ---
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans p-4 sm:p-8 relative selection:bg-blue-500/30">
      
      {/* NOTIFICATIONS */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* MODALE RDV */}
      {viewRdvDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setViewRdvDoc(null)}></div>
            <div className="relative bg-[#0f172a] border border-slate-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in duration-200">
                <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800/30">
                    <div>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <CalendarDays className="w-5 h-5 text-blue-400" /> Agenda
                        </h3>
                        <p className="text-sm text-slate-400">Praticien : <span className="text-white font-medium">{viewRdvDoc.name}</span></p>
                    </div>
                    <button onClick={() => setViewRdvDoc(null)} className="p-2 hover:bg-slate-700/50 rounded-full transition-colors text-slate-400 hover:text-white"><X className="w-6 h-6" /></button>
                </div>
                
                <div className="overflow-y-auto p-6 custom-scrollbar bg-[#0f172a]">
                    {loadingRdv ? (
                        <div className="flex flex-col items-center justify-center py-12 gap-3 text-slate-500">
                            <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                            <span className="text-sm">Synchronisation des agendas...</span>
                        </div>
                    ) : rdvList.length > 0 ? (
                        <div className="space-y-3">
                            {rdvList.map((rdv) => (
                                <div key={rdv.id} className="group bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-slate-600 p-4 rounded-xl flex flex-col sm:flex-row gap-5 transition-all">
                                    <div className="flex items-center gap-4 w-full sm:w-auto">
                                        <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/20 text-blue-400 p-3 rounded-xl text-center min-w-[70px] flex flex-col justify-center">
                                            <div className="text-[10px] font-bold uppercase tracking-wider">{new Date(rdv.date).toLocaleDateString('fr-FR', { month: 'short' })}</div>
                                            <div className="text-2xl font-black text-white">{new Date(rdv.date).getDate()}</div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 text-white font-bold text-base"><Clock className="w-4 h-4 text-emerald-400" /> {rdv.time}</div>
                                            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] uppercase font-bold tracking-wide mt-1 border border-emerald-500/20">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Confirmé
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 sm:border-l border-slate-700/50 sm:pl-5 pt-4 sm:pt-0 border-t sm:border-t-0 mt-2 sm:mt-0">
                                        <div className="font-bold text-white text-lg">{rdv.patient_name}</div>
                                        <div className="flex items-center gap-2 text-sm text-slate-400 mt-1 mb-3"><Phone className="w-3.5 h-3.5" /> {rdv.patient_phone}</div>
                                        <div className="bg-[#020617] p-2.5 rounded-lg text-xs text-slate-300 border border-slate-700/50 flex gap-2 leading-relaxed">
                                            <FileText className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-slate-500" /> 
                                            {rdv.reason}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 text-slate-500 border-2 border-dashed border-slate-800 rounded-xl bg-slate-900/20">
                            <CalendarDays className="w-14 h-14 mx-auto mb-4 opacity-20" />
                            <p className="font-medium">Aucun rendez-vous planifié.</p>
                            <p className="text-xs opacity-60 mt-1">Le praticien est disponible.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
      )}

      {/* HEADER PAGE */}
      <div className="max-w-7xl mx-auto mb-10 border-b border-white/5 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
            <Link to="/rdv" className="group inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-blue-400 mb-3 transition-colors">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> RETOUR AU PLANNING
            </Link>
            <h1 className="text-3xl md:text-4xl font-black text-white flex items-center gap-4 tracking-tight">
                <span className="bg-red-600/10 p-2 rounded-lg border border-red-500/20"><ShieldAlert className="text-red-500 w-8 h-8" /></span>
                ADMINISTRATION
            </h1>
            <p className="mt-2 text-slate-400 text-sm">Gestion des effectifs médicaux et des accréditations.</p>
        </div>
        <div className="flex items-center gap-4">
            <button onClick={fetchDoctors} className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all"><RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} /></button>
            
            {/* BOUTON DÉCONNEXION */}
            <button onClick={handleLogout} className="group p-2.5 rounded-lg bg-red-900/20 border border-red-900/50 text-red-400 hover:bg-red-600 hover:text-white transition-all flex items-center gap-2" title="Se déconnecter">
                <LogOut className="w-5 h-5" />
                <span className="text-xs font-bold uppercase hidden md:inline">Déconnexion</span>
            </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* --- COLONNE GAUCHE : FORMULAIRE --- */}
        <div className="lg:col-span-4">
            <div className={`sticky top-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 overflow-hidden ${isEditing ? 'bg-blue-950/20 border-blue-500/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]' : 'bg-slate-900/40 border-slate-700/60'}`}>
                
                {/* En-tête Formulaire */}
                <div className={`p-5 border-b ${isEditing ? 'border-blue-500/20 bg-blue-500/5' : 'border-slate-700/50 bg-slate-800/30'} flex justify-between items-center`}>
                    <h2 className={`text-lg font-bold flex items-center gap-2 ${isEditing ? 'text-blue-400' : 'text-white'}`}>
                        {isEditing ? <><Pen className="w-4 h-4" /> Modification</> : <><UserPlus className="w-4 h-4" /> Nouveau Profil</>}
                    </h2>
                    {isEditing && (
                        <button onClick={resetForm} className="text-xs bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-md text-slate-300 transition-colors border border-slate-700">
                            Annuler
                        </button>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="p-5 space-y-5">
                    {/* Upload Avatar */}
                    <div className="flex justify-center mb-6">
                        <label className="cursor-pointer relative group">
                            <div className={`w-32 h-32 rounded-full overflow-hidden border-4 flex items-center justify-center bg-[#020617] transition-all shadow-xl ${preview ? 'border-blue-500' : 'border-slate-700 group-hover:border-slate-500'}`}>
                                {preview ? 
                                    <img src={preview} alt="Preview" className="w-full h-full object-cover" /> : 
                                    <Upload className="w-10 h-10 text-slate-600 group-hover:text-slate-400 transition-colors" />
                                }
                            </div>
                            <div className="absolute bottom-1 right-1 bg-blue-600 p-2 rounded-full border-4 border-[#020617] text-white shadow-lg group-hover:scale-110 transition-transform">
                                <Pen className="w-3.5 h-3.5" />
                            </div>
                            <input type="file" onChange={handleFileChange} className="hidden" accept="image/*" />
                        </label>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">Identité Civile</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Dr. Nom Prénom" className="w-full bg-slate-950/50 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 rounded-lg text-white text-sm outline-none transition-all placeholder:text-slate-600" />
                        </div>
                        
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">Spécialisation</label>
                            <div className="relative group">
                                <Stethoscope className="absolute left-3 top-3 w-5 h-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                                <input type="text" name="job" value={formData.job} onChange={handleChange} placeholder="Ex: Cardiologue" className="w-full bg-slate-950/50 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 pl-10 rounded-lg text-white text-sm outline-none transition-all placeholder:text-slate-600" />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">Affectations</label>
                            <div className="grid grid-cols-2 gap-2 p-2 bg-slate-950/30 rounded-lg border border-slate-800">
                                {AVAILABLE_DEPTS.map((dept) => (
                                    <div key={dept.id} onClick={() => toggleDept(dept.id)} 
                                        className={`flex items-center justify-center gap-2 p-2 rounded-md cursor-pointer transition-all border text-xs font-medium text-center
                                        ${formData.depts.includes(dept.id) 
                                            ? `${dept.color} bg-opacity-20 border-${dept.color.split('-')[1]}-500/50 text-white shadow-[0_0_10px_-3px_rgba(255,255,255,0.2)]` 
                                            : 'border-slate-800 text-slate-500 hover:bg-slate-800 hover:text-slate-300'}`}>
                                        {dept.label}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">Localisation (Bureau)</label>
                            <div className="relative group">
                                <MapPin className="absolute left-3 top-3 w-5 h-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                                <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Ex: Aile B - 204" className="w-full bg-slate-950/50 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 pl-10 rounded-lg text-white text-sm outline-none transition-all placeholder:text-slate-600" />
                            </div>
                        </div>
                    </div>

                    <button type="submit" disabled={isSubmitting} 
                        className={`w-full font-bold py-3.5 rounded-lg uppercase tracking-widest flex items-center justify-center gap-3 mt-6 transition-all text-sm shadow-lg
                        ${isSubmitting ? 'bg-slate-800 text-slate-400 cursor-wait' 
                        : isEditing ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/20' 
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/20 hover:scale-[1.02]'}`}>
                        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />} 
                        {isEditing ? "Enregistrer les modifications" : "Ajouter au personnel"}
                    </button>
                </form>
            </div>
        </div>

        {/* --- COLONNE DROITE : LISTE --- */}
        <div className="lg:col-span-8">
            {/* Barre de filtre */}
            <div className="bg-slate-900/60 border border-slate-700/60 p-5 rounded-2xl mb-6 sticky top-8 z-10 backdrop-blur-xl shadow-2xl">
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-5">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2"><Users className="w-5 h-5 text-blue-400" /> Annuaire du Personnel</h2>
                    <div className="relative w-full md:w-72 group">
                        <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                        <input type="text" placeholder="Rechercher par nom ou poste..." 
                            className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                            value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    <button onClick={() => setFilterDept("ALL")} className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border transition-all ${filterDept === "ALL" ? 'bg-white text-slate-900 border-white' : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'}`}>Tout</button>
                    {AVAILABLE_DEPTS.map((dept) => (
                        <button key={dept.id} onClick={() => setFilterDept(dept.id)} className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide border transition-all ${filterDept === dept.id ? `${dept.color} border-transparent text-white shadow-lg` : 'bg-slate-800/50 text-slate-400 border-slate-700 hover:bg-slate-700'}`}>{dept.label}</button>
                    ))}
                </div>
            </div>

            {/* Liste des résultats */}
            <div className="space-y-4 pb-20">
                {loading ? (
                    // Skeleton Loading
                    [1,2,3].map(i => (
                        <div key={i} className="bg-slate-900/30 border border-slate-800 p-4 rounded-xl flex items-center gap-4 animate-pulse">
                            <div className="w-16 h-16 bg-slate-800 rounded-full"></div>
                            <div className="flex-1 space-y-2">
                                <div className="h-4 bg-slate-800 rounded w-1/3"></div>
                                <div className="h-3 bg-slate-800 rounded w-1/4"></div>
                            </div>
                        </div>
                    ))
                ) : filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doc) => (
                        <div key={doc.id} className="group bg-slate-900/40 border border-slate-800 hover:border-slate-600 hover:bg-slate-800/60 p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between transition-all duration-200">
                            
                            <div className="flex items-center gap-5 w-full sm:w-auto">
                                <div className="flex-shrink-0 relative">
                                    {doc.avatar ? (
                                        <img src={doc.avatar} alt="Avatar" className="w-16 h-16 rounded-full object-cover border-2 border-slate-700 group-hover:border-slate-500 transition-colors" />
                                    ) : (
                                        <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center border-2 border-slate-700 group-hover:border-slate-500 transition-colors">
                                            <span className="text-xl font-bold text-slate-500">{doc.name.charAt(0)}</span>
                                        </div>
                                    )}
                                    {/* Badge Compteur RDV */}
                                    {doc.rdv_count > 0 && (
                                        <div className="absolute -top-1 -right-1 flex h-5 w-5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 text-white text-[10px] font-bold items-center justify-center border border-[#020617]">{doc.rdv_count}</span>
                                        </div>
                                    )}
                                </div>
                                
                                <div className="text-center sm:text-left">
                                    <h3 className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">{doc.name}</h3>
                                    <p className="text-sm text-slate-400 mb-2 flex items-center justify-center sm:justify-start gap-2">
                                        {doc.job}
                                        {doc.location && <span className="text-xs bg-slate-800 px-1.5 py-0.5 rounded text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> {doc.location}</span>}
                                    </p>
                                    <div className="flex flex-wrap justify-center sm:justify-start gap-1.5">
                                        {/* Parsing safe des depts pour affichage */}
                                        {(() => {
                                            let depts = Array.isArray(doc.dept) ? doc.dept : (typeof doc.dept === 'string' ? [doc.dept] : []);
                                            if(depts.length === 1 && depts[0].startsWith('[')) { try { depts = JSON.parse(depts[0]); } catch(e){} }
                                            return depts.map((d,i) => {
                                                const deptConfig = AVAILABLE_DEPTS.find(ad => ad.id === d);
                                                return (
                                                    <span key={i} className={`text-[10px] font-bold px-2 py-0.5 rounded-sm border ${deptConfig ? `bg-opacity-10 border-opacity-30 ${deptConfig.color.replace('bg-', 'text-')} border-${deptConfig.color.split('-')[1]}-500` : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
                                                        {deptConfig ? deptConfig.label : d}
                                                    </span>
                                                )
                                            });
                                        })()}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 w-full sm:w-auto justify-center mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                                <button onClick={() => handleViewRdv(doc)} className="flex flex-col items-center gap-1 group/btn p-2 rounded-lg hover:bg-slate-800 transition-colors min-w-[60px]">
                                    <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg group-hover/btn:bg-emerald-500 group-hover/btn:text-white transition-colors">
                                        <CalendarDays className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-500 group-hover/btn:text-slate-300">Agenda</span>
                                </button>
                                
                                <div className="w-px h-8 bg-slate-800 mx-1"></div>

                                <button onClick={() => handleEdit(doc)} className="flex flex-col items-center gap-1 group/btn p-2 rounded-lg hover:bg-slate-800 transition-colors min-w-[60px]">
                                    <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg group-hover/btn:bg-blue-500 group-hover/btn:text-white transition-colors">
                                        <Pen className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-500 group-hover/btn:text-slate-300">Editer</span>
                                </button>

                                <button onClick={() => handleDelete(doc.id)} className="flex flex-col items-center gap-1 group/btn p-2 rounded-lg hover:bg-slate-800 transition-colors min-w-[60px]">
                                    <div className="p-2 bg-red-500/10 text-red-500 rounded-lg group-hover/btn:bg-red-500 group-hover/btn:text-white transition-colors">
                                        <Trash2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-500 group-hover/btn:text-slate-300">Suppr.</span>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 border-2 border-dashed border-slate-800 rounded-2xl bg-slate-900/20">
                        <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-8 h-8 text-slate-500" />
                        </div>
                        <h3 className="text-white font-bold text-lg">Aucun résultat</h3>
                        <p className="text-slate-500 text-sm mb-4">Aucun praticien ne correspond à vos critères.</p>
                        <button onClick={() => {setSearchTerm(""); setFilterDept("ALL");}} className="text-blue-400 text-xs font-bold uppercase tracking-wider hover:text-blue-300 hover:underline">
                            Effacer les filtres
                        </button>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;