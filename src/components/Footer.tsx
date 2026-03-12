"use client";

import { useState } from "react";
import { Instagram, Twitter, Youtube, Facebook, ArrowUp } from "lucide-react";
import TornEdge from "./TornEdge";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");


  return (
    <footer className="bg-ink text-cream py-16 px-6 relative ">
      {/* Top torn edge */}
      <TornEdge flip className="absolute -top-44 -mt-1 left-1/2 -translate-x-1/2 w-screen overflow-hidden"/>      

      <div className="max-w-7xl mx-auto pt-6 overflow-hidden">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cream text-ink flex items-center justify-center font-display text-lg">
                E
              </div>
              <div>
                <div className="font-serif text-lg font-bold">Evangelina</div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-sky uppercase">Design Authority</div>
              </div>
            </div>
            <p className="font-handwriting text-cream/60 text-base leading-relaxed max-w-xs">
              Crafting visual identities that feel like home. Austin-based, globally loved.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[Facebook, ].map((Icon, i) => (
                <a 
                  key={i} 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/people/Design-by-Evangelina/61574141763050/"
                  className="w-9 h-9 border border-cream/20 flex items-center justify-center text-cream/50 hover:text-cream hover:border-cream transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-cream/30 mb-4">Navigate</h4>
            <div className="space-y-2">
              {["Home", "Projects", "Services", "About", "Community", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block font-handwriting text-lg text-cream/60 hover:text-coral transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                if (!newsletterEmail) return;

                setNewsletterLoading(true);
                setNewsletterError("");
                setNewsletterSuccess(false);

                try {
                  const res = await fetch("/api/newsletter", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: newsletterEmail }),
                  });

                  if (!res.ok) throw new Error("Failed");

                  setNewsletterSuccess(true);
                  setNewsletterEmail("");
                } catch {
                  setNewsletterError("Something went wrong. Try again.");
                } finally {
                  setNewsletterLoading(false);
                }
              }}
            >
              <div className="flex gap-0">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-cream/10 border border-cream/20 px-4 py-3 font-handwriting text-base text-cream placeholder:text-cream/30 focus:outline-none focus:border-sky"
                />

                <button
                  type="submit"
                  disabled={newsletterLoading}
                  className="bg-coral text-white px-4 py-3 hover:bg-coral/80 transition-colors"
                >
                  {newsletterLoading ? "..." : "Join"}
                </button>
              </div>

              {newsletterSuccess && (
                <p className="text-sage text-sm mt-2">
                  You're on the list ✦
                </p>
              )}

              {newsletterError && (
                <p className="text-red-400 text-sm mt-2">
                  {newsletterError}
                </p>
              )}
            </form>

            {/* Washi tape deco */}
            <div className="mt-8 flex gap-2">
              {["bg-sky/30", "bg-coral/30", "bg-mustard/30", "bg-sage/30"].map((c, i) => (
                <div key={i} className={`${c} h-4 flex-1 rounded-sm`} style={{ transform: `rotate(${(i % 2) * 2 - 1}deg)` }} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-cream/30">
            © 2024 Design by Evangelina. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a key={item} href="#" className="font-mono text-xs text-cream/30 hover:text-cream/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 border border-cream/20 flex items-center justify-center text-cream/50 hover:text-cream hover:border-cream transition-colors"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
