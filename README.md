# 🚀 Envíos Dos Ruedas - Mar del Plata (2026)

Bienvenido al repositorio de **Envíos Dos Ruedas**, la solución líder en mensajería de última milla, envíos Same-Day y distribución para E-Commerce en Mar del Plata.

Este proyecto está construido con un stack moderno y rápido, diseñado para ofrecer una experiencia fluida tanto a los clientes como al equipo operativo.

---

## 🛠️ Stack Tecnológico

*   **Frontend & Routing:** [Next.js](https://nextjs.org/) (App Router, React 19).
*   **Base de Datos y Modelado:** [Prisma ORM](https://www.prisma.io/).
*   **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) mediante variables de tema centralizadas en `src/app/globals.css`.
*   **Animaciones e Interactividad:** [Motion](https://motion.dev/) (`motion/react`) y [Lucide React](https://lucide.dev/) para iconos.
*   **Gestor de Paquetes:** `pnpm`.

---

## 📂 Arquitectura del Proyecto

El código está estructurado de la siguiente forma:

*   `src/app/`: Rutas, páginas y layouts principales de la aplicación (App Router).
    *   `/cotizar/`: Flujos interactivos para cotizar envíos Express y LowCost.
    *   `/servicios/`: Explicaciones detalladas de los pilares de servicio (Flex, Express, LowCost, Emprendedores).
*   `src/components/`: Componentes interactivos reutilizables (formularios, chats, animaciones).
*   `docs/`: Guías de referencia, mapas de cobertura, contenido estático y base de datos de imágenes.
*   `.agents/`: Configuraciones de IA, reglas de desarrollo (`AGENTS.md`) y skills personalizadas (`nano-banana-prompter`).

---

## 🚀 Inicio Rápido (Desarrollo Local)

### Requisitos Previos
*   [Node.js](https://nodejs.org/) (v18 o superior recomendado)
*   [pnpm](https://pnpm.io/) instalado globalmente

### Pasos para Configurar y Ejecutar

1.  **Instalar dependencias:**
    ```bash
    pnpm install
    ```

2.  **Configurar Variables de Entorno:**
    Duplica el archivo `.env.example` como `.env.local` y define tu clave de API de Gemini y la cadena de conexión de tu base de datos:
    ```bash
    cp .env.example .env.local
    ```
    Edita `.env.local` y añade:
    ```env
    GEMINI_API_KEY="tu_api_key_aqui"
    DATABASE_URL="tu_conexion_de_base_de_datos"
    ```

3.  **Preparar la Base de Datos (Prisma):**
    Genera el cliente de Prisma y aplica las migraciones de base de datos correspondientes:
    ```bash
    pnpm prisma generate
    pnpm prisma db push
    ```

4.  **Iniciar Servidor de Desarrollo:**
    ```bash
    pnpm dev
    ```
    La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 🤖 Guías de Desarrollo e IA

Este repositorio está preparado con configuraciones para interactuar eficientemente con asistentes de inteligencia artificial:
*   [GEMINI.md](file:///E:/proyectos/02enviosdosruedashector/GEMINI.md): Información clave sobre el stack y diseño del proyecto para optimizar el consumo de tokens.
*   [.agents/AGENTS.md](file:///E:/proyectos/02enviosdosruedashector/.agents/AGENTS.md): Reglas estilísticas, paleta de colores y convenciones tipográficas para asegurar que el código generado sea consistente.
*   [.aiexclude](file:///E:/proyectos/02enviosdosruedashector/.aiexclude): Reglas de exclusión para evitar la lectura innecesaria de archivos temporales o pesados por los asistentes.
