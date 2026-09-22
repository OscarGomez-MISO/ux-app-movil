import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import Icon, { type IconName } from '@/src/components/Icon';
import { rutaDe } from '@/src/navigation/rutas';
import { pestanas } from '@/src/data/textos';
import { colors, frame, radius, sp, type } from '@/src/theme';
import useBottomNavHeight from '@/src/hooks/useBottomNavHeight';

type Pestana = { id: string; icono: IconName; ruta: string };

/**
 * Barra inferior · § 4.3. No es un TabNavigator: es un componente visual que
 * se dibuja al pie. Las cinco pestañas navegan de verdad; la activa no.
 *
 * M07 no la lleva: cuando la alarma suena no hay navegación, hay decisión.
 */
export default function BottomNav({ activa }: { activa: string }) {
  const alto = useBottomNavHeight();

  return (
    <View
      style={[
        estilos.barra,
        { height: alto, paddingBottom: alto - frame.bottomNav },
      ]}
    >
      {(pestanas as Pestana[]).map((pestana) => {
        const seleccionada = pestana.id === activa;
        const tinta = seleccionada
          ? colors.onSecondaryContainer
          : colors.onSurfaceVariant;

        return (
          <Pressable
            key={pestana.id}
            onPress={
              seleccionada
                ? undefined
                : () => router.navigate(rutaDe(pestana.ruta))
            }
            disabled={seleccionada}
            accessibilityRole="tab"
            accessibilityState={{ selected: seleccionada }}
            style={estilos.pestana}
          >
            <View style={[estilos.capsula, seleccionada && estilos.activa]}>
              <Icon nombre={pestana.icono} size={24} color={tinta} />
            </View>
            <Text style={[type.labelMedium, { color: tinta }]}>
              {pestana.id}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const estilos = StyleSheet.create({
  barra: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    height: frame.bottomNav,
    paddingTop: sp[3],
    backgroundColor: colors.surfaceContainer,
    borderTopWidth: 1,
    borderTopColor: colors.outlineVariant,
  },
  pestana: {
    flex: 1,
    alignItems: 'center',
    gap: sp[1],
  },
  capsula: {
    width: 64,
    height: 32,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activa: {
    backgroundColor: colors.secondaryContainer,
  },
});
