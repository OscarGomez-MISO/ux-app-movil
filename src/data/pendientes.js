// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const chips = ['Todos', 'Hoy', 'Esta semana', 'Por lugar'];

export const pendientes = [
  { id: 0, icono: 'payments',     nombre: 'Pagar administración',  ctx: 'Hoy · 6:00 p. m.',              estado: 'venceHoy',    filtros: ['Hoy', 'Esta semana'] },
  { id: 1, icono: 'medication',   nombre: 'Tomar medicamento',     ctx: 'Cada 6 h · próxima 2:00 p. m.', estado: 'reprogramada', filtros: ['Hoy', 'Esta semana'] },
  { id: 2, icono: 'location_on',  nombre: 'Recoger paquete',       ctx: 'Al llegar a Casa',              estado: 'porLugar',     filtros: ['Por lugar'] },
  { id: 3, icono: 'work',         nombre: 'Reunión con el equipo', ctx: 'Mañana · 10:00 a. m.',          estado: 'manana',       filtros: ['Esta semana'] },
  { id: 4, icono: 'error',        nombre: 'Renovar la póliza',     ctx: 'Vence en 3 días',               estado: 'critica',      filtros: ['Esta semana'] },
  { id: 5, icono: 'check_circle', nombre: 'Enviar el reporte',     ctx: 'Hecho hoy · 9:12 a. m.',        estado: 'completada',   filtros: ['Hoy', 'Esta semana'] },
];
