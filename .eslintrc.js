module.exports = {
  parser: "@typescript-eslint/parser",

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", 
    "plugin:react/recommended",
    "plugin:react-hooks/recommended", 
    "plugin:jsx-a11y/recommended", 
  ],

  settings: {
    react: {
      version: "detect", 
    },
  },

  rules: {
    // TypeScript
    "@typescript-eslint/explicit-function-return-type": "error", 
    "@typescript-eslint/no-explicit-any": "warn", 

    // React 
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off", 
    "react/prop-types": "off", 

    "no-console": "error", 
    quotes: ["error", "double"], 
    semi: ["error", "always"], 
  },

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"], 
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "error", 
      },
    },
  ],
};
