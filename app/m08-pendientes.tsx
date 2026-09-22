import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNav from '@/src/components/BottomNav';
import Checkbox from '@/src/components/Checkbox';
import Chip from '@/src/components/Chip';
import type { IconName } from '@/src/components/Icon';
import ListRow from '@/src/components/ListRow';
import StatusChip, { type EstadoChip } from '@/src/components/StatusChip';
import TopAppBar from '@/src/components/TopAppBar';
import { chips, pendientes } from '@/src/data/pendientes';
import { titulos } from '@/src/data/textos';
import { rutas } from '@/src/navigation/rutas';
import useBottomNavHeight from '@/src/hooks/useBottomNavHeight';
import { colors, sp } from '@/src/theme';

type Pendiente = {
  id: number;
  icono: IconName;
  nombre: string;
  ctx: string;
  estado: EstadoChip;
  filtros: Filtro[];
};

type Filtro = 'Todos' | 'Hoy' | 'Esta semana' | 'Por lugar';

/** M08 · Pendientes · § 6.8. */
export default function M08Pendientes() {
  const lista = pendientes as Pendiente[];
  const opciones = chips as Filtro[];
  const [chipActivo, setChipActivo] = useState<Filtro>(opciones[0]);
  const altoBarra = useBottomNavHeight();

  // La completada llega ya marcada. Se pierde al navegar: no se guarda nada.
  const [marcadas, setMarcadas] = useState(
    () =>
      Object.fromEntries(
        lista.map((fila) => [fila.id, fila.estado === 'completada']),
      ) as Record<number, boolean>,
  );

  const filasVisibles =
    chipActivo === 'Todos'
      ? lista
      : lista.filter((fila) => fila.filtros.includes(chipActivo));

  const marcar = (id: number) =>
    setMarcadas((previas) => ({ ...previas, [id]: !previas[id] }));

  return (
    <SafeAreaView style={estilos.pantalla} edges={['top']}>
      <TopAppBar variante="titulo" titulo={titulos.M08} />

      {/* Los cuatro chips no caben en 358: van en scroll horizontal */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={estilos.chips}
        style={estilos.chipsFila}
      >
        {opciones.map((chip) => (
          <Chip
            key={chip}
            activo={chip === chipActivo}
            onPress={() => setChipActivo(chip)}
          >
            {chip}
          </Chip>
        ))}
      </ScrollView>

      <ScrollView
        contentContainerStyle={[
          estilos.lista,
          { paddingBottom: altoBarra + sp[6] },
        ]}
      >
        {filasVisibles.map((fila) => (
          <ListRow
            key={fila.id}
            delante={
              <Checkbox
                checked={marcadas[fila.id]}
                onChange={() => marcar(fila.id)}
                accessibilityLabel={fila.nombre}
              />
            }
            titulo={fila.nombre}
            ctx={fila.ctx}
            // La completada va atenuada y sin tachado: no se lee bien en bodySmall
            atenuado={fila.estado === 'completada'}
            trasera={<StatusChip estado={fila.estado} />}
            onPress={() => router.navigate(rutas.M07AlertaLanzada)}
          />
        ))}
      </ScrollView>

      <BottomNav activa="Pendientes" />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  chipsFila: {
    flexGrow: 0,
    marginTop: sp[2],
  },
  chips: {
    gap: sp[2],
    paddingHorizontal: sp[4],
  },
  lista: {
    gap: sp[2],
    paddingHorizontal: sp[4],
    paddingTop: sp[6],
  },
});
