import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNav from '@/src/components/BottomNav';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import Dropdown, { type DropdownOption } from '@/src/components/Dropdown';
import Icon from '@/src/components/Icon';
import Switch from '@/src/components/Switch';
import TopAppBar from '@/src/components/TopAppBar';
import { disparadores } from '@/src/data/disparadores';
import {
  botones,
  confirmacion,
  nota,
  opciones,
  resumen,
  titulo,
  valores,
} from '@/src/data/reglas';
import { subtituloPaso, tituloFlujo } from '@/src/data/textos';
import { rutaDe } from '@/src/navigation/rutas';
import useBottomNavHeight from '@/src/hooks/useBottomNavHeight';
import { colors, frame, radius, sp, type } from '@/src/theme';

const opcionesDropdown = (valoresOpcion: string[]): DropdownOption[] =>
  valoresOpcion.map((valor) => ({ valor }));

/** M05 · Reglas finales antes de configurar los canales. */
export default function M05Reglas() {
  const params = useLocalSearchParams<{ disparador?: string; lugar?: string }>();
  const disparador = params.disparador ?? disparadores[0].valor;
  const resumenActual = resumen(disparador, params.lugar);
  const [repeticion, setRepeticion] = useState(valores.repeticion);
  const [insistencia, setInsistencia] = useState(valores.insistencia);
  const [requiereConfirmacion, setRequiereConfirmacion] = useState(
    confirmacion.activo,
  );
  const altoBarra = useBottomNavHeight();

  return (
    <SafeAreaView style={estilos.pantalla} edges={['top']}>
      <TopAppBar
        variante="paso"
        sinAtras
        titulo={tituloFlujo}
        subtitulo={subtituloPaso(4)}
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

        <Card tipo="aviso" style={estilos.resumen}>
          <Icon nombre="schedule" size={28} color={colors.primary} />
          <View style={estilos.resumenTextos}>
            <Text style={[type.titleMedium, estilos.resumenTitulo]}>
              {resumenActual.titulo}
            </Text>
            <Text style={[type.bodySmall, estilos.resumenDesc]}>
              {resumenActual.desc}
            </Text>
          </View>
        </Card>

        <View style={estilos.repeticion}>
          <Dropdown
            label={opciones.repeticionLabel}
            value={repeticion}
            opciones={opcionesDropdown(opciones.repeticion)}
            onChange={setRepeticion}
          />
        </View>

        <View style={estilos.insistencia}>
          <Dropdown
            label={opciones.insistenciaLabel}
            value={insistencia}
            opciones={opcionesDropdown(opciones.insistencia)}
            onChange={setInsistencia}
          />
        </View>

        <View style={estilos.confirmacion}>
          <Text style={[type.labelMedium, estilos.labelConfirmacion]}>
            {confirmacion.titulo}
          </Text>
          <View style={estilos.campoConfirmacion}>
            <Text style={[type.bodyMedium, estilos.confirmacionDesc]}>
              {confirmacion.desc}
            </Text>
            <Switch
              on={requiereConfirmacion}
              onChange={setRequiereConfirmacion}
              label={confirmacion.titulo}
              variante="check"
            />
          </View>
        </View>

        <Text style={[type.bodySmall, estilos.nota]}>{nota}</Text>

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
          <View style={estilos.guardar}>
            <Button
              tipo="primario"
              icono="check"
              iconoAlInicio
              onPress={() => router.navigate(rutaDe('M06Canales'))}
            >
              {botones.guardar}
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
  resumen: {
    height: 112,
    marginTop: sp[4],
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp[4],
    paddingHorizontal: sp[5],
    borderRadius: radius.lg + 2,
  },
  resumenTextos: {
    flex: 1,
    gap: sp[2],
  },
  resumenTitulo: {
    color: colors.onPrimaryContainer,
  },
  resumenDesc: {
    color: colors.onPrimaryContainer,
  },
  repeticion: {
    marginTop: sp[6] + sp[1],
    zIndex: 3,
  },
  insistencia: {
    marginTop: sp[6] + sp[1],
    zIndex: 2,
  },
  confirmacion: {
    marginTop: sp[6] + sp[1],
  },
  labelConfirmacion: {
    marginBottom: sp[1],
    color: colors.onSurfaceVariant,
  },
  campoConfirmacion: {
    height: frame.campo,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: sp[4],
    paddingRight: sp[2] + sp[1],
    borderWidth: 1,
    borderColor: colors.surfaceVariant,
    borderRadius: radius.md + 2,
    backgroundColor: colors.surfaceContainerLowest,
  },
  confirmacionDesc: {
    flex: 1,
    color: colors.onSurface,
  },
  nota: {
    minHeight: 32,
    marginTop: sp[8] + sp[1],
    color: colors.onSurfaceVariant,
  },
  acciones: {
    height: frame.boton,
    marginTop: sp[12],
    flexDirection: 'row',
    gap: sp[3],
  },
  atras: {
    width: 104,
  },
  guardar: {
    flex: 1,
  },
});
