module.exports = {
  root: true,
  env: {
      node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript"
  ],
  rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'template-curly-spacing' : 'off',
      'indent': [
          'error',
          4,
          {
              'ignoredNodes': [
                  'TemplateLiteral'
              ],
              'SwitchCase': 1
          }
      ]
  },
  parserOptions: {
      parser: '@typescript-eslint/parser'
  },
  plugins: [
      "markdown"
  ],
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
