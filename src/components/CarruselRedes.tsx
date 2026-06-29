'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function CarruselRedes() {
  const networks = [
    {
      name: 'Instagram',
      handle: '@enviosdosruedas',
      desc: 'Novedades diarias',
      url: '/nosotros/nuestras-redes',
      icon: Instagram,
      color: 'bg-[#E1306C]/10 text-[#E1306C] border-[#E1306C]/25',
    },
    {
      name: 'Facebook',
      handle: 'Envíos DosRuedas',
      desc: 'Comunidad activa',
      url: '/nosotros/nuestras-redes',
      icon: Facebook,
      color: 'bg-[#1877F2]/10 text-[#1877F2] border-[#1877F2]/25',
    },
    {
      name: 'WhatsApp',
      handle: '+54 223 660-2699',
      desc: 'Atención inmediata',
      url: 'https://wa.me/542236602699',
      icon: MessageSquare,
      color: 'bg-[#25D366]/10 text-[#25D366] border-[#25D366]/25',
    },
  ];

  return (
    <section id="carrusel-redes" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Segment */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block">
            Nuestra Comunidad
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            SIGUE NUESTRO MOVIMIENTO
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            Únete a nuestra comunidad digital y mantente al día con las últimas noticias de logística en Mar del Plata.
          </p>
          <div className="h-1 w-12 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Networks Grid/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {networks.map((net, index) => {
            const Icon = net.icon;
            const isExternal = net.url.startsWith('http');
            return (
              <motion.a
                key={net.name}
                href={net.url}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-8 rounded-3xl bg-white border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group ${net.color}`}
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="p-4 rounded-2xl bg-current/5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-current transition-colors">
                      {net.desc}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-display uppercase tracking-tight text-slate-900">
                      {net.name}
                    </h3>
                    <p className="text-slate-500 font-mono text-xs mt-1">
                      {net.handle}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-slate-800">
                  <span className="text-xs font-sans font-semibold group-hover:text-current transition-colors">
                    {isExternal ? 'Contactar ahora' : 'Ver perfil'}
                  </span>
                  <div className="h-9 w-9 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-current group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
