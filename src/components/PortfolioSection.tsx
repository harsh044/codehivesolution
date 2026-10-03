import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/companyData';
import { ProjectItem } from '../types';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Business Website', label: 'Websites' },
    { id: 'E-Commerce Platform', label: 'E-Commerce' },
    { id: 'Mobile Service Application', label: 'Mobile Apps' },
    { id: 'Business Management System', label: 'Systems & Dashboards' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="portfolio" className="py-24 bg-[#0a0e19] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs uppercase tracking-widest font-semibold text-amber-400">
              Demonstrated Craftsmanship
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              A curated selection of modern digital platforms and custom software architectures.
            </p>
          </div>

          {/* Category Filter tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-1.5 p-1.5 bg-[#0e1422] rounded-xl border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  filter === cat.id
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0f1424] border border-white/10 overflow-hidden hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Project Image / Mockup Preview */}
              <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1424] via-transparent to-transparent opacity-90" />
                
                {/* Clean unboxed category overlay */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-mono font-medium text-amber-300 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Subtitle tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-mono text-[11px] text-slate-400">{project.clientType}</span>
                </div>
              </div>

              {/* Project Info Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-amber-300 transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom: Technologies & CTA */}
                <div>
                  <div className="pt-4 border-t border-white/5 mb-5">
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                      Technologies Used
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300">
                      {project.technologies.map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span className="font-medium text-slate-200">{tech}</span>
                          {idx < project.technologies.length - 1 && (
                            <span className="text-slate-600" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-amber-400/40 transition-all duration-200 group/btn"
                  >
                    <span>View Project Specification</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Portfolio Notice Banner */}
        <div className="mt-12 text-center text-xs text-slate-500 font-mono">
          Note: Featured showcase represents production-grade architecture blueprints and demo implementations crafted by CodeHiveSolution.
        </div>

      </div>
    </section>
  );
};
