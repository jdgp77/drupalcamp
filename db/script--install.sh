#!/bin/bash
if [ "$(uname)" == "Darwin" ]
then
    docker exec -it drupalcamp_db_1 sh var/mysql/backups/scriptindocker--updatedb.sh
else
    docker exec -it --user $(id -u):$(id -g) drupalcamp_db_1 sh var/mysql/backups/scriptindocker--updatedb.sh
fi

