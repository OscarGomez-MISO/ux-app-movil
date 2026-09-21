import type { ReactNode } from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';

import Icon, { type IconName } from '@/src/components/Icon';
import { colors, radius, sp } from '@/src/theme';

export type CardTipo = 'tarjeta' | 'superficie' | 'aviso';
export type CardTono = 'error' | 'pospuesta';

type CardProps = {
  tipo: CardTipo;
  children: ReactNode;
  tono?: CardTono;
  /** Sólo en `aviso`: icono 20 a la izquierda, alineado arriba. */
  icono?: IconName;
  style?: ViewStyle;
};

/** Contenedor del sistema · § 4.11. */
export default function Card({ tipo, children, tono, icono, style }: CardProps) {
  const fondo = tipo === 'aviso' && tono ? avisos[tono] : bases[tipo];

  return (
    <View style={[estilos.base, fondo, style]}>
      {icono ? (
        <View style={estilos.conIcono}>
          <Icon nombre={icono} size={20} color={colorDeTexto(tipo, tono)} />
          <View style={estilos.cuerpo}>{children}</View>
        </View>
      ) : (
        children
      )}
    </View>
  );
}

/** Color del texto de la variante, para que el icono lo herede. */
export function colorDeTexto(tipo: CardTipo, tono?: CardTono) {
  if (tipo !== 'aviso') return colors.onSurface;
  if (tono === 'error') return colors.onErrorContainer;
  if (tono === 'pospuesta') return colors.onPostponedContainer;
  return colors.onPrimaryContainer;
}

const estilos = StyleSheet.create({
  base: {
    borderRadius: radius.md,
    padding: sp[4],
  },
  conIcono: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: sp[3],
  },
  cuerpo: {
    flex: 1,
  },
});

const bases: Record<CardTipo, ViewStyle> = {
  tarjeta: {
    backgroundColor: colors.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
  },
  superficie: { backgroundColor: colors.surfaceContainer },
  aviso: { backgroundColor: colors.primaryContainer },
};

const avisos: Record<CardTono, ViewStyle> = {
  error: { backgroundColor: colors.errorContainer },
  pospuesta: { backgroundColor: colors.postponedContainer },
};
