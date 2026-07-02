'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Calculator } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import { Sparkles } from '@/src/components/ui/sparkles';
import { TimelineContent } from '@/src/components/ui/timeline-animation';
import { VerticalCutReveal } from '@/src/components/ui/vertical-cut-reveal';
import NumberFlow from '@number-flow/react';

export default function ExpressPricing() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const zones = [
    {
      name: 'Zona 1',
      scope: 'Radio céntrico',
      price: '$3.700',
      description: 'Ideal para entregas inmediatas en el centro.',
      bullets: ['Elegís rango horario', 'Mínimo 2hs anticipación', 'Seguimiento en tiempo real', 'Custodia digital'],
      highlight: false,
    },
    {
      name: 'Zona 2',
      scope: 'Periferia cercana',
      price: '$4.600',
      description: 'Cobertura extendida con rapidez.',
      bullets: ['Elegís rango horario', 'Mínimo 2hs anticipación', 'Seguimiento en tiempo real', 'Custodia digital'],
      highlight: true,
    },
    {
      name: 'Zona 3',
      scope: 'Zonas alejadas',
      price: '$6.100',
      description: 'Llegamos a donde otros no.',
      bullets: ['Elegís rango horario', 'Mínimo 2hs anticipación', 'Seguimiento en tiempo real', 'Custodia digital'],
      highlight: false,
    },
    {
      name: 'Zona 4',
      scope: 'Límites de ciudad',
      price: '$8.200',
      description: 'Máxima cobertura urbana.',
      bullets: ['Elegís rango horario', 'Mínimo 2hs anticipación', 'Seguimiento en tiempo real', 'Custodia digital'],
      highlight: false,
    },
  ];

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <section 
      id="express-pricing" 
      className="py-24 bg-brand-blue relative overflow-hidden text-white border-b border-blue-900/60"
      ref={pricingRef}
    >
      {/* Background Sparkles overlay */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_85%)] opacity-30">
        <Sparkles
          density={1200}
          direction="bottom"
          speed={0.8}
          color="#FFFFFF"
          className="absolute inset-0 h-full w-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <TimelineContent
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            as="span"
            className="px-3.5 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block shadow-accent-sm"
          >
            Envíos Dos Ruedas
          </TimelineContent>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white flex justify-center">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.1}
              staggerFrom="first"
              containerClassName="justify-center"
            >
              Tarifas 2026 Envíos Express
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            as="p"
            className="text-blue-100 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed"
          >
            Consultá los precios actualizados para nuestro servicio premium con rango horario a elección.
          </TimelineContent>
          <div className="h-1.5 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Pricing Cards Grid (4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {zones.map((zone, idx) => {
            const isNumericPrice = zone.price.startsWith('$');
            const numericValue = isNumericPrice ? parseInt(zone.price.replace('$', '').replace('.', '')) : null;

            return (
              <TimelineContent
                key={zone.name}
                animationNum={2 + idx}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                as="div"
              >
                <Card
                  className={`rounded-3xl border flex flex-col justify-between h-full transition-all duration-300 group ${
                    zone.highlight
                      ? 'bg-gradient-to-b from-white via-white to-amber-50 text-slate-900 border-brand-yellow shadow-xl lg:scale-[1.03] relative z-20'
                      : 'bg-gradient-to-b from-white/5 to-white/[0.02] text-white border-white/10 hover:border-white/20 hover:bg-white/[0.08]'
                  }`}
                >
                  <CardHeader className="p-6 pb-2 text-left relative">
                    {zone.highlight && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-blue font-bold text-[9px] tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                        RECOMENDADO
                      </span>
                    )}
                    
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${zone.highlight ? 'text-brand-blue' : 'text-brand-yellow'}`}>
                        {zone.name}
                      </span>
                      <h3 className="text-lg font-display uppercase tracking-wider font-semibold mt-1">
                        {zone.scope}
                      </h3>
                    </div>

                    <div className="py-2">
                      {isNumericPrice && numericValue ? (
                        <div className="flex items-baseline">
                          <span className={`text-4xl font-display uppercase font-bold tracking-tight ${zone.highlight ? 'text-brand-blue' : 'text-brand-yellow'}`}>
                            $
                            <NumberFlow
                              value={numericValue}
                              format={{ minimumFractionDigits: 0 }}
                              className="inline-block"
                            />
                          </span>
                        </div>
                      ) : (
                        <span className={`text-4xl font-display uppercase font-bold tracking-tight ${zone.highlight ? 'text-brand-blue' : 'text-brand-yellow'}`}>
                          {zone.price}
                        </span>
                      )}
                      <span className={`text-xs opacity-65 font-sans block mt-1 ${zone.highlight ? 'text-slate-500' : 'text-blue-100'}`}>/ despacho final</span>
                    </div>

                    <p className={`text-xs opacity-80 leading-relaxed font-sans min-h-[32px] ${zone.highlight ? 'text-slate-600' : 'text-slate-200'}`}>
                      {zone.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 flex flex-col justify-between flex-grow">
                    {/* Bullets */}
                    <ul className={`space-y-2.5 pt-4 border-t ${zone.highlight ? 'border-slate-200' : 'border-white/10'} mb-6`}>
                      {zone.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-xs">
                          <Check className={`h-4 w-4 shrink-0 ${zone.highlight ? 'text-brand-blue' : 'text-brand-yellow'}`} />
                          <span className="font-sans opacity-95">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <Link
                        href="/cotizar/express"
                        className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider font-subheading flex items-center justify-center gap-1.5 transition-all ${
                          zone.highlight
                            ? 'bg-brand-blue text-white hover:bg-brand-blue/90 shadow-sm'
                            : 'bg-white/10 text-white hover:bg-white/15'
                        }`}
                      >
                        <span>Seleccionar {zone.name}</span>
                        <ArrowRight className="h-3.5 w-3.5 animate-pulse" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TimelineContent>
            );
          })}
        </div>

        {/* Zona 5: Dynamic Quote Callout (Full width card) */}
        <TimelineContent
          animationNum={6}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          as="div"
          className="bg-white text-slate-900 rounded-3xl p-8 border border-brand-yellow shadow-lg relative overflow-hidden"
        >
          {/* Subtle background highlight icon */}
          <div className="absolute right-0 bottom-0 translate-y-6 translate-x-6 text-slate-100/50 pointer-events-none -z-10">
            <Calculator className="h-64 w-64" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-[10px] font-bold uppercase tracking-widest inline-block">
                Zona 5 (Larga Distancia)
              </span>
              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue">
                $1.000 / km adicional
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans max-w-2xl">
                Para envíos de larga distancia fuera del ejido urbano o si querés obtener una cotización de altísima precisión basada en mapa y geolocalización exacta, utilizá nuestro cotizador inteligente en tiempo real.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/cotizar/express"
                id="express-pricing-cta-cotizador"
                className="bg-brand-yellow hover:bg-brand-yellow/95 text-brand-blue font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.03] flex items-center justify-center gap-2.5 font-semibold w-full sm:w-auto"
              >
                <Calculator className="h-5 w-5" />
                Ir al Cotizador
              </Link>
            </div>

          </div>
        </TimelineContent>

      </div>
    </section>
  );
}
