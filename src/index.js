import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dist/css/style.css";

import { Clock } from "three";

import { preloader } from "./avatar3d/loader";
import resolvers from "./avatar3d/loader/resolvers";
import { defaultAvatar } from "./avatar3d/config";

import {
  createDefaultContainer,
  createDefaultRenderer,
  createDefaultScene,
  createDefaultCamera,
} from "./avatar3d/factories";

import { Avatar } from "./avatar3d/objects/Avatar";

const { createResizeHandler } = require("./avatar3d/utils");

async function startApplication() {
  const container = createDefaultContainer();
  const renderer = createDefaultRenderer();
  const scene = createDefaultScene();
  const camera = createDefaultCamera();
  const clock = new Clock();

  container.appendChild(renderer.domElement);

  createResizeHandler({ renderer, camera });

  preloader.init(...resolvers);
  await preloader.load([defaultAvatar]);

  const avatar = Avatar.createDefault(renderer);
  scene.withAvatar(avatar);

  function render() {
    window.requestAnimationFrame(render);
    renderer.clear();
    renderer.render(scene.main, camera);

    const delta = clock.getDelta();
    scene.main.traverse((element) => element?.update?.(delta));
  }

  render();
}

window.onload = async function () {
  await startApplication();
};

/* GLOBAL VARIABLES */

window.$primaryLanguage = "en";
window.$secondaryLanguage = "pl";
window.$primaryLanguageIconId = "primary-lang-icon";
window.$secondaryLanguageIconId = "secondary-lang-icon";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
