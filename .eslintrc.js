module.exports = {
  'extends': [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb"
  ],
  "parser": "babel-eslint",
  'env': {
    'jest': true,
  },
  'rules': {
    "react/jsx-filename-extension": 0,
    "react/prop-types": 2,
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 1,
    "react/no-did-mount-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-did-update-set-state": 2,
    "react/jsx-uses-vars": 2,
    "no-unused-vars": 1,
    "no-undef": 2,
    "semi": 2,
    "react/jsx-no-bind": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/prefer-stateless-function": 0,
    "react/require-default-props": 2,
    "react/jsx-curly-spacing": 2,
    "react/jsx-space-before-closing": 2,
    "react/jsx-boolean-value": 0,
    "prefer-promise-reject-errors": 0,
    "no-unused-expression": 0,
    "import/no-extraneous-dependencies": 0,
    "linebreak-style": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-one-expression-per-line": 0,
    "comma-dangle": ["error", {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "ignore"
    }],
    "quotes": ["error", "double"],
    "react/jsx-indent": [2, 4],
    "arrow-body-style": 0,
    "object-curly-spacing": ["error", "never"],
    "indent": ["warn", 4],
    "max-len": ["error", { "code": 200 }],
    "react/jsx-indent-props": [2, 4],
    "react/forbid-prop-types": 0,
    "object-curly-newline": 0,
    "padded-blocks": 0,
    "no-underscore-dangle": 0,
    "react/no-array-index-key": 0,
    "no-unused-expressions": 1,
    "react/destructuring-assignment": 0,
    "no-console": 0
  },
  'globals': {
    "fetch": false
  },
  "plugins": [
    "react",
    "react-native"
  ],
  "ecmaFeatures": {
    "jsx": true
  }
}
