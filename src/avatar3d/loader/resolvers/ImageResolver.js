export class ImageResolver {
  constructor() {
    this.type = 'image'
  }

  resolve(item) {
    return new Promise(resolve => {
      const image = new Image()
      image.onload = () => {
        resolve(Object.assign(item, { image }))
      }
      image.src = item.url
    })
  }

  get(item) {
    return item.image
  }
}
