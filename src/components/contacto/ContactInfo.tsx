'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, Mail, Facebook, Instagram, Clock, MapPin, ShieldCheck 
} from 'lucide-react';

export default function ContactInfo() {
  const contactChannels = [
    {
      label: 'WhatsApp',
      value: '223-660-2699',
      href: 'https://wa.me/542236602699',
      icon: MessageSquare,
      color: 'hover:border-emerald-500 hover:text-emerald-600',
      iconBg: 'bg-emerald-50 text-emerald-600',
    },
    {
      label: 'Email Principal',
      value: 'matiascejas@enviosdosruedas.com',
      href: 'mailto:matiascejas@enviosdosruedas.com',
      icon: Mail,
      color: 'hover:border-brand-blue hover:text-brand-blue',
      iconBg: 'bg-blue-50 text-brand-blue',
    },
    {
      label: 'Instagram',
      value: '@enviosdosruedas',
      href: 'https://instagram.com/enviosdosruedas',
      icon: Instagram,
      color: 'hover:border-pink-500 hover:text-pink-600',
      iconBg: 'bg-pink-50 text-pink-600',
    },
    {
      label: 'Facebook',
      value: 'Envíos DosRuedas',
      href: 'https://facebook.com/enviosdosruedas',
      icon: Facebook,
      color: 'hover:border-blue-600 hover:text-blue-700',
      iconBg: 'bg-blue-50 text-blue-700',
    },
  ];

  const hours = [
    { days: 'Lunes a Viernes', time: '9:00 - 18:00 hs' },
    { days: 'Sábados', time: '10:00 - 15:00 hs' },
    { days: 'Domingos', time: 'Cerrado', isClosed: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      className="space-y-8 h-full flex flex-col justify-between"
    >
      {/* Contact Channels Grid */}
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md space-y-6">
        <h3 className="text-xl font-display uppercase tracking-tight text-slate-900 flex items-center gap-2">
          Canales Rápidos
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactChannels.map((chan) => {
            const Icon = chan.icon;
            return (
              <a
                key={chan.label}
                href={chan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 border border-slate-100 rounded-2xl flex items-center gap-3 transition-all duration-300 group bg-slate-50/30 ${chan.color}`}
              >
                <div className={`p-3 rounded-xl transition-colors ${chan.iconBg}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-sans leading-none mb-1">
                    {chan.label}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold font-mono truncate">
                    {chan.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Operating Hours */}
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md space-y-6">
        <h3 className="text-xl font-display uppercase tracking-tight text-slate-900 flex items-center gap-2">
          <Clock className="h-5 w-5 text-brand-blue" />
          Horarios de Atención
        </h3>

        <div className="space-y-3">
          {hours.map((item) => (
            <div 
              key={item.days} 
              className="flex justify-between items-center py-2.5 border-b border-slate-50 last:border-b-0"
            >
              <span className="text-sm font-medium text-slate-600 font-sans">{item.days}</span>
              <span 
                className={`text-sm font-bold uppercase tracking-wider font-mono ${
                  item.isClosed ? 'text-rose-500 bg-rose-50 px-2 py-0.5 rounded-md text-xs' : 'text-slate-800'
                }`}
              >
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Coverage & Interactive Map */}
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md space-y-6 flex-grow flex flex-col">
        <div className="space-y-2">
          <h3 className="text-xl font-display uppercase tracking-tight text-slate-900 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-brand-blue" />
            Nuestra Zona de Cobertura
          </h3>
          <p className="text-sm text-slate-500 font-sans leading-relaxed">
            Operamos en toda la ciudad de Mar del Plata, listos para llegar a donde nos necesites con ruteos eficientes y envíos en el día.
          </p>
        </div>

        {/* Map iframe */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-150 h-64 sm:h-72 w-full mt-2 flex-grow min-h-[220px]">
          <iframe
            title="Mapa de cobertura Mar del Plata"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-57.6548%2C-38.0700%2C-57.5146%2C-37.9350&amp;layer=mapnik"
            className="absolute inset-0 w-full h-full border-0"
            style={{ filter: 'grayscale(0.1) contrast(1.05)' }}
            loading="lazy"
          />
          
          {/* Overlay Tag */}
          <div className="absolute bottom-3 left-3 bg-brand-blue text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg border border-white/20 flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-yellow" />
            Cobertura Total Mar del Plata
          </div>
        </div>
      </div>
    </motion.div>
  );
}
