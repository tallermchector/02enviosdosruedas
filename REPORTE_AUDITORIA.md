# 📊 Informe de Auditoría Técnica y Optimización: Envíos DosRuedas

---

## 1. CONFIGURACIÓN DE AGENTES Y SKILLS (IA)

### [Prioridad: Alta] Inconsistencia entre Documentación y Estructura Real de Agentes
* **Descripción:** Los archivos `SKILLS.md` y `AGENTS.md` hacen referencia constante a habilidades y directrices ubicadas en el directorio `.agents/` y `.agents/skills/` (ej. `dos-ruedas-maestro/SKILL.md`). Sin embargo, **dicho directorio no existe en el repositorio actual**. Esto es un punto crítico de falla (alucinaciones) para agentes automatizados, ya que intentarán leer un contexto al que no pueden acceder, inventando las reglas sobre la marcha o rompiendo el flujo.
* **Solución Propuesta:** Se debe materializar la carpeta `.agents/` y poblar los archivos `SKILL.md` descritos, o bien centralizar las instrucciones directamente dentro de la carpeta `docs/knowledge_base/` y actualizar las referencias en `SKILLS.md` y `AGENTS.md` para que apunten a los archivos reales.

### [Prioridad: Media] Verificación del "Definition of Done" (DoD) Manual
* **Descripción:** `AGENTS.md` establece un flujo de trabajo iterativo excelente (Plan → Ejecuta → Verifica → Itera), pero confía la verificación al agente mismo de manera manual (correr comandos uno por uno).
* **Solución Propuesta:** Crear un script unificado en `package.json` para que los agentes ejecuten el checklist de una sola vez, limitando la fricción y evitando que omitan pasos.

**Código Refactorizado (`package.json` - sección scripts):**
```json
"scripts": {
  "agent:verify": "pnpm typecheck && pnpm lint && pnpm test --run",
  // ...otros scripts
}
```

---

## 2. ARQUITECTURA FRONTEND Y RENDIMIENTO (Next.js)

### [Prioridad: Alta] Linter Silenciado y Prevención de Errores en Producción
* **Descripción:** En el archivo `next.config.ts`, según los comentarios, se removió la propiedad `eslint` que ignoraba errores, pero a costa de no ejecutar el lint en el CI/CD o en la construcción. Además, en `docs/contexto/errores-conocidos.md` se menciona que la configuración estricta de ESLint bloqueaba el build. Ignorar esto permite la acumulación de deuda técnica.
* **Solución Propuesta:** Reactivar el linting estricto en el pipeline y corregir los errores subyacentes. Es preferible que un build falle a que código de mala calidad o con errores en componentes llegue a producción.

### [Prioridad: Media] Workarounds Temporales de Turbopack
* **Descripción:** El `next.config.ts` mantiene un hack de un objeto vacío `{ turbopack: {} }` para evitar un crash de compilación y recurre a `watchOptions` con polling de Webpack para corregir el hot-reload en Windows. Esto aumenta el uso de CPU y perjudica la experiencia de desarrollo.
* **Solución Propuesta:** Actualizar a la versión estable más reciente de Next.js donde estos problemas de Turbopack fueron resueltos nativamente.

**Código Refactorizado (`next.config.ts`):**
```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'i.postimg.cc' },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  // Se eliminan los hacks de turbopack y webpack polling
  // asumiendo una versión actualizada de Next.js
};

export default nextConfig;
```

---

## 3. BASE DE DATOS Y MODELADO (Prisma)

### [Prioridad: Alta] Modelos "Starter" Residuales
* **Descripción:** En `prisma/schema.prisma` existen los modelos `User` y `Post` que vienen por defecto en Prisma. Estos no tienen relación con la lógica de negocio de envíos y causan confusión. Adicionalmente, faltan entidades core prometidas en `PROJECT.md` (como `Order`, `Zone`, etc.).
* **Solución Propuesta:** Limpiar el esquema, eliminar los modelos por defecto y establecer los modelos sólidos orientados al dominio logístico de Mar del Plata.

