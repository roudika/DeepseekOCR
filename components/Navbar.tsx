import React, { useState, useEffect } from 'react';
import { Menu, X, Cloud, Sparkles, Sun, Moon } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../utils';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
      isScrolled 
        ? "bg-white/80 dark:bg-navy-900/80 backdrop-blur-md border-slate-200 dark:border-white/5 py-3 shadow-sm" 
        : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-purple-500 shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              <Cloud className="w-6 h-6 text-white absolute" strokeWidth={2.5} />
              <Sparkles className="w-3 h-3 text-brand-gold absolute -top-1 -right-1 animate-pulse" fill="currentColor" />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight transition-colors">KloudiHub</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#models" className="text-slate-600 dark:text-slate-300 hover:text-brand-primary dark:hover:text-white transition-colors text-sm font-medium">Models</a>
            <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-brand-primary dark:hover:text-white transition-colors text-sm font-medium">Why Us</a>
            <a href="#pricing" className="text-slate-600 dark:text-slate-300 hover:text-brand-primary dark:hover:text-white transition-colors text-sm font-medium">Pricing</a>
            <a href="#docs" className="text-slate-600 dark:text-slate-300 hover:text-brand-primary dark:hover:text-white transition-colors text-sm font-medium">Docs</a>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-white/5 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="#" className="text-slate-700 dark:text-white font-medium hover:text-brand-secondary transition-colors text-sm">Log in</a>
            <Button variant="primary" size="sm" className="rounded-lg shadow-none">
              Get API Key
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-brand-primary dark:hover:text-white"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-navy-900 border-b border-slate-200 dark:border-white/10 shadow-2xl">
          <div className="px-4 py-6 space-y-4 flex flex-col">
            <a href="#models" className="text-slate-700 dark:text-slate-300 hover:text-brand-primary dark:hover:text-white block" onClick={() => setMobileMenuOpen(false)}>Models</a>
            <a href="#features" className="text-slate-700 dark:text-slate-300 hover:text-brand-primary dark:hover:text-white block" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
            <a href="#pricing" className="text-slate-700 dark:text-slate-300 hover:text-brand-primary dark:hover:text-white block" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <hr className="border-slate-200 dark:border-white/10" />
            <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-brand-primary dark:hover:text-white block">Log in</a>
            <Button variant="primary" className="w-full">Get API Key</Button>
          </div>
        </div>
      )}
    </nav>
  );
};