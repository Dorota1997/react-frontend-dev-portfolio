import React, { useEffect, useState } from "react";
import { Clock } from "three";
import { preloader } from "../avatar3d/loader";
import resolvers from "../avatar3d/loader/resolvers";
import { defaultAvatar } from "../avatar3d/config";
import {
  createDefaultContainer,
  createDefaultRenderer,
  createDefaultScene,
  createDefaultCamera,
} from "../avatar3d/factories";
import { Avatar } from "../avatar3d/objects/Avatar";

const Avatar3d = () => {
  const { createResizeHandler } = require("../avatar3d/utils");

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

  useEffect(() => {
    startApplication();
  }, []);

  return <div id="3d_avatar"></div>;
};

export default Avatar3d;
