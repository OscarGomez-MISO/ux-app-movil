import { Pressable, StyleSheet, Text, View } from 'react-native';

import Icon, { type IconName } from '@/src/components/Icon';
import { colors, radius, sp, type } from '@/src/theme';

type RadioOptionProps = {
  titulo: string;
  desc: string;
  icono: IconName;
  elegida: boolean;
  onPress: () => void;
};

/** Opcion exclusiva para elegir un disparador en el flujo de creacion. */
export default function RadioOption({
  titulo,
  desc,
  icono,
  elegida,
  onPress,
}: RadioOptionProps) {
  const tinta = elegida ? colors.onPrimaryContainer : colors.onSurface;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ checked: elegida }}
      accessibilityLabel={`${titulo}. ${desc}`}
      style={({ pressed }) => [
        estilos.base,
        elegida ? estilos.elegida : estilos.normal,
        pressed && estilos.pulsada,
      ]}
    >
      <Icon
        nombre={icono}
        size={26}
        color={elegida ? colors.primary : colors.secondary}
      />
      <View style={estilos.textos}>
        <Text style={[type.titleMedium, { color: tinta }]}>{titulo}</Text>
        <Text
          style={[
            type.bodySmall,
            { color: elegida ? colors.onPrimaryContainer : colors.onSurfaceVariant },
          ]}
        >
          {desc}
        </Text>
      </View>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  base: {
    minHeight: 80,
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp[4],
    paddingHorizontal: sp[4],
    paddingVertical: sp[2],
    borderRadius: radius.xl,
    borderWidth: 1,
  },
  normal: {
    backgroundColor: colors.surfaceContainerLowest,
    borderColor: colors.outlineVariant,
  },
  elegida: {
    backgroundColor: colors.primaryContainer,
    borderColor: colors.primaryContainer,
  },
  pulsada: {
    opacity: 0.84,
    transform: [{ scale: 0.99 }],
  },
  textos: {
    flex: 1,
    gap: 2,
  },
});
