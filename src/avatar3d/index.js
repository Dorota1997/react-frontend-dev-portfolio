// import { Clock } from "three";

// import { preloader } from "./loader";
// import resolvers from "./loader/resolvers";
// import { defaultAvatar } from "./config";

// import {
//   createDefaultContainer,
//   createDefaultRenderer,
//   createDefaultScene,
//   createDefaultCamera,
// } from "./factories";

// import { Avatar } from "./objects/Avatar";

// const { createResizeHandler } = require("./utils");

// async function startApplication() {
//   const container = createDefaultContainer();
//   const renderer = createDefaultRenderer();
//   const scene = createDefaultScene();
//   const camera = createDefaultCamera();
//   const clock = new Clock();

//   container.appendChild(renderer.domElement);

//   createResizeHandler({ renderer, camera });

//   preloader.init(...resolvers);
//   await preloader.load([defaultAvatar]);

//   const avatar = Avatar.createDefault(renderer);
//   scene.withAvatar(avatar);

//   function render() {
//     window.requestAnimationFrame(render);
//     renderer.clear();
//     renderer.render(scene.main, camera);

//     const delta = clock.getDelta();
//     scene.main.traverse((element) => element?.update?.(delta));
//   }

//   render();
// }

// window.onload = async function () {
//   await startApplication();
// };

