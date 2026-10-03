import React from 'react';
import { Check, ShieldCheck, HeartHandshake, Compass, Zap, Terminal } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const AboutSection: React.FC = () => {
  const pillars = [
    { title: 'Custom Development', desc: 'Every solution is architected from clean foundations rather than off-the-shelf templates.' },
    { title: 'Modern Architecture', desc: 'Decoupled, modular systems built with type safety, clean APIs, and component reusability.' },
    { title: 'Responsive Experiences', desc: 'Interfaces rigorously tested across mobile viewports, high-DPI displays, and touch inputs.' },
    { title: 'Scalable Backend Systems', desc: 'Resilient databases, optimized query indexes, and asynchronous worker tasks.' },
    { title: 'Cloud Deployment', desc: 'Production environments configured on robust platforms with automated CI/CD and monitoring.' },
    { title: 'Ongoing Technical Support', desc: 'Post-launch maintenance, dependency updates, and feature expansions as your business grows.' },
  ];

  return (
    <section id="about" className="py-24 bg-[#080b13] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Headline, Story, Team visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Visual Asset */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/src/assets/images/team_engineering_office_1790951342985.jpg"
                alt="CodeHiveSolution software development engineering team and workspace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b13] via-transparent to-transparent opacity-60" />
              
              {/* Overlay engineering badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-xs">
                <div className="flex items-center justify-between text-slate-200 font-semibold mb-1">
                  <span>CodeHiveSolution Engineering</span>
                  <span className="text-amber-400 font-mono text-[11px]">Headquarters: {COMPANY_INFO.location}</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Delivering reliable digital products for clients worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest font-semibold text-amber-400">
                About CodeHiveSolution
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-[1.15]">
                Turning Ideas Into Digital Products.
              </h2>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed">
              <strong className="text-white font-semibold">CodeHiveSolution</strong> is a software development company focused on creating modern, reliable and scalable digital solutions. We work with businesses, startups and individuals to transform ideas into functional digital products.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Whether you need to launch a high-impact corporate website, build an on-demand mobile application, automate fragmented operational processes, or scale a secure cloud backend, our engineering team brings disciplined execution and transparent technical communication to every phase.
            </p>

            {/* Quick Core Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#0f1424] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Terminal className="w-4 h-4 text-amber-400" />
                  <span>Transparent Engineering</span>
                </div>
                <p className="text-xs text-slate-400">No jargon walls or hidden fees. We work in sprints with frequent demonstrations.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0f1424] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% IP Ownership</span>
                </div>
                <p className="text-xs text-slate-400">Full source code, documentation, and cloud ownership transferred upon project delivery.</p>
              </div>
            </div>

          </div>

        </div>

        {/* 6 Core Pillars Grid */}
        <div className="pt-12 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl font-display font-bold text-white">
              Our Core Technical Foundations
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Every digital solution built at CodeHiveSolution adheres to these engineering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-[#0d121f] border border-white/5 hover:border-amber-400/30 transition-all duration-200"
              >
                <div className="flex items-center gap-2.5 text-base font-semibold text-white mb-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>{pillar.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
