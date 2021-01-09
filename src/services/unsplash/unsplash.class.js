const unsplash = require('unsplash-js')
const fetch = require('node-fetch')

/* eslint-disable no-unused-vars */
exports.Unsplash = class Unsplash {
  constructor(options) {
    this.options = options || {}
    this.serverApi = unsplash.createApi({
      accessKey: process.env.UNSPLASH_ACCESS,
      fetch: fetch,
    })
  }

  async find(params) {
    let data = params.query
    if (data.action === 'trackPhoto') {
      const results = await this.trackPhoto(params)
      return results
    } else {
      let opts = {
        query: data ? data.query : 'technology',
        page: data ? data.page : 1,
        perPage: data ? data.per_page : 6,
        orderBy: 'latest',
        orientation: data ? data.orientation : 'landscape',
      }
      const results = await this.serverApi.search.getPhotos(opts)
      return results
    }
  }

  async trackPhoto(params) {
    let data = params.query
    if (data && data.download_location) {
      const result = await this.serverApi.photos.trackDownload({
        downloadLocation: data.download_location,
      })
      return result
    }
  }

  /**
   * No need to implement any other functions for the time being.
   * @param {*} id
   * @param {*} params
   */

  async get(id, params) {
    const result = {}
    return result
  }

  async create(data, params) {
    // do nothing
    return {}
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
