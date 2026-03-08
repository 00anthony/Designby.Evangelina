"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import type { LucideIcon } from "lucide-react";
import {
  Palette,
  Layout,
  Package,
  Signpost,
  Globe,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  ArrowRight,
  Clock,
  Star,
  Check,
  Truck,
  Pencil,
  Search,
  Users,
} from "lucide-react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */

interface ProcessStep {
  icon: LucideIcon;
  label: string;
  description: string;
  type: "self" | "outsourced" | "collaborative";
}

interface Deliverable {
  item: string;
  included: boolean;
}

interface FAQ {
  q: string;
  a: string;
}

interface Testimonial {
  name: string;
  role: string;
  initials: string;
  text: string;
  stars: number;
  avatarColor: string;
}

interface ServiceData {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  priceRange: string;
  priceNote: string;
  timeline: string;
  timelineNote: string;
  accentColor: string;
  bgGradient: string;
  borderColor: string;
  tapeColor: string;
  process: ProcessStep[];
  deliverables: Deliverable[];
  faqs: FAQ[];
  testimonials: Testimonial[];
  ctaLabel: string;
}

interface FAQItemProps {
  faq: FAQ;
  index: number;
  accentColor: string;
}

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const SERVICES: ServiceData[] = [
  {
    id: "brand-identity",
    icon: Palette,
    title: "Brand Identity",
    tagline: "The full visual language your brand deserves.",
    description:
      "A great brand identity is the difference between being forgotten and being unforgettable. I craft complete visual systems — from logo mark to color palette to type hierarchy — that communicate who you are before you say a word.",
    priceRange: "From $500",
    priceNote: "Pricing scales with scope. Full brand systems start at $1,200.",
    timeline: "2 – 4 weeks",
    timelineNote: "Depending on revisions and client feedback speed.",
    accentColor: "#e85d3f",
    bgGradient: "from-[#e85d3f08] to-[#e85d3f14]",
    borderColor: "border-[#e85d3f30]",
    tapeColor: "rgba(232,93,63,0.3)",
    process: [
      {
        icon: Search,
        label: "Discovery & Research",
        description:
          "We start with a deep-dive questionnaire and brand audit. I research your industry, competitors, and target audience to find your white space.",
        type: "collaborative",
      },
      {
        icon: Pencil,
        label: "Concept Sketching",
        description:
          "All initial concepts are hand-sketched and self-designed by Evangelina. No AI, no templates — just creative intuition backed by strategy.",
        type: "self",
      },
      {
        icon: Palette,
        label: "Digital Refinement",
        description:
          "Approved sketches are developed digitally. Color palettes, type pairings, and logo variations are refined through collaborative feedback rounds.",
        type: "self",
      },
      {
        icon: Truck,
        label: "Print & Production",
        description:
          "For physical deliverables (business cards, stationery), production is outsourced to vetted local print partners with quality guarantees.",
        type: "outsourced",
      },
    ],
    deliverables: [
      { item: "Primary logo (vector, multiple formats)", included: true },
      { item: "Secondary / submark logo variations", included: true },
      { item: "Color palette with hex, RGB, and CMYK codes", included: true },
      { item: "Typography system (2–3 fonts with usage guide)", included: true },
      { item: "Brand style guide (PDF)", included: true },
      { item: "Business card design", included: true },
      { item: "Social media profile assets", included: true },
      { item: "Brand pattern / texture", included: false },
      { item: "Full stationery suite", included: false },
    ],
    faqs: [
      {
        q: "Do I own the files after the project?",
        a: "Yes — upon final payment you receive full ownership of all files including source .ai and .pdf files. No licensing fees, ever.",
      },
      {
        q: "How many revisions are included?",
        a: "Every project includes two full revision rounds. Additional revisions are billed at $75/hr.",
      },
      {
        q: "Do you work with startups or just established businesses?",
        a: "Both! Some of my most exciting work has been helping founders build their identity from scratch. I offer startup-friendly pricing for early-stage brands.",
      },
      {
        q: "Can I provide inspiration or must I leave it entirely to you?",
        a: "Collaboration is everything. I encourage mood boards, Pinterest references, and written direction. The more context you give, the more targeted my designs.",
      },
    ],
    testimonials: [
      {
        name: "Justine S.",
        role: "Owner, Bombkutz Barbershop",
        initials: "JS",
        text: "Angel is the one I trust with all my shop branding -- decals, business cards, printables and more -- and she never misses. Her work is always clean, high quality, and exactly how I envision it. She's super easy to work with, pays attention to every detail, and always comes through on time. Everthing she makes for my shop looks professional and helps my brand stand out. If you're a business owner and need custom print work done right, Angel is the person to go to. Highly recommend her.",
        stars: 5,
        avatarColor: "#7a9e7e",
      },
    ],
    ctaLabel: "Start Your Brand Identity",
  },
  {
    id: "signage",
    icon: Signpost,
    title: "Signage",
    tagline: "Designed to be seen. Built to last.",
    description:
      "From vinyl banners at sporting events to full vehicle wraps and storefront decals — I design signage that commands attention. Every sign is built for impact at distance, with bold type and composition that reads instantly.",
    priceRange: "From $25",
    priceNote: "Simple decals start at $25. Vehicle wraps and large-format campaigns are custom quoted.",
    timeline: "3 – 10 days",
    timelineNote: "Design turnaround is 2–3 days. Production and install varies by complexity.",
    accentColor: "#b8a9d4",
    bgGradient: "from-[#b8a9d410] to-[#b8a9d420]",
    borderColor: "border-[#b8a9d430]",
    tapeColor: "rgba(184,169,212,0.4)",
    process: [
      {
        icon: Search,
        label: "Brief & Site Assessment",
        description:
          "I gather specs, dimensions, and environmental context — whether it's a gymnasium wall, a vehicle, or a shop window — to design for the real space.",
        type: "collaborative",
      },
      {
        icon: Pencil,
        label: "Layout & Typography Design",
        description:
          "All sign layouts are designed by Evangelina with a focus on legibility, hierarchy, and visual impact from the intended viewing distance.",
        type: "self",
      },
      {
        icon: Truck,
        label: "Print Production",
        description:
          "Files are sent to trusted local print vendors specializing in large-format, vinyl, and vehicle wrap printing. Install coordination available on request.",
        type: "outsourced",
      },
    ],
    deliverables: [
      { item: "Print-ready design files (CMYK, bleed included)", included: true },
      { item: "Mockup preview before production", included: true },
      { item: "Vendor-ready export in required format", included: true },
      { item: "Up to two design revisions", included: true },
      { item: "Production coordination", included: false },
      { item: "Physical installation", included: false },
    ],
    faqs: [
      {
        q: "Can you handle large-format printing?",
        a: "The design is handled entirely by me. For production I work with vetted large-format print partners — I can coordinate the order, or send you the files to print locally.",
      },
      {
        q: "Do you design vehicle wraps?",
        a: "Yes. I've designed car and van wraps (see the SAPA van in the portfolio). I'll need vehicle template dimensions or I can source them for your make/model.",
      },
      {
        q: "What file format will I receive?",
        a: "Print-ready PDFs and source .ai files, sized with bleed and trim marks. If your printer needs a different spec I'm happy to re-export.",
      },
    ],
    testimonials: [
      {
        name: "Justine S.",
        role: "Owner, Bombkutz Barbershop",
        initials: "JS",
        text: "Angel is the one I trust with all my shop branding -- decals, business cards, printables and more -- and she never misses. Her work is always clean, high quality, and exactly how I envision it. She's super easy to work with, pays attention to every detail, and always comes through on time. Everthing she makes for my shop looks professional and helps my brand stand out. If you're a business owner and need custom print work done right, Angel is the person to go to. Highly recommend her.",
        stars: 5,
        avatarColor: "#7a9e7e",
      },
    ],
    ctaLabel: "Get a Signage Quote",
  },
  {
    id: "packaging",
    icon: Package,
    title: "Packaging",
    tagline: "Shelf presence that sells before they read the label.",
    description:
      "Great packaging is your silent salesperson. I design product packaging that stops the scroll and earns the shelf — labels, boxes, wrappers, and more — always with an eye on sustainability and print reality.",
    priceRange: "From $350",
    priceNote: "Single SKU labels start at $350. Full packaging suites for multiple products are custom quoted.",
    timeline: "2 – 5 weeks",
    timelineNote: "Structural dieline sourcing and print testing can extend timelines for complex packaging.",
    accentColor: "#d4a843",
    bgGradient: "from-[#d4a84308] to-[#d4a84318]",
    borderColor: "border-[#d4a84330]",
    tapeColor: "rgba(212,168,67,0.35)",
    process: [
      {
        icon: Search,
        label: "Product & Market Research",
        description:
          "I research your product category, shelf competitors, and target buyer to find the visual territory that will help you stand out.",
        type: "collaborative",
      },
      {
        icon: Pencil,
        label: "Concept & Dieline Design",
        description:
          "Label layouts, structural concepts, and print specifications are all self-designed. Dielines are either sourced or custom-built.",
        type: "self",
      },
      {
        icon: Users,
        label: "Client Approval Rounds",
        description:
          "Realistic mockups are presented before any production commitment. Two rounds of revisions are included.",
        type: "collaborative",
      },
      {
        icon: Truck,
        label: "Print & Fulfillment",
        description:
          "Production is fulfilled through eco-conscious print partners. I can coordinate the print run or hand off print-ready files.",
        type: "outsourced",
      },
    ],
    deliverables: [
      { item: "Label / packaging design (all faces)", included: true },
      { item: "Print-ready files with dieline", included: true },
      { item: "Realistic 3D mockup", included: true },
      { item: "Up to two revision rounds", included: true },
      { item: "Typography and color spec sheet", included: true },
      { item: "Production coordination", included: false },
      { item: "Physical prototyping", included: false },
    ],
    faqs: [
      {
        q: "Can you work with an existing brand identity?",
        a: "Absolutely — in fact it's preferred. Providing existing brand files (fonts, colors, logo) ensures the packaging feels like a natural extension of your identity.",
      },
      {
        q: "Do you design sustainable packaging?",
        a: "Yes, and it's something I'm passionate about. I can recommend eco-conscious material options and design with sustainable print methods in mind.",
      },
      {
        q: "How do I know the design will print correctly?",
        a: "I deliver files built to print spec — correct color mode, bleed, safe zones. For critical projects I recommend a physical proof before a full print run.",
      },
    ],
    testimonials: [],
    ctaLabel: "Design My Packaging",
  },
  {
    id: "editorial-design",
    icon: Layout,
    title: "Editorial Design",
    tagline: "Layouts that invite you in and don't let go.",
    description:
      "Whether it's a quarterly magazine, a hardcover book, an event program, or a product catalog — editorial design is storytelling through layout. I build typographic systems and page compositions that guide the reader naturally from start to finish.",
    priceRange: "From $150",
    priceNote: "Single-page programs start at $150. Multi-chapter books are custom quoted by page count.",
    timeline: "1 – 6 weeks",
    timelineNote: "Timeline scales with page count and complexity of content.",
    accentColor: "#4a9cc8",
    bgGradient: "from-[#4a9cc808] to-[#4a9cc818]",
    borderColor: "border-[#4a9cc830]",
    tapeColor: "rgba(74,156,200,0.3)",
    process: [
      {
        icon: Search,
        label: "Content Audit & Structure",
        description:
          "Before any design begins, I review all content, establish a hierarchy, and build the editorial structure — chapter flow, section breaks, pacing.",
        type: "collaborative",
      },
      {
        icon: Pencil,
        label: "Grid & Typography System",
        description:
          "All layouts are self-designed. I build a master grid and typographic system first so every page feels cohesive even as the content varies.",
        type: "self",
      },
      {
        icon: Users,
        label: "Spreads & Proofing",
        description:
          "Designed spreads are exported as low-res PDFs for client review. Text proofing and layout adjustments are handled in revision rounds.",
        type: "collaborative",
      },
      {
        icon: Truck,
        label: "Print-Ready Export",
        description:
          "Final files are press-ready PDFs with all fonts embedded, images at 300dpi, and bleed/trim marks set. Printing can be coordinated on request.",
        type: "outsourced",
      },
    ],
    deliverables: [
      { item: "Full layout design (all pages)", included: true },
      { item: "Cover design", included: true },
      { item: "Print-ready PDF export", included: true },
      { item: "Digital-optimized PDF (screen version)", included: true },
      { item: "Two revision rounds", included: true },
      { item: "Typography and color spec sheet", included: true },
      { item: "Source InDesign / Illustrator files", included: false },
      { item: "Print coordination", included: false },
    ],
    faqs: [
      {
        q: "Do I need to provide final copy before we start?",
        a: "Finalized copy is strongly preferred before layout begins — changes to word count after layout is set can be costly in time. Placeholder text can be used for initial concepts.",
      },
      {
        q: "Can you design a book cover separately?",
        a: "Yes, stand-alone cover design starts at $150. If you need just a cover without interior layout, that's absolutely a service I offer.",
      },
      {
        q: "What software do you use?",
        a: "Adobe InDesign for multi-page layouts, Illustrator for covers and graphics-heavy pages. Final delivery is always in print-ready PDF.",
      },
    ],
    testimonials: [
      {
        name: "Kristy Ward",
        role: "Author, Menopause Mijas",
        initials: "KW",
        text: "Angel was absolutely incredible to work with on my Menopause Mijas book. The editing process is tedious and overwhelming, and she took all of that stress off my plate. Not only did she handle the technical details beautifully, but she also offered thoughtful feedback that made the book even stronger. She is professional, detail oriented, and truly cares about the fianl product. I'm so grateful for her talent and support. Highly recommend.",
        stars: 5,
        avatarColor: "#4a9cc8",
      },
      {
        name: "Mary Moran",
        role: "CEO, On-Point Re-Entry Consortium, Inc.",
        text: "Angel design our program for a global reentry summit in 2024, and her design and layout were BEAUTIFUL! All the attendees remarked on how awesome the program looked!!! She is someone who takes pride in her work, and she is very talented. I highly recommend her to anyone who is looking for a great graphic designer. She is your person!!!",
        stars: 5,
        initials: "MM",
        avatarColor: "bg-blush/40",
      },
    ],
    ctaLabel: "Start Your Editorial Project",
  },
  {
    id: "web-design",
    icon: Globe,
    title: "Web Design",
    tagline: "Digital presence that looks like a destination.",
    description:
      "I design websites that feel intentional — where every scroll is deliberate, every element earns its place, and the brand shows up consistently. I design in Figma and can collaborate with your developer or refer trusted build partners.",
    priceRange: "From $500",
    priceNote: "Landing pages start at $500. Multi-page sites and custom builds are quoted per scope.",
    timeline: "2 – 8 weeks",
    timelineNote: "Design phase is typically 2–3 weeks. Development timeline depends on build partner.",
    accentColor: "#7a9e7e",
    bgGradient: "from-[#7a9e7e08] to-[#7a9e7e18]",
    borderColor: "border-[#7a9e7e30]",
    tapeColor: "rgba(122,158,126,0.35)",
    process: [
      {
        icon: Search,
        label: "Discovery & Sitemap",
        description:
          "We define the site goals, user journey, and information architecture before any visual design begins.",
        type: "collaborative",
      },
      {
        icon: Pencil,
        label: "Wireframes & Visual Design",
        description:
          "All visual design is self-created in Figma. Wireframes establish layout and flow; high-fidelity mockups bring the brand to life on screen.",
        type: "self",
      },
      {
        icon: Users,
        label: "Design Review & Handoff",
        description:
          "Designs are reviewed collaboratively before handoff. Developer specs, assets, and interaction notes are all included.",
        type: "collaborative",
      },
      {
        icon: Truck,
        label: "Development (Optional)",
        description:
          "Development is outsourced to vetted build partners if needed. I maintain design oversight throughout to ensure fidelity.",
        type: "outsourced",
      },
    ],
    deliverables: [
      { item: "Figma design file (all pages, desktop + mobile)", included: true },
      { item: "Brand-consistent component library", included: true },
      { item: "Developer handoff specs", included: true },
      { item: "Exported assets (icons, images, graphics)", included: true },
      { item: "Two revision rounds", included: true },
      { item: "Copywriting", included: false },
      { item: "Development / coding", included: false },
      { item: "SEO optimization", included: false },
    ],
    faqs: [
      {
        q: "Do you build the website or just design it?",
        a: "I specialize in design. For development I can refer trusted developers or, for smaller sites, coordinate a build through a vetted partner.",
      },
      {
        q: "What platforms do you design for?",
        a: "I design platform-agnostic in Figma. Whether you're building on Webflow, Squarespace, Shopify, or custom code — the designs can be adapted.",
      },
      {
        q: "Will the site be mobile-responsive?",
        a: "Always. Every design includes desktop and mobile layouts. Tablet breakpoints are included for full-scale site projects.",
      },
    ],
    testimonials: [],
    ctaLabel: "Design My Website",
  },
  {
    id: "creative-direction",
    icon: Sparkles,
    title: "Creative Direction",
    tagline: "The strategic vision behind everything.",
    description:
      "Sometimes you don't need one deliverable — you need someone to hold the whole visual world of a campaign, brand refresh, or shoot together. As creative director I set the aesthetic vision, brief the team, and ensure every output feels like one cohesive statement.",
    priceRange: "Custom quote",
    priceNote: "Engagements typically range from $800 for a single shoot brief to $5,000+ for full campaign direction.",
    timeline: "Varies",
    timelineNote: "Typically 1–8 weeks depending on project scope and production schedule.",
    accentColor: "#e8b4b8",
    bgGradient: "from-[#e8b4b810] to-[#e8b4b820]",
    borderColor: "border-[#e8b4b830]",
    tapeColor: "rgba(232,180,184,0.4)",
    process: [
      {
        icon: Search,
        label: "Vision & Brief",
        description:
          "I develop the overarching creative concept — mood, palette, references, and tone — and translate it into actionable briefs for each team member.",
        type: "self",
      },
      {
        icon: Users,
        label: "Team Coordination",
        description:
          "I liaise between photographers, stylists, copywriters, and other creatives to keep everything aligned to the central vision.",
        type: "collaborative",
      },
      {
        icon: Pencil,
        label: "Art Direction On-Set / On-Screen",
        description:
          "Active direction during shoots or production. I'm present (in-person or remote) to ensure every frame reflects the brief.",
        type: "self",
      },
      {
        icon: Truck,
        label: "Post-Production Oversight",
        description:
          "Retouching, color grading, and asset finalization is coordinated with specialist partners under my art direction.",
        type: "outsourced",
      },
    ],
    deliverables: [
      { item: "Full creative brief document", included: true },
      { item: "Mood board and visual direction", included: true },
      { item: "Shot list / scene breakdown", included: true },
      { item: "On-set / remote art direction", included: true },
      { item: "Post-production art direction notes", included: true },
      { item: "Photography / videography", included: false },
      { item: "Copywriting", included: false },
    ],
    faqs: [
      {
        q: "Do you work with external photographers and videographers?",
        a: "Yes — I can work with your existing team or refer trusted collaborators from my network.",
      },
      {
        q: "Can you direct remotely?",
        a: "Absolutely. Remote direction via video call, shared mood boards, and real-time feedback is a regular part of my workflow.",
      },
      {
        q: "Is creative direction available as an add-on to other services?",
        a: "Yes — if you're commissioning a brand identity or campaign with multiple touchpoints, creative direction can be added to ensure everything stays cohesive.",
      },
    ],
    testimonials: [],
    ctaLabel: "Discuss Your Vision",
  },
];

