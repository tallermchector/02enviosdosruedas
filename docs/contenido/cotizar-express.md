# 📌 Ruta URL Relativa: /cotizar/express
**Complejidad:** 3.68 KB (3,777 bytes)

## 1. Arquitectura de Código e Interfaz
- **Árbol de Componentes:**
  - `Page` (`src/app/cotizar/express/page.tsx`)
    - `CotizadorExpressHero` (`src/components/cotizar/express/CotizadorExpressHero.tsx`)
    - `Suspense` (`FormSkeleton`)
      - `ExpressFormAsync`
        - `CotizadorExpressForm` (`src/components/cotizar/express/CotizadorExpressForm.tsx`)
          - [`AddressAutocomplete`](globales.md#addressautocomplete)
          - [`DynamicRouteMap`](globales.md#leafletroutemap)
          - [`DoubleBezelCard`](globales.md#doublebezelcard)
          - [`CTANestedPill`](globales.md#ctanestedpill)
    - `CotizadorExpressDetails` (`src/components/cotizar/express/CotizadorExpressDetails.tsx`)
    - `CotizadorExpressHelp` (`src/components/cotizar/express/CotizadorExpressHelp.tsx`)

- **Estado Local y Handlers:**
  - Carga asíncrona mediante Prisma Postgres (`prisma.priceRange.findMany()`) transmitida por React Suspense.
  - Formulario reactivo de cálculo con estado para origen, destino, distancia calculada vía OSRM, precio estimado, y redirección directa hacia WhatsApp con el mensaje pre-cargado.

- **Interfaces y Props:**
```typescript
interface ExpressFormAsyncProps {
  priceRanges: PriceRange[];
}

interface ExpressQuoteData {
  originAddress: string;
  destinationAddress: string;
  distanceKm: number;
  totalPrice: number;
  declaredValue?: number;
}
```

- **Componentes Compartidos:**
  - [`OptimizedHeader`](globales.md#header)
  - [`OptimizedFooter`](globales.md#footer)
  - [`AddressAutocomplete`](globales.md#addressautocomplete)
  - [`DynamicRouteMap`](globales.md#leafletroutemap)
  - [`DoubleBezelCard`](globales.md#doublebezelcard)
  - [`CTANestedPill`](globales.md#ctanestedpill)

---

## 2. Mapa de Recursos Visuales, Estilo e Imágenes (Por Sección)

### 1. Hero Cotizador Express (`CotizadorExpressHero`)
- **Fondo y Contenedores:** Canvas principal en Electric Speed Blue (`#0950F6`).
- **Composición UI:** Titular claro centrado con badge explicativo del calculador en tiempo real.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Vector de mapa estilizado con un pin de salida y un pin de llegada conectados por una línea punteada neón `#FFEC01`.
  * **Estilo Gráfico:** Neobrutalismo vial con tipografía gigante.
  * **Paleta de Colores Aplicada:** `#0950F6`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton` ("CALCULÁ TU ENVÍO EXPRESS EN MAR DEL PLATA"), `Bebas Neue` ("TARIFAS 2026 EN TIEMPO REAL").
  * **Elementos UI e Iconografía:** SVGs de Calculadora, Pin de Mapa y Reloj.

### 2. Formulario & Mapa Interactivo (`CotizadorExpressForm`)
- **Fondo y Contenedores:** Layout Split (7 columnas para inputs en tarjeta Double Bezel esmerilada, 5 columnas para visor de mapa Leaflet/OSRM en `bg-[#052C87]`).
- **Composición UI:** Dos inputs autocompletables para origen y destino con autocompletado en Mar del Plata + mapa de ruta interactivo + desglose de costo final.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Mapa interactivo con Tiles personalizados de OpenStreetMap ajustados al estilo azul del sitio.
  * **Estilo Gráfico:** Interfaces táctiles con campos de entrada resaltados en amarillo al focus.
  * **Paleta de Colores Aplicada:** `#0950F6`, `#052C87`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Bebas Neue` para la cifra del precio final ("$4.600 ARS"), `Geist Mono` para métricas ("4.2 km - 12 mins"), `IBM Plex Sans` para etiquetas de input.
  * **Elementos UI e Iconografía:** Botón verde WhatsApp o botón CTA [`CTANestedPill`](globales.md#ctanestedpill) ("Pedir Cadete Ahora").

### 3. Guía de Especificaciones & Ayuda (`CotizadorExpressDetails`, `CotizadorExpressHelp`)
- **Fondo y Contenedores:** Tarjetas con marco doble en `bg-white/10`.
- **Composición UI:** Fila de requerimientos (hasta 5 kg, 40x30 cm, horario corte 15:00 hs) y banner de contacto directo para asistencia.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Diagrama de dimensiones con las medidas máximas del paquete.
  * **Estilo Gráfico:** Clean technical diagram.
  * **Paleta de Colores Aplicada:** `#0950F6`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton`, `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Icono de soporte técnico WhatsApp y teléfono.
