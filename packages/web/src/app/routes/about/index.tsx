import { motion } from 'framer-motion';
import { Flame, Heart, Zap, Globe } from 'lucide-react';
import React from 'react';

export const AboutPage = () => {
  const sections = [
    {
      title: 'The Spark of the Titan',
      icon: <Flame className="w-8 h-8 text-orange-500" />,
      content: 'In ancient lore, the Titan Prometheus defied the heavens to bring fire to humanity, sparking the dawn of civilization. We believe that power shouldn’t be hoarded—it belongs in the hands of the people. Automation is the fire of our age, and we are here to give it to you.',
      delay: 0.2
    },
    {
      title: 'Breaking the $5,000 Barrier',
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      content: 'We saw the pain: platforms that trap you in $5,000/year subscriptions and steep learning curves. Prometheus is the antidote. We built a platform that is top-tier in power but zero-tier in complexity. We make elite automation affordable for everyone.',
      delay: 0.4
    },
    {
      title: 'Our Soul: Mankind First',
      icon: <Heart className="w-8 h-8 text-red-500" />,
      content: 'If Prometheus were a person, they would be a passionate friend standing beside you. Our priority isn’t the bottom line; it is Mankind. We find joy in your success, not in your struggle. We are here to lift you up, not just to sell you a service.',
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-orange-500/30 selection:text-orange-200 overflow-x-hidden font-sans relative">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-orange-600/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0c_70%)] z-0" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-400 text-sm font-bold tracking-widest uppercase mb-6 inline-block">
            The Manifesto
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-600">
            Fire for the <br /> People.
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
            Prometheus isn’t just an automation tool. It’s a movement to ensure technology serves humanity, not the other way around.
          </p>
        </motion.div>
      </section>

      {/* Manifesto Cards */}
      <section className="relative z-10 px-4 pb-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: section.delay }}
            viewport={{ once: true }}
            className="relative group h-full"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/20 to-blue-600/20 rounded-[32px] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative h-full bg-[#111114]/80 backdrop-blur-xl border border-white/10 p-10 rounded-[32px] flex flex-col justify-between hover:border-white/20 transition-all duration-300">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight">{section.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Mission Statement */}
      <section className="relative z-10 py-32 px-4 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Globe className="w-12 h-12 text-white/20 mx-auto mb-10" />
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight italic text-gray-200">
              "We don’t care whether we make money or not. Our priority is helping mankind itself."
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-white/20" />
              <span className="text-orange-500 font-bold uppercase tracking-widest text-sm text-shadow-glow">The Prometheus Oath</span>
              <div className="h-[1px] w-12 bg-white/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Branding */}
      <section className="py-20 text-center opacity-50">
        <p className="text-sm font-medium tracking-widest uppercase">
          Powered by Element Pm-61 & The Titan Spirit
        </p>
      </section>
    </div>
  );
};
