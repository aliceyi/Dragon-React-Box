rollup 使用总结

-   packages 的每个包里的依赖单独安装
-   公共配置使用项目的根目录
    执行命令

```
npm run test:rollup button

npm run build:rollup button
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
   yarn test button

6. use `yarn workspace` install some dependence to specifically packages

yarn workspace @dragon/react-button add @dragon/react-theme --dev

-   if the internal reference is modified, you need to run `yarn run build` or `yarn run build [package name]` like `yarn run build button`.

1. build packages

build all packages
yarn build

build signgole package
yarn build button

1. publish
   lerna publish --yes

    - If can not release success last publish, you can use this comment
      lerna publish from-package --yes

    - Forcibly change the version of all packages, regardless of whether they are modified or not
      lerna publish --force-publish

2. lerna version

-   only change version but cant create tag and release tag
    lerna version --conventional-commits --no-git-tag-version --yes
