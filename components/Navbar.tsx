
import React from 'react';
import { Language, ViewType } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  currentView: ViewType;
  setView: (v: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, currentView, setView }) => {
  const texts = {
    vision: lang === 'FR' ? 'Vision' : 'Vision',
    packs: lang === 'FR' ? 'Packs' : 'Packs',
    services: lang === 'FR' ? 'Services' : 'Services',
    engagement: lang === 'FR' ? 'Engagement' : 'Commitment',
    contact: lang === 'FR' ? 'Contact' : 'Contact',
    audit: lang === 'FR' ? 'Audit Gratuit' : 'Free Audit',
  };

  const navItems: { label: string; view: ViewType }[] = [
    { label: texts.vision, view: 'vision' },
    { label: texts.packs, view: 'packs' },
    { label: texts.services, view: 'services' },
    { label: texts.engagement, view: 'engagement' },
    { label: texts.contact, view: 'contact' },
  ];

  const DOULIA_LOGO = "https://i.postimg.cc/Y0nJdHW3/DOULIA_LOGO.jpg";

  return (
    <nav className="fixed top-0 w-full z-[1000] transition-all duration-300 backdrop-blur-md bg-navy/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-4 group cursor-pointer" 
          onClick={() => setView('home')}
        >
          <div className="h-12 w-12 bg-white rounded-md p-0.5 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-transform group-hover:scale-110 flex items-center justify-center overflow-hidden">
            <img src={DOULIA_LOGO} alt="DOULIA" className="h-full w-full object-cover" />
          </div>
          <span className="font-tech text-xl tracking-tighter font-bold text-white hidden sm:block uppercase">DOULIA</span>
        </div>
        
        <div className="hidden lg:flex gap-8 items-center text-[11px] font-tech font-bold uppercase tracking-[0.3em]">
          {navItems.map((item) => (
            <button 
              key={item.view}
              onClick={() => setView(item.view)} 
              className={`transition-all relative py-2 ${currentView === item.view ? 'text-lime' : 'text-white/40 hover:text-white'}`}
            >
              {item.label}
              {currentView === item.view && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lime animate-pulse"></span>
              )}
            </button>
          ))}
          
          <div className="flex items-center gap-3 px-4 py-1.5 border border-white/10 rounded-full bg-white/5">
            <button onClick={() => setLang('FR')} className={`transition-colors text-[10px] ${lang === 'FR' ? 'text-lime font-bold' : 'text-white/20 hover:text-white'}`}>FR</button>
            <span className="text-white/5 text-[10px]">/</span>
            <button onClick={() => setLang('EN')} className={`transition-colors text-[10px] ${lang === 'EN' ? 'text-lime font-bold' : 'text-white/20 hover:text-white'}`}>EN</button>
          </div>

          <button 
            onClick={() => setView('audit')}
            className={`px-8 py-3 rounded-full font-tech font-bold transition-all active:scale-95 text-[10px] tracking-widest uppercase bg-lime text-navy hover:shadow-[0_0_30px_rgba(137,201,41,0.4)] border border-lime/50`}
          >
            {texts.audit}
          </button>
        </div>

        <button className="lg:hidden text-white/50" onClick={() => setView('contact')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
