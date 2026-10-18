# 📌 Ruta URL Relativa: /cotizar/lowcost
**Complejidad:** 3.86 KB (3,957 bytes)

## 1. Arquitectura de Código e Interfaz
- **Árbol de Componentes:**
  - `Page` (`src/app/cotizar/lowcost/page.tsx`)
    - `CotizadorLowCostHero` (`src/components/cotizar/lowcost/CotizadorLowCostHero`)
    - `Suspense` (`FormSkeleton`)
      - `LowCostFormAsync`
        - `CotizadorLowCostForm` (`src/components/cotizar/lowcost/CotizadorLowCostForm.tsx`)
          - [`AddressAutocomplete`](globales.md#addressautocomplete)
          - [`DynamicRouteMap`](globales.md#leafletroutemap)
          - [`DoubleBezelCard`](globales.md#doublebezelcard)
          - [`CTANestedPill`](globales.md#ctanestedpill)
        - `BatchGrid` (`src/components/cotizar/lowcost/BatchGrid.tsx`)
          - [`DoubleBezelCard`](globales.md#doublebezelcard)
    - `CotizadorLowCostDetails` (`src/components/cotizar/lowcost/CotizadorLowCostDetails`)
    - `CotizadorLowCostHelp` (`src/components/cotizar/lowcost/CotizadorLowCostHelp`)

- **Estado Local y Handlers:**
  - Carga asíncrona de rangos de precios vía Prisma Postgres (`prisma.priceRange.findMany()`).
  - Matriz de envíos múltiples / plantilla de lotes (`BatchGrid`) para cargar de 2 a 50 envíos en lote con cálculo consolidado de descuento por volumen y horario de corte fijado a las 13:00 hs.

- **Interfaces y Props:**
```typescript
interface LowCostBatchItem {
  id: string;
  recipientName: string;
  address: string;
  neighborhood: string;
  notes?: string;
}

interface LowCostFormAsyncProps {
  priceRanges: PriceRange[];
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

### 1. Hero Cotizador LowCost (`CotizadorLowCostHero`)
- **Fondo y Contenedores:** Canvas principal en Electric Speed Blue (`#0950F6`).
- **Composición UI:** Titular de alto impacto con llamada a la economía de escala (pedidos antes de las 13:00 hs).
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Ilustración de planilla de despacho con sello de descuento y camión de reparto urbano.
  * **Estilo Gráfico:** High-energy visual stencil.
  * **Paleta de Colores Aplicada:** `#0950F6`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton` ("COTIZÁ TU PAQUETERÍA LOWCOST EN MAR DEL PLATA"), `Bebas Neue` ("MÁXIMA RENTABILIDAD Y ENTREGAS PROGRAMADAS").
  * **Elementos UI e Iconografía:** SVGs de Planilla, Alcancía y Furgoneta.

### 2. Formulario & Planilla Multi-Destino (`CotizadorLowCostForm`, `BatchGrid`)
- **Fondo y Contenedores:** Formulario split con contenedores esmerilados y grilla multi-destino en tarjeta `Double Bezel Card`.
- **Composición UI:** Campos para carga individual o matriz dinámica estilo Excel/Notion para añadir múltiples direcciones en Mar del Plata.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Interfaz de tabla densa estilo software logístico enterprise.
  * **Estilo Gráfico:** Neo-brutalismo con bordes marcados.
  * **Paleta de Colores Aplicada:** `#0950F6`, `#052C87`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Geist Mono` para importes y cantidades, `Bebas Neue` para los botones de acción, `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Botones de "Agregar Destino", "Exportar a WhatsApp / Excel".

### 3. Detalles de Servicio & Soporte (`CotizadorLowCostDetails`, `CotizadorLowCostHelp`)
- **Fondo y Contenedores:** Bloque con fondo esmerilado (`bg-white/10`).
- **Composición UI:** Requisitos para el ruteo de 13hs a 19hs e información de soporte para consultas por volumen masivo.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Iconografía explicativa de horario de recepción e itinerario de reparto.
  * **Estilo Gráfico:** Diagramas limpios.
  * **Paleta de Colores Aplicada:** `#0950F6`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton`, `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Lucide HelpCircle, PhoneCall.
