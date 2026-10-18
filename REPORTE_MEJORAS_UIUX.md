# REPORTE DE MEJORAS UI/UX PRO MAX - Envíos Dos Ruedas
**Fecha de Generación:** Automática
**Herramienta:** ui-ux-pro-max-skill (Motor de Razonamiento Simulado)
**Enfoque:** Logística & Delivery Platform (Corporate Neo-Brutalism & Bento Box Grid)

---

## 1. Diagnóstico General
Se ha realizado una auditoría completa del repositorio, contrastando los archivos en `src/app` y `src/components` contra las especificaciones maestras de diseño (`DESIGN.md` y `AGENTS.md`).
El estado actual refleja un avance significativo hacia la adopción del sistema de diseño propietario de 3 colores (Brand Blue `#0636A5`, Brand Yellow `#FFEC01`, Brand White `#FFFFFF`), eliminando el uso de colores externos de Tailwind (como `slate`, `zinc` o `gray`). Sin embargo, persisten ciertos anti-patrones comunes en código autogenerado o genérico de IA, especialmente en el uso de emojis, falta de micro-interacciones (ausencia de clases de transición en `hover`) y algunos desajustes en el espaciado y estructura de las tarjetas Double-Bezel.

El sistema debe virar hacia una arquitectura "Bento Box Grid" asimétrica en Desktop y un diseño estrictamente colapsado en Móvil, manteniendo el "Corporate Neo-Brutalism".

---

## 2. Filtro de Anti-Patrones de IA (Crítico)

**A eliminar inmediatamente:**
- **Uso de Emojis como Iconografía:** Se detectaron emojis en varios archivos (ej: `src/components/nosotros/nuestras-redes/RecentPosts.tsx`, `src/components/cotizar/express/CotizadorExpressForm.tsx`, `src/components/cotizar/lowcost/CotizadorLowCostForm.tsx`, `src/app/terminos-y-condiciones/TermsContent.tsx`, `src/app/politica-de-privacidad/PrivacyContent.tsx`). **Acción:** Reemplazar por iconografía vectorial de `lucide-react`.
- **Colores Genéricos Neutros:** Restos aislados de `slate-50` en `src/components/nosotros/nuestras-redes/NewsletterSubscribe.tsx` (y en tests como `src/app/contacto/contacto.test.tsx`). **Acción:** Remapear a `bg-brand-blue-50` o `bg-white`.
- **Estados Interactivos Incompletos:** 56 instancias donde se utilizan prefijos `hover:` sin las correspondientes clases de transición (`transition-all duration-300`). **Acción:** Obligar el uso de `transition-all duration-300 ease-in-out` para animaciones suaves (150-300ms).
- **Cursores Faltantes:** Varios elementos interactivos o modales omiten la clase `cursor-pointer`.
- **Degradados o Sombras Blandas Genéricas:** Evitar fondos irrelevantes (como gradientes no documentados o multicolores). Usar exclusivamente `shadow-[4px_4px_0px_var(--color-brand-blue-700)]` (Sombra Brutalista) y `glow-blue` o `glow-yellow` cuando requiera emisión.

---

## 3. Lista de Mejoras por Componente

**Componentes Globales & Layout (`src/components/layout/` & `src/components/ui/`)**
- **Tipografía (Ajuste Estricto):** Asegurar que ningún texto utilice fuentes por defecto. H1/H2/H3 deben ser exclusivamente `font-display uppercase` (Anton). Subtítulos y tags `font-subheading uppercase tracking-wider` (Bebas Neue). Textos base `font-sans` (Inter).
- **Botones y CTAs:** Todos los botones deben implementar el estilo "Nested CTA Pill" (`cta-nested-pill` y esquinas `rounded-full` o `rounded-xl`). El ícono debe estar envuelto en un círculo interno (`cta-nested-icon`). Añadir siempre `active:scale-[0.98] active:translate-y-[1px]`.
- **Double-Bezel Card:** Refactorizar tarjetas informativas a `double-bezel-outer` (`bg-brand-blue-50` con `border-brand-blue-100`) y `double-bezel-inner` (`bg-white`).
- **Estados de Foco de Inputs:** Todos los inputs, como el de `NewsletterSubscribe.tsx` y los formularios de cotización, deben tener un borde base de 1px en `brand-blue-100` y transicionar a `border-2 border-brand-blue-700` al recibir el foco (`focus:ring-brand-blue-700/50`).

