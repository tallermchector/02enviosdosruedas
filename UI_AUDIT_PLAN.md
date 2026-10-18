# Plan de Auditoría y Refactorización UI/UX: Envíos DosRuedas

## 📊 Auditoría Visual Actual
**Inconsistencias detectadas en Tailwind v4 o CSS Global:**
- **Uso de paletas neutras prohibidas:** El sistema de diseño exige la regla estricta de 3 colores (Azul, Amarillo y Blanco) y prohíbe el uso de escalas genéricas como `slate`, `gray`, `zinc`, etc.
  - Se detectaron clases como `bg-slate-50`, `text-slate-500`, `text-slate-700`, `text-slate-800`, `text-slate-900`, `border-slate-100` y `prose-slate` a lo largo del código (ej. en `CotizadorExpressForm.tsx`, `FaqAccordion.tsx`, `NewsletterSubscribe.tsx`, `TermsContent.tsx`, `PrivacyContent.tsx` y páginas de la sección `/nosotros`).
- **Definiciones redundantes en `globals.css`:** Existen variables que remapean colores genéricos (ej. `--color-slate-500: var(--color-brand-blue-400)`) las cuales promueven el uso de clases no autorizadas y entran en conflicto con la regla estricta de cero tolerancias a escalas genéricas de colores externos.
- **Inconsistencias de componentes:** Varios componentes en las rutas como formularios de cotización utilizan bordes e inputs que no adhieren estrictamente al Double Bezel System exigido en el `DESIGN.md`.

## 🎨 Propuesta de Unificación (Paleta y Tipografía)
**Cómo se distribuirán el Azul, Amarillo y Blanco:**
- **Azul (Confianza - `brand-blue`):** Se reemplazarán todas las instancias de `slate`, `gray` o `zinc` por sus equivalentes semánticos en azul de la marca.
  - Textos oscuros (ej. `text-slate-900` o `text-slate-800`) se migrarán a `text-brand-blue-700`.
  - Textos secundarios o descriptivos (ej. `text-slate-500`) se adaptarán a `text-brand-blue-400` o `text-brand-blue-300`.
  - Fondos ligeros (ej. `bg-slate-50`) se transformarán a `bg-brand-blue-50`.
  - Bordes (ej. `border-slate-100`) se unificarán con `border-brand-blue-100`.
- **Amarillo (Acento - `brand-yellow`):** Se utilizará estrictamente como acento logístico principal (`brand-yellow-500` - #FFEC01) para los CTA principales (`cta-nested-pill--primary`), insignias (badges), anillos de enfoque (focus rings) y estados activos de steppers (ej. `CotizadorExpressForm.tsx`). Se prohíbe el color verde para estados completados en favor del amarillo de marca.
- **Blanco (Lienzo - `brand-white-50`):** Funcionará como la superficie base.
- **Tipografía Estricta:**
  - **H1/H2/H3:** `font-display` (Anton), siempre en mayúsculas.
  - **Subtítulos/Badges/Tags:** `font-subheading` (Bebas Neue), siempre en mayúsculas y con tracking incrementado.
  - **Texto y Labels:** `font-sans` (IBM Plex Sans/Inter).
  - **Métricas/IDs/Datos de cotización:** `font-mono` (Geist Mono), con `tabular-nums` obligatorio para evitar parpadeos en los contadores de cotizaciones.

## ✨ Efectos, Animaciones y Librerías
**Propuesta de micro-interacciones:**
- **Kinetic Font Stretch:** Expansión tipográfica en hover `scaleX(1.1)` para encabezados interactivos y CTA.
- **Asymmetric Bento Grid & Double-Bezel:** Incorporación de animaciones suaves de entrada escalonada (`stagger`) utilizando IntersectionObserver.
- **Hover Translacional:** Micro-transiciones (150ms-300ms) al interactuar con las tarjetas (ej. `hover-float`, `float-tilt-card`) con una leve percepción de efecto antigravedad y brillo dinámico.
- **CTA Nested Pill:** Implementación obligatoria del deslizamiento y cambio de opacidad interno en hover en todos los botones y enlaces interactivos.

**Lista exacta de dependencias a instalar o verificar:**
- Como el proyecto usa estrictamente `pnpm` y posee `motion` instalado, se debe confirmar/instalar:
  - `pnpm add framer-motion` (Si se decide migrar desde "motion" tradicional para una compatibilidad completa con Framer Motion en React). Alternativamente continuar utilizando `@number-flow/react` y `motion` u optimizar la instalación existente.
  - `pnpm add clsx tailwind-merge` (Ya presentes, para unificación segura de clases dinámicas).

## 📝 Revisión de Copy (Voseo)
**Textos que requieren ajuste al dialecto rioplatense (Mar del Plata, Argentina 2026):**
- En `src/components/nosotros/sobre-nosotros/AboutTimeline.tsx`: "realizar todos sus envios" -> "realizar todos **tus envíos**".
- En `src/components/layout/Carrusel-Redes.tsx`: "información sobre sus servicios" -> "información sobre **tus servicios**".
- En los documentos legales (`src/app/terminos-y-condiciones/TermsContent.tsx` y `src/app/politica-de-privacidad/PrivacyContent.tsx`):
  - Reemplazar instancias de "usted" por "**vos**".
  - "Tienes derecho" -> "**Tenés derecho**".
  - "su tratamiento" -> "**su tratamiento**" (siendo objeto, puede quedar, pero revisar contexto general para evitar "su" cuando debería ser "tu", ej. "su paquete" -> "**tu paquete**").
  - "sus datos" -> "**tus datos**".
- Se eliminarán las formas formales (Contáctenos, Calcule, Ingrese, Rastree) en favor del voseo estricto: **Contactanos**, **Cotizá**, **Ingresá**, **Rastreá**.
