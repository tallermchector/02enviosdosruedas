'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Bike, ShieldCheck, Zap, ArrowUpRight, BarChart3 } from 'lucide-react';

export default function ServicesOverview() {
  const services = [
    {
      title: 'Envíos Express',
      description: 'Prioridad absoluta y certeza total. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación.',
      href: '/servicios/envios-express',
      icon: Zap,
      badge: 'URGENTE',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Envíos LowCost',
      description: 'Rentabilidad y ruteo masivo. Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega en el día.',
      href: '/servicios/envios-lowcost',
      icon: Bike,
      badge: 'ECONÓMICO',
      color: 'from-brand-blue to-blue-800',
    },
    {
      title: 'Envíos Flex (MercadoLibre)',
      description: 'Potenciá tu reputación al máximo. Somos expertos en MercadoLibre. Cumplimos tus acuerdos de nivel de servicio (SLAs) Same-Day.',
      href: '/servicios/enviosflex',
      icon: ShieldCheck,
      badge: 'INTEGRACIÓN FLEX',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      title: 'E-Commerce & 3PL',
      description: 'Tercerización y cuentas corrientes. Soluciones escalables para PyMEs con facturación mensual centralizada.',
      href: '/servicios/plan-emprendedores',
      icon: BarChart3,
      badge: 'PYMES & CORPORATIVO',
      color: 'from-slate-700 to-slate-800',
    },
  ];

  return (
    <section id="services-overview" className="py-24 bg-brand-blue border-y border-blue-900/40 relative overflow-hidden">
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
          <span className="px-3 py-1 bg-brand-yellow text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block shadow-sm">
            Nuestros Servicios
          </span>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            Soluciones Logísticas
          </h2>
          <div className="h-1 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 rounded-2xl bg-slate-50 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase bg-slate-100 text-slate-500 border border-slate-200/50">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display uppercase tracking-tight text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed font-sans mb-8">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 group-hover:text-brand-blue transition-colors">
                    Ver especificaciones de servicio
                  </span>
                  <Link 
                    href={service.href}
                    className="h-11 w-11 rounded-xl bg-slate-50 text-slate-700 hover:text-white hover:bg-brand-blue flex items-center justify-center transition-all group-hover:translate-x-1"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
