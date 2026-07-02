'use client';

import React, { useState, useEffect } from 'react';
import OptimizedHeader from './layout/OptimizedHeader';
import OptimizedFooter from './layout/OptimizedFooter';
import { CinematicHero } from './ui/cinematic-hero';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Only show preloader once per user session
    const hasVisited = sessionStorage.getItem('visited-cinematic');
    if (!hasVisited) {
      setShowPreloader(true);
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem('visited-cinematic', 'true');
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
      <OptimizedFooter />
    </>
  );
}
