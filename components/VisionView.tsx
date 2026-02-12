
import React, { useState, useEffect, useCallback } from 'react';
import { Language } from '../types';

const VisionView: React.FC<{ lang: Language }> = ({ lang }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 40,
      y: (e.clientY / window.innerHeight - 0.5) * 40,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const texts = {
    badge: lang === 'FR' ? "Manifeste Technologique" : "Technological Manifesto",
    title1: lang === 'FR' ? "NOTRE VISION" : "OUR VISION",
    and: lang === 'FR' ? " & " : " & ",
    title2: lang === 'FR' ? "MISSION" : "MISSION",
    mainText: lang === 'FR' 
      ? "L’IA n’est plus une option, c’est votre plus grand avantage compétitif."
      : "AI is no longer an option; it's your greatest competitive advantage.",
    item1Title: lang === 'FR' ? "Vision Stratégique" : "Strategic Vision",
    item1Desc: lang === 'FR'
      ? "Devenir la référence absolue des solutions d'intelligence artificielle au Cameroun."
      : "Becoming the absolute benchmark for artificial intelligence solutions in Cameroon.",
    item1Bold: lang === 'FR' ? "référence absolue" : "absolute benchmark",
    item2Title: lang === 'FR' ? "Notre Mission" : "Our Mission",
    item2Desc: lang === 'FR'
      ? "Démocratiser la puissance de l'IA pour la rendre concrète, accessible et immédiatement profitable pour les entreprises locales."
      : "Democratizing AI's power to make it concrete, accessible, and immediately profitable for local businesses.",
    item2Bold: lang === 'FR' ? "concrète, accessible" : "concrete, accessible",
  };

  return (
    <div className="relative min-h-screen pt-32 pb-32 px-6 overflow-hidden">
      <div 
        className="absolute inset-0 vision-grid opacity-30 pointer-events-none transition-transform duration-300 ease-out z-0"
        style={{ transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)` }}
      />

      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full orb-magical animate-float-vision blur-3xl transition-transform duration-700 ease-out"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              opacity: Math.random() * 0.4 + 0.1,
              transform: `translate(${mousePos.x * (0.5 + Math.random())}px, ${mousePos.y * (0.5 + Math.random())}px)`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        <div className="text-center mb-20 animate-fade-in w-full flex flex-col items-center">
          <div className="inline-flex items-center justify-center px-6 py-2 bg-lime/5 text-lime border border-lime/20 rounded-full text-[9px] font-tech font-bold mb-10 tracking-[0.5em] uppercase shadow-[0_0_20px_rgba(137,201,41,0.05)]">
            {texts.badge}
          </div>
          
          <div className="relative inline-block mb-12 text-center w-full">
             <h2 className="text-5xl md:text-7xl lg:text-8xl font-tech font-bold uppercase tracking-tighter leading-none group flex flex-wrap justify-center items-center">
                <span className="gradient-text">{texts.title1}</span> 
                <span className="text-white/10 group-hover:text-white/20 transition-colors mx-4 md:mx-6">{texts.and}</span>
                <span className="gradient-text">{texts.title2}</span>
             </h2>
             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent"></div>
          </div>

          <p className="text-xl md:text-2xl text-white/40 font-inter max-w-3xl mx-auto leading-relaxed mt-4">
            {texts.mainText.split("plus grand avantage compétitif")[0]}
            <span className="text-lime font-bold relative inline-block mx-1">
                {lang === 'FR' ? "plus grand avantage compétitif" : "greatest competitive advantage"}
            </span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8 animate-slide-fade">
            <div 
                className="glass-card p-10 rounded-[35px] border-white/10 group relative overflow-hidden transition-all duration-700 hover:scale-[1.02] cursor-default max-w-lg mx-auto lg:mx-0"
                style={{ transform: `perspective(1000px) rotateX(${mousePos.y * 0.1}deg) rotateY(${-mousePos.x * 0.1}deg)` }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-lime/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-5 mb-6">
                <div className="w-12 h-12 bg-lime/20 rounded-xl flex items-center justify-center text-lime group-hover:bg-lime group-hover:text-navy group-hover:shadow-[0_0_30px_#89C929] transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-tech font-bold text-white uppercase tracking-tight">{texts.item1Title}</h3>
              </div>
              <p className="text-white/50 text-xl leading-relaxed font-sans font-light">
                {texts.item1Desc.split(texts.item1Bold)[0]}
                <span className="text-white font-bold relative">
                    {texts.item1Bold}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lime scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                </span>
                {texts.item1Desc.split(texts.item1Bold)[1]}
              </p>
            </div>

            <div 
                className="glass-card p-10 rounded-[35px] border-white/10 group relative overflow-hidden transition-all duration-700 hover:scale-[1.02] cursor-default max-w-lg mx-auto lg:mx-0"
                style={{ transform: `perspective(1000px) rotateX(${-mousePos.y * 0.1}deg) rotateY(${mousePos.x * 0.1}deg)` }}
            >
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-lime/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-5 mb-6">
                <div className="w-12 h-12 bg-lime/20 rounded-xl flex items-center justify-center text-lime group-hover:bg-lime group-hover:text-navy group-hover:shadow-[0_0_30px_#89C929] transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-tech font-bold text-white uppercase tracking-tight">{texts.item2Title}</h3>
              </div>
              <p className="text-white/50 text-xl leading-relaxed font-sans font-light">
                {texts.item2Desc.split(texts.item2Bold)[0]}
                <span className="text-white font-bold italic">{texts.item2Bold}</span>
                {texts.item2Desc.split(texts.item2Bold)[1]}
              </p>
            </div>
          </div>

          <div className="relative group animate-fade-in flex justify-center py-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-lime/5 rounded-full animate-spin-slow opacity-30"></div>
            <div 
                className="relative w-full max-w-md aspect-square p-2 rounded-full glass-card border-white/10 overflow-hidden shadow-[0_0_100px_rgba(137,201,41,0.1)] group-hover:shadow-[0_0_150px_rgba(137,201,41,0.2)] transition-all duration-700 ease-out"
                style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
            >
              <img 
                src="https://i.postimg.cc/hP5bwmpt/Doulia_Magique_logo.jpg" 
                alt="DOULIA Magique" 
                className="w-full h-full rounded-full object-cover scale-110 group-hover:scale-105 transition-transform duration-[4000ms] ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-lime/10 via-transparent to-white/5 opacity-40 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionView;
