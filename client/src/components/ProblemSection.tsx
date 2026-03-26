import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Problem Section
 * 
 * Headline: "Estás perdiendo clientes cada día"
 * Body: Explains the pain of losing customers due to slow responses
 * 
 * Design: Clean white background, high contrast text, subtle fade-in animation
 */
export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !bodyRef.current) return;

    // Animate heading and body on scroll
    gsap.fromTo(
      headingRef.current,
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

    gsap.fromTo(
      bodyRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
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
      className="w-full py-20 md:py-32 px-4 bg-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          ref={headingRef}
          className="font-antonio text-4xl md:text-5xl font-bold uppercase text-black mb-8"
        >
          Estás perdiendo clientes cada día
        </h2>

        <p
          ref={bodyRef}
          className="font-archivo text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          Cuando un cliente potencial escribe y no recibe respuesta inmediata, se va. Las respuestas manuales, los mensajes perdidos y la falta de seguimiento te están costando dinero.
        </p>
      </div>
    </section>
  );
}
