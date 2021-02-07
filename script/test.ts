const fsNode = require('fs')
const path = require('path')
const rawArgs = process.argv[2] // 获取包名
const readTestPackagesDir = fsNode.readdirSync('./packages') // 自动编译所有包
const testFile = process.argv[3] || '' // 获取测试文件名

const getJestOptions = (rawArgs) => {
    let rootDir = path.resolve(__dirname, '../')
    rootDir = `${rootDir}/packages/${rawArgs}` // 拼出包的路劲
    fsNode.exists(`${rootDir}/src/__test__`, function (exists) {
        console.log(rootDir, ':', exists)
        if (exists) {
            const jestArgs = [
                '--runInBand',
                '--rootDir',
                rootDir, // 传入包路径
                testFile ? `${testFile}.test.tsx` : '', //
            ] // jest 的一些配置

            console.log(`\n===> running: jest ${jestArgs.join(' ')}`)

            require('jest').run(jestArgs) // 执行
        }
    })
}

const executeTest = () => {
    if (rawArgs) {
        getJestOptions(rawArgs)
        return
    }
    readTestPackagesDir.forEach((rawArgs) => {
        getJestOptions(rawArgs)
    })
}

executeTest()
