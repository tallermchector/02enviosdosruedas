import React from 'react';
import { Metadata } from 'next';
import FlexHero from '@/src/components/servicios/flex/FlexHero';
import FlexFeatures from '@/src/components/servicios/flex/FlexFeatures';
import FlexBenefits from '@/src/components/servicios/flex/FlexBenefits';
import FlexPricing from '@/src/components/servicios/flex/FlexPricing';
import FlexHowItWorks from '@/src/components/servicios/flex/FlexHowItWorks';
import FlexRequirements from '@/src/components/servicios/flex/FlexRequirements';
import CarruselRedes from '@/src/components/layout/CarruselRedes';

export const metadata: Metadata = {
  title: 'Envíos Flex MercadoLibre | Envíos DosRuedas Mar del Plata',
  description: 'Optimizá tus entregas Same-Day en Mar del Plata. Socios logísticos certificados para Mercado Envíos Flex. Medidor de reputación siempre en verde y envíos rápidos.',
};

export default function EnviosFlexPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Header Block */}
      <FlexHero />

      {/* MercadoLibre expert key features */}
      <FlexFeatures />

      {/* Seller value-added benefits grid */}
      <FlexBenefits />

      {/* Pricing levels and weather discounts */}
      <FlexPricing />

      {/* Step by step streamlined workflow */}
      <FlexHowItWorks />

      {/* Active prerequisites for starting */}
      <FlexRequirements />

      {/* Unified social community channel loop */}
      <CarruselRedes />
    </main>
  );
}
