import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Cinematic Banner Section - 85vh
 * 
 * Headline: "Tu negocio funciona incluso cuando tú no"
 * Subtext: Explains 24/7 automation
 * 
 * Design: Full-height banner with animated gradient background
 */
export default function CinematicBannerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Animate gradient
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.005;

      // Create animated gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

      const hue1 = (time * 30) % 360;
      const hue2 = (time * 30 + 120) % 360;
      const hue3 = (time * 30 + 240) % 360;

      gradient.addColorStop(0, `hsl(${hue1}, 100%, 20%)`);
      gradient.addColorStop(0.5, `hsl(${hue2}, 100%, 30%)`);
      gradient.addColorStop(1, `hsl(${hue3}, 100%, 25%)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add some noise/texture
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 20;
        data[i] += noise;
        data[i + 1] += noise;
        data[i + 2] += noise;
      }

      ctx.putImageData(imageData, 0, 0);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen md:h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(20px)' }}
      />

      {/* Content overlay */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h2 className="font-antonio text-5xl md:text-6xl font-bold uppercase text-white mb-6 drop-shadow-lg">
          Tu negocio funciona incluso cuando tú no
        </h2>

        <p className="font-archivo text-lg md:text-xl text-gray-100 drop-shadow-md">
          Aunque estés ocupado, durmiendo o cerrado — AUTOMAITONS sigue convirtiendo leads en clientes.
        </p>
      </div>
    </section>
  );
}
