import { StyleSheet, Text, View } from 'react-native';

import Icon, { type IconName } from '@/src/components/Icon';
import { colors, frame, radius, sp, type } from '@/src/theme';

export type EstadoChip =
  | 'pendiente'
  | 'critica'
  | 'venceHoy'
  | 'completada'
  | 'reprogramada'
  | 'porLugar'
  | 'manana'
  | 'conectado'
  | 'sinConectar';

/** Icono, palabra y color de cada estado · § 4.16. La palabra es fija. */
const estados: Record<
  EstadoChip,
  { icono: IconName; palabra: string; fondo: string; tinta: string }
> = {
  pendiente: {
    icono: 'schedule',
    palabra: 'Pendiente',
    fondo: colors.secondaryContainer,
    tinta: colors.onSecondaryContainer,
  },
  critica: {
    icono: 'notification_important',
    palabra: 'Crítica',
    fondo: colors.error,
    tinta: colors.onError,
  },
  venceHoy: {
    icono: 'priority_high',
    palabra: 'Vence hoy',
    fondo: colors.error,
    tinta: colors.onError,
  },
  completada: {
    icono: 'check_circle',
    palabra: 'Completada',
    fondo: colors.tertiaryContainer,
    tinta: colors.onTertiaryContainer,
  },
  reprogramada: {
    icono: 'event_repeat',
    palabra: 'Repetida',
    fondo: colors.postponedContainer,
    tinta: colors.onPostponedContainer,
  },
  porLugar: {
    icono: 'location_on',
    palabra: 'Por lugar',
    fondo: colors.secondaryContainer,
    tinta: colors.onSecondaryContainer,
  },
  manana: {
    icono: 'event',
    palabra: 'Mañana',
    fondo: colors.surfaceContainerHigh,
    tinta: colors.onSurfaceVariant,
  },
  conectado: {
    icono: 'check',
    palabra: 'Conectado',
    fondo: colors.tertiaryContainer,
    tinta: colors.onTertiaryContainer,
  },
  sinConectar: {
    icono: 'info',
    palabra: 'Conectar',
    fondo: colors.surfaceContainerHigh,
    tinta: colors.onSurfaceVariant,
  },
};

/** La palabra fija de un estado, para cuando se muestra sin la cápsula. */
export const palabraDe = (estado: EstadoChip) => estados[estado].palabra;

/** Etiqueta de estado · § 4.16. Nunca sólo color: siempre icono y palabra. */
export default function StatusChip({ estado }: { estado: EstadoChip }) {
  const { icono, palabra, fondo, tinta } = estados[estado];

  return (
    <View style={[estilos.chip, { backgroundColor: fondo }]}>
      <Icon nombre={icono} size={16} color={tinta} />
      <Text style={[type.labelMedium, { color: tinta }]}>{palabra}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    height: frame.chip,
    paddingHorizontal: sp[3],
    borderRadius: radius.lg,
  },
});
