import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNav from '@/src/components/BottomNav';
import Button from '@/src/components/Button';
import type { IconName } from '@/src/components/Icon';
import ListRow from '@/src/components/ListRow';
import Tabs from '@/src/components/Tabs';
import TopAppBar from '@/src/components/TopAppBar';
import { detalle, listas, nota, pestanas } from '@/src/data/historial';
import { titulos } from '@/src/data/textos';
import { rutas } from '@/src/navigation/rutas';
import { colors, frame, sp, type, versales } from '@/src/theme';

type Registro = { icono: IconName; nombre: string; ctx: string };
type Lista = { rotulo: string; filas: Registro[] };

/**
 * M09 · Historial · § 6.9. Cambiar de pestaña cambia la lista y el rótulo:
 * es el único «filtro» de la maqueta, y funciona porque los tres arreglos
 * están escritos a mano en data/historial.js.
 */
export default function M09Historial() {
  const opciones = pestanas as string[];
  const [activa, setActiva] = useState(opciones[0]);
  const lista = (listas as Record<string, Lista>)[activa];

  return (
    <SafeAreaView style={estilos.pantalla} edges={['top']}>
      <TopAppBar variante="titulo" titulo={titulos.M09} />

      <View style={estilos.tabs}>
        <Tabs opciones={opciones} activa={activa} onChange={setActiva} />
      </View>

      <ScrollView contentContainerStyle={estilos.contenido}>
        {/* CM-07: el contexto de las reprogramadas dice cuántas veces */}
        <Text style={[type.labelSmall, versales, estilos.rotulo]}>
          {lista.rotulo}
        </Text>

        <View style={estilos.lista}>
          {lista.filas.map((registro) => (
            <ListRow
              key={registro.nombre}
              variante="superficie"
              titulo={registro.nombre}
              ctx={registro.ctx}
              trasera={
                <Button
                  tipo="terciario"
                  onPress={() => router.navigate(rutas.M07AlertaLanzada)}
                >
                  {detalle}
                </Button>
              }
              onPress={() => router.navigate(rutas.M07AlertaLanzada)}
            />
          ))}
        </View>

        <Text style={[type.bodySmall, estilos.nota]}>{nota}</Text>
      </ScrollView>

      <BottomNav activa="Historial" />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  tabs: {
    marginTop: sp[1],
  },
  contenido: {
    paddingHorizontal: sp[4],
    paddingTop: sp[5],
    // La barra inferior va en absolute: se le reserva el alto · § 3.3
    paddingBottom: frame.bottomNav + sp[6],
  },
  rotulo: {
    color: colors.onSurfaceVariant,
  },
  lista: {
    gap: sp[2],
    marginTop: sp[5],
  },
  nota: {
    marginTop: sp[5],
    color: colors.onSurfaceVariant,
    textAlign: 'center',
  },
});
