import { PerspectiveCamera } from "three";
import { DOMSettings } from "../config";

export const createDefaultCamera = () => {
  const aspect = DOMSettings.canvasWidth / DOMSettings.canvasHeight;

  const camera = new PerspectiveCamera(50, aspect, 0.1, 1000);
  camera.position.y = 0.6;
  camera.position.z = 0.5;
  camera.aspect = DOMSettings.canvasWidth / DOMSettings.canvasHeight;
  camera.updateProjectionMatrix();

  return camera;
};
