#!/usr/bin/env bash
set -e
DEPS='docker flyway node npm'
for d in $DEPS; do
    if ! command -v $d &> /dev/null
    then
        echo "$d could not be found and is required to run this scripts"
        exit
    fi
done
set -a; source .env

NODE_ENV='local' nodemon src/index.ts