Crown PoS Explorer - 1.7.0 - prerequisites
==========================================

If you don't have them installed already, follow these steps to get MongoDB,
node.js and some ancilliary packages installed.
I'm going to assume you have already installed Crown
(or whatever wallet you want to use the explorer with).

## Install MongoDB

    $ sudo apt-get install mongodb

This installs and starts the MongoDB server. You can check the server status
by

    $ sudo service mongodb status

If it's running you'll see something like
```
* mongodb.service - An object/document-oriented database
   Loaded: loaded (/lib/systemd/system/mongodb.service; enabled; vendor preset: 
   Active: active (running) since Mon 2019-06-03 11:28:40 UTC; 5h 39min ago
     Docs: man:mongod(1)
 Main PID: 26325 (mongod)
   CGroup: /system.slice/mongodb.service
           `-26325 /usr/bin/mongod --config /etc/mongodb.conf

Jun 03 11:28:40 Crown-Testnet systemd[1]: Started An object/document-oriented da
```
If you need to start it you can enter

    $ sudo service mongodb start

## Install ancilliary stuff

You need some packages installed to be able to be able to complete all the
other steps, specifically curl, gcc, g++, make, libkrb5-dev

    $ sudo apt-get install -y curl gcc g++ make libkrb5-dev

## Install node.js

There are lots of places on the internet which purport to tell you how to 
install node.js and lots of them are outdated and just plain wrong.
What you need to do is

    $ sudo su -
    # curl -sL https://deb.nodesource.com/setup_10.x | bash -
    # apt-get install -y nodejs
    # exit


You now have all the pre-requisites needed to complete the explorer
installation, as described in READE.md.
