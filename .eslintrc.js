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
  'ignorePatterns': ['www/**/*'],
  'rules': {
    'require-jsdoc': 0,
  },
};
