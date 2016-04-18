module.exports = {
  parser: 'babel-eslint',
  extends: [
    './config/eslint/best-practices.js',
    './config/eslint/other-rules.js',
  ],
  parserOptions: {
    ecmaFeatures: {
      arrowFunctions: true,
      blockBindings: true,
      classes: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      generators: false,
      modules: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: false,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      restParams: true,
      spread: true,
      superInFunctions: true,
      templateStrings: true,
    },
    ecmaVersion: 7
  },
};
