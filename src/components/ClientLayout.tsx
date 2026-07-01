'use client';

import React from 'react';
import OptimizedHeader from './layout/OptimizedHeader';
import OptimizedFooter from './layout/OptimizedFooter';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OptimizedHeader />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <OptimizedFooter />
    </>
  );
}
