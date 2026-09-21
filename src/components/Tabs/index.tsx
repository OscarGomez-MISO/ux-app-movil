import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, sp, type } from '@/src/theme';

type TabsProps = {
  opciones: string[];
  activa: string;
  onChange: (opcion: string) => void;
};

/** Pestañas de contenido · § 4.18. Sólo en M09. */
export default function Tabs({ opciones, activa, onChange }: TabsProps) {
  return (
    <View style={estilos.contenedor}>
      <View style={estilos.fila}>
        {opciones.map((opcion) => {
          const seleccionada = opcion === activa;
          return (
            <Pressable
              key={opcion}
              onPress={() => onChange(opcion)}
              accessibilityRole="tab"
              accessibilityState={{ selected: seleccionada }}
              style={estilos.pestana}
            >
              <Text
                style={[
                  type.titleSmall,
                  {
                    color: seleccionada
                      ? colors.primary
                      : colors.onSurfaceVariant,
                  },
                ]}
              >
                {opcion}
              </Text>
              {seleccionada && <View style={estilos.subrayado} />}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
  },
  fila: {
    flexDirection: 'row',
    height: 44,
  },
  pestana: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: sp[2],
  },
  subrayado: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: colors.primary,
  },
});
