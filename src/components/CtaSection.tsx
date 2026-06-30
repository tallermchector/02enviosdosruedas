'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { MessageSquare, FileText, ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="cta-section" className="py-24 bg-white text-slate-900 relative z-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,236,1,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,54,165,0.04),transparent_40%)]" />
      
      <motion.div 
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >
        
        {/* Animated Badge */}
        <div className="inline-flex">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-blue text-white shadow-md">
            SOLUCIONES ESCALABLES 2026
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-none max-w-3xl mx-auto">
          ¿Listo para escalar la logística de tu E-Commerce?
        </h2>

        {/* Body */}
        <p className="text-slate-600 text-lg max-w-2xl mx-auto font-sans leading-relaxed">
          Olvidate de la gestión de paquetes y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="https://wa.me/542236602699"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp-link"
            className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white font-subheading tracking-wider text-lg uppercase px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.03] flex items-center justify-center gap-2.5 font-medium"
          >
            <MessageSquare className="h-5 w-5 fill-current" />
            Contactanos por WhatsApp
          </a>

          <Link
            href="/cotizar/lowcost"
            id="cta-rates-link"
            className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-subheading tracking-wider text-lg uppercase px-8 py-4 rounded-xl border border-slate-200 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <FileText className="h-5 w-5" />
            Ver Tarifas 2026
          </Link>
        </div>

        {/* Highlight footer stat line */}
        <p className="text-[10px] font-mono tracking-widest text-brand-blue font-bold uppercase pt-4">
          Atención comercial inmediata para PyMEs y Emprendedores en Mar del Plata.
        </p>

      </motion.div>
    </section>
  );
}
