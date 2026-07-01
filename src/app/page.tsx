import type { Metadata } from 'next';
import HeroAnimado from '@/src/components/home/HeroAnimado';
import VisionSection from '@/src/components/home/VisionSection';
import ServicesOverview from '@/src/components/home/ServicesOverview';
import SliderServicios from '@/src/components/home/SliderServicios';
import EmprendedoresHome from '@/src/components/home/EmprendedoresHome';
import CtaSection from '@/src/components/home/CtaSection';
import CarruselRedes from '@/src/components/layout/CarruselRedes';

export const metadata: Metadata = {
  title: 'Mensajería y Logística E-commerce en Mar del Plata | Envíos DosRuedas',
  description: 'Especialistas en logística e-commerce y última milla en Mar del Plata. Envíos en el día, Flex y soluciones 3PL para potenciar tu negocio local.',
};

export default function Home() {
  return (
    <div id="home-page-container" className="w-full">
      {/* 1. Animated Hero Presentation */}
      <HeroAnimado />

      {/* 2. Brand Vision Segment */}
      <VisionSection />

      {/* 3. Logistics Overview Solutions */}
      <ServicesOverview />

      {/* 4. Custom Tailored Solutions Slideshow */}
      <SliderServicios />

      {/* 5. Entrepreneurs and Businesses Solutions Panel */}
      <EmprendedoresHome />

      {/* 6. Call to Action High Conversion Segment */}
      <CtaSection />

      {/* 7. Social Community Integration */}
      <CarruselRedes />
    </div>
  );
}
