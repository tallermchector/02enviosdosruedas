'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Bike, Calculator, ArrowRight, CheckCircle2, Navigation, AlertTriangle, PhoneCall } from 'lucide-react';

interface PriceRangeProp {
  id: number;
  serviceType: string;
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
  descripcion: string;
}

export default function CotizadorExpressForm({ priceRanges = [] }: { priceRanges?: PriceRangeProp[] }) {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState<{
    distancia: number;
    tiempo: number;
    precio: number | 'consultar';
  } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!origen.trim() || !destino.trim()) return;

    setIsCalculating(true);
    setCalculated(false);

    // Simulate routing calculations
    setTimeout(() => {
      // Mocked realistic Mar del Plata distances
      const distance = Math.round((Math.random() * 15 + 1.5) * 10) / 10; // 1.5 to 16.5 km
      const time = Math.round(distance * 2.5 + 5); // 2.5 min per km + 5 min base traffic
      
      let price: number | 'consultar' = 'consultar';

      if (distance <= 20) {
        const expressRanges = priceRanges.filter(r => r.serviceType === 'EXPRESS');
        if (expressRanges.length > 0) {
          const matchingRange = expressRanges.find(
            r => distance >= r.distanciaMinKm && distance < r.distanciaMaxKm
          );
          
          if (matchingRange) {
            if (matchingRange.distanciaMaxKm === 9999) {
              const baseRange = expressRanges.find(r => r.distanciaMinKm === 7 && r.distanciaMaxKm === 10);
              const basePrice = baseRange ? baseRange.precioRango : 8200;
              const extraKm = distance - 10;
              price = basePrice + Math.round(extraKm * matchingRange.precioRango);
            } else {
              price = matchingRange.precioRango;
            }
          }
        } else {
          // Fallback if DB is empty
          price = 3700;
          if (distance > 3) {
            price += Math.round((distance - 3) * 450);
          }
        }
      }

      setResult({
        distancia: distance,
        tiempo: time,
        precio: price,
      });
      setIsCalculating(false);
      setCalculated(true);
    }, 1800);
  };


  const getWhatsAppLink = () => {
    if (!result) return '#';
    const priceText = result.precio === 'consultar' ? 'A convenir (Excede rango estándar)' : `$${result.precio.toLocaleString('es-AR')}`;
    const text = `¡Hola Envíos DosRuedas! Quiero coordinar un Envío Express calculado en la web:
📍 *Origen:* ${origen}
🏁 *Destino:* ${destino}
📏 *Distancia:* ${result.distancia} km
⏱️ *Tiempo Estimado:* ${result.tiempo} min
💵 *Tarifa Express:* ${priceText}`;
    return `https://wa.me/542236602699?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="cotizador-express-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Form Input & Results Panel */}
      <div className="lg:col-span-6 flex flex-col justify-between bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="space-y-6">
          <div>
            <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider font-sans">
              Cotización Al Instante
            </span>
            <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue mt-3">
              Calculá tu Envío Express
            </h2>
            <p className="text-slate-500 text-sm font-sans mt-1">
              Ingresá las direcciones de origen y destino en Mar del Plata para obtener una estimación de costo y tiempo inmediato.
            </p>
          </div>

          <form onSubmit={handleCalculate} className="space-y-4">
            {/* Input Origen */}
            <div className="space-y-1.5">
              <label htmlFor="origen-input" className="text-xs font-bold text-slate-700 uppercase tracking-wider block font-sans">
                Dirección de Origen
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-500" />
                <input
                  type="text"
                  id="origen-input"
                  required
                  placeholder="Ej: Mitre 1820 o Centro"
                  value={origen}
                  onChange={(e) => setOrigen(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 focus:border-brand-blue/40 focus:bg-white rounded-2xl pl-12 pr-4 py-3.5 text-sm outline-none transition-all text-slate-800 placeholder:text-slate-400 font-sans"
                />
              </div>
            </div>

            {/* Input Destino */}
            <div className="space-y-1.5">
              <label htmlFor="destino-input" className="text-xs font-bold text-slate-700 uppercase tracking-wider block font-sans">
                Dirección de Destino
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-yellow" />
                <input
                  type="text"
                  id="destino-input"
                  required
                  placeholder="Ej: San Martín 2600 o Constitución"
                  value={destino}
                  onChange={(e) => setDestino(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 focus:border-brand-blue/40 focus:bg-white rounded-2xl pl-12 pr-4 py-3.5 text-sm outline-none transition-all text-slate-800 placeholder:text-slate-400 font-sans"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isCalculating || !origen.trim() || !destino.trim()}
              className="w-full bg-brand-blue text-white hover:bg-brand-blue/95 font-subheading tracking-wider uppercase text-base py-4 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
            >
              {isCalculating ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Calculando Ruta...</span>
                </>
              ) : (
                <>
                  <Calculator className="h-5 w-5" />
                  <span>Calcular Ruta y Precio Express</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Dynamic Results Display */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {calculated && result && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-5 space-y-4"
              >
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-3 rounded-2xl border border-slate-100">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-sans">
                      Distancia
                    </span>
                    <span className="text-xl font-display text-slate-800">
                      {result.distancia} km
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-slate-100">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-sans">
                      Demora Estimada
                    </span>
                    <span className="text-xl font-display text-slate-800">
                      {result.tiempo} min
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-200/60 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-sans">
                      Tarifa Estimada Express
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      {result.precio === 'consultar' ? (
                        <span className="text-lg font-bold text-amber-600 uppercase font-sans">
                          A Consultar
                        </span>
                      ) : (
                        <>
                          <span className="text-2xl font-display text-brand-blue">
                            ${result.precio.toLocaleString('es-AR')}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">ARS</span>
                        </>
                      )}
                    </div>
                  </div>

                  {result.precio === 'consultar' ? (
                    <a
                      href="/contacto"
                      className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-subheading text-xs tracking-wider uppercase px-5 py-3.5 rounded-xl shadow transition-all flex items-center justify-center gap-2"
                    >
                      <AlertTriangle className="h-4.5 w-4.5" />
                      Pedir Cotización Especial
                    </a>
                  ) : (
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-subheading text-xs tracking-wider uppercase px-5 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2 font-medium"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5" />
                      Pedir por WhatsApp
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* SVG Interactive Map Mockup Panel */}
      <div className="lg:col-span-6 min-h-[350px] lg:min-h-full bg-slate-900 border border-slate-800 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between text-white">
        {/* Map backgrounds grid */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Glowing aura */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.06),transparent_60%)] pointer-events-none" />

        {/* Header Map */}
        <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
              Ruteador MDQ Activo
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            Escala: 1:50000
          </span>
        </div>

        {/* Dynamic Route Map Simulation */}
        <div className="relative flex-grow flex items-center justify-center my-6 min-h-[220px]">
          <svg className="w-full h-full max-w-[360px] max-h-[260px] relative z-10 overflow-visible" viewBox="0 0 100 100">
            {/* Grid street mocks */}
            <path d="M10,20 L90,20 M10,50 L90,50 M10,80 L90,80 M20,10 L20,90 M50,10 L50,90 M80,10 L80,90" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" strokeDasharray="3 3" />
            
            {/* Base main coastal road */}
            <path d="M 15 85 C 30 75, 45 45, 85 25" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />

            {/* Calculated active route */}
            {calculated && (
              <>
                <motion.path
                  d="M 20 80 Q 40 40, 80 20"
                  fill="none"
                  stroke="#FFEC01"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                
                {/* Delivery Bike moving along the path */}
                <motion.g
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: "100%" }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                  style={{
                    motionPath: "path('M 20 80 Q 40 40, 80 20')",
                  }}
                >
                  <circle r="5" fill="#FFEC01" className="animate-pulse" />
                  <g transform="translate(-6, -6) scale(0.6)">
                    <Bike className="h-5 w-5 text-brand-blue" />
                  </g>
                </motion.g>
              </>
            )}

            {/* Origin Pin */}
            <g transform="translate(20, 80)">
              <circle r="3" fill="#10B981" />
              <circle r="7" fill="none" stroke="#10B981" strokeWidth="1.5" className="animate-ping" />
              <text y="-6" textAnchor="middle" fill="#10B981" fontSize="5" fontWeight="bold" fontFamily="sans-serif">ORIGEN</text>
            </g>

            {/* Destination Pin */}
            <g transform="translate(80, 20)">
              <circle r="3" fill="#FFEC01" />
              <circle r="7" fill="none" stroke="#FFEC01" strokeWidth="1.5" className="animate-ping" style={{ animationDelay: '0.8s' }} />
              <text y="-6" textAnchor="middle" fill="#FFEC01" fontSize="5" fontWeight="bold" fontFamily="sans-serif">DESTINO</text>
            </g>
          </svg>
        </div>

        {/* Footer map details */}
        <div className="relative z-10 text-[10px] font-mono text-slate-400 space-y-1.5 border-t border-white/10 pt-4">
          <div className="flex justify-between">
            <span>Servicio:</span>
            <span className="text-brand-yellow font-bold uppercase">Envío Express 2H</span>
          </div>
          <div className="flex justify-between">
            <span>Rango Operativo:</span>
            <span className="text-white">Mar del Plata Urbano</span>
          </div>
        </div>
      </div>
    </div>
  );
}
