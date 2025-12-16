import React from 'react';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-navy-900 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 transition-colors">
            Start for free, scale as you grow. No hidden fees for "premium" models.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Free Tier */}
          <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-lg hover:border-brand-primary/30 dark:hover:border-white/20 transition-all">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Developer</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$0</span>
              <span className="ml-1 text-slate-500 dark:text-slate-400">/mo</span>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">Perfect for experimenting and hobby projects.</p>
            <Button variant="outline" className="w-full mt-6 border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200">Start Free</Button>
            <ul className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-3" /> $5 free credits</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-3" /> 2 concurrent requests</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-3" /> Community support</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-3" /> Access to standard models</li>
            </ul>
          </div>

          {/* Pay As You Go */}
          <div className="relative bg-navy-900 dark:bg-navy-800 rounded-2xl p-8 shadow-2xl transform md:-translate-y-4 border border-brand-primary/40 ring-1 ring-brand-primary/20">
            <div className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-gradient-to-r from-brand-primary to-purple-500 text-white text-xs font-bold rounded-full uppercase tracking-wide shadow-lg shadow-purple-500/30">
              Popular
            </div>
            <h3 className="text-lg font-bold text-white">Pay-As-You-Go</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-extrabold text-white">Usage</span>
              <span className="ml-1 text-slate-400">based</span>
            </div>
            <p className="mt-4 text-sm text-slate-300">Scale without limits. Pay only for what you use.</p>
            <Button variant="primary" className="w-full mt-6 shadow-brand-primary/20">Get API Key</Button>
            <ul className="mt-8 space-y-4 text-sm text-slate-200">
              <li className="flex items-center"><Check className="w-4 h-4 text-brand-secondary mr-3" /> Pay per 1k tokens</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-brand-secondary mr-3" /> 50 concurrent requests</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-brand-secondary mr-3" /> Access to ALL rare models</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-brand-secondary mr-3" /> Priority support</li>
            </ul>
          </div>

          {/* Pro */}
          <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-lg hover:border-brand-primary/30 dark:hover:border-white/20 transition-all">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Pro Subscription</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$49</span>
              <span className="ml-1 text-slate-500 dark:text-slate-400">/mo</span>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">For power users who need predictable billing.</p>
            <Button variant="outline" className="w-full mt-6 border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200">Subscribe</Button>
            <ul className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-3" /> Includes $60 credit value</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-3" /> 100 concurrent requests</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-3" /> Early access to new betas</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-3" /> Dedicated Slack channel</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};