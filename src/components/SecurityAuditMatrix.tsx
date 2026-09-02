import React, { useState } from 'react';
import { SECURITY_CHECKLIST } from '../data/portfolioData';
import { SecurityCheckItem } from '../types';
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  AlertCircle, 
  Terminal, 
  Key, 
  Database,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

export const SecurityAuditMatrix: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<SecurityCheckItem>(SECURITY_CHECKLIST[0]);

  return (
    <section id="security" className="py-24 bg-[#090d16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-xs font-mono text-amber-400 uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Web Security Hardening</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            OWASP Top 10 & Enterprise Web Security Standards
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl">
            Every application built by Md Shovon incorporates proactive security defense layers to prevent data leaks, SQL injections, and unauthorized API exploitation.
          </p>
        </div>

        {/* Security Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SECURITY_CHECKLIST.map((item) => {
            const isSelected = selectedItem.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`p-6 rounded-2xl cursor-pointer border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900/90 border-emerald-500/60 shadow-xl shadow-emerald-950/20 scale-[1.02]'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {item.standard}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 mb-2 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item.title}</span>
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[11px] text-slate-400 font-mono mb-2">
                    Implementation Technique:
                  </div>
                  <p className="text-xs text-slate-400 italic">
                    "{item.implementationDetail}"
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.techUsed.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Philosophy Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-teal-950/30 border border-emerald-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-100">
                Need a Web Security Audit or Vulnerability Patching?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Md Shovon offers comprehensive penetration tests, security header setups, and database injection hardening.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-xl font-semibold text-xs bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/20"
          >
            Request Security Consultation
          </a>
        </div>

      </div>
    </section>
  );
};
