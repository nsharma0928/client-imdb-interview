# Welcome to the Whiteboard Interview

This  will serve as a live coding session during which you'll receive a limited backend service in addition to a very limited client side application. Your requirements will be to complete tasks within the provided system. 

## Project Structure
* client
  * quasar SPA application: https://v1.quasar-framework.org/
* server
  * sails js REST server: https://sailsjs.com/

## Current Sate of Application

### Backend

The backend sailsjs application has been built to provide a on disk database and a REST API to acess IMDB data. The first time the application is run, it will parse and load all the data. It may take a moment for everything to load. 

The API can be accessed via http://localhost:1337/api/rest/*

There are 4 Models:
* Genre
* Movie
* Rating
* User

A blueprint API has been used through sails and can be accessed as described here: https://sailsjs.com/documentation/reference/blueprint-api

As an example: GET /api/rest/genres?limit=50&skip=50

### Frontend

The frontend quasar application currently contains the boilerplate structure for a new 1.0 beta quasar project. You can read more about quasar and all it has to offer at the link provided above. However, the important thing to know is that it's a VueJS Client Framework that provides an incredible set of components along with a great tool set for many types of projects (including cordova). 

The first time you run the project you'll see a root page containing a list of users that will be loaded via the backend api. It does this in a slighly opinionated manner and can be referenced as a template for further work during the interview. 

## Setup Instructions

* `npm install -g @quasar/cli`
* `npm install -g sails`
* `npm install -g yarn`
* `cd client && yarn install`
* `cd server && yarn install`
* `cd server && sails lift`
  * select 'alter' the first time you run the application for the migration step
  * subsequent runs can specify 'safe' so the data is kept
* `cd client && quasar dev`

After these steps are complete the application should run and you should see a list of users. 

### TODO
* come up with list of interview questions