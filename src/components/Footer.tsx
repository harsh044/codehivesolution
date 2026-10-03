import React from 'react';
import { Code2, ArrowUpRight, Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';

interface FooterProps {
  onOpenQuote?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070c] border-t border-white/10 text-slate-400">
      
      {/* Pre-footer Call to Action Band */}
      <div className="border-b border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Ready to transform your business idea into code?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Talk to our technical team today and receive a detailed, milestone-backed project proposal.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-all active:scale-95 whitespace-nowrap"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950">
                <Code2 className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">
                CodeHive<span className="text-amber-400">Solution</span>
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Building modern digital solutions for businesses and ideas.
            </p>

            <div className="pt-2 text-xs text-slate-500 font-mono space-y-1">
              <div>Tagline: “Build. Innovate. Grow.”</div>
              <div>Software Development & Digital Solutions</div>
              <div>Operating globally from {COMPANY_INFO.location}</div>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs uppercase font-mono tracking-wider font-semibold text-white">
              Company
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="/#about"
                  onClick={(e) => { e.preventDefault(); scrollTo('about'); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => { e.preventDefault(); scrollTo('services'); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#portfolio"
                  onClick={(e) => { e.preventDefault(); scrollTo('portfolio'); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs uppercase font-mono tracking-wider font-semibold text-white">
              Services
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="/#services"
                  onClick={(e) => { e.preventDefault(); scrollTo('services'); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => { e.preventDefault(); scrollTo('services'); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => { e.preventDefault(); scrollTo('services'); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Custom Software
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => { e.preventDefault(); scrollTo('services'); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  E-Commerce
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => { e.preventDefault(); scrollTo('services'); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  API Development
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => { e.preventDefault(); scrollTo('services'); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs uppercase font-mono tracking-wider font-semibold text-white">
              Connect
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-amber-400" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-amber-400" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-amber-400" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>Email: {COMPANY_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 CodeHiveSolution. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
            <span>·</span>
            <span>Security Statement</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
