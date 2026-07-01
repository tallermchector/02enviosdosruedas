'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Bike, Phone, MapPin, Mail, Clock, Instagram, Facebook, Award, ArrowUpRight,
  Zap, TrendingDown, ShoppingBag
} from 'lucide-react';

export default function OptimizedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="optimized-footer" className="bg-brand-blue text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Decorative top yellow accent bar */}
      <div className="h-1 bg-brand-yellow w-full" />

      {/* Subtle top-centered radial gradient highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,236,1,0.06),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* COLUMN 1: Brand details & Socials (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-10 h-10 group-hover:scale-105 transition-transform duration-200 shrink-0">
                <Image
                  src="https://i.postimg.cc/RF6MBw2d/logo-envios.webp"
                  alt="Logo Envíos Dos Ruedas simplificado"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display text-2xl tracking-wider text-white flex items-center gap-1">
                  Envíos <span className="text-brand-yellow">Dosruedas</span>
                </span>
                <span className="block text-[9px] font-sans tracking-widest text-blue-200 uppercase leading-none">
                  tu solución confiable
                </span>
              </div>
            </Link>
            
            <p className="text-blue-100 text-sm leading-relaxed max-w-sm">
              La solución de logística, envíos express y distribución de última milla líder en Mar del Plata. Conectamos locales, e-commerce y particulares con un servicio inteligente y confiable.
            </p>

            {/* Social handles */}
            <div className="space-y-3">
              <span className="block text-xs font-bold text-brand-yellow uppercase tracking-wider font-sans">
                Seguinos en nuestras redes
              </span>
              <div className="flex items-center gap-3">
                <Link
                  href="/nosotros/nuestras-redes"
                  className="h-10 w-10 rounded-xl bg-white/5 hover:bg-brand-yellow hover:text-brand-blue text-white flex items-center justify-center transition-all duration-200 border border-white/10"
                  title="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="/nosotros/nuestras-redes"
                  className="h-10 w-10 rounded-xl bg-white/5 hover:bg-brand-yellow hover:text-brand-blue text-white flex items-center justify-center transition-all duration-200 border border-white/10"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-blue-200 font-mono">
                  <Award className="h-4 w-4 text-brand-yellow" />
                  <span>3PL Certificado</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Services (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-subheading text-lg tracking-wider text-brand-yellow uppercase">
              Soluciones Logísticas
            </h4>
            <ul className="grid grid-cols-1 gap-2.5 text-sm">
              <li>
                <Link 
                  href="/servicios/envios-express" 
                  className="text-blue-100 hover:text-brand-yellow flex items-center gap-2 group transition-colors"
                >
                  <Zap className="h-4 w-4 text-brand-yellow shrink-0" />
                  <span>Envíos Express</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicios/envios-lowcost" 
                  className="text-blue-100 hover:text-brand-yellow flex items-center gap-2 group transition-colors"
                >
                  <TrendingDown className="h-4 w-4 text-brand-yellow shrink-0" />
                  <span>Envíos LowCost</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicios/enviosflex" 
                  className="text-blue-100 hover:text-brand-yellow flex items-center gap-2 group transition-colors"
                >
                  <Clock className="h-4 w-4 text-brand-yellow shrink-0" />
                  <span>Envíos Flex (MeLi)</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicios/plan-emprendedores" 
                  className="text-blue-100 hover:text-brand-yellow flex items-center gap-2 group transition-colors"
                >
                  <ShoppingBag className="h-4 w-4 text-brand-yellow shrink-0" />
                  <span>E-Commerce & 3PL</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Contact & Location Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-subheading text-lg tracking-wider text-brand-yellow uppercase">
              Contacto Principal
            </h4>
            
            <div className="space-y-3.5 text-xs text-blue-100">
              
              <div className="flex gap-3 items-start">
                <MapPin className="h-4.5 w-4.5 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white uppercase font-sans">Ubicación</p>
                  <p className="font-sans">Friuli 1972, Mar del Plata</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Phone className="h-4.5 w-4.5 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white uppercase font-sans">Teléfono</p>
                  <p className="font-mono">+54 223 660-2699</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Mail className="h-4.5 w-4.5 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white uppercase font-sans">Email</p>
                  <p className="font-sans underline decoration-white/20">matiascejas@enviosdosruedas.com</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Clock className="h-4.5 w-4.5 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white uppercase font-sans">Horarios de Recepción</p>
                  <p className="font-sans">Lunes a Sábado: 08:00 a 20:00 hs</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t border-white/10 my-10" />

        {/* Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-200 font-sans">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <p>© {currentYear} Envíos DosRuedas. Todos los derechos reservados.</p>
            <Link href="/nosotros/sobre-nosotros" className="hover:text-brand-yellow transition-colors underline decoration-white/10">
              Sobre Nosotros
            </Link>
            <Link href="/nosotros/preguntas-frecuentes" className="hover:text-brand-yellow transition-colors underline decoration-white/10">
              Preguntas Frecuentes
            </Link>
            <Link href="/nosotros/nuestras-redes" className="hover:text-brand-yellow transition-colors underline decoration-white/10">
              Nuestras Redes
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/terminos-y-condiciones" className="hover:text-brand-yellow transition-colors underline decoration-white/10">
              Términos y Condiciones
            </Link>
            <Link href="/politica-de-privacidad" className="hover:text-brand-yellow transition-colors underline decoration-white/10">
              Política de Privacidad
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
