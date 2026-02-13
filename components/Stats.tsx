
import React from 'react';
import { Language } from '../types';

const StatCard: React.FC<{ value: string, label: string }> = ({ value, label }) => {
  return (
    <div className="text-center group p-6">
      <div className="text-4xl md:text-5xl font-tech text-lime mb-3 tracking-tighter group-hover:scale-110 transition-transform">
        {value}
      </div>
      <div className="text-white/40 font-tech text-[10px] uppercase tracking-[0.3em] font-bold">
        {label}
      </div>
    </div>
  );
};

const Stats: React.FC<{ lang: Language }> = ({ lang }) => {
  const labels = {
    availability: lang === 'FR' ? "Disponibilité" : "Availability",
    automation: lang === 'FR' ? "Interactions Automatisées" : "Automated Interactions",
    local: lang === 'FR' ? "Local et Camerounais" : "Local and Cameroonian",
  };

  return (
    <section className="py-16 border-y border-white/10 bg-navy/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
        <StatCard value="24h / 24" label={labels.availability} />
        <StatCard value="80 %" label={labels.automation} />
        <StatCard value="100 %" label={labels.local} />
      </div>
    </section>
  );
};

export default Stats;
