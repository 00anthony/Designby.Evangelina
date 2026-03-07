"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Paperclip } from "lucide-react";
import Image from "next/image";
import Modal from "./Modal";

const projects = [
  //Upgrade?: add modals, sliders, links
  {
    id: "001",
    tag: "#Event Organizing / Vinyl Shirts",
    title: "Barstool",
    desc: "Custom vinyl jersey production and event branding for Reese's Barstool activation.",
    images: [
      "/portfolio/barstool-group-photo.jpg",
      "/portfolio/barstool-in-action.jpg",
      "/portfolio/barstool-solo-in-action.jpg"
    ],
    alt: "",
    color: "bg-sage/20",
    accent: "text-sage",
    rotate: "-rotate-1",
    tapeColor: "bg-sky/30",
  },
  {
    id: "002",
    tag: "#Signage",
    title: "Sports Banner",
    desc: "High-impact banner design for athletic events, combining dynamic typography and bold color blocking for maximum visibility from a distance.",
    images: [
      "/portfolio/DVHS-CHEER-BANNER.png"
    ],
    alt: "",
    color: "bg-blush/20",
    accent: "text-coral",
    rotate: "rotate-1",
    tapeColor: "bg-blush/40",
  },
  {
    id: "003",
    tag: "#Car Wraps / Business Cards",
    title: "San Antonio Pets Alive",
    desc: "Brand identity development focused on warmth, trust, and compassion — creating visuals that reflect the organization's love and advocacy for animals.",
    images: [
      "/portfolio/SAPA-van.jpg",
      "/portfolio/SAPA-van-back.jpg",
      "/portfolio/SAPA-business-card.png"
    ],
    alt: "",
    color: "bg-mustard/20",
    accent: "text-gold",
    rotate: "-rotate-2",
    tapeColor: "bg-mustard/40",
  },
  {
    id: "004",
    tag: "#Editorial Design",
    title: "Horizon Magazine",
    desc: "Editorial layout and typographic system for a quarterly art publication celebrating Porsche.",
    images: [
      "/portfolio/horizon-magazine.jpg",
      "/portfolio/horizon-magazines.jpg",
      "/portfolio/horizon-bag.jpg"
    ],
    alt: "",
    color: "bg-sky/10",
    accent: "text-sky",
    rotate: "rotate-2",
    tapeColor: "bg-lavender/40",
  },
  {
    id: "005",
    tag: "#Business Cards",
    title: "Bombkutz",
    desc: "Custom business cards highlighting personality and authority with personalized design.",
    images: [
      "/portfolio/Bombkutz-card.png",
      "/portfolio/Bombkutz-promo.PNG",

    ],
    alt: "",
    color: "bg-lavender/20",
    accent: "text-lavender",
    rotate: "-rotate-1",
    tapeColor: "bg-sky/30",
  },
  {
    id: "006",
    tag: "#Book Cover Design",
    title: "Menopause Mijas / When Enchiladas Fly",
    desc: "A powerful design for a powerful message in loving oursleves the way we always deserved.",
    images: [
      "/portfolio/book-menopause.png",
      "/portfolio/book-enchiladas.jpg"

    ],
    alt: "",
    color: "bg-coral/10",
    accent: "text-coral",
    rotate: "rotate-1",
    tapeColor: "bg-coral/20",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [current, setCurrent] = useState(0);
  const totalImages = project.images?.length || 1;

  // --- Swipe Logic ---
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) nextImage();
    if (diff < -50) prevImage();

    touchStartX.current = null;
  };

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    if (!inView || !project.images) return;

    project.images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [inView, project.images]);

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

      <div
        onClick={() => router.push("/portfolio")}
        className={`${project.color} ${project.rotate} border-2 border-ink/10 bg-white p-6 shadow-scrapbook hover:shadow-scrapbook-lg hover:-translate-y-2 hover:rotate-0 transition-all duration-300 cursor-pointer`}
      >        
        {/* Image Slider */}
        <div
          className="relative w-full h-56 mb-4 overflow-hidden rounded-sm"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
        >
          <Image
            src={project.images?.[current]}
            alt={project.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2}
          />

          {/* Desktop Arrows */}
          {totalImages > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="z-10 hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow hover:scale-110 transition"
              >
                ‹
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="z-10 hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow hover:scale-110 transition"
              >
                ›
              </button>
            </>
          )}

          {/* ID badge */}
          <div className="absolute inset-0 flex items-end justify-end p-3">
            <span className="font-mono text-xs text-ink/70 bg-white/80 px-2 py-1 backdrop-blur-sm">
              {project.id}
            </span>
          </div>
        </div>

        <div className={`font-handwriting text-base font-bold ${project.accent} mb-1`}>
          {project.tag}
        </div>
        <h3 className="font-serif text-xl font-bold text-ink mb-2">{project.title}</h3>
        <p className="font-sans text-sm text-ink/60 leading-relaxed">{project.desc}</p>

        {/* Bottom Controls */}
        <div className="mt-4 flex items-center justify-between">
          {/* Dots */}
          <div className="flex gap-2">
            {[...Array(totalImages)].map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  i === current ? "bg-coral scale-110" : "bg-ink/20"
                }`}
              />
            ))}
          </div>

          <span className={`${project.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
            <ArrowUpRight size={20} />
          </span>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="relative flex items-center justify-center">

          {/* Left Arrow */}
          {totalImages > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white text-4xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/70 transition"
            >
              ‹
            </button>
          )}

          <Image
            src={project.images?.[current]}
            alt={project.alt}
            width={1400}
            height={900}
            className="max-h-[90vh] w-auto h-auto object-contain rounded-lg"
            priority
          />

          {/* Right Arrow */}
          {totalImages > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white text-4xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/70 transition"
            >
              ›
            </button>
          )}
        </div>
      </Modal>
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
            href="/porfolio"
            className="inline-flex items-center gap-2 border-2 border-ink text-ink font-handwriting text-xl px-8 py-3 rotate-[-1deg] hover:rotate-0 hover:bg-ink hover:text-cream transition-all duration-200 shadow-scrapbook"
          >
            See More →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
