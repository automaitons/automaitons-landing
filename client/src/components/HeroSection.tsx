import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero Section - Scroll-driven canvas animation
 * 
 * Visual narrative: "Del caos a la automatización"
 * - Foreground canvas: UI elements (WhatsApp chats, notifications, confirmations)
 * - Ambient canvas: Blurred abstract gradients (black + blue)
 * - Scroll progression: Chaos → Organization → Automated confirmations
 */
export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const foregroundCanvasRef = useRef<HTMLCanvasElement>(null);
  const ambientCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const foregroundCanvas = foregroundCanvasRef.current;
    const ambientCanvas = ambientCanvasRef.current;

    if (!foregroundCanvas || !ambientCanvas) return;

    const fCtx = foregroundCanvas.getContext('2d');
    const aCtx = ambientCanvas.getContext('2d');

    if (!fCtx || !aCtx) return;

    // Set canvas sizes
    const setCanvasSizes = () => {
      foregroundCanvas.width = window.innerWidth;
      foregroundCanvas.height = window.innerHeight;
      ambientCanvas.width = window.innerWidth;
      ambientCanvas.height = window.innerHeight;
    };

    setCanvasSizes();
    window.addEventListener('resize', setCanvasSizes);

    // Draw ambient background (blurred gradients)
    const drawAmbient = (progress: number) => {
      aCtx!.clearRect(0, 0, ambientCanvas.width, ambientCanvas.height);

      // Create gradient from black to blue
      const gradient = aCtx!.createLinearGradient(0, 0, ambientCanvas.width, ambientCanvas.height);
      gradient.addColorStop(0, '#000000');
      gradient.addColorStop(0.5 + progress * 0.2, '#1e40af');
      gradient.addColorStop(1, '#3b82f6');

      aCtx!.fillStyle = gradient;
      aCtx!.fillRect(0, 0, ambientCanvas.width, ambientCanvas.height);
    };

    // Draw foreground UI elements
    const drawForeground = (progress: number) => {
      fCtx!.clearRect(0, 0, foregroundCanvas.width, foregroundCanvas.height);

      const centerX = foregroundCanvas.width / 2;
      const centerY = foregroundCanvas.height / 2;

      // Apply fade mask
      fCtx!.globalAlpha = 1;

      // 0-30%: Chaotic messages
      if (progress < 0.3) {
        const chaoticProgress = progress / 0.3;
        drawChaoticMessages(fCtx!, centerX, centerY, chaoticProgress);
      }
      // 30-70%: Organization phase
      else if (progress < 0.7) {
        const orgProgress = (progress - 0.3) / 0.4;
        drawOrganizingPhase(fCtx!, centerX, centerY, orgProgress);
      }
      // 70-100%: Organized with confirmations
      else {
        const finalProgress = (progress - 0.7) / 0.3;
        drawFinalState(fCtx!, centerX, centerY, finalProgress);
      }
    };

    // Draw chaotic messages (0-30%)
    const drawChaoticMessages = (ctx: CanvasRenderingContext2D, cx: number, cy: number, progress: number) => {
      ctx.font = 'bold 16px "Antonio", sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';

      const messages = [
        { text: '¿Hola?', x: -150, y: -100, angle: -0.3 },
        { text: 'Necesito cita', x: 100, y: -80, angle: 0.2 },
        { text: 'Estoy aquí', x: -120, y: 50, angle: 0.4 },
        { text: '¿Me escuchas?', x: 140, y: 80, angle: -0.15 },
      ];

      messages.forEach((msg, i) => {
        const wobble = Math.sin(progress * Math.PI * 4 + i) * 25;
        const opacity = 0.5 + Math.sin(progress * Math.PI * 2 + i) * 0.5;
        ctx.globalAlpha = opacity;
        ctx.save();
        ctx.translate(cx + msg.x + wobble, cy + msg.y + wobble);
        ctx.rotate(msg.angle + Math.sin(progress * Math.PI * 2 + i) * 0.2);
        ctx.fillText(msg.text, 0, 0);
        ctx.restore();
      });

      // Draw notification badges
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#ef4444';
      messages.forEach((msg, i) => {
        const wobble = Math.sin(progress * Math.PI * 4 + i) * 25;
        ctx.beginPath();
        ctx.arc(cx + msg.x + wobble + 120, cy + msg.y + wobble - 30, 10, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Draw organizing phase (30-70%)
    const drawOrganizingPhase = (ctx: CanvasRenderingContext2D, cx: number, cy: number, progress: number) => {
      ctx.font = 'bold 16px "Antonio", sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';

      const messages = [
        { text: '¿Hola?', x: -100, y: -80, finalX: -80, finalY: -60 },
        { text: 'Necesito cita', x: 80, y: -60, finalX: 60, finalY: -40 },
        { text: 'Estoy aquí', x: -100, y: 40, finalX: -80, finalY: 20 },
        { text: '¿Me escuchas?', x: 120, y: 60, finalX: 100, finalY: 40 },
      ];

      messages.forEach((msg) => {
        const x = msg.x + (msg.finalX - msg.x) * progress;
        const y = msg.y + (msg.finalY - msg.y) * progress;
        ctx.globalAlpha = 0.7 + progress * 0.3;
        ctx.fillText(msg.text, cx + x, cy + y);
      });

      // Draw processing indicator
      ctx.globalAlpha = progress;
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx, cy + 120, 35, 0, Math.PI * 2 * progress);
      ctx.stroke();

      ctx.font = 'bold 14px "Antonio", sans-serif';
      ctx.fillStyle = '#3b82f6';
      ctx.fillText('IA PROCESANDO', cx, cy + 170);
    };

    // Draw final state (70-100%)
    const drawFinalState = (ctx: CanvasRenderingContext2D, cx: number, cy: number, progress: number) => {
      ctx.font = 'bold 16px "Antonio", sans-serif';
      ctx.fillStyle = '#22c55e';
      ctx.textAlign = 'center';
      ctx.globalAlpha = progress;

      // Confirmed messages
      ctx.fillText('✓ CITA CONFIRMADA', cx - 80, cy - 60);
      ctx.fillText('✓ CALENDARIO ACTUALIZADO', cx - 80, cy);
      ctx.fillText('✓ RECORDATORIO ENVIADO', cx - 80, cy + 60);

      // Green checkmarks
      ctx.fillStyle = '#22c55e';
      const checkmarks = [
        { x: -140, y: -60 },
        { x: -140, y: 0 },
        { x: -140, y: 60 },
      ];

      checkmarks.forEach((check) => {
        ctx.beginPath();
        ctx.arc(cx + check.x, cy + check.y, 12 * progress, 0, Math.PI * 2);
        ctx.fill();
      });

      // Calendar grid
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.globalAlpha = progress * 0.8;

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          ctx.strokeRect(cx + 80 + i * 35, cy - 70 + j * 35, 30, 30);
        }
      }

      ctx.globalAlpha = 1;
    };

    // Animation loop
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));

      drawAmbient(progress);
      drawForeground(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setCanvasSizes);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >


      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="font-antonio text-5xl md:text-7xl font-bold uppercase text-white mb-6 drop-shadow-lg">
          Convierte mensajes de WhatsApp en citas automáticamente
        </h1>

        <p className="font-archivo text-lg md:text-xl text-gray-100 mb-8 drop-shadow-md">
          Deja de perder clientes. AUTOMAITONS responde al instante, cualifica leads y agenda citas por ti — 24/7.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://calendly.com/automaitons/30min" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-antonio font-bold text-lg uppercase rounded-lg transition-all duration-300 hover:scale-105 shadow-lg active:scale-95">
            Conseguir más citas
          </a>
        </div>
      </div>
    </section>
  );
}
