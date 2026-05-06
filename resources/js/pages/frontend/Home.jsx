import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getSectionIdFromPath, scrollToSection } from "../../utils/sectionNavigation";
import About from "./About";
import Accueil from "./Accueil";
import Contact from "./Contact";
import Faq from "./Faq";
import Footer from "./Footer";
import Method from "./Method";
import Pricing from "./Pricing";
import Projets from "./Projets";
import Services from "./Services";
import Testimonials from "./Testimonials";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionId = getSectionIdFromPath(location.pathname);

    if (!sectionId || sectionId === "top") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const timer = window.setTimeout(() => {
      scrollToSection(sectionId);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="top" className="relative overflow-x-hidden">
      <div className="soft-grid pointer-events-none absolute inset-0 opacity-30" />
      <Navbar />

      <main className="pt-28 md:pt-32">
        <Accueil />
        <Services />
        <About />
        <Projets />
        <Method />
        <Pricing />
        <Testimonials />
        <Contact />
        <Faq />
      </main>

      <Footer />

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Retour en haut"
        className={`fixed right-5 bottom-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-mint-400 text-ink-950 shadow-[0_20px_50px_rgba(75,212,166,0.25)] transition duration-300 hover:bg-mint-300 ${
          showScrollTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m6 15 6-6 6 6" />
        </svg>
      </button>
    </div>
  );
}
