# 📌 Ruta URL Relativa: /servicios/plan-emprendedores
**Complejidad:** 4.46 KB (4,566 bytes)

## 1. Arquitectura de Código e Interfaz
- **Árbol de Componentes:**
  - `PlanEmprendedoresPage` (`src/app/servicios/plan-emprendedores/page.tsx`)
    - `EmprendedoresHero` (`src/components/servicios/emprendedores/EmprendedoresHero.tsx`)
      - [`CTANestedPill`](globales.md#ctanestedpill)
      - [`Badge`](globales.md#badge)
    - `EmprendedoresFeatures` (`src/components/servicios/emprendedores/EmprendedoresFeatures.tsx`)
      - [`BentoGrid`](globales.md#bentogrid)
    - `EmprendedoresBenefits` (`src/components/servicios/emprendedores/EmprendedoresBenefits.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)
    - `EmprendedoresPricing` (`src/components/servicios/emprendedores/EmprendedoresPricing.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)
      - [`CTANestedPill`](globales.md#ctanestedpill)

- **Estado Local y Handlers:**
  - Configuración de modalidades 3PL: E-Commerce Same Day (Stock en Friuli 1972), E-Commerce Next Day (24hs), y DropOFF con 20% de descuento.
  - Gestión de servicios añadidos: Cobro contrareembolso sin cargo adicional.

- **Interfaces y Props:**
```typescript
// Componente de servidor (Page)
export default function PlanEmprendedoresPage(): JSX.Element;

interface Plan3PLOption {
  title: string;
  badge: string;
  description: string;
  features: string[];
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

### 1. Emprendedores Hero Section (`EmprendedoresHero`)
- **Fondo y Contenedores:** Fondo Electric Speed Blue (`#0950F6`).
- **Composición y Maquetación UI:** Hero asimétrico enfocado en la infraestructura 3PL en Mar del Plata (Hub Friuli 1972).
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Fotografía/Render del Hub Logístico y Depósito en Friuli 1972, mostrando estanterías organizadas, mesa de picking con escáner QR y paquetes listos para salir.
  * **Estilo Gráfico:** Estética industrial-moderna con acentos de color amarillo vial.
  * **Paleta de Colores Aplicada:** `#0950F6`, `#FFEC01`, `#FFFFFF`, `#001035`.
  * **Tipografía en Uso:** `Anton` ("PAQUETERÍA E-COMMERCE Y LOGÍSTICA 3PL EN MAR DEL PLATA"), `Bebas Neue` ("TU DEPÓSITO Y PICKING CENTRALIZADO"), `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** SVGs de Depósito, QR Code, Caja de Envío, Escudo 3PL.

### 2. Emprendedores Features Section (`EmprendedoresFeatures`)
- **Fondo y Contenedores:** Slate Canvas (`#F8FAFC`).
- **Composición y Maquetación UI:** Bento Grid de 4 pilares: Almacenamiento en Friuli 1972, Picking QR instantáneo, DropOFF con 20% OFF, y Cobro contrareembolso gratuito.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Ilustraciones vectoriales de flujo de trabajo 3PL (Stock -> Picking -> Empaque -> Despacho).
  * **Estilo Gráfico:** Flat design con bordes oscuros definidos.
  * **Paleta de Colores Aplicada:** `#F8FAFC`, `#0636A5`, `#FFEC01`.
  * **Tipografía en Uso:** `Anton` para encabezados de funcionalidades, `IBM Plex Sans` para descripciones.
  * **Elementos UI e Iconografía:** Lucide Warehouse, QrCode, Tag, DollarSign.

### 3. Emprendedores Benefits Section (`EmprendedoresBenefits`)
- **Fondo y Contenedores:** Deep Midnight Navy (`#052C87`).
- **Composición y Maquetación UI:** Cuadrícula de tarjetas de beneficios estratégicos para escalar ventas online sin preocuparse por la logística.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Ilustración de gráfico de crecimiento e-commerce junto a la flota de Envíos DosRuedas.
  * **Estilo Gráfico:** Tarjetas con doble bisel y resaltados amarillos.
  * **Paleta de Colores Aplicada:** `#052C87`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton`, `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Iconos de Ahorro de Tiempo, Control de Stock en tiempo real, Recolección sin cargo (para +10 envíos).

### 4. Emprendedores Pricing / Plans Section (`EmprendedoresPricing`)
- **Fondo y Contenedores:** Electric Speed Blue (`#0950F6`).
- **Composición y Maquetación UI:** 3 tarjetas de planes adaptadas según el volumen del comercio (Same Day desde Hub, Next Day 24hs, y Modalidad DropOFF -20% OFF).
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Badges y etiquetas distintivas para cada modalidad de plan.
  * **Estilo Gráfico:** Tarjetas Neobrutalistas con borde exterior e interior.
  * **Paleta de Colores Aplicada:** `#0950F6`, `#FFEC01`, `#001035`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton` para el título del plan, `Bebas Neue` para los descuentos/destacados, `IBM Plex Sans` para la lista de características.
  * **Elementos UI e Iconografía:** Botón CTA [`CTANestedPill`](globales.md#ctanestedpill) con leyenda "Solicitá tu cotización 3PL a medida".
