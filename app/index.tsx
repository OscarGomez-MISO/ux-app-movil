import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNav from '@/src/components/BottomNav';
import Card from '@/src/components/Card';
import Chip from '@/src/components/Chip';
import Fab from '@/src/components/Fab';
import Icon, { type IconName } from '@/src/components/Icon';
import TopAppBar from '@/src/components/TopAppBar';
import {
  chips,
  fab,
  proximas,
  saludo,
  sincronizacion,
  subtitulo,
  tituloProximas,
  verPendientes,
} from '@/src/data/hoy';
import { titulos } from '@/src/data/textos';
import { rutaDe, rutas } from '@/src/navigation/rutas';
import useBottomNavHeight from '@/src/hooks/useBottomNavHeight';
import { colors, frame, radius, sp, type } from '@/src/theme';

type Proxima = {
  icono: IconName;
  titulo: string;
  ctx: string;
};

/** M01 · Inicio / Hoy. */
export default function M01Inicio() {
  const opciones = chips as string[];
  const [chipActivo, setChipActivo] = useState(opciones[0]);
  const altoBarra = useBottomNavHeight();

  return (
    <SafeAreaView style={estilos.pantalla} edges={['top']}>
      <TopAppBar
        variante="paso"
        sinAtras
        titulo={titulos.M01}
        subtitulo={subtitulo}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          estilos.contenido,
          { paddingBottom: altoBarra + frame.botonPrincipal + sp[8] },
        ]}
      >
        <View style={estilos.chips}>
          {opciones.map((chip) => (
            <Chip
              key={chip}
              activo={chip === chipActivo}
              onPress={() => setChipActivo(chip)}
            >
              {chip}
            </Chip>
          ))}
        </View>

        <Card tipo="aviso" style={estilos.saludo}>
          <View style={estilos.saludoFila}>
            <View style={estilos.textoFlexible}>
              <Text style={[type.titleLarge, estilos.tintaPrimaria]}>
                {saludo.titulo}
              </Text>
              <Text style={[type.bodyMedium, estilos.tintaPrimaria]}>
                {saludo.desc}
              </Text>
            </View>
            <Icon nombre="notifications" size={24} color={colors.primary} />
          </View>
        </Card>

        <Card tipo="superficie" style={estilos.alertas}>
          <Text style={[type.titleMedium, estilos.textoPrincipal]}>
            {tituloProximas}
          </Text>

          <View style={estilos.lista}>
            {(proximas as Proxima[]).map((alerta, indice) => (
              <Pressable
                key={alerta.titulo}
                onPress={() => router.navigate(rutas.M07AlertaLanzada)}
                accessibilityRole="button"
                accessibilityLabel={`${alerta.titulo}. ${alerta.ctx}`}
                style={({ pressed }) => [
                  estilos.alerta,
                  pressed && estilos.alertaPulsada,
                ]}
              >
                <Icon
                  nombre={alerta.icono}
                  size={22}
                  color={indice === 0 ? colors.error : colors.primary}
                />
                <View style={estilos.textoFlexible}>
                  <Text style={[type.titleSmall, estilos.textoPrincipal]}>
                    {alerta.titulo}
                  </Text>
                  <Text style={[type.bodySmall, estilos.textoSecundario]}>
                    {alerta.ctx}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>

          <Pressable
            onPress={() => router.navigate(rutas.M08Pendientes)}
            accessibilityRole="button"
            hitSlop={14}
            style={({ pressed }) => [
              estilos.verPendientes,
              pressed && estilos.enlacePulsado,
            ]}
          >
            <Text style={[type.labelLarge, estilos.enlace]}>{verPendientes}</Text>
          </Pressable>
        </Card>

        <Card tipo="tarjeta" style={estilos.sincronizacion}>
          <View style={estilos.sincronizacionFila}>
            <Icon nombre="sync" size={24} color={colors.primary} />
            <View style={estilos.textoFlexible}>
              <Text style={[type.titleSmall, estilos.textoPrincipal]}>
                {sincronizacion.titulo}
              </Text>
              <Text style={[type.bodySmall, estilos.textoSecundario]}>
                {sincronizacion.desc}
              </Text>
            </View>
          </View>
        </Card>
      </ScrollView>

      <Fab onPress={() => router.navigate(rutaDe('M02TipoDeAlerta'))}>
        {fab}
      </Fab>
      <BottomNav activa="Inicio" />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  contenido: {
    gap: sp[5],
    paddingHorizontal: sp[6],
    paddingTop: sp[4],
  },
  chips: {
    flexDirection: 'row',
    gap: sp[2],
  },
  saludo: {
    minHeight: 72,
    borderRadius: radius.xl,
    justifyContent: 'center',
    paddingHorizontal: sp[5],
    paddingVertical: sp[3],
  },
  saludoFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp[4],
  },
  tintaPrimaria: {
    color: colors.onPrimaryContainer,
  },
  alertas: {
    borderRadius: radius.xl,
    padding: sp[5],
  },
  lista: {
    marginTop: sp[3],
  },
  alerta: {
    minHeight: frame.filaAjuste,
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp[3],
    borderRadius: radius.sm,
  },
  alertaPulsada: {
    backgroundColor: colors.surfaceContainerHigh,
  },
  textoFlexible: {
    flex: 1,
  },
  textoPrincipal: {
    color: colors.onSurface,
  },
  textoSecundario: {
    color: colors.onSurfaceVariant,
    marginTop: sp[1],
  },
  verPendientes: {
    height: 20,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  enlace: {
    color: colors.primary,
  },
  enlacePulsado: {
    opacity: 0.72,
  },
  sincronizacion: {
    minHeight: 88,
    borderRadius: radius.lg,
    justifyContent: 'center',
    paddingHorizontal: sp[5],
  },
  sincronizacionFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp[4],
  },
});
