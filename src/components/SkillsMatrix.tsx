import React, { useState } from 'react';
import { CORE_SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';
import { 
  Server, 
  Code2, 
  Database, 
  ShieldCheck, 
  Cpu, 
  FileCode, 
  Terminal, 
  Network,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines', count: CORE_SKILLS.length },
    { id: 'backend', label: 'PHP & Backend', count: CORE_SKILLS.filter(s => s.category === 'backend').length },
    { id: 'frontend', label: 'React & Frontend', count: CORE_SKILLS.filter(s => s.category === 'frontend').length },
    { id: 'database', label: 'MySQL & Data', count: CORE_SKILLS.filter(s => s.category === 'database').length },
    { id: 'security', label: 'Web Security & APIs', count: CORE_SKILLS.filter(s => s.category === 'security').length },
    { id: 'tools', label: 'DevOps & Tooling', count: CORE_SKILLS.filter(s => s.category === 'tools').length },
  ];

  const filteredSkills = activeCategory === 'all'
    ? CORE_SKILLS
    : CORE_SKILLS.filter(s => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return Server;
      case 'Cpu': return Cpu;
      case 'Code2': return Code2;
      case 'FileCode': return FileCode;
      case 'Database': return Database;
      case 'ShieldCheck': return ShieldCheck;
      case 'Network': return Network;
      case 'Terminal': return Terminal;
      default: return Layers;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#090d16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Comprehensive Skills & Technology Stack
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl">
            Battle-tested engineering expertise across the entire web stack — with specialized depth in Laravel, React, Node.js, MySQL optimization, and API security.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`skills-tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                activeCategory === cat.id ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = getIcon(skill.iconName);
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 transition-all duration-200 hover:shadow-xl hover:shadow-emerald-950/10 flex flex-col justify-between"
              >
                <div>
                  {/* Skill Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-emerald-400 shadow-inner">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-100">
                          {skill.name}
                        </h3>
                        <span className="text-xs font-mono text-emerald-400 font-medium">
                          {skill.experience} Production Experience
                        </span>
                      </div>
                    </div>
                    
                    {/* Level Metric */}
                    <div className="text-right">
                      <span className="text-sm font-bold font-mono text-slate-200">
                        {skill.level}%
                      </span>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Proficiency</div>
                    </div>
                  </div>

                  {/* Level Progress Bar */}
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-4">
                    <div
                      className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Highlights / Features list */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider font-semibold">
                    Core Implementations:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {skill.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Database & Architecture Highlights Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0d1527] to-slate-900 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 font-semibold">DATABASE MASTERY</span>
              <h4 className="text-base font-bold text-slate-100">MySQL 8 & Index Optimization</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Expert in EXPLAIN execution plans, compound B-tree index design, and eliminating slow table scans.
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400 font-semibold">API SECURITY</span>
              <h4 className="text-base font-bold text-slate-100">Zero-Trust REST & OAuth</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Laravel Sanctum token scoping, rate-limiting shields, and HMAC SHA-256 webhook signatures.
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-teal-400 font-semibold">FRONTEND AGILITY</span>
              <h4 className="text-base font-bold text-slate-100">React 19 & Dynamic SPAs</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Component reusability, custom data hooks, memoization, and responsive Tailwind layouts.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
