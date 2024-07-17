import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-config-prettier'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']
  },
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  {
    plugins: {
      'react-hooks': reactHooks,
      react,
    }
  },
  {
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error', // Verifica as regras dos Hooks
      'react-hooks/exhaustive-deps': 'warn', // Verifica as dependências dos Hooks
      '@typescript-eslint/no-unused-vars': 'error', // Exemplo de regra do TypeScript
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
]
