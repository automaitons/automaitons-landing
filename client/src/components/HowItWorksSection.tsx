import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * How It Works Section - 3 Columns
 * 
 * Column 1: Captar
 * Column 2: Cualificar
 * Column 3: Convertir
 * 
 * Design: Three-column layout with step indicators
 */
export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate columns
    columnsRef.current.forEach((column, index) => {
      if (!column) return;

      gsap.fromTo(
        column,
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

  const steps = [
    {
      number: '01',
      title: 'Captar',
      description: 'Nos conectamos a tu WhatsApp y capturamos cada lead.',
    },
    {
      number: '02',
      title: 'Cualificar',
      description: 'La IA hace las preguntas clave para entender al cliente.',
    },
    {
      number: '03',
      title: 'Convertir',
      description: 'Los leads cualificados se convierten en citas automáticamente.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-32 px-4 bg-white border-t-2 border-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-antonio text-4xl md:text-5xl font-bold uppercase text-black mb-16 text-center">
          Cómo funciona
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                columnsRef.current[index] = el;
              }}
              className="relative"
            >
              {/* Step number */}
              <div className="mb-8">
                <span className="font-antonio text-6xl font-bold text-blue-600 opacity-20">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-antonio text-3xl font-bold uppercase text-black mb-4">
                  {step.title}
                </h3>
                <p className="font-archivo text-lg text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Divider line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-0 right-0 w-1 h-32 bg-gradient-to-b from-blue-600 to-transparent transform translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
