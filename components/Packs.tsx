
import React from 'react';
import { Language } from '../types';

const Packs: React.FC<{ lang: Language }> = ({ lang }) => {
  const packs = [
    {
      id: 'connect',
      title: lang === 'FR' ? "DOULIA CONNECT" : "DOULIA CONNECT",
      subtitle: lang === 'FR' ? "Service Client WhatsApp/Web" : "WhatsApp/Web Customer Service",
      description: lang === 'FR' 
        ? "Transformez votre WhatsApp en un commercial d'élite qui ne dort jamais."
        : "Turn your WhatsApp into an elite salesperson who never sleeps.",
      features: lang === 'FR' 
        ? ["Réponse instantanée 24/7", "Prise de RDV automatique", "Zéro prospect perdu", "Polyglotte FR/EN/Pidgin"]
        : ["24/7 Instant response", "Automatic appointment booking", "Zero lost leads", "Polyglot FR/EN/Pidgin"],
      img: 'https://i.postimg.cc/kX1fmzXD/Doulia_Connect.jpg',
      prompt: lang === 'FR' 
        ? "Je souhaite déployer le pack DOULIA CONNECT pour mon service client WhatsApp. Pouvez-vous m'expliquer les étapes ?"
        : "I want to deploy the DOULIA CONNECT pack for my WhatsApp customer service. Can you explain the steps?"
    },
    {
      id: 'process',
      title: lang === 'FR' ? "DOULIA Process" : "DOULIA Process",
      subtitle: lang === 'FR' ? "Automatisation Administrative" : "Administrative Automation",
      description: lang === 'FR'
        ? "Arrêtez de payer vos talents pour faire de la saisie répétitive."
        : "Stop paying your talents to perform repetitive data entry.",
      features: lang === 'FR'
        ? ["Rapports automatiques", "Gestion documentaire OCR", "Réduction des erreurs 99%", "Gain de temps de 70%"]
        : ["Automatic reports", "OCR document management", "99% Error reduction", "70% Time savings"],
      img: 'https://i.postimg.cc/YqsfVFbS/Doulia_Process.jpg',
      prompt: lang === 'FR'
        ? "Je suis intéressé par DOULIA PROCESS pour automatiser mes tâches administratives. Comment ça marche ?"
        : "I'm interested in DOULIA PROCESS to automate my administrative tasks. How does it work?"
    },
    {
      id: 'insight',
      title: lang === 'FR' ? "DOULIA INSIGHT" : "DOULIA INSIGHT",
      subtitle: lang === 'FR' ? "Analyse de Données" : "Data Analysis",
      description: lang === 'FR'
        ? "Arrêtez de naviguer à vue. Vos données valent de l'or au Cameroun."
        : "Stop flying blind. Your data is worth its weight in gold in Cameroon.",
      features: lang === 'FR'
        ? ["Prédiction des ventes", "Comportement client", "Optimisation des stocks", "Marketing ultra-ciblé"]
        : ["Sales prediction", "Customer behavior", "Inventory optimization", "Ultra-targeted marketing"],
      img: 'https://i.postimg.cc/Wz96sqVK/Doulia_Insight.jpg',
      prompt: lang === 'FR'
        ? "Je veux transformer mes données en or avec DOULIA INSIGHT. Quelles analyses pouvez-vous faire pour mon entreprise ?"
        : "I want to turn my data into gold with DOULIA INSIGHT. What analyses can you do for my business?"
    }
  ];

  const annexServices = lang === 'FR' 
    ? "Audit Stratégique • Formation IA • Développement Custom • Maintenance • Veille Technologique • IA Conversationnelle • "
    : "Strategic Audit • AI Training • Custom Development • Maintenance • Tech Watch • Conversational AI • ";

  const texts = {
    badge: lang === 'FR' ? "Unités de Puissance" : "Power Units",
    title: lang === 'FR' ? "NOS PACKS" : "OUR PACKS",
    sub: lang === 'FR' ? "Écosystèmes d'Intelligence Métier" : "Business Intelligence Ecosystems",
    btn: lang === 'FR' ? "Déployer l'unité" : "Deploy unit",
  };

  const handleAction = (prompt: string) => {
    window.dispatchEvent(new CustomEvent('open-chatbot', { detail: { initialMessage: prompt } }));
  };

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-data-flow opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center w-full">
        {/* Header Section Centré Optiquement */}
        <div className="mb-24 text-center animate-fade-in w-full flex flex-col items-center">
          <div className="inline-flex items-center justify-center px-6 py-2 bg-lime/5 text-lime border border-lime/20 rounded-full text-[9px] font-tech font-bold mb-10 tracking-[0.5em] uppercase shadow-[0_0_20px_rgba(137,201,41,0.05)]">
            {texts.badge}
          </div>
          
          <div className="relative inline-block mb-10 text-center w-full">
            <h2 className="text-5xl md:text-8xl font-tech font-bold text-white tracking-tighter uppercase gradient-text leading-none text-center">
              {texts.title}
            </h2>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/4 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent"></div>
          </div>
          
          <p className="text-white/40 font-tech uppercase tracking-[0.5em] text-[10px] mt-4 text-center">{texts.sub}</p>
        </div>

        {/* Grid des Packs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32 w-full">
          {packs.map((pack, idx) => (
            <div 
              key={idx} 
              className="glass-card flex flex-col rounded-[45px] overflow-hidden group border-white/5 hover:border-lime/40 transition-all duration-700 hover:shadow-[0_0_80px_rgba(137,201,41,0.15)]"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={pack.img} 
                  alt={pack.title} 
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-lime/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-8 flex-1 flex flex-col relative">
                <div className="absolute top-8 right-8 text-6xl text-white/5 font-tech select-none group-hover:text-lime/5 transition-colors">0{idx+1}</div>
                
                <h3 className="text-2xl font-tech font-bold text-white mb-2 uppercase group-hover:text-lime transition-colors glitch-hover tracking-tight leading-none">
                  {pack.title}
                </h3>
                <p className="text-lime text-[10px] font-tech font-bold uppercase tracking-widest mb-6 border-b border-lime/20 pb-4 inline-block">{pack.subtitle}</p>
                
                <p className="text-white/60 font-sans text-base leading-relaxed mb-8 min-h-[4em]">{pack.description}</p>
                
                <ul className="space-y-4 mb-10 flex-1">
                  {pack.features.map((f, i) => (
                    <li key={i} className="flex gap-4 text-[10px] text-white/40 font-tech uppercase tracking-[0.2em] items-center group/item">
                      <div className="w-1.5 h-1.5 rounded-full border border-lime/30 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-lime scale-0 group-hover/item:scale-100 transition-transform"></div>
                      </div>
                      <span className="group-hover/item:text-white transition-colors">{f}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleAction(pack.prompt)}
                  className="w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-tech font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-lime hover:text-navy transition-all active:scale-95 shadow-inner"
                >
                  {texts.btn}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee de Services */}
        <div className="space-y-16 py-12 relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <div className="relative flex overflow-x-hidden">
            <div className="py-6 animate-marquee whitespace-nowrap flex items-center">
              {[1, 2].map((_, idx) => (
                <div key={idx} className="flex items-center">
                  {annexServices.split(' • ').map((service, i) => (
                    <span 
                      key={i} 
                      className={`text-3xl md:text-5xl font-tech font-bold uppercase tracking-tighter mx-12 transition-all hover:scale-110 cursor-default ${
                        i % 3 === 0 ? 'text-lime' : i % 3 === 1 ? 'text-white/80' : 'text-white/20'
                      }`}
                    >
                      {service}
                    </span>
                  ))}
                  <span className="text-3xl text-white/5 mx-12">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packs;
