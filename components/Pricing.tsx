import React from 'react';
import { Coins, Zap, Infinity as InfinityIcon, Check, Mail } from 'lucide-react';
import { Button } from './ui/Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-navy-900 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Text Content about Pay-per-token */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">
              Simple Billing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Pay only for what you use.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              We believe in transparency. No complicated tiers, no monthly subscriptions, and no hidden fees. Just load credits and access any rare model in our catalog.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-primary/10 dark:bg-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300">
                  <Coins className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Pure Usage-Based</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">Prices start at $0.001 per 1k tokens. Rates vary by model complexity.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-primary/10 dark:bg-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300">
                  <InfinityIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Credits Never Expire</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">Your balance is yours forever. Build at your own pace without "use it or lose it" pressure.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-primary/10 dark:bg-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Instant API Access</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">Sign up below to join our mailing list and get exclusive early access credit offers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Custom Styled Brevo Form */}
          <div className="relative w-full">
            {/* Decorative blob */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50 dark:opacity-40 -z-10" />
            
            <div className="bg-white dark:bg-navy-800 rounded-3xl p-1 shadow-2xl border border-slate-100 dark:border-white/5 transition-colors duration-300">
              <div className="bg-slate-50 dark:bg-navy-800/50 rounded-2xl w-full p-8 relative overflow-hidden">
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Join the Waitlist</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Get notified when new rare models drop and receive $10 in free credits.</p>
                </div>

                <form 
                  id="sib-form" 
                  method="POST" 
                  action="https://8f921d35.sibforms.com/serve/MUIFACf7yAin_ywx1kP4qQe97uVEhfyCmuR2HmyZiIn4EiyO9xgAgNAgrLDmRMBVd5q8HksEnQx28OylFqLyPw1YKIDmnf35E9GO0OEO_ZjG86lk26z1GOacDSsGzN9UEheiHx_7PAtoh-2Xs6pavBBaXD7lxYXkTJggVhQ8e4eeW-X9_MmE9nTl96FwEC_d2Qis5PT345dLJI5B"
                  className="space-y-6"
                >
                  
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="EMAIL" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-slate-400" />
                      </div>
                      <input 
                        type="email" 
                        id="EMAIL" 
                        name="EMAIL" 
                        autoComplete="off" 
                        placeholder="you@company.com" 
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-white/10 rounded-xl leading-5 bg-white dark:bg-navy-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors sm:text-sm"
                      />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-500">We'll never share your email with anyone else.</p>
                  </div>

                  <div className="border-t border-slate-200 dark:border-white/5 my-4"></div>

                  {/* GDPR Checkbox */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="OPT_IN"
                        name="OPT_IN"
                        type="checkbox"
                        value="1"
                        required
                        className="h-4 w-4 text-brand-primary border-slate-300 dark:border-white/10 rounded focus:ring-brand-primary bg-white dark:bg-navy-900"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="OPT_IN" className="font-medium text-slate-700 dark:text-slate-300">
                        I agree to receive newsletters
                      </label>
                      <p className="text-slate-500 dark:text-slate-500">I accept the data privacy statement.</p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full justify-center text-base py-6 shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/30"
                  >
                    Subscribe for Access
                  </Button>

                  {/* Hidden Brevo Fields */}
                  <input type="text" name="email_address_check" value="" className="hidden" />
                  <input type="hidden" name="locale" value="en" />
                  <input type="hidden" name="html_type" value="simple" />

                </form>
              </div>
            </div>
            
            {/* Trust badge below form */}
            <div className="mt-6 flex justify-center items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
               <Check className="w-3 h-3" />
               <span>No spam, unsubscribe anytime.</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};