'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { MessageSquare, Mail, HelpCircle, ArrowRight } from 'lucide-react';

export default function FaqCta() {
  return (
    <section 
      id="faq-cta" 
      className="py-20 bg-brand-blue text-white relative overflow-hidden border-t border-blue-200/40"
    >
      {/* Dynamic Background Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,236,1,0.04),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_75%,rgba(255,255,255,0.03),transparent_40%)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="bg-white text-slate-900 rounded-3xl p-8 sm:p-12 border border-brand-yellow shadow-xl relative overflow-hidden text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
          }}
        >
          {/* Abstract background logo */}
          <div className="absolute right-0 bottom-0 translate-y-8 translate-x-8 text-slate-100 pointer-events-none -z-10">
            <HelpCircle className="h-64 w-64 text-slate-50" />
          </div>

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            
            <span className="px-3.5 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block">
              Soporte Humano 24/7
            </span>
            
            <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-brand-blue leading-tight">
              ¿No encontraste lo que buscabas?
            </h3>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              No te preocupes. Nuestro equipo de soporte está totalmente listo para ayudarte en tiempo real con cualquier duda o consulta específica que tengas sobre nuestros servicios de mensajería y delivery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/5492236602699?text=Hola,%20tengo%20una%20consulta%20que%20no%20encontr%C3%A9%20en%20las%20FAQ"
                target="_blank"
                rel="noopener noreferrer"
                id="faq-cta-whatsapp"
                className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/95 text-white font-subheading tracking-wider text-sm uppercase px-8 py-4 rounded-xl shadow-md transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2.5 font-semibold"
              >
                <MessageSquare className="h-4.5 w-4.5 fill-current" />
                Hablá por WhatsApp
              </a>

              <Link
                href="/contacto"
                id="faq-cta-contacto"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-subheading tracking-wider text-sm uppercase px-8 py-4 rounded-xl border border-slate-200 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="h-4.5 w-4.5 text-brand-blue" />
                Contacto Directo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
