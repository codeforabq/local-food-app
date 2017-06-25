# local-food-app
App to create easy access to local food sources for restaurants and individuals

## Installation
You're going to want to make sure you have Vagrant (https://www.vagrantup.com/) installed in order to make this work.

Once you have it installed, go ahead and run `vagrant up` from this directory to get the vagrant box setup, followed by `vagrant ssh` to enter the box.

Next, cd to `/vagrant` inside the box and run the following commands

- `npm install`
- `node index.js`

For Windows users you need to type `npm install --no-bin-links` instead, in reference to this error https://github.com/npm/npm/issues/9901

Your site will be running on `localhost:3000`
