#!/usr/bin/env bash
 # exit on error
 set -o errexit

# front end build commands 
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/
# backend build commands
bundle install
bundle exec rake db:migrate db:seed
