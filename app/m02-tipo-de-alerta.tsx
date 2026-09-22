import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNav from '@/src/components/BottomNav';
import Icon, { type IconName } from '@/src/components/Icon';
import RadioOption from '@/src/components/RadioOption';
import TopAppBar from '@/src/components/TopAppBar';
import {
  continuar,
  disparadores,
  entradilla,
  titulo,
} from '@/src/data/disparadores';
import { subtituloPaso, tituloFlujo } from '@/src/data/textos';
import { rutaConParametros } from '@/src/navigation/rutas';
import useBottomNavHeight from '@/src/hooks/useBottomNavHeight';
import { colors, frame, radius, sp, type } from '@/src/theme';

type Disparador = {
  valor: string;
  desc: string;
  icono: IconName;
};

/** M02 · Tipo de alerta. */
export default function M02TipoDeAlerta() {
  const opciones = disparadores as Disparador[];
  const [disparador, setDisparador] = useState(opciones[0].valor);
  const altoBarra = useBottomNavHeight();

  const continuarFlujo = () =>
    router.navigate(
      rutaConParametros('M03Contenido', { disparador }),
    );

  return (
    <SafeAreaView style={estilos.pantalla} edges={['top']}>
      <TopAppBar
        variante="paso"
        sinAtras
        titulo={tituloFlujo}
        subtitulo={subtituloPaso(1)}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          estilos.contenido,
          { paddingBottom: altoBarra + sp[6] },
        ]}
      >
        <Text style={[type.titleLarge, estilos.titulo]}>{titulo}</Text>
        <Text style={[type.bodySmall, estilos.entradilla]}>{entradilla}</Text>

        <View style={estilos.opciones} accessibilityRole="radiogroup">
          {opciones.map((opcion) => (
            <RadioOption
              key={opcion.valor}
              titulo={opcion.valor}
              desc={opcion.desc}
              icono={opcion.icono}
              elegida={opcion.valor === disparador}
              onPress={() => setDisparador(opcion.valor)}
            />
          ))}
        </View>

        <Pressable
          onPress={continuarFlujo}
          accessibilityRole="button"
          style={({ pressed }) => [
            estilos.continuar,
            pressed && estilos.continuarPulsado,
          ]}
        >
          <View style={estilos.flecha}>
            <Icon nombre="arrow_back" size={22} color={colors.onPrimaryContainer} />
          </View>
          <Text style={[type.labelLarge, estilos.continuarTexto]}>{continuar}</Text>
          <View style={estilos.equilibrio} />
        </Pressable>
      </ScrollView>

      <BottomNav activa="Crear" />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  contenido: {
    paddingHorizontal: sp[6],
    paddingTop: sp[5],
  },
  titulo: {
    color: colors.onSurface,
  },
  entradilla: {
    marginTop: sp[1],
    color: colors.onSurfaceVariant,
  },
  opciones: {
    gap: sp[2],
    marginTop: sp[6] + sp[1],
  },
  continuar: {
    height: frame.boton,
    marginTop: sp[12] + sp[4],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sp[4],
    borderRadius: radius.xxl - 4,
    backgroundColor: colors.secondaryContainer,
  },
  flecha: {
    width: 24,
    transform: [{ rotate: '180deg' }],
  },
  equilibrio: {
    width: 24,
  },
  continuarTexto: {
    color: colors.onPrimaryContainer,
  },
  continuarPulsado: {
    opacity: 0.84,
    transform: [{ scale: 0.98 }],
  },
});
