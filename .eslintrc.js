module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-param-reassign': 0,
    'operator-linebreak': 0,
    'no-confusing-arrow': 0,
  },
};
