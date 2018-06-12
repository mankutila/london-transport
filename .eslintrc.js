module.exports = {
  "extends": ["eslint:recommended", "react"],
  "rules": {
    "no-new": [1],
    "react/sort-comp": [1],
    "indent": ["error", 2]
  },
  "parser": "babel-eslint",
  "env": {
    "jest": true,
    "es6": true,
    "browser": true,
    "node": true
  }
}
