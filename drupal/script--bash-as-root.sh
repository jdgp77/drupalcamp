#!/bin/bash
if [ "$(uname)" == "Darwin" ]
then
    docker exec -it drupalcamp_drupal_1 bash
else
    docker exec -it --user $(id -u):$(id -g) drupalcamp_drupal_1 bash
fi
