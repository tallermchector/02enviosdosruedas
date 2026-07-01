'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Route, Clock, Landmark, Coins } from 'lucide-react';

export default function LowCostFeatures() {
  const features = [
    {
      title: 'Eficiencia en Ruteo',
      desc: 'Ruteo diario masivo optimizado de última milla. No se elige rango horario para maximizar la eficiencia logística y bajar costos.',
      icon: Route,
    },
    {
      title: 'Corte y Entrega',
      desc: 'Pedidos ingresados antes de las 13:00 hs se entregan de forma totalmente garantizada antes de las 19:00 hs del mismo día.',
      icon: Clock,
    },
    {
      title: 'Tarifa Económica',
      desc: 'La mejor tarifa de Mar del Plata para envíos masivos agrupados, ruteos continuos y entregas a clientes finales.',
      icon: Coins,
    },
  ];

  return (
    <section 
      id="lowcost-features" 
      className="py-24 bg-white relative z-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Header column (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="px-3 py-1.5 bg-blue-100 text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-blue-200/50">
              Máxima Rentabilidad
            </span>
            
            <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-none">
              Envíos LowCost: <br />
              <span className="text-brand-blue">Máxima Eficiencia</span>
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed font-sans">
              Nuestro servicio LowCost está diseñado para el ruteo diario masivo. Optimizamos nuestras rutas agrupando despachos para ofrecer la tarifa más competitiva, garantizando la entrega en el día para pedidos ingresados antes del horario de corte.
            </p>

            <div className="pt-4 flex items-center gap-3.5 text-xs text-brand-blue font-bold uppercase tracking-wider">
              <Landmark className="h-5 w-5 text-brand-yellow" />
              <span>LOGÍSTICA PREDECIBLE PARA NEGOCIOS</span>
            </div>
          </div>

          {/* Features columns (Right) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.5 }}
                  className="bg-slate-50/70 hover:bg-white p-6 rounded-3xl border border-slate-100/80 hover:border-brand-blue/10 hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row gap-5 items-start"
                >
                  <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-2xl shrink-0">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-subheading uppercase tracking-wider text-slate-900 leading-tight">
                      {feat.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
