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
import { colors, frame, sp } from '@/src/theme';

type Pendiente = {
  id: number;
  icono: IconName;
  nombre: string;
  ctx: string;
  estado: EstadoChip;
};

/** M08 · Pendientes · § 6.8. */
export default function M08Pendientes() {
  const [chipActivo, setChipActivo] = useState(chips[0]);

  // La completada llega ya marcada. Se pierde al navegar: no se guarda nada.
  const [marcadas, setMarcadas] = useState(
    (pendientes as Pendiente[]).map((fila) => fila.estado === 'completada'),
  );

  const marcar = (indice: number) =>
    setMarcadas((previas) =>
      previas.map((valor, i) => (i === indice ? !valor : valor)),
    );

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
        {(chips as string[]).map((chip) => (
          <Chip
            key={chip}
            activo={chip === chipActivo}
            onPress={() => setChipActivo(chip)}
          >
            {chip}
          </Chip>
        ))}
      </ScrollView>

      <ScrollView contentContainerStyle={estilos.lista}>
        {(pendientes as Pendiente[]).map((fila, indice) => (
          <ListRow
            key={fila.id}
            delante={
              <Checkbox
                checked={marcadas[indice]}
                onChange={() => marcar(indice)}
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
    // La barra inferior va en absolute: se le reserva el alto · § 3.3
    paddingBottom: frame.bottomNav + sp[6],
  },
});
