# Cómo agregar o quitar una propiedad del sitio

No necesitas saber programar. Solo edita un archivo de texto (`propiedades.js`) siguiendo estos pasos.

---

## Para AGREGAR una propiedad nueva

1. Entra a tu repositorio en GitHub → abre el archivo **`propiedades.js`**
2. Haz clic en el ícono del lápiz ✏️ (arriba a la derecha) para editar
3. Busca cualquier bloque que empiece con `{` y termine con `},` — por ejemplo, este:

```js
{
  id: "xativa-piso-1",
  operacion: "venta",
  zona: "Xàtiva",
  tipo: "Piso",
  precio: 193000,
  precioTexto: "193.000 €",
  hab: 3,
  m2: 153,
  planta: "5ª, exterior",
  ascensor: "Sí",
  garaje: "Sí",
  titulo: "Piso con garaje y trastero, 5ª planta exterior",
  desc: "Descripción larga del inmueble...",
  imgs: [
    "imagenes/foto1.jpg",
    "imagenes/foto2.jpg"
  ]
},
```

4. **Selecciona ese bloque completo** (desde la `{` hasta la `},`) y cópialo
5. Pégalo **justo antes** del `];` que cierra el archivo (al final de todo)
6. Cambia los datos del bloque que acabas de pegar:

| Campo | Qué poner |
|---|---|
| `id` | Algo único, sin espacios ni acentos. Ej: `"cullera-piso-nuevo-1"` |
| `operacion` | `"venta"` o `"alquiler"` (con comillas, tal cual) |
| `zona` | El pueblo/ciudad. Ej: `"Cullera"` |
| `tipo` | `"Piso"` o `"Casa / chalet"` |
| `precio` | El número solo, sin puntos ni €. Ej: `220000` |
| `precioTexto` | Cómo se ve en pantalla. Ej: `"220.000 €"` (o `"800 €/mes"` si es alquiler) |
| `hab` | Número de habitaciones. Ej: `3` |
| `m2` | Metros cuadrados. Ej: `95` |
| `planta` | Ej: `"2ª planta"` |
| `ascensor` / `garaje` | `"Sí"` o `"No"` |
| `titulo` | Título que se ve en la tarjeta. Ej: `"Piso reformado a estrenar"` |
| `desc` | Descripción larga, para la ficha del inmueble |
| `imgs` | Lista de fotos (ver sección de abajo) |

7. **Revisa que cada línea termine en coma `,`** excepto la última antes de la `}`
8. Guarda con **Commit changes**
9. Espera 1-2 minutos — la propiedad aparece sola en Home, en Comprar o Alquilar (según pusiste), y tiene su propia ficha

⚠️ Error más común: olvidar una coma `,` entre líneas, o dejar una `{` sin su `}`. Si algo se rompe, revisa que cada línea tenga su coma al final.

---

## Para QUITAR una propiedad (ej. ya se alquiló o se vendió)

1. Abre `propiedades.js` en modo edición
2. Busca el bloque de esa propiedad (puedes guiarte por el `titulo` o la `zona`)
3. Selecciona **todo el bloque completo**, desde su `{` hasta su `},`
4. Bórralo
5. Guarda con **Commit changes**

Desaparece sola de todo el sitio en 1-2 minutos.

---

## Cómo subir fotos nuevas

1. En el repositorio, entra a la carpeta `imagenes/` (si no existe, créala)
2. Antes de subir, comprime las fotos en **tinypng.com** (gratis) — pesan menos y el sitio carga más rápido
3. Arrastra las fotos comprimidas a la carpeta, ponles nombre simple sin espacios ni acentos (ej: `cullera-salon-1.jpg`)
4. Commit changes
5. En `propiedades.js`, dentro de `imgs:`, escribe la ruta así:
   ```js
   imgs: ["imagenes/cullera-salon-1.jpg", "imagenes/cullera-cocina-1.jpg"]
   ```

---

## Cómo agregar un video a una propiedad

Algunas propiedades tienen video en Idealista. Para agregarlo:

1. Descarga el video desde el anuncio de Idealista (igual que las fotos)
2. Súbelo a la misma carpeta de esa propiedad en `Images/`, por ejemplo:
   `Images/Piso en venta en Calle Pintor Juan Frances, 11, Xátiva — idealista/video.mp4`
3. En `propiedades.js`, dentro del bloque de esa propiedad, agrega una línea nueva `video:` (puede ir después de `imgs:`), con la ruta completa empezando con `/Images/`:

```js
video: "/Images/Piso en venta en Calle Pintor Juan Frances, 11, Xátiva — idealista/video.mp4",
```

⚠️ Si el nombre de la carpeta tiene espacios, comas o acentos (como casi todas), tienes que "codificarlos" igual que en las fotos — lo más fácil es copiar la ruta de una foto que ya esté en `imgs:` de esa misma propiedad y solo cambiar el nombre del archivo al final por el del video.

Ejemplo real:
```js
imgs: [
  "/Images/Piso%20en%20venta%20en%20Calle%20Pintor...idealista/imgi_101_...webp",
  ...
],
video: "/Images/Piso%20en%20venta%20en%20Calle%20Pintor...idealista/video.mp4",
```

Si no le pones `video:` a una propiedad, simplemente no aparece el reproductor en su ficha — no rompe nada.

---



Cuenta las llaves `{` y `}` — deben ser la misma cantidad. Si GitHub te muestra un error raro o el sitio deja de cargar después de un cambio, casi siempre es una coma o una llave faltante. Si se traba, mándale captura a Víctor y lo revisa contigo.
