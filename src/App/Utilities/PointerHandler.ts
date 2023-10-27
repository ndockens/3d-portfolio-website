import { Intersection, Object3D, Object3DEventMap, Raycaster, Scene, Vector2 } from 'three'

import Global from './Global';

export default class PointerHandler {
    private pointer: Vector2
    private pointerIntersects: Intersection<Object3D<Object3DEventMap>>[]
    private raycaster: Raycaster

    constructor() {
        this.pointer = new Vector2();
        this.pointerIntersects = []
        this.raycaster = new Raycaster()

        window.addEventListener('pointermove', (e) => {
            this.updatePointerPosition(e)
            this.checkForIntersectionsWithObjects()
            this.updatePointerStyle()
        })
    }

    isTouchingObject(name: string): boolean {
        return this.getIntersectedObject(name) !== undefined
    }

    private getIntersectedObject(name: string): Object3D<Object3DEventMap> | undefined {
        return this.pointerIntersects.find(i => i.object.name === name)?.object
    }

    private updatePointerPosition(event: PointerEvent): void {
        // Calculate position using normalized device coordinates (-1 to +1)
        this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1
        this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
    
    private checkForIntersectionsWithObjects(): void {
        this.raycaster.setFromCamera(this.pointer, Global.camera.instance)
        const scene: Scene = Global.world.environment.scene
        this.pointerIntersects = this.raycaster.intersectObjects(scene.children)
    }

    private updatePointerStyle(): void {
        if (this.isTouchingObject('Cube037_1'))
            document.body.style.cursor = 'pointer'
        else
            document.body.style.cursor = 'default'
    }
}