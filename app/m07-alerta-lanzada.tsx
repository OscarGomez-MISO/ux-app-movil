import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ActionCapsule, { type Jerarquia } from '@/src/components/ActionCapsule';
import Card from '@/src/components/Card';
import Icon, { type IconName } from '@/src/components/Icon';
import StatusChip, { type EstadoChip } from '@/src/components/StatusChip';
import { alertaLanzada, capsulas, reproduciendo } from '@/src/data/alerta';
import { rutaDe } from '@/src/navigation/rutas';
import { colors, sp, type, versales } from '@/src/theme';

type Capsula = {
  jerarquia: Jerarquia;
  icono: IconName;
  texto: string;
  a: string | null;
};

/**
 * M07 · Alerta lanzada · § 6.7. La pantalla del proyecto.
 *
 * CM-06: no hay «Descartar», ni X en la esquina, ni gesto de volver — el gesto
 * se desactiva en app/_layout.tsx. Ninguna acción apaga el aviso sin tomar una
 * decisión, y las cinco dejan rastro.
 */
export default function M07AlertaLanzada() {
  const [reproduce, setReproduce] = useState(false);
  const temporizador = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (temporizador.current) clearTimeout(temporizador.current);
    },
    [],
  );

  const pulsar = (capsula: Capsula) => {
    if (capsula.a) {
      router.navigate(rutaDe(capsula.a));
      return;
    }
    // La única que no navega: vuelve sola a los 2 s. No cierra la alerta.
    setReproduce(true);
    temporizador.current = setTimeout(() => setReproduce(false), 2000);
  };

  return (
    <SafeAreaView style={estilos.pantalla}>
      <View style={estilos.contenido}>
        {/* 56 es el tamaño del sistema para confirmaciones a pantalla completa */}
        <Icon
          nombre="notification_important"
          size={56}
          color={colors.onErrorContainer}
        />
        <Text style={[type.labelSmall, versales, estilos.tinta, estilos.rotuloAlerta]}>
          {alertaLanzada.rotulo}
        </Text>
        <Text style={[type.headlineSmall, estilos.tinta, estilos.titulo]}>
          {alertaLanzada.titulo}
        </Text>

        <Text style={[type.bodyMedium, estilos.tinta, estilos.vence]}>
          {alertaLanzada.vence}
        </Text>
        <View style={estilos.estado}>
          <StatusChip estado={alertaLanzada.estado as EstadoChip} />
        </View>

        <Text style={[type.labelSmall, versales, estilos.tinta, estilos.rotulo]}>
          {alertaLanzada.rotuloAccion}
        </Text>
        <Card tipo="tarjeta" style={estilos.instruccion}>
          <Text style={[type.bodyLarge, estilos.tintaInstruccion]}>
            {alertaLanzada.instruccion}
          </Text>
        </Card>

        <View style={estilos.capsulas}>
          {(capsulas as Capsula[]).map((capsula) => {
            const reproduciendoEsta = reproduce && capsula.a === null;
            return (
              <ActionCapsule
                key={capsula.texto}
                jerarquia={capsula.jerarquia}
                icono={capsula.icono}
                onPress={() => pulsar(capsula)}
              >
                {reproduciendoEsta ? reproduciendo : capsula.texto}
              </ActionCapsule>
            );
          })}
        </View>

        <Text style={[type.bodySmall, estilos.tinta, estilos.cierre]}>
          {alertaLanzada.cierre}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: colors.errorContainer,
  },
  contenido: {
    flex: 1,
    paddingHorizontal: sp[4],
    paddingTop: sp[8],
    paddingBottom: sp[6],
  },
  tinta: {
    color: colors.onErrorContainer,
  },
  titulo: {
    marginTop: sp[1],
  },
  vence: {
    marginTop: sp[12],
  },
  estado: {
    flexDirection: 'row',
    marginTop: sp[3],
  },
  rotulo: {
    marginTop: sp[5],
  },
  rotuloAlerta: {
    marginTop: sp[2],
  },
  instruccion: {
    marginTop: sp[8],
  },
  tintaInstruccion: {
    color: colors.onSurface,
  },
  capsulas: {
    marginTop: 'auto',
    gap: sp[2],
  },
  cierre: {
    marginTop: sp[4],
    textAlign: 'center',
  },
});
