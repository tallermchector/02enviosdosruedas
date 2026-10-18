# 📌 Ruta URL Relativa: /
**Complejidad:** 3.12 KB (3,198 bytes)

## 1. Arquitectura de Código e Interfaz
- **Árbol de Componentes:**
  - `Home` (`src/app/page.tsx`)
    - `HeroAnimado` (`src/components/home/HeroAnimado.tsx`)
      - [`CTANestedPill`](globales.md#ctanestedpill)
      - [`FloatTiltCard`](globales.md#floattiltcard)
      - `LogisticaNetworkCanvas` (`src/components/home/LogisticaNetworkCanvas.tsx`)
    - `VisionSection` (`src/components/home/VisionSection.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)
    - `ServicesOverview` (`src/components/home/ServicesOverview.tsx`)
      - [`BentoGrid`](globales.md#bentogrid)
    - `SliderServicios` (Dynamic Import) (`src/components/home/SliderServicios.tsx`)
    - `EmprendedoresHome` (Dynamic Import) (`src/components/home/EmprendedoresHome.tsx`)
    - `SocialProofSection` (Dynamic Import) (`src/components/home/SocialProofSection.tsx`)
    - `CtaSection` (Dynamic Import) (`src/components/home/CtaSection.tsx`)
      - [`CTANestedPill`](globales.md#ctanestedpill)

- **Estado Local y Handlers:**
  - La página principal coordina la carga diferida (`next/dynamic`) de secciones bajo el pliegue (below-the-fold) para optimizar el FCP (First Contentful Paint) y LCP (Largest Contentful Paint).
  - Los handlers interaccionan a nivel de componentes hijos (ej: tab activado en `ServicesOverview`, selección en cotizador rápido del Hero).

- **Interfaces y Props:**
```typescript
// Componente de servidor principal (Page)
export default function Home(): JSX.Element;

// Schema JSON-LD WebSite
interface WebSiteSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  potentialAction: object;
}
```

- **Componentes Compartidos:**
  - [`OptimizedHeader`](globales.md#header)
  - [`OptimizedFooter`](globales.md#footer)
  - [`DoubleBezelCard`](globales.md#doublebezelcard)
  - [`CTANestedPill`](globales.md#ctanestedpill)
  - [`BentoGrid`](globales.md#bentogrid)
  - [`FloatTiltCard`](globales.md#floattiltcard)

---

## 2. Mapa de Recursos Visuales, Estilo e Imágenes (Por Sección)

### 1. Hero Section (`HeroAnimado`)
- **Fondo y Contenedores:** Canvas principal con degradado y red procedural en Azul Egipcio (`bg-brand-blue-700` a `bg-brand-blue-900`). Tarjeta Flotante Hero en `Double Bezel Card` (`border-white/20`, `bg-white/10 backdrop-blur-md`).
- **Composición y Maquetación UI:** Layout asimétrico Split Hero 7/5 (7 columnas para propuesta de valor y CTA, 5 columnas para la tarjeta interactiva de cotización/red de logística).
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Render 3D fotorrealista en perspectiva de 1000px de un Rider de Envíos DosRuedas con mochila de carga amarilla cruzando la costa de Mar del Plata (Playa Grande / Casino Central de fondo), iluminación diurna de alta velocidad.
  * **Estilo Gráfico:** Neo-brutalismo corporativo refinado, bordes definidos (`border-2 border-brand-blue`), efecto Tilt 3D al hover, destellos y partículas sutiles de velocidad.
  * **Paleta de Colores Aplicada:** `#0636A5` (Azul Egipcio), `#FFEC01` (Amarillo Vial), `#FFFFFF` (Blanco Puro), `#001035` (Navy Profundo).
  * **Tipografía en Uso:** `Anton` para el titular monumental ("LOGÍSTICA MÓVIL Y DE ÚLTIMA MILLA EN MAR DEL PLATA"), `Bebas Neue` para badges ("OPERATIVO 2026"), `IBM Plex Sans` para la bajada ("Cotizá tu envío en segundos y despachá con la red más rápida de la ciudad").
  * **Elementos UI e Iconografía:** SVGs de Rayo de Velocidad, Escudo de Garantía, Pin de Ubicación (Mar del Plata). Animaciones Framer Motion en entrada staggered y física de resortes (`stiffness: 100`).

### 2. Vision Section (`VisionSection`)
- **Fondo y Contenedores:** Fondo claro `bg-slate-50` con contenedor `Double Bezel` interior en `bg-white`.
- **Composición y Maquetación UI:** Fila de 4 métricas clave ordenadas con jerarquía limpia en tipografía mono.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Iconografía plana vectorial de infraestructura local (Mapeo de calles de MDP, Centro de Distribución en Friuli 1972).
  * **Estilo Gráfico:** Minimalismo industrial con acentos en amarillo vial.
  * **Paleta de Colores Aplicada:** `#0636A5`, `#FFEC01`, `#001035`, `#F8FAFC`.
  * **Tipografía en Uso:** `Bebas Neue` para números y métricas ("15+ AÑOS", "99.4% A TIEMPO", "+500K PAQUETES"), `IBM Plex Sans` para leyendas descriptivas.
  * **Elementos UI e Iconografía:** Iconos Lucide de Reloj, Verificación, Check de Entrega y Mapa.

### 3. Services Overview Section (`ServicesOverview`)
- **Fondo y Contenedores:** Canvas Blanco Puro (`bg-white`) con grilla Bento Grid asimétrica 7/5/12.
- **Composición y Maquetación UI:** Composición Bento Grid con tarjetas de servicios (Express, Flex MercadoLibre, LowCost, 3PL Emprendedores).
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Capturas de interfaz del panel de ruteo, paquete con etiqueta Flex oficial de MercadoLibre, y camioneta de reparto urbano.
  * **Estilo Gráfico:** Tarjetas con sombras teñidas tipo cómic/brutalista (`shadow-brutalist`), etiquetas en `-rotate-1`.
  * **Paleta de Colores Aplicada:** `#0636A5`, `#FFEC01`, `#FFFFFF`, `#052C87`.
  * **Tipografía en Uso:** `Anton` para nombres de servicios ("EXPRESS 3HS", "ENVÍOS FLEX"), `IBM Plex Sans` para explicaciones.
  * **Elementos UI e Iconografía:** SVGs personalizados de Moto, Paquete, Código de Barras y Furgón.

### 4. Tailored Solutions Slider (`SliderServicios`)
- **Fondo y Contenedores:** Fondo Azul Navy (`bg-brand-blue-950`).
- **Composición y Maquetación UI:** Carrusel interactivo horizontal con navegación por arrastre o botones de flechas.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Fotografía editorial de comercios marplatenses (locales de indumentaria en Güemes, gastronomía y repuestos).
  * **Estilo Gráfico:** Tarjetas fotográficas con superposición de gradiente azul y acentos en amarillo neón.
  * **Paleta de Colores Aplicada:** `#001035`, `#0636A5`, `#FFEC01`.
  * **Tipografía en Uso:** `Anton` para titulares de industria, `IBM Plex Sans` para casos de uso.
  * **Elementos UI e Iconografía:** Flechas de navegación de carrusel, indicador de posición.

### 5. Entrepreneurs & B2B Section (`EmprendedoresHome`)
- **Fondo y Contenedores:** Bloque con fondo de alto impacto en Azul Egipcio y tarjeta central destacada con borde doble.
- **Composición y Maquetación UI:** Distribución en 2 columnas: izquierda beneficios del Plan Emprendedores, derecha calculadora de ahorro estimado.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Ilustración plana de caja de e-commerce lista para despacho con cinta adhesiva de marca "Envíos DosRuedas".
  * **Estilo Gráfico:** High-contrast flat design con sombras sin desenfoque.
  * **Paleta de Colores Aplicada:** `#0636A5`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton` ("POTENCIÁ TU E-COMMERCE EN MDP"), `Bebas Neue` ("HASTA 35% DE AHORRO EN LOGÍSTICA"), `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Iconos de Gráfico Creciente, Depósito/Picking y Entrega Garantizada.

### 6. Social Proof Segment (`SocialProofSection`)
- **Fondo y Contenedores:** Fondo claro con tarjetas de testimonios verifcados de Google Business.
- **Composición y Maquetación UI:** Rejilla de 3 testimonios reales de clientes y comercios de Mar del Plata.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Avatares y fotos de perfil de emprendedores y clientes locales.
  * **Estilo Gráfico:** Tarjetas limpias con insignias de calificación (5 estrellas amarillas).
  * **Paleta de Colores Aplicada:** `#FFFFFF`, `#0636A5`, `#FFEC01`, `#F8FAFC`.
  * **Tipografía en Uso:** `IBM Plex Sans` para las citas, `Bebas Neue` para los nombres y rubros.
  * **Elementos UI e Iconografía:** Estrellas de valoración Google, comillas vectoriales.

### 7. Call To Action High Conversion (`CtaSection`)
- **Fondo y Contenedores:** Bloque monumental de cierre en Azul Profundo (`bg-brand-blue-900`) con destello Amarillo Neón (`shadow-cta-glow`).
- **Composición y Maquetación UI:** Contenedor centrado con CTA gigante en Nested Pill estilo Rioplatense ("Empezá a despachar hoy").
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Fondo geométrico vectorial con trazados de rutas de Mar del Plata.
  * **Estilo Gráfico:** Neobrutalismo vial con botón flotante amarillo.
  * **Paleta de Colores Aplicada:** `#0636A5`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton` ("¿LISTO PARA ACELERAR TUS ENTREGAS EN MAR DEL PLATA?"), `IBM Plex Sans` para subtítulo.
  * **Elementos UI e Iconografía:** Botón [`CTANestedPill`](globales.md#ctanestedpill) con icono de Flecha en movimiento.
