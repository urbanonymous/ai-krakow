
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FormatSection from "@/components/FormatSection";
import BlogSection from "@/components/BlogSection";
import ConnectSection from "@/components/ConnectSection";
import WhySection from "@/components/WhySection";
import PageLayout from "@/components/PageLayout";
import { useEffect } from "react";

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href) return;

      const hash = href.startsWith('/#') ? href.slice(1) : href;
      if (!hash.startsWith('#')) return;
      
      const targetElement = document.querySelector(hash);
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
    <PageLayout mainClassName="flex-grow space-y-4 md:space-y-8">
      <Hero />
      <AboutSection />
      <FormatSection />
      <BlogSection />
      <ConnectSection />
      <WhySection />
    </PageLayout>
  );
};

export default Index;
