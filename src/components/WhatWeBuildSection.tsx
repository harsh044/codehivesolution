import React, { useState } from 'react';
import { Monitor, Smartphone, Layers, ShoppingBag, Briefcase, Server, ArrowRight, Check } from 'lucide-react';
import { WHAT_WE_BUILD_DATA } from '../data/companyData';

interface WhatWeBuildSectionProps {
  onSelectSolution: (solutionTitle: string) => void;
}

export const WhatWeBuildSection: React.FC<WhatWeBuildSectionProps> = ({ onSelectSolution }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-amber-400" };
    switch (iconName) {
      case 'Monitor': return <Monitor {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Server': return <Server {...props} />;
      default: return <Monitor {...props} />;
    }
  };

  const activeItem = WHAT_WE_BUILD_DATA[activeIdx];

  return (
    <section id="solutions" className="py-24 bg-[#0a0e19] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            Digital Product Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            What We Build
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            From consumer-facing mobile touchpoints to core enterprise operational software.
          </p>
        </div>

        {/* Interactive Master-Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Product Card Buttons */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {WHAT_WE_BUILD_DATA.map((item, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={item.title}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-4.5 rounded-xl border transition-all duration-200 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-[#151c2e] border-amber-400/50 shadow-md shadow-amber-500/10'
                      : 'bg-[#0f1422] border-white/5 hover:border-white/15 hover:bg-[#131929]'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${isSelected ? 'bg-amber-400/20 text-amber-300' : 'bg-white/5 text-slate-400'}`}>
                    {getIcon(item.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-base font-semibold truncate ${isSelected ? 'text-amber-300' : 'text-white'}`}>
                        {item.title}
                      </h3>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 ml-2" />
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Preview Window */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-2xl bg-[#0f1424] border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Header of Active Item */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-amber-400/15 border border-amber-400/30">
                      {getIcon(activeItem.icon)}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">Solution Specification</span>
                      <h3 className="text-2xl font-display font-bold text-white mt-0.5">
                        {activeItem.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="text-xs font-mono text-slate-400 px-3 py-1 rounded bg-slate-900 border border-white/10">
                    Custom Built
                  </div>
                </div>

                {/* Description & Target fit */}
                <div className="py-6 space-y-4">
                  <p className="text-base text-slate-200 leading-relaxed">
                    {activeItem.description}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                    <div className="text-xs font-mono text-slate-400 uppercase">Ideal Business Fit</div>
                    <div className="text-sm font-medium text-amber-300">{activeItem.idealFor}</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3 pb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Core Engineering Highlights</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeItem.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5 border border-white/5 text-sm text-slate-200">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Need a tailored version of {activeItem.title.toLowerCase()}?
                </div>
                <button
                  onClick={() => onSelectSolution(activeItem.title)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all active:scale-95"
                >
                  <span>Build This Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
