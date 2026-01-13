import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact, { rules } from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      js,
      prettier: prettierPlugin
    },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser }
  },
  {
    files: ['server/**/*.{js,ts}', '*.config.{js,ts}'],
    languageOptions: {
      globals: globals.node,
      sourceType: 'commonjs'
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },

  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended
])
