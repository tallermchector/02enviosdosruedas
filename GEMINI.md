# 🤖 Contexto del Proyecto para Gemini (GEMINI.md)

Este archivo proporciona un resumen ejecutivo de alto nivel del proyecto para optimizar el contexto y el consumo de tokens cuando trabajes en este repositorio.

---

## 📌 Información General
*   **Proyecto:** Envíos Dos Ruedas (Logística de última milla, mensajería y soluciones E-Commerce).
*   **Ubicación Principal:** Mar del Plata, Argentina.
*   **Año de Referencia:** 2026.
*   **Dominio Técnico:** Logística local Same-Day, integraciones de MercadoLibre Flex, y ruteo LowCost.

---

## 🛠️ Stack Tecnológico
*   **Framework:** Next.js (App Router, React 19).
*   **Estilos:** Tailwind CSS v4 (configurado a través de variables CSS `@theme` en [globals.css](file:///E:/proyectos/02enviosdosruedashector/src/app/globals.css)).
*   **Base de Datos y ORM:** Prisma ORM.
*   **Iconografía:** Lucide React.
*   **Animaciones:** Motion (`motion/react`).
*   **Gestor de Paquetes:** pnpm.

---

## 🎨 Identidad Visual
*   **Dominante (brand-blue):** `#0636A5` (Confianza institucional).
*   **Acento (brand-yellow):** `#FFEC01` (Energía, velocidad vial).
*   **Tipografía:**
    *   Títulos display: **Anton** (Sans-serif condensada de gran peso).
    *   Subtítulos y números: **Bebas Neue**.
    *   Texto del cuerpo: **Inter**.
*   **Componentes Clave de UI:** Estilo moderno y limpio, bordes redondeados (`rounded-3xl`), sombras con resplandor (`glow-blue`, `glow-yellow`), y transiciones dinámicas interactivas.

---

## 📂 Estructura del Código
*   `src/app/`: Rutas de la aplicación (Next.js App Router).
    *   `src/app/cotizar/`: Vistas y flujos de cotización (Express y LowCost).
    *   `src/app/servicios/`: Detalles de servicios (Express, LowCost, Flex, 3PL).
*   `src/components/`: Componentes modulares y reutilizables.
    *   `src/components/home/`: Componentes específicos del Home (por ejemplo, [HeroAnimado.tsx](file:///E:/proyectos/02enviosdosruedashector/src/components/home/HeroAnimado.tsx)).
*   `docs/`: Documentación del proyecto (diagramas de mapas, guías de prompts, contenido de páginas).
*   `.agents/`: Configuraciones específicas de agentes y herramientas.

---

## 🚀 Comandos Útiles
*   Instalar dependencias: `pnpm install`
*   Levantar entorno local de desarrollo: `pnpm dev`
*   Compilar para producción: `pnpm build`
*   Studio de base de datos (Prisma): `pnpm prisma studio`
