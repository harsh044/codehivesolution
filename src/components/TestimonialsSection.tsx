import React from 'react';
import { MessageSquareQuote, Sparkles, PlusCircle } from 'lucide-react';

interface TestimonialsSectionProps {
  onStartProject: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onStartProject }) => {
  return (
    <section className="py-24 bg-[#080b13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            Client Voices & Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Client Stories & Feedback
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            We partner with businesses to build reliable, high-performance software.
          </p>
        </div>

        {/* Structured Testimonial Cards Framework (Transparent Placeholder Structure) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[].map((slot) => (
            <div
              key={slot}
              className="p-8 rounded-2xl bg-[#0e1320] border border-dashed border-white/15 flex flex-col justify-between relative group hover:border-amber-400/40 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 mb-6">
                  <MessageSquareQuote className="w-5 h-5 text-amber-400/60" />
                </div>

                <div className="space-y-3">
                  <p className="text-base font-medium text-slate-300 italic leading-relaxed">
                    “Client testimonials will be added here.”
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Real client reviews and verified case outcomes will appear in this designated space as published case studies become available.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs font-mono text-slate-400">
                  #{slot}
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">Client Partner #{slot}</div>
                  <div className="text-[11px] text-slate-500">Industry Case Verification Pending</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership invitation card */}
        <div className="rounded-2xl bg-[#0f1526] border border-white/10 p-8 text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Partner With CodeHiveSolution</span>
          </div>
          <h3 className="text-xl font-display font-bold text-white">
            Ready to become our next featured digital success story?
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Let us build your next digital product with clean architecture, transparent communication, and relentless focus on results.
          </p>
          <div className="pt-2">
            <button
              onClick={onStartProject}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Initiate Your Project</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
