import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Terminal, Sparkles, Database } from 'lucide-react';
import { Button } from './ui/Button';
import { WebGLBackground } from './ui/WebGLBackground';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Simplified way to get theme context if not passing props directly, 
// but for now we'll check the document class manually for the WebGL component
// or accept it from parent if we refactor. 
// Assuming App passes nothing here, we'll detect theme from DOM.

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setTheme(isDark ? 'dark' : 'light');
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    // Initial check
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');

    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial State Setters to prevent flash of unstyled content
    gsap.set([headlineRef.current, sublineRef.current, buttonsRef.current, featuresRef.current], { 
      y: 50, 
      opacity: 0 
    });
    
    gsap.set(cardRef.current, { 
      y: 100, 
      opacity: 0,
      rotationX: 10,
      scale: 0.9
    });

    // Animation Sequence
    tl.to(headlineRef.current, { 
      y: 0, 
      opacity: 1, 
      duration: 1,
      delay: 0.2
    })
    .to(sublineRef.current, { 
      y: 0, 
      opacity: 1, 
      duration: 0.8 
    }, "-=0.6")
    .to(buttonsRef.current, { 
      y: 0, 
      opacity: 1, 
      duration: 0.8 
    }, "-=0.6")
    .to(featuresRef.current, { 
      y: 0, 
      opacity: 1, 
      duration: 0.8 
    }, "-=0.6")
    .to(cardRef.current, {
      y: 0,
      opacity: 1,
      rotationX: 0,
      scale: 1,
      duration: 1.2,
      ease: "power2.out"
    }, "-=1.0");

  }, { scope: containerRef });

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50 dark:bg-navy-900 transition-colors duration-300">
      
      {/* Replaced CSS blobs with WebGL */}
      <WebGLBackground theme={theme} />

      {/* Grid Overlay - Retained for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm text-brand-gold text-sm font-medium mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
              Now hosting Qwen 2.5-VL & OlmOCR-2
            </div>

            <h1 ref={headlineRef} className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6 transition-colors duration-300 opacity-0">
              Rare AI Models, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-brand-primary to-purple-500">
                Hosted for You.
              </span>
            </h1>
            
            <p ref={sublineRef} className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors duration-300 opacity-0">
              Access hard-to-find multimodal models like DeepSeek-OCR and exclusive VL architectures via a simple, unified API. No infrastructure hassle.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0">
              <Button onClick={scrollToPricing} variant="primary" size="lg" className="w-full sm:w-auto group shadow-emerald-500/20">
                Get API Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={scrollToPricing}
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-white"
              >
                Join Waitlist
              </Button>
            </div>
            
            <div ref={featuresRef} className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-slate-500 dark:text-slate-500 text-sm opacity-0">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>Type-safe SDK</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Pay-per-token</span>
              </div>
            </div>
          </div>

          {/* Right: Visual/Terminal */}
          <div
             ref={cardRef}
             className="relative hidden lg:block perspective-1000 opacity-0"
             style={{ transformStyle: 'preserve-3d' }}
          >
             {/* Glowing backing */}
             <div className="absolute inset-0 bg-brand-primary/20 blur-3xl transform rotate-3 scale-95 opacity-50 dark:opacity-100" />
             
             {/* Main Card */}
             <div className="relative bg-white dark:bg-navy-800/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 transition-colors duration-300">
                {/* Window Controls */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-navy-900/50">
                   <div className="w-3 h-3 rounded-full bg-red-500/80" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                   <div className="w-3 h-3 rounded-full bg-green-500/80" />
                   <div className="ml-auto text-xs text-slate-400 dark:text-slate-500 font-mono">inference.ts</div>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm leading-relaxed text-slate-600 dark:text-slate-300 bg-white dark:bg-transparent">
                   <div className="flex gap-4 mb-4">
                      <span className="text-slate-300 dark:text-slate-600 select-none">1</span>
                      <span><span className="text-purple-600 dark:text-purple-400">import</span> {"{"} Kloudi <span className="text-purple-600 dark:text-purple-400">{"}"}</span> <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-green-600 dark:text-green-400">'@kloudihub/sdk'</span>;</span>
                   </div>
                   <div className="flex gap-4 mb-4">
                      <span className="text-slate-300 dark:text-slate-600 select-none">2</span>
                      <span><span className="text-purple-600 dark:text-purple-400">const</span> client = <span className="text-purple-600 dark:text-purple-400">new</span> Kloudi(process.env.KEY);</span>
                   </div>
                   <div className="flex gap-4 mb-4">
                      <span className="text-slate-300 dark:text-slate-600 select-none">3</span>
                      <span><span className="text-purple-600 dark:text-purple-400">const</span> result = <span className="text-purple-600 dark:text-purple-400">await</span> client.models.generate({"{"}</span>
                   </div>
                   <div className="flex gap-4 mb-1">
                      <span className="text-slate-300 dark:text-slate-600 select-none">4</span>
                      <span className="pl-4">model: <span className="text-green-600 dark:text-green-400">'deepseek-ocr-vl-2'</span>,</span>
                   </div>
                   <div className="flex gap-4 mb-1">
                      <span className="text-slate-300 dark:text-slate-600 select-none">5</span>
                      <span className="pl-4">image: <span className="text-yellow-600 dark:text-yellow-400">base64Image</span>,</span>
                   </div>
                   <div className="flex gap-4 mb-4">
                      <span className="text-slate-300 dark:text-slate-600 select-none">6</span>
                      <span>{"}"});</span>
                   </div>
                   <div className="flex gap-4">
                      <span className="text-slate-300 dark:text-slate-600 select-none">7</span>
                      <span className="text-slate-400 dark:text-slate-500">// Result: "Invoice #402, Total: $450.00"</span>
                   </div>
                   
                   {/* Simulating a cursor */}
                   <div className="mt-4 h-4 w-2 bg-brand-secondary animate-pulse" />
                </div>
             </div>

             {/* Floating badge */}
             <div 
               className="absolute -bottom-6 -right-6 bg-white dark:bg-navy-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-white/10 flex items-center gap-3 z-20 animate-bounce"
               style={{ animationDuration: '3s' }}
             >
                <div className="h-10 w-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                   <Sparkles className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                   <div className="text-xs text-slate-500">Speed</div>
                   <div className="font-bold text-slate-900 dark:text-white">45ms / token</div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-slate-50 dark:from-navy-900 to-transparent z-10" />
    </section>
  );
};