# 🚀 Envíos Dos Ruedas — Logística Same-Day en Mar del Plata (2026)

> **Humans:** What this project is.
>
> *Are you an AI coding agent?* Please read `AGENTS.md` before making any changes.
> *Are you an AI design agent?* Please read `DESIGN.md` for UI and styling guidelines.

[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.18-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)

## 📦 About the Project

**Envíos Dos Ruedas** is a leading digital platform for last-mile delivery, intelligent low-cost routing, and logistics solutions for E-Commerce and MercadoLibre Flex.

It is specifically designed and engineered for the operational and commercial reality of **Mar del Plata, Argentina** (Partido General Pueyrredón), leveraging 15+ years of local street knowledge. The project operates within the base year context of **2026** for all rates, SLAs, and temporal references.

## 🚚 Core Services

The platform provides a comprehensive suite of logistics tools, accessible via different sections of the application:

1. **Express (`/cotizar/express`)**:
   - Urgent door-to-door delivery within Mar del Plata.
   - SLA: < 90 minutes.
   - Ideal for B2C urgent needs, documents, spare parts, and gifts.
2. **LowCost (`/cotizar/lowcost`)**:
   - Scheduled, multi-drop intelligent routing for mass E-commerce.
   - Savings of up to 30% by batching deliveries.
   - SLA: 24-hour window.
3. **MercadoLibre Flex (`/servicios/flex`)**:
   - Native integration for ML sellers with automated webhooks.
   - SLA: Adheres to ML standards (24/48h).
4. **3PL / Fulfillment (`/servicios/3pl`)**:
   - E-Commerce fulfillment (Pick, Pack & Ship) for PyMEs.
   - Storage at our main Hub (Friuli 1972).

## 🏢 Operations & Fleet (2026 Scale)

- **Central Hub**: Friuli 1972, Mar del Plata (B7600), Buenos Aires.
- **Coverage Zone**: General Pueyrredón (Centro, Güemes, Puerto, Constitución, Camet, Batán, etc.).
- **Fleet**:
  - 85+ Company-owned motorcycles for Express.
  - 22+ Light Utility Vehicles (Fiorino/Kangoo) for LowCost & Flex.
  - 4 3.5T Trucks for Palletized 3PL.
- **Riders**: 100% formal employees (no gig economy), fully insured and trained.

## 🛠️ Technology Stack Overview

This is a modern web application built for speed, reliability, and excellent UX:

- **Framework:** Next.js 16 (App Router, React 19)
- **Styling:** Tailwind CSS v4 (Strict 3-color brand system)
- **Database:** PostgreSQL (managed) with Prisma ORM (`@prisma/adapter-pg`)
- **Map & Routing:** Leaflet maps integrated with a self-hosted OSRM (Open Source Routing Machine) engine for precise real-time mileage and routing.
- **Animations:** GSAP & Motion (`motion/react`) for high-fidelity UI interactions.
- **Package Manager:** `pnpm` (strictly enforced).

## 📚 Documentation Index

For detailed instructions on how to build, maintain, and design this project, refer to the respective documentation files:

*   **For Developers & AI Coding Agents:** Read `AGENTS.md` for local setup, deployment, coding standards, and DoD.
*   **For UI/UX Designers & AI Design Agents:** Read `DESIGN.md` for the strict Neo-Brutalism design system, color palettes, and component rules.
*   **For Deep Business Context:** Read `docs/knowledge_base/contexto.md` for the brand constitution, voice, and glossary.

---

> **Hecho en Mar del Plata. Para Mar del Plata.** 🏍️💙💛
> 
> *Contact: dev@enviosdosruedas.com.ar | WhatsApp Business: +54 9 223 XXX XXXX*
