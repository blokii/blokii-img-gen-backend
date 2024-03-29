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
