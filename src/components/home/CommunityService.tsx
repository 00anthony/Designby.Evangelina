"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, HeartHandshake, Mic, } from "lucide-react";
import Image from "next/image";
import TornEdge from "../TornEdge";


const initiatives = [
  {
    icon: HeartHandshake,
    title: "Community Cancer Benefit Initiatives",
    desc: "Organizing and designing fundraising events in support of local families battling cancer — from custom event branding and large-scale banners to coordinated promotional materials that amplify community turnout and financial impact.",
    hours: "Annual Fundraising Support",
    color: "bg-sky/15",
    accent: "text-sky",
    border: "border-sky/20",
    tag: "Community Care",
    tagBg: "bg-sky text-white",
  },
  {
    icon: Mic,
    title: "On-Point Reentry Conference",
    desc: "Invited speaker and creative mentor for individuals transitioning from incarceration — sharing personal growth strategies, branding education, and practical tools for rebuilding identity, confidence, and professional direction.",
    hours: "60+ hrs/year",
    color: "bg-sage/15",
    accent: "text-sage",
    border: "border-sage/20",
    tag: "Advocacy",
    tagBg: "bg-sage text-white",
  },
  {
    icon: Users,
    title: "National Association of Reentry Professionals Conference",
    desc: "Collaborating with national leaders and community organizers to inspire second chances through creative empowerment, public speaking, and strategic design support for reentry-focused programs.",
    hours: "National Conference Engagement",
    color: "bg-coral/10",
    accent: "text-coral",
    border: "border-coral/20",
    tag: "Empowerment",
    tagBg: "bg-coral text-white",
  },
];

export default function CommunityService() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="community" className="py-24 bg-ink relative">
      
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
          
      <div className="max-w-7xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 mx-6"
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

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* LEFT: Initiative List */}
          <div className="flex flex-col gap-6">
            {initiatives.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className={`${item.color} border ${item.border} p-6 relative group mx-6`}
              >
                <span className={`absolute top-4 right-4 ${item.tagBg} px-3 py-1 font-mono text-xs tracking-widest`}>
                  {item.tag}
                </span>

                <div className={`${item.accent} mb-4`}>
                  <item.icon size={28} strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-xl font-bold text-cream mb-2">
                  {item.title}
                </h3>

                <p className="font-sans text-cream/60 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-cream/10" />
                  <span className={`font-handwriting text-base ${item.accent}`}>
                    {item.hours}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Photo Collage */}
          <div className="relative h-[520px] mt-12 lg:mt-0 overflow-hidden">
          {/* Main polaroid */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-20 -left-8 md:left-0 polaroid w-64"
          >
            <Image
              src="/communityService/on-point-shirt.jpg"
              alt="Community event shirt"
              width={360}
              height={540}
            />
            <p className="font-handwriting text-center text-ink/60 text-sm mt-2">
              ✦ 2023 ✦
            </p>
          </motion.div>

          {/* Third Photo*/}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: 8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-20 -right-8 md:right-32 polaroid w-52 border-4 border-coral/40"
          >
            <Image
              src="/communityService/cancer-bbq.png"
              alt="Community BBQ"
              width={360}
              height={540}
            />
            <p className="font-handwriting text-center text-sky text-xs mt-1">
              ✦ 2024 ✦
            </p>
          </motion.div>

          {/* Second photo*/}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 6 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-10 left-40 polaroid w-52 border-4 border-sky/40"
          >
            <Image
              src="/communityService/on-point-speech.png"
              alt="Community speech"
              width={360}
              height={800}
            />
            <p className="font-handwriting text-center text-sky text-xs mt-1">
              ✦ 2024 ✦
            </p>
          </motion.div>
        </div>
        </div>

        {/* Impact stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="border border-cream/10 p-8 mx-6"
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
            <TornEdge className="absolute -bottom-44 -mb-1 z-10 left-0 w-screen overflow-hidden"/>
      
    </section>
  );
}
