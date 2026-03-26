import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Solution Section
 * 
 * Headline: "Lo solucionamos automáticamente"
 * Body: Explains the solution
 * 
 * Design: Clean white background with blue accent elements
 */
export default function SolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !bodyRef.current) return;

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
      className="w-full py-20 md:py-32 px-4 bg-white border-t-2 border-gray-100"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          ref={headingRef}
          className="font-antonio text-4xl md:text-5xl font-bold uppercase text-black mb-8"
        >
          Lo solucionamos automáticamente
        </h2>

        <p
          ref={bodyRef}
          className="font-archivo text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          AUTOMAITONS se conecta a tu WhatsApp y gestiona las conversaciones por ti. Responde al instante, hace las preguntas correctas y agenda citas directamente en tu calendario.
        </p>
      </div>
    </section>
  );
}
