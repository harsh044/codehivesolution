import React, { useState } from 'react';
import { Compass, FileCode2, Palette, Code2, ShieldAlert, Rocket, CheckCircle2 } from 'lucide-react';
import { PROCESS_DATA } from '../data/companyData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (index: number) => {
    const props = { className: "w-5 h-5 text-amber-400" };
    switch (index) {
      case 0: return <Compass {...props} />;
      case 1: return <FileCode2 {...props} />;
      case 2: return <Palette {...props} />;
      case 3: return <Code2 {...props} />;
      case 4: return <ShieldAlert {...props} />;
      case 5: return <Rocket {...props} />;
      default: return <Code2 {...props} />;
    }
  };

  return (
    <section className="py-24 bg-[#0a0e19] relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            Methodology & Execution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Our Development Process
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A disciplined, milestone-driven lifecycle from concept to live production.
          </p>
        </div>

        {/* Desktop Process Navigation Bar with Animated Connecting Line */}
        <div className="relative mb-12 hidden lg:block">
          {/* Base connecting line */}
          <div className="absolute top-7 left-12 right-12 h-0.5 bg-slate-800 z-0" />
          
          {/* Active progress indicator line */}
          <div
            className="absolute top-7 left-12 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 z-0 transition-all duration-500"
            style={{ width: `${(activeStep / (PROCESS_DATA.length - 1)) * 90}%` }}
          />

          <div className="relative z-10 grid grid-cols-6 gap-2">
            {PROCESS_DATA.map((step, idx) => {
              const isCurrent = activeStep === idx;
              const isPast = activeStep >= idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center group text-center focus:outline-none"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isCurrent
                        ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-400/20 shadow-lg shadow-amber-500/25 scale-110'
                        : isPast
                        ? 'bg-[#141b2c] border border-amber-400/50 text-amber-400'
                        : 'bg-[#0f1422] border border-white/10 text-slate-500 hover:border-white/20'
                    }`}
                  >
                    {isCurrent ? (
                      <span className="font-mono font-bold text-sm text-slate-950">{step.number}</span>
                    ) : (
                      getStepIcon(idx)
                    )}
                  </div>
                  
                  <span className={`mt-3 text-xs font-semibold tracking-wide ${isCurrent ? 'text-amber-300' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Spotlight Card */}
        <div className="rounded-2xl bg-[#0f1424] border border-white/10 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step summary & phase */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded font-mono text-xs font-semibold bg-amber-400/15 text-amber-300 border border-amber-400/30">
                  Phase {PROCESS_DATA[activeStep].number}
                </span>
                <span className="text-xs text-slate-500">·</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Standard Operating Procedure</span>
              </div>

              <h3 className="text-3xl font-display font-bold text-white">
                {PROCESS_DATA[activeStep].number} — {PROCESS_DATA[activeStep].title}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                {PROCESS_DATA[activeStep].description}
              </p>

              <div className="pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Phase Deliverable</div>
                  <div className="text-sm font-semibold text-amber-300">
                    {PROCESS_DATA[activeStep].deliverables}
                  </div>
                </div>
              </div>
            </div>

            {/* Activities Checklist */}
            <div className="lg:col-span-6 bg-[#0a0e19] p-6 rounded-xl border border-white/5 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Core Activities Executed In This Phase
              </div>
              <div className="space-y-3">
                {PROCESS_DATA[activeStep].activities.map((act, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
                >
                  ← Previous Step
                </button>
                <div className="text-xs font-mono text-slate-500">
                  {activeStep + 1} of {PROCESS_DATA.length}
                </div>
                <button
                  disabled={activeStep === PROCESS_DATA.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(PROCESS_DATA.length - 1, prev + 1))}
                  className="px-3 py-1.5 text-xs font-medium text-amber-400 hover:text-amber-300 disabled:opacity-30 disabled:hover:text-amber-400 transition-colors"
                >
                  Next Step →
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Process Cards List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:hidden">
          {PROCESS_DATA.map((step, idx) => (
            <div
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                activeStep === idx
                  ? 'bg-[#151c2e] border-amber-400/40'
                  : 'bg-[#0e1320] border-white/5'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-xs font-bold text-amber-400">{step.number}</span>
                <span className="font-semibold text-sm text-white">{step.title}</span>
              </div>
              <p className="text-xs text-slate-400 line-clamp-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
