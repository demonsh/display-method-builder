module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
  },

  env: {
    node: true,
    browser: true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    // 'eslint:recommended',

    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
    // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    // 'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    'airbnb-base'

  ],

  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
    // required to lint *.vue files
    'vue',

  ],

  globals: {
    ga: 'readonly', // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly'
  },

  // add your custom rules here
  rules: {

    "no-unused-vars": "off",
    "no-undef": "off",
    "linebreak-style": 0,
    "guard-for-in": "off",
    "no-restricted-syntax": "off",
    "vue/multi-word-component-names": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "vue/no-multiple-template-root": "off",
    "simple-import-sort/imports": "off",
    "no-restricted-imports": "off",
    // 'template-curly-spacing': 'off',
    "no-return-assign": "off",
    "no-underscore-dangle": "off",
    "no-param-reassign": "off",
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : ['warn', { allow: ['warn', 'error'] }],
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "max-len": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-dynamic-require": "off",
    "global-require": "off",
    "no-unused-expressions": "off",
    "vue/no-unused-vars": "off",
    "no-shadow": "off",
    camelcase: "off",
    "no-plusplus": "off",
    "indent": "off",
    "vue/script-indent": ["error", 2, { baseIndent: 0 }],
    "vue/html-indent": [
      "error",
      2,
      {
        alignAttributesVertically: true,
      },
    ],
    "no-void": "off",
    "no-nested-ternary": "off",
    "vue/no-mutating-props": "off",
    "max-classes-per-file": "off",

    "import/first": "off",
    "import/named": "error",
    "import/namespace": "error",
    "import/default": "error",
    "import/export": "error",

    "prefer-promise-reject-errors": "off",
  }
}
