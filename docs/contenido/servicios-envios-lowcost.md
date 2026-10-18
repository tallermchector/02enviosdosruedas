# 📌 Ruta URL Relativa: /servicios/envios-lowcost
**Complejidad:** 4.61 KB (4,720 bytes)

## 1. Arquitectura de Código e Interfaz
- **Árbol de Componentes:**
  - `EnviosLowCostPage` (`src/app/servicios/envios-lowcost/page.tsx`)
    - `LowCostHero` (`src/components/servicios/lowcost/LowCostHero.tsx`)
      - [`CTANestedPill`](globales.md#ctanestedpill)
      - [`Badge`](globales.md#badge)
    - `LowCostFeatures` (`src/components/servicios/lowcost/LowCostFeatures.tsx`)
      - [`BentoGrid`](globales.md#bentogrid)
    - `LowCostPricing` (`src/components/servicios/lowcost/LowCostPricing.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)
    - `LowCostBenefits` (`src/components/servicios/lowcost/LowCostBenefits.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)
    - `LowCostHowItWorks` (`src/components/servicios/lowcost/LowCostHowItWorks.tsx`)
      - `StepperHorizontal` (`src/components/ui/StepperHorizontal.tsx`)

- **Estado Local y Handlers:**
  - Control de horario de corte (corte 13:00 hs para entregas en el día antes de las 19:00 hs).
  - Integración de esquema JSON-LD para `Service` de Paquetería LowCost.

- **Interfaces y Props:**
```typescript
// Componente de servidor (Page)
export default function EnviosLowCostPage(): JSX.Element;

interface LowCostTariff {
  zone: string;
  distance: string;
  price: number;
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

### 1. LowCost Hero Section (`LowCostHero`)
- **Fondo y Contenedores:** Fondo Electric Speed Blue (`#0950F6`).
- **Composición y Maquetación UI:** Layout asimétrico con badge de ahorro e información clave de horarios (corte 13:00 hs, entrega hasta 19:00 hs).
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Ilustración plana de furgoneta o flotilla de motos agrupadas saliendo del hub en Mar del Plata con paquetes consolidados.
  * **Estilo Gráfico:** Neobrutalismo corporativo con acentos amarillos.
  * **Paleta de Colores Aplicada:** `#0950F6`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton` ("PAQUETERÍA Y ENCOMIENDAS LOWCOST EN MAR DEL PLATA"), `Bebas Neue` ("HASTA 40% MENOS QUE EL EXPRESS"), `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** SVGs de Caja, Piggybank/Ahorro, Reloj de corte 13:00 hs.

### 2. LowCost Features Section (`LowCostFeatures`)
- **Fondo y Contenedores:** Slate Canvas (`#F8FAFC`).
- **Composición y Maquetación UI:** Grilla Bento para ruteo masivo, ventana horaria de 13hs a 19hs, retiro a domicilio y seguimiento digital.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Diagrama gráfico de optimización de rutas con múltiples paradas consecutivas.
  * **Estilo Gráfico:** Iconografía limpia sobre contenedores de doble bisel.
  * **Paleta de Colores Aplicada:** `#F8FAFC`, `#0636A5`, `#FFEC01`.
  * **Tipografía en Uso:** `Anton` para títulos, `IBM Plex Sans` para descripciones.
  * **Elementos UI e Iconografía:** Lucide Route, Truck, Calendar, Home.

### 3. LowCost Pricing Section (`LowCostPricing`)
- **Fondo y Contenedores:** Fondo Electric Speed Blue (`#0950F6`) con tarjeta `Double Bezel Card`.
- **Composición y Maquetación UI:** Lista comparativa de precios para LowCost ($3.000 de 0 a 3km, $4.000 de 3 a 5km, $5.300 de 5 a 7km, $7.000 de 7 a 10km, +$700/km adicional).
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Tabla de tarifas con resaltado visual del ahorro frente a envíos tradicionales.
  * **Estilo Gráfico:** High contrast brutalism.
  * **Paleta de Colores Aplicada:** `#0950F6`, `#FFEC01`, `#FFFFFF`, `#001035`.
  * **Tipografía en Uso:** `Bebas Neue` para los precios, `Geist Mono` para rangos de distancia.
  * **Elementos UI e Iconografía:** Botón CTA a cotizador LowCost.

### 4. LowCost Benefits Section (`LowCostBenefits`)
- **Fondo y Contenedores:** Deep Midnight Navy (`#052C87`).
- **Composición y Maquetación UI:** Matriz de ventajas B2B para tiendas online que despachan volumen diario.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Render de cajas apiladas listas para salir a reparto con etiquetado de código QR.
  * **Estilo Gráfico:** 3D subtle isometric.
  * **Paleta de Colores Aplicada:** `#052C87`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton` para beneficios, `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Iconos de Reducción de costos, Entrega garantizada, Flexibilidad.

### 5. LowCost How It Works Section (`LowCostHowItWorks`)
- **Fondo y Contenedores:** Slate Canvas (`#F8FAFC`).
- **Composición y Maquetación UI:** Stepper Horizontal de 4 pasos (1. Cargás tus pedidos antes de las 13hs -> 2. Retiramos por tu local -> 3. Consolidados en Hub Friuli 1972 -> 4. Entregamos en el día).
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Ilustraciones secuenciales de cada paso del proceso operativo.
  * **Estilo Gráfico:** Esquema paso a paso con conectores en amarillo neón.
  * **Paleta de Colores Aplicada:** `#F8FAFC`, `#0636A5`, `#FFEC01`.
  * **Tipografía en Uso:** `Bebas Neue` para los números de paso ("PASO 01", "PASO 02", etc.), `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Iconos del Stepper: Upload, Package, Warehouse, Door.
