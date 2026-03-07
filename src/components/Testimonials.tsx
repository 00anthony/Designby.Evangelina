"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Justine S.",
    role: "Owner, Bombkutz Barbershop",
    text: "Angel is the one I trust with all my shop branding -- decals, business cards, printables and more -- and she never misses. Her work is always clean, high quality, and exactly how I envision it. She's super easy to work with, pays attention to every detail, and always comes through on time. Everthing she makes for my shop looks professional and helps my brand stand out. If you're a business owner and need custom print work done right, Angel is the person to go to. Highly recommend her.",
    stars: 5,
    tape: "bg-sky/30",
    rotate: "-rotate-1",
    initials: "JS",
    color: "bg-sage/30",
  },
  {
    name: "Mary Moran",
    role: "CEO, On-Point Re-Entry Consortium, Inc.",
    text: "Angel design our program for a global reentry summit in 2024, and her design and layout were BEAUTIFUL! All the attendees remarked on how awesome the program looked!!! She is someone who takes pride in her work, and she is very talented. I highly recommend her to anyone who is looking for a great graphic designer. She is your person!!!",
    stars: 5,
    tape: "bg-blush/40",
    rotate: "rotate-1",
    initials: "MM",
    color: "bg-blush/40",
  },
  {
    name: "Rosetta Taylor",
    role: "Founder, National Association of Reentry Professionals (NARP)",
    text: "Evangelina is creative with excellent precision. She is dependable and has wonderful customer service skills.",
    stars: 5,
    tape: "bg-mustard/40",
    rotate: "-rotate-2",
    initials: "RT",
    color: "bg-mustard/40",
  },
  {
    name: "Kristy Ward",
    role: "Author, Menopause Mijas",
    text: "Angel was absolutely incredible to work with on my Menopause Mijas book. The editing process is tedious and overwhelming, and she took all of that stress off my plate. Not only did she handle the technical details beautifully, but she also offered thoughtful feedback that made the book even stronger. She is professional, detail oriented, and truly cares about the fianl product. I'm so grateful for her talent and support. Highly recommend.",
    stars: 5,
    tape: "bg-lavender/40",
    rotate: "rotate-2",
    initials: "KW",
    color: "bg-green-200/40",
  }
  
];

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState(false);

  const isLong = t.text.length > 220; // threshold for showing button

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: -3 }}
      animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 120 }}
      className={`relative bg-white shadow-scrapbook p-6 ${t.rotate} min-h-[300px] hover:rotate-0 hover:-translate-y-2 md:transition-all md:duration-300`}
    >
      {/* Tape */}
      <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 ${t.tape} rotate-[-1deg]`} />

      <div className="text-sky/20 mb-3">
        <Quote size={36} />
      </div>

      <div className="flex gap-1 mb-3">
        {[...Array(t.stars)].map((_, i) => (
          <Star key={i} size={14} className="text-mustard fill-mustard" />
        ))}
      </div>

      {/* TEXT CONTAINER */}
      <motion.div
        animate={{ height: expanded ? "auto" : 140 }}
        transition={{ duration: 0.35 }}
        className="overflow-hidden relative"
      >
        <p className="font-handwriting text-ink text-lg leading-relaxed">
          "{t.text}"
        </p>

        {!expanded && isLong && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
        )}
      </motion.div>

      {/* READ MORE BUTTON */}
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-xs font-mono uppercase tracking-wider text-sky hover:underline"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      )}

      <div className="flex items-center gap-3 pt-4 border-t border-ink/10 mt-4">
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
            — Evangelina, 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
