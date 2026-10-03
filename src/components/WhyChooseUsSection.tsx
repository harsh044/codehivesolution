import React from 'react';
import { Settings, Sparkles, TrendingUp, Maximize, Code, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US_DATA, COMPANY_INFO } from '../data/companyData';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-amber-400" };
    switch (iconName) {
      case 'Settings': return <Settings {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Maximize': return <Maximize {...props} />;
      case 'Code': return <Code {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section className="py-24 bg-[#080b13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            Engineered For Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Why Businesses Choose Us
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            We focus on technical integrity, clear communication, and delivering real business outcomes.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US_DATA.map((feature, idx) => (
            <div
              key={feature.title}
              className="p-7 rounded-2xl bg-[#0e1320] border border-white/10 hover:border-amber-400/30 hover:bg-[#121828] transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  {getIcon(feature.icon)}
                </div>
                <span className="font-mono text-xs text-slate-500">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="text-lg font-display font-semibold text-white group-hover:text-amber-300 transition-colors mb-2.5">
                {feature.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Statistics Area - Accurate & Grounded */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0f1525] via-[#141b30] to-[#0f1525] border border-white/10 p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`pt-6 sm:pt-0 ${idx > 0 ? 'sm:pl-8' : ''} space-y-1.5`}
              >
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
