#!/bin/bash
if [ "$(uname)" == "Darwin" ]
then
    docker exec -it drupalcamp_react_1 sh /app/scriptindocker--install.sh
else
    docker exec -it drupalcamp_react_1 sh /app/scriptindocker--install.sh
    sudo chown $(id -u):$(id -g) -R node_modules
fi