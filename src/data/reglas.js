// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


import { LUGAR } from './disparadores';

export const titulo = 'Reglas de la alerta';

// CM-04. El resumen cambia según el disparador. Las dos frases son literales:
// el usuario buscó aquí una hora que no aplicaba a su alerta.
export const resumen = (disparador, lugar = 'Casa') =>
  disparador === LUGAR
    ? { titulo: `Se activará al llegar a ${lugar}`,
        desc:   'Como elegiste un lugar, no se piden fecha ni hora.' }
    : { titulo: 'Lun, 18 de mayo · 6:30 p. m.',
        desc:   'Resumen calculado desde pasos anteriores.' };

export const opciones = {
  repeticion:  ['Solo una vez', 'Todos los días', 'Cada 6 horas', 'Personalizada'],
  insistencia: ['Normal', 'Insistente', 'Crítica'],
};

export const valores = { repeticion: 'Solo una vez', insistencia: 'Normal' };

export const confirmacion = {
  titulo: 'Confirmación',
  desc: 'Requerir confirmación en móvil',
  activo: true,
};

export const nota = 'La fecha y hora se eligieron antes. Aquí revisas recurrencia e insistencia.';
export const botones = { atras: 'Atrás', guardar: 'Guardar' };
