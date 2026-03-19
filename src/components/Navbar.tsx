"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Giving Back", href: "/communityService" },
];

const router = useRouter();
const pathname = usePathname();

const handleContactClick = (e: React.MouseEvent) => {
  e.preventDefault();

  if (pathname !== "/") {
    // Navigate to homepage first
    router.push("/#contact");
  } else {
    // Already on homepage → scroll to contact
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 md:transition-all md:duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(26,18,9,0.1)] border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-ink text-cream flex items-center justify-center font-display text-lg rotate-[-2deg] group-hover:rotate-[2deg] transition-transform duration-300 shadow-scrapbook">
            E
          </div>
          <div>
            <div className="font-monsieur text-3xl text-ink leading-none">Design by Evangelina</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="nav-link"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="/#contact"
            onClick={handleContactClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-coral text-cream px-5 py-2 font-handwriting text-lg rotate-[-1deg] hover:rotate-[1deg] transition-transform duration-200 shadow-scrapbook hover:shadow-scrapbook-lg"
          >
            Let's Work ✦
          </motion.a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-ink"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-t border-ink/10 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-sm uppercase tracking-widest text-ink hover:text-coral transition-colors py-2 border-b border-ink/10"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
