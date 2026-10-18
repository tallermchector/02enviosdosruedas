# 📌 Ruta URL Relativa: /revisar
**Complejidad:** 1.29 KB (1,325 bytes)

## 1. Arquitectura de Código e Interfaz
- **Árbol de Componentes:**
  - `RevisarPage` (`src/app/revisar/page.tsx`)
    - `RevisarClient` (`src/app/revisar/RevisarClient.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)
      - [`CTANestedPill`](globales.md#ctanestedpill)

- **Estado Local y Handlers:**
  - Panel de verificación de pedidos o itinerarios de envío. Permite ingresar el código de seguimiento o número de guía para auditar el estado del paquete (En Preparación, En Tránsito, Entregado).
  - Comunicación con Server Actions (`src/app/revisar/actions.ts`).

- **Interfaces y Props:**
```typescript
// Componente de servidor (Page)
export default function RevisarPage(): JSX.Element;

interface TrackingResult {
  trackingCode: string;
  status: 'PENDING' | 'IN_TRANSIT' | 'DELIVERED' | 'CANCELLED';
  origin: string;
  destination: string;
  updatedAt: string;
}
```

- **Componentes Compartidos:**
  - [`OptimizedHeader`](globales.md#header)
  - [`OptimizedFooter`](globales.md#footer)
  - [`DoubleBezelCard`](globales.md#doublebezelcard)
  - [`CTANestedPill`](globales.md#ctanestedpill)

---

## 2. Mapa de Recursos Visuales, Estilo e Imágenes (Por Sección)

### 1. Tracking Review Section (`RevisarClient`)
- **Fondo y Contenedores:** Canvas principal en Electric Speed Blue (`#0950F6`) con tarjeta central `Double Bezel Card`.
- **Composición UI:** Campo de búsqueda centrado para código de seguimiento de 8 a 12 caracteres + línea de tiempo del paquete.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Gráfico vectorial de trazado de paquete navegando entre los nodos de Mar del Plata.
  * **Estilo Gráfico:** Interfaz neobrutalista con estado activo en amarillo neón `#FFEC01`.
  * **Paleta de Colores Aplicada:** `#0950F6`, `#052C87`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton` ("CONSULTÁ EL ESTADO DE TU ENVÍO EN TIEMPO REAL"), `Bebas Neue` ("RASTREO DE PAQUETES"), `Geist Mono` para el número de guía, `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Lucide Search, Package, MapPin, CheckCircle.
