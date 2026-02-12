
import React, { useState, useEffect } from 'react';
import { Language } from '../types';

const Hero: React.FC<{ lang: Language }> = ({ lang }) => {
  const texts = {
    fullText: lang === 'FR' ? "PROPULSEZ VOTRE CROISSANCE PAR L'IA" : "POWER YOUR GROWTH WITH AI",
    badge1: lang === 'FR' ? "Intelligence Artificielle Avancée" : "Advanced Artificial Intelligence",
    badge2: lang === 'FR' ? "💬 Conversationnelle" : "💬 Conversational",
    badge3: lang === 'FR' ? "📊 Analytics" : "📊 Analytics",
    description: lang === 'FR' 
      ? "Solutions IA innovantes pour les PME camerounaises : Service client automatisé, Processus optimisés et Analyse de données intelligentes."
      : "Innovative AI solutions for Cameroonian SMEs: Automated customer service, optimized processes, and intelligent data analysis.",
    btnPrimary: lang === 'FR' ? "Démarrer maintenant" : "Get started now",
    btnSecondary: lang === 'FR' ? "Découvrez nos solutions" : "Discover our solutions",
  };

  const [displayText, setDisplayText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayText("");
    setIsDone(false);
    const interval = setInterval(() => {
      setDisplayText(texts.fullText.slice(0, i));
      i++;
      if (i > texts.fullText.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [lang, texts.fullText]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-[0.05] scale-110 pointer-events-none" style={{ backgroundImage: 'url(https://i.postimg.cc/tCMtf62T/Doulia_Magique.jpg)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy z-[1]" />

      <div className="relative z-10 text-center px-6 max-w-7xl animate-fade-in">
        <div className="inline-flex flex-wrap justify-center gap-3 mb-10">
          <div className="px-4 py-1.5 rounded-full bg-lime/10 border border-lime/30 text-[10px] font-tech font-bold text-lime tracking-widest uppercase">{texts.badge1}</div>
          <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-tech text-white/50 tracking-widest uppercase">{texts.badge2}</div>
          <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-tech text-white/50 tracking-widest uppercase">{texts.badge3}</div>
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-tech font-bold mb-8 leading-[1.1] tracking-tighter uppercase min-h-[1.2em] gradient-text">
          <span className={!isDone ? "typing-cursor" : ""}>{displayText}</span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 font-inter mb-16 max-w-3xl mx-auto leading-relaxed font-light">
          {texts.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            className="bg-lime text-navy px-10 py-5 rounded-full font-tech text-base font-bold uppercase tracking-widest hover:shadow-[0_0_50px_#89C929] transition-all transform active:scale-95"
            onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
          >
            {texts.btnPrimary}
          </button>
          <button 
            className="glass-card text-white px-10 py-5 rounded-full font-tech text-base font-bold uppercase tracking-widest border border-white/20 hover:bg-white/10 transition-all transform active:scale-95"
            onClick={() => window.dispatchEvent(new CustomEvent('nav-packs'))}
          >
            {texts.btnSecondary}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
