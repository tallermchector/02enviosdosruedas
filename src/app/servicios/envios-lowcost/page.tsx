import React from 'react';
import { Metadata } from 'next';
import LowCostHero from '@/src/components/servicios/lowcost/LowCostHero';
import LowCostFeatures from '@/src/components/servicios/lowcost/LowCostFeatures';
import LowCostPricing from '@/src/components/servicios/lowcost/LowCostPricing';
import LowCostBenefits from '@/src/components/servicios/lowcost/LowCostBenefits';
import LowCostHowItWorks from '@/src/components/servicios/lowcost/LowCostHowItWorks';
import CarruselRedes from '@/src/components/layout/CarruselRedes';

export const metadata: Metadata = {
  title: 'Envíos LowCost Rentables | Envíos DosRuedas Mar del Plata',
  description: 'Optimizá tus ruteos urbanos diarios en Mar del Plata. Envíos LowCost económicos, con entrega garantizada en el día y tarifas altamente competitivas para PyMEs.',
};

export default function EnviosLowCostPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Header Block */}
      <LowCostHero />

      {/* Ruteo masivo features */}
      <LowCostFeatures />

      {/* 2026 Zone Pricing rates table */}
      <LowCostPricing />

      {/* Structured logistics benefits grid */}
      <LowCostBenefits />

      {/* Step by step operation diagram */}
      <LowCostHowItWorks />

      {/* Unified social network community channel loop */}
      <CarruselRedes />
    </main>
  );
}
