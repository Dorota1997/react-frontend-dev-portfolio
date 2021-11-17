import { TextureLoader } from 'three'

export class TextureResolver {
  constructor(renderer) {
    this.type = 'texture'
    this.renderer = renderer
    this.loader = new TextureLoader()
  }

  resolve(item) {
    return new Promise(resolve => {
      this.loader.load(item.url, texture => {
        if (this.renderer) {
          this.renderer.setTexture2D(texture, 0)
        }
        resolve(Object.assign(item, { texture }))
      })
    })
  }

  get(item) {
    return item.texture
  }
}
