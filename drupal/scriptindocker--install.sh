#!/bin/bash
cd /var/www/html
composer install
cd /var/www/html/web
drush upwd admin admin