### [Prioridad: Media] Ausencia de Índices para Rendimiento
* **Descripción:** El modelo `PriceRange` será consultado intensivamente por el cotizador, filtrando probablemente por `serviceType` y distancia. Actualmente carece de índices, lo que derivaría en un *Sequential Scan* en PostgreSQL a medida que crezca.
* **Solución Propuesta:** Añadir índices explícitos (`@@index`) a los campos utilizados frecuentemente en los queries de cotización.

**Código Refactorizado (`prisma/schema.prisma`):**
```prisma
// Eliminar User y Post.

enum ServiceType {
  LOW_COST
  EXPRESS
}

model PriceRange {
  id             Int         @id @default(autoincrement())
  serviceType    ServiceType
  distanciaMinKm Float
  distanciaMaxKm Float
  precioRango    Float
  descripcion    String

  // Optimización de consultas para el motor de cotización
  @@index([serviceType, distanciaMinKm, distanciaMaxKm])
  @@map("price_ranges")
}

// Modelo base necesario mencionado en la arquitectura
model Order {
  id          String   @id @default(uuid())
  trackingId  String   @unique
  status      String
  createdAt   DateTime @default(now())

  @@map("orders")
}
```

---

## 4. SEGURIDAD, DEVOPS Y MEJORES PRÁCTICAS

### [Prioridad: Alta] Ausencia del Middleware Prometido
* **Descripción:** En `PROJECT.md` (Sección 1.2) se establece como patrón obligatorio tener un `middleware.ts` en la raíz para validación de sesión, detección de zona (Mar del Plata) y Rate-Limiting. Sin embargo, este archivo **no existe**. Esto deja los Server Actions y endpoints de API críticos vulnerables a abusos o DDoS (ej. llamadas masivas al cotizador que consulta bases de datos u OSRM).
* **Solución Propuesta:** Implementar un middleware utilizando `NextResponse` y herramientas como `@upstash/ratelimit` o implementaciones personalizadas en el Edge para limitar el abuso.

### [Prioridad: Media] Secretos en `.env.example`
* **Descripción:** El archivo `.env.example` incluye una llave real/simulada que inicia con el prefijo característico de Google Maps: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSy...`. Exponer llaves API en repositorios (incluso con restricciones de dominio) en archivos trackeados es una vulnerabilidad potencial si la llave es real.
* **Solución Propuesta:** Reemplazar de inmediato cualquier valor de token que luzca real en `.env.example` por placeholders universales y rotar la llave expuesta si es productiva.

**Código Refactorizado (`.env.example`):**
```env
# APP_URL
APP_URL="http://localhost:3000"

# GEMINI_API_KEY
GEMINI_API_KEY="TU_GEMINI_API_KEY"

# Maps API - Reemplazar con llave restringida a localhost en desarrollo
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="TU_GOOGLE_MAPS_API_KEY"
```

### [Prioridad: Alta] Falta de Automatización (CI/CD)
* **Descripción:** Aunque se define a Playwright y Vitest en el Stack, solo existe un test unitario (`pricing.test.ts`) que requiere ser ejecutado manualmente y carece de flujos de GitHub Actions (`.github/workflows/`). El código depende enteramente del factor humano local para prevenir regresiones.
* **Solución Propuesta:** Crear un flujo `.github/workflows/ci.yml` básico que ejecute el linting, typechecking y los tests automatizados en cada Pull Request.

---

### 💡 Conclusión Estratégica
El proyecto posee una base documental de negocio y diseño excepcional (`docs/knowledge_base/`, `DESIGN.md`, `PROJECT.md`) que denota un entendimiento profundo del producto. No obstante, **existe una desconexión crítica entre la arquitectura planificada y el código actual** (ausencia de carpetas clave de IA, middlewares omitidos, modelos de BD no productivos y tests casi inexistentes). Para madurar hacia la visión de 2026, la prioridad debe ser reconciliar el código con su propia documentación estructurada y automatizar las reglas establecidas.
