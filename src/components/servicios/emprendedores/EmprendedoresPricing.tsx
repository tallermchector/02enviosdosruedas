'use client';

import React, { useRef } from 'react';
import { Check, ArrowRight, MessageSquare, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import { Sparkles } from '@/src/components/ui/sparkles';
import { TimelineContent } from '@/src/components/ui/timeline-animation';
import { VerticalCutReveal } from '@/src/components/ui/vertical-cut-reveal';
import NumberFlow from '@number-flow/react';

export default function EmprendedoresPricing() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const plans = [
    {
      name: 'Plan E-Commerce (3PL Fulfillment)',
      price: '$6.000',
      period: 'Tarifa Plana Same Day',
      description: 'Incluye almacenamiento, picking y embalaje básico de productos.',
      bullets: [
        'Cobranza contra-reembolso bonificada',
        'Rechazos devueltos 100% sin cargo',
        'Control y monitoreo de stock incluido',
        'Despacho y logística en el acto'
      ],
      highlight: true,
      badge: 'EL MÁS COMPLETO'
    },
    {
      name: 'Plan Escala (Plan 24HS)',
      price: '$3.800',
      period: 'Next Day (Retiro hoy)',
      description: 'Tarifas decrecientes: Pro $3.500 | Elite $3.200 | Partner $3.000.',
      bullets: [
        '20% OFF aplicando Drop-Off en local',
        'Entrega garantizada menor a 24hs',
        'Ideal para grandes volúmenes diarios',
        'Reporte consolidado de envíos'
      ],
      highlight: false,
      badge: 'MAYOR VOLUMEN'
    },
    {
      name: 'Plan Corporativo (Cta. Cte. Flexible)',
      price: 'Híbrido',
      period: 'LowCost + Beneficios Express',
      description: 'Pagá tarifas LowCost súper económicas pero con prioridad alta de gestión.',
      bullets: [
        'Corte extendido de carga hasta 15:00 hs',
        'Elección de rango horario de entrega',
        'Facturación mensual centralizada',
        'Asesor y soporte dedicado por chat'
      ],
      highlight: false,
      badge: 'CTA CTE FLEXIBLE'
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
      id="emprendedores-pricing" 
      className="py-24 bg-brand-blue relative overflow-hidden text-white border-y border-blue-900/60"
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
            Planes a Medida
          </TimelineContent>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white flex justify-center">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.1}
              staggerFrom="first"
              containerClassName="justify-center"
            >
              Planes 3PL y E-Commerce
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            as="p"
            className="text-blue-100 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed"
          >
            Elegí el plan corporativo que mejor se adapte al volumen y necesidades operativas de tu negocio. Desde almacenamiento estratégico hasta ruteo masivo.
          </TimelineContent>
          <div className="h-1.5 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Pricing Cards Grid (3 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {plans.map((plan, idx) => {
            const isNumericPrice = plan.price.startsWith('$');
            const numericValue = isNumericPrice ? parseInt(plan.price.replace('$', '').replace('.', '')) : null;

            return (
              <TimelineContent
                key={plan.name}
                animationNum={2 + idx}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                as="div"
              >
                <Card
                  className={`rounded-3xl border flex flex-col justify-between h-full transition-all duration-300 group ${
                    plan.highlight
                      ? 'bg-gradient-to-b from-white via-white to-amber-50 text-slate-900 border-brand-yellow shadow-xl lg:scale-[1.03] relative z-20'
                      : 'bg-gradient-to-b from-white/5 to-white/[0.02] text-white border-white/10 hover:border-white/20 hover:bg-white/[0.08]'
                  }`}
                >
                  <CardHeader className="p-8 pb-2 text-left relative">
                    {plan.highlight && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-blue font-bold text-[9px] tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                        {plan.badge}
                      </span>
                    )}

                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${plan.highlight ? 'text-brand-blue' : 'text-brand-yellow'}`}>
                        {plan.badge}
                      </span>
                      <h3 className="text-xl font-display uppercase tracking-wider font-semibold mt-1 min-h-[56px] leading-snug">
                        {plan.name}
                      </h3>
                    </div>

                    <div className="py-2">
                      {isNumericPrice && numericValue ? (
                        <div className="flex items-baseline">
                          <span className={`text-4xl font-display uppercase font-bold tracking-tight ${plan.highlight ? 'text-brand-blue' : 'text-brand-yellow'}`}>
                            $
                            <NumberFlow
                              value={numericValue}
                              format={{ minimumFractionDigits: 0 }}
                              className="inline-block"
                            />
                          </span>
                        </div>
                      ) : (
                        <span className={`text-4xl font-display uppercase font-bold tracking-tight ${plan.highlight ? 'text-brand-blue' : 'text-brand-yellow'}`}>
                          {plan.price}
                        </span>
                      )}
                      <span className={`text-xs opacity-65 font-sans block mt-1 ${plan.highlight ? 'text-slate-500' : 'text-blue-100'}`}>{plan.period}</span>
                    </div>

                    <p className={`text-xs opacity-80 leading-relaxed font-sans min-h-[32px] ${plan.highlight ? 'text-slate-600' : 'text-slate-200'}`}>
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-8 pt-0 flex flex-col justify-between flex-grow">
                    {/* Bullets */}
                    <ul className={`space-y-2.5 pt-4 border-t ${plan.highlight ? 'border-slate-200' : 'border-white/10'} mb-6`}>
                      {plan.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-xs">
                          <Check className={`h-4 w-4 shrink-0 ${plan.highlight ? 'text-brand-blue' : 'text-brand-yellow'}`} />
                          <span className="font-sans opacity-90">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <a
                        href="https://wa.me/542236602699"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider font-subheading flex items-center justify-center gap-1.5 transition-all ${
                          plan.highlight
                            ? 'bg-brand-blue text-white hover:bg-brand-blue/90 shadow-sm'
                            : 'bg-white/10 text-white hover:bg-white/15'
                        }`}
                      >
                        <span>Seleccionar {plan.name.split(' ')[1]}</span>
                        <ArrowRight className="h-3.5 w-3.5 animate-pulse" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </TimelineContent>
            );
          })}
        </div>

        {/* Bottom CTA Special custom callout */}
        <TimelineContent
          animationNum={5}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          as="div"
          className="bg-white text-slate-900 rounded-3xl p-8 border border-brand-yellow shadow-lg relative overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 translate-y-6 translate-x-6 text-slate-100/50 pointer-events-none -z-10">
            <Briefcase className="h-64 w-64 text-slate-100" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-[10px] font-bold uppercase tracking-widest inline-block">
                SOPORTE DE INTEGRACIÓN PyMEs
              </span>
              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue">
                ¿Tenés necesidades operativas especiales?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans max-w-2xl">
                Diseñamos flujos logísticos a medida para grandes e-commerce o distribuidoras con despachos masivos, integraciones API, reportes personalizados y picking especializado.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="emprendedores-pricing-cta-whatsapp"
                className="bg-brand-blue hover:bg-brand-blue/95 text-white font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl shadow-md transition-all duration-200 hover:scale-[1.03] flex items-center justify-center gap-2.5 font-semibold w-full sm:w-auto"
              >
                <MessageSquare className="h-5 w-5 fill-current" />
                Agendar Asesoría 3PL
              </a>
            </div>

          </div>
        </TimelineContent>

      </div>
    </section>
  );
}
