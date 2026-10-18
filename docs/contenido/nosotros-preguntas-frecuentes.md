# 📌 Ruta URL Relativa: /nosotros/preguntas-frecuentes
**Complejidad:** 2.58 KB (2,641 bytes)

## 1. Arquitectura de Código e Interfaz
- **Árbol de Componentes:**
  - `PreguntasFrecuentesPage` (`src/app/nosotros/preguntas-frecuentes/page.tsx`)
    - `FaqHero` (`src/components/nosotros/preguntas-frecuentes/FaqHero.tsx`)
    - `FaqCategories` (`src/components/nosotros/preguntas-frecuentes/Faq-categories.tsx`)
      - `FaqAccordion` (`src/components/nosotros/preguntas-frecuentes/FaqAccordion.tsx`)
        - [`DoubleBezelCard`](globales.md#doublebezelcard)
    - `FaqCta` (`src/components/nosotros/preguntas-frecuentes/FaqCta.tsx`)
      - [`CTANestedPill`](globales.md#ctanestedpill)

- **Estado Local y Handlers:**
  - Filtrado interactivo por categoría de pregunta (Express, LowCost, Flex MercadoLibre, 3PL, Medios de Pago, Cobertura) y estado colapsado/desplegado del acordeón con animaciones de altura en Framer Motion.
  - Generación dinámica del esquema JSON-LD `FAQPage` a partir del array unificado `FAQ_DATA`.

- **Interfaces y Props:**
```typescript
// Componente de servidor (Page)
export default function PreguntasFrecuentesPage(): JSX.Element;

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FaqCategory {
  id: string;
  name: string;
  icon: string;
  questions: FaqItem[];
}
```

- **Componentes Compartidos:**
  - [`OptimizedHeader`](globales.md#header)
  - [`OptimizedFooter`](globales.md#footer)
  - [`DoubleBezelCard`](globales.md#doublebezelcard)
  - [`CTANestedPill`](globales.md#ctanestedpill)

---

## 2. Mapa de Recursos Visuales, Estilo e Imágenes (Por Sección)

### 1. FAQ Hero Section (`FaqHero`)
- **Fondo y Contenedores:** Canvas principal en Azul Egipcio (`bg-brand-blue-700`) con buscador visual destacado.
- **Composición UI:** Titular de amplio impacto con barra de búsqueda rápida para filtrar preguntas frecuentes.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Ilustración 3D de signo de interrogación neobrutalista flotando sobre una caja de paquete envuelta con cinta dorada.
  * **Estilo Gráfico:** Neobrutalismo vial con el acento Amarillo Neón (`#FFEC01`).
  * **Paleta de Colores Aplicada:** `#0636A5`, `#FFEC01`, `#FFFFFF`, `#001035`.
  * **Tipografía en Uso:** `Anton` ("¿EN QUÉ TE PODEMOS AYUDAR HOY?"), `Bebas Neue` ("CENTRO DE AYUDA Y PREGUNTAS FRECUENTES"), `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** SVGs de Lupa de Búsqueda, Signo de Interrogación y Rayo de Soporte.

### 2. FAQ Categories & Accordion (`FaqCategories`, `FaqAccordion`)
- **Fondo y Contenedores:** Slate Canvas (`#F8FAFC`) con pestañas de categoría esmeriladas y acordeón en tarjetas `Double Bezel Card`.
- **Composición UI:** Selector de categoría superior en forma de píldoras horizontales + lista de acordeones expansibles con respuestas claras redactadas en voseo rioplatense.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Iconos vectoriales a medida para cada categoría de servicio (Moto Express, Paquete LowCost, MercadoLibre Flex, Depósito 3PL).
  * **Estilo Gráfico:** Pestañas interactivas con cambio de color activo (`bg-brand-yellow` cuando seleccionado).
  * **Paleta de Colores Aplicada:** `#F8FAFC`, `#0636A5`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton` para las preguntas, `IBM Plex Sans` para las respuestas detalladas.
  * **Elementos UI e Iconografía:** Lucide ChevronDown, HelpCircle, CheckCircle2.

### 3. FAQ Dynamic CTA (`FaqCta`)
- **Fondo y Contenedores:** Tarjeta en Azul Noche (`#052C87`) con marco doble y destello neón.
- **Composición UI:** Bloque de cierre para usuarios que no encontraron respuesta a su consulta, redirigiendo a soporte humano directo vía WhatsApp.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Render de asesor de soporte con headset y distintivo de Envíos DosRuedas.
  * **Estilo Gráfico:** High conversion card con botón flotante amarillo.
  * **Paleta de Colores Aplicada:** `#052C87`, `#FFEC01`, `#FFFFFF`, `#25D366`.
  * **Tipografía en Uso:** `Anton` ("¿TENÉS OTRA CONSULTA O REQUERÍS ASISTENCIA PERSONALIZADA?"), `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Botón [`CTANestedPill`](globales.md#ctanestedpill) ("Hablá con un Asesor por WhatsApp").
