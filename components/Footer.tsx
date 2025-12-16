import React from 'react';
import { Cloud, Twitter, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-navy-900 border-t border-slate-200 dark:border-white/10 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white transition-colors">
              <Cloud className="w-6 h-6 text-brand-primary" fill="currentColor" />
              <span className="text-xl font-bold">KloudiHub</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 transition-colors">
              Unlock the power of rare, specialized AI models. Your hub for intelligence that goes beyond the standard LLMs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-brand-primary dark:hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-primary dark:hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-brand-primary dark:hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 transition-colors">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Models</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Status</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 transition-colors">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors">
          <p className="text-slate-500 text-sm">© 2025 KloudiHub Inc. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-brand-primary dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};