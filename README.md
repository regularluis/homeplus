# HomePlus — Sitio web

Sitio estático para renta de propiedades en la zona metropolitana de Querétaro.
Solo HTML, CSS y JavaScript. Sin bases de datos, sin frameworks. Carga rápido y es fácil de mantener.

## Archivos

```
index.html        → la página
styles.css        → estilos (colores en :root)
propiedades.js    → AQUÍ editas las propiedades (lo más importante para ti)
app.js            → tarjetas, filtro, galería y WhatsApp
assets/           → logo y favicon
assets/props/     → fotos de cada propiedad
```

## Propiedades incluidas

El sitio ya trae 4 propiedades cargadas desde tu listado de WhatsApp:

1. Departamento en Floresta — $8,800 (Av. Peñuelas)
2. Casa amueblada en Claustros del Sur — Consultar (a 100 m del Hospital Ángeles Centro Sur)
3. Departamento en Cipreses — $9,000 (entre Sombrerete y Pie de la Cuesta)
4. Departamento amueblado en El Arcángel — Consultar (Fraccionamiento El Arcángel)

Cada una tiene su galería de fotos, descripción, recámaras, baños, botón de WhatsApp y botón "Ver ubicación en el mapa" (campo `mapa` en propiedades.js).

## Editar propiedades

Abre `propiedades.js`. Cada propiedad es un bloque así:

```js
{
  titulo: "Duplex planta baja cerca de Plaza Sendero",
  zona: "Sendero",
  precio: "$8,800",          // o "Consultar"
  recamaras: 2,
  banos: 1,
  destacado: "A 4 min de Plaza Sendero",
  descripcion: "Texto completo que se ve al abrir la propiedad...",
  fotos: [
    "assets/props/duplex-sendero-1.jpg",   // la primera es la portada
    "assets/props/duplex-sendero-2.jpg"
  ]
}
```

- Para **cambiar un precio**, edita el campo `precio`.
- Para **agregar fotos**, sube las imágenes a `assets/props/` y añade su ruta a `fotos`.
- Para **agregar una propiedad**, copia un bloque completo y cámbiale los datos.
- Las **zonas del filtro** se generan solas a partir del campo `zona`.

## Cambiar el WhatsApp

El número está como `524423191121` (52 = México). Para cambiarlo, busca y reemplaza
ese número en `index.html` y en `app.js`.

## Subir a GitHub Pages (gratis)

1. Crea una cuenta en https://github.com
2. Crea un repositorio nuevo, por ejemplo `homeplus`.
3. Sube **todos** estos archivos (incluidas las carpetas `assets/` y `assets/props/`).
4. Ve a **Settings → Pages**.
5. En "Source" elige la rama `main` y carpeta `/ (root)`. Guarda.
6. En 1–2 minutos tu sitio estará en:
   `https://TU-USUARIO.github.io/homeplus/`

## Dominio propio (opcional)

Con un dominio (ej. `homeplusqro.com`), en **Settings → Pages → Custom domain**
escribe el dominio y sigue las instrucciones de DNS de tu proveedor.

---
Paleta: terracota `#A66A43` · arena `#D7B899` · tierra `#7B4F32` · crema `#F8F3EE`
