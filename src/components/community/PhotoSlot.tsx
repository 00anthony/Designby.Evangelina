'use client'
import { useState } from "react";
import { motion } from "framer-motion";

interface PhotoSlotProps {
  label: string;
  rotate: string;
  accentColor: string;
  index: number;
  image?: string;
}

export default function PhotoSlot({ label, rotate, accentColor, index }: PhotoSlotProps) {
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
          
        </div>

        {/* Caption line */}
        <div className="mt-2 h-px w-3/4 mx-auto bg-gray-200 rounded" />
      </div>
    </motion.div>
  );
}