import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "@rollup/plugin-babel";

export default defineConfig({
  plugins: [
    react(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"],
    }),
  ],
  server: {
    middleware: {
      handle(req, res, next) {
        if (req.url.endsWith(".js")) {
          res.setHeader("Content-Type", "application/javascript");
        }
        next();
      },
    },
  },
});
