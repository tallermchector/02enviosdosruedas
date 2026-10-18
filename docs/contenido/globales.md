# 🌐 Componentes Globales, Layout y Elementos Compartidos

Este documento contiene la especificación arquitectónica, de interfaz y estilo visual para los componentes globales compartidos a lo largo de la aplicación **Envíos DosRuedas** (Mar del Plata, 2026). Todas las páginas enlazan a esta sección para evitar duplicación.

---

## 1. Componentes de Layout Base

### `RootLayout` (`src/app/layout.tsx`)
- **Descripción:** Layout principal de Next.js App Router con fuentes tipográficas configuradas (Outfit/IBM Plex Sans, Anton, Bebas Neue, Geist Mono), metadatos OpenGraph, esquemas JSON-LD (`Organization` + `LocalBusiness`) y Google Tag Manager.
- **Interfaces / Props:**
```typescript
interface RootLayoutProps {
  children: React.ReactNode;
}
```

### `ClientLayout` (`src/components/ClientLayout.tsx`)
- **Descripción:** Proveedor del lado del cliente que envuelve `OptimizedHeader`, el contenido de la página (`children`), `CarruselRedes` y `OptimizedFooter`.

---

## 2. Encabezado y Navegación Header (`#header`)

### `OptimizedHeader` (`src/components/layout/OptimizedHeader.tsx`)
- **Descripción:** Cabecera adhesiva (`sticky top-0 z-50`) con navbar flotante en desktop, menú desplegable para servicios/nosotros, indicadores de estado de servicio y trigger de menú mobile.
- **Interfaces y Props:**
```typescript
interface NavItem {
  label: string;
  href: string;
  badge?: string;
  subItems?: { label: string; href: string; description: string; badge?: string }[];
}
```
- **Recursos Visuales y Estilo:**
  * **Fondo y Contenedores:** `bg-brand-blue-900/90 backdrop-blur-md border-b border-brand-blue-700/50`.
  * **Paleta:** `#001035` (Navy), `#0636A5` (Blue), `#FFEC01` (Yellow), `#FFFFFF`.
  * **Tipografía:** `Anton` para logos/destacados, `Bebas Neue` para badges/subtítulos, `IBM Plex Sans` para links de navegación.
  * **Iconografía:** SVG de Isologo "DosRuedas" (Rueda + Rayos dorados `#FFEC01`), Chevron, Menu Hamburger / Close icon.

### `MobileNav` (`src/components/layout/MobileNav.tsx`)
- **Descripción:** Menú lateral deslizable (Drawer) impulsado por Framer Motion para pantallas móviles (< 1024px). Incluye acordeón para submenús de Servicios y Nosotros, y accesos directos de cotización rápida.
- **Interfaces y Props:**
```typescript
interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}
```

---

## 3. Pie de Página y Redes (`#footer`)

### `OptimizedFooter` (`src/components/layout/OptimizedFooter.tsx`)
- **Descripción:** Pie de página completo de estructura multi-columna con información institucional, accesos rápidos, horarios de atención, canal oficial de WhatsApp y ticker de estado del hub de logística (Friuli 1972, Mar del Plata).
- **Interfaces y Props:**
```typescript
// Componente de servidor/cliente auto-contenido sin props directas.
```
- **Recursos Visuales y Estilo:**
  * **Fondo:** `bg-brand-blue-950 border-t-2 border-brand-blue-700`.
  * **Contenedores:** Tarjeta Double Bezel interna para estado de operabilidad en tiempo real (`Friuli 1972 - Hub Central Operativo`).
  * **Paleta:** `#001035` (Fondo), `#FFEC01` (Acentos/CTAs), `#FFFFFF` (Texto).
  * **Tipografía:** `Anton` (Títulos de sección), `Bebas Neue` (Horarios y Badges), `IBM Plex Sans` (Cuerpo de texto).

### `CarruselRedes` (`src/components/layout/CarruselRedes.tsx`)
- **Descripción:** Ticker de cinta continua infinita ("Infinite Marquee") de marcas socias, calificaciones de Google Business, canales de comunicación y redes sociales de Envíos DosRuedas.
- **Interfaces y Props:**
```typescript
interface SocialItem {
  name: string;
  handle: string;
  metric: string;
  icon: string;
  url: string;
}
```

---

## 4. Biblioteca de Componentes UI Reutilizables (`src/components/ui/`)

### `DoubleBezelCard` (`#doublebezelcard`)
- **Descripción:** Tarjeta de jerarquía superior con marco exterior esmerilado translúcido y contenedor interno sólido. Cumple la norma del Design System.
- **Props:**
```typescript
interface DoubleBezelCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: 'blue' | 'white' | 'dark';
}
```

### `CTANestedPill` (`#ctanestedpill`)
- **Descripción:** Botón de acción principal con cápsula de icono anidada ("Nested Pill") y efecto de máscara deslizante al hover.
- **Props:**
```typescript
interface CTANestedPillProps {
  href?: string;
  onClick?: () => void;
  label: string;
  icon?: React.ReactNode;
  variant?: 'yellow' | 'blue' | 'white';
  className?: string;
}
```

### `Badge` (`#badge`)
- **Descripción:** Etiqueta en ángulo rotado (`-rotate-1`) para llamadas de atención, estados activos, novedades o identificadores de velocidad.
- **Props:**
```typescript
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'yellow' | 'blue' | 'white' | 'dark';
  className?: string;
}
```

### `BentoGrid` & `BentoCard` (`#bentogrid`)
- **Descripción:** Sistema de grilla asimétrica 7/5/12 para composición visual de características y propuestas de valor sin caer en grillas aburridas de 3 columnas iguales.
- **Props:**
```typescript
interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoCardProps {
  title: string;
  description: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}
```

### `AddressAutocomplete` (`#addressautocomplete`)
- **Descripción:** Campo de búsqueda interactivo con autocompletado geográfico restringido a la zona de Mar del Plata y Batán mediante la API interna de Google Places.
- **Props:**
```typescript
interface AddressAutocompleteProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onSelect: (place: { address: string; lat: number; lng: number }) => void;
  placeholder?: string;
  error?: string;
}
```

### `LeafletRouteMap` / `DynamicRouteMap` (`#leafletroutemap`)
- **Descripción:** Visualizador dinámico e interactivo de mapas basado en Leaflet y trazado de rutas OSRM para cotización en tiempo real entre origen y destino dentro de Mar del Plata.
- **Props:**
```typescript
interface LeafletRouteMapProps {
  origin?: { lat: number; lng: number; address: string };
  destination?: { lat: number; lng: number; address: string };
  routeGeometry?: string;
  distanceKm?: number;
  durationMin?: number;
}
```

### `FloatTiltCard` (`#floattiltcard`)
- **Descripción:** Tarjeta interactiva 3D con efecto Tilt y perspectiva de 1000px sensible al movimiento del cursor del usuario.
- **Props:**
```typescript
interface FloatTiltCardProps {
  children: React.ReactNode;
  className?: string;
}
```

---

## 5. Directorio Global de Activos de Marca e Imágenes
- **Logotipo Principal:** `/logo-envios-simplified.webp` - Isologo vectorial simplificado con la rueda dorada de velocidad.
- **OpenGraph Hero Image:** `/og-image.jpg` - Banner de previsualización para redes (1200x630px).
- **Favicon de Navegador:** `/favicon.ico` - Icono de pestaña optimizado.
