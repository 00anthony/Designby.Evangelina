"use client";

import { useState } from "react";
import { Instagram, Twitter, Youtube, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");


  return (
    <footer className="bg-ink text-cream py-16 px-6 relative overflow-hidden">
      {/* Top torn edge */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-cream" style={{
        clipPath: "polygon(0 0, 1.5% 100%, 3% 0, 4.5% 100%, 6% 0, 7.5% 100%, 9% 0, 10.5% 100%, 12% 0, 13.5% 100%, 15% 0, 16.5% 100%, 18% 0, 19.5% 100%, 21% 0, 22.5% 100%, 24% 0, 25.5% 100%, 27% 0, 28.5% 100%, 30% 0, 31.5% 100%, 33% 0, 34.5% 100%, 36% 0, 37.5% 100%, 39% 0, 40.5% 100%, 42% 0, 43.5% 100%, 45% 0, 46.5% 100%, 48% 0, 49.5% 100%, 51% 0, 52.5% 100%, 54% 0, 55.5% 100%, 57% 0, 58.5% 100%, 60% 0, 61.5% 100%, 63% 0, 64.5% 100%, 66% 0, 67.5% 100%, 69% 0, 70.5% 100%, 72% 0, 73.5% 100%, 75% 0, 76.5% 100%, 78% 0, 79.5% 100%, 81% 0, 82.5% 100%, 84% 0, 85.5% 100%, 87% 0, 88.5% 100%, 90% 0, 91.5% 100%, 93% 0, 94.5% 100%, 96% 0, 97.5% 100%, 99% 0, 100% 100%, 100% 0)"
      }} />

      <div className="max-w-7xl mx-auto pt-6">
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
