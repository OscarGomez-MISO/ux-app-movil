import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icon, { type IconName } from '@/src/components/Icon';
import { colors, frame, radius, sp, type } from '@/src/theme';

export type DropdownOption = {
  valor: string;
  icono?: IconName;
  desc?: string;
};

type DropdownProps = {
  label: string;
  value: string;
  opciones: DropdownOption[];
  onChange: (value: string) => void;
};

type Posicion = { x: number; y: number; width: number; height: number };

/** Selector que despliega sus opciones sobre el contenido siguiente. */
export default function Dropdown({
  label,
  value,
  opciones,
  onChange,
}: DropdownProps) {
  const ancla = useRef<View>(null);
  const progreso = useRef(new Animated.Value(0)).current;
  const [abierto, setAbierto] = useState(false);
  const [posicion, setPosicion] = useState<Posicion>();

  useEffect(() => {
    if (!abierto) return;
    progreso.setValue(0);
    Animated.timing(progreso, {
      toValue: 1,
      duration: 160,
      useNativeDriver: true,
    }).start();
  }, [abierto, progreso]);

  const abrir = () => {
    ancla.current?.measureInWindow((x, y, width, height) => {
      setPosicion({ x, y, width, height });
      setAbierto(true);
    });
  };

  const elegir = (opcion: DropdownOption) => {
    onChange(opcion.valor);
    setAbierto(false);
  };

  return (
    <View ref={ancla} collapsable={false}>
      <Text style={[type.labelMedium, estilos.label]}>{label}</Text>
      <Pressable
        onPress={abrir}
        accessibilityRole="button"
        accessibilityLabel={label}
        accessibilityState={{ expanded: abierto }}
        style={({ pressed }) => [estilos.campo, pressed && estilos.pulsado]}
      >
        <Text style={[type.bodyMedium, estilos.valor]}>{value}</Text>
        <Icon nombre="keyboard_arrow_down" size={22} color={colors.onSurfaceVariant} />
      </Pressable>

      <Modal visible={abierto} transparent animationType="none" onRequestClose={() => setAbierto(false)}>
        <Pressable style={StyleSheet.absoluteFill} onPress={() => setAbierto(false)} />
        {posicion && (
          <Animated.View
            style={[
              estilos.lista,
              {
                left: posicion.x,
                top: posicion.y + posicion.height + sp[1],
                width: posicion.width,
                opacity: progreso,
                transform: [
                  {
                    translateY: progreso.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-8, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            {opciones.map((opcion) => {
              const elegida = opcion.valor === value;
              return (
                <Pressable
                  key={opcion.valor}
                  onPress={() => elegir(opcion)}
                  accessibilityRole="menuitem"
                  accessibilityState={{ selected: elegida }}
                  style={[estilos.opcion, opcion.desc && estilos.opcionConDesc, elegida && estilos.elegida]}
                >
                  {opcion.icono && (
                    <Icon nombre={opcion.icono} size={20} color={colors.onSurfaceVariant} />
                  )}
                  <View style={estilos.textos}>
                    <Text style={[type.titleSmall, estilos.valor]}>{opcion.valor}</Text>
                    {opcion.desc && (
                      <Text style={[type.bodySmall, estilos.descripcion]}>{opcion.desc}</Text>
                    )}
                  </View>
                  {elegida && <Icon nombre="check" size={18} color={colors.primary} />}
                </Pressable>
              );
            })}
          </Animated.View>
        )}
      </Modal>
    </View>
  );
}

const estilos = StyleSheet.create({
  label: {
    marginBottom: sp[1],
    color: colors.onSurfaceVariant,
  },
  campo: {
    height: frame.campo,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sp[4],
    borderWidth: 1,
    borderColor: colors.surfaceVariant,
    borderRadius: radius.md + 2,
    backgroundColor: colors.surfaceContainerLowest,
  },
  valor: {
    flex: 1,
    color: colors.onSurface,
  },
  pulsado: {
    borderColor: colors.primary,
  },
  lista: {
    position: 'absolute',
    zIndex: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.outlineVariant,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceContainerLowest,
    elevation: 2,
    shadowColor: colors.scrim,
    shadowOpacity: 0.16,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  opcion: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp[3],
    paddingHorizontal: sp[4],
  },
  opcionConDesc: {
    minHeight: 60,
  },
  elegida: {
    backgroundColor: colors.primaryContainer,
  },
  textos: {
    flex: 1,
  },
  descripcion: {
    color: colors.onSurfaceVariant,
  },
});
