import React from 'react';
import { Metadata } from 'next';
import ContactForm from '@/src/components/contacto/ContactForm';
import ContactInfo from '@/src/components/contacto/ContactInfo';
import CarruselRedes from '@/src/components/layout/CarruselRedes';
import { MailOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto Comercial | Envíos DosRuedas Mar del Plata',
  description: '¿Listo para escalar la logística de tu e-commerce? Hablá con un asesor comercial de Envíos DosRuedas y diseñemos un esquema tarifario a tu medida.',
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28">
      {/* Upper Hero Section */}
      <section 
        id="contacto-hero" 
        className="relative bg-brand-blue text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Decorative background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,236,1,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.04),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-yellow" />

        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-yellow border border-white/10 text-xs font-bold uppercase tracking-widest mb-2 animate-pulse">
            <MailOpen className="h-4 w-4" />
            Asistencia Personalizada
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight max-w-4xl mx-auto leading-none">
            Contacto Comercial
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto font-sans leading-relaxed">
            ¿Listo para escalar tu negocio? Hablá con un asesor logístico y diseñemos un esquema tarifario a tu medida.
          </p>
        </div>
      </section>

      {/* Main Form and Info Layout */}
      <section id="contacto-main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Contact Form (5 Cols in Desk) */}
          <div className="lg:col-span-5 h-full">
            <ContactForm />
          </div>

          {/* Column 2: Details & Coverage (7 Cols in Desk) */}
          <div className="lg:col-span-7 h-full">
            <ContactInfo />
          </div>

        </div>
      </section>

      {/* Shared Social Banner segment */}
      <CarruselRedes />
    </main>
  );
}
