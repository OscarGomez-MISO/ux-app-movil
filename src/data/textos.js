// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const marca = 'Alarmas';

export const pestanas = [
  { id: 'Inicio',     icono: 'home',        ruta: 'M01Inicio' },
  { id: 'Pendientes', icono: 'task_alt',    ruta: 'M08Pendientes' },
  { id: 'Crear',      icono: 'add_circle',  ruta: 'M02TipoDeAlerta' },
  { id: 'Historial',  icono: 'history',     ruta: 'M09Historial' },
  { id: 'Ajustes',    icono: 'settings',    ruta: 'M10Ajustes' },
];

// CM-02. La barra «Paso N de 5» va en todo el flujo de creación.
export const pasos = [
  { n: 1, nombre: 'Tipo de alerta' },
  { n: 2, nombre: 'Contenido' },
  { n: 3, nombre: 'Ubicación' },
  { n: 4, nombre: 'Reglas' },
  { n: 5, nombre: '' },
];

export const tituloFlujo = 'Nueva alerta';
export const subtituloPaso = (n) => {
  const p = pasos[n - 1];
  return p.nombre ? `Paso ${n} de 5 · ${p.nombre}` : `Paso ${n} de 5`;
};

export const titulos = {
  M01: 'Alarmas',
  M08: 'Pendientes',
  M09: 'Historial',
  M10: 'Ajustes',
};
