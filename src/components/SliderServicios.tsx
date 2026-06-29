'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bike, Shield, Eye, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SliderServicios() {
  const slides = [
    {
      title: 'Agilidad Urbana',
      subtitle: 'Tránsito burlado con agilidad',
      desc: 'Nuestras motocicletas evitan retrasos por tráfico urbano y acceden a cualquier sector de Mar del Plata rápidamente.',
      icon: Bike,
    },
    {
      title: 'Trazabilidad Inteligente',
      subtitle: 'Seguimiento constante',
      desc: 'Accedé a herramientas digitales para monitorear el estado de cada despacho y estar siempre al tanto.',
      icon: Smartphone,
    },
    {
      title: 'Custodia Total',
      subtitle: 'Máxima seguridad',
      desc: 'Garantizamos que cada paquete se manipule con cuidado absoluto y llegue en perfectas condiciones a destino.',
      icon: Shield,
    },
    {
      title: 'Transparencia Absoluta',
      subtitle: 'Soporte constante',
      desc: 'Comunicación clara, reportes y cotizaciones claras desde el primer momento sin costos ocultos.',
      icon: Eye,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const ActiveIcon = slides[current].icon;

  return (
    <section id="slider-servicios" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,54,165,0.4),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,236,1,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="px-3 py-1 bg-white/10 text-brand-yellow rounded-full text-xs font-bold uppercase tracking-widest inline-block">
              Innovación en Distribución
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white">
              SOLUCIONES A MEDIDA
            </h2>
            <p className="text-blue-100/80 text-lg leading-relaxed font-sans max-w-2xl">
              Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real en un mercado en constante evolución.
            </p>
          </div>
          
          <div className="lg:col-span-4 flex justify-start lg:justify-end gap-3">
            <button
              onClick={handlePrev}
              className="h-12 w-12 rounded-full border border-white/20 hover:border-brand-yellow hover:text-brand-yellow flex items-center justify-center transition-colors focus:outline-none"
              title="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="h-12 w-12 rounded-full border border-white/20 hover:border-brand-yellow hover:text-brand-yellow flex items-center justify-center transition-colors focus:outline-none"
              title="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Slide Showcase */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 min-h-[300px] flex items-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full"
            >
              <div className="md:col-span-4 flex justify-center">
                <div className="h-24 w-24 rounded-2xl bg-brand-yellow text-brand-blue flex items-center justify-center shadow-lg">
                  <ActiveIcon className="h-12 w-12" />
                </div>
              </div>
              
              <div className="md:col-span-8 space-y-4 text-center md:text-left">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-yellow">
                  {slides[current].subtitle}
                </span>
                <h3 className="text-3xl font-display uppercase tracking-wider text-white">
                  {slides[current].title}
                </h3>
                <p className="text-blue-100 font-sans text-sm sm:text-base leading-relaxed max-w-xl">
                  {slides[current].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bullet Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                idx === current ? 'w-8 bg-brand-yellow' : 'w-2.5 bg-white/20 hover:bg-white/45'
              }`}
              title={`Ir a slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
