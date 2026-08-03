# 🤖 AGENTS.md — Protocolo para Agentes IA Codificadores

> **Coding Agents:** How to build and maintain the project.
>
> Este documento es el contrato vinculante para agentes que modifican código. Define el setup, reglas de negocio, y estándares de calidad.

## 📌 Setup y Desarrollo Local

1. **Gestor de Paquetes**: **USAR ESTRICTAMENTE `pnpm`**. Nunca usar `npm` o `yarn`.
2. **Instalación**: `pnpm install`
3. **Base de Datos**:
   - `pnpm prisma generate`
   - `pnpm prisma db push` (Si hay base de datos local).
4. **Desarrollo**:
   - `pnpm dev`
   - *Nota Windows*: Si el hot-reload falla en Turbopack, usar `pnpm dev --webpack`.

## 🧭 Despliegue & Producción

### Vercel (Recomendado)
- Conectar repo en Vercel → Auto-detecta Next.js.
- Configurar Environment Variables en Dashboard (ej. `DATABASE_URL`, `GEMINI_API_KEY`).
- Deploy: push a `main` → Preview → Promote to Production.

### Docker (Alternativo)
Usar `next.config.ts` con `output: 'standalone'` y construir sobre `node:20-alpine`.

## ⚙️ Reglas de Negocio y Lógica Crítica

### 1. Sistema de Precios (La Regla de Oro)
- La fuente de verdad para tarifas (Año 2026) está en `docs/contexto/precios.md` y la base de datos `PricingRange`.
- **Excedente +10km**: SIEMPRE aplicar `Math.ceil(km - 10)` para el kilometraje excedente.
  - *Ejemplo*: 10.3 km = 1 km excedente facturado entero.
- Ver `src/lib/pricing.ts` para las funciones puras.

### 2. Autocomplete de Direcciones
- Debe filtrar estrictamente: `city: "Mar del Plata"`, `country: "Argentina"`.

### 3. OSRM (Ruteo)
- Usar el motor OSRM self-hosted. En ruteo LowCost Batch, asegurar ≤ 20 stops por request e implementar retry con exponential backoff.

### 4. Componentes de React
- Al pasar modelos de Prisma con fechas (e.g., `createdAt`) de Server a Client Components, serializar a string (`.toISOString()`) para evitar errores en Next.js.
- Nunca pasar `fill="true"` a SVGs. Usar `fill="currentColor"`.

## 🗣️ Copywriting y Contenido

- **Voseo Rioplatense**: Obligatorio en toda la UI ("Cotizá", "Enviá", "Tu envío").
- **Año Base**: Siempre referenciar 2026.
- **Geolocalización**: Usar referencias reales de Mar del Plata (Güemes, Puerto, Batán).

## ✅ Definition of Done (DoD) y Testing

Antes de considerar una tarea terminada o hacer un commit, debes asegurar:

1. **Build Exitoso**: Ejecutar `pnpm build` (`powershell -ExecutionPolicy Bypass -Command "pnpm build"` en Windows).
2. **Linting Exitoso**: Ejecutar `pnpm run lint`.
3. **Tests Pasando**: Ejecutar `pnpm test` (Vitest) y `pnpm test:e2e` (Playwright si aplica). No debe haber regresiones.
4. **Validación de Tipos**: Ejecutar `pnpm run typecheck` (`tsc --noEmit`). No dejar valores `any`.
5. **No inline-styles**: Evitar `style={{}}` para colores/bordes. Mover a `globals.css` como utility class de Tailwind si es necesario.
6. **Animaciones**: Atributos como `whileInView` aplican SOLO a componentes `<motion.*>`.

## 🤝 Flujo de Trabajo (Git)

- Convenciones de Commits: `tipo(scope): descripción clara`. Ej: `feat(cotizar): add OSRM batch routing`.
- Asegurar que la rama pase todos los CI checks mencionados en DoD.

> **¿Dudas de Diseño UI?**: Consultar `DESIGN.md`.
