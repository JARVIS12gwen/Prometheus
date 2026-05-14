import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Users, 
  ChevronRight, 
  Sparkles,
  Play,
  ArrowRight
} from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

// SVG Icons for Tools (Simulated logos for Zapier, n8n, etc.)
const ZapierIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#FF4A00]">
    <path d="M17.65 14.88c-.68 0-1.25-.57-1.25-1.25s.57-1.25 1.25-1.25 1.25.57 1.25 1.25-.57 1.25-1.25 1.25m-11.3 0c-.68 0-1.25-.57-1.25-1.25s.57-1.25 1.25-1.25 1.25.57 1.25 1.25-.57 1.25-1.25 1.25m5.65-8.25c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
);

const N8NIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#FF6D5A]">
    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.8L19.2 8 12 11.2 4.8 8 12 4.8zM4 15.3V9.2l7 3.1v6.1l-7-3.1zm16 0l-7 3.1v-6.1l7-3.1v6.1z" />
  </svg>
);

const BardeenIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#0055FF]">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const OnboardingPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    useCase: '',
    name: '',
    birthDate: '',
    experience: [] as string[],
    source: '',
  });
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
    else navigate('/projects');
  };

  const steps = [
    {
      title: "What's your primary mission?",
      subtitle: "We'll tailor Prometheus to your specific workflow needs.",
      content: (
        <div className="grid grid-cols-2 gap-4">
          {[
            { id: 'personal', label: 'Personal Use', icon: Heart, color: 'text-pink-500' },
            { id: 'school', label: 'School Use', icon: GraduationCap, color: 'text-blue-500' },
            { id: 'business', label: 'Business Use', icon: Briefcase, color: 'text-orange-500' },
            { id: 'teams', label: 'Teams Use', icon: Users, color: 'text-purple-500' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFormData({ ...formData, useCase: item.id })}
              className={cn(
                "p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 glass",
                formData.useCase === item.id 
                  ? "border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.3)]" 
                  : "border-white/5 hover:border-white/20"
              )}
            >
              <item.icon className={cn("w-10 h-10", item.color)} />
              <span className="font-bold">{item.label}</span>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Let's personalize your pilot profile.",
      subtitle: "Tell us a bit about who's at the helm.",
      content: (
        <div className="space-y-6 max-w-md mx-auto">
          <div className="space-y-2">
            <Label>What should we call you?</Label>
            <Input 
              placeholder="Your name" 
              className="bg-white/5 border-white/10"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Date of Birth</Label>
            <Input 
              type="date" 
              className="bg-white/5 border-white/10"
              value={formData.birthDate}
              onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
            />
          </div>
        </div>
      )
    },
    {
      title: "Have you used automation tools before?",
      subtitle: "Select any tools you've already mastered.",
      content: (
        <div className="grid grid-cols-3 gap-4">
          {[
            { id: 'zapier', label: 'Zapier', Icon: ZapierIcon },
            { id: 'n8n', label: 'n8n', Icon: N8NIcon },
            { id: 'bardeen', label: 'Bardeen.ai', Icon: BardeenIcon },
            { id: 'make', label: 'Make.com', icon: Sparkles },
            { id: 'none', label: 'New to this!', icon: Sparkles },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                const newExp = formData.experience.includes(item.id)
                  ? formData.experience.filter(i => i !== item.id)
                  : [...formData.experience, item.id];
                setFormData({ ...formData, experience: newExp });
              }}
              className={cn(
                "p-4 rounded-xl border transition-all flex flex-col items-center gap-2 glass",
                formData.experience.includes(item.id)
                  ? "border-blue-500 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                  : "border-white/5 hover:border-white/10"
              )}
            >
              {item.Icon ? <item.Icon /> : <item.icon className="w-8 h-8 text-gray-400" />}
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Where did you hear about Prometheus?",
      subtitle: "Help us find more pioneers like you.",
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {['AI Tools', 'Instagram', 'Facebook', 'YouTube', 'X (Twitter)', 'Threads', 'Reddit', 'Search'].map((source) => (
            <button
              key={source}
              onClick={() => setFormData({ ...formData, source })}
              className={cn(
                "py-3 px-4 rounded-lg border text-sm transition-all glass",
                formData.source === source 
                  ? "border-blue-500 bg-blue-500/10" 
                  : "border-white/5 hover:bg-white/5"
              )}
            >
              {source}
            </button>
          ))}
        </div>
      )
    },
    {
      title: `Welcome to the future, ${formData.name || 'Pioneer'}!`,
      subtitle: "You're all set. Would you like a quick tour of Prometheus?",
      content: (
        <div className="flex flex-col items-center gap-6 py-10">
          <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center animate-pulse">
            <Sparkles className="w-12 h-12 text-blue-500" />
          </div>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-500 gap-2"
              onClick={() => alert("Tour Starting... (Implementation coming soon!)")}
            >
              <Play className="w-4 h-4" /> Yes, show me around!
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/10 hover:bg-white/5"
              onClick={handleNext}
            >
              No, I'll dive right in
            </Button>
          </div>
        </div>
      )
    }
  ];

  const currentStep = steps[step - 1];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="max-w-2xl w-full relative z-10"
      >
        <div className="text-center mb-10">
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <div 
                key={s} 
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  s <= step ? "w-8 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "w-2 bg-white/10"
                )} 
              />
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            {currentStep.title}
          </h1>
          <p className="text-gray-400 text-lg">
            {currentStep.subtitle}
          </p>
        </div>

        <div className="mb-12">
          {currentStep.content}
        </div>

        {step < 5 && (
          <div className="flex justify-center">
            <Button 
              size="lg" 
              disabled={step === 1 && !formData.useCase || step === 4 && !formData.source}
              onClick={handleNext}
              className="bg-white text-black hover:bg-gray-200 px-10 rounded-full font-bold h-14 group"
            >
              Continue <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}} />
    </div>
  );
};
