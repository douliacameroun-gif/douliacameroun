
import React, { useState, useEffect } from 'react';
import { Language } from '../types';

const Hero: React.FC<{ lang: Language }> = ({ lang }) => {
  const texts = {
    fullText: lang === 'FR' ? "Propulsez Votre Croissance Par l'IA" : "Power Your Growth With AI",
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

  // Logic to split the typed text based on the first space for the layout "Propulsez" (top) and the rest (bottom)
  const firstSpaceIndex = texts.fullText.indexOf(" ");
  const part1 = displayText.slice(0, firstSpaceIndex !== -1 ? Math.min(displayText.length, firstSpaceIndex) : displayText.length);
  const part2 = firstSpaceIndex !== -1 && displayText.length > firstSpaceIndex 
    ? displayText.slice(firstSpaceIndex) 
    : "";

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-[0.05] scale-110 pointer-events-none" style={{ backgroundImage: 'url(https://i.postimg.cc/tCMtf62T/Doulia_Magique.jpg)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy z-[1]" />

      <div className="relative z-10 text-center w-full animate-fade-in flex flex-col items-center">
        {/* Titre avec taille légèrement augmentée : passage de text-4xl/6xl/7xl à text-5xl/7xl/8xl */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-tech font-bold mb-8 leading-[0.95] tracking-tighter gradient-text min-h-[2.2em] px-6 flex flex-col items-center uppercase">
          <span className="block">{part1}</span>
          <span className="block whitespace-pre-wrap">
            {part2}
            {!isDone && <span className="typing-cursor"></span>}
          </span>
        </h1>

        {/* Nouveau Ruban Défilant pour la description */}
        <div className="w-full overflow-hidden border-y border-white/5 py-4 mb-12 relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-navy to-transparent z-10"></div>
          
          <div className="flex whitespace-nowrap animate-marquee">
            {[1, 2, 3].map((_, idx) => (
              <p key={idx} className="text-[10px] md:text-xs text-white/40 font-tech uppercase tracking-[0.4em] inline-block mx-12 animate-shimmer">
                {texts.description}
              </p>
            ))}
          </div>
        </div>

        {/* Boutons redimensionnés plus compacts */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center px-6">
          <button 
            className="bg-lime text-navy px-8 py-3.5 rounded-full font-tech text-sm font-bold uppercase tracking-widest hover:shadow-[0_0_40px_rgba(137,201,41,0.5)] transition-all transform active:scale-95 border border-lime/50"
            onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
          >
            {texts.btnPrimary}
          </button>
          <button 
            className="glass-card text-white px-8 py-3.5 rounded-full font-tech text-sm font-bold uppercase tracking-widest border border-white/20 hover:bg-white/10 transition-all transform active:scale-95"
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
