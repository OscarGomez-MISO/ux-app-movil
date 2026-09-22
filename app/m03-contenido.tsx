import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNav from '@/src/components/BottomNav';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import Dropdown, { type DropdownOption } from '@/src/components/Dropdown';
import Icon, { type IconName } from '@/src/components/Icon';
import TextField from '@/src/components/TextField';
import TopAppBar from '@/src/components/TopAppBar';
import {
  botones,
  categorias,
  ejemplo,
  etiquetas,
  iconosCampo,
  titulo,
} from '@/src/data/contenido';
import { disparadores, LUGAR } from '@/src/data/disparadores';
import { subtituloPaso, tituloFlujo } from '@/src/data/textos';
import { rutaConParametros } from '@/src/navigation/rutas';
import useBottomNavHeight from '@/src/hooks/useBottomNavHeight';
import { colors, frame, radius, sp, type } from '@/src/theme';

/** M03 · Contenido de la alerta. */
export default function M03Contenido() {
  const params = useLocalSearchParams<{ disparador?: string }>();
  const disparador = params.disparador ?? disparadores[0].valor;
  const [tituloAlerta, setTituloAlerta] = useState(ejemplo.titulo);
  const [categoria, setCategoria] = useState(ejemplo.categoria);
  const [nota, setNota] = useState(ejemplo.nota);
  const altoBarra = useBottomNavHeight();

  const continuarFlujo = () => {
    const destino = disparador === LUGAR ? 'M04ElegirLugar' : 'M05Reglas';
    router.navigate(rutaConParametros(destino, { disparador }));
  };

  return (
    <SafeAreaView style={estilos.pantalla} edges={['top']}>
      <TopAppBar
        variante="paso"
        sinAtras
        titulo={tituloFlujo}
        subtitulo={subtituloPaso(2)}
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

        <View style={estilos.campoTitulo}>
          <TextField
            label={etiquetas.titulo}
            value={tituloAlerta}
            onChangeText={setTituloAlerta}
            icono={iconosCampo.titulo as IconName}
          />
        </View>

        <View style={estilos.campoCategoria}>
          <Dropdown
            label={etiquetas.categoria}
            value={categoria}
            opciones={categorias as DropdownOption[]}
            onChange={setCategoria}
          />
        </View>

        <View style={estilos.campoNota}>
          <TextField
            label={etiquetas.nota}
            value={nota}
            onChangeText={setNota}
            icono={iconosCampo.nota as IconName}
            multilinea
          />
        </View>

        <Card tipo="superficie" style={estilos.vistaPrevia}>
          <Icon nombre="notifications" size={24} color={colors.primary} />
          <View style={estilos.vistaPreviaTextos}>
            <Text numberOfLines={1} style={[type.titleMedium, estilos.tituloVistaPrevia]}>
              {tituloAlerta}
            </Text>
            <Text numberOfLines={1} style={[type.bodySmall, estilos.metaVistaPrevia]}>
              {categoria} · {disparador}
            </Text>
          </View>
        </Card>

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
              tipo="primario"
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
  campoTitulo: {
    marginTop: sp[5],
  },
  campoCategoria: {
    marginTop: sp[8],
    zIndex: 2,
  },
  campoNota: {
    marginTop: sp[6] + sp[1],
  },
  vistaPrevia: {
    height: 92,
    marginTop: 92,
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp[4],
    paddingHorizontal: sp[5],
    borderRadius: radius.lg + 2,
  },
  vistaPreviaTextos: {
    flex: 1,
  },
  tituloVistaPrevia: {
    color: colors.onSurface,
  },
  metaVistaPrevia: {
    color: colors.onSurfaceVariant,
  },
  acciones: {
    height: frame.boton,
    marginTop: sp[12] + sp[4],
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
