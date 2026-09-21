import { Text } from 'react-native';

import { Screen } from '@/src/components/Screen';
import { type } from '@/src/theme';

/** M07 · Alerta lanzada · § 6.7. Se implementa en feature/m07-alerta-lanzada. */
export default function M07AlertaLanzada() {
  return (
    <Screen>
      <Text style={type.titleMedium}>M07 · Alerta lanzada</Text>
    </Screen>
  );
}
