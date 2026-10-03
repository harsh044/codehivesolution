import React, { useState } from 'react';
import { Code2, Server, Database, Cloud, Check } from 'lucide-react';
import { TECHNOLOGIES_DATA } from '../data/companyData';

export const TechnologiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'frontend' | 'backend' | 'database' | 'cloud'>('frontend');

  const categories = [
    { id: 'frontend' as const, label: 'Frontend', count: TECHNOLOGIES_DATA.frontend.length, icon: Code2 },
    { id: 'backend' as const, label: 'Backend & APIs', count: TECHNOLOGIES_DATA.backend.length, icon: Server },
    { id: 'database' as const, label: 'Database & Storage', count: TECHNOLOGIES_DATA.database.length, icon: Database },
    { id: 'cloud' as const, label: 'Cloud & DevOps', count: TECHNOLOGIES_DATA.cloud.length, icon: Cloud },
  ];

  const currentTechList = TECHNOLOGIES_DATA[activeCategory];

  return (
    <section id="technologies" className="py-24 bg-[#080b13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            Engineered With Precision
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Our Technology Stack
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Battle-tested frameworks, modern runtimes, and scalable cloud infrastructure.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-[#0f1422] text-slate-400 hover:text-white border border-white/5 hover:border-white/15'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-white/5 text-slate-400'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentTechList.map((tech) => (
            <div
              key={tech.name}
              className="p-6 rounded-2xl bg-[#0e1320] border border-white/10 hover:border-amber-400/40 hover:bg-[#121828] transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-amber-300 transition-colors">
                    {tech.name}
                  </h3>
                  <span className="text-[11px] font-mono text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    {tech.level}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {tech.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>Production Ready</span>
                </span>
                <span className="font-mono text-slate-500">Industry Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stack Guarantee Summary Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0d1322] to-[#12192b] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-semibold text-white">Have a specific technology requirement or legacy stack?</h4>
            <p className="text-xs text-slate-400">We adapt to your enterprise infrastructure and existing engineering guidelines seamlessly.</p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap"
          >
            Discuss Stack Compatibility
          </a>
        </div>

      </div>
    </section>
  );
};
