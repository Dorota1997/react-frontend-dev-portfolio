import { Scene, AmbientLight, DirectionalLight, SpotLight } from "three";

export class SceneBuilder {
  constructor() {
    this.main = new Scene();
  }

  withAmbientLight() {
    this.ambientLight = new AmbientLight(0x222222);
    this.ambientLight.intensity = 5;
    this.main.add(this.ambientLight);
    return this;
  }

  withBackLight() {
    this.backLight = new DirectionalLight(0xffffff);
    this.backLight.position.set(-4.187, 0.839, -5.601);
    this.backLight.intensity = 4;

    this.main.add(this.backLight);
    return this;
  }

  withFillLight() {
    this.fillLight = new DirectionalLight(0xffffff);
    this.fillLight.position.set(2.78, 0.942, 2.727);
    this.fillLight.intensity = 2;

    this.main.add(this.fillLight);
    return this;
  }

  withKeyLight() {
    this.keyLight = new SpotLight(0xffffff);
    this.keyLight.position.set(-2.268, 2.076, 5);
    this.keyLight.intensity = 12;
    // keyLight.angle = 0.314;
    this.main.add(this.keyLight);
    return this;
  }

  withAvatar(avatar) {
    this.main.add(avatar);

    if (this.backLight) {
      this.backLight.target = avatar.headMesh;
    }
    if (this.keyLight) {
      this.keyLight.target = avatar.headMesh;
    }
    if (this.fillLight) {
      this.fillLight.target = avatar.headMesh;
    }
    return this;
  }

  build() {
    return this.main;
  }
}
