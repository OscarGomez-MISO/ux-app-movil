// Tipos de la escala tipográfica · type.js viene del pack y no se edita.
import type { TextStyle } from 'react-native';

/** Las trece escalas de § 3.2. Un nombre fuera de esta lista no compila. */
export type EscalaTipografica =
  | 'displaySmall'
  | 'headlineLarge'
  | 'headlineMedium'
  | 'headlineSmall'
  | 'titleLarge'
  | 'titleMedium'
  | 'titleSmall'
  | 'bodyLarge'
  | 'bodyMedium'
  | 'bodySmall'
  | 'labelLarge'
  | 'labelMedium'
  | 'labelSmall';

/**
 * Cada escala trae ya su `fontFamily` (Plex-Regular, Plex-Medium, Plex-SemiBold).
 * Nunca se le añade `fontWeight`: en React Native cada peso es una familia.
 */
export declare const type: Record<EscalaTipografica, TextStyle>;

/** Rótulo en versales: { ...type.labelSmall, ...versales } */
export declare const versales: TextStyle;

declare const _default: typeof type;
export default _default;
