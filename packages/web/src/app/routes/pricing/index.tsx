import { motion } from 'framer-motion';
import { Check, ArrowRight, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export const PricingPage = () => {
  const { t } = useTranslation();
  const plans = [
    {
      name: 'Launch',
      price: '8.99',
      description: 'Get started with the essentials and watch your ideas take flight.',
      features: ['+ 100 Users', 'Basic Automation', 'Community Support'],
      save: '10%',
      delay: 0.1,
    },
    {
      name: 'Advance',
      price: '12.99',
      description: 'Step up your game with smarter tools and greater power.',
      features: ['+ 100 Users', '+ 3 Extra months', 'Advanced Tools'],
      save: '10%',
      delay: 0.2,
      popular: true,
      tag: 'Best Deal',
    },
    {
      name: 'Infinity',
      price: '17.99',
      description: 'Unlock limitless potential — the future is yours to create.',
      features: ['+ 100 Users', 'Unlimited Flows', 'Priority Support'],
      save: '10%',
      delay: 0.3,
    },
    {
      name: 'Elite',
      price: '49.99',
      description: 'The absolute pinnacle of automation for masters.',
      features: ['Unlimited Users', 'Dedicated Support', 'Custom Architecture'],
      save: '20%',
      delay: 0.4,
    },
  ];

  return (
    <div className="min-h-full py-20 px-4 bg-[#0a0a0c] text-white overflow-hidden relative font-sans">
      {/* Dynamic Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10 mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
        >
          All-In-One Price, Zero Hassle.<br />Cancel Anytime. Let’s Get Started!
        </motion.h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto font-medium">
          Clear Pricing, No Strings Attached. Remember When SaaS Was This Simple? It’s Time To Make It That Easy Again.
        </p>
        
        <div className="flex justify-center gap-4 mt-10">
          {['+10 Users', '+100 Users', '+500 Users', '+1000 Users'].map((u, i) => (
            <button key={u} className={`px-4 py-2 rounded-full text-sm border transition-all ${i === 1 ? 'bg-white text-black border-white' : 'border-white/20 text-gray-400'}`}>
              {u} {i === 3 && <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full ml-1 text-white uppercase font-bold">Save 24%</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: plan.delay }}
            className={`relative group rounded-[32px] p-[1px] ${plan.popular ? 'bg-gradient-to-b from-blue-500 to-purple-600 scale-105 z-20 shadow-2xl shadow-purple-500/20' : 'bg-white/10'}`}
          >
            <div className="bg-[#111114] rounded-[31px] p-8 h-full flex flex-col glass">
              {plan.tag && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-full flex items-center gap-2 shadow-xl border border-white/20">
                  <Star className="w-4 h-4 fill-white" />
                  <span className="text-sm font-bold uppercase tracking-wider">{plan.tag}</span>
                </div>
              )}

              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                {plan.save && (
                  <span className="text-[10px] bg-white/10 text-white border border-white/20 px-2 py-1 rounded-full uppercase font-bold">
                    Save {plan.save}
                  </span>
                )}
              </div>

              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {plan.description}
              </p>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-gray-500">/ user</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow text-left">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className={`text-sm ${feature.includes('+') ? 'text-blue-400 font-bold' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full py-7 rounded-2xl flex items-center justify-center gap-2 text-lg font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group/btn ${
                  plan.popular 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]' 
                  : 'bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
              >
                {/* Shine Animation */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-[30deg] -translate-x-[200%] group-hover/btn:animate-[shine_1s_ease-in-out_infinite] pointer-events-none" />
                Upgrade Now <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine {
          0% { transform: translateX(-200%) skewX(-30deg); }
          100% { transform: translateX(300%) skewX(-30deg); }
        }
      `}} />
    </div>
  );
};

export default PricingPage;
