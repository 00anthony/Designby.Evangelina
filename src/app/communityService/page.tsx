"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Heart,
  Users,
  Ribbon,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Clock,
  ImagePlus,
  Star,
  ArrowRight,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */

interface EventDetail {
  icon: LucideIcon;
  text: string;
}

interface PhotoSlotConfig {
  label: string;
  rotate: string;
  image?: string;
}

interface EventConfig {
  number: number;
  tag: string;
  tagBg: string;
  title: string;
  subtitle: string;
  description: string;
  details: EventDetail[];
  accentColor: string;
  stickyNoteColor: string;
  tapeColor: string;
  icon: LucideIcon;
  photoLayout: "row" | "grid" | "stack";
  photos: PhotoSlotConfig[];
  reversed: boolean;
  extra: string;
}

interface PhotoSlotProps {
  label: string;
  rotate: string;
  accentColor: string;
  index: number;
}

interface EventSectionProps {
  event: EventConfig;
}

interface QuickNavPill {
  label: string;
  color: string;
  href: string;
}

/* ─────────────────────────────────────────────
   PHOTO SLOT
───────────────────────────────────────────── */

function PhotoSlot({ label, rotate, accentColor, index }: PhotoSlotProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, type: "spring", stiffness: 140, damping: 18 }}
      style={{ transform: `rotate(${rotate})` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative cursor-pointer"
    >
      {/* Polaroid frame */}
      <div
        className="bg-white transition-all duration-300"
        style={{
          padding: "10px 10px 36px",
          boxShadow: hovered
            ? "6px 6px 24px rgba(26,18,9,0.25), 10px 10px 0px rgba(26,18,9,0.08)"
            : "3px 3px 12px rgba(26,18,9,0.2), 6px 6px 0px rgba(26,18,9,0.05)",
        }}
      >
        {/* Photo area */}
        <div
          className="w-full h-44 flex flex-col items-center justify-center gap-2 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${accentColor}18, ${accentColor}30)` }}
        >
          {/* Grid pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id={`grid-${index}`}
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 16 0 L 0 0 0 16"
                  fill="none"
                  stroke="#1a1209"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
          </svg>

          <motion.div
            animate={hovered ? { scale: 1.2, rotate: 15 } : { scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ color: accentColor }}
          >
            <ImagePlus size={28} strokeWidth={1.5} />
          </motion.div>
          <span
            className="font-mono text-xs uppercase tracking-widest"
            style={{ color: accentColor, opacity: 0.7 }}
          >
            {label}
          </span>
        </div>

        {/* Caption line */}
        <div className="mt-2 h-px w-3/4 mx-auto bg-gray-200 rounded" />
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   EVENT SECTION
───────────────────────────────────────────── */

function EventSection({ event }: EventSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<boolean>(false);

  const {
    number,
    tag,
    tagBg,
    title,
    subtitle,
    description,
    details,
    accentColor,
    stickyNoteColor,
    tapeColor,
    icon: Icon,
    photoLayout,
    photos,
    reversed,
    extra,
  } = event;

  return (
    <section
      ref={ref}
      id={`event-${number}`}
      className="relative py-20 px-6 overflow-hidden"
    >
      {/* Large background number watermark */}
      <div
        className="absolute -right-6 top-1/2 -translate-y-1/2 font-serif text-[180px] font-bold leading-none pointer-events-none select-none"
        style={{ color: accentColor, opacity: 0.04 }}
        aria-hidden="true"
      >
        {number}
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Tag row */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-10"
        >
          <span
            className="px-4 py-1.5 font-mono text-xs tracking-widest uppercase text-white shadow-sm"
            style={{ background: tagBg, transform: "rotate(-1deg)" }}
          >
            {tag}
          </span>
          <div className="h-px flex-1 opacity-20" style={{ background: accentColor }} />
          <span
            className="font-mono text-xs uppercase tracking-widest opacity-30"
            style={{ color: accentColor }}
          >
            0{number}
          </span>
        </motion.div>

        <div
          className={`grid lg:grid-cols-2 gap-16 items-start${reversed ? " lg:grid-flow-dense" : ""}`}
        >
          {/* ── TEXT COLUMN ── */}
          <div className={reversed ? "lg:col-start-2" : ""}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {/* Icon + title */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ background: `${accentColor}20`, color: accentColor }}
                >
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p
                    className="font-mono text-xs uppercase tracking-widest mb-1"
                    style={{ color: accentColor }}
                  >
                    {subtitle}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1209] leading-tight">
                    {title}
                  </h2>
                </div>
              </div>

              {/* Handwritten SVG underline */}
              <div className="ml-16 mb-6">
                <svg
                  height="8"
                  viewBox="0 0 200 8"
                  className="w-40"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0,4 C20,1 40,7 60,4 C80,1 100,7 120,4 C140,1 160,7 180,4 C190,2 196,5 200,4"
                    stroke={accentColor}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p className="font-sans text-[#1a1209]/70 leading-relaxed mb-6">
                {description}
              </p>

              {/* Event details */}
              <div className="space-y-2 mb-6">
                {details.map((detail, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <detail.icon size={14} style={{ color: accentColor }} />
                    <span className="font-handwriting text-lg text-[#1a1209]/70">
                      {detail.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Expandable extra description */}
              <div>
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="flex items-center gap-2 font-handwriting text-base transition-colors mt-2"
                  style={{ color: accentColor }}
                >
                  {expanded ? "Show less" : "Read more about this event"}
                  {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 font-sans text-sm text-[#1a1209]/60 leading-relaxed">
                        {extra}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Sticky note */}
              <motion.div
                initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
                animate={inView ? { opacity: 1, rotate: -3, scale: 1 } : {}}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-block mt-8 p-4 shadow-md"
                style={{ background: stickyNoteColor, transform: "rotate(-3deg)" }}
              >
                <Star size={12} className="mb-1 opacity-50" aria-hidden="true" />
                <p className="font-handwriting text-sm text-[#1a1209] leading-relaxed">
                  Design by Evangelina —<br />proud to give back ♥
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* ── PHOTOS COLUMN ── */}
          <div className={`relative${reversed ? " lg:col-start-1 lg:row-start-1" : ""}`}>
            {/* Tape strip above photos */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 z-10"
              style={{ background: tapeColor, transform: "rotate(-1.5deg)" }}
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className={`relative pt-4 ${
                photoLayout === "grid"
                  ? "grid grid-cols-2 gap-4"
                  : "flex flex-wrap justify-center gap-5"
              }`}
            >
              {photos.map((photo, i) => (
                <PhotoSlot
                  key={i}
                  label={photo.label}
                  rotate={photo.rotate}
                  accentColor={accentColor}
                  index={i}
                />
              ))}
            </motion.div>

            {/* Decorative washi tape strips */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute bottom-4 right-0 w-20 h-5 origin-right"
              style={{ background: `${accentColor}35`, transform: "rotate(6deg)" }}
              aria-hidden="true"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="absolute -bottom-2 left-4 w-16 h-4 origin-left"
              style={{ background: tapeColor, transform: "rotate(-4deg)" }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const events: EventConfig[] = [
  {
    number: 1,
    tag: "Fundraiser & Awareness",
    tagBg: "#e85d3f",
    title: "Community Cancer Benefit",
    subtitle: "Healing Through Community",
    description:
      "A heartfelt fundraising event uniting neighbors, local businesses, and advocates to support cancer patients and their families. Design by Evangelina contributes creative direction, signage, and print materials to help bring the mission to life visually.",
    details: [
      { icon: Calendar, text: "Annual — Date TBD" },
      { icon: MapPin, text: "London Community Hall, East End" },
      { icon: Clock, text: "10:00 am – 6:00 pm" },
      { icon: Heart, text: "Proceeds benefit local oncology support funds" },
    ],
    accentColor: "#e85d3f",
    stickyNoteColor: "#ffd6cc",
    tapeColor: "rgba(232,93,63,0.3)",
    icon: Ribbon,
    photoLayout: "row",
    photos: [
      { label: "Event Photo", rotate: "-3deg" },
      { label: "Community Photo", rotate: "2deg" },
      { label: "Highlights", rotate: "-1deg" },
    ],
    reversed: false,
    extra:
      "This event brings together survivors, supporters, and local healthcare providers for a day of storytelling, auction fundraising, live music, and community meals. Evangelina donates full creative services — from the event identity to printed programs and banners — every year.",
  },
  {
    number: 2,
    tag: "Reentry & Justice",
    tagBg: "#4a9cc8",
    title: "On-Point Reentry Conference",
    subtitle: "Pathways Back to Community",
    description:
      "The On-Point Reentry Conference connects returning citizens with employment resources, legal services, housing support, and mentorship. Evangelina provides branding and design services pro bono to amplify the conference's message and reach.",
    details: [
      { icon: Calendar, text: "Biannual — Spring & Fall" },
      { icon: MapPin, text: "City Convention Centre, London" },
      { icon: Clock, text: "9:00 am – 5:00 pm" },
      { icon: Users, text: "300+ attendees across two days" },
    ],
    accentColor: "#4a9cc8",
    stickyNoteColor: "#d4eaf7",
    tapeColor: "rgba(74,156,200,0.3)",
    icon: Users,
    photoLayout: "grid",
    photos: [
      { label: "Conference Photo", rotate: "-2deg" },
      { label: "Panel Discussion", rotate: "2deg" },
      { label: "Workshop", rotate: "-1.5deg" },
      { label: "Networking", rotate: "1deg" },
    ],
    reversed: true,
    extra:
      "On-Point brings keynote speakers, breakout workshops, resume clinics, and one-on-one mentoring sessions for people re-entering society after incarceration. The conference's creative identity — designed by Evangelina — reflects dignity, hope, and forward momentum.",
  },
  {
    number: 3,
    tag: "Professional Network",
    tagBg: "#7a9e7e",
    title: "NARP Conference",
    subtitle: "National Association of Reentry Professionals",
    description:
      "The NARP Conference gathers practitioners, policymakers, researchers, and advocates from across the country to advance best practices in reentry support. Evangelina contributes brand design and exhibition materials for this landmark annual gathering.",
    details: [
      { icon: Calendar, text: "Annual — National Convention" },
      { icon: MapPin, text: "Rotating Host City (Nationwide)" },
      { icon: Clock, text: "3-Day Conference" },
      { icon: Award, text: "Featuring reentry excellence awards" },
    ],
    accentColor: "#7a9e7e",
    stickyNoteColor: "#d8ead9",
    tapeColor: "rgba(122,158,126,0.35)",
    icon: Award,
    photoLayout: "row",
    photos: [
      { label: "Keynote Photo", rotate: "2deg" },
      { label: "Award Ceremony", rotate: "-2deg" },
      { label: "Expo Floor", rotate: "1.5deg" },
    ],
    reversed: false,
    extra:
      "NARP connects hundreds of reentry professionals for knowledge sharing, policy advocacy, and collaborative programming. As a design partner, Evangelina creates the annual conference identity, speaker materials, wayfinding signage, and commemorative print pieces.",
  },
];

const quickNavPills: QuickNavPill[] = [
  { label: "Community Cancer Benefit", color: "#e85d3f", href: "#event-1" },
  { label: "On-Point Reentry Conf.", color: "#4a9cc8", href: "#event-2" },
  { label: "NARP Conference", color: "#7a9e7e", href: "#event-3" },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function CommunityServicePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      <Navbar />

      <main
        className="min-h-screen"
        style={{
          backgroundColor: "#f5f0e8",
          color: "#1a1209",
          backgroundImage:
            "linear-gradient(rgba(26,18,9,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(26,18,9,0.035) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        {/* ── HERO ── */}
        <section
          className="relative pt-32 pb-20 px-6 overflow-hidden"
          style={{ backgroundColor: "#1a1209" }}
        >
          {/* Spinning circle doodle */}
          <motion.div
            className="absolute right-12 top-12 opacity-5 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          >
            <svg width="280" height="280" viewBox="0 0 280 280" fill="none" stroke="#f5f0e8" strokeWidth="1">
              {[...Array(6)].map((_, i) => (
                <circle key={i} cx="140" cy="140" r={20 + i * 20} />
              ))}
              <line x1="0" y1="140" x2="280" y2="140" />
              <line x1="140" y1="0" x2="140" y2="280" />
            </svg>
          </motion.div>

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
                  Heart ♥
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

        {/* ── EVENT SECTIONS ── */}
        {events.map((event, i) => (
          <div key={event.number}>
            <div
              style={{
                backgroundColor: i % 2 === 0 ? "#f5f0e8" : "#ede8dc",
                backgroundImage:
                  i % 2 === 0
                    ? "linear-gradient(rgba(26,18,9,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,18,9,0.03) 1px, transparent 1px)"
                    : "none",
                backgroundSize: "32px 32px",
              }}
            >
              <EventSection event={event} />
            </div>

            {/* Torn paper divider between events */}
            {i < events.length - 1 && (
              <div
                className="relative h-10 overflow-hidden"
                style={{ backgroundColor: i % 2 === 0 ? "#ede8dc" : "#f5f0e8" }}
                aria-hidden="true"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#f5f0e8" : "#ede8dc",
                    clipPath:
                      "polygon(0 0,2% 100%,4% 0,6% 100%,8% 0,10% 100%,12% 0,14% 100%,16% 0,18% 100%,20% 0,22% 100%,24% 0,26% 100%,28% 0,30% 100%,32% 0,34% 100%,36% 0,38% 100%,40% 0,42% 100%,44% 0,46% 100%,48% 0,50% 100%,52% 0,54% 100%,56% 0,58% 100%,60% 0,62% 100%,64% 0,66% 100%,68% 0,70% 100%,72% 0,74% 100%,76% 0,78% 100%,80% 0,82% 100%,84% 0,86% 100%,88% 0,90% 100%,92% 0,94% 100%,96% 0,98% 100%,100% 0)",
                  }}
                />
              </div>
            )}
          </div>
        ))}

        {/* ── FOOTER CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 px-6 text-center"
          style={{ backgroundColor: "#1a1209" }}
        >
          <p className="font-handwriting text-white/50 text-xl mb-2">
            Want to involve Evangelina in your community event?
          </p>
          <h2 className="font-serif text-3xl font-bold text-white mb-6">
            Let's Build Something Meaningful
          </h2>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 font-handwriting text-xl text-white transition-all hover:-translate-y-1"
            style={{
              background: "#e85d3f",
              boxShadow: "4px 4px 0px rgba(255,255,255,0.15)",
            }}
          >
            Get in Touch <ArrowRight size={18} aria-hidden="true" />
          </Link>

          {/* Back to home */}
          <div className="mt-8">
            <Link
              href="/"
              className="font-mono text-xs uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
}
