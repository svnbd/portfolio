import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ShieldCheck, 
  Terminal, 
  Database, 
  Layers, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles,
  Lock,
  Zap,
  Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const HeroSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'laravel' | 'react' | 'mysql'>('laravel');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownloadCv = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    // Create printable cv overview download
    const cvText = `
MD SHOVON - FULL STACK DEVELOPER
Email: ${PERSONAL_INFO.email}
Specialties: PHP, Laravel, JavaScript, React, Node.js, MySQL, Web Security & API Integrations
Location: ${PERSONAL_INFO.location}

SUMMARY:
${PERSONAL_INFO.shortBio}

CORE TECHNICAL SKILLS:
- Backend: PHP 8.x, Laravel 11/10 (Sanctum, Passport, Queues, Eloquent), Node.js, Express.js
- Frontend: JavaScript (ES6+), React 19, TypeScript, Tailwind CSS, State Management (Zustand/Redux)
- Databases: MySQL 8 (B-Tree Indexes, Query Execution Plans, Stored Procedures, ACID Transactions), Redis
- Security & APIs: OWASP Top 10 Mitigation, CSRF/XSS, SQLi Protection, Rate Limiting, OAuth2, HMAC SHA-256 Webhooks, RESTful APIs, Payment Gateways (Stripe, SSLCommerz, bKash)
- DevOps & Tools: Docker, Git/GitHub, Linux Ubuntu/Debian, Nginx, CI/CD pipelines, Postman

EXPERIENCE & PROJECTS:
- Multi-Tenant Enterprise SaaS (Laravel + React + MySQL + Stripe)
- High-Throughput Payment & Merchant API Engine (Node.js + MySQL + HMAC)
- Real-Time Logistics & Fleet Tracking (Laravel + React + Node.js WebSockets)
- HealthVault Secure Patient Portal (HIPAA Aligned, Field-Level Encryption)
    `.trim();

    const blob = new Blob([cvText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Md_Shovon_Full_Stack_Developer_Resume.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section 
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern bg-radial-glow"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 shadow-inner mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-emerald-300">
                Full Stack Developer • PHP, Laravel, React & Node.js
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15] mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Md Shovon
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-slate-300 font-bold">
                Building Scalable & Secure Web Applications.
              </span>
            </h1>

            {/* Bio & Focus Summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Specialized in engineering robust backend architectures with <strong className="text-emerald-400 font-semibold">PHP & Laravel</strong>, interactive reactive frontends with <strong className="text-cyan-400 font-semibold">React</strong> & <strong className="text-teal-400 font-semibold">Node.js</strong>, high-performance <strong className="text-emerald-400 font-semibold">MySQL</strong> database design, enterprise <strong className="text-amber-300 font-semibold">Web Security</strong>, and seamless <strong className="text-teal-300 font-semibold">API integrations</strong>.
            </p>

            {/* Quick Skill Tags Pill Strip */}
            <div className="flex flex-wrap gap-2 mb-8 max-w-2xl">
              {[
                { name: 'PHP 8.x', category: 'backend' },
                { name: 'Laravel 11', category: 'backend' },
                { name: 'JavaScript ES6+', category: 'frontend' },
                { name: 'React.js', category: 'frontend' },
                { name: 'Node.js', category: 'backend' },
                { name: 'MySQL Database', category: 'db' },
                { name: 'Web Security (OWASP)', category: 'sec' },
                { name: 'REST & Webhooks APIs', category: 'api' },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-700/60 shadow-sm flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:from-emerald-400 hover:to-teal-400 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 active:scale-98"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-api-playground-btn"
                href="#api-playground"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 text-slate-200 hover:text-white hover:bg-slate-800 border border-slate-700/80 transition-all duration-200"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Test API Playground</span>
              </a>

              <button
                id="hero-download-cv-btn"
                onClick={handleDownloadCv}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-medium text-xs text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 transition-all duration-200"
                title="Download Technical Resume"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Quick Contact & Copy Email Pill */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-4 border-t border-slate-800/80 w-full">
              <span className="font-mono text-slate-400">Direct Contact:</span>
              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-200 hover:border-emerald-500/60 hover:text-emerald-300 transition-colors font-mono"
              >
                <span>{PERSONAL_INFO.email}</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                )}
              </button>
              {copiedEmail && (
                <span className="text-emerald-400 text-xs font-semibold animate-fade-in">
                  Copied to clipboard!
                </span>
              )}
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Visualizer */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/70 to-slate-900/90 p-[1.5px] shadow-2xl shadow-emerald-950/20">
              <div className="w-full bg-[#0d121f] rounded-[15px] overflow-hidden border border-slate-800/80">
                
                {/* Code Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0a0e17] border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400 font-medium">
                      Architecture Engine
                    </span>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 bg-slate-900/90 p-0.5 rounded-lg border border-slate-800">
                    <button
                      id="code-tab-laravel"
                      onClick={() => setActiveCodeTab('laravel')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-colors ${
                        activeCodeTab === 'laravel'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Laravel.php
                    </button>
                    <button
                      id="code-tab-react"
                      onClick={() => setActiveCodeTab('react')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-colors ${
                        activeCodeTab === 'react'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      React.tsx
                    </button>
                    <button
                      id="code-tab-mysql"
                      onClick={() => setActiveCodeTab('mysql')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-colors ${
                        activeCodeTab === 'mysql'
                          ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      MySQL.sql
                    </button>
                  </div>
                </div>

                {/* Code Window Body */}
                <div className="p-4 sm:p-5 font-mono text-xs overflow-x-auto leading-relaxed text-slate-300 bg-[#0d121f]">
                  {activeCodeTab === 'laravel' && (
                    <div className="space-y-1">
                      <div className="text-slate-500 font-italic">// Laravel 11 Secure Controller & Sanctum API</div>
                      <div><span className="text-pink-400">namespace</span> <span className="text-amber-300">App\Http\Controllers\Api</span>;</div>
                      <div className="text-slate-500"> </div>
                      <div><span className="text-pink-400">class</span> <span className="text-yellow-300">OrderApiController</span> <span className="text-pink-400">extends</span> <span className="text-yellow-300">BaseController</span> {'{'}</div>
                      <div className="pl-4">
                        <span className="text-slate-500">// Zero-trust payload sanitization & rate limit</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-pink-400">public function</span> <span className="text-blue-400">processPayment</span>(<span className="text-yellow-300">SecurePaymentRequest</span> <span className="text-emerald-300">$request</span>) {'{'}
                      </div>
                      <div className="pl-8 text-slate-300">
                        <span className="text-emerald-300">$user</span> = <span className="text-blue-400">$request</span>-&gt;<span className="text-teal-300">user</span>();
                      </div>
                      <div className="pl-8 text-slate-300">
                        <span className="text-slate-500">// Verify HMAC SHA-256 signature</span>
                      </div>
                      <div className="pl-8 text-slate-300">
                        <span className="text-pink-400">if</span> (!<span className="text-yellow-300">SecurityVault</span>::<span className="text-blue-400">verifyHmac</span>(<span className="text-emerald-300">$request</span>)) {'{'}
                      </div>
                      <div className="pl-12 text-rose-400">
                        <span className="text-pink-400">return</span> <span className="text-blue-400">response</span>()-&gt;<span className="text-teal-300">json</span>(['error' =&gt; 'Tampered_Payload'], 401);
                      </div>
                      <div className="pl-8">{'}'}</div>
                      <div className="pl-8 text-slate-300">
                        <span className="text-emerald-300">$order</span> = <span className="text-yellow-300">DB</span>::<span className="text-blue-400">transaction</span>(<span className="text-pink-400">fn</span>() =&gt; <br />
                        <span className="pl-4 text-emerald-300">$this</span>-&gt;<span className="text-teal-300">orderRepo</span>-&gt;<span className="text-blue-400">lockAndCharge</span>(<span className="text-emerald-300">$request</span>-&gt;<span className="text-teal-300">validated</span>())<br />
                        );
                      </div>
                      <div className="pl-8 text-emerald-400">
                        <span className="text-pink-400">return</span> <span className="text-blue-400">response</span>()-&gt;<span className="text-teal-300">json</span>(['status' =&gt; 'settled', 'order' =&gt; <span className="text-emerald-300">$order</span>], 200);
                      </div>
                      <div className="pl-4">{'}'}</div>
                      <div>{'}'}</div>
                    </div>
                  )}

                  {activeCodeTab === 'react' && (
                    <div className="space-y-1">
                      <div className="text-slate-500">// React 19 Custom Secure API Hydration Hook</div>
                      <div><span className="text-pink-400">import</span> {'{ useState, useEffect }'} <span className="text-pink-400">from</span> <span className="text-emerald-300">'react'</span>;</div>
                      <div className="text-slate-500"> </div>
                      <div><span className="text-pink-400">export function</span> <span className="text-blue-400">useSecureStream</span>&lt;<span className="text-yellow-300">T</span>&gt;(<span className="text-cyan-300">endpoint</span>: <span className="text-amber-300">string</span>) {'{'}</div>
                      <div className="pl-4 text-slate-300">
                        <span className="text-pink-400">const</span> [<span className="text-cyan-300">data</span>, <span className="text-blue-400">setData</span>] = <span className="text-blue-400">useState</span>&lt;<span className="text-yellow-300">T</span> | <span className="text-pink-400">null</span>&gt;(<span className="text-pink-400">null</span>);
                      </div>
                      <div className="pl-4 text-slate-300">
                        <span className="text-blue-400">useEffect</span>(() =&gt; {'{'}
                      </div>
                      <div className="pl-8 text-slate-300">
                        <span className="text-pink-400">const</span> <span className="text-cyan-300">controller</span> = <span className="text-pink-400">new</span> <span className="text-yellow-300">AbortController</span>();
                      </div>
                      <div className="pl-8 text-slate-300">
                        <span className="text-blue-400">fetch</span>(<span className="text-cyan-300">endpoint</span>, {'{'}
                      </div>
                      <div className="pl-12 text-slate-300">
                        <span className="text-teal-300">headers</span>: {'{'}
                      </div>
                      <div className="pl-16 text-emerald-300">
                        <span className="text-amber-300">'Authorization'</span>: <span className="text-slate-200">`Bearer ${'{'}sessionToken{'}'}`</span>,
                      </div>
                      <div className="pl-16 text-emerald-300">
                        <span className="text-amber-300">'X-CSRF-Token'</span>: <span className="text-slate-200">window.csrfToken</span>,
                      </div>
                      <div className="pl-12 text-slate-300">{'}'},</div>
                      <div className="pl-12 text-slate-300">
                        <span className="text-teal-300">signal</span>: <span className="text-cyan-300">controller.signal</span>
                      </div>
                      <div className="pl-8 text-slate-300">{'}'})</div>
                      <div className="pl-12 text-blue-400">.then(<span className="text-cyan-300">res</span> =&gt; <span className="text-cyan-300">res</span>.json())</div>
                      <div className="pl-12 text-blue-400">.then(<span className="text-cyan-300">payload</span> =&gt; setData(<span className="text-cyan-300">payload</span>));</div>
                      <div className="pl-8 text-slate-300">
                        <span className="text-pink-400">return</span> () =&gt; <span className="text-cyan-300">controller</span>.<span className="text-blue-400">abort</span>();
                      </div>
                      <div className="pl-4">{'}'}, [<span className="text-cyan-300">endpoint</span>]);</div>
                      <div className="pl-4 text-emerald-400">
                        <span className="text-pink-400">return</span> {'{ data }'};
                      </div>
                      <div>{'}'}</div>
                    </div>
                  )}

                  {activeCodeTab === 'mysql' && (
                    <div className="space-y-1">
                      <div className="text-slate-500">-- High-Concurrency MySQL 8 Schema & Composite Indexing</div>
                      <div><span className="text-pink-400">CREATE TABLE</span> <span className="text-amber-300">orders</span> (</div>
                      <div className="pl-4">
                        <span className="text-cyan-300">id</span> <span className="text-yellow-300">BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">tenant_id</span> <span className="text-yellow-300">VARCHAR(64) NOT NULL</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">amount_cents</span> <span className="text-yellow-300">INT UNSIGNED NOT NULL</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">status</span> <span className="text-yellow-300">ENUM('pending','paid','fraud_flag') DEFAULT 'pending'</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">created_at</span> <span className="text-yellow-300">TIMESTAMP DEFAULT CURRENT_TIMESTAMP</span>,
                      </div>
                      <div className="pl-4 text-emerald-400">
                        <span className="text-pink-400">INDEX</span> <span className="text-amber-300">idx_tenant_status_created</span> (<span className="text-cyan-300">tenant_id</span>, <span className="text-cyan-300">status</span>, <span className="text-cyan-300">created_at</span>)
                      </div>
                      <div>) <span className="text-yellow-300">ENGINE=InnoDB DEFAULT CHARSET=utf8mb4</span>;</div>
                      <div className="text-slate-500 pt-2">-- Sub-10ms range filter execution via B-Tree index scan</div>
                    </div>
                  )}
                </div>

                {/* Live Architecture Status Footer */}
                <div className="px-4 py-3 bg-[#0a0e17] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-300 font-semibold">Security Engine:</span>
                    <span className="text-emerald-400">OWASP Hardened</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Database Engine:</span>
                    <span className="text-cyan-300">MySQL 8 InnoDB</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-xl font-bold text-slate-100 font-mono">
                  {PERSONAL_INFO.yearsExperience}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Years Experience</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-xl font-bold text-emerald-400 font-mono">
                  {PERSONAL_INFO.projectsCompleted}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Web Apps Built</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-xl font-bold text-cyan-400 font-mono">
                  100%
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">API Security Score</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
