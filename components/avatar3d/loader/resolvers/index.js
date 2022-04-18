import { GLTFResolver } from "./GLTFResolver";
import { ImageResolver } from "./ImageResolver";
import { TextureResolver } from "./TextureResolver";

const resolvers = [
  new ImageResolver(),
  new GLTFResolver(),
  new TextureResolver(),
];

export default resolvers;
