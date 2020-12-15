module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],  //强制一致的缩进风格
    eqeqeq: [2, "always"],   // 必须使用全等
    "no-undef": 0,  //不允许未声明的变量
    "no-unexpected-multiline": 2,  //避免多行表达式
    "no-unused-vars": 0,  //不允许有声明后未使用的变量或者参数
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
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
