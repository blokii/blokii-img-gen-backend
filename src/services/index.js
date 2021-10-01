const users = require('./users/users.service.js')
const unsplash = require('./unsplash/unsplash.service.js')
const images = require('./images/images.service.js')
const unsplashTrack = require('./unsplash/track/track.service.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users)
  app.configure(unsplash)
  app.configure(images)
  app.configure(unsplashTrack)
}
