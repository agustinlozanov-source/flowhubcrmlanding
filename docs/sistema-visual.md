# El sistema visual

Cinco reglas. No es un manual: es lo que hay que respetar para que todo lo que
salga de FlowHub se reconozca sin leer el logo.

---

## 1. Blanco y negro mandan

El fondo es blanco y la tipografía negra. El modo oscuro existe como opción del
visitante, no como el estado por omisión.

Nada de fondos de color, degradados de ambiente ni manchas flotando. **Ese es
exactamente el diseño del que hay que separarse**: en 2026 toda empresa de
inteligencia artificial tiene el mismo fondo de manchas moradas, y verse igual
que todos es la forma más cara de no verse.

## 2. El degradado es un acento, no un ambiente

```
linear-gradient(110deg, #1aab99, #0066ff, #3533cd)
```

Es el degradado del logo y aparece **contadas veces por pantalla**. En la página
de canal son tres: el logo, una línea del titular, y el botón al pasar el mouse.

En cuanto el color está en todos lados deja de decir nada. Lo que lo hace
valioso es que sea escaso.

## 3. El color entra por el contenido

Los mockups llevan color entero: la conversación azul de Instagram, el ícono de
la plataforma, los logos de marca, las capturas del producto.

Eso no contradice la regla anterior. **El color está donde está el producto, no
en la decoración.** Un logo de WhatsApp en verde es información; un fondo verde
no es nada.

## 4. Todo lo redondeable es una píldora

`border-radius: 50px`. Botones, píldoras, fichas de canal, etiquetas, la acción
de la barra superior. Arriba, abajo y en medio.

Nada de esquinas de 8 o 12 píxeles conviviendo con píldoras: o todo es píldora
o no se nota la intención.

**El botón, exacto:**

- **Primario** — píldora negra, texto blanco, `Plus Jakarta Sans` 800.
- **Secundario** — sin relleno, contorno de 2px en degradado y el texto también
  en degradado. Es contorno y tipografía y nada más: por eso se siente fino en
  vez de pesado.
- **Al pasar el mouse**, los dos igual: el degradado aparece **entero y de
  golpe**, el texto se vuelve blanco, un brillo cruza una sola vez y el botón se
  levanta tres píxeles.

Creciendo desde abajo parece un tanque llenándose. No se hace.

## 5. El aire es el diseño

Donde la tentación pide una mancha de color, va espacio vacío.

Es lo que hace que el acento signifique algo cuando aparece, y es lo que separa
esto de una plantilla.

---

## Detalles que ya están resueltos

**El interruptor de tema** es el ícono suelto —un sol de líneas en oscuro, una
luna en claro—, sin recuadro, al final de todo y a la derecha de la acción
principal. Un recuadro alrededor compite con el botón y no hace falta para que
se entienda que se puede tocar.

**Los mockups se construyen en la página**, no se capturan. Se ven nítidos en
cualquier pantalla, pesan cero y siguen el tema que el visitante eligió.

**Toda animación es `transform` y `opacity`**, y se apaga entera si el sistema
del visitante pide menos movimiento.

---

## Dos trampas que ya nos costaron tiempo

**El degradado como capa detrás del botón no se ve.** Un pseudo-elemento con
`z-index` negativo queda debajo del fondo propio del botón. Va como capa encima
con la etiqueta en un `<span>`, o como `background-image` del propio botón.

**Dos pseudo-elementos no alcanzan.** Si `::before` es el relleno y `::after` el
brillo, el contorno en degradado tiene que ir en el borde del botón: dos capas
de fondo, el color plano recortado al *padding* y el degradado recortado al
borde.

---

## Dónde vive

`canales/_estilo.css` — el sistema aplicado, con las variables arriba.
`index.html` — la pantalla de bienvenida, de donde salió el botón.
