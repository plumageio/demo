#!/usr/bin/env bash

DEPLOY_SRC='.'
DEPLOY_PATH='/var/www/plumage.io/html/demo/'

rsync --recursive --delete --exclude 'deploy.sh' --checksum --chown="$DEPLOY_OWNER":"$DEPLOY_OWNERGROUP" $DEPLOY_SRC "$DEPLOY_USER"@"$DEPLOY_SERVER":$DEPLOY_PATH
