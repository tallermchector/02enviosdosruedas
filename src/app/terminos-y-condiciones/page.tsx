import React from 'react';
import { Metadata } from 'next';
import TermsContent from './TermsContent';
import CarruselRedes from '@/src/components/layout/CarruselRedes';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Envíos DosRuedas Mar del Plata',
  description: 'Leé detenidamente las pautas operativas, obligaciones del usuario, tarifas, formas de pago y limitaciones de responsabilidad de Envíos DosRuedas.',
};

export default function TerminosCondicionesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Interactive terms and conditions reader */}
      <TermsContent />

      {/* Unified social networking carousel loop */}
      <CarruselRedes />
    </main>
  );
}
