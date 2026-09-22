import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import Icon, { type IconName } from '@/src/components/Icon';
import { colors, frame, radius, sp, type } from '@/src/theme';

type ListRowProps = {
  titulo: string;
  ctx?: string;
  icono?: IconName;
  /** Casilla u otro control a la izquierda. Tiene prioridad sobre `icono`. */
  delante?: ReactNode;
  /** StatusChip, un chevron, un Button terciario, o nada. */
  trasera?: ReactNode;
  onPress?: () => void;
  /** Alto 64 en vez de 72. */
  compacta?: boolean;
  /** Lleva fuera de las diez pantallas: se ve atenuada y no responde. */
  inerte?: boolean;
  /** Título en onSurfaceVariant, para la fila ya completada de M08. */
  atenuado?: boolean;
  /** `superficie`: fondo gris, como las filas de M06, M09 y M10. */
  variante?: 'tarjeta' | 'superficie';
};

/** Fila de lista · § 4.12. */
export default function ListRow({
  titulo,
  ctx,
  icono,
  delante,
  trasera,
  onPress,
  compacta,
  inerte,
  atenuado,
  variante = 'tarjeta',
}: ListRowProps) {
  const pulsable = Boolean(onPress) && !inerte;

  const textos = (
    <>
      <Text
        style={[
          type.titleSmall,
          { color: atenuado ? colors.onSurfaceVariant : colors.onSurface },
        ]}
      >
        {titulo}
      </Text>
      {ctx && <Text style={[type.bodySmall, estilos.ctx]}>{ctx}</Text>}
    </>
  );

  return (
    <View
      style={[
        estilos.fila,
        variante === 'superficie' && estilos.superficie,
        compacta && estilos.compacta,
        inerte && estilos.inerte,
      ]}
    >
      {/* La casilla o el botón de la trasera quedan FUERA del pulsable de la
          fila: un control dentro de otro no es válido y en web produce un
          <button> anidado. */}
      {delante ??
        (icono && (
          <Icon nombre={icono} size={24} color={colors.onSurfaceVariant} />
        ))}

      {pulsable ? (
        <Pressable
          onPress={onPress}
          accessibilityRole="button"
          style={({ pressed }) => [
            estilos.texto,
            pressed && estilos.pulsada,
          ]}
        >
          {textos}
        </Pressable>
      ) : (
        <View style={estilos.texto}>{textos}</View>
      )}

      {trasera}
    </View>
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
