# 📌 Ruta URL Relativa: /admin/imagenes
**Complejidad:** 0.78 KB (802 bytes)

## 1. Arquitectura de Código e Interfaz
- **Árbol de Componentes:**
  - `AdminImagenesPage` (`src/app/admin/imagenes/page.tsx`)
    - `AdminImagenesClient` (`src/app/admin/imagenes/AdminImagenesClient.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)
      - [`CTANestedPill`](globales.md#ctanestedpill)

- **Estado Local y Handlers:**
  - Panel interno de gestión de activos multimedia y generación/optimización de Prompts para IA (Gemini 2.5 Flash / Midjourney) de las imágenes del proyecto.
  - Handlers para selección de modelo de IA, aspect ratio (`16:9`, `1:1`, `4:5`), sugerencia automática con IA visual (`handleSuggestPrompt`), optimización de prompts existentes (`handleImprovePrompt`) y copiado al portapapeles.
  - Integración con Server Actions (`src/app/admin/imagenes/actions.ts`).

- **Interfaces y Props:**
```typescript
// Componente de servidor (Page)
export default function AdminImagenesPage(): JSX.Element;

interface AdminImageRecord {
  id: string;
  relativePath: string;
  currentDescription: string;
  promptSuggestions: {
    id: string;
    modelUsed: string;
    aspectRatio: string;
    promptText: string;
  }[];
}
```

- **Componentes Compartidos:**
  - [`OptimizedHeader`](globales.md#header)
  - [`OptimizedFooter`](globales.md#footer)
  - [`DoubleBezelCard`](globales.md#doublebezelcard)
  - [`CTANestedPill`](globales.md#ctanestedpill)

---

## 2. Mapa de Recursos Visuales, Estilo e Imágenes (Por Sección)

### 1. Admin Imagenes Client (`AdminImagenesClient`)
- **Fondo y Contenedores:** Canvas principal en Azul Noche (`#001035`) con tarjetas de activos en `Double Bezel Card` y detalles en Azul Egipcio (`#0636A5`).
- **Composición UI:** Dashboard estilo admin panel con previsualizador de imágenes, formulario de creación de prompts, sugeridor de IA y lista de sugerencias guardadas.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Galería de miniaturas de todos los recursos fotográficos de la marca.
  * **Estilo Gráfico:** UI densa de panel de control administrativo con contraste azul y amarillo.
  * **Paleta de Colores Aplicada:** `#001035`, `#0636A5`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton` ("PANEL ADMINISTRATIVO DE RECURSOS VISUALES E IA"), `Bebas Neue` ("GESTOR DE PROMPTS Y ATRIBUTOS"), `Geist Mono` para las rutas y valores de aspect ratio, `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Lucide Sparkles, Zap, Copy, Plus, Trash2, SelectIcon.
