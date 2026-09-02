import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare,
  Clock,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialMessage = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Full Stack SaaS / Web App');
  const [message, setMessage] = useState(initialMessage || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync if initialMessage changes from estimator
  React.useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const handleSendDirectMail = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${projectType} - from ${name || 'Prospective Client'}`);
    const body = encodeURIComponent(`Hello Md Shovon,\n\n${message || 'I would like to discuss a project with you.'}\n\nBest regards,\n${name}\n${email}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#090d16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Build Together</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Get in Touch with Md Shovon
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl">
            Have a new project, need a scalable Laravel backend, high-speed React app, or security audit? Let's discuss requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-slate-100">
                Contact Information
              </h3>

              {/* Direct Email Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Direct Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 font-mono">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>

                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp / Messaging */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Fast Response Messaging</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200">
                      WhatsApp & Telegram Available
                    </div>
                  </div>
                </div>

                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Fast%20Project%20Inquiry`}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition-colors"
                >
                  Chat
                </a>
              </div>

              {/* Location & Availability */}
              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Typical Response Time: &lt; 4 Hours</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>NDA & IP Confidentiality Guaranteed</span>
                </div>
              </div>

            </div>

            {/* Availability status card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/20 via-slate-900 to-teal-950/20 border border-emerald-500/20">
              <div className="flex items-center gap-2.5 text-xs text-emerald-400 font-mono font-semibold mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>CURRENT ENGAGEMENT STATUS</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Accepting select high-impact contract engineering roles, custom full-stack SaaS builds, and web security audit engagements.
              </p>
            </div>

          </div>

          {/* Right Column: Contact & Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">
                    Message Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md">
                    Thank you for reaching out, <strong className="text-emerald-400">{name || 'there'}</strong>. Md Shovon will review your project brief and get back to you at <strong className="text-slate-200">{email}</strong> within a few hours.
                  </p>
                  <div className="pt-4 flex gap-3">
                    <button
                      onClick={handleSendDirectMail}
                      className="px-5 py-2.5 rounded-xl font-semibold text-xs bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-md flex items-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Also Open in Mail Client</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl font-medium text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe / Tech Lead"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                      Service / Project Type
                    </label>
                    <select
                      id="contact-project-type-select"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all"
                    >
                      <option value="Full Stack SaaS / Web App (Laravel + React)">Full Stack SaaS / Web App (Laravel + React)</option>
                      <option value="Secure API Engineering & Payment Integrations">Secure API Engineering & Payment Integrations</option>
                      <option value="MySQL Schema Design & Query Optimization">MySQL Schema Design & Query Optimization</option>
                      <option value="Web Security & OWASP Penetration Audit">Web Security & OWASP Penetration Audit</option>
                      <option value="Full-time Senior Engineering Hire">Full-time Senior Engineering Hire</option>
                      <option value="Other Custom Web Project">Other Custom Web Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                      Project Details / Message *
                    </label>
                    <textarea
                      id="contact-message-input"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your application goals, required features, timeline, and tech stack expectations..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-xs bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:from-emerald-400 hover:to-teal-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Project Inquiry'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendDirectMail}
                      className="text-xs text-slate-400 hover:text-slate-200 underline font-mono"
                    >
                      Or open in your email client →
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
