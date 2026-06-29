'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import OptimizedHeader from './OptimizedHeader';
import OptimizedFooter from './OptimizedFooter';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      {isHome ? <OptimizedHeader /> : <Navbar />}
      <main className={`flex-grow ${isHome ? 'pt-0' : 'pt-20'}`}>
        {children}
      </main>
      {isHome ? <OptimizedFooter /> : <Footer />}
    </>
  );
}
