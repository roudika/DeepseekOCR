import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Zap, Code2, Rocket, ShieldCheck, Users } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils';

const features = [
  {
    icon: Gem,
    title: "Rare & Exclusive",
    description: "Access models you won't find on major cloud providers. We host the specialized gems."
  },
  {
    icon: Zap,
    title: "Instant API Access",
    description: "No GPU provisioning or Docker containers. Just an API key and standard REST endpoints."
  },
  {
    icon: Code2,
    title: "Developer First",
    description: "Comprehensive TypeScript SDK, Python client, and copy-paste examples for every model."
  },
  {
    icon: Rocket,
    title: "Future-Proof",
    description: "New models added weekly. As the research evolves, your capability stack evolves too."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Reliable",
    description: "99.9% uptime SLA, SOC2 compliant infrastructure, and dedicated support channels."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Vote on which paper implementation we host next. Built for researchers and builders."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-navy-900 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors">Why build with KloudiHub?</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
            We handle the complex infrastructure of hosting massive VL models so you can focus on building your app.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp} className="flex gap-4 group">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-brand-primary/10 border border-slate-200 dark:border-transparent text-brand-primary group-hover:bg-brand-primary/20 group-hover:text-brand-primary dark:group-hover:text-white transition-colors shadow-sm dark:shadow-none">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 transition-colors">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats / Trust Signals */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-colors">
          <div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white transition-colors">500+</div>
            <div className="text-sm text-slate-500 mt-1">Developers</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white transition-colors">12M+</div>
            <div className="text-sm text-slate-500 mt-1">Tokens Processed</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white transition-colors">24</div>
            <div className="text-sm text-slate-500 mt-1">Specialized Models</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white transition-colors">99.9%</div>
            <div className="text-sm text-slate-500 mt-1">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};