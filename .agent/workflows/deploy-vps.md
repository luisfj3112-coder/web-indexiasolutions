---
description: Cómo desplegar la aplicación en Easypanel (Docker)
---

# Guía de Despliegue en Easypanel

Easypanel es la forma más fácil de desplegar tu aplicación en tu VPS. Sigue estos pasos:

## Paso 1: Sube tu código a GitHub
Asegúrate de que tu proyecto tenga los archivos `Dockerfile` y `nginx.conf` que acabo de crear. Sube todo el proyecto a un repositorio privado o público en GitHub.

## Paso 2: Crear un nuevo servicio en Easypanel
1. Entra en tu panel de **Easypanel**.
2. Haz clic en **"Create Project"** (si no tienes uno) o entra en un proyecto existente.
3. Haz clic en **"Create Service"** y selecciona **"App"**.

## Paso 3: Conectar GitHub
1. En la configuración del servicio, ve a la pestaña **"Source"**.
2. Selecciona **"GitHub"**.
3. Conecta tu cuenta y selecciona el repositorio `indexia-solutions`.
4. En **"Branch"**, pon `main` (o la rama que uses).

## Paso 4: Configuración de Build
Easypanel detectará automáticamente el `Dockerfile`. No necesitas tocar nada en los comandos de build o start, ya que el `Dockerfile` se encarga de todo.

## Paso 5: Dominio y SSL
1. Ve a la pestaña **"Domains"**.
2. Añade tu dominio (ej: `www.tu-empresa.com`).
3. Easypanel generará el certificado **SSL (HTTPS)** automáticamente en unos segundos.

## Paso 6: Deploy
Haz clic en el botón **"Deploy"**. Easypanel:
1. Descargará tu código.
2. Construirá la imagen Docker (npm install + npm build).
3. Configurará Nginx.
4. Levantará la web con HTTPS.

¡Y ya está! Tu web estará online en minutos.
