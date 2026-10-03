import React from 'react';
import { Rocket, Store, ShoppingBag, GraduationCap, Activity, CreditCard, MapPin, Wrench, Briefcase } from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/companyData';

export const IndustriesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" };
    switch (iconName) {
      case 'Rocket': return <Rocket {...props} />;
      case 'Store': return <Store {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'CreditCard': return <CreditCard {...props} />;
      case 'MapPin': return <MapPin {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      default: return <Briefcase {...props} />;
    }
  };

  return (
    <section className="py-24 bg-[#0a0e19] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            Domain Versatility
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Tailoring modern digital architectures to domain-specific business mechanics.
          </p>
        </div>

        {/* 9 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((industry) => (
            <div
              key={industry.id}
              className="p-6 rounded-2xl bg-[#0f1424] border border-white/10 hover:border-amber-400/30 hover:bg-[#131a2e] transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {getIcon(industry.icon)}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white group-hover:text-amber-300 transition-colors">
                    {industry.name}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {industry.description}
                </p>
              </div>

              {/* Solution tags - unboxed metadata */}
              <div className="pt-3 border-t border-white/5">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-400">
                  {industry.exampleSolutions.map((sol, idx) => (
                    <React.Fragment key={sol}>
                      <span>{sol}</span>
                      {idx < industry.exampleSolutions.length - 1 && (
                        <span className="text-slate-600" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
