#!/bin/bash

echo "Provisioning virtual machine..."
apt-get update

echo "Installing MySQL..."
apt-get install debconf-utils -y > /dev/null
debconf-set-selections <<< "mysql-server mysql-server/root_password password v3gg13s"
debconf-set-selections <<< "mysql-server mysql-server/root_password_again password v3gg13s"
apt-get install mysql-server -y > /dev/null

echo "Creating Database..."
mysql --user="root" --password="v3gg13s" --execute="CREATE DATABASE localfood;"

echo "Adding MySQL user..."
mysql --user="root" --password="v3gg13s" --execute="CREATE USER 'localfooduser'@'localhost' IDENTIFIED BY 'v3gg13s';"
mysql --user="root" --password="v3gg13s" --execute="GRANT ALL PRIVILEGES ON localfood.* TO 'localfooduser'@'localhost';";
mysql --user="root" --password="v3gg13s" --execute="FLUSH PRIVILEGES;"

echo "Installing Node v6.11.0..."
curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
source nodesource_setup.sh
apt-get install nodejs

echo "Adding .env file..."
echo "DB_NAME=localfood" >> /vagrant/.env
echo "DB_USER=localfooduser" >> /vagrant/.env
echo "DB_PASS=v3gg13s" >> /vagrant/.env