**Módulos de Cotización (`src/components/cotizar/`)**
- **`CotizadorExpressForm.tsx` & `CotizadorLowCostForm.tsx`:**
  - Eliminar cualquier uso de emojis.
  - Convertir números y tarifas a tipografía monoespaciada o `font-subheading` (Bebas Neue) para estilo de "ticket/aduana" o "panel de control".
  - Refinar el "Corporate Neo-Brutalism": los bordes de los campos deben ser altamente contrastantes (`border-2 border-brand-blue-700`) cuando están activos.
  - Asegurar hover states de 300ms en los botones de "Cotizar".

**Páginas Institucionales (`src/app/nosotros/`, `src/app/terminos-y-condiciones/`, `src/app/politica-de-privacidad/`)**
- **`TermsContent.tsx` & `PrivacyContent.tsx`:** Reemplazar separadores de texto vacíos o emojis por barras divisoras formales (`<div className="h-px bg-brand-blue-100 w-full" />`).
- **`RecentPosts.tsx`:** Retirar iconos emoji y estandarizar el uso de tarjetas asimétricas estilo Bento.
- **Micro-interacciones:** Asegurar el efecto `hover-float` o traslaciones en el eje Y (`hover:-translate-y-1`) con `transition-all duration-300` en las tarjetas de beneficios y valores.

**Páginas de Servicios (`src/components/servicios/`)**
- Las características (`Features` y `Benefits`) deben colapsar estrictamente a 1 columna en móvil (`grid-cols-1`) e intercalar asimétricamente en desktop (`col-span-8` y `col-span-4`), descartando patrones genéricos de 3 columnas iguales.
- Asegurar alternancia de colores: Si la sección usa `bg-brand-blue-700` (Azul principal), el texto debe ser blanco y los destaques amarillos (`brand-yellow-500`). Si es clara, `bg-white` con textos `brand-blue-700`.

---

## 4. Checklist de Pre-entrega Profesional

- [ ] **Consistencia Cromática:** 0% de uso de `slate`, `gray`, `zinc` y colores ajenos. Solo variables del sistema (Azul #0636A5, Amarillo #FFEC01, Blanco #FFFFFF y variaciones).
- [ ] **Iconografía Profesional:** 100% de iconos importados de `lucide-react` o SVG nativo. Cero (0) emojis en todo el proyecto.
- [ ] **Interacción y Motion:** Todos los elementos clickeables poseen `cursor-pointer`, `transition-all`, y efectos de hover suaves (`duration-300`).
- [ ] **Jerarquía Tipográfica y Copy:** Copys escritos en "Voseo Rioplatense", menciones de fechas apuntando al 2026, y uso estricto de Anton (H1/H2), Bebas Neue (Subtítulos/Números), e Inter (Cuerpo).
- [ ] **Responsive Design (Bento Box):** Verificación de breakpoints en 375px (1 columna colapsada total), 768px, 1024px y 1440px (Grid asimétrico/Bento).
- [ ] **Accesibilidad WCAG AA:** Ratio mínimo de contraste de 4.5:1 en todos los textos sobre sus fondos, especialmente en insignias y alertas. Inputs claramente distinguibles mediante bordes marcados.
- [ ] **Componentes Premium:** Todos los modales, popups y tarjetas principales utilizan la estructura arquitectónica *Double-Bezel* detallada en `DESIGN.md`.
