"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/community/Hero";
import EventSection from "@/components/community/EventSection";
import FooterCTA from "@/components/FooterCTA";
import { events, quickNavPills } from "@/components/community/data";

export default function CommunityServicePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen mt-20">
        <HeroSection quickNavPills={quickNavPills} />

        {events.map((event, i) => (
          <div key={event.number}>
            <EventSection event={event} index={i} />
          </div>
        ))}

        <FooterCTA />
        <Footer />
      </main>
    </>
  );
}