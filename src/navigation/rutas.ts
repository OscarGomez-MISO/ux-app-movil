import type { Href } from 'expo-router';

/**
 * Puente entre los nombres de pantalla de la especificación (§ 5) y las rutas
 * de expo-router. Los datos de `src/data/` nombran los destinos al estilo
 * native-stack («M07AlertaLanzada»); aquí se traducen a su ruta de archivo.
 */
export const rutas = {
  M01Inicio: '/',
  M02TipoDeAlerta: '/m02-tipo-de-alerta',
  M03Contenido: '/m03-contenido',
  M04ElegirLugar: '/m04-elegir-lugar',
  M05Reglas: '/m05-reglas',
  M06Canales: '/m06-canales',
  M07AlertaLanzada: '/m07-alerta-lanzada',
  M08Pendientes: '/m08-pendientes',
  M09Historial: '/m09-historial',
  M10Ajustes: '/m10-ajustes',
} as const;

export type NombrePantalla = keyof typeof rutas;

/**
 * Ruta de un destino escrito como nombre de pantalla en `src/data/`.
 *
 * El `as Href` está aquí, en un único sitio, porque M02 a M05 son de Óscar y
 * todavía no existen como archivo: las rutas tipadas de expo-router aún no las
 * conocen. Cuando él las suba, este cast se puede quitar.
 */
export const rutaDe = (nombre: string): Href =>
  (rutas[nombre as NombrePantalla] ?? rutas.M01Inicio) as Href;
