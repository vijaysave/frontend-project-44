import globals from 'globals';
import pluginJs from '@eslint/js';
import { ESLint } from 'eslint';
import pluginVue from 'eslint-plugin-vue';
import { recommended } from '@typescript-eslint/eslint-plugin';
import { parser } from '@typescript-eslint/parser';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...recommended,
  ...pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser } } },
];
