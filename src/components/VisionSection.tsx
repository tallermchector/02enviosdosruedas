'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Clock, ShieldCheck, Users, Trophy, Truck } from 'lucide-react';

export default function VisionSection() {
  const stats = [
    { value: '+5.000', label: 'Confianza local comprobada', icon: Users },
    { value: '7 Años', label: 'Innovación constante en última milla', icon: Trophy },
    { value: 'Flota Exclusiva', label: 'Motocicletas dedicadas para máxima agilidad urbana', icon: Truck },
  ];

  return (
    <section id="vision-section" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Information Block */}
          <div className="lg:col-span-6 space-y-6">
            <span className="px-3 py-1 bg-blue-50 text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block">
              Partner Logístico Especializado
            </span>
            
            <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-none">
              Nuestra Visión Logística
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed font-sans max-w-xl">
              Transformamos tus costos fijos en solutions flexibles que acompañan el crecimiento de tu negocio.
            </p>

            <div className="space-y-4 pt-4">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-xl shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-subheading uppercase tracking-wider text-slate-900 leading-none mb-1">
                    Entregas a Tiempo
                  </h4>
                  <p className="text-sm text-slate-500 font-sans">
                    Puntualidad garantizada en cada envío.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-xl shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-subheading uppercase tracking-wider text-slate-900 leading-none mb-1">
                    Envíos Seguros
                  </h4>
                  <p className="text-sm text-slate-500 font-sans">
                    Protección total de tus paquetes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Deck Block */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                    i === 2 ? 'sm:col-span-2 bg-slate-50' : 'bg-white'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-brand-blue/5 text-brand-blue">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-display text-brand-blue uppercase leading-none mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans uppercase tracking-wider leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
