rollup 使用总结

-   packages 的每个包里的依赖单独安装
-   公共配置使用项目的根目录
    执行命令

#### install

1. install dependence

    `yarn`

2. install all dependence for packages

    `yarn bootstrap`

3. run dev

    `yarn dev`

4. run document

    `yarn storybook`

5. test

    `yarn test`

    `yarn test button`

6. use `yarn workspace` install some dependence to specifically packages

    `yarn workspace @dragon/react-button add @dragon/react-theme --dev`

-   if the internal reference is modified, you need to run `yarn run build` or `yarn run build [package name]` like `yarn run build button`.

7. build packages

    - build all packages

    `yarn build`

    - build signgole package

    `yarn build button`

8. publish

    `lerna publish --yes`

    - If can not release success last publish, you can use this comment

        `lerna publish from-package --yes`

    - Forcibly change the version of all packages, regardless of whether they are modified or not

        `lerna publish --force-publish`

9. lerna version

    - only change version but cant create tag and release tag

        `lerna version --conventional-commits --no-git-tag-version --yes`

**Method to add a new icon component**

1. Put a svg icon in the folder: public/images/svgs
2. Icon name should be in the form of icon-[name]
3. Run the following command:
   `$ npx @svgr/cli --icon --replace-attr-values "#000=currentColor" ./public/images/svgs/icon-[name].svg -d ./packages/icons/src/`
4. An React component is generated in _./components/SvgIcons/_, then you should add an export sentence in the _./components/SvgIcons/index.js_.

[More about svgr](https://react-svgr.com/docs/cli/)

### How to add local dependence

-   Lerna command

    `lerna add module-1 --scope=module-2`

    `yarn install`

### How to publish
- use `version prerelease`
    `yarn run realease` = `lerna version prerelease --yes`
- ready use `version`
    `yarn run realease` = `lerna version --yes`
