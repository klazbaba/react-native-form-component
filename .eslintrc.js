module.exports = {
  extends: ['@react-native-community', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        quoteProps: 'consistent',
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
    'eqeqeq': 0,
    'react-native/no-inline-styles': 0,
  },
  ignorePatterns: ['node_modules/', 'lib/'],
};
