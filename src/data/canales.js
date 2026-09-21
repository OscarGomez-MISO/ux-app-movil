// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const titulo = 'Cómo te avisamos';

export const canales = [
  { icono: 'notifications',      titulo: 'Sonido',                 desc: 'Suena aunque el teléfono esté en vibración', activo: true },
  { icono: 'toggle_on',          titulo: 'Vibración',              desc: 'Discreto, útil si hay alguien cerca',        activo: true },
  { icono: 'schedule',           titulo: 'Reloj conectado',        desc: 'Solo lo sientes tú',                         activo: true },
  { icono: 'record_voice_over',  titulo: 'Leer el mensaje guiado', desc: 'Reproduce la frase que grabaste',            activo: false },
];

// CM-05. El aviso va ANTES del botón de guardar. No se mueve al pie ni se
// convierte en un diálogo: el usuario guardó una alerta crítica en silencio.
export const avisoSilencio = {
  titulo: 'Tu teléfono está en silencio',
  desc: 'Esta alerta puede no oírse. Puedes permitir que las alertas críticas suenen de todos modos.',
};

export const botones = {
  ajustes: 'Revisar ajustes de sonido',
  probar: 'Probar sonido y vibración',
  guardar: 'Guardar alerta',
};
