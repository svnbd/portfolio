import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Calculator, 
  Layers, 
  ShieldCheck, 
  Database, 
  Zap, 
  Check, 
  ArrowRight, 
  Sparkles,
  Clock,
  DollarSign
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectEstimatorProps {
  onPreloadContact?: (brief: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onPreloadContact }) => {
  const [projectType, setProjectType] = useState<'saas' | 'api' | 'security' | 'custom'>('saas');
  const [timeline, setTimeline] = useState<'express' | 'standard' | 'flexible'>('standard');
  const [databaseNeeds, setDatabaseNeeds] = useState<'standard' | 'high-concurrency'>('standard');
  const [securityHardening, setSecurityHardening] = useState<boolean>(true);
  const [apiGateway, setApiGateway] = useState<boolean>(true);

  // Estimation calculation logic
  const calculateEstimate = () => {
    let baseDays = 14;
    let basePrice = 1200;

    if (projectType === 'saas') {
      baseDays = 28;
      basePrice = 2400;
    } else if (projectType === 'api') {
      baseDays = 12;
      basePrice = 950;
    } else if (projectType === 'security') {
      baseDays = 7;
      basePrice = 750;
    } else {
      baseDays = 20;
      basePrice = 1600;
    }

    if (databaseNeeds === 'high-concurrency') {
      baseDays += 6;
      basePrice += 450;
    }

    if (securityHardening) {
      baseDays += 4;
      basePrice += 350;
    }

    if (apiGateway) {
      baseDays += 5;
      basePrice += 400;
    }

    if (timeline === 'express') {
      baseDays = Math.max(7, Math.round(baseDays * 0.65));
      basePrice = Math.round(basePrice * 1.25);
    }

    return { days: baseDays, priceRange: `$${basePrice} - $${Math.round(basePrice * 1.35)}` };
  };

  const estimate = calculateEstimate();

  const handleApplyToContact = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });

    const brief = `Hi Md Shovon, I'm interested in working together on a ${
      projectType === 'saas' ? 'Multi-tenant SaaS Application (Laravel + React)' :
      projectType === 'api' ? 'Secure API & Payment Integration Project' :
      projectType === 'security' ? 'Web Security Audit & OWASP Hardening' : 'Custom Web Development Project'
    }. Timeline preference: ${timeline.toUpperCase()}. Target estimate range: ${estimate.priceRange}.`;

    if (onPreloadContact) {
      onPreloadContact(brief);
    }

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-[#0c1220] border border-slate-800 shadow-2xl relative overflow-hidden">
      
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-100">
            Interactive Project Scope & Estimate Calculator
          </h3>
          <p className="text-xs text-slate-400">
            Customize requirements to get an instant estimated timeline & budget benchmark.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Controls */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Project Type */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
              1. Project Architecture & Scope
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'saas', label: 'Full SaaS' },
                { id: 'api', label: 'API & Payments' },
                { id: 'security', label: 'Security Audit' },
                { id: 'custom', label: 'Custom App' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setProjectType(t.id as any)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium border transition-colors ${
                    projectType === t.id
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Database Scale */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
              2. MySQL Database Complexity
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setDatabaseNeeds('standard')}
                className={`py-2 px-3 rounded-xl text-xs font-medium border text-left transition-colors ${
                  databaseNeeds === 'standard'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                    : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                <div className="font-semibold text-slate-200">Standard Relational</div>
                <div className="text-[10px] text-slate-400">Normal traffic & basic indexing</div>
              </button>

              <button
                onClick={() => setDatabaseNeeds('high-concurrency')}
                className={`py-2 px-3 rounded-xl text-xs font-medium border text-left transition-colors ${
                  databaseNeeds === 'high-concurrency'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                    : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                <div className="font-semibold text-slate-200">High-Concurrency & Cache</div>
                <div className="text-[10px] text-slate-400">Redis cache + compound B-Trees</div>
              </button>
            </div>
          </div>

          {/* Checkbox Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 cursor-pointer">
              <input
                type="checkbox"
                checked={securityHardening}
                onChange={(e) => setSecurityHardening(e.target.checked)}
                className="w-4 h-4 rounded text-emerald-500 focus:ring-0 bg-slate-900 border-slate-700"
              />
              <div className="text-xs">
                <div className="font-semibold text-slate-200">OWASP Security Shield</div>
                <div className="text-[10px] text-slate-400">CSRF, SQLi, Rate Limiting</div>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 cursor-pointer">
              <input
                type="checkbox"
                checked={apiGateway}
                onChange={(e) => setApiGateway(e.target.checked)}
                className="w-4 h-4 rounded text-emerald-500 focus:ring-0 bg-slate-900 border-slate-700"
              />
              <div className="text-xs">
                <div className="font-semibold text-slate-200">Payment & Webhooks API</div>
                <div className="text-[10px] text-slate-400">Stripe / SSLCommerz / bKash</div>
              </div>
            </label>
          </div>

        </div>

        {/* Output Estimation Summary Box */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-[#080c16] border border-emerald-500/30 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Estimated Architecture Plan
            </span>

            <div className="mt-4 space-y-3">
              <div className="flex items-baseline justify-between border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400 font-medium">Estimated Budget:</span>
                <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                  {estimate.priceRange}
                </span>
              </div>

              <div className="flex items-baseline justify-between border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400 font-medium">Estimated Timeline:</span>
                <span className="text-sm font-bold text-slate-200 font-mono flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  ~{estimate.days} Business Days
                </span>
              </div>

              <div className="text-xs text-slate-400 space-y-1 pt-1">
                <div>✓ Includes full source code & Git repo</div>
                <div>✓ Includes Postman/OpenAPI documentation</div>
                <div>✓ 30 days post-launch technical support</div>
              </div>
            </div>
          </div>

          <button
            onClick={handleApplyToContact}
            className="w-full py-3.5 rounded-xl font-semibold text-xs bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
          >
            <span>Lock In Estimate & Send Brief</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
