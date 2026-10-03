import React, { useState } from 'react';
import { X, Calculator, Check, ArrowRight, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmInquiry: (details: { service: string; budget: string; description: string }) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, onConfirmInquiry }) => {
  const [selectedService, setSelectedService] = useState<string>('Website Development');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('Web / Browser');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Custom Responsive Design',
    'SEO & Core Web Vitals',
    'Inquiry / Lead Capture Forms'
  ]);
  const [timelineUrgency, setTimelineUrgency] = useState<'standard' | 'expedited'>('standard');

  if (!isOpen) return null;

  const featureOptions = [
    'Custom Responsive Design',
    'SEO & Core Web Vitals',
    'User Authentication & Roles',
    'Payment Gateway Integration',
    'CMS / Admin Dashboard',
    'Inquiry / Lead Capture Forms',
    'REST / GraphQL API Endpoints',
    'Automated CI/CD & Cloud Setup',
    'Push Notifications & Alerts'
  ];

  const toggleFeature = (feat: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feat) ? prev.filter((f) => f !== feat) : [...prev, feat]
    );
  };

  // Dynamic estimate calculator
  const calculateEstimate = () => {
    let base = 2000;
    if (selectedService.includes('Mobile')) base = 3500;
    if (selectedService.includes('Custom Software') || selectedService.includes('Management')) base = 4500;
    if (selectedService.includes('E-Commerce')) base = 3000;
    if (selectedService.includes('Cloud') || selectedService.includes('API')) base = 2500;

    const featureAddon = selectedFeatures.length * 400;
    const urgencyMultiplier = timelineUrgency === 'expedited' ? 1.25 : 1.0;

    const totalMin = Math.round((base + featureAddon) * urgencyMultiplier);
    const totalMax = Math.round(totalMin * 1.4);

    return {
      min: totalMin,
      max: totalMax,
      weeks: Math.max(2, Math.round(selectedFeatures.length * 0.8 + 2))
    };
  };

  const estimate = calculateEstimate();

  const handleApplyToForm = () => {
    const budgetStr = `$${estimate.min.toLocaleString()} - $${estimate.max.toLocaleString()}`;
    const descStr = `Estimated scope for ${selectedService} (${selectedPlatform}) with features: ${selectedFeatures.join(', ')}. Target timeline: ~${estimate.weeks} weeks.`;
    onConfirmInquiry({
      service: selectedService,
      budget: budgetStr,
      description: descStr
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0f1424] border border-white/10 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0a0e19] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-display font-bold text-white">
                Interactive Project Estimator
              </h3>
              <p className="text-[11px] text-slate-400">
                Configure your project scope to view an estimated price & development timeline.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Service Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
              1. Select Primary Solution
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.title)}
                  className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                    selectedService === service.title
                      ? 'bg-amber-400/15 border-amber-400 text-amber-300 font-semibold'
                      : 'bg-slate-900/60 border-white/5 text-slate-300 hover:border-white/15'
                  }`}
                >
                  <div className="truncate">{service.title}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
              2. Target Platform
            </label>
            <div className="flex flex-wrap gap-2">
              {['Web / Browser', 'iOS & Android (Cross-Platform)', 'Web + Mobile Bundle', 'Cloud Infrastructure & API Only'].map((plat) => (
                <button
                  key={plat}
                  onClick={() => setSelectedPlatform(plat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedPlatform === plat
                      ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                      : 'bg-slate-900 border border-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {plat}
                </button>
              ))}
            </div>
          </div>

          {/* Features Checklist */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
              3. Scope & Capabilities Required
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {featureOptions.map((feat) => {
                const isChecked = selectedFeatures.includes(feat);
                return (
                  <button
                    key={feat}
                    onClick={() => toggleFeature(feat)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left text-xs transition-all ${
                      isChecked
                        ? 'bg-slate-900 border-amber-400/40 text-slate-100 font-medium'
                        : 'bg-slate-900/40 border-white/5 text-slate-400 hover:border-white/10'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${isChecked ? 'bg-amber-400 text-slate-950' : 'border border-slate-600'}`}>
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="truncate">{feat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Timeline Urgency */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
              4. Delivery Pace
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setTimelineUrgency('standard')}
                className={`p-3 rounded-xl border text-left text-xs transition-all ${
                  timelineUrgency === 'standard'
                    ? 'bg-amber-400/15 border-amber-400 text-amber-300 font-medium'
                    : 'bg-slate-900/50 border-white/5 text-slate-400'
                }`}
              >
                <div className="font-semibold text-white">Standard Delivery</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Optimized milestone pace</div>
              </button>

              <button
                onClick={() => setTimelineUrgency('expedited')}
                className={`p-3 rounded-xl border text-left text-xs transition-all ${
                  timelineUrgency === 'expedited'
                    ? 'bg-amber-400/15 border-amber-400 text-amber-300 font-medium'
                    : 'bg-slate-900/50 border-white/5 text-slate-400'
                }`}
              >
                <div className="font-semibold text-white">Expedited Delivery</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Dedicated sprint team allocation</div>
              </button>
            </div>
          </div>

          {/* Calculated Output Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/10 to-transparent border border-amber-400/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                Estimated Project Investment
              </span>
              <span className="text-xs font-mono text-slate-400">
                Timeline: ~{estimate.weeks} Weeks
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-display font-extrabold text-white tabular-nums">
                ${estimate.min.toLocaleString()} – ${estimate.max.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400">USD (Estimated)</span>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              *Preliminary estimate based on selected parameters. Every project includes full custom code, test sign-off, responsive design, and deployment handover.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0a0e19] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={handleApplyToForm}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all"
          >
            <span>Proceed With This Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
