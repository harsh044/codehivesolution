import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, ArrowRight, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService || 'Website Development',
    budget: '$3,000 - $7,000',
    timeline: '1 to 2 Months',
    description: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const budgetOptions = [
    '< $1,500 (Small Scope / MVP)',
    '$1,500 - $3,000 (Standard Website)',
    '$3,000 - $7,000 (Full-Stack Web/App)',
    '$7,000 - $15,000 (Comprehensive System)',
    '$15,000+ (Enterprise Architecture)',
    'Flexible / Open to Consultation'
  ];

  const timelineOptions = [
    'Urgent (< 3 weeks)',
    '1 to 2 Months',
    '2 to 4 Months',
    'Flexible / Planning Phase'
  ];

  const validate = () => {
    const errs: Partial<Record<keyof InquiryFormData, string>> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please give a brief summary of what you are looking to build.';
    } else if (formData.description.trim().length < 15) {
      errs.description = 'Please provide at least 15 characters describing your project.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || 'Unable to send your inquiry. Please try again.');
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to send your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#080b13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            Let&apos;s Build Together
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Have an Idea? Let&apos;s Build It.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Tell us about your project and we&apos;ll help you turn your idea into a digital solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details, Guarantees, Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl bg-[#0e1320] border border-white/10 p-8 space-y-6">
              <h3 className="text-xl font-display font-bold text-white">
                Direct Contact Information
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connect directly with our engineering and project scoping specialists. We respond to all inquiries within 24 business hours.
              </p>

              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">Email Us</div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-amber-300 transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <div className="text-[11px] text-slate-500">Official business inquiries</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">Call / WhatsApp</div>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-sm font-semibold text-white hover:text-amber-300 transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <div className="text-[11px] text-slate-500">Mon - Fri: 9:00 AM - 7:00 PM IST</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {COMPANY_INFO.location}
                    </div>
                    <div className="text-[11px] text-slate-500">Serving global clients with remote delivery</div>
                  </div>
                </div>
              </div>

              {/* Social Channels - Placeholders */}
              <div className="pt-6 border-t border-white/5 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Connect on Social Media
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={COMPANY_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                    aria-label="Instagram Profile"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  Official verified profiles
                </div>
              </div>
            </div>

            {/* Scoping Promise */}
            <div className="p-6 rounded-2xl bg-[#0d121f] border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Confidentiality & NDA Protection</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                All client project inquiries are handled under strict confidentiality. We sign non-disclosure agreements prior to deep architectural reviews.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0f1424] border border-white/10 p-7 sm:p-10 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-white">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting CodeHiveSolution, <strong className="text-white">{formData.name}</strong>. Our engineering leads will review your requirements and reach out at <strong className="text-amber-300">{formData.email}</strong> within 24 business hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 max-w-sm mx-auto text-left text-xs space-y-1">
                    <div className="text-slate-400">Selected Service: <span className="text-white font-medium">{formData.service}</span></div>
                    <div className="text-slate-400">Target Budget: <span className="text-white font-medium">{formData.budget}</span></div>
                    <div className="text-slate-400">Est. Timeline: <span className="text-white font-medium">{formData.timeline}</span></div>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSubmitError('');
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: 'Website Development',
                        budget: '$3,000 - $7,000',
                        timeline: '1 to 2 Months',
                        description: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all"
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-white/5 pb-4">
                    <h3 className="text-xl font-display font-bold text-white">
                      Project Specification Inquiry
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out the form below to receive a free architectural review and custom project quotation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-200">
                        Your Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Alex Johnson"
                        className={`w-full px-4 py-3 rounded-xl bg-[#090d16] border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.name ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-amber-400 focus:ring-amber-400'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-400">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-200">
                        Email Address <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#090d16] border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-amber-400 focus:ring-amber-400'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-200">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-200">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company or Startup Ltd."
                        className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Required */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-200">
                      Service Required <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title} className="bg-[#0e1320] text-white">
                          {s.title}
                        </option>
                      ))}
                      <option value="Multi-Service / Custom Consultation" className="bg-[#0e1320] text-white">
                        Multi-Service / Custom Consultation
                      </option>
                    </select>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-200">
                        Target Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b} className="bg-[#0e1320] text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-200">
                        Target Launch Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      >
                        {timelineOptions.map((t) => (
                          <option key={t} value={t} className="bg-[#0e1320] text-white">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-200">
                      Project Description & Requirements <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Please summarize your project goals, required features, target users, or existing system links..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#090d16] border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors resize-none ${
                        errors.description ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-amber-400 focus:ring-amber-400'
                      }`}
                    />
                    {errors.description && <p className="text-[11px] text-red-400">{errors.description}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 transition-all duration-200 active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Project Brief...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  {submitError && (
                    <p role="alert" className="text-center text-xs text-red-400">
                      {submitError}
                    </p>
                  )}

                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>Response within 24h</span>
                    </span>
                    <span>·</span>
                    <span>No Obligation</span>
                    <span>·</span>
                    <span>Free Technical Scoping</span>
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
