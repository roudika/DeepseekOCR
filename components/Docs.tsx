import React from 'react';
import { Navbar } from './Navbar';

interface DocsProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onNavigate: (view: 'home' | 'docs') => void;
}

export const Docs: React.FC<DocsProps> = ({ theme, toggleTheme, onNavigate }) => {
  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-navy-900 overflow-hidden">
      {/* Navbar integrated into Docs page */}
      <Navbar theme={theme} toggleTheme={toggleTheme} onNavigate={onNavigate} />

      {/* Main content area with padding for Navbar */}
      <div className="flex-1 w-full relative pt-20">
        <div className="w-full h-full overflow-hidden">
            <iframe 
                src="https://plastic-bedbug-b4d.notion.site/ebd//2cbcd922819b807fb871ddd99fc57932?v=2cbcd922819b81a09f45000c933ea2d4" 
                title="KloudiHub Docs"
                className="w-full border-none bg-white"
                style={{
                    height: 'calc(100% + 40px)',
                    transform: 'translateY(-40px)'
                }}
                allow="fullscreen"
            />
        </div>
      </div>
    </div>
  );
};
