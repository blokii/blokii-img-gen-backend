// Initializes the `unsplash/track` service on path `/unsplash/track`
const { Track } = require('./track.class');
const hooks = require('./track.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/unsplash/track', new Track(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('unsplash/track');

  service.hooks(hooks);
};
