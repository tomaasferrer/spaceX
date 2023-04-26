import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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
