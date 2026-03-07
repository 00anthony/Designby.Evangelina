import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import CommunityService from "@/components/home/CommunityService";
import ContactForm from "@/components/home/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Testimonials />
      <CommunityService />
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
      <Footer />
    </main>
  );
}
