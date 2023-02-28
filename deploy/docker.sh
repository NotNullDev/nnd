#!/bin/bash

set -e # exit on command fail
set -u # exit on undefined variable name
set -x # print before execute

CI_COMMIT_SHA=$(git rev-parse --short HEAD)
image_name="gitea.notnulldev.com/notnulldev/nnd"

docker build -t ${image_name}:${CI_COMMIT_SHA} .
docker tag $image_name:${CI_COMMIT_SHA} ${image_name}:latest

docker push ${image_name}:${CI_COMMIT_SHA}
docker push ${image_name}:latest