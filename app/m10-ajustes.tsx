import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNav from '@/src/components/BottomNav';
import Card from '@/src/components/Card';
import Icon, { type IconName } from '@/src/components/Icon';
import ListRow from '@/src/components/ListRow';
import { palabraDe, type EstadoChip } from '@/src/components/StatusChip';
import TopAppBar from '@/src/components/TopAppBar';
import {
  alertas,
  cerrarSesion,
  conexiones,
  mantenimiento,
} from '@/src/data/ajustes';
import { titulos } from '@/src/data/textos';
import useBottomNavHeight from '@/src/hooks/useBottomNavHeight';
import { colors, sp, type, versales } from '@/src/theme';

type Conexion = {
  icono: IconName;
  titulo: string;
  ctx: string;
  estado: EstadoChip;
};

type Alerta = {
  icono: IconName;
  titulo: string;
  ctx: string;
  inerte: boolean;
};

/** M10 · Ajustes · § 6.10. */
export default function M10Ajustes() {
  const altoBarra = useBottomNavHeight();

  return (
    <SafeAreaView style={estilos.pantalla} edges={['top']}>
      <TopAppBar variante="titulo" titulo={titulos.M10} />

      <ScrollView
        contentContainerStyle={[
          estilos.contenido,
          { paddingBottom: altoBarra + sp[6] },
        ]}
      >
        <Text style={[type.labelSmall, versales, estilos.rotulo]}>
          {conexiones.rotulo}
        </Text>
        <View style={estilos.grupo}>
          {(conexiones.filas as Conexion[]).map((fila) => (
            <ListRow
              key={fila.titulo}
              compacta
              variante="superficie"
              titulo={fila.titulo}
              ctx={fila.ctx}
              // El mockup muestra el estado como texto, no como cápsula
              trasera={
                <Text style={[type.bodyMedium, estilos.rotulo]}>
                  {palabraDe(fila.estado)}
                </Text>
              }
            />
          ))}
        </View>

        <Text style={[type.labelSmall, versales, estilos.rotulo]}>
          {alertas.rotulo}
        </Text>
        <View style={estilos.grupo}>
          {(alertas.filas as Alerta[]).map((fila) => (
            // Sus pantallas de detalle no entran en las diez. El chevron se
            // conserva porque está en el mockup, pero la fila no navega.
            <ListRow
              key={fila.titulo}
              compacta
              variante="superficie"
              titulo={fila.titulo}
              ctx={fila.ctx}
              trasera={
                <Icon
                  nombre="chevron_right"
                  size={24}
                  color={colors.onSurfaceVariant}
                />
              }
            />
          ))}
        </View>

        <Text style={[type.labelSmall, versales, estilos.rotulo]}>
          {mantenimiento.rotulo}
        </Text>
        {/* Sostiene el reparto entre plataformas: la limpieza masiva es W08, en la web */}
        <Card tipo="superficie" icono="delete_sweep" style={estilos.grupo}>
          <Text style={[type.titleSmall, estilos.tinta]}>
            {mantenimiento.titulo}
          </Text>
          <Text style={[type.bodySmall, estilos.rotulo]}>
            {mantenimiento.desc}
          </Text>
        </Card>

        {/* Inerte: no hay sesión que cerrar en una maqueta */}
        <View style={estilos.cerrarSesion} aria-disabled>
          <Icon nombre="arrow_forward" size={20} color={colors.error} />
          <Text style={[type.labelLarge, estilos.tintaError]}>
            {cerrarSesion}
          </Text>
        </View>
      </ScrollView>

      <BottomNav activa="Ajustes" />
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
    paddingTop: sp[2],
    gap: sp[3],
  },
  rotulo: {
    color: colors.onSurfaceVariant,
  },
  grupo: {
    gap: sp[2],
    marginBottom: sp[3],
  },
  tinta: {
    color: colors.onSurface,
  },
  cerrarSesion: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp[2],
    marginTop: sp[3],
  },
  tintaError: {
    color: colors.error,
  },
});
