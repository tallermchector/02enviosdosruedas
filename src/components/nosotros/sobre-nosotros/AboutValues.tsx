'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Handshake, MapPin } from 'lucide-react';

export default function AboutValues() {
  const values = [
    {
      title: 'Compromiso',
      desc: 'Nos comprometemos con cada envío como si fuera propio, garantizando excelencia en cada entrega.',
      icon: Handshake,
    },
    {
      title: 'Rapidez',
      desc: 'Agilidad motorizada para cumplir con los SLAs de tiempo más exigentes del mercado actual.',
      icon: Zap,
    },
    {
      title: 'Confiabilidad',
      desc: 'Procesos auditados y notificaciones en tiempo real para tu total y absoluta tranquilidad.',
      icon: ShieldCheck,
    },
    {
      title: 'Cercanía',
      desc: 'Atención personalizada y conocimiento profundo de la logística urbana en Mar del Plata.',
      icon: MapPin,
    },
  ];

  return (
    <section 
      id="about-values" 
      className="py-24 bg-white relative z-10 shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.01)] overflow-hidden border-t border-slate-100/50"
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1.5 bg-blue-100 text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-blue-200/50">
            Filosofía Operativa
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            Nuestros Valores
          </h2>
          <p className="text-slate-500 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Los pilares estratégicos e innegociables que sostienen nuestra operativa diaria y nos permiten ser tu partner logístico de absoluta confianza.
          </p>
          <div className="h-1.5 w-12 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Values Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-slate-50/70 hover:bg-white p-6 rounded-3xl border border-slate-100/80 hover:border-brand-blue/10 hover:shadow-md transition-all duration-300 flex flex-col gap-5 text-left group"
              >
                <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-2xl w-fit shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                
                <div className="space-y-1.5">
                  <h3 className="text-sm font-subheading uppercase tracking-wider text-slate-900 font-semibold leading-tight">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
