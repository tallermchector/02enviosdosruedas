# 📌 Ruta URL Relativa: /servicios/envios-express
**Complejidad:** 4.43 KB (4,533 bytes)

## 1. Arquitectura de Código e Interfaz
- **Árbol de Componentes:**
  - `EnviosExpressPage` (`src/app/servicios/envios-express/page.tsx`)
    - `ExpressHero` (`src/components/servicios/express/ExpressHero.tsx`)
      - [`CTANestedPill`](globales.md#ctanestedpill)
      - [`Badge`](globales.md#badge)
    - `ExpressFeatures` (`src/components/servicios/express/ExpressFeatures.tsx`)
      - [`BentoGrid`](globales.md#bentogrid)
    - `ExpressPricing` (`src/components/servicios/express/ExpressPricing.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)
      - [`CTANestedPill`](globales.md#ctanestedpill)
    - `ExpressUseCases` (`src/components/servicios/express/ExpressUseCases.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)

- **Estado Local y Handlers:**
  - Coordinación de cotización rápida hacia `/cotizar/express` con transmisión de zona seleccionada.
  - Esquema JSON-LD estructurado de `Service` con matriz de precios por zonas en pesos argentinos (ARS 2026).

- **Interfaces y Props:**
```typescript
// Componente de servidor (Page)
export default function EnviosExpressPage(): JSX.Element;

// Matriz de Tarifas Schema Offer
interface ExpressZoneOffer {
  name: string;
  price: string;
  priceCurrency: 'ARS';
  description?: string;
}
```

- **Componentes Compartidos:**
  - [`OptimizedHeader`](globales.md#header)
  - [`OptimizedFooter`](globales.md#footer)
  - [`DoubleBezelCard`](globales.md#doublebezelcard)
  - [`CTANestedPill`](globales.md#ctanestedpill)
  - [`Badge`](globales.md#badge)

---

## 2. Mapa de Recursos Visuales, Estilo e Imágenes (Por Sección)

### 1. Express Hero Section (`ExpressHero`)
- **Fondo y Contenedores:** Fondo Electric Speed Blue (`#0950F6` / `bg-[#0950F6]`) con superposición de marco de doble bisel.
- **Composición y Maquetación UI:** Split de dos columnas: izquierda con badge inclinado de máxima velocidad y propuesta de valor, derecha con tarjeta interactiva de resumen operativo (rango de 3hs, corte a las 15:00 hs).
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Ilustración 3D / Fotografía de alta dinámica de un Rider en moto scooter eléctrica sobre la Costa de Mar del Plata, con mochila de carga aerodinámica.
  * **Estilo Gráfico:** Neobrutalismo vial, bordes contrastados en blanco puro y sombra dura.
  * **Paleta de Colores Aplicada:** `#0950F6` (Electric Speed Blue), `#FFEC01` (Amarillo Vial), `#FFFFFF` (Blanco Puro).
  * **Tipografía en Uso:** `Anton` para titular ("ENVÍOS EXPRESS Y MENSAJERÍA EN MOTO"), `Bebas Neue` para badge ("RANGO 3HS - CORTE 15:00 HS"), `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** SVGs de Reloj con rayo, Balanza (hasta 5 kg), Dimensión max (40x30 cm).

### 2. Express Features Section (`ExpressFeatures`)
- **Fondo y Contenedores:** Lienzo claro Slate Canvas (`#F8FAFC`).
- **Composición y Maquetación UI:** Bento Grid de 4 pilares: Prioridad Urgente, Cobertura Completa Mar del Plata, Seguimiento por WhatsApp y Garantía de Horario.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Gráficos vectoriales de zonas urbanas de Mar del Plata (Centro, Güemes, Puerto, Constitución).
  * **Estilo Gráfico:** Flat design limpio con bordes de 2px y esquinas redondeadas en `rounded-2xl`.
  * **Paleta de Colores Aplicada:** `#F8FAFC`, `#0636A5`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton` para encabezados de características, `IBM Plex Sans` para explicaciones en voseo.
  * **Elementos UI e Iconografía:** Iconos Lucide de Mapa, Checkmark, Shield y Smart Phone.

### 3. Express Zone Pricing Section (`ExpressPricing`)
- **Fondo y Contenedores:** Fondo Electric Speed Blue (`#0950F6`) con tarjetas `Double Bezel Card`.
- **Composición y Maquetación UI:** Tabla / Grilla interactiva de 5 zonas tarifarias (Zona 1: $3.700 a Zona 5: $8.200 + $1.000/km adicional).
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Diagrama de anillos concéntricos sobre la geografía de Mar del Plata indicando los radios de 3 km, 5 km, 7 km y 10 km.
  * **Estilo Gráfico:** Cuadrícula de precios estilo cartelera de ruta vial.
  * **Paleta de Colores Aplicada:** `#0950F6`, `#FFEC01`, `#001035`, `#FFFFFF`.
  * **Tipografía en Uso:** `Bebas Neue` para los montos de precios ("$3.700", "$4.600", "$6.100", "$8.200"), `Anton` para los nombres de zona, `Geist Mono` para distancias.
  * **Elementos UI e Iconografía:** Botón CTA [`CTANestedPill`](globales.md#ctanestedpill) con etiqueta "Calculá tu envío express acá".

### 4. Express Use Cases (`ExpressUseCases`)
- **Fondo y Contenedores:** Fondo Slate Surface (`#F8FAFC`).
- **Composición y Maquetación UI:** Tarjetas de escenarios comunes: Repuestos urgentes, Trámites y documentación, Farmacia y Regalos de cumpleaños.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Ilustraciones conceptuales de sobre con documentos, llave inglesa/repuesto y caja de regalo.
  * **Estilo Gráfico:** Minimalismo con bordes teñidos en azul egipcio.
  * **Paleta de Colores Aplicada:** `#F8FAFC`, `#0636A5`, `#FFEC01`.
  * **Tipografía en Uso:** `Anton` para caso de uso, `IBM Plex Sans` para cuerpo.
  * **Elementos UI e Iconografía:** Iconos explicativos para cada tipo de trámite o paquete.
