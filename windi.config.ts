import { defineConfig } from 'vite-plugin-windicss'
import plugin from 'windicss/plugin'
import { join } from 'path'

export default defineConfig({
  extract: {
    include: [join(__dirname, '**/lib/**/*.{vue,html,js,ts}')],
    exclude: [join(__dirname, '**/node_modules/**/*')]
  },
  plugins: [
    require('windicss/plugin/forms'),
    plugin(({ addBase, theme }) => {
      addBase({
        h1: {
          fontSize: '2.25rem',
          lineHeight: '2.5rem',
          fontWeight: '600'
        },
        h2: {
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          fontWeight: '600'
        },
        ol: {
          listStyleType: 'decimal',
          marginLeft: '1.5rem'
        },
        ul: {
          listStyleType: 'disc',
          marginLeft: '1.5rem'
        },
        'td, th': {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: theme('colors.gray.300') as string,
          paddingInline: '.25rem',
          whiteSpace: 'nowrap'
        }
      })
    })
  ]
})
