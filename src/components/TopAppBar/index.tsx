import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import Icon from '@/src/components/Icon';
import { colors, frame, sp, type } from '@/src/theme';

export type VarianteBarra = 'titulo' | 'atras' | 'paso';

type TopAppBarProps = {
  variante: VarianteBarra;
  titulo: string;
  /** Debajo del título, separación 2. */
  subtitulo?: string;
  onBack?: () => void;
  /** Primer paso del flujo: sin flecha y con los iconos de buscar y cuenta. */
  sinAtras?: boolean;
};

/**
 * Barra superior · § 4.2. Alto 72, sin sombra.
 * Los iconos `search` y `account_circle` quedan inertes: sus pantallas no
 * entran en las diez.
 */
export default function TopAppBar({
  variante,
  titulo,
  subtitulo,
  onBack,
  sinAtras,
}: TopAppBarProps) {
  const conAtras = variante !== 'titulo' && !sinAtras;
  // Según las maquetas: `titulo` centra y no lleva iconos (M08, M09, M10);
  // `paso` y `atras` alinean a la izquierda y llevan los dos iconos cuando no
  // hay flecha (M02). La § 4.2 describe otro reparto; manda la maqueta.
  const centrado = variante === 'titulo';
  const conIconos = variante !== 'titulo' && !conAtras;

  return (
    <View
      style={[estilos.barra, variante === 'titulo' && estilos.conBorde]}
    >
      {conAtras && (
        <Pressable
          onPress={onBack ?? (() => router.back())}
          accessibilityRole="button"
          accessibilityLabel="Atrás"
          style={estilos.atras}
        >
          <Icon nombre="arrow_back" size={24} color={colors.onSurface} />
        </Pressable>
      )}

      <View style={[estilos.textos, centrado && estilos.centrado]}>
        <Text style={[type.titleLarge, estilos.titulo]}>
          {titulo}
        </Text>
        {subtitulo && (
          <Text style={[type.bodySmall, estilos.subtitulo]}>{subtitulo}</Text>
        )}
      </View>

      {conIconos && (
        <View
          style={estilos.acciones}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        >
          {/* Inertes: buscador y cuenta no entran en las diez pantallas */}
          <Icon nombre="search" size={24} color={colors.onSurface} />
          <Icon nombre="account_circle" size={24} color={colors.onSurface} />
        </View>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  barra: {
    flexDirection: 'row',
    alignItems: 'center',
    height: frame.appBar,
    paddingHorizontal: sp[4],
    backgroundColor: colors.surfaceContainerLowest,
  },
  conBorde: {
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
  },
  atras: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textos: {
    flex: 1,
    gap: 2,
  },
  centrado: {
    alignItems: 'center',
  },
  titulo: {
    color: colors.onSurface,
  },
  subtitulo: {
    color: colors.onSurfaceVariant,
  },
  acciones: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp[4],
  },
});
