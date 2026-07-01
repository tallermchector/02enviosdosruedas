import React from 'react';
import { Metadata } from 'next';
import EmprendedoresHero from '@/src/components/servicios/emprendedores/EmprendedoresHero';
import EmprendedoresFeatures from '@/src/components/servicios/emprendedores/EmprendedoresFeatures';
import EmprendedoresBenefits from '@/src/components/servicios/emprendedores/EmprendedoresBenefits';
import EmprendedoresPricing from '@/src/components/servicios/emprendedores/EmprendedoresPricing';
import CarruselRedes from '@/src/components/layout/CarruselRedes';

export const metadata: Metadata = {
  title: 'Logística 3PL y Plan Emprendedores | Envíos DosRuedas Mar del Plata',
  description: 'Solución integral de almacenamiento, picking, packing y fulfillment para PyMEs y e-commerce en Mar del Plata. Alquilá espacio en nuestro depósito 3PL propio.',
};

export default function PlanEmprendedoresPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Header block */}
      <EmprendedoresHero />

      {/* Corporate 3PL logistics features */}
      <EmprendedoresFeatures />

      {/* Strategic business benefits grid */}
      <EmprendedoresBenefits />

      {/* Premium custom e-commerce plans and 3PL warehousing prices */}
      <EmprendedoresPricing />

      {/* Unified social network media slider loop */}
      <CarruselRedes />
    </main>
  );
}
