import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Testimonials Section
 * 
 * Social proof with 2 testimonials
 * 
 * Design: Clean cards with quotes
 */
export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      );
    });
  }, []);

  const testimonials = [
    {
      quote: 'Empezamos a cerrar más citas en la primera semana.',
      author: 'Clínica Dental Premium',
    },
    {
      quote: 'Nos ahorra horas cada día.',
      author: 'Centro Estético Luxe',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-32 px-4 bg-white border-t-2 border-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-antonio text-4xl md:text-5xl font-bold uppercase text-black mb-16 text-center">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="bg-white border-2 border-black rounded-lg p-8"
            >
              <p className="font-archivo text-lg text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="font-antonio font-bold text-black">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
