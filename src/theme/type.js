// Escala tipográfica · IBM Plex Sans · 13 estilos de Material 3
//
// En React Native NO existe fontWeight con fuentes personalizadas:
// hay que cargar cada peso como una familia distinta. Si pones
// fontWeight: '600' con Plex-Regular, Android lo ignora y iOS lo falsea.
//
// En App.js:
//   const [cargada] = useFonts({
//     'Plex-Regular':  require('../assets/fonts/IBMPlexSans-Regular.ttf'),
//     'Plex-Medium':   require('../assets/fonts/IBMPlexSans-Medium.ttf'),
//     'Plex-SemiBold': require('../assets/fonts/IBMPlexSans-SemiBold.ttf'),
//     'Plex-Bold':     require('../assets/fonts/IBMPlexSans-Bold.ttf'),
//   });
//   if (!cargada) return null;

export const type = {
  displaySmall:   { fontFamily: 'Plex-SemiBold', fontSize: 36, lineHeight: 44 },
  headlineLarge:  { fontFamily: 'Plex-SemiBold', fontSize: 32, lineHeight: 40 },
  headlineMedium: { fontFamily: 'Plex-SemiBold', fontSize: 28, lineHeight: 36 },
  headlineSmall:  { fontFamily: 'Plex-SemiBold', fontSize: 24, lineHeight: 32 },
  titleLarge:     { fontFamily: 'Plex-SemiBold', fontSize: 22, lineHeight: 28 },
  titleMedium:    { fontFamily: 'Plex-Medium',   fontSize: 16, lineHeight: 24 },
  titleSmall:     { fontFamily: 'Plex-Medium',   fontSize: 14, lineHeight: 20 },
  bodyLarge:      { fontFamily: 'Plex-Regular',  fontSize: 16, lineHeight: 24 },
  bodyMedium:     { fontFamily: 'Plex-Regular',  fontSize: 14, lineHeight: 20 },
  bodySmall:      { fontFamily: 'Plex-Regular',  fontSize: 12, lineHeight: 16 },
  labelLarge:     { fontFamily: 'Plex-Medium',   fontSize: 14, lineHeight: 20 },
  labelMedium:    { fontFamily: 'Plex-Medium',   fontSize: 12, lineHeight: 16 },
  labelSmall:     { fontFamily: 'Plex-Medium',   fontSize: 11, lineHeight: 16, letterSpacing: 0.5 },
};

// Rótulo de sección en versales: { ...type.labelSmall, ...versales }
export const versales = { textTransform: 'uppercase' };

export default type;
