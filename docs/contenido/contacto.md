# 📌 Ruta URL Relativa: /contacto
**Complejidad:** 2.45 KB (2,507 bytes)

## 1. Arquitectura de Código e Interfaz
- **Árbol de Componentes:**
  - `ContactoPage` (`src/app/contacto/page.tsx`)
    - `ContactHero` (`src/components/contacto/ContactHero.tsx`)
    - `ContactForm` (`src/components/contacto/ContactForm.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)
      - [`CTANestedPill`](globales.md#ctanestedpill)
    - `ContactInfo` (`src/components/contacto/ContactInfo.tsx`)
      - [`DoubleBezelCard`](globales.md#doublebezelcard)
    - `ConversionBanner` (`src/components/contacto/ConversionBanner.tsx`)
      - [`CTANestedPill`](globales.md#ctanestedpill)

- **Estado Local y Handlers:**
  - Formulario interactivo con validación de datos (Nombre, Teléfono/WhatsApp, Email, Tipo de Servicio, Mensaje/Consulta).
  - Envío dual: despacho directo a WhatsApp corporativo (+54 223 660-2699) o envío vía servidor por correo electrónico.

- **Interfaces y Props:**
```typescript
// Componente de servidor (Page)
export default function ContactoPage(): JSX.Element;

interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  servicio: 'express' | 'lowcost' | 'flex' | '3pl' | 'otro';
  mensaje: string;
}
```

- **Componentes Compartidos:**
  - [`OptimizedHeader`](globales.md#header)
  - [`OptimizedFooter`](globales.md#footer)
  - [`DoubleBezelCard`](globales.md#doublebezelcard)
  - [`CTANestedPill`](globales.md#ctanestedpill)

---

## 2. Mapa de Recursos Visuales, Estilo e Imágenes (Por Sección)

### 1. Contact Hero Section (`ContactHero`)
- **Fondo y Contenedores:** Canvas principal en Electric Speed Blue (`#0950F6`).
- **Composición UI:** Encabezado centrado de alta visibilidad enfocado en atención personalizada en Mar del Plata.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Render 3D de auriculares de soporte logístico y burbujas de diálogo con acentos dorados.
  * **Estilo Gráfico:** Neobrutalismo vial con la tipografía de titular monumentales viales.
  * **Paleta de Colores Aplicada:** `#0950F6`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton` ("CONTACTÁ A NUESTRO EQUIPO COMERCIAL Y LOGÍSTICO"), `Bebas Neue` ("RESPUESTA INMEDIATA EN MAR DEL PLATA").
  * **Elementos UI e Iconografía:** SVGs de Teléfono, WhatsApp, Mensaje.

### 2. Formulario & Bento Grid de Canales (`ContactForm`, `ContactInfo`)
- **Fondo y Contenedores:** Layout asimétrico en 2 columnas (5 columnas para Formulario en `Double Bezel Card` y 7 columnas para Bento Grid de canales de atención y mapa de la base central en Friuli 1972).
- **Composición UI:** Inputs con bordes limpios en azul y acentos amarillos, bento cards con accesos directos a WhatsApp, Email, Instagram y mapa de ubicación.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Foto de la fachada de la casa central en Friuli 1972, Mar del Plata, con el cartel de Envíos DosRuedas. Mapa estático o dinámico con pin de ubicación.
  * **Estilo Gráfico:** Neobrutalismo con resplandores neón en las tarjetas activas.
  * **Paleta de Colores Aplicada:** `#0950F6`, `#052C87`, `#FFEC01`, `#FFFFFF`, `#25D366` (exclusivo para WhatsApp).
  * **Tipografía en Uso:** `Anton` para encabezados de tarjeta, `Bebas Neue` para números telefónicos y dirección, `IBM Plex Sans` para formularios.
  * **Elementos UI e Iconografía:** Lucide Phone, Mail, MapPin, Instagram, MessageSquare.

### 3. Conversion Banner (`ConversionBanner`)
- **Fondo y Contenedores:** Banner horizontal de cierre en azul noche (`#001035`) con brillo amarillo en los bordes.
- **Composición UI:** CTA directo para llevar al usuario al Cotizador Express si prefiere calcular una tarifa de inmediato.
- **Directorio de Activos Multimedia a Crear:**
  * **Imágenes / Ilustraciones:** Vector con la silueta de la costa de Mar del Plata.
  * **Estilo Gráfico:** Tarjeta de alta conversión con botón flotante amarillo.
  * **Paleta de Colores Aplicada:** `#001035`, `#FFEC01`, `#FFFFFF`.
  * **Tipografía en Uso:** `Anton` ("¿PREFERÍS COTIZAR TU ENVÍO EN EL ACTO?"), `IBM Plex Sans`.
  * **Elementos UI e Iconografía:** Botón [`CTANestedPill`](globales.md#ctanestedpill) ("Ir al Cotizador Express").
