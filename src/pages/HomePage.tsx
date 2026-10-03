import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { WhatWeBuildSection } from '../components/WhatWeBuildSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { ProcessSection } from '../components/ProcessSection';
import { TechnologiesSection } from '../components/TechnologiesSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { AboutSection } from '../components/AboutSection';
import { IndustriesSection } from '../components/IndustriesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';
import { QuoteModal } from '../components/QuoteModal';
import { ProjectDetailModal } from '../components/ProjectDetailModal';
import { ServiceDetailModal } from '../components/ServiceDetailModal';
import { ServiceItem, ProjectItem } from '../types';

interface HomePageProps {
  isQuoteModalOpen: boolean;
  setIsQuoteModalOpen: (open: boolean) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ isQuoteModalOpen, setIsQuoteModalOpen }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [contactServicePreset, setContactServicePreset] = useState<string>('Website Development');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuickQuote = (serviceTitle: string) => {
    setContactServicePreset(serviceTitle);
    scrollToContact();
  };

  const handleApplyEstimate = (details: { service: string; budget: string; description: string }) => {
    setContactServicePreset(details.service);
    scrollToContact();
  };

  return (
    <main>
      {/* 1. Hero Section */}
      <Hero
        onStartProject={() => setIsQuoteModalOpen(true)}
        onExploreServices={scrollToServices}
      />

      {/* 2. Services Section */}
      <ServicesSection
        onSelectService={(service) => setSelectedService(service)}
        onQuickQuote={handleQuickQuote}
      />

      {/* 3. What We Build Section */}
      <WhatWeBuildSection
        onSelectSolution={(solution) => {
          setContactServicePreset(solution);
          scrollToContact();
        }}
      />

      {/* 4. Why Choose CodeHiveSolution */}
      <WhyChooseUsSection />

      {/* 5. Development Process */}
      <ProcessSection />

      {/* 6. Technologies Showcase */}
      <TechnologiesSection />

      {/* 7. Portfolio Section */}
      <PortfolioSection
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* 8. About CodeHiveSolution */}
      <AboutSection />

      {/* 9. Industries We Serve */}
      <IndustriesSection />

      {/* 10. Testimonials (Structured Placeholder) */}
      <TestimonialsSection
        onStartProject={() => setIsQuoteModalOpen(true)}
      />

      {/* 11. FAQ Section */}
      <FaqSection
        onContactClick={scrollToContact}
      />

      {/* 12. Contact & Project Scoping Form */}
      <ContactSection
        initialService={contactServicePreset}
      />

      {/* Interactive Project Estimator Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onConfirmInquiry={handleApplyEstimate}
      />

      {/* Project Detail Specification Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(title) => {
          setContactServicePreset(`Custom Solution based on ${title}`);
          scrollToContact();
        }}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(serviceTitle) => {
          setContactServicePreset(serviceTitle);
          scrollToContact();
        }}
      />
    </main>
  );
};
