'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { MailOpen, Sparkles, MapPin, Phone, Mail } from 'lucide-react';

export default function ContactHero() {
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
      id="contacto-hero" 
      className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-amber-950 to-amber-900 text-white border-b border-amber-800"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(251,191,36,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.04),transparent_50%)]" />

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Copy Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-500/20 text-brand-yellow border border-amber-500/30 flex items-center gap-1.5 shadow-sm">
                <MailOpen className="h-4 w-4 text-brand-yellow animate-pulse" />
                Asistencia Personalizada
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none text-white"
            >
              Contacto <br />
              <span className="text-brand-yellow">Comercial</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl font-sans text-amber-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              ¿Listo para escalar tu negocio? Hablá con un asesor logístico y diseñemos un esquema tarifario a tu medida.
            </motion.p>

            {/* Special Callout Panel */}
            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 max-w-xl mx-auto lg:mx-0 shadow-inner space-y-3"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-yellow" />
                <h3 className="text-xs uppercase tracking-widest text-brand-yellow font-bold leading-none">
                  Propuesta Personalizada
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-sans text-center lg:text-left">
                Analizamos tu volumen de envíos para diseñar un plan 3PL, e-commerce o ruteo masivo con tarifas preferenciales y facturación mensual consolidada.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Floating Contact Widget Card */}
          <div className="lg:col-span-5 relative hidden lg:block h-[400px]">
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] z-20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="rounded-3xl border border-white/10 bg-white p-8 text-slate-800 shadow-2xl relative overflow-hidden">
                <div className="space-y-5 relative z-10">
                  <div>
                    <h4 className="text-sm font-subheading uppercase font-bold text-slate-900 leading-none">
                      Información de Contacto
                    </h4>
                    <p className="text-[10px] text-slate-400 font-sans tracking-wider uppercase mt-1">Respuestas en el día</p>
                  </div>

                  <div className="space-y-3.5 text-xs text-slate-600 font-sans">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-brand-blue" />
                      <span>+54 223 660-2699</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-brand-blue" />
                      <span className="break-all">matiascejas@enviosdosruedas.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-brand-blue" />
                      <span>Friuli 1972, Mar del Plata</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono text-slate-400">
                    <span>Atención Comercial</span>
                    <span className="text-emerald-600 font-bold uppercase">Disponible</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
