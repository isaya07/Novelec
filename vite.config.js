/* eslint-disable max-len */ /* eslint-disable vue/max-len */
import { fileURLToPath, URL } from "url"

import { defineConfig, splitVendorChunkPlugin } from "vite"
import vue from "@vitejs/plugin-vue"
import svgLoader from "vite-svg-loader"
import { imagetools } from "vite-imagetools"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import Components from "unplugin-vue-components/vite"

svgLoader({
  svgoConfig: {
    multipass: true,
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    imagetools(),
    splitVendorChunkPlugin(),
    Icons({
      customCollections: {
        my: {
          home: `<svg viewBox="0 0 24 24">
          <path fill="currentColor"
          d="m16.084 2.2227c-0.96338 0-0.11716 0.00228-1.2891 0.00228-3.42e-4 0.55729-6.84e-4 1.7017-1e-3 2.2591l-2.9008-1.7064 0.0014 1.8142 9.7588 5.5323c0.87533 0.32343 1.4413-1.0424 0.59722-1.3465l-6.1647-3.6622c-4.19e-4 -0.96422-9.26e-4 -1.9286-0.0013-2.8928zm-4.5544 0.55627c-3.5485 2.0589-7.0905 4.1288-10.636 6.1928-0.48557 0.75141 0.5881 1.5425 1.2045 0.99439l9.4311-5.3742zm4.1657 5.2932c-0.83077-0.042091-0.10162 1.008-0.5462 1.4518-0.5133 1.3259-1.7716 2.1325-2.5056 3.3198-0.75016 1.0971-1.6768 2.4111-1.2678 3.8048 0.48025 0.60466 0.71107 1.0099 0.49184 1.7878-1.0111-0.50057-0.11928-1.7478-0.932-2.4969-0.82044-0.9968-2.1072-1.4044-3.0923-2.1887-0.42726-0.2162-0.79381-1.9193-1.0851-0.99884 0.093339 1.8273 0.28111 3.8621 1.5585 5.2845 0.62179 0.68744 1.6508 0.89486 2.4795 0.45506 0.80432-0.18246 0.9047 1.4629 1.4267 1.5786 0.87997 0.06189 0.2301-0.64862 0.34159-1.2047-0.05786-0.69435 0.01964-1.2314 0.797-1.1904 1.7417-0.5935 3.0206-2.2331 3.1764-4.0669 0.21969-1.876-0.18489-3.783-0.84266-5.5358zm-11.031 1.0294c-0.50954 0.33692-1.0197 0.67296-1.5295 1.0095v10.042h1.4902zm14.094 0c0.01387 3.6838 0.02717 7.3676 0.04065 11.051h1.4902v-10.042zm2.095 11.74-18.242 0.0073c-0.12954 0.34942-0.12403 0.45031-0.043612 0.82389 5.9075-0.0019 12.398-0.0039 18.305-0.0059 0.06819-0.27295 0.0512-0.55262-0.01953-0.8253z" stroke-width=".41875"/>
         </svg>`,
          "home-plumbing": `<svg viewBox="0 0 24 24">
          <path fill="currentColor" d="m5 20v-8h-3l10-9 10 9h-3v8h-14m7-14.31-5 4.5v7.81h10v-7.81l-5-4.5"/>
          <path fill="currentColor" d="m15.082 13.817v0.83751h-1.2563v-0.72026l1.2563-0.11725m0-0.41875c0-0.46063-0.41875-0.83751-0.92126-0.83751h-2.8475v-0.41875h-2.0938v4.6063h2.0938v-2.969l3.7688-0.38106m-5.8625-1.675h2.0938v-0.83751l2.2445-0.74957c0.15913-0.05025 0.268-0.201 0.268-0.3685 0-0.27219-0.268-0.46063-0.52344-0.3685l-4.0828 1.4866z" stroke-width=".41875"/>
        </svg>`,
        },
      },
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: false, // <--
          // this is optional, default enabling all the collections supported by Iconify
          enabledCollections: ["mdi"],
          customCollections: ["my"],
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
