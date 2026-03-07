import { useRef, } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import { QuickNavPill } from "./types";
import { quickNavPills } from "./data";

interface HeroSectionProps {
  quickNavPills: QuickNavPill[];
}

export default function Hero({ quickNavPills }: HeroSectionProps) {  
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <section
      className="relative pt-32 pb-20 px-6 overflow-hidden"
      style={{ backgroundColor: "#1a1209" }}
    >
      {/* circle doodle */}
      <div
        className="absolute right-12 top-12 opacity-5 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="280" height="280" viewBox="0 0 280 280" fill="none" stroke="#f5f0e8" strokeWidth="1">
          {[...Array(6)].map((_, i) => (
            <circle key={i} cx="140" cy="140" r={20 + i * 20} />
          ))}
          <line x1="0" y1="140" x2="280" y2="140" />
          <line x1="140" y1="0" x2="140" y2="280" />
        </svg>
      </div>

      {/* Wave doodle left */}
      <div className="absolute left-8 bottom-10 opacity-5 pointer-events-none" aria-hidden="true">
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" stroke="#f5f0e8" strokeWidth="1">
          <path d="M0,30 C20,5 40,55 60,30 C80,5 100,55 120,30" />
          <path d="M0,45 C20,20 40,70 60,45 C80,20 100,70 120,45" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative" ref={heroRef}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={heroInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <Heart className="text-rose-400" size={20} aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
            Community Service
          </span>
        </motion.div>

        {/* Title */}
        <div className="mb-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-handwriting text-3xl text-rose-400 block mb-2"
          >
            giving back,
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-serif text-6xl md:text-8xl font-bold text-white leading-none"
          >
            Designed
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="flex items-end gap-6 mt-2"
          >
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-white leading-none">
              with
            </h1>
            <div
              className="mb-3 px-5 py-2 font-handwriting text-2xl font-bold text-white shadow-lg"
              style={{ background: "#e85d3f", transform: "rotate(-2deg)" }}
            >
              Love ♥
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="font-sans text-white/50 max-w-xl leading-relaxed mb-10"
        >
          Design by Evangelina believes creativity should serve community. Here are
          three events close to our heart — where we donate our time, talent, and
          passion for a better world.
        </motion.p>

        {/* Quick-nav pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap gap-3"
        >
          {quickNavPills.map((pill, i) => (
            <a
              key={i}
              href={pill.href}
              className="flex items-center gap-2 px-4 py-2 border font-mono text-xs uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: `${pill.color}60`, color: pill.color }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: pill.color }}
                aria-hidden="true"
              />
              {pill.label}
              <ArrowRight size={12} aria-hidden="true" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Washi tape color bar */}
      <div className="absolute bottom-0 left-0 right-0 flex" aria-hidden="true">
        {(["#e85d3f40", "#4a9cc840", "#7a9e7e40", "#d4a84340", "#e8b4b840"] as string[]).map(
          (c, i) => (
            <div key={i} className="flex-1 h-3" style={{ background: c }} />
          )
        )}
      </div>
    </section>

  );

  
}
        