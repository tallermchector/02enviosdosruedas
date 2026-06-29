'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronDown, Bike, ChevronRight, Calculator, MapPin, Shield,
  Home, Zap, TrendingDown, Clock, ShoppingBag, Info, HelpCircle, Share2, Mail, FileText
} from 'lucide-react';

interface NavItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  dropdownItems?: { label: string; href: string; description?: string; icon?: React.ComponentType<{ className?: string }> }[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll to style navbar dynamically
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

  // Close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      setActiveDropdown(null);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const navItems: NavItem[] = [
    { label: 'Inicio', href: '/', icon: Home },
    {
      label: 'Servicios',
      icon: Bike,
      dropdownItems: [
        { label: 'Envíos Express', href: '/servicios/envios-express', description: 'Mensajería súper rápida', icon: Zap },
        { label: 'Envíos LowCost', href: '/servicios/envios-lowcost', description: 'Logística programada económica', icon: TrendingDown },
        { label: 'Envíos Flex', href: '/servicios/enviosflex', description: 'Última milla MercadoLibre', icon: Clock },
        { label: 'Plan Emprendedores', href: '/servicios/plan-emprendedores', description: 'Tarifas especiales para e-commerce', icon: ShoppingBag },
      ],
    },
    {
      label: 'Cotizar',
      icon: Calculator,
      dropdownItems: [
        { label: 'Cotizar Express', href: '/cotizar/express', description: 'Envíos urgentes en el día', icon: Zap },
        { label: 'Cotizar LowCost', href: '/cotizar/lowcost', description: 'Planificá con la mejor tarifa', icon: TrendingDown },
      ],
    },
    {
      label: 'Nosotros',
      icon: Info,
      dropdownItems: [
        { label: 'Sobre Nosotros', href: '/nosotros/sobre-nosotros', description: 'Trayectoria y valores', icon: Info },
        { label: 'Preguntas Frecuentes', href: '/nosotros/preguntas-frecuentes', description: 'Tiempos de corte y zonas', icon: HelpCircle },
        { label: 'Nuestras Redes', href: '/nosotros/nuestras-redes', description: 'Comunidad DosRuedas', icon: Share2 },
      ],
    },
    { label: 'Contacto', href: '/contacto', icon: Mail },
  ];

  const handleDropdownToggle = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const isDropdownActive = (items?: { href: string }[]) => {
    if (!items) return false;
    return items.some(item => pathname === item.href);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'gradient-blue shadow-lg border-b border-white/10 py-3' 
          : 'gradient-blue py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand identity */}
          <Link 
            href="/" 
            id="nav-logo" 
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="bg-brand-yellow text-brand-blue p-2 rounded-xl group-hover:scale-105 transition-transform duration-200">
              <Bike className="h-6 w-6" />
            </div>
            <div>
              <span className="font-display text-2xl tracking-wider text-white flex items-center gap-1">
                DOS<span className="text-brand-yellow">RUEDAS</span>
              </span>
              <span className="block text-[9px] font-mono tracking-widest text-blue-200 uppercase leading-none">
                Mensajería Mar del Plata
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
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
                    className={`px-4 py-2 text-sm font-subheading tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 ${
                      isLinkActive(item.href)
                        ? 'text-brand-yellow bg-white/10'
                        : 'text-white hover:text-brand-yellow hover:bg-white/5'
                    }`}
                  >
                    {item.icon && <item.icon className="h-4 w-4 shrink-0" />}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className={`px-4 py-2 text-sm font-subheading tracking-wider uppercase rounded-xl transition-all flex items-center gap-1.5 ${
                      isDropdownActive(item.dropdownItems)
                        ? 'text-brand-yellow bg-white/10'
                        : 'text-white hover:text-brand-yellow hover:bg-white/5'
                    }`}
                  >
                    {item.icon && <item.icon className="h-4 w-4 shrink-0" />}
                    <span>{item.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180 text-brand-yellow' : ''
                    }`} />
                  </button>
                )}

                {/* Desktop Dropdown menu */}
                <AnimatePresence>
                  {item.dropdownItems && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 text-slate-800 overflow-hidden z-50"
                    >
                      <div className="px-4 pb-2 border-b border-gray-100 mb-2">
                        <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest block">
                          Menú {item.label}
                        </span>
                      </div>
                      <div className="grid gap-1 px-2">
                        {item.dropdownItems.map((subItem) => {
                          const SubIcon = subItem.icon || ChevronRight;
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`flex items-start gap-3 p-2.5 rounded-xl transition-all group ${
                                pathname === subItem.href
                                  ? 'bg-blue-50 text-brand-blue'
                                  : 'hover:bg-slate-50 text-slate-700 hover:text-brand-blue'
                              }`}
                            >
                              <div className={`p-1.5 rounded-lg transition-colors ${
                                pathname === subItem.href 
                                  ? 'bg-brand-blue/10 text-brand-blue' 
                                  : 'bg-slate-100 text-slate-500 group-hover:bg-brand-blue/10 group-hover:text-brand-blue'
                              }`}>
                                <SubIcon className="h-4 w-4 shrink-0" />
                              </div>
                              <div>
                                <p className="text-xs font-semibold uppercase font-subheading tracking-wide leading-tight">{subItem.label}</p>
                                {subItem.description && (
                                  <p className="text-[10px] text-gray-500 font-sans mt-0.5">{subItem.description}</p>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/cotizar/express"
              id="nav-cta"
              className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue font-subheading tracking-wider text-base uppercase px-5 py-2 rounded-xl transition-all duration-200 hover:scale-[1.03] shadow-md hover:shadow-accent-sm flex items-center gap-2"
            >
              <Calculator className="h-4 w-4" />
              Cotizar Ahora
            </Link>
          </div>

          {/* Mobile Hamburguer button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow focus:outline-none transition-all"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden gradient-blue border-t border-white/10 mt-3 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-white/5 pb-2 last:border-b-0 last:pb-0">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 py-2 text-base font-subheading tracking-wide uppercase ${
                        isLinkActive(item.href) ? 'text-brand-yellow font-bold' : 'text-white'
                      }`}
                    >
                      {item.icon && <item.icon className="h-5 w-5 text-brand-yellow shrink-0" />}
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className={`w-full text-left py-2 text-base font-subheading tracking-wide uppercase flex items-center justify-between ${
                          isDropdownActive(item.dropdownItems) ? 'text-brand-yellow' : 'text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {item.icon && <item.icon className="h-5 w-5 text-blue-300 shrink-0" />}
                          <span>{item.label}</span>
                        </span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180 text-brand-yellow' : 'text-blue-300'
                        }`} />
                      </button>
 
                      {/* Dropdown items */}
                      <AnimatePresence>
                        {item.dropdownItems && activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-6 mt-1 grid gap-2 overflow-hidden"
                          >
                            {item.dropdownItems.map((subItem) => {
                              const SubIcon = subItem.icon || ChevronRight;
                              return (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className={`flex items-center gap-2 py-1.5 text-xs font-sans tracking-wide ${
                                    pathname === subItem.href 
                                      ? 'text-brand-yellow font-bold' 
                                      : 'text-blue-200 hover:text-white'
                                  }`}
                                >
                                  <SubIcon className="h-4 w-4 text-brand-yellow/75 shrink-0" />
                                  <span>{subItem.label}</span>
                                </Link>
                              );
                            })}
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
                  Cotizar Ahora
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
