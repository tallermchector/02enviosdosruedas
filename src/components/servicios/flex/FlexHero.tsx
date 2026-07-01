'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Award, ArrowRight, MessageSquare, TrendingUp, Sparkles, Phone } from 'lucide-react';

export default function FlexHero() {
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
      id="flex-hero" 
      className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-blue border-b border-blue-200/60 text-white"
    >
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,236,1,0.06),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.04),transparent_50%)]" />

      {/* Background illustration overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <Image
          src="https://picsum.photos/seed/meli-flex/1920/1080"
          alt="Logística de MercadoLibre Envíos Flex Mar del Plata"
          fill
          priority
          referrerPolicy="no-referrer"
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
          {/* Copy Segment */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue flex items-center gap-1.5 shadow-accent-md">
                <Sparkles className="h-4 w-4 animate-pulse" />
                Beneficio Emprendedores 2026
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none"
            >
              Envíos Flex MercadoLibre: <br />
              <span className="text-brand-yellow">Potenciá tu Reputación</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed text-blue-50"
            >
              Somos expertos en la logística de MercadoLibre. Optimizamos tus entregas Same-Day para que tu medidor siempre esté en verde y vos solo te enfoques en vender.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/cotizar/lowcost"
                id="flex-hero-cta-activar"
                className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow/95 text-brand-blue font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl shadow-accent-md hover:shadow-accent-lg transition-all duration-200 hover:scale-[1.03] flex items-center justify-center gap-2.5 font-semibold"
              >
                Activar Envíos Flex
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="flex-hero-cta-whatsapp"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl border border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5 text-brand-yellow" />
                Contactar Asesor Flex
              </a>
            </motion.div>

            {/* Reputacion Verde Row */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-8 border-t border-white/15 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-xl text-brand-yellow">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-200 leading-none mb-1">Tu Reputación</p>
                  <p className="text-sm font-subheading uppercase font-semibold text-emerald-400">Medidor 100% en Verde</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-xl text-brand-yellow">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-200 leading-none mb-1">SLA de Despacho</p>
                  <p className="text-sm font-subheading uppercase font-semibold text-white">Same-Day Garantizado</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Graphics Segment */}
          <div className="lg:col-span-5 relative hidden lg:block h-[450px]">
            {/* Card 1: Reputation Status Screen */}
            <motion.div 
              className="absolute top-8 right-0 w-[80%] z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-white p-5 text-slate-800">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold uppercase px-2.5 py-1 rounded-full">
                    SOCIOS LOGÍSTICOS CERTIFICADOS
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600">
                    OK
                  </span>
                </div>
                <h3 className="text-base font-display uppercase tracking-tight text-slate-900 leading-snug">
                  Entregas en el día sin demoras
                </h3>
                <p className="text-xs text-slate-500 font-sans mt-2 leading-relaxed">
                  Evitá sanciones en tu panel de MercadoLibre. Nuestro equipo cumple de manera estricta los ruteos y horarios oficiales del canal.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Flex Corte Horario Screen */}
            <motion.div 
              className="absolute bottom-10 left-0 w-[75%] z-30"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.6 } }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-slate-900/95 backdrop-blur-md p-5 text-white">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-yellow animate-ping" />
                    <span className="text-[10px] font-bold tracking-widest text-brand-yellow uppercase">Corte Flex Extendido</span>
                  </div>
                  <p className="text-sm font-subheading uppercase font-semibold leading-none">
                    Recibimos hasta las 15:00 hs
                  </p>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Maximizá tus ventas de la mañana. Coordinamos el ruteo express de tus paquetes durante la tarde sin excepción.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
