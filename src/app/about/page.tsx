"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Star,
  Coffee,
  Award,
  Heart,
  Check,
  Palette,
  Handshake,
  Lightbulb,
  Smile,
  Music,
  BookOpen,
  Sun,
  Utensils,
  Dog,
} from "lucide-react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */

interface Stat {
  value: string;
  label: string;
  icon: React.ElementType;
}

interface Differentiator {
  icon: React.ElementType;
  title: string;
  body: string;
  accent: string;
  tape: string;
  rotate: string;
}

interface PhilosophyPillar {
  number: string;
  title: string;
  body: string;
  accent: string;
}

interface ProcessStep {
  step: string;
  label: string;
  desc: string;
  color: string;
}

interface FunFact {
  emoji: string;
  label: string;
  value: string;
  rotate: string;
  bg: string;
}

interface Hobby {
  icon: React.ElementType;
  label: string;
  note: string;
  accent: string;
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const STATS: Stat[] = [
  { value: "19+", label: "Years of Experience", icon: Award },
  { value: "140+", label: "Happy Clients", icon: Heart },
  { value: "2k+", label: "Coffee Cups", icon: Coffee },
  { value: "5★", label: "Average Rating", icon: Star },
];

const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: Handshake,
    title: "Word of Mouth Built This",
    body: "No ad spend, no cold outreach. Nearly every client has come through a referral. That only happens when the work speaks and the relationship lasts — and that's intentional.",
    accent: "#e85d3f",
    tape: "rgba(232,93,63,0.3)",
    rotate: "-1deg",
  },
  {
    icon: Palette,
    title: "Original. Every Time.",
    body: "No templates, no AI-generated shortcuts, no stock-illustration fills. Every concept starts with a blank page, a sketchbook, and a genuine understanding of your brand.",
    accent: "#4a9cc8",
    tape: "rgba(74,156,200,0.3)",
    rotate: "1deg",
  },
  {
    icon: Heart,
    title: "Fair Pricing. Always.",
    body: "19 years in this industry means I know what things cost — and what they're worth. I'll never pad a quote, upsell unnecessarily, or price someone out of quality design.",
    accent: "#7a9e7e",
    tape: "rgba(122,158,126,0.35)",
    rotate: "-0.5deg",
  },
  {
    icon: Lightbulb,
    title: "Every Project Is Personal",
    body: "I don't have an account manager between us. You work directly with me — the person designing your project — from the first conversation to the final file delivery.",
    accent: "#d4a843",
    tape: "rgba(212,168,67,0.35)",
    rotate: "1.5deg",
  },
];

const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    number: "01",
    title: "Inspiration is everywhere.",
    body: "The best ideas rarely come from staring at a screen. They come from the texture of a label at a farmers market, a mural in an alley, the way light hits a storefront window. I stay curious — always — and that curiosity shows up in every project.",
    accent: "#e85d3f",
  },
  {
    number: "02",
    title: "Strategy before aesthetics.",
    body: "Beautiful design that doesn't serve a purpose is decoration. Before a single sketch, I want to understand who your audience is, what problem we're solving, and what success actually looks like for you.",
    accent: "#4a9cc8",
  },
  {
    number: "03",
    title: "Trust is the product.",
    body: "Clients come back — and send their friends — because they trusted the process and loved the result. Transparency, honest timelines, and fair pricing aren't extras. They're the foundation.",
    accent: "#7a9e7e",
  },
];

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "Listen",
    desc: "I start by understanding your world — your goals, your audience, your constraints, and your taste. No two briefs are the same.",
    color: "#e85d3f",
  },
  {
    step: "02",
    label: "Sketch",
    desc: "Everything starts on paper. Hand-drawn concepts let ideas flow without the pressure of pixels — raw, fast, and genuinely original.",
    color: "#d4a843",
  },
  {
    step: "03",
    label: "Refine",
    desc: "Approved directions move to digital. We iterate together through focused feedback rounds until the design feels exactly right.",
    color: "#4a9cc8",
  },
  {
    step: "04",
    label: "Deliver",
    desc: "Final files land in your inbox clean, organized, and ready for whatever comes next — print, web, or production.",
    color: "#7a9e7e",
  },
];

