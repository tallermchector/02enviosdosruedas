'use client';

import React from 'react';
import { motion } from 'motion/react';
import { UploadCloud, Truck, Cpu, CheckSquare } from 'lucide-react';

export default function LowCostHowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Despacho',
      desc: 'Prepará tus pedidos y cargalos en nuestro sistema digital antes del horario límite de corte.',
      icon: UploadCloud,
    },
    {
      number: '02',
      title: 'Recolección',
      desc: 'Nuestro equipo retira todos tus paquetes agrupados en una sola visita ágil por tu local o depósito.',
      icon: Truck,
    },
    {
      number: '03',
      title: 'Ruteo',
      desc: 'Utilizamos algoritmos de ruteo masivo para trazar el recorrido más rápido y económico en la calle.',
      icon: Cpu,
    },
    {
      number: '04',
      title: 'Entrega',
      desc: 'Entregamos absolutamente todos tus paquetes en el transcurso del día, siempre antes de las 19:00 hs.',
      icon: CheckSquare,
    },
  ];

  return (
    <section 
      id="lowcost-how-it-works" 
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
            Paso a Paso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-slate-900">
            ¿Cómo Funciona?
          </h2>
          <p className="text-slate-500 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Un proceso simple, transparente y diseñado milimétricamente para maximizar tu productividad logística.
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
