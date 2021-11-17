export const defaultAvatar = {
  id: "avatar",
  type: "gltf",
  url: "sean-avatar.glb",
};

// To see available morph targets and animations, view your avatar on: https://gltf-viewer.donmccurdy.com/
export const AvatarSettings = {
  isTrackCursor: true,
  isAutoAnimated: true,
  isAutoMorphAnimated: true,
  morphTargets: [
    {
      key: "mouthOpen",
      targetValue: 0.6,
    },
    {
      key: "mouthLeft",
    },
    {
      key: "browOuterUpRight",
    },
    {
      key: "eyeBlinkRight",
      targetValue: 1,
      transition: 100,
      duration: 100,
    },
    {
      key: "mouthPressRight",
    },
  ],
  defaultAnimation: "idle_eyes",
};

export const DOMSettings = {
  avatarDivID: "3d_avatar", // <- make sure you have a div with this id when deploying
  canvasWidth: 300,
  canvasHeight: 300,
};

export const RendererSettings = {
  alpha: true,
  antialias: true,
};
