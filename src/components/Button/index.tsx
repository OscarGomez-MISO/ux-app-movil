import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import Icon, { type IconName } from '@/src/components/Icon';
import { colors, frame, radius, sp, type } from '@/src/theme';

export type ButtonTipo = 'primario' | 'secundario' | 'terciario' | 'destructivo';

type ButtonProps = {
  tipo: ButtonTipo;
  children: ReactNode;
  onPress?: () => void;
  icono?: IconName;
  /** Mantiene el texto centrado y fija el icono al inicio del botón. */
  iconoAlInicio?: boolean;
  /** `completo` para los botones de pie: ancho completo y alto 56. */
  ancho?: 'completo';
  /** Inerte: lleva fuera de las diez pantallas. Se ve, no responde. */
  inerte?: boolean;
  disabled?: boolean;
};

/** Botón del sistema · § 4.10. */
export default function Button({
  tipo,
  children,
  onPress,
  icono,
  iconoAlInicio,
  ancho,
  inerte,
  disabled,
}: ButtonProps) {
  const principal = ancho === 'completo';
  const apagado = disabled || inerte;
  const colorTexto = tono[tipo].texto;

  return (
    <Pressable
      onPress={apagado ? undefined : onPress}
      disabled={apagado}
      accessibilityRole="button"
      accessibilityState={{ disabled: apagado }}
      style={({ pressed }) => [
        estilos.base,
        tono[tipo].caja,
        principal && estilos.completo,
        apagado && estilos.apagado,
        pressed && !apagado && estilos.pulsado,
      ]}
    >
      <View style={[estilos.contenido, iconoAlInicio && estilos.contenidoCompleto]}>
        {icono && (
          <View style={iconoAlInicio && estilos.iconoInicio}>
            <Icon nombre={icono} size={18} color={colorTexto} />
          </View>
        )}
        <Text style={[type.labelLarge, { color: colorTexto }]}>{children}</Text>
      </View>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  base: {
    height: frame.boton,
    borderRadius: radius.xxl - 4, // 24
    paddingHorizontal: sp[6],
    justifyContent: 'center',
    alignItems: 'center',
  },
  completo: {
    height: frame.botonPrincipal,
    borderRadius: radius.xxl,
    alignSelf: 'stretch',
  },
  contenido: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp[2],
  },
  contenidoCompleto: {
    width: '100%',
    justifyContent: 'center',
  },
  iconoInicio: {
    position: 'absolute',
    left: -6,
  },
  pulsado: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  apagado: {
    opacity: 0.38,
  },
});

const tono: Record<ButtonTipo, { caja: object; texto: string }> = {
  primario: {
    caja: { backgroundColor: colors.primary },
    texto: colors.onPrimary,
  },
  secundario: {
    caja: { borderWidth: 1, borderColor: colors.outline },
    texto: colors.primary,
  },
  terciario: {
    caja: {},
    texto: colors.primary,
  },
  destructivo: {
    caja: { borderWidth: 1, borderColor: colors.error },
    texto: colors.error,
  },
};
