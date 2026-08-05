# Ramo de Flores

Dedicatoria animada con flores, corazones y mensaje personalizado — configurable desde un solo archivo.

## Estructura de carpetas

```
Ramo-De-Flores/
├── index.html
├── README.md
├── .gitignore
├── vercel.json
├── config/
│   └── config.js
├── css/
│   ├── reset.css
│   ├── layout.css
│   ├── flowers.css
│   ├── hearts.css
│   └── message.css
├── js/
│   ├── app.js
│   ├── animations.js
│   ├── flowers.js
│   ├── message.js
│   └── audio.js
└── assets/
    ├── music/
    ├── flowers/
    └── images/
```

## Cómo personalizar una nueva dedicatoria

Edita `config/config.js`. Es el único archivo que necesitas tocar para cambiar destinatario, mensaje, tema y audio.

### Destinatario

```js
destinatario: {
  nombre: "Ana",
  ocasion: "Cumpleaños"
}
```

Estos campos están disponibles para uso futuro (por ejemplo, insertarlos en el mensaje). Los párrafos actuales no los referencian automáticamente.

### Mensaje

```js
mensaje: {
  parrafos: [
    "Primer párrafo del mensaje.",
    "Segundo párrafo con **palabra destacada** en negrita visual.",
    "Tercer párrafo…"
  ],
  velocidadTypewriter: 30,    // milisegundos por carácter
  pausaEntreParrafos: 1000,   // milisegundos entre párrafos
  retrasoInicio: 8000         // milisegundos antes de empezar el texto
}
```

Usa `**texto**` para resaltar palabras (se convierten en `<span class="highlight">`).

### Tema

```js
tema: {
  nombre: "rosas",           // "rosas" | "tulipanes" | "cerezos"
  colorPrincipal: null,      // opcional: sobrescribe --light-purple
  colorSecundario: null,     // opcional: sobrescribe --lavender
  fondoOscuro: true
}
```

### Audio

```js
audio: {
  archivo: "cancion-original.m4a",
  volumen: 0.2,              // 0.0 a 1.0
  autoplay: true
}
```

### Meta

```js
meta: {
  tituloPagina: "Dedicatoria Especial"
}
```

## Cómo agregar una canción nueva

1. Coloca el archivo de audio en `assets/music/` (formato `.m4a` o `.mp3`).
2. Actualiza `CONFIG.audio.archivo` en `config/config.js` con el nombre del archivo.

Ejemplo:

```js
audio: {
  archivo: "mi-cancion.m4a",
  volumen: 0.25,
  autoplay: true
}
```

## Cómo agregar o ajustar un tema de color

Los temas predefinidos están en `js/flowers.js`, dentro del objeto `TEMAS`:

```js
const TEMAS = {
  rosas: {
    "--dark-color": "#010113",
    "--lavender": "#E6E6FA",
    "--light-purple": "#DDA0DD",
    "--deep-purple": "#483D8B"
  },
  tulipanes: { /* … */ },
  cerezos: { /* … */ }
};
```

Para un tema nuevo, agrega una entrada al objeto y usa su nombre en `CONFIG.tema.nombre`. También puedes forzar colores puntuales con `colorPrincipal` y `colorSecundario` en el config sin tocar `TEMAS`.

## Cómo correrlo localmente

Este proyecto es estático puro (sin build step). Necesitas un servidor local porque los paths relativos y el audio pueden fallar al abrir `index.html` directamente como `file://`.

**Opción 1 — npx serve:**

```bash
npx serve .
```

Abre la URL que muestra en la terminal (normalmente `http://localhost:3000`).

**Opción 2 — Live Server:**

Instala la extensión "Live Server" en VS Code/Cursor, clic derecho en `index.html` → "Open with Live Server".

## Cómo desplegarlo en Vercel

1. Sube el repositorio a GitHub.
2. En [vercel.com](https://vercel.com), importa el repositorio.
3. Configuración del proyecto:
   - **Framework Preset:** Other
   - **Build Command:** (vacío)
   - **Output Directory:** `.` (raíz del proyecto)
4. Deploy. Vercel servirá los archivos estáticos tal cual gracias al `vercel.json` incluido.
