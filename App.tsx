import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ModelGallery } from './components/ModelGallery';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Docs } from './components/Docs';

function App() {
  // Initialize theme from system preference or default to dark
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  const [currentView, setCurrentView] = useState<'home' | 'docs'>('home');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  if (currentView === 'docs') {
    return (
      <Docs 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onNavigate={setCurrentView} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-900 transition-colors duration-300 antialiased selection:bg-brand-primary/20 selection:text-brand-primary dark:selection:bg-brand-primary/30 dark:selection:text-white">
      <Navbar theme={theme} toggleTheme={toggleTheme} onNavigate={setCurrentView} />
      <main>
        <Hero />
        <ModelGallery />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;