import { useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';

import Icon from '@/src/components/Icon';
import { colors, radius, sp } from '@/src/theme';

type SwitchProps = {
  on: boolean;
  onChange: (on: boolean) => void;
  label?: string;
  /** `check` conserva la interacción con el aspecto compacto de M05. */
  variante?: 'switch' | 'check';
};

/**
 * Interruptor · § 4.14. Se dibuja: el Switch de React Native trae el aspecto
 * del sistema y rompe el Design System.
 */
export default function Switch({
  on,
  onChange,
  label,
  variante = 'switch',
}: SwitchProps) {
  const recorrido = useRef(new Animated.Value(on ? 1 : 0)).current;

  useEffect(() => {
    if (variante === 'check') return;
    Animated.timing(recorrido, {
      toValue: on ? 1 : 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [on, recorrido, variante]);

  // Pista 52 con borde 2: el pulgar de 24 recorre de 2 a 22 dentro del borde.
  const desplazamiento = recorrido.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22],
  });

  if (variante === 'check') {
    return (
      <Pressable
        onPress={() => onChange(!on)}
        accessibilityRole="switch"
        accessibilityState={{ checked: on }}
        accessibilityLabel={label}
        hitSlop={sp[2]}
        style={estilos.check}
      >
        <Icon
          nombre={on ? 'check_circle' : 'radio_button_unchecked'}
          size={22}
          color={on ? colors.primary : colors.outline}
        />
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={() => onChange(!on)}
      accessibilityRole="switch"
      accessibilityState={{ checked: on }}
      accessibilityLabel={label}
      hitSlop={sp[2]}
      style={[estilos.pista, on ? estilos.encendido : estilos.apagado]}
    >
      <Animated.View
        style={[
          estilos.pulgar,
          { backgroundColor: on ? colors.onPrimary : colors.outline },
          { transform: [{ translateX: desplazamiento }] },
        ]}
      />
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  pista: {
    width: 52,
    height: 32,
    borderRadius: radius.lg,
    justifyContent: 'center',
  },
  apagado: {
    backgroundColor: colors.surfaceContainerHighest,
    borderWidth: 2,
    borderColor: colors.outline,
  },
  encendido: {
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  pulgar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  check: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
