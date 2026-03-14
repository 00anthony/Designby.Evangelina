"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Paperclip } from "lucide-react";
import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */

type FilterCategory =
  | "All"
  | "Brand Identity"
  | "Signage"
  | "Packaging"
  | "Editorial Design"
  | "Web Design"
  | "Community Service";

interface Project {
  id: string;
  tag: string;
  category: FilterCategory;
  title: string;
  desc: string;
  images: string[];
  alt: string;
  accent: string;
  tapeColor: string;
  rotate: string;
}

interface FilterButtonProps {
  label: FilterCategory;
  active: boolean;
  onClick: () => void;
  color: string;
}

interface GalleryImageProps {
  project: Project;
  imageIndex: number;
  projectIndex: number;
  onOpen: (projectId: string, imageIndex: number) => void;
}

interface ModalState {
  projectId: string;
  imageIndex: number;
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const ALL_PROJECTS: Project[] = [
  {
    id: "001",
    tag: "#Event Organizing / Vinyl Shirts",
    category: "Brand Identity",
    title: "Barstool",
    desc: "Custom vinyl jersey production and event branding for Reese's Barstool activation.",
    images: [
      "/portfolio/barstool-group-photo.jpg",
      "/portfolio/barstool-in-action.jpg",
      "/portfolio/barstool-solo-in-action.jpg",
    ],
    alt: "Barstool event branding and vinyl jerseys",
    accent: "text-sage",
    tapeColor: "bg-sky/30",
    rotate: "-rotate-1",
  },
  {
    id: "002",
    tag: "#Signage",
    category: "Signage",
    title: "Sports Banner",
    desc: "High-impact banner design for athletic events — dynamic typography and bold color blocking for maximum visibility.",
    images: ["/portfolio/DVHS-CHEER-BANNER.png"],
    alt: "Sports cheer banner design",
    accent: "text-coral",
    tapeColor: "bg-blush/40",
    rotate: "rotate-1",
  },
  {
    id: "003",
    tag: "#Car Wraps ",
    category: "Brand Identity",
    title: "San Antonio Pets Alive",
    desc: "Brand identity development focused on warmth, trust, and compassion — visuals that reflect love and advocacy for animals.",
    images: [
      "/portfolio/SAPA-van.jpg",
      "/portfolio/SAPA-van-back.jpg",
      "/portfolio/SAPA-van2.png",
    ],
    alt: "San Antonio Pets Alive van wrap and business card",
    accent: "text-gold",
    tapeColor: "bg-mustard/40",
    rotate: "-rotate-2",
  },
  {
    id: "004",
    tag: "#Editorial Design",
    category: "Editorial Design",
    title: "Horizon Magazine",
    desc: "Editorial layout and typographic system for a quarterly art publication celebrating Porsche.",
    images: [
      "/portfolio/horizon-magazine.jpg",
      "/portfolio/horizon-magazines.jpg",
      "/portfolio/horizon-bag.jpg",
    ],
    alt: "Horizon magazine editorial design",
    accent: "text-sky",
    tapeColor: "bg-lavender/40",
    rotate: "rotate-2",
  },
  {
    id: "005",
    tag: "#Business Cards #ads #water bottles",
    category: "Brand Identity",
    title: "Bombkutz",
    desc: "Custom business cards highlighting personality and authority with personalized design.",
    images: [
      "/portfolio/Bombkutz-card.png", 
      "/portfolio/Bombkutz-promo.PNG",
      "/portfolio/Bombkutz-water.jpeg",
    ],
    alt: "Bombkutz custom business cards",
    accent: "text-lavender",
    tapeColor: "bg-sky/30",
    rotate: "-rotate-1",
  },
  {
    id: "006",
    tag: "#Book Cover Design",
    category: "Editorial Design",
    title: "Menopause Mijas / When Enchiladas Fly",
    desc: "A powerful design for a powerful message — in loving ourselves the way we always deserved.",
    images: ["/portfolio/book-menopause.png", "/portfolio/book-enchiladas.jpg"],
    alt: "Book cover designs for Menopause Mijas and When Enchiladas Fly",
    accent: "text-coral",
    tapeColor: "bg-coral/20",
    rotate: "rotate-1",
  },
  {
    id: "007",
    tag: "#Door Hanger",
    category: "Signage",
    title: "Pearl Prestige Cleaning",
    desc: "Capture leads on the go with these client approved designs.",
    images: ["/portfolio/PPC-door-hanger.png", "/portfolio/PPC-door-hanger2.png"],
    alt: "Terra wine packaging design",
    accent: "text-sage",
    tapeColor: "bg-sage/30",
    rotate: "-rotate-2",
  },
  {
    id: "008",
    tag: "#Web Design",
    category: "Web Design",
    title: "Design by Evangelina",
    desc: "Digital experience design for a creative studio — immersive, scroll-driven, and hauntingly beautiful.",
    images: [
      "/portfolio/DbE-hero.png", 
      "/portfolio/DbE-portfolio.png",
      "/portfolio/DbE-cancer.png",
    ],
    alt: "Reverie Studio web design",
    accent: "text-sky",
    tapeColor: "bg-sky/20",
    rotate: "rotate-1",
  },
  {
    id: "009",
    tag: "#Community Service",
    category: "Community Service",
    title: "On-Point Reentry Conf.",
    desc: "Complete event branding — identity, print collateral, and wayfinding — donated pro bono.",
    images: [
      "/communityService/on-point-program.png",
      "/communityService/on-point-program1.png",
      "/communityService/on-point-program2.png",
      "/communityService/on-point-program3.png",
      "/communityService/on-point-shirt.jpg",
      "/communityService/on-point-group.png"
    ],
    alt: "On-Point Reentry Conference branding",
    accent: "text-coral",
    tapeColor: "bg-coral/30",
    rotate: "-rotate-1",
  },
  {
    id: "010",
    tag: "#Community Service",
    category: "Community Service",
    title: "Community Cancer Benefit",
    desc: "Event identity, signage, and printed materials donated to support the annual cancer benefit.",
    images: [
      "/communityService/cancer-poster.png",
      "/communityService/cancer-bbq.png",
    ],
    alt: "Community Cancer Benefit event materials",
    accent: "text-blush",
    tapeColor: "bg-blush/40",
    rotate: "rotate-2",
  },
  {
    id: "011",
    tag: "#ads!",
    category: "Signage",
    title: "Blue Ocean / HD Motorsports",
    desc: "Window graphics and interior signage for prestigious motor companies built for in person and online customer acquisition.",
    images: [
      "/portfolio/Blue-Ocean.png",
      "/portfolio/HD-Motorsport.png",
    ],
    alt: "",
    accent: "text-sage",
    tapeColor: "bg-sage/30",
    rotate: "-rotate-1",
  },
  {
    id: "012",
    tag: "#Calendars!",
    category: "Signage",
    title: "Mona Helmy Art / Sugars Calendar",
    desc: "warm, fun, homesetting designs for the most punctual of clients.",
    images: [
      "/portfolio/calendar-mona-h.png",
      "/portfolio/calendar-sugars.png"
    ],
    alt: "",
    accent: "text-gold",
    tapeColor: "bg-mustard/30",
    rotate: "rotate-1",
  },
  {
    id: "013",
    tag: "#Decal",
    category: "Signage",
    title: "Chops Carps",
    desc: "Decals guarenteed to catch the attention of any passer-by",
    images: [
      "/portfolio/chopscarps-decal.png",
      "/portfolio/chopscarps-decal2.jpg",
    ],
    alt: "Horizon magazine editorial design",
    accent: "text-sky",
    tapeColor: "bg-lavender/40",
    rotate: "rotate-2",
  },
  {
    id: "014",
    tag: "#Decals",
    category: "Signage",
    title: "Flawless Home & Commercial llc.",
    desc: "Flawless decals for flawless businesses.",
    images: [
      "/portfolio/flawless1.jpg", 
      "/portfolio/flawless2.jpg",
    ],
    alt: "Bombkutz custom business cards",
    accent: "text-lavender",
    tapeColor: "bg-sky/30",
    rotate: "-rotate-1",
  },
  {
    id: "015",
    tag: "#Web design!",
    category: "Web Design",
    title: "PT Roofing & Renovations",
    desc: "A beautifully modern website to display beautifully modern work.",
    images: [
      "/portfolio/pt-hero.png",
      "/portfolio/pt-services.png",
      "/portfolio/pt-contact.png",
    ],
    alt: "Sports cheer banner design",
    accent: "text-coral",
    tapeColor: "bg-blush/40",
    rotate: "rotate-1",
  },
];

const FILTER_CATEGORIES: FilterCategory[] = [
  "All",
  "Brand Identity",
  "Signage",
  "Packaging",
  "Editorial Design",
  "Web Design",
  "Community Service",
];

const FILTER_COLORS: Record<FilterCategory, string> = {
  All: "#1a1209",
  "Brand Identity": "#e85d3f",
  Signage: "#4a9cc8",
  Packaging: "#d4a843",
  "Editorial Design": "#b8a9d4",
  "Web Design": "#7a9e7e",
  "Community Service": "#e8b4b8",
};

/* ─────────────────────────────────────────────
   FILTER BUTTON
───────────────────────────────────────────── */

function FilterButton({ label, active, onClick, color }: FilterButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="relative px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-200 border-2"
      style={{
        borderColor: active ? color : `${color}40`,
        background: active ? color : "transparent",
        color: active ? "#f5f0e8" : color,
        transform: active ? "rotate(-0.5deg)" : "none",
        boxShadow: active ? "3px 3px 0px rgba(26,18,9,0.15)" : "none",
      }}
    >
      {label}
      {active && (
        <motion.span
          layoutId="active-filter-dot"
          className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full"
          style={{ background: color }}
        />
      )}
    </motion.button>
  );
}

