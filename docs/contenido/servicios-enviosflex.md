# 📌 Ruta URL Relativa: /servicios/enviosflex
**Complejidad:** 4.48 KB (4,589 bytes)

## 1. Arquitectura de Código e Interfaz
- **Árbol de Componentes:**
  - `EnviosFlexPage` (`src/app/servicios/enviosflex/page.tsx`)
    - `FlexHero` (`src/components/servicios/flex/FlexHero.tsx`)
      - [`CTANestedPill`](globales.md#ctanestedpill)
      - [`Badge`](globales.md#badge)
    - `FlexFeatures` (`src/components/servicios/flex/FlexFeatures.tsx`)
      - [`BentoGrid`](globales.md#bentogrid)
    - `FlexBenefits` (`src/components/servicios/flex/FlexBenefits.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)
    - `FlexPricing` (`src/components/servicios/flex/FlexPricing.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)
    - `FlexHowItWorks` (`src/components/servicios/flex/FlexHowItWorks.tsx`)
    - `FlexRequirements` (`src/components/servicios/flex/FlexRequirements.tsx`)

- **Estado Local y Handlers:**
  - SLA 100% garantizado para reputación MercadoLíder.
  - Horario de corte a las 15:00 hs con entregas en el mismo día antes de las 20:00 hs.

- **Interfaces y Props:**
```typescript
// Componente de servidor (Page)
export default function EnviosFlexPage(): JSX.Element;
```

- **Componentes Compartidos:**
  - [`OptimizedHeader`](globales.md#header)
  - [`OptimizedFooter`](globales.md#footer)
  - [`DoubleBezelCard`](globales.md#doublebezelcard)
  - [`CTANestedPill`](globales.md#ctanestedpill)
  - [`Badge`](globales.md#badge)

---

## 2. Mapa de Recursos Visuales, Estilo e Imágenes (Por Sección)

### 1. Flex Hero Section (`FlexHero`)
- **Fondo y Contenedores:** Fondo Electric Speed Blue (`#0950F6`).
- **Composición y Maquetación UI:** Hero Split con el distintivo de partner logístico certificado de Mercado Envíos Flex.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Etiqueta oficial de envío Flex impresa en paquete listo para despacho, con escáner QR.
  * **Estilo Gráfico:** Neobrutalismo corporativo con badge amarillo en `-rotate-1`.
  * **Paleta de Colores Aplicada:** `#0950F6`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton` ("ENVÍOS FLEX Y REPARTO MERCADOLIBRE EN MAR DEL PLATA"), `Bebas Neue` ("PROTEGÉ TU REPUTACIÓN MERCADOLÍDER"), `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Iconos de Medalla MercadoLíder, Escáner QR, Reloj Same-Day.

### 2. Flex Features Section (`FlexFeatures`)
- **Fondo y Contenedores:** Slate Canvas (`#F8FAFC`).
- **Composición y Maquetación UI:** Bento Grid highlighting corte a las 15:00 hs, cero tarifa por reintento de entrega, y tracking nativo en la app de MercadoLibre.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Mockup de smartphone mostrando la notificación de paquete entregado en la app de MercadoLibre.
  * **Estilo Gráfico:** Capturas de interfaz estilizadas con sombras paralelas.
  * **Paleta de Colores Aplicada:** `#F8FAFC`, `#0636A5`, `#FFEC01`.
  * **Tipografía en Uso:** `Anton` para características, `IBM Plex Sans` para explicaciones en voseo.
  * **Elementos UI e Iconografía:** Lucide Smartphone, ShieldCheck, RefreshCw, Clock.

### 3. Flex Benefits Section (`FlexBenefits`)
- **Fondo y Contenedores:** Deep Midnight Navy (`#052C87`).
- **Composición y Maquetación UI:** Tarjetas de beneficios para vendedores de alto volumen y emprendedores en MercadoLibre.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Gráfico vectorial de reputación verde "MercadoLíder Platinum".
  * **Estilo Gráfico:** High-contrast navy and yellow.
  * **Paleta de Colores Aplicada:** `#052C87`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton`, `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Iconos de Crecimiento, Soporte directo por WhatsApp y Múltiples Colectas.

### 4. Flex Pricing Section (`FlexPricing`)
- **Fondo y Contenedores:** Electric Speed Blue (`#0950F6`).
- **Composición y Maquetación UI:** Estructura tarifaria según las zonas oficiales de Mercado Envíos en Mar del Plata.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Ilustración de mapa de zonas de cobertura Flex.
  * **Estilo Gráfico:** Cartelera vial con montos claros.
  * **Paleta de Colores Aplicada:** `#0950F6`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Bebas Neue` para los valores de tarifa, `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Botón CTA a registro de vendedor Flex.

### 5. Flex How It Works & Requirements (`FlexHowItWorks`, `FlexRequirements`)
- **Fondo y Contenedores:** Slate Canvas (`#F8FAFC`).
- **Composición y Maquetación UI:** Pasos de integración simples: Activar Flex -> Escanear paquetes -> Colecta en tu local -> Entrega al comprador. Requisitos de embalaje y etiqueta QR.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Guía visual de cómo pegar la etiqueta Flex en el paquete sin tapar el código QR.
  * **Estilo Gráfico:** Diagrama de pasos con bordes limpios.
  * **Paleta de Colores Aplicada:** `#F8FAFC`, `#0636A5`, `#FFEC01`.
  * **Tipografía en Uso:** `Bebas Neue` ("PASO 1", "PASO 2"), `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Checkmarks de requisitos de embalaje.