const PROCESS_TYPE_LABELS: Record<ProcessStep["type"], string> = {
  self: "Done by Evangelina",
  outsourced: "Outsourced to trusted partners",
  collaborative: "Collaborative",
};

const PROCESS_TYPE_COLORS: Record<ProcessStep["type"], string> = {
  self: "#e85d3f",
  outsourced: "#4a9cc8",
  collaborative: "#7a9e7e",
};

/* ─────────────────────────────────────────────
   FAQ ACCORDION ITEM
───────────────────────────────────────────── */

function FAQItem({ faq, index, accentColor }: FAQItemProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="border-b border-ink/10 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-handwriting text-lg text-ink font-bold leading-snug">
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: open ? accentColor : "transparent", border: `2px solid ${accentColor}40` }}
        >
          {open
            ? <ChevronUp size={14} color="#fff" />
            : <ChevronDown size={14} style={{ color: accentColor }} />
          }
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm text-ink/60 leading-relaxed pb-4">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SERVICE SECTION CARD
───────────────────────────────────────────── */

function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      id={service.id}
      className="py-20 px-6 relative overflow-hidden"
      style={{ backgroundColor: isEven ? "#f5f0e8" : "#ede8dc" }}
    >
      {/* Watermark number */}
      <div
        className="absolute -right-4 top-1/2 -translate-y-1/2 font-serif font-bold leading-none pointer-events-none select-none opacity-[0.03]"
        style={{ fontSize: "200px", color: service.accentColor }}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,18,9,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,18,9,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative">
        {/* ── SERVICE HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-5 mb-12"
        >
          <div
            className="w-14 h-14 flex-shrink-0 flex items-center justify-center mt-1"
            style={{ background: `${service.accentColor}18`, color: service.accentColor }}
          >
            <service.icon size={28} strokeWidth={1.5} />
          </div>
          <div>
            {/* Tape strip */}
            <div
              className="inline-block px-4 py-1 font-mono text-[10px] uppercase tracking-widest text-white mb-3"
              style={{
                background: service.accentColor,
                transform: "rotate(-0.5deg)",
              }}
            >
              Service 0{index + 1}
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1a1209] leading-none mb-2">
              {service.title}
            </h2>
            <p
              className="font-handwriting text-xl"
              style={{ color: service.accentColor }}
            >
              {service.tagline}
            </p>
          </div>
        </motion.div>

        {/* ── DESCRIPTION + QUICK STATS ── */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:col-span-2"
          >
            <p className="font-sans text-[#1a1209]/70 leading-relaxed text-base">
              {service.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="space-y-4"
          >
            {/* Price card */}
            <div
              className="bg-white p-4 shadow-sm border"
              style={{
                borderColor: `${service.accentColor}30`,
                transform: "rotate(0.5deg)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#1a1209]/40">
                  Starting at
                </span>
              </div>
              <p
                className="font-handwriting text-2xl font-bold"
                style={{ color: service.accentColor }}
              >
                {service.priceRange}
              </p>
              <p className="font-sans text-xs text-[#1a1209]/40 mt-1 leading-snug">
                {service.priceNote}
              </p>
            </div>

            {/* Timeline card */}
            <div
              className="bg-white p-4 shadow-sm border"
              style={{
                borderColor: `${service.accentColor}30`,
                transform: "rotate(-0.5deg)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Clock size={12} style={{ color: service.accentColor }} />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#1a1209]/40">
                  Timeline
                </span>
              </div>
              <p
                className="font-handwriting text-2xl font-bold"
                style={{ color: service.accentColor }}
              >
                {service.timeline}
              </p>
              <p className="font-sans text-xs text-[#1a1209]/40 mt-1 leading-snug">
                {service.timelineNote}
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── PROCESS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-1 h-8"
              style={{ background: service.accentColor }}
            />
            <h3 className="font-serif text-2xl font-bold text-[#1a1209]">
              The Process
            </h3>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-6">
            {(["self", "outsourced", "collaborative"] as ProcessStep["type"][]).map((type) => (
              <div key={type} className="flex items-center gap-1.5">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: PROCESS_TYPE_COLORS[type] }}
                />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#1a1209]/50">
                  {PROCESS_TYPE_LABELS[type]}
                </span>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.08 }}
                className="bg-white p-5 relative"
                style={{
                  boxShadow: "2px 2px 8px rgba(26,18,9,0.1)",
                  borderLeft: `3px solid ${PROCESS_TYPE_COLORS[step.type]}`,
                }}
              >
                {/* Step number */}
                <div
                  className="absolute top-3 right-3 font-mono text-xs font-bold"
                  style={{ color: service.accentColor, opacity: 0.3 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div
                  className="mb-3"
                  style={{ color: PROCESS_TYPE_COLORS[step.type] }}
                >
                  <step.icon size={20} strokeWidth={1.5} />
                </div>

                <p className="font-handwriting text-base font-bold text-[#1a1209] mb-2">
                  {step.label}
                </p>
                <p className="font-sans text-xs text-[#1a1209]/60 leading-relaxed">
                  {step.description}
                </p>

                {/* Type badge */}
                <div
                  className="mt-3 inline-block px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest"
                  style={{
                    background: `${PROCESS_TYPE_COLORS[step.type]}15`,
                    color: PROCESS_TYPE_COLORS[step.type],
                  }}
                >
                  {PROCESS_TYPE_LABELS[step.type]}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── DELIVERABLES + FAQS (side by side) ── */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Deliverables */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-8" style={{ background: service.accentColor }} />
              <h3 className="font-serif text-2xl font-bold text-[#1a1209]">
                What You Get
              </h3>
            </div>

            <div
              className="bg-white p-6 shadow-sm"
              style={{
                borderTop: `3px solid ${service.accentColor}`,
                transform: "rotate(-0.3deg)",
              }}
            >
              {/* Washi tape */}
              <div
                className="absolute -top-2 left-8 w-16 h-5"
                style={{ background: service.tapeColor, transform: "rotate(-1deg)" }}
                aria-hidden="true"
              />

              <ul className="space-y-2.5">
                {service.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: d.included ? service.accentColor : "#1a120940" }}
                    >
                      <Check
                        size={15}
                        strokeWidth={d.included ? 2.5 : 1.5}
                        style={{ opacity: d.included ? 1 : 0.4 }}
                      />
                    </div>
                    <span
                      className={`font-sans text-sm leading-snug ${
                        d.included ? "text-[#1a1209]/80" : "text-[#1a1209]/30 line-through"
                      }`}
                    >
                      {d.item}
                    </span>
                    {!d.included && (
                      <span className="font-mono text-[9px] text-[#1a1209]/30 uppercase tracking-widest ml-auto flex-shrink-0">
                        add-on
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-8" style={{ background: service.accentColor }} />
              <h3 className="font-serif text-2xl font-bold text-[#1a1209]">
                Common Questions
              </h3>
            </div>

            <div className="bg-white p-6 shadow-sm">
              {service.faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  faq={faq}
                  index={i}
                  accentColor={service.accentColor}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── TESTIMONIALS ── */}
        {service.testimonials.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8" style={{ background: service.accentColor }} />
              <h3 className="font-serif text-2xl font-bold text-[#1a1209]">
                What Clients Say
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {service.testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, rotate: -2 }}
                  animate={inView ? { opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 } : {}}
                  transition={{ delay: 0.45 + i * 0.1, type: "spring" }}
                  className="bg-white p-6 relative"
                  style={{
                    boxShadow: "3px 3px 12px rgba(26,18,9,0.15), 5px 5px 0px rgba(26,18,9,0.05)",
                    transform: `rotate(${i % 2 === 0 ? "-1deg" : "1deg"})`,
                  }}
                >
                  {/* Tape */}
                  <div
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-5"
                    style={{ background: service.tapeColor, transform: "translateX(-50%) rotate(-1deg)" }}
                    aria-hidden="true"
                  />

                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.stars)].map((_, si) => (
                      <Star
                        key={si}
                        size={13}
                        style={{ color: "#d4a843", fill: "#d4a843" }}
                      />
                    ))}
                  </div>

                  <p className="font-handwriting text-lg text-[#1a1209] leading-relaxed mb-4">
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-3 pt-3 border-t border-[#1a120910]">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold text-white flex-shrink-0"
                      style={{ background: t.avatarColor }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#1a1209]">
                        {t.name}
                      </p>
                      <p
                        className="font-handwriting text-sm"
                        style={{ color: service.accentColor }}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Link
            href={`/?service=${encodeURIComponent(service.title)}#contact`}
            className="inline-flex items-center gap-3 px-8 py-4 font-handwriting text-xl text-white transition-all hover:-translate-y-1 hover:shadow-lg"
            style={{
              background: service.accentColor,
              boxShadow: `4px 4px 0px ${service.accentColor}40`,
              transform: "rotate(-0.5deg)",
            }}
          >
            {service.ctaLabel}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <span className="font-mono text-xs uppercase tracking-widest text-[#1a1209]/30">
            No commitment required
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      <Navbar />
      {/* ── HERO ── */}
      <section
        className="relative mt-20 py-20 px-6 overflow-hidden"
        style={{ backgroundColor: "#1a1209" }}
      >
        {/* Spinning doodle */}
        <motion.div
          className="absolute right-16 top-12 opacity-5 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        >
          <svg width="260" height="260" viewBox="0 0 260 260" fill="none" stroke="#f5f0e8" strokeWidth="0.8">
            {[30, 55, 80, 105].map((r) => (
              <circle key={r} cx="130" cy="130" r={r} />
            ))}
            <line x1="0" y1="130" x2="260" y2="130" />
            <line x1="130" y1="0" x2="130" y2="260" />
            <line x1="38" y1="38" x2="222" y2="222" />
            <line x1="222" y1="38" x2="38" y2="222" />
          </svg>
        </motion.div>

        <div className="max-w-6xl mx-auto" ref={heroRef}>
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
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
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <div
              className="inline-block bg-mustard px-6 py-2 font-handwriting text-xl mb-6"
              style={{ transform: "rotate(-1.5deg)", color: "#1a1209" }}
            >
              What I Do Best ✦
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-white leading-none mb-4">
              Design Services
            </h1>
            <p className="font-sans text-white/50 max-w-xl leading-relaxed">
              From concept to delivery — every project gets the full scrapbook treatment.
              Thoughtful. Intentional. Unforgettable.
            </p>
          </motion.div>

          {/* Service quick-jump pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 px-4 py-2 border font-mono text-xs uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5"
                style={{ borderColor: `${s.accentColor}50`, color: s.accentColor }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: s.accentColor }}
                  aria-hidden="true"
                />
                {s.title}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Washi tape color bar */}
        <div className="absolute bottom-0 left-0 right-0 flex" aria-hidden="true">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="flex-1 h-2.5"
              style={{ background: `${s.accentColor}50` }}
            />
          ))}
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      {SERVICES.map((service, i) => (
        <ServiceCard key={service.id} service={service} index={i} />
      ))}

      {/* ── PROCESS LEGEND FOOTER ── */}
      <div
        className="py-12 px-6 border-t border-[#f5f0e8]/10"
        style={{ backgroundColor: "#1a1209" }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-white/30 mb-6 text-center">
            How my work gets done
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {(["self", "outsourced", "collaborative"] as ProcessStep["type"][]).map((type) => (
              <div key={type} className="flex flex-col items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ background: PROCESS_TYPE_COLORS[type] }}
                />
                <p className="font-mono text-xs uppercase tracking-widest text-white/40">
                  {PROCESS_TYPE_LABELS[type]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterCTA />
      <Footer />
    </>
  );
}
