import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import Icon from '@/src/components/Icon';
import { colors, frame, radius, sp, type } from '@/src/theme';

type FabProps = {
  children: ReactNode;
  onPress: () => void;
};

/** Boton flotante extendido para iniciar el flujo de creacion. */
export default function Fab({ children, onPress }: FabProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={typeof children === 'string' ? children : undefined}
      style={({ pressed }) => [estilos.base, pressed && estilos.pulsado]}
    >
      <View style={estilos.contenido}>
        <Icon nombre="add" size={24} color={colors.onPrimary} />
        <Text style={[type.labelLarge, estilos.texto]}>{children}</Text>
      </View>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  base: {
    position: 'absolute',
    right: sp[4],
    bottom: frame.bottomNav + sp[4],
    height: frame.botonPrincipal,
    paddingHorizontal: sp[5],
    borderRadius: radius.lg,
    justifyContent: 'center',
    backgroundColor: colors.primary,
    elevation: 3,
    shadowColor: colors.scrim,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
  },
  contenido: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp[3],
  },
  texto: {
    color: colors.onPrimary,
  },
  pulsado: {
    elevation: 1,
    transform: [{ scale: 0.97 }],
  },
});
