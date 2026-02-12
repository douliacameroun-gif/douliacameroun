
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NeuralBackground from './components/NeuralBackground';
import Stats from './components/Stats';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import Engagement from './components/Engagement';
import Packs from './components/Packs';
import VisionView from './components/VisionView';
import ServicesView from './components/ServicesView';
import { Language, ViewType } from './types';

function App() {
  const [lang, setLang] = useState<Language>('FR');
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleNavPacks = () => setCurrentView('packs');
    window.addEventListener('nav-packs', handleNavPacks);
    return () => window.removeEventListener('nav-packs', handleNavPacks);
  }, []);

  useEffect(() => {
    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [currentView]);

  const openChatWithContext = (prompt: string) => {
    window.dispatchEvent(new CustomEvent('open-chatbot', { detail: { initialMessage: prompt } }));
  };

  const renderHowItWorks = () => {
    const texts = {
      title: lang === 'FR' ? "Mutation en 3 Étapes" : "3-Step Transformation",
      step1Title: lang === 'FR' ? "Diagnostic Gratuit" : "Free Diagnosis",
      step1Desc: lang === 'FR' ? "Analyse profonde de vos flux de revenus et identification des leviers IA prioritaires." : "In-depth analysis of your revenue streams and identification of priority AI levers.",
      step2Title: lang === 'FR' ? "Stratégie Personnalisée" : "Custom Strategy",
      step2Desc: lang === 'FR' ? "Conception d'un écosystème de croissance sur mesure intégré à vos outils actuels." : "Design of a tailor-made growth ecosystem integrated into your current tools.",
      step3Title: lang === 'FR' ? "Déploiement Rapide" : "Fast Deployment",
      step3Desc: lang === 'FR' ? "Mise en place de vos agents IA, formation de vos équipes et suivi des résultats." : "Implementation of your AI agents, team training, and results monitoring.",
    };

    return (
      <section className="py-32 px-6 bg-navy/20 relative border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-tech font-bold uppercase tracking-tighter gradient-text">{texts.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-[35px] border-white/5 group relative overflow-hidden h-full">
              <div className="text-8xl font-tech font-bold text-white/[0.02] absolute -top-8 -left-8 leading-none">01</div>
              <h4 className="text-lime font-tech font-bold text-base uppercase mb-4 tracking-widest relative z-10">{texts.step1Title}</h4>
              <p className="text-white/40 text-base leading-relaxed relative z-10 font-sans">{texts.step1Desc}</p>
            </div>
            <div className="glass-card p-10 rounded-[35px] border-white/5 group relative overflow-hidden h-full">
              <div className="text-8xl font-tech font-bold text-white/[0.02] absolute -top-8 -left-8 leading-none">02</div>
              <h4 className="text-lime font-tech font-bold text-base uppercase mb-4 tracking-widest relative z-10">{texts.step2Title}</h4>
              <p className="text-white/40 text-base leading-relaxed relative z-10 font-sans">{texts.step2Desc}</p>
            </div>
            <div className="glass-card p-10 rounded-[35px] border-white/5 group relative overflow-hidden h-full">
              <div className="text-8xl font-tech font-bold text-white/[0.02] absolute -top-8 -left-8 leading-none">03</div>
              <h4 className="text-lime font-tech font-bold text-base uppercase mb-4 tracking-widest relative z-10">{texts.step3Title}</h4>
              <p className="text-white/40 text-base leading-relaxed relative z-10 font-sans">{texts.step3Desc}</p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderEngagementPage = () => {
    const texts = {
      philTitle: lang === 'FR' ? "Notre Philosophie" : "Our Philosophy",
      philDesc: lang === 'FR' 
        ? "Chez DOULIA, nous croyons que la technologie ne doit pas être froide. L'IA doit être un pont, pas une barrière. Chaque agent IA que nous créons est conçu pour comprendre et servir avec une efficacité qui touche le cœur de l'interaction humaine."
        : "At DOULIA, we believe that technology should not be cold. AI must be a bridge, not a barrier. Every AI agent we create is designed to understand and serve with efficiency that touches the heart of human interaction.",
      impactTitle: lang === 'FR' ? "Impact Local" : "Local Impact",
      impactDesc: lang === 'FR'
        ? "La souveraineté numérique du Cameroun passe par des solutions construites ici, pour les réalités d'ici. Nous formons les talents locaux pour que l'expertise reste au pays."
        : "Cameroon's digital sovereignty relies on solutions built here, for the realities here. We train local talent so that expertise remains in the country.",
    };

    return (
      <div className="pt-32 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Engagement lang={lang} />
          
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card p-10 rounded-[35px] border-white/10">
              <h3 className="text-2xl font-tech font-bold text-white mb-6 uppercase tracking-tight">{texts.philTitle}</h3>
              <p className="text-white/50 text-base leading-relaxed font-light font-sans mb-8">
                {texts.philDesc}
              </p>
              <div className="h-1 w-16 bg-lime rounded-full"></div>
            </div>
            <div className="glass-card p-10 rounded-[35px] border-white/10">
              <h3 className="text-2xl font-tech font-bold text-white mb-6 uppercase tracking-tight">{texts.impactTitle}</h3>
              <p className="text-white/50 text-base leading-relaxed font-light font-sans">
                {texts.impactDesc}
              </p>
              <div className="mt-10 flex gap-4">
                <span className="text-3xl">🇨🇲</span>
                <span className="text-3xl">🤖</span>
                <span className="text-3xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAuditPage = () => {
    const texts = {
      badge: lang === 'FR' ? "Phase de Diagnostic" : "Diagnostic Phase",
      title: lang === 'FR' ? "Audit Stratégique Gratuit" : "Free Strategic Audit",
      sub: lang === 'FR' 
        ? "Analyse de vos processus pour identifier où l'IA peut vous faire gagner du temps et de l'argent."
        : "Analysis of your processes to identify where AI can save you time and money.",
      feat1Title: lang === 'FR' ? "Analyse des Flux" : "Flow Analysis",
      feat1Desc: lang === 'FR' ? "Identification des goulots d'étranglement." : "Identification of bottlenecks.",
      feat2Title: lang === 'FR' ? "Évaluation Data" : "Data Evaluation",
      feat2Desc: lang === 'FR' ? "Audit de la structure de vos données." : "Audit of your data structure.",
      feat3Title: lang === 'FR' ? "Simulation ROI" : "ROI Simulation",
      feat3Desc: lang === 'FR' ? "Calcul précis des gains potentiels." : "Accurate calculation of potential gains.",
      btn: lang === 'FR' ? "Réserver mon audit maintenant" : "Book my audit now",
      sidebarTitle: lang === 'FR' ? "Pourquoi un audit ?" : "Why an audit?",
      sidebarList1: lang === 'FR' ? "Arrêtez de deviner. Prenez des décisions basées sur des faits." : "Stop guessing. Make decisions based on facts.",
      sidebarList2: lang === 'FR' ? "Découvrez des opportunités de revenus cachées." : "Discover hidden revenue opportunities.",
      quote: lang === 'FR' ? "\"L'audit avec DOULIA a été le déclic pour notre support client.\"" : "\"The audit with DOULIA was the trigger for our customer support.\"",
      quoteAuthor: lang === 'FR' ? "— CEO à Douala" : "— CEO in Douala",
    };

    const prompt = lang === 'FR' 
      ? "Je souhaite réserver mon audit stratégique gratuit maintenant. Quelles sont les prochaines étapes ?"
      : "I would like to book my free strategic audit now. What are the next steps?";

    return (
      <div className="pt-32 pb-32 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-lime/10 text-lime rounded-lg text-[10px] font-tech font-bold mb-6 tracking-[0.4em] uppercase">{texts.badge}</div>
          <h2 className="text-4xl md:text-6xl font-tech font-bold text-white tracking-tighter uppercase gradient-text mb-6">{texts.title}</h2>
          <p className="text-lg text-white/40 font-inter max-w-2xl mx-auto">{texts.sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            {[
              { title: texts.feat1Title, desc: texts.feat1Desc, icon: "📡" },
              { title: texts.feat2Title, desc: texts.feat2Desc, icon: "💾" },
              { title: texts.feat3Title, desc: texts.feat3Desc, icon: "📊" }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-14 h-14 shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-lime transition-all duration-500">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-tech font-bold text-white mb-1 uppercase">{item.title}</h4>
                  <p className="text-white/40 text-base">{item.desc}</p>
                </div>
              </div>
            ))}
            
            <button 
              onClick={() => openChatWithContext(prompt)}
              className="w-full md:w-auto px-10 py-5 bg-lime text-navy rounded-full font-tech font-bold text-base uppercase tracking-widest hover:shadow-[0_0_50px_#89C929] transition-all"
            >
              {texts.btn}
            </button>
          </div>

          <div className="glass-card p-10 rounded-[40px] border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lime/10 blur-3xl"></div>
            <div className="space-y-6 relative z-10">
              <h4 className="text-lg font-tech text-lime font-bold uppercase tracking-widest">{texts.sidebarTitle}</h4>
              <ul className="space-y-5">
                <li className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-lime/20 flex items-center justify-center shrink-0 text-lime text-[10px]">✓</div>
                  <p className="text-white/60 font-sans leading-relaxed text-sm">{texts.sidebarList1}</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-lime/20 flex items-center justify-center shrink-0 text-lime text-[10px]">✓</div>
                  <p className="text-white/60 font-sans leading-relaxed text-sm">{texts.sidebarList2}</p>
                </li>
              </ul>
              <div className="p-6 bg-navy/50 rounded-2xl border border-white/5">
                <p className="text-white/40 text-xs italic font-sans">{texts.quote}</p>
                <p className="text-lime text-[9px] font-bold mt-3 uppercase tracking-widest">{texts.quoteAuthor}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderHome = () => {
    const texts = {
      ready: lang === 'FR' ? "Prêt à propulser votre croissance ?" : "Ready to power your growth?",
      btn: lang === 'FR' ? "Lancer mon diagnostic IA" : "Launch my AI diagnosis",
      prompt: lang === 'FR' 
        ? "Bonjour ! Je suis prêt à lancer mon diagnostic IA pour mon entreprise."
        : "Hello! I am ready to launch my AI diagnosis for my business."
    };

    return (
      <div className="animate-fade-in pb-32">
        <Hero lang={lang} />
        <Stats lang={lang} />
        
        <section className="py-24 px-6 flex justify-center">
          <div className="max-w-2xl text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-tech font-bold uppercase tracking-tighter gradient-text">{texts.ready}</h2>
            <button 
               onClick={() => openChatWithContext(texts.prompt)}
               className="px-12 py-6 bg-lime text-navy rounded-full font-tech font-bold text-lg uppercase tracking-widest hover:shadow-[0_0_50px_#89C929] transition-all"
            >
              {texts.btn}
            </button>
          </div>
        </section>

        {renderHowItWorks()}
        <Packs lang={lang} />
        <Engagement lang={lang} />
      </div>
    );
  };

  return (
    <div className={`relative min-h-screen selection:bg-lime selection:text-navy bg-darkNavy overflow-hidden flex flex-col ${isTransitioning ? 'pointer-events-none' : ''}`}>
      <NeuralBackground />
      <Navbar lang={lang} setLang={setLang} currentView={currentView} setView={setCurrentView} />
      
      <main className={`relative z-10 flex-1 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}>
        {currentView === 'home' && renderHome()}
        {currentView === 'engagement' && renderEngagementPage()}
        {currentView === 'audit' && renderAuditPage()}
        {currentView === 'vision' && <VisionView lang={lang} />}
        {currentView === 'packs' && <div className="pt-20"><Packs lang={lang} /></div>}
        {currentView === 'services' && <ServicesView lang={lang} />}
      </main>

      <Footer lang={lang} />
      <Chatbot lang={lang} />
    </div>
  );
}

export default App;
