# Documentación del Proyecto AstralIA

Este documento proporciona una visión general del proyecto AstralIA, su arquitectura, componentes y cómo ponerlo en marcha.

## Arquitectura

El proyecto sigue una arquitectura de microservicios, compuesta por los siguientes componentes principales:

- **Frontend:** Una aplicación Next.js que proporciona la interfaz de usuario.
- **Backend:** Un servidor Express.js que gestiona la lógica de negocio y la comunicación con la base de datos.
- **Base de datos:** MongoDB para el almacenamiento de datos.
- **Automatización:** n8n para la automatización de flujos de trabajo.

Todos los servicios están orquestados mediante Docker y Docker Compose.

## Componentes

### Frontend (`/client`)

- **Framework:** Next.js
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Dependencias clave:** React, next-intl para internacionalización.

### Backend (`/server`)

- **Framework:** Express.js
- **Lenguaje:** TypeScript
- **Base de datos:** Mongoose para la interacción con MongoDB.
- **Dependencias clave:** express, mongoose, dotenv.

### n8n (`/n8n`)

- Se utiliza para automatizar tareas y flujos de trabajo. La configuración se encuentra en el `docker-compose.yml`.

### Docker

- `docker-compose.yml`: Define y orquesta los servicios de la aplicación (frontend, backend, n8n, mongodb).
- `Dockerfile` en `/client` y `/server`: Definen las imágenes de Docker para cada servicio.

## Puesta en marcha

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd AstralIA
    ```

2.  **Configurar variables de entorno:**
    - Crear un archivo `.env` en la carpeta `Docker` a partir de `.env.example` y rellenar las variables necesarias.

3.  **Levantar los servicios con Docker Compose:**
    ```bash
    docker-compose up -d
    ```

4.  **Acceder a los servicios:**
    - **Frontend:** `http://localhost:3000`
    - **Backend:** `http://localhost:3001`
    - **n8n:** `http://localhost:5678`