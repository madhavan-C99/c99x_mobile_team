import { ExpoConfig, ConfigContext } from 'expo/config';

type AppEnv = 'development' | 'staging' | 'production';

const APP_ENV = (process.env.EXPO_PUBLIC_APP_ENV ?? 'development') as AppEnv;

const NAMES: Record<AppEnv, string> = {
  development: 'TodoApp (Dev)',
  staging: 'TodoApp (Stg)',
  production: 'TodoApp',
};

// "yourname" ah ungal peyar ku maathunga (small letters, space illa)
const IDS: Record<AppEnv, string> = {
  development: 'com.yourname.todoapp.dev',
  staging: 'com.yourname.todoapp.stg',
  production: 'com.yourname.todoapp',
};

export default ({ config }: ConfigContext): ExpoConfig => ({
...config,
name: NAMES[APP_ENV],
slug: 'todo-app',
version: '1.0.0',
icon: './assets/images/icon.png',
userInterfaceStyle: 'automatic',
android: {
...config.android,
package: IDS[APP_ENV],
adaptiveIcon: {
foregroundImage: './assets/images/adaptive-icon.png',
backgroundColor: '#2563eb',
monochromeImage: './assets/images/monochrome-icon.png',
},
},
ios: { ...config.ios, bundleIdentifier: IDS[APP_ENV] },
plugins: [
[
'expo-splash-screen',
{
image: './assets/images/splash-icon.png',
imageWidth: 200,
backgroundColor: '#ffffff',
dark: {
image: './assets/images/splash-icon.png',
backgroundColor: '#0f172a',
},
},
],
],
extra: { ...config.extra, appEnv: APP_ENV },
});