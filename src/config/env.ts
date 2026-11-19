export type AppEnv = 'development' | 'staging' | 'production';

// Environment edhu nu theerumaanikkum. Set pannala na 'development'
const APP_ENV = (process.env.EXPO_PUBLIC_APP_ENV ?? 'development') as AppEnv;

// IMPORTANT: ovvoru variable-um direct ah process.env.EXPO_PUBLIC_XXX nu ezhudhanum.
// process.env[key] maathiri dynamic ah ezhudhina Expo-ku theriyaadhu (undefined aagum).
const API_URLS: Record<AppEnv, string | undefined> = {
  development: process.env.EXPO_PUBLIC_API_URL_DEV,
  staging: process.env.EXPO_PUBLIC_API_URL_STAGING,
  production: process.env.EXPO_PUBLIC_API_URL_PROD,
};

const apiUrl = API_URLS[APP_ENV] || 'https://api.example.com';

if (!apiUrl) {
  throw new Error(`API URL missing for "${APP_ENV}". .env file check pannunga.`);
}

export const env = {
  appEnv: APP_ENV,
  apiUrl,
  isDev: APP_ENV === 'development',
  isStaging: APP_ENV === 'staging',
  isProd: APP_ENV === 'production',
} as const;