'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Award, Heart } from 'lucide-react';

export default function AboutHero() {
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
    <section id="about-hero" className="relative min-h-[85vh] bg-slate-50 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.04),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,236,1,0.04),transparent_40%)]" />

      {/* Hero Banner Section */}
      <div className="bg-gradient-to-b from-sky-900 to-sky-950 text-white pt-32 pb-24 relative overflow-hidden border-b border-sky-800/40">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.04),transparent_50%)]" />
        
        {/* Background image overlay */}
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span 
              variants={itemVariants}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue inline-flex items-center gap-1.5 shadow-accent-sm"
            >
              <Award className="h-4 w-4 text-brand-blue animate-pulse" />
              Nuestra Identidad
            </motion.span>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white"
            >
              Sobre Nosotros
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl font-sans text-sky-100 max-w-2xl mx-auto leading-relaxed"
            >
              Somos <span className="text-brand-yellow font-semibold">Envíos DosRuedas</span>, tu solución confiable. Más de 7 años revolucionando la logística de última milla en Mar del Plata.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Quiénes Somos Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Image / Reviews Mockup Grid */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Main Picture */}
            <div className="relative h-[380px] sm:h-[450px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/60 bg-white">
              <Image
                src="https://i.postimg.cc/hGwBpfhx/card-moto01.webp"
                alt="Repartidor en moto de Envíos Dos Ruedas"
                fill
                referrerPolicy="no-referrer"
                className="object-cover"
              />
              {/* Blur gradient cover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* floating Google Reviews Card */}
            <motion.div 
              className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl p-5 shadow-xl border border-slate-100 max-w-xs"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-slate-800 text-xs font-bold font-mono ml-1">4.9</span>
                </div>
                <h4 className="text-xs uppercase tracking-wider font-subheading font-bold text-slate-900">
                  Google Reviews
                </h4>
                <p className="text-[11px] text-slate-500 font-sans leading-snug">
                  4.9 estrellas en Google Reviews. Basado en la confianza de cientos de clientes locales.
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* Column 2: Detailed Text Block */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-[10px] font-bold uppercase tracking-widest inline-block">
              Nuestra Esencia
            </span>
            
            <h2 className="text-slate-900 text-3xl sm:text-4xl font-display uppercase tracking-tight leading-none">
              Tu aliado confiable en mensajería y delivery en Mar del Plata
            </h2>
            
            <div className="h-1 bg-brand-yellow w-16 rounded-full" />

            <div className="space-y-4 text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                <strong>Envíos DosRuedas</strong> se posiciona en el mercado como tu Partner Logístico Especializado. Entendemos que la eficiencia operativa en la entrega es el pilar fundamental de la experiencia del cliente final. No somos una app de delivery impersonal; somos una organización estructurada que le da valor real a cada paquete que tocamos.
              </p>
              <p>
                Transformamos tu estructura de gasto fijo en soluciones flexibles que acompañan el crecimiento de tu negocio. Al delegar tus envíos en nosotros, ganás la tranquilidad de saber que tu reputación está resguardada por profesionales que conocen la ciudad al detalle.
              </p>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-blue/10 text-brand-blue rounded-xl">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Cero Riesgos</h4>
                  <p className="text-[11px] text-slate-500 leading-snug">Soporte real frente a incidencias.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-blue/10 text-brand-blue rounded-xl">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Compromiso Local</h4>
                  <p className="text-[11px] text-slate-500 leading-snug">Conocemos cada barrio de MDP.</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
