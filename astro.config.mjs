import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://pabloluceroschneider.github.io",
  base: "/erichpaulschneider",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" }
});
