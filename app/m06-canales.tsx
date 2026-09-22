import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNav from '@/src/components/BottomNav';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import ListRow from '@/src/components/ListRow';
import Switch from '@/src/components/Switch';
import TopAppBar from '@/src/components/TopAppBar';
import { avisoSilencio, botones, canales, titulo } from '@/src/data/canales';
import { subtituloPaso, tituloFlujo } from '@/src/data/textos';
import type { IconName } from '@/src/components/Icon';
import { rutas } from '@/src/navigation/rutas';
import { colors, frame, sp, type } from '@/src/theme';

type Canal = {
  icono: IconName;
  titulo: string;
  desc: string;
  activo: boolean;
};

/** M06 · Cómo te avisamos · § 6.6. Último paso del flujo de creación. */
export default function M06Canales() {
  const lista = canales as Canal[];
  const [activos, setActivos] = useState(lista.map((canal) => canal.activo));

  const conmutar = (indice: number) =>
    setActivos((previos) =>
      previos.map((valor, i) => (i === indice ? !valor : valor)),
    );

  return (
    <SafeAreaView style={estilos.pantalla} edges={['top']}>
      <TopAppBar
        variante="paso"
        titulo={tituloFlujo}
        subtitulo={subtituloPaso(5)}
      />

      <ScrollView contentContainerStyle={estilos.contenido}>
        <Text style={[type.titleLarge, estilos.titulo]}>{titulo}</Text>

        <View style={estilos.canales}>
          {lista.map((canal, indice) => (
            <ListRow
              key={canal.titulo}
              variante="superficie"
              icono={canal.icono}
              titulo={canal.titulo}
              ctx={canal.desc}
              trasera={
                <Switch
                  on={activos[indice]}
                  onChange={() => conmutar(indice)}
                  label={canal.titulo}
                />
              }
            />
          ))}
        </View>

        {/* CM-05. El aviso va ANTES del botón de guardar. No se mueve al pie. */}
        <Card tipo="aviso" tono="error" icono="notifications_off">
          <Text style={[type.titleSmall, estilos.tintaError]}>
            {avisoSilencio.titulo}
          </Text>
          <Text style={[type.bodySmall, estilos.tintaError]}>
            {avisoSilencio.desc}
          </Text>
        </Card>

        <View style={estilos.secundarios}>
          {/* Inertes: llevan a los ajustes del sistema */}
          <Button tipo="secundario" inerte>
            {botones.ajustes}
          </Button>
          <Button tipo="secundario" inerte>
            {botones.probar}
          </Button>
        </View>

        <Button
          tipo="primario"
          ancho="completo"
          onPress={() => router.dismissTo(rutas.M01Inicio)}
        >
          {botones.guardar}
        </Button>
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
    paddingHorizontal: sp[4],
    // La barra inferior va en absolute: se le reserva el alto · § 3.3
    paddingBottom: frame.bottomNav + sp[6],
    gap: sp[6],
  },
  titulo: {
    color: colors.onSurface,
    marginTop: sp[4],
  },
  canales: {
    gap: sp[2],
  },
  /* Los dos secundarios van de ancho completo, uno sobre otro */
  secundarios: {
    gap: sp[2],
  },
  tintaError: {
    color: colors.onErrorContainer,
  },
});
