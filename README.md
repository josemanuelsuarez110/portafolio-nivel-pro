# Portafolio NIVEL PRO 🚀

Repositorio profesional con arquitectura modular: **Frontend (Next.js)**, **Backend (FastAPI)** y **Database (Supabase/Postgres)**. Construido para el despliegue automático en la nube.

---

## 🛠️ Guía de Despliegue Paso a Paso

### 1. Database (Supabase)
1. Crea un proyecto en [Supabase](https://supabase.com/).
2. Ve al **SQL Editor** y ejecuta el contenido de [database/schema.sql](database/schema.sql).
3. Ve a **Project Settings > Database > Connection String** y copia el **URI**.
   - *Nota*: Reemplaza `[YOUR-PASSWORD]` con tu contraseña real.

### 2. Backend (Railway / Render)
1. Sube tu código a GitHub.
2. En tu plataforma (Railway o Render), crea un **Web Service** apuntando al directorio `backend`.
3. Configura las siguientes **Environment Variables**:
   - `DATABASE_URL`: Tu URI de Supabase (ej. `postgresql://postgres:password@host:5432/postgres`).
   - `FRONTEND_URL`: La URL de tu sitio en Vercel (ej. `https://mi-portafolio.vercel.app`).
4. La aplicación detectará automáticamente el puerto `$PORT`.

### 3. Frontend (Vercel)
1. Conecta tu repositorio y establece el **Root Directory** a `frontend`.
2. Configura las siguientes **Environment Variables**:
   - `NEXT_PUBLIC_API_URL`: La URL de tu backend (ej. `https://mi-backend.up.railway.app`).
   - `NEXT_PUBLIC_SUPABASE_URL`: Tu URL del API de Supabase.
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Tu clave anónima de Supabase.

---

## 🏗️ Arquitectura del Proyecto
- `/frontend`: Next.js 14+ con Dashboard dinámico (LineChart) y diseño profesional.
- `/backend`: API en FastAPI con endpoints optimizados para producción.
- `/database`: Esquemas de base de datos para PostgreSQL.
- `/docs`: Documentación técnica detallada.

## 🐳 Docker (Entorno Local)
Para correr todo localmente en un entorno aislado:
```bash
docker-compose up --build
```
