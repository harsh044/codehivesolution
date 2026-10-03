import React from 'react';
import { X, CheckCircle2, ArrowRight, Layers, FileCheck } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0f1424] border border-white/10 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0a0e19] border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">Service Deep-Dive</span>
            <h3 className="text-xl font-display font-bold text-white mt-0.5">
              {service.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Detailed Narrative */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">What We Deliver</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Included Technical Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/70 border border-white/5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Concrete Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Tangible Project Deliverables</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((deliv, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-[#0a0d18] border border-white/5 text-xs text-slate-300 font-medium">
                  <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="p-4 rounded-xl bg-[#0a0d18] border border-white/5 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Standard Frameworks & Tools</div>
            <div className="flex flex-wrap items-center gap-2">
              {service.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0a0e19] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Back to Services
          </button>

          <button
            onClick={() => {
              onRequestQuote(service.title);
              onClose();
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all"
          >
            <span>Request Quote For {service.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
