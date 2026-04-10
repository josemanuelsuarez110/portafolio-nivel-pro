# Portafolio Nivel Pro

Un portafolio profesional construido con Next.js, Tailwind CSS, Supabase y Recharts.

## Características

- Dashboard con métricas en tiempo real
- Gráfico de barras interactivo
- Lista de proyectos
- Diseño responsivo con Tailwind CSS

## Configuración

### 1. Clona el repositorio
```bash
git clone https://github.com/josemanuelsuarez110/portafolio-nivel-pro.git
cd portafolio-nivel-pro
```

### 2. Instala dependencias
```bash
npm install
```

### 3. Configura Supabase
1. Ve a [supabase.com](https://supabase.com) y crea una cuenta
2. Crea un nuevo proyecto
3. Ve al SQL Editor y ejecuta el contenido de `supabase_setup.sql`
4. Ve a Settings > API y copia el Project URL y anon key
5. Actualiza `.env.local` con tus credenciales:
```
NEXT_PUBLIC_SUPABASE_URL=tu_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
```

### 4. Ejecuta el servidor de desarrollo
```bash
npm run dev
```

### 5. Despliega en Vercel
1. Ve a [vercel.com](https://vercel.com) y conecta tu cuenta de GitHub
2. Importa el repositorio `portafolio-nivel-pro`
3. Despliega

## Tecnologías

- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase
- Recharts