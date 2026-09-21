import { StyleSheet, Text, View } from 'react-native';

import { Screen } from '@/src/components/Screen';
import { colors, sp, type, versales } from '@/src/theme';

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>PROYECTO BASE</Text>
        <Text style={styles.title}>UX Alarma</Text>
        <Text style={styles.description}>
          La estructura esta lista para comenzar a implementar las pantallas de los mockups.
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: sp[4],
  },
  eyebrow: {
    ...type.labelSmall,
    ...versales,
    color: colors.primary,
  },
  title: {
    ...type.displaySmall,
    color: colors.onSurface,
  },
  description: {
    ...type.bodyLarge,
    color: colors.onSurfaceVariant,
  },
});
