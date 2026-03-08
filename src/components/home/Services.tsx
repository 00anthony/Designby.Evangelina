"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Layout, Package, Signpost, Globe, Sparkles } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Logo systems, color palettes, typography — the full visual language your brand deserves.",
    price: "From $500",
    tag: "Most Popular",
    tagColor: "bg-coral text-white",
    color: "from-coral/5 to-coral/10",
    accent: "text-coral",
    border: "border-coral/20",
  },
  {
    icon: Signpost,
    title: "Signage",
    desc: "Banners, decals, vehicle wraps, outdoor signage, and business cards that moves people — literally.",
    price: "From $25",
    tag: null,
    color: "from-lavender/10 to-lavender/20",
    accent: "text-lavender",
    border: "border-lavender/30",
  },
  {
    icon: Package,
    title: "Packaging",
    desc: "Sustainable, shelf-stopping packaging that tells your product's story before they open it.",
    price: "From $350",
    tag: "New",
    tagColor: "bg-mustard text-ink",
    color: "from-mustard/5 to-mustard/15",
    accent: "text-gold",
    border: "border-mustard/30",
  },
  {
    icon: Layout,
    title: "Editorial Design",
    desc: "Books, magazines, calendars, programs — layout design with attention to every grid.",
    price: "From $150",
    tag: null,
    color: "from-sky/5 to-sky/10",
    accent: "text-sky",
    border: "border-sky/20",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "Visually striking digital experiences designed with intention and built to convert.",
    price: "From $500",
    tag: null,
    color: "from-sage/5 to-sage/15",
    accent: "text-sage",
    border: "border-sage/20",
  },
  {
    icon: Sparkles,
    title: "Creative Direction",
    desc: "Need a visionary for your campaign shoot or brand refresh? Let's collab.",
    price: "Custom quote",
    tag: "Premium",
    tagColor: "bg-ink text-cream",
    color: "from-blush/10 to-blush/20",
    accent: "text-blush",
    border: "border-blush/30",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Link
      href={`/?service=${encodeURIComponent(service.title)}#contact`}
      className="block"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.08, duration: 0.5 }}
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
        className={`relative bg-gradient-to-br ${service.color} border-2 ${service.border} p-6 shadow-scrapbook group cursor-pointer`}
      >
        {/* Corner fold */}
        <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[32px] border-b-[32px] border-l-transparent border-b-white opacity-60" />
        </div>

        {/* Badge */}
        {service.tag && (
          <span className={`absolute -top-3 right-6 ${service.tagColor} px-3 py-1 font-mono text-xs tracking-widest rotate-[1deg] shadow-tape`}>
            {service.tag}
          </span>
        )}

        {/* Icon */}
        <div className={`${service.accent} mb-4 group-hover:scale-110 transition-transform duration-200`}>
          <service.icon size={32} strokeWidth={1.5} />
        </div>

        <h3 className="font-serif text-xl font-bold text-ink mb-2">{service.title}</h3>
        <p className="font-sans text-sm text-ink/60 leading-relaxed mb-4">{service.desc}</p>

        <div className="flex items-center justify-between">
          <span className={`font-handwriting text-lg ${service.accent} font-bold`}>{service.price}</span>
          <span className="font-handwriting text-ink/30 group-hover:text-ink transition-colors text-sm">
            Learn more →
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="py-24 px-6 bg-cream grid-bg relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {/* Sticky note header label */}
          <div className="inline-block bg-mustard px-6 py-2 font-handwriting text-xl rotate-[-2deg] shadow-scrapbook mb-6">
            What I Do Best ✦
          </div>
          <h2 className="font-serif text-5xl font-bold text-ink mb-4">
            Design Services
          </h2>
          <p className="font-sans text-ink/60 max-w-xl mx-auto leading-relaxed">
            From concept to delivery — every project gets the full scrapbook treatment.
            Thoughtful. Intentional. Unforgettable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* Process strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 bg-ink text-cream p-8 rotate-[-0.5deg] shadow-scrapbook-lg"
        >
          <p className="font-handwriting text-center text-cream/60 text-sm uppercase tracking-widest mb-6">
            My Process
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["01. Discover", "02. Sketch", "03. Craft", "04. Deliver"].map((step, i) => (
              <div key={i}>
                <div className="font-handwriting text-mustard text-2xl mb-1">{step.split(". ")[0]}</div>
                <div className="font-mono text-xs tracking-widest uppercase text-cream/70">{step.split(". ")[1]}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="/services"
            className="inline-flex items-center gap-2 border-2 bg-ink border-ink text-cream font-handwriting text-xl px-8 py-3 rotate-[-1deg] hover:rotate-0 hover:bg-cream hover:text-ink transition-all duration-200 shadow-scrapbook"
          >
            See More →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
