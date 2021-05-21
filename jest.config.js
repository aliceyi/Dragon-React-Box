module.exports = {
    // preset: 'ts-jest',
    // testEnvironment: 'node',
    // verbose: true,
    // roots: ['<rootDir>/components'],
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
        '^components$': '<rootDir>/components/index.tsx',
        '^components(.*)$': '<rootDir>/components/$1',
    },
    // testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testPathIgnorePatterns: ['/node_modules/', '/lib/', '/esm/', '/dist/'],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/config/importJestDOM.ts'],
    // 对 ts tsx 文件使用 ts-jest 进行运行测试
    // https://jestjs.io/docs/en/ecmascript-modules
    // 对 js 文件使用 rollup-jest
    //https://github.com/ambar/rollup-jest
    transform: {
        '.(ts|tsx)': 'ts-jest',
        '\\.m?js$': 'rollup-jest',
    },
}
