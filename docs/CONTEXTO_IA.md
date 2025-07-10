# Contexto del Proyecto para IA de Desarrollo

## Objetivo del Proyecto

El objetivo de AstralIA es proporcionar una plataforma para Crear una plataforma web moderna e intuitiva que democratice el acceso a servicios astrológicos personalizados, integrando tecnología de vanguardia (NERN stack, Tailwind y Docker) con automatización inteligente mediante n8n. La aplicación busca ofrecer una experiencia mística y profesional a la vez, permitiendo a los usuarios generar sus cartas astrales, recibir horóscopos automáticos, consultar compatibilidades amorosas, acceder a lecturas de tarot interactivas, visualizar sus tránsitos planetarios y reservar sesiones con astrólogos en tiempo real. Todo esto, desde cualquier dispositivo, con una interfaz atractiva, segura y pensada para ofrecer valor espiritual y autoconocimiento de forma automatizada, ágil y confiable.

. La aplicación se compone de un frontend interactivo, un backend robusto para la gestión de datos y un sistema de automatización para flujos de trabajo.

## Stack Tecnológico

- **Frontend:**
    - **Framework:** Next.js 15
    - **Lenguaje:** TypeScript
    - **UI:** React 19, Tailwind CSS 4
    - **Internacionalización:** `next-intl`
    - **Componentes:** Radix UI, lucide-react

- **Backend:**
    - **Framework:** Express.js 5
    - **Lenguaje:** TypeScript
    - **Base de Datos:** MongoDB con Mongoose
    - **Variables de entorno:** `dotenv`

- **Orquestación y Despliegue:**
    - **Contenedores:** Docker
    - **Orquestación:** Docker Compose

- **Automatización:**
    - **Herramienta:** n8n

## Estructura del Proyecto

- `client/`: Contiene todo el código del frontend (Next.js).
    - `client/src/app/`: Rutas y páginas de la aplicación.
    - `client/src/components/`: Componentes reutilizables de React.
    - `client/src/lib/`: Utilidades y lógica del lado del cliente.
    - `client/messages/`: Archivos de traducción para `next-intl`.
- `server/`: Contiene todo el código del backend (Express.js).
    - `server/src/index.ts`: Punto de entrada del servidor.
    - `server/src/controllers/`: Lógica de negocio.
    - `server/src/models/`: Esquemas de Mongoose.
    - `server/src/routes/`: Definiciones de rutas de la API.
- `n8n/`: Configuración y flujos de trabajo de n8n.
- `Docker/`: Contiene la configuración de entorno para Docker.
- `docker-compose.yml`: Archivo principal de orquestación de servicios.

## Flujo de Trabajo de Desarrollo

1.  Los cambios en el frontend se realizan en el directorio `client`.
2.  Los cambios en el backend se realizan en el directorio `server`.
3.  Para ejecutar el entorno de desarrollo completo, se utiliza `docker-compose up`.
4.  Las variables de entorno se gestionan en el archivo `Docker/.env`.

## Puntos Clave a Considerar

- El proyecto está totalmente "dockerizado", por lo que el desarrollo y despliegue se basan en contenedores.
- La comunicación entre el frontend y el backend se realiza a través de una API REST.
- n8n se utiliza para tareas asíncronas y automatizadas, interactuando con el backend a través de su API si es necesario.
- La base de datos MongoDB también se ejecuta en un contenedor de Docker.