import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Adicione o Prettier como um plugin e configure as recomendações
    plugins: ['prettier'],
    extends: ['plugin:prettier/recommended'],
    rules: {
      // Habilita o Prettier como uma regra de ESLint para reportar erros de formatação
      'prettier/prettier': 'error'
    }
  }
];
