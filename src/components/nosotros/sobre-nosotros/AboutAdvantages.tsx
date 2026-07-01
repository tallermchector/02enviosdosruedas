'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ShieldAlert, Truck, Sparkles } from 'lucide-react';

export default function AboutAdvantages() {
  const advantages = [
    {
      title: 'Atención Personalizada',
      desc: 'Damos la cara frente a cualquier inconveniente. Acá no sos un ticket de soporte automatizado por un bot, sos un partner de negocios.',
      icon: MessageSquare,
      accent: 'border-blue-100 hover:border-brand-blue/30',
    },
    {
      title: 'Flota Exclusiva',
      desc: 'Controlamos meticulosamente cada eslabón de la cadena logística para asegurar los máximos estándares de puntualidad y seguridad.',
      icon: Truck,
      accent: 'border-yellow-100 hover:border-brand-yellow/50',
    },
    {
      title: 'Cero Tercerización',
      desc: 'No delegamos tu confianza en fleteros o aplicaciones de terceros que nadie conoce. Si es DosRuedas, lo hacemos nosotros con nuestro propio personal.',
      icon: ShieldAlert,
      accent: 'border-slate-100 hover:border-red-500/20',
    },
  ];

  return (
    <section 
      id="about-advantages" 
      className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100"
    >
      {/* Dynamic background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
        }}
      >
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1.5 bg-yellow-100 text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-brand-yellow/30">
            Diferencial Competitivo
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            Nuestra Ventaja Injusta
          </h2>
          <p className="text-slate-600 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            En un mercado sobresaturado de aplicaciones genéricas y envíos automatizados sin rostro, nosotros decidimos ir por el camino de la excelencia territorial. Nuestra &quot;Ventaja Injusta&quot; se basa en tres pilares innegociables:
          </p>
          <div className="h-1.5 w-12 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`bg-white p-8 rounded-3xl border ${adv.accent} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-5">
                  <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-2xl w-fit">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-lg font-subheading uppercase tracking-wide text-slate-900 font-semibold leading-tight flex items-center gap-2">
                    {adv.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                    {adv.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-50 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue">
                  <Sparkles className="h-3.5 w-3.5 text-brand-yellow" />
                  <span>Pilar de Calidad</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
