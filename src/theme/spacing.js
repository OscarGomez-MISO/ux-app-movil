// Espaciado, radios y marco · rejilla base de 4 px
// NO EDITAR. Equivalente en el repositorio web: src/styles/grid.css

export const sp = { 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32, 12: 48 };

export const radius = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 28 };

export const frame = {
  // lienzo de referencia del diseño
  ancho: 390,
  alto: 844,

  // alturas fijas
  appBar: 72,
  bottomNav: 88,
  fila: 72,
  filaAjuste: 64,
  campo: 52,
  boton: 48,
  botonPrincipal: 56,
  chip: 32,
  toqueMin: 48,

  // margen lateral: es lo único horizontal que es fijo.
  // Todo lo demás se resuelve con flex, para que aguante
  // un teléfono de 360 y uno de 430.
  margen: 16,
  contenido: 358,   // = 390 - 2*16, referencia, no valor a escribir
};

export default { sp, radius, frame };
