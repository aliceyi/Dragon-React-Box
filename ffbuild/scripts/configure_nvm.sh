export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

export NODE_VERSION=12.20.1

nvm install ${NODE_VERSION}
nvm use ${NODE_VERSION}

echo "Node configured to use version: ${NODE_VERSION}"
