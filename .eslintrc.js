module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/newline-after-import': 'off',
    'linebreak-style': 'off',
    'space-before-blocks': 'off',
    'lines-between-class-members': 'off',
    'padded-blocks': 'off',
    'no-extra-semi': 'off',
    'object-curly-spacing': 'off',
    'quotes': 'off',

  },
};
