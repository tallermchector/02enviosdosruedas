'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { HelpCircle, ShieldCheck } from 'lucide-react';

export default function FaqHero() {
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

  return (
    <section 
      id="faq-hero" 
      className="relative bg-gradient-to-b from-slate-800 to-slate-950 text-white pt-32 pb-24 overflow-hidden border-b border-slate-800"
    >
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(148,163,184,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.04),transparent_50%)]" />

      {/* Background illustration overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <Image
          src="https://i.postimg.cc/nLMx4vVc/delivery-background.jpg"
          alt="Fondo de reparto urbano"
          fill
          priority
          referrerPolicy="no-referrer"
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          className="text-center max-w-3xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex justify-center">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-slate-700/60 border border-slate-600/50 text-slate-200 flex items-center gap-1.5 shadow-md">
              <HelpCircle className="h-4 w-4 text-slate-300 animate-pulse" />
              Centro de Soporte
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white leading-none"
          >
            Preguntas Frecuentes
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl font-sans text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Todo lo que necesitás saber sobre nuestra operativa de calle, tarifas zonificadas y SLAs de entrega garantizada. Transparencia total.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
