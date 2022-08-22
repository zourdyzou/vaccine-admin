module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['next', 'next/core-web-vitals'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['@typescript-eslint', 'jsx-a11y'],
    rules: {
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                groups: [
                    ['builtin', 'external'],
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    // This is used for assets and styles, since `import/order` doesn't allow custom group names
                    'unknown',
                ],
                'newlines-between': 'always',
                pathGroups: [
                    {
                        pattern: '*.{svg|png|jpg|jpeg}',
                        patternOptions: { matchBase: true },
                        group: 'unknown',
                        position: 'before',
                    },
                    {
                        pattern: '@/public/images/**',
                        group: 'unknown',
                        position: 'before',
                    },
                    {
                        pattern: '*.scss',
                        patternOptions: { matchBase: true },
                        group: 'unknown',
                        position: 'after',
                    },
                    // For some reason, `*.{scss|css}` makes the config not working as expected
                    {
                        pattern: '*.css',
                        patternOptions: { matchBase: true },
                        group: 'unknown',
                        position: 'after',
                    },
                    {
                        pattern: '@/**',
                        group: 'internal',
                    },
                ],
            },
        ],

        // next/links breaks this rule
        'jsx-a11y/anchor-is-valid': 'off',
    },
    overrides: [
        {
            files: ['pages/**'],
            rules: {
                // Next.js needs default exports for pages and API points
                'import/no-default-export': 'off',
                // Next.js `getServerSideProps` has a quite complex type, so it's safer to define it as a const
                // and have the `GetServerSideProps<P>` type applied to it for better type safety
                'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
            },
        },
    ],
};
