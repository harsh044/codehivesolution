import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Terminal, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-md w-full text-center space-y-6">
        
        {/* Terminal Error Icon */}
        <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/10">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
            HTTP 404 · Page Not Found
          </div>
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">
            Route Not Resolved
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            The requested digital resource or endpoint does not exist on CodeHiveSolution servers.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#0f1424] border border-white/10 text-xs font-mono text-slate-400 text-left space-y-1">
          <div>$ ping origin/codehivesolution</div>
          <div className="text-amber-400">&gt; Status: 404 Target route not indexed</div>
          <div className="text-slate-500">&gt; Suggested action: return to main application index</div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <a
            href="/#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Contact Support</span>
          </a>
        </div>

      </div>
    </div>
  );
};
