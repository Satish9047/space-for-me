import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import UnpluginInjectPreload from "unplugin-inject-preload/vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    cssInjectedByJsPlugin(),
    UnpluginInjectPreload({
      files: [
        {
          entryMatch: /.*\.woff2$/,
          attributes: {
            type: "font/woff2",
            as: "font",
            crossorigin: "anonymous",
          },
        },
        {
          entryMatch: /.*\.css$/,
          attributes: {
            as: "style",
          },
        },
      ],
    }),
  ],
});
