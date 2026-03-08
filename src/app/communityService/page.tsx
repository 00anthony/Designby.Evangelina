"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/community/Hero";
import EventSection from "@/components/community/EventSection";
import TornDivider from "@/components/TornDivider";
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

            {i < events.length - 1 && (
              <TornDivider
                topColor={i % 2 === 0 ? "#f5f0e8" : "#ede8dc"}
                bottomColor={i % 2 === 0 ? "#ede8dc" : "#f5f0e8"}
              />
            )}
          </div>
        ))}

        <FooterCTA />
        <Footer />
      </main>
    </>
  );
}