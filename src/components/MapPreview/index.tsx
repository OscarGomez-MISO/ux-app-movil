import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';

import Icon from '@/src/components/Icon';
import { colors, radius, sp, type } from '@/src/theme';

type MapPreviewProps = {
  lugar: string;
};

const callesHorizontales = Array.from({ length: 10 }, (_, index) => index * 24 - 18);
const callesVerticales = Array.from({ length: 12 }, (_, index) => index * 32 - 8);

/** Mapa ilustrado del prototipo: no consulta servicios ni ubicación real. */
export default function MapPreview({ lugar }: MapPreviewProps) {
  return (
    <View style={estilos.mapa} accessibilityLabel={lugar} accessibilityRole="image">
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 344 180"
        preserveAspectRatio="xMidYMid slice"
        style={StyleSheet.absoluteFill}
      >
        {callesHorizontales.map((y) => (
          <Line
            key={`h-${y}`}
            x1={-30}
            y1={y}
            x2={374}
            y2={y - 86}
            stroke={colors.outlineVariant}
            strokeWidth={1}
            opacity={0.38}
          />
        ))}
        {callesVerticales.map((x) => (
          <Line
            key={`v-${x}`}
            x1={x}
            y1={-30}
            x2={x + 50}
            y2={210}
            stroke={colors.outlineVariant}
            strokeWidth={1}
            opacity={0.38}
          />
        ))}
        <Circle cx={172} cy={82} r={60} fill={colors.primary} opacity={0.16} />
      </Svg>

      <View style={estilos.alfiler}>
        <Icon nombre="location_on" size={42} color={colors.primary} />
      </View>
      <View style={estilos.etiqueta}>
        <Text style={[type.labelMedium, estilos.etiquetaTexto]}>{lugar}</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  mapa: {
    height: 180,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.lg + 2,
    backgroundColor: colors.surfaceContainerLow,
  },
  alfiler: {
    marginTop: -sp[4],
  },
  etiqueta: {
    position: 'absolute',
    bottom: sp[4] + sp[1],
    paddingHorizontal: sp[2],
    paddingVertical: sp[1],
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceContainerLowest,
  },
  etiquetaTexto: {
    color: colors.onSurface,
  },
});
