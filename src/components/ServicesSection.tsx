import React, { useState } from 'react';
import { Globe, Smartphone, Cpu, ShoppingCart, Database, Cloud, Layout, Workflow, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onQuickQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onQuickQuote }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const getServiceIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" };
    switch (iconName) {
      case 'Globe': return <Globe {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'ShoppingCart': return <ShoppingCart {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      case 'Layout': return <Layout {...props} />;
      case 'Workflow': return <Workflow {...props} />;
      default: return <Globe {...props} />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'web-mobile', label: 'Web & Mobile' },
    { id: 'custom-software', label: 'Custom Software & APIs' },
    { id: 'cloud-automation', label: 'Cloud & Automation' }
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'web-mobile') return ['website-development', 'mobile-app-development', 'ui-ux-development'].includes(service.id);
    if (selectedFilter === 'custom-software') return ['custom-software-development', 'ecommerce-development', 'api-backend-development'].includes(service.id);
    if (selectedFilter === 'cloud-automation') return ['cloud-deployment', 'business-automation'].includes(service.id);
    return true;
  });

  return (
    <section id="services" className="py-24 bg-[#080b13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs uppercase tracking-widest font-semibold text-amber-400">
              End-to-End Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Complete digital solutions designed around your business goals.
            </p>
          </div>

          {/* Interactive filter tabs (functional buttons allowed) */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-1.5 p-1.5 bg-[#0e1422] rounded-xl border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedFilter === cat.id
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-[#0e1320] border border-white/10 p-7 flex flex-col justify-between hover:border-amber-400/40 hover:bg-[#121929] transition-all duration-300 shadow-lg hover:shadow-amber-500/10"
            >
              {/* Top: Icon & Title */}
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="text-xl font-display font-semibold text-white group-hover:text-amber-300 transition-colors mb-2.5">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Key Capabilities Bullet Points */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies - clean unboxed metadata with bullet separators */}
                <div className="pt-4 border-t border-white/5 mb-6">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                    Technologies
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300">
                    {service.technologies.slice(0, 5).map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="font-medium text-slate-300">{tech}</span>
                        {idx < Math.min(service.technologies.length, 5) - 1 && (
                          <span className="text-slate-600" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                    {service.technologies.length > 5 && (
                      <span className="text-amber-400/80 text-[11px] font-mono">
                        +{service.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors py-1 group/btn focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onQuickQuote(service.title)}
                  className="px-2.5 py-1 text-[11px] font-medium text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
