import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  type TextInputProps,
} from 'react-native';

import Icon, { type IconName } from '@/src/components/Icon';
import { colors, frame, radius, sp, type } from '@/src/theme';

export type EstadoTextField =
  | 'vacio'
  | 'valor'
  | 'foco'
  | 'error'
  | 'deshabilitado'
  | 'noAplica';

type TextFieldProps = Pick<
  TextInputProps,
  'autoCapitalize' | 'keyboardType' | 'maxLength' | 'onSubmitEditing'
> & {
  label: string;
  value: string;
  onChangeText?: (value: string) => void;
  placeholder?: string;
  ayuda?: string;
  icono?: IconName;
  estado?: EstadoTextField;
  multilinea?: boolean;
};

/** Campo de texto del sistema, reutilizable en el flujo de creación. */
export default function TextField({
  label,
  value,
  onChangeText,
  placeholder,
  ayuda,
  icono,
  estado,
  multilinea = false,
  ...inputProps
}: TextFieldProps) {
  const [enFoco, setEnFoco] = useState(false);
  const bloqueado = estado === 'deshabilitado' || estado === 'noAplica';
  const conError = estado === 'error';
  const enfocado = estado === 'foco' || enFoco;
  const tinta = conError ? colors.error : colors.onSurface;

  return (
    <View>
      <Text style={[type.labelMedium, estilos.label, conError && estilos.error]}>
        {label}
      </Text>
      <View
        style={[
          estilos.caja,
          multilinea && estilos.cajaMultilinea,
          bloqueado && estilos.bloqueada,
          conError && estilos.cajaError,
          enfocado && !conError && estilos.cajaFoco,
        ]}
      >
        <TextInput
          {...inputProps}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.onSurfaceVariant}
          editable={!bloqueado}
          multiline={multilinea}
          onFocus={() => setEnFoco(true)}
          onBlur={() => setEnFoco(false)}
          accessibilityLabel={label}
          style={[
            type.bodyMedium,
            estilos.input,
            multilinea && estilos.inputMultilinea,
            { color: tinta },
          ]}
        />
        {icono && (
          <Icon
            nombre={conError ? 'error' : icono}
            size={22}
            color={conError ? colors.error : colors.onSurfaceVariant}
          />
        )}
      </View>
      {ayuda && (
        <Text style={[type.bodySmall, estilos.ayuda, conError && estilos.error]}>
          {ayuda}
        </Text>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  label: {
    marginBottom: sp[1],
    color: colors.onSurfaceVariant,
  },
  caja: {
    height: frame.campo,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sp[4],
    gap: sp[2],
    borderWidth: 1,
    borderColor: colors.surfaceVariant,
    borderRadius: radius.md + 2,
    backgroundColor: colors.surfaceContainerLowest,
  },
  cajaMultilinea: {
    height: frame.campo,
  },
  input: {
    flex: 1,
    height: '100%',
    padding: 0,
  },
  inputMultilinea: {
    textAlignVertical: 'center',
  },
  cajaFoco: {
    borderWidth: 2,
    borderColor: colors.primary,
    paddingHorizontal: sp[4] - 1,
  },
  cajaError: {
    borderColor: colors.error,
  },
  bloqueada: {
    opacity: 0.38,
    backgroundColor: colors.surfaceContainerLow,
  },
  ayuda: {
    marginTop: sp[1],
    color: colors.onSurfaceVariant,
  },
  error: {
    color: colors.error,
  },
});