/* ─────────────────────────────────────────────
   GALLERY IMAGE TILE
───────────────────────────────────────────── */

function GalleryImageTile({ project, imageIndex, projectIndex, onOpen }: GalleryImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Vary sizes for a masonry-like feel: every 5th card is tall
  const isTall = (projectIndex + imageIndex) % 7 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: -3 }}
      animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{
        delay: (projectIndex * 0.05 + imageIndex * 0.03) % 0.4,
        duration: 0.5,
        type: "spring",
        stiffness: 130,
      }}
      className={`group relative cursor-pointer ${isTall ? "row-span-2" : ""}`}
      onClick={() => onOpen(project.id, imageIndex)}
    >
      {/* Washi tape strip on first image of each project */}
      {imageIndex === 0 && (
        <div
          className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 z-10 ${project.tapeColor}`}
          style={{ transform: "translateX(-50%) rotate(-1.5deg)" }}
          aria-hidden="true"
        />
      )}

      {/* Polaroid-style frame */}
      <div
        className={`bg-white overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[6px_6px_24px_rgba(26,18,9,0.25)] ${project.rotate}`}
        style={{
          padding: "8px 8px 32px",
          boxShadow: "3px 3px 12px rgba(26,18,9,0.18), 5px 5px 0px rgba(26,18,9,0.05)",
        }}
      >
        {/* Image */}
        <div
          className={`relative w-full overflow-hidden bg-cream-dark ${isTall ? "h-72" : "h-48"}`}
        >
          <Image
            src={project.images[imageIndex]}
            alt={`${project.alt} — image ${imageIndex + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={projectIndex < 2 && imageIndex === 0}
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 font-handwriting text-ink text-base shadow-lg">
                View Full ✦
              </div>
            </motion.div>
          </div>
        </div>

        {/* Caption — only on first image */}
        {imageIndex === 0 && (
          <div className="mt-2 px-1">
            <p className={`font-handwriting text-sm font-bold ${project.accent} leading-tight`}>
              {project.title}
            </p>
          </div>
        )}
      </div>

      {/* Project number badge on last image */}
      {imageIndex === project.images.length - 1 && (
        <div
          className="absolute bottom-2 right-2 bg-mustard text-ink font-mono text-[10px] px-2 py-0.5 z-10"
          style={{ transform: "rotate(1deg)" }}
        >
          {project.id}
        </div>
      )}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   LIGHTBOX MODAL CONTENT
───────────────────────────────────────────── */

interface LightboxProps {
  project: Project;
  imageIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  totalImages: number;
}

function LightboxContent({
  project,
  imageIndex,
  onClose,
  onPrev,
  onNext,
  totalImages,
}: LightboxProps) {
  // Touch swipe support
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) onNext();
    if (diff < -50) onPrev();
    touchStartX.current = null;
  };

  return (
    <div
      className="relative flex flex-col items-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X size={28} />
      </button>

      {/* Image */}
      <div className="relative flex items-center justify-center w-full">
        {totalImages > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-2 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-all hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={`${project.id}-${imageIndex}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={project.images[imageIndex]}
              alt={`${project.alt} — image ${imageIndex + 1} of ${totalImages}`}
              width={1400}
              height={900}
              className="max-h-[80vh] w-auto h-auto object-contain rounded-sm"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {totalImages > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-2 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-all hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Caption bar */}
      <div className="mt-4 w-full bg-white/10 backdrop-blur-sm px-6 py-3 flex items-center justify-between">
        <div>
          <p className="font-handwriting text-white text-xl font-bold leading-tight">
            {project.title}
          </p>
          <p className="font-mono text-white/50 text-xs uppercase tracking-widest">
            {project.tag}
          </p>
        </div>
        {totalImages > 1 && (
          <div className="flex gap-1.5">
            {project.images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === imageIndex ? "bg-white scale-125" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [modalState, setModalState] = useState<ModalState | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  // Filtered projects
  const filteredProjects =
    activeFilter === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === activeFilter);

  // Modal helpers
  const openModal = useCallback((projectId: string, imageIndex: number) => {
    setModalState({ projectId, imageIndex });
  }, []);

  const closeModal = useCallback(() => {
    setModalState(null);
  }, []);

  // Find the active project for the lightbox
  const activeProject = modalState
    ? ALL_PROJECTS.find((p) => p.id === modalState.projectId) ?? null
    : null;

  const handlePrev = useCallback(() => {
    if (!modalState || !activeProject) return;
    setModalState({
      projectId: modalState.projectId,
      imageIndex:
        (modalState.imageIndex - 1 + activeProject.images.length) %
        activeProject.images.length,
    });
  }, [modalState, activeProject]);

  const handleNext = useCallback(() => {
    if (!modalState || !activeProject) return;
    setModalState({
      projectId: modalState.projectId,
      imageIndex: (modalState.imageIndex + 1) % activeProject.images.length,
    });
  }, [modalState, activeProject]);

  // Keyboard arrow navigation
  useEffect(() => {
    if (!modalState) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalState, handlePrev, handleNext]);

  return (
    <>
      <Navbar />
      {/* ── HEADER ── */}
      <section
        className="relative mt-20 py-16 px-6 overflow-hidden"
        style={{ backgroundColor: "#1a1209" }}
      >
        {/* Background doodle */}
        <div
          className="absolute right-16 top-16 opacity-5 pointer-events-none"
          aria-hidden="true"
        >
          <svg width="240" height="240" viewBox="0 0 240 240" fill="none" stroke="#f5f0e8" strokeWidth="0.8">
            {[20, 40, 60, 80, 100].map((r) => (
              <circle key={r} cx="120" cy="120" r={r} />
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto" ref={headerRef}>
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="font-handwriting text-3xl text-[#d4a843] block mb-2">
              the archive
            </span>
            <h1 className="font-serif text-6xl md:text-7xl font-bold text-white leading-none mb-4">
              Visual Chronicles
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-24 h-1 bg-[#e85d3f]" style={{ transform: "rotate(-0.5deg)" }} />
              <Paperclip className="text-white/20" size={24} aria-hidden="true" />
            </div>
          </motion.div>

          {/* Washi tape strips */}
          <div className="absolute bottom-0 left-0 right-0 flex" aria-hidden="true">
            {(["#e85d3f30", "#4a9cc830", "#d4a84330", "#b8a9d430", "#7a9e7e30", "#e8b4b830"] as string[]).map(
              (c, i) => (
                <div key={i} className="flex-1 h-2.5" style={{ background: c }} />
              )
            )}
          </div>

          <div className="absolute bottom-0 left-40 right-0 flex" aria-hidden="true">
            {(["#e85d3f30", "#4a9cc830", "#d4a84330", "#b8a9d430", "#7a9e7e30", "#e8b4b830"] as string[]).map(
              (c, i) => (
                <div key={i} className="flex-1 h-2.5" style={{ background: c }} />
              )
            )}
          </div>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <div
        className="sticky top-0 z-40 py-4 px-6 border-b border-ink/10"
        style={{
          backgroundColor: "rgba(245,240,232,0.95)",
          backdropFilter: "blur(8px)",
          backgroundImage:
            "linear-gradient(rgba(26,18,9,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,18,9,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/30 mr-2 hidden md:block">
              Filter:
            </span>
            {FILTER_CATEGORIES.map((cat) => (
              <FilterButton
                key={cat}
                label={cat}
                active={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
                color={FILTER_COLORS[cat]}
              />
            ))}
            <span className="ml-auto font-mono text-xs text-ink/30">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      {/* ── GRID ── */}
      <main
        className="min-h-screen py-16 px-6"
        style={{
          backgroundColor: "#ede8dc",
          backgroundImage:
            "linear-gradient(rgba(26,18,9,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,18,9,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {filteredProjects.length === 0 ? (
                <div className="text-center py-24">
                  <p className="font-handwriting text-3xl text-ink/30">
                    Nothing here yet — check back soon ✦
                  </p>
                </div>
              ) : (
                <>
                  {/* Group by project — each project gets a cluster */}
                  <div className="space-y-16">
                    {filteredProjects.map((project, projectIndex) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: projectIndex * 0.06, duration: 0.5 }}
                        className="relative"
                      >
                        {/* Project label header */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex items-center gap-2">
                            <span
                              className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 text-white"
                              style={{ background: FILTER_COLORS[project.category] }}
                            >
                              {project.category}
                            </span>
                            <h2 className="font-serif text-xl font-bold text-ink">
                              {project.title}
                            </h2>
                          </div>
                          <div className="h-px flex-1 bg-ink/10" />
                          <span className="font-mono text-xs text-ink/30">{project.id}</span>
                        </div>

                        {/* Description */}
                        <p className="font-sans text-sm text-ink/60 max-w-xl mb-6">
                          {project.desc}
                        </p>

                        {/* Image grid — horizontal scroll on mobile, grid on md+ */}
                        {/* -mx-6 px-6 lets the strip bleed to screen edges on mobile */}
                        <div className="-mx-6 px-6 md:mx-0 md:px-0">

                          {/* ── MOBILE: snap-scroll strip ── */}
                          <div className="relative md:hidden">
                            {/* Right fade hint */}
                            {project.images.length > 1 && (
                              <div
                                className="pointer-events-none absolute right-0 top-0 bottom-4 w-12 z-10"
                                style={{ background: "linear-gradient(to left, #ede8dc, transparent)" }}
                                aria-hidden="true"
                              />
                            )}

                            <div
                              className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
                              style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                                WebkitOverflowScrolling: "touch",
                              }}
                            >
                              {project.images.map((_, imgIndex) => (
                                <div
                                  key={imgIndex}
                                  className="flex-none w-[72vw] max-w-[280px] snap-start"
                                >
                                  <GalleryImageTile
                                    project={project}
                                    imageIndex={imgIndex}
                                    projectIndex={projectIndex}
                                    onOpen={openModal}
                                  />
                                </div>
                              ))}
                              {/* Trailing spacer keeps last card clear of the fade */}
                              <div className="flex-none w-6" aria-hidden="true" />
                            </div>

                            {/* Scroll position dots */}
                            {project.images.length > 1 && (
                              <div className="flex justify-center gap-1.5 mt-1">
                                {project.images.map((_, i) => (
                                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-ink/25" />
                                ))}
                              </div>
                            )}
                          </div>

                          {/* ── DESKTOP: responsive grid ── */}
                          <div
                            className={`hidden md:grid gap-5 ${
                              project.images.length === 1
                                ? "grid-cols-1 max-w-md"
                                : project.images.length === 2
                                ? "grid-cols-2 max-w-2xl"
                                : "grid-cols-2 lg:grid-cols-3"
                            }`}
                          >
                            {project.images.map((_, imgIndex) => (
                              <GalleryImageTile
                                key={imgIndex}
                                project={project}
                                imageIndex={imgIndex}
                                projectIndex={projectIndex}
                                onOpen={openModal}
                              />
                            ))}
                          </div>

                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <FooterCTA />
      <Footer />

      {/* ── LIGHTBOX MODAL ── */}
      <Modal isOpen={modalState !== null} onClose={closeModal}>
        {activeProject && modalState && (
          <LightboxContent
            project={activeProject}
            imageIndex={modalState.imageIndex}
            onClose={closeModal}
            onPrev={handlePrev}
            onNext={handleNext}
            totalImages={activeProject.images.length}
          />
        )}
      </Modal>
    </>
  );
}
