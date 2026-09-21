import { Text } from 'react-native';

import { Screen } from '@/src/components/Screen';
import { type } from '@/src/theme';

/** M08 · Pendientes · § 6.8. Se implementa en feature/m08-pendientes. */
export default function M08Pendientes() {
  return (
    <Screen>
      <Text style={type.titleMedium}>M08 · Pendientes</Text>
    </Screen>
  );
}
