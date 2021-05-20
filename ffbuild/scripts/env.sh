export APP_NAME="$(cut -d'_' -f3 <<<"$BLUEPRINT_NAME")"
export APP_PATH=modules/${APP_NAME}
export SCRIPTS_PATH=ffbuild/scripts
export YARN=.yarn/releases/yarn-1.22.5.js