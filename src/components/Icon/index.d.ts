// Tipos de Icon · index.js y paths.js vienen del pack y no se editan.
import type { ReactElement } from 'react';
import type { paths } from './paths';

/** Los 52 nombres válidos. Un nombre inventado no compila. */
export type IconName = keyof typeof paths;

export interface IconProps {
  nombre: IconName;
  /** 16 ayuda · 18 botón · 20 campo · 24 lista y navegación · 56 confirmaciones */
  size?: number;
  color?: string;
}

export default function Icon(props: IconProps): ReactElement | null;
