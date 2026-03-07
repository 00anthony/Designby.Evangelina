'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PhotoSlotProps {
  label?: string;
  rotate: string;
  accentColor: string;
  index: number;
  src: string;
  alt?: string;
}

export default function PhotoSlot({ label, rotate, accentColor, index, src, alt }: PhotoSlotProps) {
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
        className="polaroid "
      >
        <Image 
          src={src}
          alt={alt || "Community event photo"}
          width={360}
          height={540}
        />
        <p className="font-handwriting text-center text-ink/60 text-sm mt-2">{label}</p>
      </div>
    </motion.div>
  );
}