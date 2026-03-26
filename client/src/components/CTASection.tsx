import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * CTA Section - Final Call to Action
 * 
 * Headline: "Empieza a automatizar tus citas"
 * Body: Explains no technical knowledge needed
 * CTA: "Empezar ahora"
 * Subtext: Limited spots for new clients
 * 
 * Design: Premium white background with strong CTA
 */
export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-32 px-4 bg-white border-t-2 border-gray-100"
    >
      <div
        ref={contentRef}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-antonio text-4xl md:text-5xl font-bold uppercase text-black mb-6">
          Empieza a automatizar tus citas
        </h2>

        <p className="font-archivo text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          Nos encargamos de toda la configuración. No necesitas conocimientos técnicos.
        </p>

        <a href="https://calendly.com/automaitons/30min" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-antonio font-bold text-lg uppercase rounded-lg transition-all duration-300 hover:scale-105 shadow-lg active:scale-95 mb-6">
          Empezar ahora
        </a>

        <p className="font-archivo text-sm text-gray-600 italic">
          Plazas limitadas para nuevos clientes
        </p>
      </div>
    </section>
  );
}
