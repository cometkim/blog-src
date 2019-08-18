module.exports = {
  extends: 'react-app',
  plugins: [
    'import', 'flowtype', 'jsx-a11y', 'react', 'react-hooks', '@typescript-eslint'
  ],
  rules: {
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react-hooks/exhaustive-deps': 'error',
  },
};
