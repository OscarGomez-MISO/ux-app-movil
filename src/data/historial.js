// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const pestanas = ['Completadas', 'Reprogramadas', 'No realizadas'];

// CM-07. El número de veces pospuesta es la corrección: sin él no había forma
// de saber cuántas veces se había reprogramado una alerta.
export const listas = {
  'Completadas': {
    rotulo: 'MAYO 2026 · 12 COMPLETADAS',
    filas: [
      { icono: 'payments',   nombre: 'Pagar administración', ctx: 'Completada hoy a las 6:12 p. m.' },
      { icono: 'work',       nombre: 'Enviar el reporte',    ctx: 'Completada ayer a las 9:12 a. m.' },
      { icono: 'medication', nombre: 'Tomar medicamento',    ctx: 'Completada ayer a las 8:00 p. m.' },
      { icono: 'home',       nombre: 'Comprar el mercado',   ctx: 'Completada el 10/05 a las 7:30 p. m.' },
    ],
  },
  'Reprogramadas': {
    rotulo: 'MAYO 2026 · 5 REPROGRAMADAS',
    filas: [
      { icono: 'event_repeat', nombre: 'Entrega de proyecto', ctx: 'Pospuesta 2 veces · última el 12/05' },
      { icono: 'event_repeat', nombre: 'Cita con el tutor',   ctx: 'Pospuesta 3 veces · última el 09/05' },
      { icono: 'event_repeat', nombre: 'Beber agua',          ctx: 'Pospuesta 2 veces · hoy' },
    ],
  },
  'No realizadas': {
    rotulo: 'MAYO 2026 · 3 NO REALIZADAS',
    filas: [
      { icono: 'close', nombre: 'Cita con el tutor',          ctx: 'Venció el 09/05 sin respuesta' },
      { icono: 'close', nombre: 'Llamar a la administración', ctx: 'Venció el 07/05 sin respuesta' },
      { icono: 'close', nombre: 'Renovar la póliza',          ctx: 'Venció el 02/05 sin respuesta' },
    ],
  },
};

export const detalle = 'Detalle';
export const nota = 'Toca cualquier registro para ver su detalle.';
