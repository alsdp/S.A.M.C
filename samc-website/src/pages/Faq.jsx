import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, HelpCircle, MessageCircle, FileText, Search } from 'lucide-react';

const Faq = () => {
    // Remonter en haut de page au chargement
    useEffect(() => { window.scrollTo(0, 0); }, []);

    // État pour gérer quelle question est ouverte (null = aucune)
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Données des questions (Basé sur ton image + ajouts RP)
    const faqData = [
        {
            question: "Comment dois-je procéder pour faire ma candidature ?",
            answer: (
                <>
                    Pour pouvoir faire votre candidature au sein du S.A.M.C, il vous faut simplement postuler avec le formulaire que vous pourrez trouver en <span className="text-blue-400 font-bold cursor-pointer hover:underline">cliquant ici</span>.
                    Nous traitons les dossiers sous 48h maximum.
                </>
            )
        },
        {
            question: "Dois-je avoir des compétences en médecine pour rejoindre le S.A.M.C ?",
            answer: "Non, vous n'avez pas besoin d'avoir des compétences en médecine pour pouvoir rejoindre le S.A.M.C. Notre équipe encadrante vous dirigera et vous encadrera pour que vous deveniez le médecin de demain via nos formations internes (P1, P2, Spécialisation)."
        },
        {
            question: "Je souhaite prendre un rendez-vous.",
            answer: (
                <>
                    Vous souhaitez prendre rendez-vous ? Il vous suffit de remplir le formulaire suivant en <span className="text-blue-400 font-bold cursor-pointer hover:underline">cliquant ici</span>.
                    Un médecin vous contactera pour confirmer l'horaire.
                </>
            )
        },
        // Ajout de questions supplémentaires pour remplir la page
        {
            question: "Quels sont les tarifs des soins médicaux ?",
            answer: "Les soins d'urgence vitale sont pris en charge par l'État. Pour les consultations spécialisées (PSSD, Chirurgie esthétique), une grille tarifaire est disponible à l'accueil du Pillbox Hill Medical Center."
        },
    ];

    return (
        <div className="min-h-screen bg-[#09090b] text-white font-sans selection:bg-blue-600">

            {/* --- BACKGROUND AMBIANCE --- */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[200px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[150px]"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
            </div>

            {/* --- HEADER --- */}
            <header className="relative z-10 pt-10 pb-20 container mx-auto px-6">
                <nav className="flex justify-between items-center mb-16">
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition font-mono text-xs uppercase tracking-widest group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour au QG
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-mono text-gray-500 uppercase">Support Online</span>
                    </div>
                </nav>

                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-6 border border-blue-500/20">
                        <HelpCircle className="w-8 h-8 text-blue-400" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-anton uppercase text-white mb-6 tracking-tight">
                        Centre d'<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Aide</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Vous avez des questions sur le recrutement, les soins ou les procédures ?
                        Consultez notre base de connaissances ci-dessous.
                    </p>
                </div>
            </header>

            {/* --- CONTENU FAQ --- */}
            <div className="relative z-10 container mx-auto px-6 pb-32">
                <div className="max-w-4xl mx-auto">

                    {/* Titre Section (Style Image Référence) */}
                    <div className="mb-10 flex items-center gap-4">
                        <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
                        <h2 className="text-3xl font-anton text-white tracking-wide">
                            Questions fréquentes <span className="text-blue-500">:</span>
                        </h2>
                    </div>

                    {/* Accordéon */}
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className={`group border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'bg-white/[0.03] border-blue-500/30' : 'bg-transparent hover:bg-white/[0.02]'}`}
                            >
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className={`text-lg font-medium pr-8 transition-colors ${activeIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                                        {item.question}
                                    </span>
                                    <div className={`p-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-blue-600 text-white rotate-180' : 'bg-white/5 text-gray-400 group-hover:bg-white/10'}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-6 pt-0 text-gray-400 leading-relaxed text-sm md:text-base border-t border-white/5 mt-2">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Contact Rapide */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 text-center hover:border-blue-500/40 transition-colors">
                            <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                            <h3 className="font-anton text-xl mb-2">Support Direct</h3>
                            <p className="text-sm text-gray-400 mb-4">Besoin d'une réponse immédiate ?</p>
                            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded text-sm font-bold uppercase tracking-widest transition-colors">
                                Rejoindre le Discord
                            </button>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/20 to-transparent border border-white/10 text-center hover:border-white/20 transition-colors">
                            <FileText className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                            <h3 className="font-anton text-xl mb-2">Documents</h3>
                            <p className="text-sm text-gray-400 mb-4">Accès aux formulaires officiels</p>
                            <button className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded text-sm font-bold uppercase tracking-widest transition-colors">
                                Intranet Gouvernement
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Faq;