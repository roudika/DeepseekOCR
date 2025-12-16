import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles, Database } from 'lucide-react';
import { Button } from './ui/Button';
import { fadeInUp } from '../utils';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50 dark:bg-navy-900 transition-colors duration-300">
      
      {/* Abstract Neural Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-brand-primary/10 dark:bg-brand-primary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-60 dark:opacity-40 animate-blob" />
        <div className="absolute top-[30%] -right-[10%] w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-60 dark:opacity-40 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-brand-secondary/10 dark:bg-brand-secondary/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-50 dark:opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-20" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm text-brand-gold text-sm font-medium mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
              Now hosting Qwen 2.5-VL & OlmOCR-2
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6 transition-colors duration-300">
              Rare AI Models, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-brand-primary to-purple-500">
                Hosted for You.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors duration-300">
              Access hard-to-find multimodal models like DeepSeek-OCR and exclusive VL architectures via a simple, unified API. No infrastructure hassle.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button variant="primary" size="lg" className="w-full sm:w-auto group shadow-emerald-500/20">
                Get API Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-white"
              >
                Join Waitlist
              </Button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-slate-500 dark:text-slate-500 text-sm">
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
          </motion.div>

          {/* Right: Visual/Terminal */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative hidden lg:block"
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
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-6 -right-6 bg-white dark:bg-navy-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-white/10 flex items-center gap-3 z-20"
             >
                <div className="h-10 w-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                   <Sparkles className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                   <div className="text-xs text-slate-500">Speed</div>
                   <div className="font-bold text-slate-900 dark:text-white">45ms / token</div>
                </div>
             </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-slate-50 dark:from-navy-900 to-transparent z-10" />
    </section>
  );
};