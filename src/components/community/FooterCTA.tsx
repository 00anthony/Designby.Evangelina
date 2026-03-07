import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FooterCTA() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-16 px-6 text-center "
      style={{ backgroundColor: "#f5f0e8", borderBottom: "10px solid #f5f0e8"}}
    >
      <p className="font-handwriting text-ink/70 text-xl mb-2">
        Want to involve Evangelina in your community event?
      </p>
      <h2 className="font-serif text-3xl font-bold text-ink mb-6">
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
          className="font-mono text-xs uppercase tracking-widest text-ink hover:text-ink/60 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </motion.div>

  );
}