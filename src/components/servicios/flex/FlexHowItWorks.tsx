'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Truck, CheckSquare, Sparkles } from 'lucide-react';

export default function FlexHowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Vendés',
      desc: 'Recibís una venta con Mercado Envíos Flex en tu panel tradicional de vendedor de MercadoLibre.',
      icon: ShoppingBag,
    },
    {
      number: '02',
      title: 'Retiramos',
      desc: 'Coordinamos y pasamos a retirar todos los paquetes por tu local o depósito en el horario de corte acordado.',
      icon: Truck,
    },
    {
      number: '03',
      title: 'Entregamos',
      desc: 'Nuestra flota especializada distribuye eficientemente los paquetes en Mar del Plata durante la tarde.',
      icon: CheckSquare,
    },
    {
      number: '04',
      title: 'Calificás',
      desc: 'Tu cliente recibe el paquete en el mismo día y tu reputación de MercadoLíder sube automáticamente.',
      icon: Sparkles,
    },
  ];

  return (
    <section 
      id="flex-how-it-works" 
      className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100"
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
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="px-3.5 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block shadow-accent-sm">
            Logística Sincronizada
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-slate-900">
            Logística sin fricciones
          </h2>
          <p className="text-slate-500 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Integramos tu flujo diario de ventas con nuestra red de distribución de última milla en tiempo real.
          </p>
          <div className="h-1.5 w-12 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Steps Grid (4 columns with visual connectors) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="absolute top-[2.2rem] left-12 right-12 h-0.5 bg-slate-200/60 hidden lg:block -z-10" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm relative flex flex-col items-center text-center group hover:shadow-md transition-all duration-300"
              >
                {/* Floating step number */}
                <span className="absolute -top-3 -left-3 bg-brand-yellow text-brand-blue font-bold text-xs font-mono tracking-widest px-3 py-1 rounded-full border border-white shadow-sm">
                  {step.number}
                </span>

                {/* Circle Icon wrapper */}
                <div className="h-16 w-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-subheading uppercase tracking-wider text-slate-900 font-semibold leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                    {step.desc}
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
