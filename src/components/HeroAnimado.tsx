'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Shield, Zap, MapPin, ArrowRight, Bike } from 'lucide-react';

export default function HeroAnimado() {
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
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section 
      id="hero-animado" 
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-blue-100 border-y border-blue-200/60 text-slate-900"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,54,165,0.06),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,54,165,0.1),transparent_50%)]" />
      
      {/* Moving dots or line overlay to indicate logistics motion */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-blue text-white flex items-center gap-1.5 shadow-md">
                <Bike className="h-3.5 w-3.5 animate-bounce" />
                Tu Solución Confiable
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-slate-900 text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none"
            >
              Mensajería y Logística <br />
              <span className="text-brand-blue">E-Commerce</span> <br />
              en Mar del Plata
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-slate-600 text-lg max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed"
            >
              Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                href="/cotizar/express"
                id="hero-cta-solicitar"
                className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white font-subheading tracking-wider text-lg uppercase px-8 py-3.5 rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.03] flex items-center justify-center gap-2 font-medium"
              >
                Solicitar Servicio
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                href="/servicios/envios-express"
                id="hero-cta-servicios"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 font-subheading tracking-wider text-lg uppercase px-8 py-3.5 rounded-xl border border-slate-200 shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                Ver Servicios
              </Link>
            </motion.div>

            {/* Features list */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className="p-2 bg-brand-blue/5 rounded-lg mb-2 text-brand-blue">
                  <Shield className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">100% SEGURO</span>
              </div>
              
              <div className="flex flex-col items-center lg:items-start">
                <div className="p-2 bg-brand-blue/5 rounded-lg mb-2 text-brand-blue">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">ULTRA RÁPIDO</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="p-2 bg-brand-blue/5 rounded-lg mb-2 text-brand-blue">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">COBERTURA TOTAL</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right graphic/illustration representation */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
              className="relative w-full max-w-sm aspect-square bg-white rounded-3xl border border-slate-100 flex items-center justify-center p-8 overflow-hidden shadow-xl"
            >
              {/* Abstract decorative graphic */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0636A5_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="w-48 h-48 rounded-full bg-brand-blue/5 absolute -top-10 -right-10 blur-xl" />
              <div className="w-48 h-48 rounded-full bg-brand-blue/10 absolute -bottom-10 -left-10 blur-xl" />

              <div className="text-center z-10 space-y-4">
                <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-2 text-brand-blue">
                  <Bike className="h-10 w-10" />
                </div>
                <p className="font-subheading text-2xl tracking-widest uppercase text-brand-blue leading-tight">DOSRUEDAS COURIER</p>
                <div className="h-[2px] w-12 bg-slate-200 mx-auto" />
                <p className="text-xs text-slate-600 font-sans tracking-wide leading-relaxed">
                  Conectando e-commerce, locales comerciales and envíos particulares de punta a punta en toda la ciudad.
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/5 text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                  <span>Entrega Garantizada</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
