import React, { useState } from 'react';
import { ArrowRight, Terminal, Layers, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreServices }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'architecture'>('preview');

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle ambient tech background */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] ambient-glow-amber opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] ambient-glow-cyan opacity-25 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-8">
            {/* Tagline text marker - quiet, unboxed metadata */}
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>{COMPANY_INFO.tagline}</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400 font-mono tracking-normal capitalize">Software Development & Digital Solutions</span>
            </div>

            {/* Headline - balanced without orphan words */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
              We Build <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">Digital Solutions</span> That Help Businesses Grow.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              From high-performance websites and mobile apps to custom software and cloud solutions,{' '}
              <span className="text-white font-medium">CodeHiveSolution</span> transforms ideas into scalable digital products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-semibold tracking-wide text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Trust Indicators - unboxed clean presentation */}
            <div className="pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {COMPANY_INFO.trustPillars.map((pillar) => (
                  <div key={pillar.title} className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                      <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{pillar.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Technology Illustration & Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-sky-500/20 to-amber-500/10 blur-xl opacity-70" />
              
              {/* Dashboard Glass Container */}
              <div className="relative rounded-2xl bg-[#0d121f] border border-white/10 shadow-2xl overflow-hidden">
                
                {/* Header Frame / Tabs */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0a0d17] border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">codehive.engine</span>
                  </div>

                  {/* Interactive switch */}
                  <div className="flex items-center gap-1 p-0.5 bg-slate-900 rounded-md border border-white/5">
                    <button
                      onClick={() => setActiveTab('preview')}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                        activeTab === 'preview'
                          ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Interface
                    </button>
                    <button
                      onClick={() => setActiveTab('architecture')}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                        activeTab === 'architecture'
                          ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Stack
                    </button>
                  </div>
                </div>

                {/* Main Content Area */}
                {activeTab === 'preview' ? (
                  <div className="relative aspect-[16/11] bg-slate-950 overflow-hidden group">
                    <img
                      src="/src/assets/images/hero_software_platform_1790951302113.jpg"
                      alt="CodeHiveSolution digital platform architecture and software dashboard preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d17] via-transparent to-transparent opacity-80" />
                    
                    {/* Live overlay metrics */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="font-medium text-slate-200">Architecture Active</span>
                      </div>
                      <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
                        <span>LATENCY <strong className="text-emerald-400">18ms</strong></span>
                        <span>BUILD <strong className="text-amber-400">Passing</strong></span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 font-mono text-xs text-slate-300 space-y-3 bg-[#080b12] aspect-[16/11] overflow-y-auto">
                    <div className="text-slate-500"># Production Architecture Specification</div>
                    <div className="p-2.5 rounded bg-slate-900/80 border border-white/5 space-y-1">
                      <div className="text-amber-400 font-semibold">client_tier = &#123;</div>
                      <div className="pl-4 text-slate-300">framework: &quot;React 19 / Next.js&quot;,</div>
                      <div className="pl-4 text-slate-300">styling: &quot;Tailwind CSS + Fluid Tokens&quot;,</div>
                      <div className="pl-4 text-slate-300">mobile: &quot;Flutter & React Native&quot;</div>
                      <div className="text-amber-400">&#125;</div>
                    </div>
                    <div className="p-2.5 rounded bg-slate-900/80 border border-white/5 space-y-1">
                      <div className="text-sky-400 font-semibold">backend_tier = &#123;</div>
                      <div className="pl-4 text-slate-300">apis: &quot;Python FastAPI / Django / Node&quot;,</div>
                      <div className="pl-4 text-slate-300">database: &quot;PostgreSQL + Redis Caching&quot;,</div>
                      <div className="pl-4 text-slate-300">cloud: &quot;AWS / Docker / CI-CD Automated&quot;</div>
                      <div className="text-sky-400">&#125;</div>
                    </div>
                    <div className="text-emerald-400 flex items-center gap-1.5 pt-1 text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Security & Zero-Defect Pipeline Verified</span>
                    </div>
                  </div>
                )}

                {/* Bottom subtle specs bar */}
                <div className="px-4 py-2.5 bg-[#0a0d17] border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Built for scale and resilience</span>
                  </span>
                  <span className="font-mono text-slate-500">v2026.04</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
