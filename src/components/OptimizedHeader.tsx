'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Bike, ChevronRight, Calculator, Phone } from 'lucide-react';

interface NavItem {
  label: string;
  href?: string;
  dropdownItems?: { label: string; href: string; description?: string }[];
}

export default function OptimizedHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      setActiveDropdown(null);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const navItems: NavItem[] = [
    { label: 'Inicio', href: '/' },
    {
      label: 'Servicios',
      dropdownItems: [
        { label: 'Envíos Express', href: '/servicios/envios-express', description: 'Rápido, en 2 horas' },
        { label: 'Envíos LowCost', href: '/servicios/envios-lowcost', description: 'Económico e inteligente' },
        { label: 'Envíos Flex (MeLi)', href: '/servicios/enviosflex', description: 'Socio MercadoLibre Flex' },
        { label: 'E-Commerce & 3PL', href: '/servicios/plan-emprendedores', description: 'Logística para PyMEs' },
      ],
    },
    {
      label: 'Nosotros',
      dropdownItems: [
        { label: 'Sobre Nosotros', href: '/nosotros/sobre-nosotros', description: 'Quiénes somos' },
        { label: 'Preguntas Frecuentes', href: '/nosotros/preguntas-frecuentes', description: 'Todas tus dudas resueltas' },
        { label: 'Nuestras Redes', href: '/nosotros/nuestras-redes', description: 'Comunidad en movimiento' },
      ],
    },
    { label: 'Contacto', href: '/contacto' },
  ];

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header
      id="optimized-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-brand-blue/95 shadow-lg border-b border-white/10 py-3 backdrop-blur-md' 
          : 'bg-brand-blue py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            href="/" 
            id="nav-logo-opt" 
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="bg-brand-yellow text-brand-blue p-2 rounded-xl group-hover:scale-105 transition-transform duration-200">
              <Bike className="h-6 w-6" />
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

          {/* Desktop Navigation */}
          <nav id="desktop-nav-opt" className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdownItems && setActiveDropdown(item.label)}
                onMouseLeave={() => item.dropdownItems && setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-subheading tracking-wider uppercase rounded-xl transition-all ${
                      pathname === item.href
                        ? 'text-brand-yellow bg-white/10'
                        : 'text-white hover:text-brand-yellow hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="px-4 py-2 text-sm font-subheading tracking-wider uppercase rounded-xl transition-all flex items-center gap-1.5 text-white hover:text-brand-yellow hover:bg-white/5"
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180 text-brand-yellow' : ''
                    }`} />
                  </button>
                )}

                {/* Dropdowns */}
                <AnimatePresence>
                  {item.dropdownItems && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 text-slate-800 overflow-hidden z-50"
                    >
                      <div className="grid gap-1 px-2">
                        {item.dropdownItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="flex items-start gap-3 p-2.5 rounded-xl transition-all hover:bg-slate-50 text-slate-700 hover:text-brand-blue"
                          >
                            <div className="p-1.5 rounded-lg bg-slate-100 text-slate-500">
                              <ChevronRight className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold uppercase font-subheading tracking-wide leading-tight">{subItem.label}</p>
                              {subItem.description && (
                                <p className="text-[10px] text-gray-500 font-sans mt-0.5">{subItem.description}</p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Action & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+542236602699" 
              className="flex items-center gap-2 text-white hover:text-brand-yellow transition-colors font-mono text-sm font-medium"
            >
              <Phone className="h-4 w-4 text-brand-yellow" />
              <span>+54 223 660-2699</span>
            </a>
            
            <Link
              href="/cotizar/express"
              id="header-cta"
              className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue font-subheading tracking-wider text-base uppercase px-5 py-2 rounded-xl transition-all duration-200 hover:scale-[1.03] shadow-md flex items-center gap-2"
            >
              <Calculator className="h-4 w-4" />
              Cotizar Envío
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a 
              href="tel:+542236602699" 
              className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow focus:outline-none transition-all"
              title="Llamar"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle-opt"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow focus:outline-none transition-all"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-brand-blue border-t border-white/10 mt-3 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-white/5 pb-2 last:border-b-0 last:pb-0">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block py-2 text-base font-subheading tracking-wide uppercase text-white hover:text-brand-yellow"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="w-full text-left py-2 text-base font-subheading tracking-wide uppercase flex items-center justify-between text-white"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180 text-brand-yellow' : 'text-blue-300'
                        }`} />
                      </button>

                      <AnimatePresence>
                        {item.dropdownItems && activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-1 grid gap-2 overflow-hidden"
                          >
                            {item.dropdownItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block py-1.5 text-xs text-blue-200 hover:text-white"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-2">
                <Link
                  href="/cotizar/express"
                  className="w-full bg-brand-yellow text-brand-blue text-center font-subheading tracking-wider uppercase text-lg py-3 rounded-xl block shadow-lg"
                >
                  Cotizar Envío
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
