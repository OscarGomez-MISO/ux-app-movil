import { Text } from 'react-native';

import { Screen } from '@/src/components/Screen';
import { type } from '@/src/theme';

/** M10 · Ajustes · § 6.10. Se implementa en feature/m10-ajustes. */
export default function M10Ajustes() {
  return (
    <Screen>
      <Text style={type.titleMedium}>M10 · Ajustes</Text>
    </Screen>
  );
}
