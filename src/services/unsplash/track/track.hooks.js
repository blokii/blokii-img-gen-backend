const commons = require('feathers-hooks-common')
const disallow = commons.disallow

module.exports = {
  before: {
    all: [],
    find: [],
    get: [disallow],
    create: [disallow],
    update: [disallow],
    patch: [disallow],
    remove: [disallow],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
}
