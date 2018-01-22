const error = 2,
    warn = 1,
    off = 0;
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:jest/recommended"
    ],
    // "parserOptions": {
    //     "ecmaFeatures": {
    //         "experimentalObjectRestSpread": true,
    //         "jsx": true
    //     },
    //     "sourceType": "module"
    // },
    "parser": "babel-eslint",
    "plugins": ["react", "jest"],
    "rules": {
        "indent": [error, 2],
        "linebreak-style": [error, "unix"],
        "no-console": [warn, { allow: ["warn", "error"] }],
        "quotes": [error, "single"],
        "semi": [error, "always"],
    }
};