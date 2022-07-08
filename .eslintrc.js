module.exports = {
  'root': false,
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'ignorePatterns': ['www/**/*', 'cordova*'],
  'rules': {
    'require-jsdoc': 0,
    'max-len': ['error', 120, 2],
  },
};
