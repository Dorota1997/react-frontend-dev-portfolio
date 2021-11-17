import { WebGLRenderer, sRGBEncoding } from "three";
import { RendererSettings, DOMSettings } from "../config";

export const createDefaultRenderer = () => {
  const renderer = new WebGLRenderer(RendererSettings);
  renderer.physicallyCorrectLights = true;
  renderer.outputEncoding = sRGBEncoding;
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(DOMSettings.canvasWidth, DOMSettings.canvasHeight);

  return renderer;
};
