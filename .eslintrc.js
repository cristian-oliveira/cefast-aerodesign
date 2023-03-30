module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                endOfLine: 'auto',
                parser: 'typescript',
                tabWidth: 2,
                printWidth: 90,
            },
        ],
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-empty-function': 1,
        '@typescript-eslint/no-explicit-any': 'off',
        'no-console': 1,
        'react-hooks/exhaustive-deps': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-undef': 'error',
        'no-empty': 'error',
        'no-var': 'error',
        'react/display-name': 'off',
        '@next/next/no-page-custom-font': 'off',
        '@next/next/no-document-import-in-page': 'off',
        'react/jsx-curly-brace-presence': [1, { props: 'never', children: 'never' }],
        'react/no-unescaped-entities': 0,
        // 'import/no-unused-modules': [2, { unusedExports: true }],
        'no-nested-ternary': 'error',
    }
}
