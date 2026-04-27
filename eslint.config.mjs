// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    // Ignora a pasta de build e arquivos de configuração de linter
    ignores: ['dist/**', 'eslint.config.js'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended, // Configuração recomendada, mas menos estrita
  eslintPluginPrettierRecommended,
  {
    // Configuração para arquivos TypeScript com type checking
    files: ['src/**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'module',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Regras personalizadas
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',

      // Preferências de estilo para Prettier
      'prettier/prettier': [
        'error',
        {
          singleQuote: true, // Use aspas simples
          semi: true, // Use ponto e vírgula
          endOfLine: 'lf', // Unix line endings
          printWidth: 90, // Largura recomendada padrão
        },
      ],
    },
  },
);
