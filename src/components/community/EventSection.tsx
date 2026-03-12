"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Star,} from "lucide-react";
import PhotoSlot from "./PhotoSlot";
import { EventConfig } from "./types";

interface EventSectionProps {
  event: EventConfig;
  index: number;
}

export default function EventSection({ event, index }: EventSectionProps) {  
  const backgroundColor = index % 2 === 0 ? "#f5f0e8" : "#ede8dc";
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
      style={{ backgroundColor }}
    >
      {/* Large background number watermark */}
      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 font-serif text-[180px] font-bold leading-none pointer-events-none select-none"
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
              className="absolute top-1 left-40 -translate-x-1/2 w-40 h-6 z-10"
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
                  src={photo.src}
                  alt={photo.alt}
                />
              ))}
            </motion.div>

            {/* 
            Decorative washi tape strips 

            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute top-1/2 right-2 w-32 h-5 origin-right"
              style={{ background: `${accentColor}35`, transform: "rotate(6deg)" }}
              aria-hidden="true"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="absolute bottom-16 -left-2 w-24 h-4 origin-left"
              style={{ background: tapeColor, transform: "rotate(-10deg)" }}
              aria-hidden="true"
            />
            */}
          </div>
        </div>
      </div>
    </section>
  );
}

