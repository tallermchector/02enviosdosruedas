'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Gift, Bell, Heart, MessageSquare, CheckCircle } from 'lucide-react';

export default function NetworksBenefits() {
  const benefits = [
    {
      title: 'Ofertas Exclusivas',
      desc: 'Accedé a descuentos quincenales y promociones relámpago de delivery diseñadas en exclusiva para toda nuestra comunidad de seguidores.',
      icon: Gift,
      color: 'bg-blue-50/50 border-blue-100 text-brand-blue',
    },
    {
      title: 'Actualizaciones',
      desc: 'Sé el primero en enterarte de la incorporación de nuevos servicios urbanos, ampliación de zonas y cambios de horarios importantes.',
      icon: Bell,
      color: 'bg-yellow-50/40 border-yellow-100 text-brand-blue',
    },
    {
      title: 'Comunidad Activa',
      desc: 'Formá parte de nuestro grupo diario de clientes locales, compartiendo opiniones y enriqueciendo el servicio con tu feedback directo.',
      icon: Heart,
      color: 'bg-pink-50/50 border-pink-100 text-pink-600',
    },
    {
      title: 'Soporte Ágil',
      desc: 'Obtené contención y respuestas rápidas a consultas logísticas generales de bultos directamente por medio de mensajes privados directos.',
      icon: MessageSquare,
      color: 'bg-emerald-50/50 border-emerald-100 text-emerald-600',
    },
  ];

  return (
    <section 
      id="networks-benefits" 
      className="py-24 bg-white relative z-10 overflow-hidden"
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
          <span className="px-3.5 py-1.5 bg-blue-100 text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-blue-200/50">
            Valores de Comunidad
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            Beneficios de Formar Parte
          </h2>
          <p className="text-slate-500 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Descubrí por qué cientos de marplatenses y PyMEs locales ya nos siguen activamente en nuestros canales de difusión oficiales.
          </p>
          <div className="h-1.5 w-12 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Benefits Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50/40 hover:bg-white p-6 rounded-3xl border border-slate-100/80 hover:border-brand-blue/10 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className={`p-3 rounded-2xl w-fit ${benefit.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-sm font-subheading uppercase tracking-wider font-semibold text-slate-900 leading-tight">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-bold uppercase text-slate-400">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-yellow shrink-0" />
                  <span>Beneficio Oficial</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