const FUN_FACTS: FunFact[] = [
  {
    emoji: "🌮",
    label: "Food of choice",
    value: "Tacos — obviously",
    rotate: "-2deg",
    bg: "#ffd6cc",
  },
  {
    emoji: "🎵",
    label: "Studio soundtrack",
    value: "Old-school R&B",
    rotate: "1.5deg",
    bg: "#d4eaf7",
  },
  {
    emoji: "☕",
    label: "Fuel",
    value: "2+ coffees a day",
    rotate: "-1deg",
    bg: "#f0cc7a",
  },
  {
    emoji: "🏙️",
    label: "Based in",
    value: "Austin, TX",
    rotate: "2deg",
    bg: "#d8ead9",
  },
  {
    emoji: "🐶",
    label: "Office coworker",
    value: "A very opinionated dog",
    rotate: "-1.5deg",
    bg: "#e8d4f7",
  },
  {
    emoji: "📐",
    label: "Sketchbooks filled",
    value: "Lost count after 30",
    rotate: "1deg",
    bg: "#ffe8cc",
  },
];

const HOBBIES: Hobby[] = [
  {
    icon: Palette,
    label: "Mixed Media Art",
    note: "Painting, collage, and anything tactile — the same instincts that make my design work interesting.",
    accent: "#e85d3f",
  },
  {
    icon: Music,
    label: "Live Music",
    note: "Austin's the right city for it. Catching live shows keeps me creatively charged.",
    accent: "#b8a9d4",
  },
  {
    icon: BookOpen,
    label: "Reading",
    note: "Design history, branding case studies, the occasional novel. Always learning.",
    accent: "#4a9cc8",
  },
  {
    icon: Sun,
    label: "Farmers Markets",
    note: "Packaging inspiration, great produce, and good people. Weekly ritual.",
    accent: "#d4a843",
  },
  {
    icon: Utensils,
    label: "Cooking",
    note: "Recipes are just another kind of brief — constraints that lead to something delicious.",
    accent: "#7a9e7e",
  },
  {
    icon: Dog,
    label: "Dog Mom",
    note: "Chief morale officer, nap supervisor, and the most honest creative critic in the building.",
    accent: "#e8b4b8",
  },
];

const SKILLS: string[] = [
  "Brand Identity",
  "Typography",
  "Packaging",
  "Editorial Design",
  "Illustration",
  "Art Direction",
  "Web Design",
  "Signage",
  "Vehicle Wraps",
  "Book Covers",
];

/* ─────────────────────────────────────────────
   SECTION LABEL
───────────────────────────────────────────── */

interface SectionLabelProps {
  eyebrow: string;
  title: string;
  accentColor?: string;
  light?: boolean;
}

