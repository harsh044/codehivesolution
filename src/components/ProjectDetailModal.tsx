import React from 'react';
import { X, CheckCircle2, ArrowRight, ExternalLink, ShieldCheck, Layers, Terminal } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestSimilar
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#0f1424] border border-white/10 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0a0e19] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
              {project.category}
            </span>
            <span className="text-xs text-slate-500">·</span>
            <span className="text-xs text-slate-400">{project.clientType}</span>
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
          
          {/* Main Visual Preview */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-2xl font-display font-bold text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Long Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Architecture Overview</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features & Engineering Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Key Engineered Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/70 border border-white/5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="p-4 rounded-xl bg-[#0a0d18] border border-white/5 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Production Tech Stack</div>
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Performance & Quality Benchmarks */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20 flex flex-wrap items-center justify-between gap-3 text-xs text-emerald-300">
            <span className="flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full Test Coverage & Responsive Optimization Verified</span>
            </span>
            <span className="font-mono text-slate-400 text-[11px]">Production Standard</span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0a0e19] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close Overview
          </button>

          <button
            onClick={() => {
              onRequestSimilar(project.title);
              onClose();
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all"
          >
            <span>Request A Similar Solution</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
