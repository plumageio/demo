#!/usr/bin/env bash

DEPLOY_SRC='.'
DEPLOY_PATH='/var/www/plumage.io/html/demo/'

rsync --progress --recursive --delete --checksum --exclude 'deploy.sh' --exclude '.git' --exclude 'readme.md' --chown="$DEPLOY_OWNER:$DEPLOY_OWNERGROUP" $DEPLOY_SRC "$DEPLOY_USER@$DEPLOY_SERVER":$DEPLOY_PATH
