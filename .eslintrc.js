module.exports = {
  'env': {
    'es2021': true,
    'node': true,
  },
  'extends': [
    'google',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',

    'plugin:import/typescript',


  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
    'import',
  ],
  'rules': {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'indent': 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
    ],
    'valid-jsdoc': ['error', {
      'requireParamType': false,
      'requireParamDescription': false,
      'requireReturn': false,
      'requireReturnDescription': false,
    }],
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

};
