
// Fixed: Provide fallback declarations for Vite environment variables to avoid 'vite/client' not found error.
interface ImportMetaEnv {
  readonly [key: string]: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
