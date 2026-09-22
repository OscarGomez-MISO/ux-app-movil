import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, frame, radius, sp, type } from '@/src/theme';

type ChipProps = {
  children: string;
  activo?: boolean;
  onPress?: () => void;
};

/** Chip seleccionable · § 4.15. La pantalla decide qué cambia al pulsarlo. */
export default function Chip({ children, activo = false, onPress }: ChipProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: activo }}
      style={[estilos.chip, activo ? estilos.activo : estilos.normal]}
    >
      <Text
        style={[
          type.labelMedium,
          { color: activo ? colors.onSecondaryContainer : colors.onSurfaceVariant },
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  chip: {
    height: frame.chip,
    paddingHorizontal: sp[4],
    borderRadius: radius.lg,
    justifyContent: 'center',
    // Borde transparente en el seleccionado: no cambia de tamaño al activarse
    borderWidth: 1,
    borderColor: 'transparent',
  },
  normal: {
    borderColor: colors.outline,
  },
  activo: {
    backgroundColor: colors.secondaryContainer,
  },
});
