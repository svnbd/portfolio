import React from 'react';
import { 
  Server, 
  Code2, 
  Database, 
  ShieldCheck, 
  Cpu, 
  FileCode2, 
  Terminal, 
  Lock, 
  Network,
  Boxes
} from 'lucide-react';

export const TechStackBar: React.FC = () => {
  const technologies = [
    { name: 'PHP 8.x', category: 'Backend Engine', icon: Server, color: 'text-indigo-400', border: 'border-indigo-500/20' },
    { name: 'Laravel 11', category: 'MVC Framework', icon: Boxes, color: 'text-red-400', border: 'border-red-500/20' },
    { name: 'JavaScript ES6+', category: 'Core Language', icon: FileCode2, color: 'text-yellow-400', border: 'border-yellow-500/20' },
    { name: 'React.js', category: 'Frontend UI', icon: Code2, color: 'text-cyan-400', border: 'border-cyan-500/20' },
    { name: 'Node.js', category: 'Async Runtime', icon: Cpu, color: 'text-emerald-400', border: 'border-emerald-500/20' },
    { name: 'MySQL 8', category: 'Relational DB', icon: Database, color: 'text-sky-400', border: 'border-sky-500/20' },
    { name: 'Web Security', category: 'OWASP & Defense', icon: ShieldCheck, color: 'text-emerald-400', border: 'border-emerald-500/20' },
    { name: 'REST & Webhooks', category: 'API Integration', icon: Network, color: 'text-teal-400', border: 'border-teal-500/20' },
    { name: 'Git & Docker', category: 'DevOps & CI/CD', icon: Terminal, color: 'text-slate-300', border: 'border-slate-500/20' },
  ];

  return (
    <section className="py-8 bg-[#090d16] border-y border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Core Competencies
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 w-full">
            {technologies.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={tech.name}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border ${tech.border} transition-all duration-200 group text-center hover:scale-105`}
                >
                  <IconComponent className={`w-5 h-5 ${tech.color} mb-1.5 group-hover:scale-110 transition-transform`} />
                  <span className="text-xs font-semibold text-slate-200 whitespace-nowrap">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-slate-400 whitespace-nowrap font-mono mt-0.5">
                    {tech.category}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
