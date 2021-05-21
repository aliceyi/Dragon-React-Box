#!/usr/bin/env bash

#set -o xtrace

source ffbuild/scripts/set_environment.sh
echo_title "Print env"
env

echo_title "Installing lerna for global"
${YARN} global add lerna

echo_title "Print lerna version"
lerna -v

echo_title "Installing dependencies"
${YARN} config set strict-ssl false
${YARN} --frozen-lockfile --non-interactive

echo_title "Install all dependence for packages"
${YARN} bootstrap

echo_title "Building"
${YARN} build-storybook

echo_title "Move project to raw folder"
mv .yarn ${FFBUILD_RAW_DIR}
mv bin ${FFBUILD_RAW_DIR}
mv config ${FFBUILD_RAW_DIR}
mv node_modules ${FFBUILD_RAW_DIR}
mv packages ${FFBUILD_RAW_DIR}
mv *.json ${FFBUILD_RAW_DIR}
mv public ${FFBUILD_RAW_DIR}
mv storybook-static ${FFBUILD_RAW_DIR}
