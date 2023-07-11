import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'
import transformerDirectives from '@unocss/transformer-directives'
import transformerCompileClass from '@unocss/transformer-compile-class'

export default defineConfig({
  presets: [
    presetWind(),
  ],
  transformers: [
    transformerDirectives(),
    transformerCompileClass()
  ]
})
