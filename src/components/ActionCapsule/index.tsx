import { Pressable, StyleSheet, Text, type ViewStyle } from 'react-native';

import Icon, { type IconName } from '@/src/components/Icon';
import { colors, frame, radius, sp, type } from '@/src/theme';

export type Jerarquia =
  | 'principal'
  | 'secundaria'
  | 'terciaria'
  | 'destructiva'
  | 'discreta';

type ActionCapsuleProps = {
  jerarquia: Jerarquia;
  icono: IconName;
  children: string;
  onPress: () => void;
};

/**
 * Cápsula de acción · § 4.17. Es el componente propio del proyecto: cada
 * cápsula es una decisión que cierra una alarma.
 *
 * CM-06: ninguna cápsula apaga el aviso sin decidir. No se añade una X ni un
 * «Descartar»: deshace el hallazgo central del proyecto.
 */
export default function ActionCapsule({
  jerarquia,
  icono,
  children,
  onPress,
}: ActionCapsuleProps) {
  const { caja, tinta } = tonos[jerarquia];
  const principal = jerarquia === 'principal';

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        estilos.capsula,
        caja,
        principal && estilos.destacada,
        pressed && estilos.pulsada,
      ]}
    >
      <Icon nombre={icono} size={20} color={tinta} />
      <Text style={[type.labelLarge, { color: tinta }]}>{children}</Text>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  capsula: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp[3],
    alignSelf: 'stretch',
    height: frame.boton,
    paddingHorizontal: sp[5],
    borderRadius: radius.xxl - 4, // 24
  },
  destacada: {
    height: frame.botonPrincipal,
    borderRadius: radius.xxl,
  },
  pulsada: {
    transform: [{ scale: 0.98 }],
  },
});

const tonos: Record<Jerarquia, { caja: ViewStyle; tinta: string }> = {
  principal: {
    caja: { backgroundColor: colors.tertiary },
    tinta: colors.onTertiary,
  },
  secundaria: {
    caja: { backgroundColor: colors.postponedContainer },
    tinta: colors.onPostponedContainer,
  },
  terciaria: {
    caja: { backgroundColor: colors.primaryContainer },
    tinta: colors.onPrimaryContainer,
  },
  destructiva: {
    caja: { borderWidth: 1, borderColor: colors.error },
    tinta: colors.error,
  },
  discreta: {
    caja: {},
    tinta: colors.onSurfaceVariant,
  },
};
