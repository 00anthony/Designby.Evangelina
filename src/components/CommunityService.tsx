"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, BookOpen, TreePine, Brush, Award } from "lucide-react";

const initiatives = [
  {
    icon: BookOpen,
    title: "Design for Kids",
    desc: "Monthly workshops teaching typography and illustration to children aged 8–14 in underserved Austin communities.",
    hours: "40 hrs/year",
    color: "bg-sky/15",
    accent: "text-sky",
    border: "border-sky/20",
    tag: "Education",
    tagBg: "bg-sky text-white",
  },
  {
    icon: TreePine,
    title: "Green Brands Initiative",
    desc: "Pro bono branding for environmental nonprofits and sustainability startups working toward a better planet.",
    hours: "60 hrs/year",
    color: "bg-sage/15",
    accent: "text-sage",
    border: "border-sage/20",
    tag: "Environment",
    tagBg: "bg-sage text-white",
  },
  {
    icon: Brush,
    title: "Mural Project",
    desc: "Collaborating with local councils to bring murals and public art to grey urban walls across East Austin.",
    hours: "80 hrs/year",
    color: "bg-coral/10",
    accent: "text-coral",
    border: "border-coral/20",
    tag: "Public Art",
    tagBg: "bg-coral text-white",
  },
  {
    icon: Users,
    title: "Women in Design",
    desc: "Mentoring the next generation of female designers through portfolio reviews, career chats, and industry access.",
    hours: "50 hrs/year",
    color: "bg-blush/15",
    accent: "text-blush",
    border: "border-blush/30",
    tag: "Mentorship",
    tagBg: "bg-blush text-ink",
  },
];

export default function CommunityService() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="community" className="py-24 px-6 bg-ink relative overflow-hidden">
      {/* Background texture lines */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="diagonal" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="#f5f0e8" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal)"/>
        </svg>
      </div>

      {/* Decorative doodles */}
      <div
        className="absolute top-12 right-12 text-cream/5 rotate-12"
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="60" />
          <circle cx="100" cy="100" r="30" />
          <line x1="10" y1="100" x2="190" y2="100" />
          <line x1="100" y1="10" x2="100" y2="190" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <Heart className="text-coral " size={28} />
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50">
              Giving Back
            </p>
          </div>
          <h2 className="font-serif text-5xl font-bold text-cream mb-4">
            Design with Purpose
          </h2>
          <p className="font-sans text-cream/60 max-w-xl leading-relaxed">
            Beyond client work, design has the power to uplift communities. Here's how
            I'm putting that belief into practice.
          </p>
        </motion.div>

        {/* Initiative cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {initiatives.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className={`${item.color} border ${item.border} p-6 relative group`}
            >
              {/* Tag */}
              <span className={`absolute top-4 right-4 ${item.tagBg} px-3 py-1 font-mono text-xs tracking-widest`}>
                {item.tag}
              </span>

              <div className={`${item.accent} mb-4`}>
                <item.icon size={28} strokeWidth={1.5} />
              </div>

              <h3 className="font-serif text-xl font-bold text-cream mb-2">{item.title}</h3>
              <p className="font-sans text-cream/60 text-sm leading-relaxed mb-4">{item.desc}</p>

              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-cream/10" />
                <span className={`font-handwriting text-base ${item.accent}`}>{item.hours}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="border border-cream/10 p-8"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-cream/30 text-center mb-8">
            Community Impact 2024
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "230+", label: "Volunteer Hours" },
              { value: "12", label: "Nonprofits Helped" },
              { value: "200+", label: "Kids Reached" },
              { value: "8", label: "Murals Painted" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
              >
                <div className="font-serif text-4xl font-bold text-cream mb-1">{stat.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-cream/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
