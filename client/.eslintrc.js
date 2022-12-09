module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:vue/vue3-essential', 'standard'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        // 'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        indent: [
            'warn',
            4,
            {
                SwitchCase: 1,
            },
        ],
    },
}
