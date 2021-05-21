const rollup = require('rollup') // 引入rollup
const terser = require('rollup-plugin-terser').terser // 压缩代码的插件
const commonjs = require('rollup-plugin-commonjs') // rollup默认支持es6的模块系统，需要支持commonjs的话需要这个插件
const babel = require('rollup-plugin-babel') // rollup的babel 插件
const fs = require('fs')
const clear = require('rollup-plugin-clear')
// https://github.com/rollup/plugins/tree/master/packages/typescript
// cant suport declaration
// const typescript = require('@rollup/plugin-typescript')

const args = process.argv[2] // 拿到 npm run build packName 中的packName
// const projectPath = `packages/${args}` // 子包所在的路劲
const readPackagesDir = fs.readdirSync('./packages') // 自动编译所有包

const typescript = require('rollup-plugin-typescript2')
// const extensions = ['.js', '.ts', '.tsx']

// // ts
// const tsPlugin = typescript({
//     tsconfig: './tsconfig.json', // 导入本地ts配置
//     extensions,
// })
/**
 * 设置输入输出配置
 */
const getInputAndOutputConfig = (args) => {
    const projectPath = `packages/${args}`
    const readDir = fs.readdirSync(`${projectPath}/src`) // 取到src下的路径
    const mainFile = readDir.filter((item) => item.indexOf('index') !== -1) //找到编译主页面，由于每个组件功能不同输出的index.(ts|x)
    // 输入的文件配置
    const inputOptions = {
        input: `${projectPath}/src/${mainFile[0] || 'index.ts'}`, // 文件后缀问题，ts or tsx 同时存在
        external: ['react', '@emotion/stylis', '@emotion/is-prop-valid', 'stream'],
        plugins: [
            babel({
                // babel文件的设置，会读取根目录的babel.config.js文件配置
                runtimeHelpers: true,
                exclude: 'node_modules/**',
                // rollup can't support for the experiment syntax 'jsx', this is the solution link https://stackoverflow.com/questions/52884278/rollup-react-not-compiling-jsx
                presets: ['@babel/env', '@babel/preset-react'],
            }),
            commonjs(),
            terser(),
            typescript({
                include: [`${projectPath}/src/*`],
                // useTsconfigDeclarationDir: true,
                // declarationDir: `${projectPath}/dist/type`,
            }),
            clear({ targets: [`${projectPath}/lib`, `${projectPath}/es`] }),
            // tsPlugin,
        ],
    }
    // esm输出的配置
    const esmOutputOptions = {
        file: `${projectPath}/es/index.js`,
        exports: 'named',
        //http://rollupjs.org/guide/en/#command-line-flags
        format: 'esm', // 引出的方式为esm的方式
        name: `${args}`, // 输出可引用名为package的名字
    }

    // cjs输出的配置
    const cjsOutputOptions = {
        file: `${projectPath}/lib/index.js`,
        exports: 'named',
        //http://rollupjs.org/guide/en/#command-line-flags
        format: 'cjs', // 引出的方式为cjs的方式
        name: `${args}`, // 输出可引用名为package的名字
    }

    return {
        inputOptions,
        esmOutputOptions,
        cjsOutputOptions,
    }
}
const buildPackage = async (options) => {
    // create a bundle
    const bundle = await rollup.rollup(options.inputOptions) // inputOptions config setting here

    console.log(bundle.watchFiles) // an array of file names this bundle depends on

    await bundle.write(options.esmOutputOptions) // output es module

    await bundle.write(options.cjsOutputOptions) // output cjs
}

async function build() {
    if (args) {
        const options = getInputAndOutputConfig(args)
        buildPackage(options)
        return
    }
    readPackagesDir.forEach((args) => {
        const options = getInputAndOutputConfig(args)
        buildPackage(options)
    })
}

build()
