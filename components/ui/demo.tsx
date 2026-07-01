"use client";

import React from "react";
import { Book, Sunset, Trees, Zap, Bike, TrendingDown, Clock, ShoppingBag, Info, HelpCircle, Share2, Mail, Calculator } from "lucide-react";

import { Navbar1 } from "@/components/ui/shadcnblocks-com-navbar1"

const demoData = {
  logo: {
    url: "/",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg", // Fallback graphic image
    alt: "Envíos DosRuedas",
    title: "DOSRUEDAS",
  },
  menu: [
    {
      title: "Inicio",
      url: "/",
    },
    {
      title: "Servicios",
      url: "#",
      items: [
        {
          title: "Envíos Express",
          description: "Mensajería súper rápida y urgente en el día",
          icon: <Zap className="size-5 shrink-0 text-brand-blue" />,
          url: "/servicios/envios-express",
        },
        {
          title: "Envíos LowCost",
          description: "Logística programada económica y de excelente tarifa",
          icon: <TrendingDown className="size-5 shrink-0 text-brand-blue" />,
          url: "/servicios/envios-lowcost",
        },
        {
          title: "Envíos Flex",
          description: "Última milla certificada para MercadoLibre Flex",
          icon: <Clock className="size-5 shrink-0 text-brand-blue" />,
          url: "/servicios/enviosflex",
        },
        {
          title: "Plan Emprendedores",
          description: "Tarifas especiales y simplificadas para e-commerce",
          icon: <ShoppingBag className="size-5 shrink-0 text-brand-blue" />,
          url: "/servicios/plan-emprendedores",
        },
      ],
    },
    {
      title: "Cotizar",
      url: "#",
      items: [
        {
          title: "Cotizar Express",
          description: "Pedí tu moto mensajería inmediata con ruteo inteligente",
          icon: <Zap className="size-5 shrink-0 text-brand-blue" />,
          url: "/cotizar/express",
        },
        {
          title: "Cotizar LowCost",
          description: "Planificá tus despachos semanales con la mejor tarifa",
          icon: <TrendingDown className="size-5 shrink-0 text-brand-blue" />,
          url: "/cotizar/lowcost",
        },
      ],
    },
    {
      title: "Nosotros",
      url: "#",
      items: [
        {
          title: "Sobre Nosotros",
          description: "Trayectoria, valores y equipo de DosRuedas",
          icon: <Info className="size-5 shrink-0 text-brand-blue" />,
          url: "/nosotros/sobre-nosotros",
        },
        {
          title: "Preguntas Frecuentes",
          description: "Tiempos de corte, límites de bulto y mapas de cobertura",
          icon: <HelpCircle className="size-5 shrink-0 text-brand-blue" />,
          url: "/nosotros/preguntas-frecuentes",
        },
        {
          title: "Nuestras Redes",
          description: "Canales oficiales y novedades de nuestra comunidad",
          icon: <Share2 className="size-5 shrink-0" />,
          url: "/nosotros/nuestras-redes",
        },
      ],
    },
    {
      title: "Contacto",
      url: "/contacto",
    },
  ],
  mobileExtraLinks: [
    { name: "Sobre Nosotros", url: "/nosotros/sobre-nosotros" },
    { name: "Preguntas Frecuentes", url: "/nosotros/preguntas-frecuentes" },
    { name: "Nuestras Redes", url: "/nosotros/nuestras-redes" },
    { name: "Contacto", url: "/contacto" },
  ],
  auth: {
    login: { text: "Cotizar Express", url: "/cotizar/express" },
    signup: { text: "Hablá por WhatsApp", url: "https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web." },
  },
};

function Navbar1Demo() {
  return <Navbar1 {...demoData} />;
}

export { Navbar1Demo };
