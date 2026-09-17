import { StyleSheet, Text, View } from 'react-native';

import { Screen } from '@/src/components/Screen';
import { colors, spacing } from '@/src/theme';

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
    gap: spacing.md,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '700',
  },
  title: {
    color: colors.text,
    fontSize: 36,
    fontWeight: '700',
  },
  description: {
    color: colors.textMuted,
    fontSize: 17,
    lineHeight: 25,
  },
});
