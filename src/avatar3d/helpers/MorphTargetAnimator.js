import { EventEmitter } from "events";
// import { promisify } from "util";
import { MathUtils } from "three";

import * as TWEEN from "es6-tween";
import { shuffle, sleep } from "../utils";

class MorphTargetAnimator extends EventEmitter {
  constructor({ mesh }) {
    super();
    this.mesh = mesh;

    this.morphTargets = [];
    TWEEN.autoPlay(true);
  }

  async animate(key) {
    return new Promise((resolve, reject) => {
      const morphTargetParams = this.morphTargets.find((item) => {
        return item.key === key;
      });
      const morphTargetIndex = this.mesh.morphTargetDictionary[key];

      if (morphTargetParams) {
        const { transition, targetValue, duration } = morphTargetParams;
        const currentValue = {
          v: this.mesh.morphTargetInfluences[morphTargetIndex],
        };

        this.tween = new TWEEN.Tween(currentValue)
          .to({ v: targetValue }, transition)
          .on("update", () => {
            this.mesh.morphTargetInfluences[morphTargetIndex] = currentValue.v;
          })
          .on("complete", () => {
            resolve();
          })
          .repeat(1)
          .delay(duration)
          .yoyo(true)
          .easing(TWEEN.Easing.Cubic.InOut)
          .start();
      }
    });
  }

  async autoAnimate({ minInterval, maxInterval }) {
    const shuffledArray = shuffle(this.morphTargets);

    for (const element of shuffledArray) {
      await this.animate(element.key);
      await sleep(MathUtils.randInt(minInterval, maxInterval));
    }

    this.emit("complete");
  }

  stop() {
    this.morphTarget = 0;
  }

  add({ key, targetValue = 1, transition = 1000, duration = 2000 }) {
    this.morphTargets.push({ key, targetValue, transition, duration });
  }

  addRange(morphParams) {
    morphParams.forEach((morthTarget) => {
      this.add(morthTarget);
    });
  }

  getRandomParamKey() {
    const randomKeyIndex = Math.floor(Math.random() * this.morphTargets.length);
    return this.morphTargets[randomKeyIndex]?.key;
  }

  remove(key) {
    this.morphTargets = this.morphTargets.filter((item) => item.key !== key);
  }
}

export default MorphTargetAnimator;
