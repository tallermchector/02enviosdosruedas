# 🎨 DESIGN.md — Sistema de Diseño: Envíos DosRuedas

> **Design Agents:** How the project should look and feel.
>
> Este documento define el aspecto visual, paleta, tipografía y componentes UI para agentes generadores de código y diseño. NUNCA inventar estilos fuera de estas reglas.

## 0. Principios de Marca Inmutables

- **Logotipo Inalterable**: `/public/logo-master.svg`. No recolorear, no estirar, mantener safe-area del 20%. Colores permitidos: Azul #0636A5 (primary), Blanco (reverso).
- **Aesthetic**: Corporate Neo-Brutalism System. Robusto, accesible, institucional pero moderno. Cero abstracciones etéreas o estilos flat aburridos.

## 1. Paleta de Colores (La Ley de los Tres Colores)

El proyecto utiliza ESTRICTAMENTE 3 colores base y sus escalas definidas.
**PROHIBIDO:** Grises genéricos (`slate`, `gray`, `zinc`), colores externos (`red`, `green`, `emerald`) salvo alertas sistémicas nativas.

| Rol | Tailwind Class / Token | Hex Base | Uso Principal |
|---|---|---|---|
| **Principal / Confianza** | `bg-brand-blue-700` (`--color-primary`) | `#0636A5` | Hero, footers, fondos primarios, bordes fuertes. |
| **Acento / Logística** | `bg-brand-yellow-500` (`--color-accent`) | `#FFEC01` | Call to Actions (Primary), badges, success states. (¡NUNCA usar verde para success!). |
| **Lienzo / Superficie** | `bg-brand-white-50` (`--color-surface`) | `#FFFFFF` | Interiores de tarjetas, inputs, tablas. |
| **Texto Base / Oscuro** | `text-brand-ink` | `#00277C` | Texto de lectura (Egyptian Blue). No usar negro puro. |

*Nota sobre WhatsApp:* El botón CTA de WhatsApp debe tener fondo `brand-yellow-500`, NUNCA verde. El icono SVG sí puede ser el logo original.

## 2. Tipografía y Jerarquía

Mantener ancho máximo ~65 caracteres por línea.

| Rol | Fuente Tailwind | Fuente Original | Transform / Peso |
|---|---|---|---|
| **Display / H1 / H2** | `font-display` | Anton | `uppercase`, bold. |
| **Subheadings / Badges** | `font-subheading` | Bebas Neue | `uppercase`, semi-bold. |
| **Body / Labels / UI** | `font-sans` | IBM Plex Sans | `normal`, regular/medium. (NUNCA Inter). |
| **Data / Numbers / km** | `font-mono` | Geist Mono | `tabular-nums`. |

## 3. UI Components & Layout Principles

### A. Corporate Neo-Brutalism & Double-Bezel
- **Bordes Limpios**: Usar `border-2 border-brand-blue-700` o `border-brand-blue-800/40`.
- **Sombras Planas**: Usar shadow brutales, e.g., `shadow-[4px_4px_0px_var(--color-brand-blue-700)]` en lugar de blurs etéreos.
- **Double-Bezel Containers**: Tarjetas principales deben usar un contorno doble:
  - Outer: `border-brand-blue-800/40`, `rounded-xl`/`2xl`.
  - Inner: `ring-1 ring-white/10` (inset).

### B. CTAs y Botones
- Botones primarios: Estilo Nested CTA Pill (`cta-nested-pill`, `cta-nested-icon`) con máscaras deslizantes on-hover.
- Interactividad: TODOS los elementos cliqueables deben tener `cursor-pointer` y transición suave `transition-all duration-300` al hacer hover.

### C. Bento Grid (Layout Asimétrico)
- Evitar las clásicas 3 columnas iguales.
- Usar grillas asimétricas (e.g., `span 7` y `span 5` en un grid de 12).

### D. Steppers (How it Works)
- Estados activos y completados se marcan con Amarillo (`brand-yellow-500`), **NUNCA VERDE**.

## 4. Animaciones y Micro-interacciones

- Usar `motion/react` (Framer Motion moderno) para entradas escalonadas (stagger) en grids.
- Implementar translaciones interactivas al hover en tarjetas.
- Evitar excesos; las animaciones deben sentirse funcionales y aceleradas por GPU, no distractoras.

## 5. Accesibilidad (A11y)

- **Contraste**: Mantener WCAG AA (ratio 4.5:1).
- **Responsive**: Diseño robusto garantizado en 375px, 768px, 1024px y 1440px.

---
> **Regla Final para Agentes:** NUNCA usar Tailwind inline hex values (e.g., `bg-[#ff0000]`) salvo para lienzos o SVGs directos. Usar SIEMPRE las clases semánticas de Tailwind configuradas.
