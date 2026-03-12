"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, MapPin, Mail, Clock, CheckCircle } from "lucide-react";
import TornEdge from "../TornEdge";

const projectTypes = [
  "Brand Identity",
  "Signage",
  "Editorial Design",
  "Packaging",
  "Event Organization",
  "Web Design",
  "Something else ✦",
];

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const selectedService = searchParams.get("service");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          projectType: selected,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedService && projectTypes.includes(selectedService)) {
      setSelected(selectedService);
    }
  }, [selectedService]);

  return (
    <section id="contact" className="relative py-24 px-6 bg-cream grid-bg overflow-hidden">
      
      {/* Decorative scissors */}
      <div className="absolute top-12 right-12 opacity-5 pointer-events-none overflow-hidden">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#1a1209" strokeWidth="1.5">
          <circle cx="30" cy="30" r="15" />
          <circle cx="70" cy="30" r="15" />
          <line x1="40" y1="40" x2="90" y2="90" />
          <line x1="60" y1="40" x2="10" y2="90" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block bg-coral text-white px-6 py-2 font-handwriting text-xl rotate-[-1deg] shadow-scrapbook mb-6">
            Let's Create Together ✦
          </div>
          <h2 className="font-serif text-5xl font-bold text-ink mb-4">Get in Touch</h2>
          <p className="font-sans text-ink/60 max-w-md leading-relaxed">
            Have a project in mind? Drop a note and let's start something beautiful.
            I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white shadow-scrapbook-lg p-12 text-center"
                >
                  <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-sage" size={40} />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-ink mb-3">Message sent! 🎉</h3>
                  <p className="font-handwriting text-xl text-ink/60">
                    I'll get back to you within 24 hours. Can't wait to see what we'll create together.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); setSelected(null); }}
                    className="mt-8 font-handwriting text-coral text-lg underline underline-offset-4"
                  >
                    Send another message →
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-white shadow-scrapbook-lg p-8 space-y-6"
                  style={{
                    backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, rgba(74,156,200,0.08) 31px, rgba(74,156,200,0.08) 32px)",
                  }}
                >
                  {/* Project type picker */}
                  <div>
                    <label className="font-mono text-xs uppercase tracking-widest text-ink/50 block mb-3">
                      What are you after?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelected(type)}
                          className={`px-4 py-2 font-handwriting text-base border-2 transition-all duration-200 ${
                            selected === type
                              ? "bg-coral text-white border-coral rotate-[-1deg]"
                              : "border-ink/20 text-ink/60 hover:border-coral hover:text-coral"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="font-mono text-xs uppercase tracking-widest text-ink/50 block mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Who am I writing to?"
                      className="scrapbook-input"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-mono text-xs uppercase tracking-widest text-ink/50 block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="scrapbook-input"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-mono text-xs uppercase tracking-widest text-ink/50 block mb-2">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, your brand, your vision..."
                      className="scrapbook-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full bg-ink text-cream py-4 font-handwriting text-xl flex items-center justify-center gap-3 hover:bg-coral transition-colors duration-300 shadow-scrapbook"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info sidebar — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact details card */}
            <div className="bg-mustard p-6 shadow-scrapbook rotate-[1deg] hover:rotate-0 transition-transform duration-300">
              <h3 className="font-serif text-xl font-bold text-ink mb-4">Find Me Here</h3>
              <div className="space-y-3">
                {[
                  { icon: MapPin, label: "Austin, TX (working nationally)" },
                  { icon: Mail, label: "designby.evangelina@gmail.com" },
                  { icon: Clock, label: "Mon–Fri · 9am–6pm GMT" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon size={16} className="mt-1 text-ink/60 flex-shrink-0" />
                    <span className="font-handwriting text-base text-ink/80">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ sticky notes */}
            {[
              {
                q: "How long does a project take?",
                a: "Brand identities typically take 4–6 weeks. Packaging 6–8 weeks.",
                color: "bg-white",
                rotate: "-rotate-2",
              },
              {
                q: "Do you work with small businesses?",
                a: "Absolutely! Some of my best work has been with passionate small teams.",
                color: "bg-blush/40",
                rotate: "rotate-1",
              },
              {
                q: "What's your payment structure?",
                a: "50% upfront, 50% on delivery. Flexible for larger projects.",
                color: "bg-sky/15",
                rotate: "-rotate-1",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className={`${faq.color} ${faq.rotate} p-5 shadow-scrapbook border border-ink/5`}
              >
                <p className="font-mono text-xs uppercase tracking-widest text-ink/40 mb-2">FAQ</p>
                <p className="font-handwriting text-base font-bold text-ink mb-2">{faq.q}</p>
                <p className="font-sans text-sm text-ink/60">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
