import React from 'react';
import { Metadata } from 'next';
import PrivacyContent from './PrivacyContent';
import CarruselRedes from '@/src/components/layout/CarruselRedes';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Envíos DosRuedas Mar del Plata',
  description: 'Conocé cómo protegemos, procesamos y resguardamos tu información personal y los datos logísticos de tus despachos en Envíos DosRuedas.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Interactive privacy policy reader */}
      <PrivacyContent />

      {/* Unified social networking carousel loop */}
      <CarruselRedes />
    </main>
  );
}
