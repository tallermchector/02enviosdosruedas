'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Container, PackageCheck, Receipt, Landmark, BarChart3, Users, Clock } from 'lucide-react';

export default function EmprendedoresFeatures() {
  const features = [
    {
      title: 'Soluciones 3PL',
      desc: 'Tercerizá tu logística integral con nosotros. Almacenamos, preparamos de forma minuciosa y enviamos todos tus productos directamente.',
      icon: Container,
    },
    {
      title: 'Fulfillment',
      desc: 'Picking y packing ágil y profesional con altos estándares de empaquetado. Tu mercadería segura y lista para salir en minutos.',
      icon: PackageCheck,
    },
    {
      title: 'Cuentas Corrientes',
      desc: 'Esquemas de facturación mensual flexible y cuentas corrientes centralizadas adaptadas al flujo de caja de tu empresa o PyME.',
      icon: Receipt,
    },
  ];

  const stats = [
    { value: '99.8%', label: 'Entregas Efectivas', icon: BarChart3 },
    { value: '+150', label: 'Clientes Corporativos', icon: Users },
    { value: '100%', label: 'SLA Cumplido', icon: Clock },
  ];

  return (
    <section 
      id="emprendedores-features" 
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
              Soluciones Corporativas
            </span>
            
            <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-none">
              Logística 3PL <br />
              <span className="text-brand-blue">para Emprendedores</span>
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed font-sans">
              Somos mucho más que una empresa de envíos tradicional; nos convertimos en el departamento de logística estratégico de tu negocio. Delegá el almacenamiento, empaquetado y distribución en manos de expertos y enfocate de lleno en hacer crecer tu marca.
            </p>

            <div className="pt-4 flex items-center gap-3.5 text-xs text-brand-blue font-bold uppercase tracking-wider">
              <Landmark className="h-5 w-5 text-brand-yellow" />
              <span>ALIANZA ESTRATÉGICA DE LARGO PLAZO</span>
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

        {/* Stats Section Panel */}
        <div className="mt-20 border-t border-slate-100 pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-slate-50/40 border border-slate-100/70 rounded-3xl p-6 flex items-center gap-5 justify-center sm:justify-start"
                >
                  <div className="p-3.5 bg-brand-yellow/10 text-brand-blue rounded-2xl shrink-0">
                    <Icon className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <span className="block text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-brand-blue">
                      {stat.value}
                    </span>
                    <span className="block text-xs uppercase tracking-wider font-subheading text-slate-500 font-semibold">
                      {stat.label}
                    </span>
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
