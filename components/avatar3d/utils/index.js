import { DOMSettings } from "../config";

export const createResizeHandler = ({ renderer, camera }) => {
  function onResize() {
    camera.aspect = DOMSettings.canvasWidth / DOMSettings.canvasHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(DOMSettings.canvasWidth, DOMSettings.canvasHeight);
  }

  /* Various event listeners */
  window.addEventListener("resize", onResize);
};

export const shuffle = (collection) => {
  return collection
    .map((item) => ({
      sort: Math.random(),
      value: item,
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.value);
};

export const remap = ({ value, low1, low2, high1, high2 }) => {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
};

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
