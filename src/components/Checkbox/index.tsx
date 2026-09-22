import { Pressable, StyleSheet, Text, View } from 'react-native';

import Icon from '@/src/components/Icon';
import { colors, radius, sp, type } from '@/src/theme';

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** Texto visible al lado de la casilla. */
  label?: string;
  /** Nombre accesible cuando la casilla va sin texto, dentro de una fila. */
  accessibilityLabel?: string;
};

/** Casilla · § 4.13. Área tocable de 48 × 48 con hitSlop. */
export default function Checkbox({
  checked,
  onChange,
  label,
  accessibilityLabel,
}: CheckboxProps) {
  return (
    <Pressable
      onPress={() => onChange(!checked)}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      accessibilityLabel={accessibilityLabel ?? label}
      hitSlop={14}
      style={estilos.area}
    >
      <View style={[estilos.cuadro, checked && estilos.marcado]}>
        {checked && <Icon nombre="check" size={16} color={colors.onPrimary} />}
      </View>
      {label && <Text style={[type.bodyMedium, estilos.texto]}>{label}</Text>}
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  area: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp[3],
  },
  cuadro: {
    width: 20,
    height: 20,
    borderRadius: radius.xs,
    borderWidth: 2,
    borderColor: colors.outline,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marcado: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  texto: {
    color: colors.onSurface,
  },
});
