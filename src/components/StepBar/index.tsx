import { StyleSheet, Text, View } from 'react-native';

import { colors, sp, type } from '@/src/theme';

type StepBarProps = {
  actual: number;
  total: number;
};

/** Indicador compacto del progreso del flujo de creación. */
export default function StepBar({ actual, total }: StepBarProps) {
  return (
    <View style={estilos.base}>
      <Text style={[type.bodySmall, estilos.texto]}>
        Paso {actual} de {total}
      </Text>
      <View
        style={estilos.segmentos}
        accessibilityRole="progressbar"
        accessibilityValue={{ min: 1, max: total, now: actual }}
      >
        {Array.from({ length: total }, (_, indice) => (
          <View
            key={indice}
            style={[
              estilos.segmento,
              indice < actual ? estilos.completo : estilos.pendiente,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    paddingHorizontal: sp[4],
    gap: sp[4],
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
    backgroundColor: colors.surfaceContainerLowest,
  },
  texto: {
    color: colors.onSurfaceVariant,
  },
  segmentos: {
    flex: 1,
    flexDirection: 'row',
    gap: sp[1],
  },
  segmento: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
  completo: {
    backgroundColor: colors.primary,
  },
  pendiente: {
    backgroundColor: colors.surfaceContainerHighest,
  },
});
