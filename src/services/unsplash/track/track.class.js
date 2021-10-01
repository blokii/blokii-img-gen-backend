const unsplash = require('unsplash-js')
const fetch = require('node-fetch')

/* eslint-disable no-unused-vars */
exports.Track = class Track {
  constructor(options) {
    this.options = options || {}
    this.serverApi = unsplash.createApi({
      accessKey: process.env.UNSPLASH_ACCESS,
      fetch: fetch,
    })
  }

  async find(params) {
    let data = params.query
    if (data && data.download_location) {
      const result = await this.serverApi.photos.trackDownload({
        downloadLocation: data.download_location,
      })
      return result
    }
    return {}
  }

  // no implementation needed for other methods

  async get(id, params) {
    return {}
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map((current) => this.create(current, params)))
    }

    return data
  }

  async update(id, data, params) {
    return data
  }

  async patch(id, data, params) {
    return data
  }

  async remove(id, params) {
    return { id }
  }
}
