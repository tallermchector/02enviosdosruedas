# 📌 Ruta URL Relativa: /nosotros/nuestras-redes
**Complejidad:** 1.63 KB (1,668 bytes)

## 1. Arquitectura de Código e Interfaz
- **Árbol de Componentes:**
  - `NuestrasRedesPage` (`src/app/nosotros/nuestras-redes/page.tsx`)
    - `NetworksHero` (`src/components/nosotros/nuestras-redes/NetworksHero.tsx`)
    - `NetworksChannels` (`src/components/nosotros/nuestras-redes/NetworksChannels.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)
    - `RecentPosts` (`src/components/nosotros/nuestras-redes/RecentPosts.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)

- **Estado Local y Handlers:**
  - Despliegue interactivo de canales sociales con simulación de feed en tiempo real de Instagram y TikTok. Orbes 3D animados en segundo plano.

- **Interfaces y Props:**
```typescript
// Componente de servidor (Page)
export default function NuestrasRedesPage(): JSX.Element;

interface SocialChannel {
  id: string;
  platform: 'instagram' | 'facebook' | 'whatsapp' | 'tiktok';
  handle: string;
  followersCount: string;
  url: string;
  description: string;
}

interface SocialPost {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
  caption: string;
  date: string;
}
```

- **Componentes Compartidos:**
  - [`OptimizedHeader`](globales.md#header)
  - [`OptimizedFooter`](globales.md#footer)
  - [`DoubleBezelCard`](globales.md#doublebezelcard)

---

## 2. Mapa de Recursos Visuales, Estilo e Imágenes (Por Sección)

### 1. Networks Hero Section (`NetworksHero`)
- **Fondo y Contenedores:** Canvas principal en Azul Egipcio (`#0636A5`) con resplandor neón ambiental.
- **Composición UI:** Titular de comunidad con métricas sociales y badges de número de seguidores.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Composición 3D de iconos de redes sociales flotando junto al isologo de Envíos DosRuedas sobre un mapa de Mar del Plata.
  * **Estilo Gráfico:** Neobrutalismo vial con acentos neón amarillo.
  * **Paleta de Colores Aplicada:** `#0636A5`, `#FFEC01`, `#FFFFFF`, `#001035`.
  * **Tipografía en Uso:** `Anton` ("SUMATE A NUESTRA COMUNIDAD EN REDES"), `Bebas Neue` ("MÁS DE 25K SEGUIDORES ACTIVOS EN MAR DEL PLATA"), `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** SVGs de Instagram, Facebook, TikTok y WhatsApp.

### 2. Networks Channels Grid (`NetworksChannels`)
- **Fondo y Contenedores:** Slate Canvas (`#F8FAFC`) con tarjetas de canal en `Double Bezel Card`.
- **Composición UI:** Cuadrícula de tarjetas por plataforma oficial con botón directo a cada perfil social.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Branding oficial integrado de cada red social sin alterar la identidad del sitio.
  * **Estilo Gráfico:** Tarjetas interactivas con efecto hover de elevación 3D.
  * **Paleta de Colores Aplicada:** `#F8FAFC`, `#0636A5`, `#FFEC01`, `#1877F2` (Facebook), `#25D366` (WhatsApp).
  * **Tipografía en Uso:** `Anton` para el nombre del canal, `IBM Plex Sans` para descripciones.
  * **Elementos UI e Iconografía:** Iconos de redes y flechas de enlace externo.

### 3. Recent Posts Visualizer (`RecentPosts`)
- **Fondo y Contenedores:** Canvas en Azul Noche (`#052C87`) con grilla de 6 publicaciones recientes.
- **Composición UI:** Layout estilo Instagram feed con publicaciones reales de la flota en las calles de Mar del Plata.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Capturas de fotos reales de operativos de calle, promociones de Envíos Flex, tips de embalaje y novedades 2026.
  * **Estilo Gráfico:** Cuadrícula de fotos con superposición oscura al hover que revela me gustas y comentarios.
  * **Paleta de Colores Aplicada:** `#052C87`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Geist Mono` para métricas (likes/comentarios), `IBM Plex Sans` para descripciones.
  * **Elementos UI e Iconografía:** Iconos Lucide Heart, MessageCircle, ExternalLink.
