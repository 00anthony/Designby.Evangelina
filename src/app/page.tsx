import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CommunityService from "@/components/CommunityService";
import ContactForm from "@/components/ContactForm";
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
      <ContactForm />
      <Footer />
    </main>
  );
}
