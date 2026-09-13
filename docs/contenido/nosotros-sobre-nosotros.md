# 📌 Ruta URL Relativa: /nosotros/sobre-nosotros
**Complejidad:** 3.88 KB (3,972 bytes)

## 1. Arquitectura de Código e Interfaz
- **Árbol de Componentes:**
  - `SobreNosotrosPage` (`src/app/nosotros/sobre-nosotros/page.tsx`)
    - `AboutHero` (`src/components/nosotros/sobre-nosotros/AboutHero.tsx`)
    - `AboutAdvantages` (`src/components/nosotros/sobre-nosotros/AboutAdvantages.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)
    - `AboutValues` (`src/components/nosotros/sobre-nosotros/AboutValues.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)
    - `AboutTimeline` (`src/components/nosotros/sobre-nosotros/AboutTimeline.tsx`)
      - `TimelineAnimation` (`src/components/ui/timeline-animation.tsx`)
    - `AboutTeam` (`src/components/nosotros/sobre-nosotros/AboutTeam.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)
    - `AboutMissionVision` (`src/components/nosotros/sobre-nosotros/AboutMissionVision.tsx`)

- **Estado Local y Handlers:**
  - Animaciones de scroll y revelado progresivo coordinados con Framer Motion y orbes 3D ambientales con desenfoque CSS (`blur-[130px]`).
  - Inyección de esquema estructurado JSON-LD `AboutPage` con la trayectoria institucional y dotación operativa.

- **Interfaces y Props:**
```typescript
// Componente de servidor (Page)
export default function SobreNosotrosPage(): JSX.Element;

interface TeamMember {
  name: string;
  role: string;
  photoUrl: string;
  bio: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
```

- **Componentes Compartidos:**
  - [`OptimizedHeader`](globales.md#header)
  - [`OptimizedFooter`](globales.md#footer)
  - [`DoubleBezelCard`](globales.md#doublebezelcard)

---

## 2. Mapa de Recursos Visuales, Estilo e Imágenes (Por Sección)

### 1. About Hero Section (`AboutHero`)
- **Fondo y Contenedores:** Canvas Blanco Puro (`bg-brand-white-50`) con orbe azul ambiental flotante (`bg-brand-blue-500/5`).
- **Composición UI:** Layout split 7/5 con titular de historia institucional (15+ años) y foto de la flota de cadetes.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Fotografía editorial de alta resolución de la flota de motos y cadetes de Envíos DosRuedas formados frente al mar en Mar del Plata.
  * **Estilo Gráfico:** Fotografía periodística de alta velocidad con tratamiento neobrutalista.
  * **Paleta de Colores Aplicada:** `#0636A5`, `#FFEC01`, `#FFFFFF`, `#001035`.
  * **Tipografía en Uso:** `Anton` ("INFRAESTRUCTURA LOGÍSTICA CON IDENTIDAD MARPLATENSE"), `Bebas Neue` ("MÁS DE 15 AÑOS EN LAS CALLES DE MDP"), `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Badge flotante en `-rotate-1` con el año de origen.

### 2. Ventajas Territoriales & Valores (`AboutAdvantages`, `AboutValues`)
- **Fondo y Contenedores:** Slate Surface (`#F8FAFC`) con tarjetas de doble bisel.
- **Composición UI:** Bento grid de ventajas estratégicas (Hub propio en Friuli 1972, conocimiento del ruteo local, SLA 99.4% a tiempo).
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Vector del mapa de barrios de Mar del Plata (Centro, Playa Grande, Güemes, Puerto, Batán) interconectados por rutas doradas.
  * **Estilo Gráfico:** Flat vector graphic.
  * **Paleta de Colores Aplicada:** `#0636A5`, `#FFEC01`, `#F8FAFC`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton` para títulos, `IBM Plex Sans` para cuerpos.
  * **Elementos UI e Iconografía:** Lucide Map, ShieldCheck, HeartHandshake, Zap.

### 3. Línea de Tiempo Histórica (`AboutTimeline`)
- **Fondo y Contenedores:** Canvas Blanco con eje vertical de tiempo en Amarillo Neón.
- **Composición UI:** Timeline vertical animado con hitos históricos (fundación, incorporación de Envíos Flex, apertura del Hub Friuli 1972 en 2026).
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Serie fotográfica histórica de la evolución de la empresa desde sus inicios hasta el presente.
  * **Estilo Gráfico:** Fotografía vintage vs moderna con marcos duros.
  * **Paleta de Colores Aplicada:** `#0636A5`, `#FFEC01`, `#001035`.
  * **Tipografía en Uso:** `Bebas Neue` para destacar los años ("2011", "2018", "2024", "2026"), `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Puntos de hito de la cronología con destellos neón.

### 4. Equipo Operativo & Misión/Visión (`AboutTeam`, `AboutMissionVision`)
- **Fondo y Contenedores:** Tarjetas oscuras en Azul Egipcio (`#052C87`) con doble marco.
- **Composición UI:** Grilla de perfiles clave del equipo directivo y operativo, seguido de tarjetas gigantes para Misión y Visión.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Retratos fotográficos profesionales del equipo humano de Envíos DosRuedas vistiendo la indumentaria oficial.
  * **Estilo Gráfico:** Retratos de estudio con fondo contrastado azul.
  * **Paleta de Colores Aplicada:** `#052C87`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton` ("NUESTRO EQUIPO HUMANIZADO"), `Bebas Neue` ("MISIÓN 2026"), `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Iconos de Liderazgo, Visión Futura, Compromiso Social.
