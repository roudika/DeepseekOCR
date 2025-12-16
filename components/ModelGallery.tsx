import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Eye, FileText, Cpu, Layers, Image as ImageIcon, Video } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils';

interface Model {
  id: string;
  name: string;
  provider: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
  price: string;
}

const models: Model[] = [
  {
    id: 'deepseek-ocr',
    name: 'DeepSeek-OCR',
    provider: 'DeepSeek',
    description: 'State-of-the-art optical character recognition specialized for complex layouts and handwriting.',
    tags: ['OCR', 'Multimodal', 'Text'],
    icon: FileText,
    price: '$0.002 / 1k tokens'
  },
  {
    id: 'qwen-vl',
    name: 'Qwen 2.5-VL',
    provider: 'Alibaba Cloud',
    description: 'Visual language model capable of understanding high-res images and document logic.',
    tags: ['Vision', 'Reasoning', 'Chat'],
    icon: Eye,
    price: '$0.003 / 1k tokens'
  },
  {
    id: 'olmocr',
    name: 'OlmOCR-2',
    provider: 'AllenAI',
    description: 'Converts PDFs and images into structured, clean Markdown instantly.',
    tags: ['PDF', 'Structure', 'Research'],
    icon: Layers,
    price: '$0.002 / page'
  },
  {
    id: 'paddle-vl',
    name: 'PaddleOCR-VL',
    provider: 'Baidu',
    description: 'Lightweight, ultra-fast OCR optimized for edge cases and non-English scripts.',
    tags: ['Fast', 'Multi-lang'],
    icon: Cpu,
    price: '$0.001 / 1k tokens'
  },
  {
    id: 'internvl',
    name: 'InternVL-Pro',
    provider: 'OpenGVLab',
    description: 'A powerful open-source alternative to GPT-4V for visual question answering.',
    tags: ['VQA', 'Analysis'],
    icon: ImageIcon,
    price: '$0.004 / 1k tokens'
  },
  {
    id: 'video-llama',
    name: 'Video-Llama 2',
    provider: 'DAMO Academy',
    description: 'Understand video content with audio-visual understanding capabilities.',
    tags: ['Video', 'Audio', 'Experimental'],
    icon: Video,
    price: '$0.010 / min'
  }
];

// Helper icon
const ArrowRight = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ModelCard: React.FC<{ model: Model }> = ({ model }) => (
  <motion.div 
    variants={fadeInUp}
    className="group relative bg-slate-50 dark:bg-navy-800 rounded-2xl p-6 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl" />
    
    <div className="flex items-start justify-between mb-4">
      <div className="p-3 bg-white dark:bg-white/5 rounded-lg border border-slate-200 dark:border-transparent group-hover:bg-brand-primary/10 dark:group-hover:bg-brand-primary/20 transition-colors">
        <model.icon className="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-brand-primary" />
      </div>
      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10 px-2 py-1 rounded-full">{model.provider}</span>
    </div>

    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{model.name}</h3>
    <div className="text-slate-600 dark:text-slate-400 text-sm mb-6 min-h-[60px]">{model.description}</div>

    <div className="flex flex-wrap gap-2 mb-6">
      {model.tags.map(tag => (
        <span key={tag} className="text-xs font-medium px-2 py-1 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-300 rounded-md">
          {tag}
        </span>
      ))}
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/5">
      <span className="text-sm font-semibold text-slate-900 dark:text-white">{model.price}</span>
      <button className="text-sm font-medium text-brand-primary hover:text-brand-secondary flex items-center gap-1 group/btn">
        Try Demo 
        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </motion.div>
);

export const ModelGallery: React.FC = () => {
  return (
    <section id="models" className="py-24 bg-white dark:bg-navy-900 relative border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-brand-primary uppercase tracking-wider mb-3">The Rare Collection</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
            Models too rare for others to host. <br/>
            <span className="text-slate-500 dark:text-slate-400 font-medium">Powered by KloudiHub.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg transition-colors">
            We scour the research papers and GitHub repos to bring you production-ready APIs for the most promising open-weights models.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
           <Button variant="outline" className="rounded-full border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5">
             View All 24+ Models
           </Button>
        </div>
      </div>
    </section>
  );
};
