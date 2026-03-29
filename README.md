# Documentación Técnica: Proyecto Aistana Huawei Displays

## Arquitectura y Stack Tecnológico
Dado el requerimiento de entrega urgente, se ha elegido el siguiente stack optimizado para velocidad de desarrollo y rendimiento en producción:

- **Frontend Framework:** React 19 con Vite (extremadamente rápido para build y dev).
- **Enrutamiento:** React Router DOM v7 (para navegación SPA sin recargar la página).
- **SEO & Meta Tags:** React Helmet Async (manejo dinámico del `<head>` para SEO en cada página).
- **Animaciones:** Framer Motion (para transiciones fluidas y modernas tipo "Huawei").
- **Estilos:** CSS Modules y Tailwind CSS (configurado como base).

## Estructura de Rutas
El sitio está dividido en múltiples páginas enfocadas a la conversión B2B:
- `/`: Landing principal (Venta y distribución).
- `/arriendo`: Campaña específica para arriendo de pantallas (OPEX).
- `/integradores`: Campaña de captación de partners.
- `/nosotros`: Información corporativa.
- `/productos`: Catálogo IdeaHub (S2, B2, Board 2).
- `/contacto`: Formulario integrado con WhatsApp.
- `/soporte-tecnico`: Portal de ayuda y servicios.
- `/faq`: Preguntas frecuentes (ideal para Schema Markup FAQPage futuro).

## Optimización SEO y Performance implementada
- Cada página cuenta con su propia etiqueta `<title>` y `<meta name="description">` enfocadas en las palabras clave del negocio B2B.
- Se ha estructurado semánticamente con `H1`, `H2` y `H3`.
- Las imágenes principales están servidas estáticamente desde `public/`.
- `vercel.json` configurado con reglas de rewrite para soportar el enrutamiento de React (SPA) en producción.

## Instrucciones de Despliegue (Deployment)
1. Inicia sesión en GitHub.
2. Sube el código fuente de esta carpeta (`aistana-huawei-displays`).
3. Conecta el repositorio a Vercel.
4. Vercel detectará automáticamente que es un proyecto Vite y aplicará el comando `npm run build`.
5. El archivo `vercel.json` se encargará de que las rutas funcionen correctamente sin errores 404.