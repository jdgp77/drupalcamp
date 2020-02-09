#!/bin/bash
if [ "$(uname)" == "Darwin" ]
then
    docker exec -it drupalcamp_react_1 sh /app/scriptindocker--start-local.sh
else
    docker exec -it --user $(id -u):$(id -g) drupalcamp_react_1 sh /app/scriptindocker--start-local.sh
fi