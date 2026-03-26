import React, { useEffect, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import CarouselSection from '@/components/CarouselSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CinematicBannerSection from '@/components/CinematicBannerSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Lenis from 'lenis';

/**
 * AUTOMAITONS Landing Page
 * 
 * Design Philosophy: Premium SaaS landing page with cinematic scroll animations
 * - Clean, minimalist aesthetic with high contrast
 * - Scroll-driven animations using GSAP ScrollTrigger
 * - Smooth scrolling with Lenis
 * - Focus on conversion with clear CTAs
 */
export default function Home() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    } as any);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full bg-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CarouselSection />
      <HowItWorksSection />
      <CinematicBannerSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
