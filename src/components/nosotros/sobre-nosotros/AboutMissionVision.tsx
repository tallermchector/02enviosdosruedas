'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Rocket, CheckSquare } from 'lucide-react';

export default function AboutMissionVision() {
  const points = [
    {
      title: 'Nuestra Misión',
      desc: 'Conectar personas y negocios en Mar del Plata a través de un servicio de mensajería y delivery confiable, rápido y accesible, contribuyendo de forma activa al crecimiento de nuestra comunidad local.',
      icon: Target,
      color: 'bg-blue-50 border-blue-100 hover:border-brand-blue/30',
    },
    {
      title: 'Nuestra Visión',
      desc: 'Ser la empresa líder en servicios de mensajería y delivery en la región costera, reconocida de forma unánime por nuestra excelencia operativa, innovación logística y compromiso supremo con cada cliente.',
      icon: Eye,
      color: 'bg-yellow-50/50 border-yellow-100/80 hover:border-brand-yellow/50',
    },
    {
      title: 'Innovación Constante',
      desc: 'Incorporamos constantemente nuevas tecnologías, ruteadores automatizados y metodologías avanzadas para simplificar procesos y ofrecer respuestas inmediatas a todos nuestros clientes.',
      icon: Rocket,
      color: 'bg-slate-50 border-slate-100 hover:border-brand-blue/10',
    },
  ];

  return (
    <section 
      id="about-mission-vision" 
      className="py-24 bg-brand-blue relative overflow-hidden text-white border-t border-blue-200/40"
    >
      {/* Visual background enhancements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,236,1,0.03),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.02),transparent_40%)]" />

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
          <span className="px-3.5 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block shadow-accent-sm">
            Propósito y Futuro
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white">
            Misión, Visión e Innovación
          </h2>
          <p className="text-blue-100 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Hacia dónde vamos y cuáles son las convicciones profundas que guían cada entrega y ruteo diario.
          </p>
          <div className="h-1.5 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Grid (3 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] p-8 rounded-3xl flex flex-col justify-between transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="p-3 bg-brand-yellow text-brand-blue rounded-2xl w-fit">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-display uppercase tracking-wider font-semibold text-brand-yellow">
                    {point.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-blue-50/90 font-sans leading-relaxed min-h-[96px]">
                    {point.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs">
                  <CheckSquare className="h-4 w-4 text-brand-yellow shrink-0" />
                  <span className="font-sans opacity-70">Sello de Calidad DosRuedas</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
