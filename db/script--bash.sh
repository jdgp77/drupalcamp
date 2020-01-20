#!/bin/bash
if [ "$(uname)" == "Darwin" ]
then
    docker exec -it drupalcamp_db_1 bash
else
    docker exec -it --user $(id -u):$(id -g) bash
fi

