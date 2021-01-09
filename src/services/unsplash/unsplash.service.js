// Initializes the `unsplash` service on path `/unsplash`
const { Unsplash } = require('./unsplash.class')
const hooks = require('./unsplash.hooks')

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate'),
  }

  // Initialize our service with any options it requires
  app.use('/unsplash', new Unsplash(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('unsplash')

  service.hooks(hooks)
}
