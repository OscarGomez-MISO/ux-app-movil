import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { colors } from '@/src/theme';

export default function RootLayout() {
  // En React Native no existe fontWeight con fuentes propias: cada peso es una
  // familia distinta. Ver § 3.2 de ESPECIFICACION_MOVIL.md.
  const [cargada] = useFonts({
    'Plex-Regular': require('../assets/fonts/IBMPlexSans-Regular.ttf'),
    'Plex-Medium': require('../assets/fonts/IBMPlexSans-Medium.ttf'),
    'Plex-SemiBold': require('../assets/fonts/IBMPlexSans-SemiBold.ttf'),
    'Plex-Bold': require('../assets/fonts/IBMPlexSans-Bold.ttf'),
  });

  if (!cargada) return null;

  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: colors.surface },
          headerShown: false,
        }}
      />
    </>
  );
}
