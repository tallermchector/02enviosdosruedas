import React from 'react';
import { Metadata } from 'next';
import ExpressHero from '@/src/components/servicios/express/ExpressHero';
import ExpressFeatures from '@/src/components/servicios/express/ExpressFeatures';
import ExpressPricing from '@/src/components/servicios/express/ExpressPricing';
import ExpressUseCases from '@/src/components/servicios/express/ExpressUseCases';
import CarruselRedes from '@/src/components/layout/CarruselRedes';

export const metadata: Metadata = {
  title: 'Envíos Express Inmediatos | Envíos DosRuedas Mar del Plata',
  description: 'La solución premium para operaciones de alta criticidad horaria en Mar del Plata. Vos elegís el rango exacto de entrega con certeza absoluta en menos de 2 horas.',
};

export default function EnviosExpressPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Header Segment */}
      <ExpressHero />

      {/* Value Propositions / Features */}
      <ExpressFeatures />

      {/* 2026 Zone Pricing Rates & Dynamic Cotizador Hook */}
      <ExpressPricing />

      {/* Common Use Case Scenarios */}
      <ExpressUseCases />

      {/* Social Network Media Loop Banner */}
      <CarruselRedes />
    </main>
  );
}
