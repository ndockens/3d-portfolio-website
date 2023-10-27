import { Vector2 } from "three";

export type PointerCursorStyle = 'default' | 'pointer'

export default class Pointer {
    position: Vector2

    constructor() {
        this.position = new Vector2()
        this.addMovementListener((e) => this.updatePosition(e))
    }

    addMovementListener(listener: (event: PointerEvent) => any): void {
        window.addEventListener('pointermove', listener)
    }

    setCursorStyle(style: PointerCursorStyle): void {
        document.body.style.cursor = style
    }

    private updatePosition(event: PointerEvent): void {
        // Calculate position using normalized device coordinates (-1 to +1)
        this.position.x = (event.clientX / window.innerWidth) * 2 - 1
        this.position.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
}