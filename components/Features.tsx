import React, { useRef } from 'react';
import { Gem, Zap, Code2, Rocket, ShieldCheck, Users } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    // Animate Header
    // Changed toggleActions to 'play none none none' so it doesn't disappear when scrolling up (reverse)
    gsap.from(headerRef.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 85%", // Trigger slightly earlier
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    // Animate Cards Staggered
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 80,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.2)"
    });
  }, { scope: containerRef });

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={containerRef} id="features" className="py-24 bg-slate-50 dark:bg-navy-900 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Removed 'invisible' class to avoid layout shifting or permanent invisibility if JS fails. 
            GSAP .from() will handle the initial state immediately. */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors">Why build with KloudiHub?</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
            We handle the complex infrastructure of hosting massive VL models so you can focus on building your app.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} ref={addToRefs} className="flex gap-4 group">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-brand-primary/10 border border-slate-200 dark:border-transparent text-brand-primary group-hover:bg-brand-primary/20 group-hover:text-brand-primary dark:group-hover:text-white transition-colors shadow-sm dark:shadow-none duration-300">
                  <feature.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 transition-colors">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats / Trust Signals */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-colors">
          {[
            { val: "500+", lbl: "Developers" },
            { val: "12M+", lbl: "Tokens Processed" },
            { val: "24", lbl: "Specialized Models" },
            { val: "99.9%", lbl: "Uptime" }
          ].map((stat, i) => (
             <div key={i} className="group cursor-default">
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white transition-colors group-hover:text-brand-primary duration-300">{stat.val}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};