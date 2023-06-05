import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const env = loadEnv(import.meta.env.MODE, process.cwd(), "ASTRO_");

const baseURL = env.ASTRO_BASE_URL || "";

if (baseURL.length === 0) {
  console.log("Missing environment variable ASTRO_BASE_URL");
  process.exit(1);
}

// https://astro.build/config
export default defineConfig({
  site: baseURL,
});
