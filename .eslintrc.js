module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['@xgfe/standard'],
  // 请保证 prettier 在最后一项，rules 中不要配置风格相关的设置，如有类似缩进类风格规则改动，请使用 prettierrc 文件修改。see https://github.com/prettier/eslint-config-prettier
  // 为什么添加：eslint-config-prettier  prettier/@typescript-eslint？ 因为 @vue/prettier，没有设置 ts 相关的 prettier。其实 @vue/prettier 使用的也是 eslint-config-prettier。
  extends: [
    'plugin:vue/essential',
    '@vue/typescript',
    '@vue/prettier',
    'prettier/@typescript-eslint'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 同一作用域里局部变量和全局变量同名  see: https://cn.eslint.org/docs/rules/no-shadow recommend 里默认关闭
    'no-shadow': 'error',
    // @vue/typescript 设置了关闭，https://github.com/typescript-eslint/typescript-eslint/issues/46
    // recommend 设置了 error，此处做最终覆盖，使用 @typescript-eslint/no-unused-vars
    'no-unused-vars': 'off',
    // 未使用变量 see: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true }
    ],
    // catch 参数可为空 https://eslint.org/docs/rules/no-empty#top
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    'vue/no-template-target-blank': [
      'error',
      {
        enforceDynamicLinks: 'always'
      }
    ],
    '@xgfe/standard/no-window-open': 'error'
  },
  parserOptions: {
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  }
};
