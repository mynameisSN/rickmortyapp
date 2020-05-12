module.exports = {
  extends: "react-app",
  rules: {
    // indent: ['error', 2], // A custom style-related rule for example
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        outerIIFEBody: 0,
        FunctionDeclaration: { body: 1, parameters: 2 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        // flatTernaryExpressions: false,
        // offsetTernaryExpressions: false,
        ignoreComments: true,
      },
    ],
    // indent: ['error', 4, {flatTernaryExpressions: true}],

    // More custom rules here
  },
  //   overrides: [
  //     {
  //       files: ['**/*.hs?(x)'],
  //       rules: {
  //         'additional-typescript-only-rule': 'warn',
  //       },
  //     },
  //   ],
};
