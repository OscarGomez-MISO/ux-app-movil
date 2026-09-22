import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import Icon, { type IconName } from '@/src/components/Icon';
import { colors, frame, radius, sp, type } from '@/src/theme';

type ListRowProps = {
  titulo: string;
  ctx?: string;
  icono?: IconName;
  /** StatusChip, un chevron, un Button terciario, o nada. */
  trasera?: ReactNode;
  onPress?: () => void;
  /** Alto 64 en vez de 72. */
  compacta?: boolean;
  /** Lleva fuera de las diez pantallas: se ve atenuada y no responde. */
  inerte?: boolean;
  /** Título en onSurfaceVariant, para la fila ya completada de M08. */
  atenuado?: boolean;
  /** `superficie`: fondo gris y sin borde, como las filas de canal de M06. */
  variante?: 'tarjeta' | 'superficie';
};

/** Fila de lista · § 4.12. */
export default function ListRow({
  titulo,
  ctx,
  icono,
  trasera,
  onPress,
  compacta,
  inerte,
  atenuado,
  variante = 'tarjeta',
}: ListRowProps) {
  return (
    <Pressable
      onPress={inerte ? undefined : onPress}
      disabled={inerte || !onPress}
      accessibilityRole={onPress && !inerte ? 'button' : undefined}
      style={({ pressed }) => [
        estilos.fila,
        variante === 'superficie' && estilos.superficie,
        compacta && estilos.compacta,
        inerte && estilos.inerte,
        pressed && !inerte && estilos.pulsada,
      ]}
    >
      {icono && (
        <Icon nombre={icono} size={24} color={colors.onSurfaceVariant} />
      )}

      <View style={estilos.texto}>
        <Text
          style={[
            type.titleSmall,
            { color: atenuado ? colors.onSurfaceVariant : colors.onSurface },
          ]}
        >
          {titulo}
        </Text>
        {ctx && (
          <Text style={[type.bodySmall, estilos.ctx]}>{ctx}</Text>
        )}
      </View>

      {trasera}
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp[4],
    height: frame.fila,
    paddingHorizontal: sp[4],
    backgroundColor: colors.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
    borderRadius: radius.md,
  },
  superficie: {
    backgroundColor: colors.surfaceContainerLow,
    borderColor: 'transparent',
  },
  compacta: {
    height: frame.filaAjuste,
  },
  pulsada: {
    backgroundColor: colors.surfaceContainerLow,
  },
  inerte: {
    opacity: 0.38,
  },
  texto: {
    flex: 1,
    gap: 2,
  },
  ctx: {
    color: colors.onSurfaceVariant,
  },
});
