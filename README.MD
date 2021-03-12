rollup 使用总结

-   packages 的每个包里的依赖单独安装
-   公共配置使用项目的根目录
    执行命令

```
npm run test:rollup dragon-button

npm run build:rollup dragon-button

```

#### install

1. install dependence
   yarn

2. install all dependence for packages
   yarn bootstrap

3. run dev
   yarn dev

4. run document
   yarn storybook

5. test
   yarn test
   yarn test dragon-button

6. use `yarn workspace` install some dependence to specifically packages

yarn workspace @dragon/dragon-button add jest-styled-components --dev

6. build packages

build all packages
yarn build

build signgole package
yarn build dragon-button

7. publish
   lerna publish --yes

    - If can not release success last publish, you can use this comment
      lerna publish from-package --yes

    - Forcibly change the version of all packages, regardless of whether they are modified or not
      lerna publish --force-publish
    - explicitly publish packages tagged in the current commit
      lerna publish from-git

8. \*\*
