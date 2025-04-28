import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierReccomended from 'eslint-plugin-prettier/recommended';
import vitest from '@vitest/eslint-plugin';
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  prettierReccomended,
  {
    files: ['**/*.test.ts'],
    ...vitest.configs.recommended,
  },
]);
