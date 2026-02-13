
import React from 'react';
import { Language } from '../types';

const ServicesView: React.FC<{ lang: Language }> = ({ lang }) => {
  const services = [
    {
      title: lang === 'FR' ? "Audit Stratégique IA" : "Strategic AI Audit",
      desc: lang === 'FR' 
        ? "Ne devinez plus, mesurez. Nous plongeons dans l'architecture de votre entreprise pour identifier les goulots d'étranglement automatisables."
        : "Stop guessing, start measuring. We dive into your company's architecture to identify automatable bottlenecks.",
      icon: "🎯",
      tag: lang === 'FR' ? "STRATÉGIE & ROI" : "STRATEGY & ROI",
      prompt: lang === 'FR' 
        ? "Je souhaite démarrer l'étude pour un Audit Stratégique IA. Quelles informations devez-vous collecter ?"
        : "I want to start the study for a Strategic AI Audit. What information do you need to collect?"
    },
    {
      title: lang === 'FR' ? "Formation IA Équipes" : "AI Team Training",
      desc: lang === 'FR'
        ? "L'IA n'est rien sans l'humain. Nous formons vos collaborateurs à la maîtrise des outils génératifs et à l'automatisation métier."
        : "AI is nothing without humans. We train your staff to master generative tools and business automation.",
      icon: "🎓",
      tag: lang === 'FR' ? "CAPITAL HUMAIN" : "HUMAN CAPITAL",
      prompt: lang === 'FR'
        ? "Je suis intéressé par la formation IA pour mes équipes. Quels sont vos programmes de formation ?"
        : "I'm interested in AI training for my teams. What are your training programs?"
    },
    {
      title: lang === 'FR' ? "Développement Custom" : "Custom Development",
      desc: lang === 'FR'
        ? "Votre vision mérite son propre code. Nous concevons des ERP intelligents, des CRM prédictifs et des applications mobiles nativement dotées d'IA."
        : "Your vision deserves its own code. We design intelligent ERPs, predictive CRMs, and mobile apps natively powered by AI.",
      icon: "💻",
      tag: lang === 'FR' ? "INGÉNIERIE SUR MESURE" : "CUSTOM ENGINEERING",
      prompt: lang === 'FR'
        ? "J'ai un projet de développement d'IA sur mesure. Pouvons-nous discuter de la faisabilité technique ?"
        : "I have a custom AI development project. Can we discuss the technical feasibility?"
    },
    {
      title: lang === 'FR' ? "Maintenance & Veille" : "Maintenance & Support",
      desc: lang === 'FR'
        ? "L'IA évolue chaque jour. Nous assurons la mise à jour constante de vos modèles, la sécurité de vos données et une veille technologique."
        : "AI evolves every day. We ensure constant updates of your models, data security, and technology monitoring.",
      icon: "⚡",
      tag: lang === 'FR' ? "VEILLE ACTIVE" : "ACTIVE MONITORING",
      prompt: lang === 'FR'
        ? "Je recherche une prestation de maintenance et de veille technologique pour mes solutions IA existantes."
        : "I'm looking for maintenance and tech watch services for my existing AI solutions."
    }
  ];

  const texts = {
    badge: lang === 'FR' ? "Expertise de Pointe" : "Cutting-edge Expertise",
    growthTag: lang === 'FR' ? "Ingénierie de Croissance" : "Growth Engineering",
    title: lang === 'FR' ? "SERVICES D'ÉLITE" : "ELITE SERVICES",
    sub: lang === 'FR' 
      ? "Propulser votre business dans l'ère de l'intelligence artificielle avec une expertise certifiée."
      : "Propel your business into the AI era with certified expertise.",
    btn: lang === 'FR' ? "Démarrer l'étude" : "Start study",
  };

  const handleAction = (prompt: string) => {
    window.dispatchEvent(new CustomEvent('open-chatbot', { detail: { initialMessage: prompt } }));
  };

  return (
    <div className="relative min-h-screen pt-40 pb-32 px-6 overflow-hidden bg-data-flow flex flex-col items-center">
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center w-full">
        {/* Header Section Centré Optiquement */}
        <div className="text-center mb-24 animate-fade-in w-full flex flex-col items-center">
          <div className="inline-flex flex-col items-center mb-10">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-lime/5 text-lime border border-lime/20 rounded-full text-[9px] font-tech font-bold tracking-[0.5em] uppercase shadow-[0_0_20px_rgba(137,201,41,0.05)] mb-4">
              {texts.badge}
            </div>
            <p className="text-[10px] text-white/30 font-tech uppercase tracking-[0.4em]">{texts.growthTag}</p>
          </div>
          
          <div className="relative inline-block mb-8 text-center w-full">
            <h2 className="text-5xl md:text-8xl font-tech font-bold uppercase tracking-tighter gradient-text leading-none text-center">
              {texts.title}
            </h2>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/4 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent"></div>
          </div>
          
          <p className="text-lg md:text-xl text-white/40 font-inter max-w-2xl mx-auto leading-relaxed mt-4 text-center">
            {texts.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-fade max-w-5xl mx-auto w-full">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-10 rounded-[35px] border-white/5 group relative overflow-hidden flex flex-col h-full glow-border-active transition-all duration-700"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-8">
                <div className="text-4xl group-hover:scale-125 transition-transform duration-500">{service.icon}</div>
                <span className="text-[9px] font-tech font-bold text-white/20 tracking-[0.3em] uppercase group-hover:text-lime transition-colors">
                  {service.tag}
                </span>
              </div>

              <h3 className="text-2xl font-tech font-bold text-white mb-4 uppercase tracking-tight group-hover:gradient-text transition-all">
                {service.title}
              </h3>
              
              <p className="text-white/50 text-lg leading-relaxed font-sans font-light flex-1">
                {service.desc}
              </p>

              <div 
                className="mt-8 flex items-center gap-4 cursor-pointer" 
                onClick={() => handleAction(service.prompt)}
              >
                <div className="w-10 h-10 rounded-full border border-lime/20 flex items-center justify-center bg-lime/10 group-hover:bg-lime group-hover:text-navy transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <span className="font-tech text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] group-hover:text-white">{texts.btn}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesView;
