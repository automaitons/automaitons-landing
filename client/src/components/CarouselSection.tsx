import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Carousel Section - Horizontal Scroll with 5 Cards
 * 
 * Cards:
 * 1. Respuestas instantáneas
 * 2. Cualificación de leads
 * 3. Reserva automática
 * 4. Integración con calendario
 * 5. Disponible 24/7
 * 
 * Design: Horizontal snap points with smooth scroll animation
 */
export default function CarouselSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !sectionRef.current) return;

    const cards = containerRef.current.querySelectorAll('.carousel-card');

    // Animate cards on scroll
    gsap.to(containerRef.current, {
      x: () => -(containerRef.current!.scrollWidth - window.innerWidth),
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      },
      ease: 'none',
    });

    // Fade in cards
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
          },
        }
      );
    });
  }, []);

  const cards = [
    {
      title: 'Respuestas instantáneas',
      description: 'Cada lead recibe respuesta en segundos.',
    },
    {
      title: 'Cualificación de leads',
      description: 'Filtramos clientes reales de curiosos.',
    },
    {
      title: 'Reserva automática',
      description: 'Los clientes reservan sin intercambios interminables.',
    },
    {
      title: 'Integración con calendario',
      description: 'Totalmente sincronizado con tu disponibilidad.',
    },
    {
      title: 'Disponible 24/7',
      description: 'Tu negocio nunca deja de responder.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="px-4 mb-12">
        <h2 className="font-antonio text-4xl md:text-5xl font-bold uppercase text-black text-center">
          Características principales
        </h2>
      </div>

      <div className="relative h-96">
        <div
          ref={containerRef}
          className="flex gap-6 px-4 h-full"
          style={{ width: 'fit-content' }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="carousel-card flex-shrink-0 w-80 bg-white border-2 border-black rounded-lg p-8 flex flex-col justify-center hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-antonio text-2xl font-bold uppercase text-black mb-4">
                {card.title}
              </h3>
              <p className="font-archivo text-gray-700 text-lg leading-relaxed">
                {card.description}
              </p>
              <div className="mt-6 w-12 h-1 bg-blue-600"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
