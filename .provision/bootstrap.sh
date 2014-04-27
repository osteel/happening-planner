#!/usr/bin/env bash

# update stuff
sudo apt-get update

# vim
sudo apt-get -y install vim

# git
sudo apt-get install -y git-core

# node.js & npm
sudo apt-get install -y python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install -y nodejs

# grunt
sudo npm install -g grunt-cli

# bower
sudo npm install -g bower

# karma
sudo npm install -g karma-cli

# phantomjs
# one should check if there is a newer version http://phantomjs.org/download.html
# this assumes that /usr/local/bin/ is in $PATH
# inspired by http://stackoverflow.com/questions/8778513/how-can-i-setup-run-phantomjs-on-ubuntu
wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.7-linux-i686.tar.bz2
tar xjf phantomjs-1.9.7-linux-i686.tar.bz2
sudo mv phantomjs-1.9.7-linux-i686/bin/phantomjs /usr/local/bin/
rm -rf phantomjs-1.9.7-linux-i686
rm phantomjs-1.9.7-linux-i686.tar.bz2

# necessary for phantomjs
sudo apt-get install -y fontconfig

# symlink /var/www => /vagrant
ln -s /vagrant /var/www

# change current directory
cd /var/www

# the rest of the npm packages
# --no-bin-links is used to prevent the creation of symlinks, which don't work
# on shared folders between Linux and Windows
# this will also run bower install (as a postinstall script)
npm install --no-bin-links --unsafe-perm