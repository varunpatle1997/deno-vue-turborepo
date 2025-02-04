import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig(({ mode }) => {
  const environmentConfigs = {
    development: {
      __VITE_API_BASE_URL__: JSON.stringify("http://localhost:3000"),
    },
    staging: {
      __VITE_API_BASE_URL__: JSON.stringify("https://staging-api.example.com"),
    },
    production: {
      __VITE_API_BASE_URL__: JSON.stringify(
        "https://deno-app-1-avanfrewhaebbraw.canadacentral-01.azurewebsites.net",
      ),
    },
  };

  const envConfig =
    environmentConfigs[mode as keyof typeof environmentConfigs] ||
    environmentConfigs.development;

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@repo/zod-schemas": path.resolve(
          __dirname,
          "../../../packages/zod-schemas/dist/src/index.js",
        ),
      },
    },
    plugins: [vue()],
    define: envConfig,
  };
});
