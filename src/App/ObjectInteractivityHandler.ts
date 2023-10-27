import { Intersection, Object3D, Object3DEventMap, Raycaster, Scene } from 'three'

import Global from './Utilities/Global';
import Pointer from './Utilities/Pointer';

export default class ObjectInteractivityHandler {
    private pointer: Pointer
    private pointerIntersects: Intersection<Object3D<Object3DEventMap>>[]
    private raycaster: Raycaster

    constructor() {
        this.pointer = new Pointer();
        this.pointerIntersects = []
        this.raycaster = new Raycaster()

        this.pointer.addMovementListener(() => {
            this.checkForIntersectionsWithObjects()
            this.updatePointerStyle()
        })
    }

    addClickListener(objectName: string, listener: () => any): void {
        window.addEventListener('click', () => {
            if (this.objectClicked(objectName))
                listener()
        })
    }

    private objectClicked(name: string): boolean {
        return this.getIntersectedObject(name) !== undefined
    }

    private getIntersectedObject(name: string): Object3D<Object3DEventMap> | undefined {
        return this.pointerIntersects.find(i => i.object.name === name)?.object
    }
    
    private checkForIntersectionsWithObjects(): void {
        this.raycaster.setFromCamera(this.pointer.position, Global.camera.instance)
        const scene: Scene = Global.world.environment.scene
        this.pointerIntersects = this.raycaster.intersectObjects(scene.children)
    }

    private updatePointerStyle(): void {
        if (this.objectClicked('Cube037_1'))
            this.pointer.setCursorStyle('pointer')
        else
            this.pointer.setCursorStyle('default')
    }
}