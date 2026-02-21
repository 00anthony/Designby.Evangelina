"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Seraphina Vale",
    role: "CEO, Moonstone Apothecary",
    text: "Evangelina's eye for detail and organic aesthetic transformed our brand. Her work feels timeless and deeply intentional.",
    stars: 5,
    tape: "bg-sky/30",
    rotate: "-rotate-1",
    initials: "SV",
    color: "bg-sage/30",
  },
  {
    name: "Julian Thorne",
    role: "Creative Director, Arch Studio",
    text: "Collaborating with Evangelina was seamless. She truly understands how to translate abstract concepts into visual gold.",
    stars: 5,
    tape: "bg-blush/40",
    rotate: "rotate-1",
    initials: "JT",
    color: "bg-blush/40",
  },
  {
    name: "Elena Rossi",
    role: "Founder, Terra Wines",
    text: "The packaging design exceeded all expectations. Our sales increased by 40% after the rebrand. An artist in the truest sense.",
    stars: 5,
    tape: "bg-mustard/40",
    rotate: "-rotate-2",
    initials: "ER",
    color: "bg-mustard/40",
  },
  {
    name: "Marcus Chen",
    role: "Head of Brand, Luminary Tech",
    text: "Working with Evangelina on our identity system was a game-changer. Every touchpoint now feels cohesive and intentional.",
    stars: 5,
    tape: "bg-sky/30",
    rotate: "rotate-1",
    initials: "MC",
    color: "bg-sky/30",
  },
  {
    name: "Isabelle Moreau",
    role: "Editor, Reverie Magazine",
    text: "She captured the soul of our publication perfectly. The layout work was beyond anything we imagined. A true collaborator.",
    stars: 5,
    tape: "bg-lavender/40",
    rotate: "-rotate-1",
    initials: "IM",
    color: "bg-lavender/40",
  },
  {
    name: "Thomas Reid",
    role: "Founder, Kindred Studio",
    text: "Evangelina brought a level of craft and care that we rarely see. Our brand identity now perfectly reflects our values.",
    stars: 5,
    tape: "bg-coral/20",
    rotate: "rotate-2",
    initials: "TR",
    color: "bg-coral/20",
  },
];

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: -3 }}
      animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 120 }}
      className={`relative bg-white shadow-scrapbook p-6 ${t.rotate} hover:rotate-0 hover:-translate-y-2 md:transition-all md:duration-300`}
    >
      {/* Tape at top */}
      <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 ${t.tape} rotate-[-1deg]`} />

      {/* Big quote mark */}
      <div className="text-sky/20 mb-3">
        <Quote size={36} />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[...Array(t.stars)].map((_, i) => (
          <Star key={i} size={14} className="text-mustard fill-mustard" />
        ))}
      </div>

      <p className="font-handwriting text-ink text-lg leading-relaxed mb-6">
        "{t.text}"
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-ink/10">
        <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-mono text-xs font-bold text-ink/60`}>
          {t.initials}
        </div>
        <div>
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-ink">{t.name}</div>
          <div className="font-handwriting text-sky text-sm">{t.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section id="testimonials" className="py-24 px-6 bg-cream grid-bg relative overflow-hidden">
      {/* Scattered doodles */}
      <div className="absolute left-8 top-20 opacity-5 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" stroke="#1a1209" strokeWidth="1.5">
          <rect x="10" y="10" width="100" height="100" rx="4" />
          <rect x="25" y="25" width="70" height="70" rx="4" />
          <rect x="40" y="40" width="40" height="40" rx="4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky mb-3">Archived Testimonials</p>
          <h2 className="font-serif text-5xl font-bold text-ink">Words from Partners</h2>
          <div className="flex justify-center mt-4">
            <div className="w-32 h-1 bg-gold rotate-[-1deg]" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>

        {/* Pull quote banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-coral text-white p-8 rotate-[-0.5deg] shadow-scrapbook-lg text-center"
        >
          <p className="font-handwriting text-2xl md:text-3xl">
            "Every project is a love letter to the brand."
          </p>
          <p className="font-mono text-xs uppercase tracking-widest mt-3 text-white/60">
            — Evangelina, 2024
          </p>
        </motion.div>
      </div>
    </section>
  );
}
