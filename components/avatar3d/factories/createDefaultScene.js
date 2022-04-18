import { SceneBuilder } from "../builders";

export const createDefaultScene = () => {
  return new SceneBuilder()
    .withAmbientLight()
    .withBackLight()
    .withFillLight()
    .withKeyLight();
};
