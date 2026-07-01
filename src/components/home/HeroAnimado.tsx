'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
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

export default function HeroAnimado() {
  return (
    <section 
      id="hero-animado" 
      className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-blue border-y border-blue-200/60 text-white"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,236,1,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_50%)]" />
      
      {/* Decorative overlay for logistics motion */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-blue to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent opacity-10" />

      {/* Background illustration overlay */}
      <div className="absolute inset-0 opacity-15 mix-blend-overlay">
        <Image
          src="https://i.postimg.cc/bvdPxQYr/hero-background.jpg"
          alt="Fondo de la sección principal"
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
          {/* Main Info */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue flex items-center gap-1.5 shadow-accent-md">
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
              <span className="text-brand-yellow">E-Commerce</span> <br />
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

          {/* Graphical Representation / Floating Cards */}
          <div className="lg:col-span-5 relative hidden lg:block h-[450px]">
            {/* Card 1: Map Representation */}
            <motion.div 
              className="absolute top-12 right-0 w-[75%] z-25"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut", delay: 0.5 } }}
              whileHover={{ scale: 1.02, zIndex: 40 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/15 bg-white p-3">
                <Image
                  src="https://i.postimg.cc/nL5J0CMm/card-mapa.webp"
                  alt="Mapa de Cobertura de Mar del Plata"
                  width={400}
                  height={300}
                  referrerPolicy="no-referrer"
                  className="rounded-xl object-cover h-48 w-full"
                />
                <div className="mt-3 flex items-center justify-between text-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wide">Ruteo de Envíos</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold uppercase">Optimizado</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Transit Details */}
            <motion.div 
              className="absolute bottom-8 left-0 w-[70%] z-30"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut", delay: 0.7 } }}
              whileHover={{ scale: 1.02, zIndex: 40 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/15 bg-slate-900/90 backdrop-blur-md p-4 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-brand-yellow text-brand-blue">
                    <Bike className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white">Reparto en Curso</h4>
                    <p className="text-[10px] text-brand-yellow font-mono">ID: MDQ-FLEX-2026</p>
                  </div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span className="text-blue-200">Origen</span>
                    <span className="font-semibold">Centro de Distribución</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Destinatario</span>
                    <span className="font-semibold">Zona Güemes</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Info Pill */}
            <motion.div 
              className="absolute top-1/2 left-1/4 -translate-y-1/2 z-35"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.9 } }}
            >
              <div className="px-4 py-2 bg-brand-yellow text-brand-blue font-bold rounded-full text-xs uppercase tracking-wider shadow-lg border border-white flex items-center gap-1.5 animate-pulse">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Entrega Flex Activa
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
