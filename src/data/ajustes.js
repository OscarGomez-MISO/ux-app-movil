// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const conexiones = {
  rotulo: 'CONEXIONES',
  filas: [
    { icono: 'calendar_today', titulo: 'Calendario',           ctx: 'Google Calendar', estado: 'conectado' },
    { icono: 'schedule',       titulo: 'Reloj conectado',      ctx: 'Galaxy Watch 6',  estado: 'conectado' },
    { icono: 'task_alt',       titulo: 'Aplicación de tareas', ctx: 'No configurada',  estado: 'sinConectar' },
  ],
};

export const alertas = {
  rotulo: 'ALERTAS',
  // Inertes: sus pantallas de detalle no entran en las diez.
  filas: [
    { icono: 'location_on',        titulo: 'Permisos',                ctx: 'Ubicación, notificaciones y micrófono', inerte: true },
    { icono: 'notifications_off',  titulo: 'Sonido en modo silencio', ctx: 'Solo para alertas críticas',            inerte: true },
    { icono: 'sync',               titulo: 'Copia en la nube',        ctx: 'Última copia hoy a las 10:30 a. m.',    inerte: true },
  ],
};

// Sostiene el reparto entre plataformas: la limpieza masiva es W08, en la web.
export const mantenimiento = {
  rotulo: 'MANTENIMIENTO',
  titulo: 'Depurar alarmas antiguas',
  desc: 'La limpieza masiva se hace desde la web.',
};

export const cerrarSesion = 'Cerrar sesión';
