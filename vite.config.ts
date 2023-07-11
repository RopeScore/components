import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'RsComponents',
      fileName: (format) => `rs-components.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'vue-router'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          RouterLink: 'RouterLink'
        }
      }
    }
  },
  server: {
    port: 5001
  },
  plugins: [
    vue(),
    Unocss(),
    Icons({
      compiler: 'vue3'
    }),
    dts({
      tsconfigPath: 'tsconfig.production.json'
    })
  ]
})
