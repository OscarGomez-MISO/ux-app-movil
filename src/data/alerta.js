// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const alertaLanzada = {
  rotulo: 'ALERTA',
  titulo: 'Pagar administración',
  vence: 'Vence hoy · 6:00 p. m.',
  estado: 'critica',
  rotuloAccion: 'QUÉ DEBES HACER',
  instruccion: 'Abrir la plataforma y pagar la cuota',
  cierre: 'La alerta se cierra cuando eliges una opción.',
};

// CM-06. Cinco decisiones. Ninguna apaga el aviso sin decidir, y ninguna cierra
// la pantalla sin navegar. No añadir un botón de cerrar ni una X.
export const capsulas = [
  { jerarquia: 'principal',   icono: 'check_circle',      texto: 'Ya lo hice',                 a: 'M01Inicio' },
  { jerarquia: 'secundaria',  icono: 'snooze',            texto: 'Recordarme en 30 minutos',   a: 'M08Pendientes' },
  { jerarquia: 'terciaria',   icono: 'event_repeat',      texto: 'Cambiar el momento',         a: 'M05Reglas' },
  { jerarquia: 'destructiva', icono: 'cancel',            texto: 'Ya no la necesito',          a: 'M01Inicio' },
  { jerarquia: 'discreta',    icono: 'record_voice_over', texto: 'Escuchar el mensaje guiado', a: null },
];

export const reproduciendo = 'Reproduciendo…';
