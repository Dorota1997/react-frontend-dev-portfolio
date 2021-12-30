import { DOMSettings } from "../config";

// const getContainer = () => {
//   // if (DEVELOPMENT) {
//   // const container = document.createElement("div");
//   // document.body.appendChild(container);
//   // return container;
//   // } else {
//   return document.getElementById(DOMSettings.avatarDivID); // When deployed, make sure you have a div with corresponding id
//   // }
// };

export const createDefaultContainer = () => {
  // const container = getContainer();
  const container = document.getElementById(DOMSettings.avatarDivID);

  // container.style.width = DOMSettings.canvasWidth + "px";
  // container.style.height = DOMSettings.canvasHeight + "px";
  // container.style.margin = "auto";

  container.style.width = "150px";
  container.style.height = "150px";
  container.style.margin = "auto";

  return container;
};
