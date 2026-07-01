'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Share2, Users, ArrowRight, Sparkles } from 'lucide-react';

export default function NetworksHero() {
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
      id="networks-hero" 
      className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-blue text-white border-b border-blue-200/60"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(255,236,1,0.06),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.04),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Copy Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue flex items-center gap-1.5 shadow-accent-md">
                <Share2 className="h-4 w-4 animate-pulse" />
                Social Media
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none text-white"
            >
              Comunidad <br />
              <span className="text-brand-yellow">DosRuedas</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl font-sans text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Conectate con nuestra red logística. Seguí nuestro día a día, novedades operativas de calle, avisos al instante y casos de éxito corporativo en toda la ciudad de Mar del Plata.
            </motion.p>

            {/* Special Callout Panel */}
            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 max-w-xl mx-auto lg:mx-0 shadow-inner space-y-3"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-yellow shrink-0" />
                <h3 className="text-xs uppercase tracking-widest text-brand-yellow font-bold leading-none">
                  ¡Seguí el Movimiento!
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-blue-50/90 leading-relaxed font-sans">
                Unite a nuestra vibrante comunidad local para acceder a beneficios exclusivos, sorteos, promociones relámpago y estar al tanto de todo lo que pasa en la calle.
              </p>
            </motion.div>

          </div>

          {/* Graphical/Illustrative Column */}
          <div className="lg:col-span-5 relative hidden lg:block h-[400px]">
            {/* Floating community widget */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] z-20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="rounded-3xl border border-white/10 bg-white p-8 text-slate-800 shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 translate-y-[-20%] translate-x-[20%] text-slate-50 opacity-40 pointer-events-none -z-10">
                  <Users className="h-48 w-48" />
                </div>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-subheading uppercase font-bold text-slate-900 leading-none">
                        Canales Oficiales
                      </h4>
                      <p className="text-[10px] text-slate-400 font-sans tracking-wider uppercase mt-1">Conexión Inmediata</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    Nuestras redes sociales son el canal directo para resolver dudas rápidas, ver el recorrido de los envíos en Mar del Plata y sumarte a la red más ágil de mensajería urbana.
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-xs font-mono text-brand-blue font-bold">@enviosdosruedas</span>
                    <a 
                      href="#networks-channels" 
                      className="text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-blue/80 inline-flex items-center gap-1 group"
                    >
                      <span>Ver Canales</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
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
