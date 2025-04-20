
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FormatSection from "@/components/FormatSection";
import NextMeetup from "@/components/NextMeetup";
import ConnectSection from "@/components/ConnectSection";
import WhySection from "@/components/WhySection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      const targetElement = document.querySelector(href);
      if (!targetElement) return;
      
      e.preventDefault();
      
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow space-y-4 md:space-y-8">
        <Hero />
        <AboutSection />
        <FormatSection />
        <NextMeetup />
        <ConnectSection />
        <WhySection />
        <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
