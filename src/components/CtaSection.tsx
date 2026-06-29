'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { MessageSquare, FileText, ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="cta-section" className="py-24 relative overflow-hidden gradient-blue text-white">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,236,1,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,54,165,0.2),transparent_40%)]" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Animated Badge */}
        <div className="inline-flex">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue shadow-md">
            SOLUCIONES ESCALABLES 2026
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-none max-w-3xl mx-auto">
          ¿Listo para escalar la logística de tu E-Commerce?
        </h2>

        {/* Body */}
        <p className="text-blue-100 text-lg max-w-2xl mx-auto font-sans leading-relaxed">
          Olvidate de la gestión de paquetes y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="https://wa.me/542236602699"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp-link"
            className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue font-subheading tracking-wider text-lg uppercase px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.03] flex items-center justify-center gap-2.5 font-medium"
          >
            <MessageSquare className="h-5 w-5 fill-current" />
            Contactanos por WhatsApp
          </a>

          <Link
            href="/cotizar/lowcost"
            id="cta-rates-link"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-subheading tracking-wider text-lg uppercase px-8 py-4 rounded-xl border border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <FileText className="h-5 w-5" />
            Ver Tarifas 2026
          </Link>
        </div>

        {/* Highlight footer stat line */}
        <p className="text-[10px] font-mono tracking-widest text-blue-300 uppercase pt-4">
          Atención comercial inmediata para PyMEs y Emprendedores en Mar del Plata.
        </p>

      </div>
    </section>
  );
}
