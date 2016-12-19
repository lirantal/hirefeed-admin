# Hirefeed Admin Webapp

This repository serves as the codebase for the admin dashboard to manage hirefeed accounts.

## Project Architecture

The server and client are separated into different projects and components within a single repository. This separation
of concerns allows better agility and freedom in making bleeding edge changes which would otherwise require strong
coupling between the two projects.

Consider this: traditional MEAN stacks would build the Node.js and Angular.js together as a streamlined single entity of
a Gulp or Grunt file. That architecture inherently couples the two projects.

This project's architecture thus provides

## Project Structure

Server and client projects are separated into the following:
* `server/` - A Node.js based REST API
* `client/` - A React-Redux frontend based on Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app) generator.
 
## Running

@TODO Ideally there would be a package.json in the root project's directory that will use concurrently to being up both services in `server/` and `client/`, but until then:

Run the client project:

```
cd client/
npm start
```

Run the server project as follows to seed the database with default users so you can login to the webapp, and set it to run on port 4000 because webpack-dev-server is already taking up port 3000 for the client project:

```
cd server/
MONGO_SEED=true PORT=4000 npm start
```


