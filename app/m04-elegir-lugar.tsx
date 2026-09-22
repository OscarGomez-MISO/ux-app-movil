import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNav from '@/src/components/BottomNav';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import Icon, { type IconName } from '@/src/components/Icon';
import MapPreview from '@/src/components/MapPreview';
import TextField from '@/src/components/TextField';
import TopAppBar from '@/src/components/TopAppBar';
import { LUGAR } from '@/src/data/disparadores';
import {
  botones,
  buscar,
  etiquetaMapa,
  lugares,
  titulo,
  usoUbicacion,
} from '@/src/data/lugares';
import { subtituloPaso, tituloFlujo } from '@/src/data/textos';
import { rutaConParametros } from '@/src/navigation/rutas';
import useBottomNavHeight from '@/src/hooks/useBottomNavHeight';
import { colors, frame, radius, sp, type } from '@/src/theme';

type Lugar = {
  valor: string;
  icono: IconName;
  texto: string;
  inerte?: boolean;
};

/** M04 · Selección del lugar que activa la alerta. */
export default function M04ElegirLugar() {
  const params = useLocalSearchParams<{ disparador?: string }>();
  const disparador = params.disparador ?? LUGAR;
  const opciones = lugares as Lugar[];
  const [busqueda, setBusqueda] = useState('');
  const [lugar, setLugar] = useState(opciones[0].valor);
  const [etiqueta, setEtiqueta] = useState(etiquetaMapa);
  const altoBarra = useBottomNavHeight();

  const elegirLugar = (opcion: Lugar) => {
    if (opcion.inerte) return;
    setLugar(opcion.valor);
    setEtiqueta(opcion.valor);
  };

  const continuarFlujo = () =>
    router.navigate(rutaConParametros('M05Reglas', { disparador, lugar }));

  return (
    <SafeAreaView style={estilos.pantalla} edges={['top']}>
      <TopAppBar
        variante="paso"
        sinAtras
        titulo={tituloFlujo}
        subtitulo={subtituloPaso(3)}
      />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          estilos.contenido,
          { paddingBottom: altoBarra + sp[6] },
        ]}
      >
        <Text style={[type.titleLarge, estilos.titulo]}>{titulo}</Text>

        <View style={estilos.buscador}>
          <TextField
            label={buscar}
            value={busqueda}
            onChangeText={setBusqueda}
            icono="search"
          />
        </View>

        <View style={estilos.mapa}>
          <MapPreview lugar={etiqueta} />
        </View>

        <Card tipo="tarjeta" style={estilos.lista}>
          <View accessibilityRole="radiogroup">
            {opciones.map((opcion) => {
              const seleccionada = opcion.valor === lugar && !opcion.inerte;
              const tinta = opcion.inerte ? colors.primary : colors.onSurface;

              return (
                <Pressable
                  key={opcion.texto}
                  onPress={opcion.inerte ? undefined : () => elegirLugar(opcion)}
                  disabled={opcion.inerte}
                  accessibilityRole={opcion.inerte ? 'button' : 'radio'}
                  accessibilityState={
                    opcion.inerte
                      ? { disabled: true }
                      : { checked: seleccionada }
                  }
                  style={({ pressed }) => [
                    estilos.fila,
                    pressed && estilos.filaPulsada,
                  ]}
                >
                  <Icon nombre={opcion.icono} size={22} color={opcion.inerte ? colors.primary : colors.onSurfaceVariant} />
                  <Text numberOfLines={1} style={[type.labelMedium, estilos.textoFila, { color: tinta }]}>
                    {opcion.texto}
                  </Text>
                  {!opcion.inerte && (
                    <Icon
                      nombre={seleccionada ? 'radio_button_checked' : 'radio_button_unchecked'}
                      size={24}
                      color={seleccionada ? colors.primary : colors.outline}
                    />
                  )}
                </Pressable>
              );
            })}
          </View>
        </Card>

        <Text style={[type.bodySmall, estilos.ayuda]}>{usoUbicacion}</Text>

        <View style={estilos.acciones}>
          <View style={estilos.atras}>
            <Button
              tipo="secundario"
              icono="arrow_back"
              iconoAlInicio
              onPress={() => router.back()}
            >
              {botones.atras}
            </Button>
          </View>
          <View style={estilos.continuar}>
            <Button
              tipo="tonal"
              icono="arrow_forward"
              iconoAlInicio
              onPress={continuarFlujo}
            >
              {botones.continuar}
            </Button>
          </View>
        </View>
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
  buscador: {
    marginTop: sp[5],
  },
  mapa: {
    marginTop: sp[1],
  },
  lista: {
    height: 168,
    marginTop: sp[6],
    paddingHorizontal: sp[3],
    paddingVertical: sp[3],
    borderRadius: radius.lg + 2,
  },
  fila: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp[3],
    paddingHorizontal: sp[2],
    borderRadius: radius.sm,
  },
  filaPulsada: {
    backgroundColor: colors.surfaceContainerLow,
  },
  textoFila: {
    flex: 1,
  },
  ayuda: {
    minHeight: 32,
    marginTop: sp[2],
    color: colors.onSurfaceVariant,
  },
  acciones: {
    height: frame.boton,
    marginTop: sp[8] + sp[1],
    flexDirection: 'row',
    gap: sp[3],
  },
  atras: {
    width: 104,
  },
  continuar: {
    flex: 1,
  },
});
