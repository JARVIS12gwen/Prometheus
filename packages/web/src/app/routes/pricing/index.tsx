import { motion } from 'framer-motion';
import { Check, Zap, Crown, Building2 } from 'lucide-react';
import { t } from 'i18next';
import { Button } from '@/components/ui/button';

export const PricingPage = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started with automation.',
      features: ['1,000 Tasks/mo', 'Unlimited Flows', 'Community Support', 'Basic Pieces'],
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      color: 'from-blue-500/20 to-cyan-500/20',
      delay: 0.1,
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'Power your business with advanced features.',
      features: ['10,000 Tasks/mo', 'Premium Pieces', 'Email Support', 'Shared Connections'],
      icon: <Check className="w-6 h-6 text-purple-400" />,
      color: 'from-purple-500/20 to-pink-500/20',
      delay: 0.2,
      popular: true,
    },
    {
      name: 'Legend',
      price: '$99',
      description: 'The ultimate power for automation experts.',
      features: ['50,000 Tasks/mo', 'Priority Support', 'Custom Scripts', 'Advanced Analytics'],
      icon: <Crown className="w-6 h-6 text-amber-400" />,
      color: 'from-amber-500/20 to-orange-500/20',
      delay: 0.3,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Security and scale for large organizations.',
      features: ['Unlimited Tasks', 'Dedicated Account Manager', 'SSO & Audit Logs', 'SLA Guarantee'],
      icon: <Building2 className="w-6 h-6 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-500/20',
      delay: 0.4,
    },
  ];

  return (
    <div className="min-h-full py-12 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden relative">
      {/* Background Orbs for extra premium feel */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base font-semibold text-primary tracking-wide uppercase"
        >
          {t('Pricing')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 text-4xl font-extrabold text-foreground sm:text-5xl lg:text-6xl"
        >
          Choose your power level
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-2xl text-xl text-muted-foreground mx-auto"
        >
          Scale your automation with Prometheus. Simple, transparent pricing for everyone.
        </motion.p>
      </div>

      <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-4 sm:grid-cols-2 relative z-10">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: plan.delay }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`flex flex-col rounded-3xl overflow-hidden p-8 transition-all duration-300 relative group
              bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/10 dark:border-white/5
              hover:border-primary/50 hover:shadow-[0_0_40px_-15px_rgba(var(--primary),0.3)]
            `}
          >
            {/* Radial Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />

            {plan.popular && (
              <div className="absolute top-0 right-0 mt-4 mr-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground shadow-lg">
                  Most Popular
                </span>
              </div>
            )}

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                {plan.icon}
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-foreground tracking-tight">{plan.name}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{plan.description}</p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm text-foreground/80">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-8 relative z-10">
              <Button
                className={`w-full h-12 rounded-xl text-lg font-bold relative overflow-hidden group/btn 
                  ${plan.popular ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}
                  transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                `}
              >
                {/* Shine Animation */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-[30deg] -translate-x-[200%] group-hover/btn:animate-[shine_1s_ease-in-out_infinite] pointer-events-none" />
                Get Started
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
