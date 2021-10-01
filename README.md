# Blokii Image Maker

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

### Project Notes

#### Unsplash API

As per Unsplash's API Guidelines, this app requires an access key for using their API. This access key is retrieved as an environment variable that should be available at runtime. To learn more about creating an access key, see the [Unsplash Developers API Guidelines](https://unsplash.com/developers).

### CRUD

To demonstrate basic crud functionality, this project allows creating, listing, and deleting of images created to the server. The service framework used is [FeathersJS](https://docs.feathersjs.com/api/services.html).

This project uses socket.io to communicate with the server. Though if using the rest implementation, the following available API endpoints would include the following:

```
GET      /unsplash (get images from unsplash, proxies a request)
GET      /unsplash/track (sends a tracking request to unsplash per dev guidelines)
GET      /images (retrieves images)
GET      /images/:id (retrieves image by id)
POST     /images (creates new record image)
DELETE   /image/:id (delete image by id)
```

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

   ```
   cd path/to/do-feathers
   npm install
   ```

3. Start your app

   ```
   npm start
   ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

### Blokii Image Maker Project Notes

This project does not use authentication, but if it were to eventually implement authentication, the secret key would need to be changed since it is open source.
