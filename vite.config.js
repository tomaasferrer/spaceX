import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "mime-fix",
      transform(code, id) {
        if (id.endsWith(".jsx")) {
          return {
            code,
            map: null,
            moduleSideEffects: "no-treeshake",
            loader: "jsx",
          };
        }
      },
    },
  ],
});
