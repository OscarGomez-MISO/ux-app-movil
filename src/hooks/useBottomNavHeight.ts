import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { frame } from '@/src/theme';

/** Alto visible de la barra de la app más la navegación del sistema. */
export default function useBottomNavHeight() {
  const insets = useSafeAreaInsets();

  return frame.bottomNav + insets.bottom;
}
