import { Vector2, EventDispatcher } from "three";
import { remap } from "../utils";

export default class CursorTracker extends EventDispatcher {
  constructor(element) {
    super();
    this.element = element;
    this.lastClientPosition = this.getElementCenterPositionPx();
    this.mousePosition = this.getCurrentMousePosition();

    document.addEventListener("mousemove", this.onDocumentMouseMove.bind(this));
    document.addEventListener("scroll", this.onDocumentScroll.bind(this));
  }

  onDocumentMouseMove(event) {
    event.preventDefault();

    const { clientX, clientY } = event;
    this.lastClientPosition = new Vector2(clientX, clientY);

    this.mousePosition = this.getCurrentMousePosition();
    this.getDeltaToMouse();
  }

  onDocumentScroll(event) {
    this.mousePosition = this.getCurrentMousePosition();
    this.getDeltaToMouse();
  }

  getCurrentMousePosition() {
    const { x, y } = this.lastClientPosition;
    const { scrollX, scrollY, innerWidth, innerHeight } = window;

    const mouseX = ((x + scrollX) / innerWidth) * 2 - 1;
    const mouseY = -((y + scrollY) / innerHeight) * 2 + 1;

    const mousePosition = new Vector2(mouseX, mouseY);
    super.dispatchEvent({ type: "mouseposition", data: mousePosition });

    return mousePosition;
  }

  getDeltaToMouse() {
    if (!this.mousePosition || !this.element) {
      return;
    }

    const elementCenterPosition = this.getElementCenterPosition();
    const deltaToMouse = new Vector2();
    deltaToMouse.subVectors(this.mousePosition, elementCenterPosition);
    super.dispatchEvent({ type: "deltaToMouse", data: deltaToMouse });

    return deltaToMouse;
  }

  getElementCenterPosition() {
    const elementPos = this.getElementCenterPositionPx();
    const centerX = remap({
      value: elementPos.x,
      low1: 0,
      low2: -1,
      high1: window.innerWidth,
      high2: 1,
    });

    const centerY = -remap({
      value: elementPos.y,
      low1: 0,
      low2: -1,
      high1: window.innerHeight,
      high2: 1,
    });

    return new Vector2(centerX, centerY);
  }

  getElementCenterPositionPx() {
    const { left, top } = this.element.getBoundingClientRect();
    const { pageXOffset, pageYOffset } = window;

    return new Vector2(
      left + pageXOffset + this.element.clientWidth / 2,
      top + pageYOffset + this.element.clientHeight / 2
    );
  }
}
