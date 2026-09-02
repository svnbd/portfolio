import React from 'react';
import { EXPERIENCES, TESTIMONIALS } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Star, 
  Quote, 
  Sparkles,
  Award
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0b0f19] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Work Experience & Track Record
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl">
            A consistent history of building reliable web applications, mentoring junior engineers, and delivering high-scale software.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12 mb-20">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-6 md:pl-10">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0b0f19] border-2 border-emerald-400 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>

              {/* Period Date Tag on Left for Desktop */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs font-mono font-semibold text-emerald-400 mb-1 md:mb-0 md:w-28 md:text-right">
                {exp.period}
              </div>

              {/* Card Body */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-slate-100">
                    {exp.role}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    {exp.company}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                  <span>•</span>
                  <span>{exp.type}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2 mb-4">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Client Testimonials Section */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
              Client & Engineering Feedback
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              What founders, CTOs, and technical leads say about working with Md Shovon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-100">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {t.role}, {t.company}
                    </div>
                    <div className="text-[10px] font-mono text-emerald-400 mt-0.5">
                      {t.projectType}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
