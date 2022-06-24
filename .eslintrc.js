module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    quotes: [2, 'single', {avoidEscape: true}],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single']
  }
};
