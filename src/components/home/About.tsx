"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Coffee, Award, Heart } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "12+", label: "Great Years", icon: Award },
  { value: "2k+", label: "Coffee Cups", icon: Coffee },
  { value: "140+", label: "Happy Clients", icon: Heart },
  { value: "5★", label: "Average Rating", icon: Star },
];

const skills = [
  "Brand Identity", "Typography", "Packaging", "Editorial",
  "Motion Graphics", "Illustration", "Art Direction", "Web Design"
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 bg-cream-dark relative overflow-hidden">
      {/* Background star doodle */}
      <div className="absolute right-8 top-16 opacity-5 pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" stroke="#1a1209" strokeWidth="1">
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="150" y1="20"
              x2="150" y2="280"
              transform={`rotate(${i * 22.5} 150 150)`}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Left: Photo + sticky notes */}
          <div className="relative">
            {/* Push pin */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
            >
              <div className="w-4 h-4 rounded-full bg-coral shadow-lg" />
              <div className="w-1 h-1.5 bg-gray-300 mx-auto" />
            </motion.div>

            {/* Main photo frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: -3 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="polaroid rotate-[-3deg] max-w-sm mx-auto"
            >
              <Image 
                src='/hero/headshot.png'
                alt='Evangelina A.'
                width={360}
                height={540}
                loading="lazy"
              />
            </motion.div>

            {/* Sticky note quote */}
            <motion.div
              initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
              animate={inView ? { opacity: 1, rotate: 8, scale: 1 } : {}}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute bottom-8 -right-4 bg-mustard p-5 w-52 shadow-scrapbook rotate-[8deg]"
            >
              <Star className="text-ink/40 mb-2" size={16} />
              <p className="font-handwriting text-ink text-sm leading-relaxed">
                "Reminder: There is inspiration hidden in everything and everyone!"
              </p>
            </motion.div>

            {/* Skill tags scattered */}
            <div className="absolute -left-6 top-1/2 space-y-2 hidden lg:block">
              {skills.slice(0, 3).map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="bg-white border border-ink/10 px-3 py-1 font-handwriting text-sm text-ink shadow-tape rotate-[-1deg]"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Content on notepad */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="bg-white shadow-scrapbook-lg p-8 relative"
              style={{
                backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, rgba(74,156,200,0.1) 31px, rgba(74,156,200,0.1) 32px)",
                paddingTop: "3rem",
              }}
            >
              {/* Notepad rings */}
              <div className="absolute top-0 left-0 right-0 flex justify-evenly -translate-y-3">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-5 h-7 rounded-t-full border-2 border-ink/15 bg-cream-dark" />
                ))}
              </div>

              <p className="font-mono text-xs text-coral uppercase tracking-widest mb-2">A Bit of History</p>
              <h2 className="font-serif text-4xl font-bold text-ink mb-6 leading-tight">
                Crafting Identity<br />Since 2006
              </h2>

              <p className="font-sans text-ink/70 leading-relaxed mb-4">
                My journey began in the garage of my home in San Antonio, built on hard work, determination, and a vision to create something meaningful. When I returned home to Austin, I didn't just restart -- I rebuilt. Through dedication, over 19 years of hands-on experience, and the power of word of mouth, my business grew stronger than ever. 
              </p>

              <p className="font-sans text-ink/70 leading-relaxed mb-6">
                What drives me is simple:{" "}
                <span className="font-handwriting text-sky text-xl" style={{ textDecoration: "underline wavy", textDecorationColor: "#4a9cc8" }}>
                  Helping
                </span>
                {" "}my clients reach their goals with confidence, quality, and integrity -- without ever stretching their budgets beyond what's fair. Every project is personal, and every success story is shared
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-ink/10">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                    className="text-center"
                  >
                    <div className="font-serif text-3xl font-bold text-ink">{stat.value}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills scattered below */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-2 mt-6"
            >
              {skills.map((skill, i) => (
                <span
                  key={skill}
                  className="bg-white border-2 border-ink/10 px-3 py-1 font-handwriting text-sm text-ink shadow-tape"
                  style={{ transform: `rotate(${(i % 3 - 1) * 1.5}deg)` }}
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
