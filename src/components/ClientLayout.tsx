'use client';

import React, { useState, useEffect } from 'react';
import OptimizedHeader from './layout/OptimizedHeader';
import OptimizedFooter from './layout/OptimizedFooter';
import { CinematicHero } from './ui/cinematic-hero';
import { CarruselRedes } from './layout/Carrusel-Redes';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Only show preloader once per user session
    try {
      const hasVisited = sessionStorage.getItem('visited-cinematic');
      if (!hasVisited) {
        setShowPreloader(true);
      }
    } catch (e) {
      console.warn('sessionStorage not available:', e);
    }
  }, []);

  const handleComplete = () => {
    try {
      sessionStorage.setItem('visited-cinematic', 'true');
    } catch (e) {
      console.warn('sessionStorage not available:', e);
    }
    setShowPreloader(false);
  };

  return (
    <>
      {showPreloader && (
        <CinematicHero onComplete={handleComplete} />
      )}
      <OptimizedHeader />
      <main className="flex-grow pt-[72px]">
        {children}
      </main>
      <CarruselRedes />
      <OptimizedFooter />
    </>
  );
}
