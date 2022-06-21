import { fileURLToPath, URL } from "url"

import { defineConfig, splitVendorChunkPlugin } from "vite"
import vue from "@vitejs/plugin-vue"
import svgLoader from "vite-svg-loader"
import { imagetools } from "vite-imagetools"

svgLoader({
  svgoConfig: {
    multipass: true,
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(), imagetools(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
