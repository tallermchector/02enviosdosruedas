# 📌 Ruta URL Relativa: /politica-de-privacidad
**Complejidad:** 1.35 KB (1,387 bytes)

## 1. Arquitectura de Código e Interfaz
- **Árbol de Componentes:**
  - `PoliticaDePrivacidadPage` (`src/app/politica-de-privacidad/page.tsx`)
    - `PrivacyContent` (`src/app/politica-de-privacidad/PrivacyContent.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)

- **Estado Local y Handlers:**
  - Componente estático que renderiza las normativas de protección de datos personales de usuarios, comercios y repartidores conforme a la ley argentina 25.326 en Mar del Plata.

- **Interfaces y Props:**
```typescript
// Componente de servidor (Page)
export default function PoliticaDePrivacidadPage(): JSX.Element;
```

- **Componentes Compartidos:**
  - [`OptimizedHeader`](globales.md#header)
  - [`OptimizedFooter`](globales.md#footer)
  - [`DoubleBezelCard`](globales.md#doublebezelcard)

---

## 2. Mapa de Recursos Visuales, Estilo e Imágenes (Por Sección)

### 1. Privacy Content Section (`PrivacyContent`)
- **Fondo y Contenedores:** Canvas Slate Surface (`#F8FAFC`) con contenedor principal en `Double Bezel Card` (`bg-white`).
- **Composición UI:** Layout de lectura cómoda (`max-w-prose` / `max-w-4xl`) con tipografía sans-serif y divisores esmerilados.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Escudo vectorial de protección de datos y privacidad en color azul egipcio con acento amarillo neón.
  * **Estilo Gráfico:** Tipografía editorial limpia con jerarquía legal clara.
  * **Paleta de Colores Aplicada:** `#F8FAFC`, `#0636A5`, `#001035`, `#FFEC01`.
  * **Tipografía en Uso:** `Anton` ("POLÍTICA DE PRIVACIDAD Y TRATAMIENTO DE DATOS"), `Bebas Neue` ("ACTUALIZADO 2026"), `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Lucide ShieldCheck, Lock, FileText.