function SectionLabel({ eyebrow, title, accentColor = "#e85d3f", light = false }: SectionLabelProps) {
  return (
    <div className="mb-12">
      <p
        className="font-mono text-xs uppercase tracking-[0.25em] mb-2"
        style={{ color: light ? "rgba(245,240,232,0.45)" : "rgba(26,18,9,0.4)" }}
      >
        {eyebrow}
      </p>
      <h2
        className="font-serif text-4xl md:text-5xl font-bold leading-none mb-4"
        style={{ color: light ? "#f5f0e8" : "#1a1209" }}
      >
        {title}
      </h2>
      <div
        className="w-20 h-1"
        style={{ background: accentColor, transform: "rotate(-0.5deg)" }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   DIFFERENTIATOR CARD
───────────────────────────────────────────── */

interface DiffCardProps {
  item: Differentiator;
  index: number;
}

function DiffCard({ item, index }: DiffCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: -3 }}
      animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
      className="relative"
    >
      {/* Tape */}
      <div
        className="absolute -top-2.5 left-8 w-16 h-5 z-10"
        style={{ background: item.tape, transform: `rotate(${item.rotate})` }}
        aria-hidden="true"
      />
      <div
        className="bg-white p-6 h-full"
        style={{
          boxShadow: "3px 3px 12px rgba(26,18,9,0.15), 5px 5px 0px rgba(26,18,9,0.05)",
          transform: `rotate(${item.rotate})`,
          borderTop: `3px solid ${item.accent}`,
        }}
      >
        <div className="mb-4" style={{ color: item.accent }}>
          <item.icon size={28} strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-xl font-bold text-[#1a1209] mb-3">
          {item.title}
        </h3>
        <p className="font-sans text-sm text-[#1a1209]/65 leading-relaxed">
          {item.body}
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  const philosophyRef = useRef<HTMLElement>(null);
  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-80px" });

  const processRef = useRef<HTMLElement>(null);
  const processInView = useInView(processRef, { once: true, margin: "-80px" });

  const personalRef = useRef<HTMLElement>(null);
  const personalInView = useInView(personalRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      {/* ══════════════════════════════════════
          HERO — dark, cinematic
      ══════════════════════════════════════ */}
      <section
        className="relative mt-20 py-6 pb-0 px-6 overflow-hidden"
        style={{ backgroundColor: "#1a1209" }}
      >
        {/* doodle */}
        <div
          className="absolute right-12 top-12 opacity-[0.04] pointer-events-none"
          aria-hidden="true"
        >
          <svg width="320" height="320" viewBox="0 0 320 320" fill="none" stroke="#f5f0e8" strokeWidth="0.8">
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1="160" y1="20"
                x2="160" y2="300"
                transform={`rotate(${i * 22.5} 160 160)`}
              />
            ))}
            <circle cx="160" cy="160" r="120" />
            <circle cx="160" cy="160" r="80" />
          </svg>
        </div>

        {/* Left wave doodle */}
        <div className="absolute left-6 bottom-20 opacity-[0.04] pointer-events-none" aria-hidden="true">
          <svg width="100" height="160" viewBox="0 0 100 160" fill="none" stroke="#f5f0e8" strokeWidth="1">
            {[0, 30, 60, 90, 120].map((y) => (
              <path key={y} d={`M0,${y + 20} C25,${y} 75,${y + 40} 100,${y + 20}`} />
            ))}
          </svg>
        </div>

        <div className="max-w-6xl mx-auto" ref={heroRef}>
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Back to Home
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-end pb-0">
            {/* Left — text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.7 }}
              >
                {/* Sticky note label */}
                <div
                  className="inline-block bg-[#d4a843] px-5 py-2 font-handwriting text-xl text-[#1a1209] mb-6 shadow-md"
                  style={{ transform: "rotate(-1.5deg)" }}
                >
                  A Bit of History ✦
                </div>

                <h1 className="font-serif text-6xl md:text-7xl font-bold text-white leading-none mb-6">
                  Crafting Identity<br />
                  <span style={{ color: "#e85d3f" }}>Since 2006</span>
                </h1>

                <p className="font-sans text-white/60 leading-relaxed mb-6 max-w-lg">
                  My journey began in the garage of my home in San Antonio — built on hard work,
                  determination, and a vision to create something meaningful. When I returned home
                  to Austin, I didn't just restart. I rebuilt.
                </p>
                <p className="font-sans text-white/60 leading-relaxed mb-10 max-w-lg">
                  Through dedication, 19+ years of hands-on experience, and the power of word of
                  mouth, the business grew stronger than ever. Every project is personal. Every
                  success story is shared.
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {STATS.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                      className="text-center p-4 border border-white/10"
                    >
                      <div className="font-serif text-3xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-white/35">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — photo with polaroid frame */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Push pin */}
              {/* Push pin */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="absolute -top-4 left-1/2 md:left-3/4 -translate-x-1/2 z-20"
              >
                <div className="w-4 h-4 rounded-full bg-coral shadow-lg" />
                <div className="w-1 h-1.5 bg-gray-300 mx-auto" />
              </motion.div>

              {/* Polaroid */}
              <div
                className="bg-white max-w-xs w-full"
                style={{
                  padding: "12px 12px 48px",
                  transform: "rotate(-2deg)",
                  boxShadow: "6px 6px 24px rgba(26,18,9,0.5), 10px 10px 0px rgba(26,18,9,0.2)",
                }}
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#ede8dc]">
                  <Image
                    src="/hero/Headshot.PNG"
                    alt="Evangelina — founder of Design by Evangelina"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="font-handwriting text-center text-[#1a1209]/50 text-sm mt-3">
                  Evangelina A. — Austin, TX ✦
                </p>
              </div>

              {/* Sticky note on photo */}
              <motion.div
                initial={{ opacity: 0, rotate: 10, scale: 0.85 }}
                animate={heroInView ? { opacity: 1, rotate: 8, scale: 1 } : {}}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-4 -right-2 lg:-right-8 p-4 w-48 shadow-lg"
                style={{ background: "#f0cc7a", transform: "rotate(8deg)" }}
              >
                <Star size={13} className="mb-1.5 opacity-50" aria-hidden="true" />
                <p className="font-handwriting text-[#1a1209] text-sm leading-snug">
                  "There is inspiration hidden in everything and everyone!"
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Washi color bar */}
        <div className="mt-16 flex" aria-hidden="true">
          {(["#e85d3f50", "#4a9cc850", "#d4a84350", "#7a9e7e50", "#b8a9d450", "#e8b4b850"] as string[]).map(
            (c, i) => (
              <div key={i} className="flex-1 h-3" style={{ background: c }} />
            )
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT SETS ME APART
      ══════════════════════════════════════ */}
      <section
        className="py-24 px-6 relative"
        style={{
          backgroundColor: "#ede8dc",
          backgroundImage:
            "linear-gradient(rgba(26,18,9,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,18,9,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionLabel
            eyebrow="Why choose Evangelina"
            title="What Sets Me Apart"
            accentColor="#e85d3f"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
            {DIFFERENTIATORS.map((item, i) => (
              <DiffCard key={i} item={item} index={i} />
            ))}
          </div>

          {/* Trust badges strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-[#1a1209] p-6 md:p-8"
            style={{ transform: "rotate(-0.3deg)" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Direct client communication", icon: Check },
                { label: "No templates or AI shortcuts", icon: Check },
                { label: "Fair, transparent pricing", icon: Check },
                { label: "Files you own forever", icon: Check },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#7a9e7e] flex items-center justify-center flex-shrink-0">
                    <badge.icon size={11} color="#fff" strokeWidth={3} />
                  </div>
                  <span className="font-handwriting text-base text-white/80">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PHILOSOPHY
      ══════════════════════════════════════ */}
      <section
        ref={philosophyRef}
        className="py-24 px-6 relative overflow-hidden"
        style={{ backgroundColor: "#f5f0e8" }}
      >
        {/* Background star burst */}
        <div className="absolute right-8 top-16 opacity-[0.04] pointer-events-none" aria-hidden="true">
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

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel
              eyebrow="How I think about design"
              title="Personal Philosophy"
              accentColor="#4a9cc8"
            />
          </motion.div>

          <div className="space-y-10">
            {PHILOSOPHY_PILLARS.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={philosophyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="grid md:grid-cols-[120px_1fr] gap-6 items-start"
              >
                {/* Number */}
                <div className="flex flex-col items-start md:items-end gap-1">
                  <span
                    className="font-serif text-5xl font-bold leading-none"
                    style={{ color: pillar.accent, opacity: 0.25 }}
                  >
                    {pillar.number}
                  </span>
                  <div
                    className="w-10 h-0.5"
                    style={{ background: pillar.accent }}
                  />
                </div>

                {/* Content */}
                <div
                  className="bg-white p-6 border-l-4"
                  style={{
                    borderColor: pillar.accent,
                    boxShadow: "2px 2px 8px rgba(26,18,9,0.08)",
                  }}
                >
                  <h3 className="font-serif text-2xl font-bold text-[#1a1209] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-[#1a1209]/65 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS
      ══════════════════════════════════════ */}
      <section
        ref={processRef}
        className="py-24 px-6"
        style={{ backgroundColor: "#1a1209" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel
              eyebrow="How every project runs"
              title="The Process"
              accentColor="#d4a843"
              light
            />
          </motion.div>

          {/* Steps */}
          <div className="relative">
            {/* Connector line — desktop only */}
            <div
              className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-white/10"
              aria-hidden="true"
            />

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="relative"
                >
                  {/* Step dot */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs text-white font-bold mb-5 relative z-10"
                    style={{ background: step.color }}
                  >
                    {step.step}
                  </div>

                  <h3
                    className="font-serif text-2xl font-bold mb-3"
                    style={{ color: step.color }}
                  >
                    {step.label}
                  </h3>
                  <p className="font-sans text-sm text-white/55 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={processInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-16 pt-10 border-t border-white/10"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-white/30 mb-5">
              Areas of expertise
            </p>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill, i) => (
                <span
                  key={skill}
                  className="bg-white/5 border border-white/10 px-4 py-1.5 font-handwriting text-base text-white/60"
                  style={{ transform: `rotate(${(i % 3 - 1) * 1.2}deg)` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PERSONAL TOUCH — hobbies & fun facts
      ══════════════════════════════════════ */}
      <section
        ref={personalRef}
        className="py-24 px-6 relative overflow-hidden"
        style={{
          backgroundColor: "#ede8dc",
          backgroundImage:
            "linear-gradient(rgba(26,18,9,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,18,9,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={personalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel
              eyebrow="Beyond the studio"
              title="The Person Behind the Work"
              accentColor="#e8b4b8"
            />
          </motion.div>

          {/* Fun facts — sticky note cluster */}
          <div className="mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              animate={personalInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="font-handwriting text-xl text-[#1a1209]/50 mb-8"
            >
              A few things you won't find on a design brief ↓
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {FUN_FACTS.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                  animate={personalInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{
                    delay: i * 0.08,
                    type: "spring",
                    stiffness: 180,
                    damping: 18,
                  }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  className="p-4 shadow-md cursor-default"
                  style={{
                    background: fact.bg,
                    transform: `rotate(${fact.rotate})`,
                    boxShadow: "2px 2px 8px rgba(26,18,9,0.12)",
                  }}
                >
                  <div className="text-2xl mb-2">{fact.emoji}</div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-[#1a1209]/40 mb-1">
                    {fact.label}
                  </p>
                  <p className="font-handwriting text-sm font-bold text-[#1a1209]">
                    {fact.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={personalInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-1 h-8" style={{ background: "#e85d3f" }} />
              <h3 className="font-serif text-2xl font-bold text-[#1a1209]">
                When I'm Not Designing
              </h3>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {HOBBIES.map((hobby, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={personalInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="bg-white p-5 flex items-start gap-4"
                  style={{
                    boxShadow: "2px 2px 8px rgba(26,18,9,0.1)",
                    borderLeft: `3px solid ${hobby.accent}`,
                  }}
                >
                  <div
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: `${hobby.accent}18`, color: hobby.accent }}
                  >
                    <hobby.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-handwriting text-lg font-bold text-[#1a1209] mb-1">
                      {hobby.label}
                    </p>
                    <p className="font-sans text-xs text-[#1a1209]/55 leading-relaxed">
                      {hobby.note}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </>
  );
}
