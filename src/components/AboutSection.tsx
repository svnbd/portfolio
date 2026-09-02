import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ShieldCheck, 
  Database, 
  Layers, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Server,
  Lock,
  Network,
  Cpu,
  Terminal
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const corePillars = [
    {
      title: 'Scalable Full-Stack Architecture',
      description: 'Crafting clean, decoupled web applications using PHP (Laravel) for business logic & data modeling paired with React for lightning-fast, reactive user interfaces.',
      icon: Layers,
      color: 'from-emerald-500/20 to-teal-500/10',
      borderColor: 'border-emerald-500/30',
      iconColor: 'text-emerald-400'
    },
    {
      title: 'High-Concurrency MySQL & Optimization',
      description: 'Designing normalized schemas, strategic compound indexing, transaction safety (ACID), and query optimization to handle massive traffic with sub-50ms execution times.',
      icon: Database,
      color: 'from-sky-500/20 to-blue-500/10',
      borderColor: 'border-sky-500/30',
      iconColor: 'text-sky-400'
    },
    {
      title: 'Enterprise Web Security & OWASP Hardening',
      description: 'Proactively securing applications against SQL Injection, CSRF, XSS, brute-force exploits, and enforcing strict Content Security Policies (CSP) and Sanctum tokens.',
      icon: ShieldCheck,
      color: 'from-amber-500/20 to-orange-500/10',
      borderColor: 'border-amber-500/30',
      iconColor: 'text-amber-400'
    },
    {
      title: 'Seamless API & Payment Gateway Integrations',
      description: 'Engineering resilient RESTful endpoints, webhook verification engines with HMAC SHA-256 signatures, and integrating Stripe, SSLCommerz, bKash, and PayPal seamlessly.',
      icon: Network,
      color: 'from-teal-500/20 to-cyan-500/10',
      borderColor: 'border-teal-500/30',
      iconColor: 'text-teal-400'
    }
  ];

  const highlights = [
    '5+ years building production-grade PHP & Laravel web platforms',
    'Deep proficiency in modern JavaScript, React 19, and Node.js microservices',
    'Proven track record optimizing complex MySQL databases and queries',
    'Specialist in Web Application Security (OWASP Top 10 Mitigation)',
    'Experience delivering multi-tenant SaaS, fintech, e-commerce & dispatch apps',
    'Clean git version control, Docker workflows, and Linux deployment'
  ];

  return (
    <section id="about" className="py-24 bg-[#0b0f19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-4">
            <Server className="w-3.5 h-3.5" />
            <span>About Md Shovon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight max-w-3xl">
            Passionate Full Stack Engineer Focused on Performance, Scalability & Security
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-2xl">
            Bridging elegant frontend user experiences with rock-solid PHP/Laravel backends, Node.js services, and optimized MySQL databases.
          </p>
        </div>

        {/* 2-Column Story & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Bio Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
              Engineering web systems that scale effortlessly and stay secure under load.
            </h3>
            
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              I am <strong className="text-emerald-400 font-semibold">Md Shovon</strong>, a dedicated Full Stack Web Developer. Over the past 5+ years, I have architected and deployed diverse web applications ranging from high-concurrency multi-tenant SaaS platforms to payment gateway aggregators and real-time dispatch dashboards.
            </p>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              My technical foundation centers around <strong className="text-slate-100">PHP and the Laravel Framework</strong> for structured, maintainable backend services, combined with <strong className="text-cyan-400">React.js</strong> and <strong className="text-emerald-400">Node.js</strong> for modern, dynamic client-side experiences.
            </p>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              What sets my work apart is a relentless commitment to <strong className="text-amber-300">Web Security</strong> and <strong className="text-sky-300">Database Efficiency</strong>. I design database schemas from day one with appropriate indexes, sanitize every input parameter to defeat injection vectors, and construct APIs with rate limiting and cryptographic signature verification.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              {highlights.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 group"
              >
                <span>View Full Skill Breakdown</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Core Architecture Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-gradient-to-b ${pillar.color} bg-slate-900/80 border ${pillar.borderColor} hover:border-slate-600 transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center mb-4 shadow-sm">
                      <IconComp className={`w-6 h-6 ${pillar.iconColor}`} />
                    </div>
                    <h4 className="text-base font-bold text-slate-100 mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
