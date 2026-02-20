"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const letters = [
  { char: "D", bg: "bg-white", color: "text-ink", rotate: "-rotate-3" },
  { char: "E", bg: "bg-sky", color: "text-white", rotate: "rotate-2" },
  { char: "S", bg: "bg-mustard", color: "text-ink", rotate: "-rotate-1" },
  { char: "I", bg: "bg-blush", color: "text-ink", rotate: "rotate-3" },
  { char: "G", bg: "bg-white", color: "text-ink", rotate: "-rotate-2" },
  { char: "N", bg: "bg-ink", color: "text-cream", rotate: "rotate-1" },
];

const letters2 = [
  { char: "B", bg: "bg-white", color: "text-ink", rotate: "rotate-2" },
  { char: "Y", bg: "bg-coral", color: "text-white", rotate: "-rotate-3" },
];

const letters3 = [
  { char: "E", bg: "bg-mustard", color: "text-ink", rotate: "rotate-3" },
  { char: "V", bg: "bg-white", color: "text-ink", rotate: "-rotate-1" },
  { char: "A", bg: "bg-sky", color: "text-white", rotate: "rotate-2" },
  { char: "N", bg: "bg-blush", color: "text-ink", rotate: "-rotate-2" },
  { char: "G", bg: "bg-ink", color: "text-cream", rotate: "rotate-1" },
  { char: "E", bg: "bg-white", color: "text-ink", rotate: "-rotate-3" },
  { char: "L", bg: "bg-coral", color: "text-white", rotate: "rotate-2" },
];

const letters4 = [
  { char: "I", bg: "bg-sky", color: "text-white", rotate: "-rotate-1" },
  { char: "N", bg: "bg-mustard", color: "text-ink", rotate: "rotate-3" },
  { char: "A", bg: "bg-white", color: "text-ink", rotate: "-rotate-2" },
];

const allLetterRows = [letters, letters2, letters3, letters4];

function ScrapLetter({
  char,
  bg,
  color,
  rotate,
  delay,
}: {
  char: string;
  bg: string;
  color: string;
  rotate: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 15 }}
      className={`${bg} ${color} ${rotate} w-14 h-14 flex items-center justify-center font-display text-3xl shadow-scrapbook hover:scale-110 transition-transform cursor-default select-none`}
    >
      {char}
    </motion.div>
  );
}

export default function Hero() {
  let letterIndex = 0;

  return (
    <section
      id="home"
      className="relative min-h-screen grid-bg flex items-center pt-20 overflow-hidden"
    >
      {/* Background doodles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute top-32 left-12 w-24 h-24 opacity-10"
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="#1a1209" strokeWidth="1.5">
            <path d="M50,10 L50,90 M10,50 L90,50 M20,20 L80,80 M80,20 L20,80" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-24 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="#1a1209" strokeWidth="1">
            <circle cx="40" cy="40" r="30" />
            <circle cx="40" cy="40" r="20" />
            <circle cx="40" cy="40" r="10" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo collage */}
          <div className="relative h-[520px]">
            {/* Main polaroid */}
            <motion.div
              initial={{ opacity: 0, x: -60, rotate: -8 }}
              animate={{ opacity: 1, x: 0, rotate: -5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-8 top-16 polaroid w-64 rotate-[-5deg] z-10 hover:z-20 hover:rotate-[-3deg] transition-transform duration-300 cursor-pointer"
            >
              <div className="w-full h-72 bg-gradient-to-br from-gray-200 to-gray-400 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-handwriting text-lg">
                  Your Photo Here
                </div>
                {/* Fake B&W overlay */}
                <div className="absolute inset-0 bg-gray-900/20" />
              </div>
              <p className="font-handwriting text-center text-ink/60 text-sm mt-2">est. 2012 archive ✦</p>
            </motion.div>

            {/* Second polaroid */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotate: 8 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute right-4 top-8 polaroid w-52 rotate-[6deg] z-20 border-4 border-sky/40 hover:rotate-[4deg] transition-transform duration-300 cursor-pointer"
            >
              <div className="w-full h-60 bg-gradient-to-br from-sky/20 to-sky/40 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-sky/60 font-handwriting text-sm text-center px-4">
                  Studio Shot
                </div>
              </div>
              <p className="font-handwriting text-center text-sky text-xs mt-1">✦ 2024 ✦</p>
            </motion.div>

            {/* Sticky note */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: -8 }}
              transition={{ delay: 0.9, type: "spring" }}
              className="absolute bottom-24 left-28 w-48 bg-mustard p-4 shadow-scrapbook z-30 rotate-[-8deg]"
            >
              <p className="font-handwriting text-ink text-sm leading-relaxed">
                "Design is not just what it looks like, it's how it works."
              </p>
              <div className="mt-2 text-right text-xl">⭐</div>
            </motion.div>

            {/* Paper clip deco */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute top-6 right-28 z-30"
            >
              <svg width="24" height="60" viewBox="0 0 24 60" fill="none" stroke="#7a9e7e" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 4 C4 4 4 28 12 28 C20 28 20 4 12 4 Z" />
                <path d="M12 28 L12 56" />
              </svg>
            </motion.div>

            {/* Washi tape strips */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute top-12 left-4 w-32 h-6 bg-sky/30 rotate-[-12deg] z-30"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-16 right-8 w-24 h-5 bg-coral/30 rotate-[8deg] z-30"
            />
          </div>

          {/* Right: Typography collage */}
          <div className="relative">
            {/* Ransom note title */}
            <div className="space-y-2 mb-8">
              {allLetterRows.map((row, rowIdx) => {
                const currentIndex = letterIndex;
                letterIndex += row.length;
                return (
                  <div key={rowIdx} className="flex gap-2 flex-wrap">
                    {row.map((l, i) => (
                      <ScrapLetter
                        key={i}
                        {...l}
                        delay={(currentIndex + i) * 0.05 + 0.5}
                      />
                    ))}
                  </div>
                );
              })}
            </div>

            {/* Event details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="space-y-2 mb-8"
            >
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-ink/30" />
                <span className="font-mono text-sm text-ink/60">Available for freelance & collaborations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-ink/30" />
                <span className="font-mono text-sm text-ink/60">London-based ✦ Designing globally</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-3 bg-sky text-white px-8 py-4 font-handwriting text-xl rounded-full shadow-scrapbook hover:shadow-scrapbook-lg hover:-translate-y-1 transition-all duration-200"
              >
                Explore My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="font-handwriting text-xl text-ink underline decoration-coral underline-offset-4 hover:text-coral transition-colors"
              >
                Get in touch →
              </a>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-12"
            >
              <p className="font-mono text-xs tracking-[0.2em] text-sky uppercase">
                — scroll to explore archives
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-6 flex gap-4"
      >
        {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-10 h-10 border-2 border-ink/20 rounded-full flex items-center justify-center text-ink/50 hover:text-ink hover:border-ink transition-colors"
          >
            <Icon size={16} />
          </a>
        ))}
      </motion.div>
    </section>
  );
}
