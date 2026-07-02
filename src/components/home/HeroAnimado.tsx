'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Bike, Shield, Zap, MapPin, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring' as const, 
      stiffness: 100, 
      damping: 15,
    } 
  },
};

// Canvas interactivo que simula la red logística de Mar del Plata
function LogisticaNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Nodos clave inspirados en la red de Mar del Plata
    const createNodes = () => [
      { id: 'cd', x: width * 0.25, y: height * 0.55, label: 'Centro de Distribución', size: 6 },
      { id: 'centro', x: width * 0.6, y: height * 0.45, label: 'Centro', size: 4 },
      { id: 'guemes', x: width * 0.75, y: height * 0.65, label: 'Zona Güemes', size: 4 },
      { id: 'const', x: width * 0.5, y: height * 0.25, label: 'Constitución', size: 4 },
      { id: 'puerto', x: width * 0.8, y: height * 0.8, label: 'Puerto', size: 4 },
    ];

    let nodes = createNodes();

    // Conexiones de ruteo
    const connections = [
      { from: 'cd', to: 'const' },
      { from: 'cd', to: 'centro' },
      { from: 'cd', to: 'guemes' },
      { from: 'centro', to: 'const' },
      { from: 'centro', to: 'guemes' },
      { from: 'guemes', to: 'puerto' },
    ];

    interface Particle {
      fromNode: typeof nodes[0];
      toNode: typeof nodes[0];
      progress: number;
      speed: number;
      size: number;
      color: string;
    }

    const particles: Particle[] = [];
    const maxParticles = 12;

    const spawnParticle = () => {
      const conn = connections[Math.floor(Math.random() * connections.length)];
      const fromNode = nodes.find(n => n.id === conn.from);
      const toNode = nodes.find(n => n.id === conn.to);
      if (!fromNode || !toNode) return;

      particles.push({
        fromNode,
        toNode,
        progress: 0,
        speed: 0.003 + Math.random() * 0.005,
        size: 2 + Math.random() * 2,
        color: Math.random() > 0.4 ? '#FFEC01' : '#60A5FA', // Colores oficiales
      });
    };

    // Inicializar partículas
    for (let i = 0; i < maxParticles; i++) {
      spawnParticle();
      particles[i].progress = Math.random(); // comenzar en puntos aleatorios de la ruta
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    // Escuchar el movimiento del mouse/toques sobre el componente padre
    const heroSection = canvas.closest('section');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      heroSection.addEventListener('mouseleave', handleMouseLeave);
      heroSection.addEventListener('touchmove', handleTouchMove);
      heroSection.addEventListener('touchend', handleMouseLeave);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Re-crear nodos con nuevas dimensiones si cambia de escala
      nodes = createNodes();

      // 1. Dibujar conexiones (caminos de ruteo)
      ctx.lineWidth = 1.5;
      connections.forEach(conn => {
        const fromNode = nodes.find(n => n.id === conn.from);
        const toNode = nodes.find(n => n.id === conn.to);
        if (!fromNode || !toNode) return;

        // Gradiente interactivo por la cercanía del mouse
        const dx = (fromNode.x + toNode.x) / 2 - mouseRef.current.x;
        const dy = (fromNode.y + toNode.y) / 2 - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        ctx.strokeStyle = dist < 180 
          ? `rgba(255, 236, 1, ${0.15 + (1 - dist / 180) * 0.35})` // brillo amarillo si está cerca
          : 'rgba(255, 255, 255, 0.06)'; // azul/blanco sutil base
        
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();
      });

      // 2. Actualizar y dibujar partículas (paquetes/envíos)
      particles.forEach((p) => {
        p.progress += p.speed;

        // Si llega a destino, reaparecer
        if (p.progress >= 1) {
          p.progress = 0;
          const conn = connections[Math.floor(Math.random() * connections.length)];
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          if (fromNode && toNode) {
            p.fromNode = fromNode;
            p.toNode = toNode;
          }
        }

        // Posición actual interpolada
        const x = p.fromNode.x + (p.toNode.x - p.fromNode.x) * p.progress;
        const y = p.fromNode.y + (p.toNode.y - p.fromNode.y) * p.progress;

        // Efecto del mouse sobre partículas
        const dx = x - mouseRef.current.x;
        const dy = y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let currentSize = p.size;
        let glow = 0;

        if (dist < 120) {
          const force = (1 - dist / 120);
          currentSize += force * 2.0;
          glow = force * 10;
        }

        ctx.fillStyle = p.color;
        if (glow > 0) {
          ctx.shadowBlur = glow;
          ctx.shadowColor = p.color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(x, y, currentSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // 3. Dibujar nodos (centros logísticos)
      nodes.forEach(node => {
        const dx = node.x - mouseRef.current.x;
        const dy = node.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const isNear = dist < 150;
        
        // Círculo exterior (resplandor)
        if (isNear) {
          ctx.fillStyle = 'rgba(255, 236, 1, 0.08)';
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Círculo central
        ctx.fillStyle = isNear ? '#FFEC01' : 'rgba(255, 255, 255, 0.7)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + (isNear ? 1.5 : 0), 0, Math.PI * 2);
        ctx.fill();

        // Texto descriptivo suave en hover o por defecto para el CD
        if (isNear || node.id === 'cd') {
          ctx.fillStyle = node.id === 'cd' ? '#FFEC01' : 'rgba(255, 255, 255, 0.9)';
          ctx.font = 'bold 9px var(--font-sans)';
          ctx.fillText(node.label, node.x + 10, node.y + 3);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (heroSection) {
        heroSection.removeEventListener('mousemove', handleMouseMove);
        heroSection.removeEventListener('mouseleave', handleMouseLeave);
        heroSection.removeEventListener('touchmove', handleTouchMove);
        heroSection.removeEventListener('touchend', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70"
    />
  );
}

export default function HeroAnimado() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs para suavizar la inclinación tridimensional de las tarjetas
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 18 });

  // Movimiento sutil para elementos float (Parallax)
  const floatX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 120, damping: 18 });
  const floatY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), { stiffness: 120, damping: 18 });

  // Movimiento sutil invertido
  const floatXInv = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, -15]), { stiffness: 120, damping: 18 });
  const floatYInv = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 120, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (touch.clientX - rect.left) / width - 0.5;
    const y = (touch.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="hero-animado" 
      className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-blue border-y border-blue-200/60 text-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,236,1,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_50%)]" />
      
      {/* Interactive Logistics Network Background */}
      <LogisticaNetworkCanvas />

      {/* Decorative overlay for logistics motion */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-blue to-transparent opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent opacity-10 pointer-events-none" />

      {/* Background illustration overlay (Cargado localmente) */}
      <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
        <Image
          src="/hero-background.jpeg"
          alt="Fondo de la sección principal"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Info */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue flex items-center gap-1.5 shadow-accent-md glow-yellow">
                <Bike className="h-4.5 w-4.5 animate-bounce" />
                Tu Solución Confiable
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none"
            >
              Mensajería y Logística <br />
              <span className="text-brand-yellow text-glow-yellow">E-Commerce</span> <br />
              en Mar del Plata
            </motion.h1>

            {/* Body Text */}
            <motion.p 
              variants={itemVariants}
              className="text-lg max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed text-blue-50"
            >
              Somos tu partner estratégico en mensajería, envíos en el día y delivery de última milla. Soluciones ágiles, seguras y competitivas para potenciar tu marca.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/cotizar/express"
                id="hero-cta-solicitar"
                className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow/95 text-brand-blue font-subheading tracking-wider text-lg uppercase px-8 py-4 rounded-xl shadow-accent-md hover:shadow-accent-lg transition-all duration-200 hover:scale-[1.03] flex items-center justify-center gap-2 font-medium"
              >
                Solicitar Servicio
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/servicios/envios-express"
                id="hero-cta-servicios"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-subheading tracking-wider text-lg uppercase px-8 py-4 rounded-xl border border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Ver Servicios
              </Link>
            </motion.div>

            {/* Features list */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 pt-8 border-t border-white/15 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className="p-2.5 bg-white/5 rounded-xl mb-2 text-brand-yellow">
                  <Shield className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-blue-200">100% SEGURO</span>
              </div>
              
              <div className="flex flex-col items-center lg:items-start">
                <div className="p-2.5 bg-white/5 rounded-xl mb-2 text-brand-yellow">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-blue-200">ULTRA RÁPIDO</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="p-2.5 bg-white/5 rounded-xl mb-2 text-brand-yellow">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-blue-200">COBERTURA TOTAL</span>
              </div>
            </motion.div>
          </div>

          {/* Graphical Representation / Floating Cards (Responsivo y habilitado en móvil) */}
          <div 
            className="col-span-1 lg:col-span-5 relative h-[380px] sm:h-[450px] w-full mt-10 lg:mt-0 flex justify-center items-center overflow-visible"
            style={{ perspective: 1000 }}
          >
            {/* Contenedor envolvente 3D */}
            <motion.div
              className="w-full max-w-[400px] lg:max-w-none h-full relative"
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Card 1: Map Representation (Cargado localmente) */}
              <motion.div 
                className="absolute top-8 sm:top-12 right-0 w-[78%] z-25"
                initial={{ opacity: 0, z: -100 }}
                animate={{ opacity: 1, z: 0, transition: { duration: 0.9, ease: "easeOut", delay: 0.5 } }}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(10px)',
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-white p-2.5 sm:p-3 glow-blue-lg">
                  <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
                    <Image
                      src="/card_mapa.webp"
                      alt="Mapa de Cobertura de Mar del Plata"
                      width={400}
                      height={300}
                      className="rounded-2xl object-cover h-40 sm:h-48 w-full shadow-inner"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-slate-800" style={{ transform: 'translateZ(30px)' }}>
                    <span className="text-xs font-bold uppercase tracking-wide font-sans">Ruteo de Envíos</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold uppercase font-subheading">Optimizado</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Transit Details */}
              <motion.div 
                className="absolute bottom-6 sm:bottom-8 left-0 w-[74%] z-30"
                initial={{ opacity: 0, z: -100 }}
                animate={{ opacity: 1, z: 0, transition: { duration: 0.9, ease: "easeOut", delay: 0.7 } }}
                style={{
                  transformStyle: 'preserve-3d',
                  x: floatX,
                  y: floatY,
                  transform: 'translateZ(40px)',
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-slate-950/85 backdrop-blur-md p-3.5 sm:p-4 text-white glow-yellow-lg">
                  <div className="flex items-center gap-3 mb-2.5" style={{ transform: 'translateZ(10px)' }}>
                    <div className="p-2 sm:p-2.5 rounded-xl bg-brand-yellow text-brand-blue shadow-accent-sm">
                      <Bike className="h-4.5 w-4.5 sm:h-5 sm:w-5 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white font-display">Reparto en Curso</h4>
                      <p className="text-[9px] sm:text-[10px] text-brand-yellow font-mono">ID: MDQ-FLEX-2026</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 text-xs" style={{ transform: 'translateZ(20px)' }}>
                    <div className="flex justify-between border-b border-white/10 pb-1">
                      <span className="text-blue-200 font-sans text-[10px] sm:text-xs">Origen</span>
                      <span className="font-semibold text-white font-sans text-[10px] sm:text-xs">Centro de Distribución</span>
                    </div>
                    <div className="flex justify-between font-sans">
                      <span className="text-blue-200 text-[10px] sm:text-xs">Destinatario</span>
                      <span className="font-semibold text-brand-yellow text-[10px] sm:text-xs">Zona Güemes</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Info Pill */}
              <motion.div 
                className="absolute top-1/2 left-1/4 -translate-y-1/2 z-35"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.9 } }}
                style={{
                  x: floatXInv,
                  y: floatYInv,
                  transform: 'translateZ(70px)',
                }}
              >
                <div className="px-4 py-2 sm:px-5 sm:py-2.5 bg-brand-yellow text-brand-blue font-subheading tracking-widest text-xs sm:text-sm rounded-full shadow-2xl border border-white flex items-center gap-1.5 sm:gap-2 animate-bounce shadow-accent-sm font-medium">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                  Entrega Flex Activa
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
