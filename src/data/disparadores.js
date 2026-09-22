// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


// CM-01. La última opción se llamaba «Recordar después» y nadie supo qué hacía.
// Se renombró y cada disparador lleva descripción. No se tocan.
export const disparadores = [
  { valor: 'Hora exacta',          desc: 'Suena a una hora que tú eliges',             icono: 'schedule' },
  { valor: 'Al llegar a un lugar', desc: 'Suena cuando entras o sales de un sitio',    icono: 'location_on' },
  { valor: 'Antes de un evento',   desc: 'Se apoya en tu calendario conectado',        icono: 'event_available' },
  { valor: 'Cada cierto tiempo',   desc: 'Se repite en intervalos que tú defines',      icono: 'timer' },
  { valor: 'Sin momento fijo',     desc: 'Queda en pendientes hasta que la atiendas',  icono: 'help' },
];

// CM-03. La condición de la bifurcación de M03, escrita en un solo sitio.
export const LUGAR = 'Al llegar a un lugar';

export const titulo = '¿Cuándo debe activarse?';
export const entradilla = 'Elige una regla inicial y ajusta detalles antes de guardar.';
export const continuar = 'Continuar';
