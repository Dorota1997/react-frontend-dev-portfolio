class Preloader {
  constructor() {
    this.resolvers = []
    this.manifest = []
  }
  /**
   * Pretty print warning messages
   * @param {...*} msgs you want to print
   */
  warn(...msgs) {
    console.warn('[Preloader]', ...msgs)
  }

  /**
   * Initialize preloader with n resolvers, a resolver is an object that will define a load behavior for a given type.
   * A resolver must be an object with a resolve method,a get method and a type
   * @param {...Resolver} resolvers array of resolvers you want to use
   */
  init(...resolvers) {
    resolvers.forEach(resolver => {
      if (!resolver.hasOwnProperty('type')) {
        this.warn('init()', 'This resolver shoud have a `type` property', resolver)
      }
      if (typeof resolver.resolve !== 'function') {
        this.warn('init()', 'This resolver should implement a `resolve` function', resolver)
      }
      if (typeof resolver.get !== 'function') {
        this.warn('init()', 'This resolver should implement a `get` function', resolver)
      }
      this.resolvers.push(resolver)
    })
  }

  /**
   * Launch the loading of the given manifest.
   * @param {Array} manifest array of object to load, each object should be composed of a type (compatible with one of the resolvers used in init), an id and an url.
   * @returns {Promise} a promise that will be resolved when everything is loaded
   */
  load(manifest, baseUrl = '/', cdn = null) {
    if (!Array.isArray(manifest)) {
      this.warn('load()', 'manifest should be an array', manifest)
    }

    // Clean urls
    manifest = manifest.map(item => {
      let url = item.url
      const isUrlBase64 = url.indexOf('data:') === 0
      const isUrlAbsolute = url.indexOf('http://') === 0 || url.indexOf('https://') === 0
      if (!isUrlAbsolute && !isUrlBase64) {
        url = item.cdn && cdn ? cdn + item.url : baseUrl + item.url
      }
      if (!isUrlBase64) {
        url += '?v=' + item.version
      }
      return Object.assign({}, item, { url })
    })

    // save manifest for later result retreivals
    this.manifest = this.manifest.concat(manifest)

    // find duplicate ids
    for (let i = 0, l = manifest.length; i < l; i++) {
      const item = manifest[i]
      let stop = false
      for (let j = 0, m = manifest.length; j < m; j++) {
        if (i !== j && manifest[j].id === item.id) {
          stop = true
          break
        }
      }
      if (stop) {
        this.warn('load()', 'This id is used twice in the manifest: `' + item.id + '`')
        break
      }
    }

    const promises = manifest.map(item => {
      const p = this.getResolverForType(item.type).resolve(item)
      if (typeof p.then !== 'function') {
        this.warn(
          'resolver for type `' +
            item.type +
            '` does not return a promise in its resolve method, check its implementation'
        )
      }
      return p
    })

    return Promise.all(promises)
  }

  /**
   * Find resolver for a given type
   * @param {String} type
   */
  getResolverForType(type) {
    const results = this.resolvers.filter(r => r.type === type)
    return results.length ? results[0] : null
  }

  /**
   * Returns a resolved content for a given item id from the manifest
   * @param {String} id item id from the manifest item
   * @param {...*} args arguments you want to pass to the resolver get method
   */
  get(id, ...args) {
    const items = this.manifest.filter(item => item.id === id)
    if (items.length) {
      const item = items[0]
      const resolver = this.getResolverForType(item.type)
      return resolver.get(item, args)
    }
    return null
  }
}

const preloader = new Preloader()

export { preloader }
