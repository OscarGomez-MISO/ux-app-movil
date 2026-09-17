# UX Alarma - App movil

Proyecto base en React Native para implementar los mockups de **UX Alarma**, desarrollado para la materia de UX: Mejoramiento de la Experiencia de Usuario.

Diseno de referencia: [Mockups en Figma](https://www.figma.com/design/btnoEDsUZrWU97NXOGIO41/UXAlarma-Oscar-Jose?node-id=331-2491&t=V0HuOYzVyYoZeiXK-1)

## Tecnologias

- React Native
- Expo SDK 57
- Expo Router
- TypeScript

## Requisitos

- [Node.js](https://nodejs.org/) 20 LTS o 22 LTS
- npm 10 o superior
- La aplicacion [Expo Go](https://expo.dev/go) en un dispositivo fisico, o un emulador Android configurado

Para ejecutar el simulador de iOS se requiere macOS con Xcode. En Windows se puede trabajar con Android, Expo Go o la version web.

## Instalacion

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone https://github.com/OscarGomez-MISO/ux-app-movil.git
cd ux-app-movil
```

Instala las dependencias:

```bash
npm install
```

## Ejecucion local

Inicia el servidor de desarrollo:

```bash
npm start
```

Cuando aparezca el codigo QR puedes escanearlo desde Expo Go. Tambien puedes usar uno de estos comandos:

```bash
npm run android
npm run ios
npm run web
```

Si el dispositivo fisico no puede conectarse por la red local, prueba:

```bash
npm run start:tunnel
```

## Comandos disponibles

| Comando | Descripcion |
| --- | --- |
| `npm start` | Inicia Expo en modo desarrollo |
| `npm run start:tunnel` | Inicia Expo usando un tunel |
| `npm run android` | Abre la app en Android |
| `npm run ios` | Abre la app en el simulador de iOS |
| `npm run web` | Abre la app en el navegador |
| `npm run typecheck` | Valida los tipos de TypeScript |

## Estructura del proyecto

```text
ux-app-movil/
|-- app/                 # Rutas y pantallas de Expo Router
|   |-- _layout.tsx      # Navegacion raiz
|   `-- index.tsx        # Pantalla inicial temporal
|-- assets/
|   |-- fonts/           # Fuentes locales
|   `-- images/          # Imagenes e iconos propios
|-- src/
|   |-- components/      # Componentes reutilizables
|   `-- theme/           # Colores, espaciado y estilos compartidos
|-- app.json             # Configuracion de Expo
|-- package.json         # Dependencias y scripts
`-- tsconfig.json        # Configuracion de TypeScript
```

## Trabajo por pantallas

Cada pantalla se crea como un archivo dentro de `app/`. Por ejemplo, `app/tipo-alerta.tsx` queda disponible en la ruta `/tipo-alerta`. Los elementos reutilizables deben vivir en `src/components` y los valores visuales compartidos en `src/theme`.

Para reducir conflictos entre integrantes, se recomienda crear una rama por pantalla:

```bash
git checkout -b feature/m01-inicio
```

Antes de abrir un pull request, ejecuta:

```bash
npm run typecheck
```
