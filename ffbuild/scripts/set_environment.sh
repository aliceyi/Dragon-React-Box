source ffbuild/scripts/env.sh
source ${SCRIPTS_PATH}/echo_title.sh

echo_title "Installing NVM"
source ${SCRIPTS_PATH}/install_nvm.sh
echo_title "Configuring NVM"
source ${SCRIPTS_PATH}/configure_nvm.sh
