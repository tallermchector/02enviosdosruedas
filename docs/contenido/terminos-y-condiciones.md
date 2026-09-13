# 📌 Ruta URL Relativa: /terminos-y-condiciones
**Complejidad:** 1.36 KB (1,396 bytes)

## 1. Arquitectura de Código e Interfaz
- **Árbol de Componentes:**
  - `TerminosYCondicionesPage` (`src/app/terminos-y-condiciones/page.tsx`)
    - `TermsContent` (`src/app/terminos-y-condiciones/TermsContent.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)

- **Estado Local y Handlers:**
  - Documento de condiciones del servicio de mensajería, cadetería urbana, cobertura, responsabilidad de bultos (hasta 5 kg) y ventanas de entrega para Envíos Express, LowCost y Flex.

- **Interfaces y Props:**
```typescript
// Componente de servidor (Page)
export default function TerminosYCondicionesPage(): JSX.Element;
```

- **Componentes Compartidos:**
  - [`OptimizedHeader`](globales.md#header)
  - [`OptimizedFooter`](globales.md#footer)
  - [`DoubleBezelCard`](globales.md#doublebezelcard)

---

## 2. Mapa de Recursos Visuales, Estilo e Imágenes (Por Sección)

### 1. Terms Content Section (`TermsContent`)
- **Fondo y Contenedores:** Canvas Slate Surface (`#F8FAFC`) con tarjeta principal de doble bisel.
- **Composición UI:** Disposición en una columna central con cláusulas legibles numeradas.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Icono de balanza legal e insignia de normativas de transporte urbano en Mar del Plata.
  * **Estilo Gráfico:** Neobrutalismo editorial contenido.
  * **Paleta de Colores Aplicada:** `#F8FAFC`, `#0636A5`, `#001035`, `#FFEC01`.
  * **Tipografía en Uso:** `Anton` ("TÉRMINOS Y CONDICIONES DEL SERVICIO"), `Bebas Neue` ("MAR DEL PLATA 2026"), `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Lucide Scale, FileCheck, AlertTriangle.
