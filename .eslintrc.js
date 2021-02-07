module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'prettier/@typescript-eslint', // 使用eslint-config-prettier禁用一些与Prettier冲突的ESLint规则
        'plugin:prettier/recommended', // 启用eslint-plugin-prettier和eslint-config-prettier，使编辑器显示错误提示，确保这项是扩展数组中的最后一个配置
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended', // 使用@ typescript-eslint / eslint-plugin中的推荐规则
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {},
    settings: {
        react: {
            version: 'detect',
        },
    },
}
