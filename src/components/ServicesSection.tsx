import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { 
  Layout, 
  Network, 
  Database, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  Layers
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return Layout;
      case 'Network': return Network;
      case 'Database': return Database;
      case 'ShieldAlert': return ShieldAlert;
      default: return Layers;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#090d16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Client Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Specialized Development & Consulting Services
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl">
            Whether launching a new SaaS from scratch or hardening existing systems against security threats and slow queries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const IconComp = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">
                        {service.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {service.technologies.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Key Deliverables:
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {service.deliverables.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    <strong className="text-slate-300">Ideal for:</strong> {service.idealFor}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 group shrink-0"
                  >
                    <span>Hire for this service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
