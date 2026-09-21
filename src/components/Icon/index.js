import Svg, { Path } from 'react-native-svg';
import { paths } from './paths';
import colors from '../../theme/colors';

/**
 * Icono de Material Symbols Outlined, 24 dp, peso 400.
 * Tamaños del sistema: 16 ayuda · 18 botón · 20 campo · 24 lista y navegación ·
 * 56 confirmaciones a pantalla completa.
 *
 * Requiere:  npx expo install react-native-svg
 */
export default function Icon({ nombre, size = 24, color = colors.onSurface }) {
  const d = paths[nombre];
  if (!d) {
    if (__DEV__) console.warn(`Icon: no existe "${nombre}"`);
    return null;
  }
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960">
      <Path d={d} fill={color} />
    </Svg>
  );
}
