import React from 'react';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  Github, 
  ShieldCheck, 
  Database, 
  Server, 
  Code2, 
  CheckCircle2, 
  Lock,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#0e1424] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image with Overlay */}
        <div className="relative h-48 sm:h-64 w-full shrink-0 overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover brightness-[0.7]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1424] via-[#0e1424]/40 to-transparent" />
          
          {/* Close Button */}
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Title on Image */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          
          {/* Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-base sm:text-xl font-bold text-emerald-400 font-mono">
                  {m.value}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Deep Architectural Breakdown */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Full-Stack Architecture</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-1.5 font-semibold text-emerald-400 mb-1">
                  <Server className="w-3.5 h-3.5" />
                  <span>Backend Framework</span>
                </div>
                <p className="text-slate-300">{project.architecture.backend}</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-1.5 font-semibold text-cyan-400 mb-1">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Frontend Client</span>
                </div>
                <p className="text-slate-300">{project.architecture.frontend}</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-1.5 font-semibold text-sky-400 mb-1">
                  <Database className="w-3.5 h-3.5" />
                  <span>Database & Caching</span>
                </div>
                <p className="text-slate-300">{project.architecture.database}</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-1.5 font-semibold text-amber-400 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Security & Webhooks</span>
                </div>
                <p className="text-slate-300">{project.architecture.security}</p>
              </div>
            </div>
          </div>

          {/* Long Description */}
          <div className="space-y-2">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-bold">
              Project Overview
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Core Features */}
          <div className="space-y-2">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-bold">
              Key Engineering Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Web Security Implementations */}
          <div className="space-y-2">
            <h3 className="text-sm font-mono uppercase tracking-wider text-amber-300 font-bold flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>Web Security Measures Implemented</span>
            </h3>
            <div className="space-y-1.5 p-4 rounded-xl bg-amber-950/20 border border-amber-500/20">
              {project.securityImplementations.map((sec, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-amber-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{sec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* API Endpoints if present */}
          {project.apiEndpoints && project.apiEndpoints.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-bold">
                Sample Production API Endpoints
              </h3>
              <div className="bg-[#070a12] p-3 rounded-lg border border-slate-800 font-mono text-xs space-y-1 text-slate-300">
                {project.apiEndpoints.map((ep, idx) => (
                  <div key={idx} className="text-emerald-400">
                    {ep}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#090d16] border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-mono">
            Architected by <strong className="text-slate-200">Md Shovon</strong>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/20"
            >
              Discuss Similar Project
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
