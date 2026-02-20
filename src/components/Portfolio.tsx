"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Paperclip } from "lucide-react";

const projects = [
  {
    id: "001",
    tag: "#Visual Identity",
    title: "Botanical Rebranding",
    desc: "A complete visual overhaul for an organic apothecary — earthy palettes, hand-drawn botanicals, and tactile packaging.",
    color: "bg-sage/20",
    accent: "text-sage",
    rotate: "-rotate-1",
    tapeColor: "bg-sky/30",
  },
  {
    id: "002",
    tag: "#Editorial Design",
    title: "Ethereal Magazine",
    desc: "Layout and typography for a quarterly art publication celebrating emerging creatives.",
    color: "bg-blush/20",
    accent: "text-coral",
    rotate: "rotate-1",
    tapeColor: "bg-blush/40",
  },
  {
    id: "003",
    tag: "#Packaging",
    title: "Terra Packaging",
    desc: "Eco-friendly wine packaging with hand-drawn illustrations and sustainable materials.",
    color: "bg-mustard/20",
    accent: "text-gold",
    rotate: "-rotate-2",
    tapeColor: "bg-mustard/40",
  },
  {
    id: "004",
    tag: "#Brand Strategy",
    title: "Nova Identity System",
    desc: "End-to-end brand identity for a tech startup — playful yet professional, built on bold geometry.",
    color: "bg-sky/10",
    accent: "text-sky",
    rotate: "rotate-2",
    tapeColor: "bg-sky/30",
  },
  {
    id: "005",
    tag: "#Motion Design",
    title: "Solstice Animations",
    desc: "A series of kinetic brand assets and animated campaign materials for a wellness brand.",
    color: "bg-lavender/20",
    accent: "text-lavender",
    rotate: "-rotate-1",
    tapeColor: "bg-lavender/40",
  },
  {
    id: "006",
    tag: "#Web Design",
    title: "Reverie Studio",
    desc: "Digital experience design for a creative studio — immersive, scroll-driven, and hauntingly beautiful.",
    color: "bg-coral/10",
    accent: "text-coral",
    rotate: "rotate-1",
    tapeColor: "bg-coral/20",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotate: -5 }}
      animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 120 }}
      className="group relative"
    >
      {/* Tape */}
      <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 ${project.tapeColor} rotate-[-1deg] z-10`} />

      <div className={`${project.color} ${project.rotate} border-2 border-ink/10 bg-white p-6 shadow-scrapbook hover:shadow-scrapbook-lg hover:-translate-y-2 hover:rotate-0 transition-all duration-300 cursor-pointer`}>
        {/* Card image placeholder */}
        <div className="w-full h-48 bg-gradient-to-br from-cream-dark to-cream mb-4 relative overflow-hidden">
          <div className="absolute inset-0 flex items-end justify-end p-3">
            <span className="font-mono text-xs text-ink/30 bg-white/60 px-2 py-1">{project.id}</span>
          </div>
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id={`grid-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1a1209" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-${index})`}/>
            </svg>
          </div>
          <div className="absolute bottom-4 left-4 font-display text-4xl text-ink/10">
            {project.id}
          </div>
        </div>

        <div className={`font-handwriting text-base font-bold ${project.accent} mb-1`}>
          {project.tag}
        </div>
        <h3 className="font-serif text-xl font-bold text-ink mb-2">{project.title}</h3>
        <p className="font-sans text-sm text-ink/60 leading-relaxed">{project.desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-coral" : "bg-ink/20"}`} />
            ))}
          </div>
          <span className={`${project.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
            <ArrowUpRight size={20} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="portfolio" className="py-24 px-6 bg-cream-dark relative overflow-hidden">
      {/* Decorative torn edge top */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-cream" style={{
        clipPath: "polygon(0 0, 2% 100%, 4% 0, 6% 100%, 8% 0, 10% 100%, 12% 0, 14% 100%, 16% 0, 18% 100%, 20% 0, 22% 100%, 24% 0, 26% 100%, 28% 0, 30% 100%, 32% 0, 34% 100%, 36% 0, 38% 100%, 40% 0, 42% 100%, 44% 0, 46% 100%, 48% 0, 50% 100%, 52% 0, 54% 100%, 56% 0, 58% 100%, 60% 0, 62% 100%, 64% 0, 66% 100%, 68% 0, 70% 100%, 72% 0, 74% 100%, 76% 0, 78% 100%, 80% 0, 82% 100%, 84% 0, 86% 100%, 88% 0, 90% 100%, 92% 0, 94% 100%, 96% 0, 98% 100%, 100% 0)"
      }} />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 relative"
        >
          <span className="font-handwriting text-2xl text-coral block mb-1">Portfolio</span>
          <h2 className="font-serif text-5xl font-bold text-ink mb-4">
            Visual Chronicles
            <span className="ml-3 text-4xl">📎</span>
          </h2>
          <div className="w-24 h-1 bg-mustard rotate-[-1deg]" />

          {/* Paperclip decoration */}
          <div className="absolute top-0 right-0 text-gold opacity-30">
            <Paperclip size={80} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-ink text-ink font-handwriting text-xl px-8 py-3 rotate-[-1deg] hover:rotate-0 hover:bg-ink hover:text-cream transition-all duration-200 shadow-scrapbook"
          >
            View All Projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
