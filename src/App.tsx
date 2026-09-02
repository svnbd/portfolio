import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TechStackBar } from './components/TechStackBar';
import { AboutSection } from './components/AboutSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { InteractiveApiPlayground } from './components/InteractiveApiPlayground';
import { SecurityAuditMatrix } from './components/SecurityAuditMatrix';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectEstimator } from './components/ProjectEstimator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [inquiryBrief, setInquiryBrief] = useState<string>('');

  const handlePreloadBrief = (brief: string) => {
    setInquiryBrief(brief);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Core Tech Stack Ribbon */}
        <TechStackBar />

        {/* 3. About & Engineering Philosophy */}
        <AboutSection />

        {/* 4. Deep Skills & Technology Matrix */}
        <SkillsMatrix />

        {/* 5. Flagship Interactive REST API & Security Playground */}
        <InteractiveApiPlayground />

        {/* 6. Production Case Studies & Projects */}
        <ProjectsSection />

        {/* 7. OWASP Web Security & Hardening Matrix */}
        <SecurityAuditMatrix />

        {/* 8. Client Services & Deliverables */}
        <ServicesSection />

        {/* 9. Career Experience & Client Testimonials */}
        <ExperienceTimeline />

        {/* 10. Interactive Project Scope & Budget Estimator Container */}
        <section className="py-16 bg-[#0b0f19] border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectEstimator onPreloadContact={handlePreloadBrief} />
          </div>
        </section>

        {/* 11. Contact & Direct Reach Out */}
        <ContactSection initialMessage={inquiryBrief} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
