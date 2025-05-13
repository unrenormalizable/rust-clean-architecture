// @ts-nocheck
import globals from 'globals'
import js from '@eslint/js'
import imports from 'eslint-plugin-import'
import prettier from 'eslint-config-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist', 'node_modules', 'build'] },
  {
    files: ['**/*.{js,jsx,mjs}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly'
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    // NOTE: To customize, refer https://github.com/forcedotcom/eslint-config-salesforce/blob/main/.eslintrc.js
    rules: {
      semi: 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-param-reassign': ['error', { props: false }]
    }
  },
  prettier, // Disable conflicting prettier rules
  js.configs.recommended, // ESLint recommended rules
  {
    files: ['**/*.{js,jsx,mjs}'],
    plugins: {
      import: imports // Import plugin recommended rules
    },
    ...imports.flatConfigs.recommended,
    rules: {
      'import/newline-after-import': ['error', { count: 1 }]
    }
  },

  {
    files: ['**/*.{js,jsx,mjs}'],
    plugins: {
      react // React plugin recommended rules
    },
    ...react.configs.flat.recommended,
    ...react.configs.flat['jsx-runtime'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-no-target-blank': 'off',
      'react/prop-types': 0,
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ]
    },
    settings: {
      react: {
        version: 'detect' // Automatically detect React version
      }
    }
  },
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'react-hooks': reactHooks // React Hooks recommended rules
    },
    ...reactHooks.configs['recommended-latest']
  },
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'react-refresh': reactRefresh
    },
    ...reactRefresh.configs.recommended,
    rules: {
      'react-refresh/only-export-components': ['error', { allowConstantExport: true }]
    }
  }
]
