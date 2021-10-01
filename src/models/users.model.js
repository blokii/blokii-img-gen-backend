const NeDB = require('nedb')
const path = require('path')

// currently not used by this application, but can be used at a later date.

module.exports = function (app) {
  const dbPath = app.get('nedb')
  const Model = new NeDB({
    filename: path.join(dbPath, 'users.db'),
    autoload: true,
  })

  Model.ensureIndex({ fieldName: 'email', unique: true })

  return Model
}
