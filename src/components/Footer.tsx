import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowUp, 
  Code2, 
  ShieldCheck, 
  Mail, 
  Heart, 
  Github, 
  Linkedin,
  Database,
  Server
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070a12] border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80 items-center justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-emerald-400 text-sm">
                MS
              </div>
              <span className="font-bold text-slate-100 text-base">
                {PERSONAL_INFO.name}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Full Stack Developer
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              Crafting high-scale web applications in PHP (Laravel), modern JavaScript (React & Node.js), optimized MySQL databases, and hardened API security architectures.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs">
            <a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="text-slate-400 hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#projects" className="text-slate-400 hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#api-playground" className="text-slate-400 hover:text-emerald-400 transition-colors">API Playground</a>
            <a href="#security" className="text-slate-400 hover:text-emerald-400 transition-colors">Security Matrix</a>
            <a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">Services</a>
            <a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Scroll to Top */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors text-xs font-mono"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400">PHP • Laravel • React • Node.js • MySQL</span>
            <span>|</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-slate-200">
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
