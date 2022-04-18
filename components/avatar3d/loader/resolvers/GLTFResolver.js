import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export class GLTFResolver {
  constructor() {
    this.type = 'gltf'
    this.loader = new GLTFLoader()
  }

  resolve(item) {
    return new Promise(resolve => {
      this.loader.load(item.url, scene => {
        resolve(Object.assign(item, { scene }))
      })
    })
  }

  get(item) {
    return item.scene
  }
}
