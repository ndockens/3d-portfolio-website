import { Intersection, Object3D, Object3DEventMap, Raycaster, Scene } from 'three'

import Global from './Utilities/Global';
import Pointer from './Utilities/Pointer';

export default class ObjectInteractivityHandler {
    private objectIntersects: Intersection<Object3D<Object3DEventMap>>[]
    private pointer: Pointer
    private raycaster: Raycaster
    private scene: Scene

    constructor() {
        this.objectIntersects = []
        this.pointer = new Pointer();
        this.raycaster = new Raycaster()
        this.scene = Global.world.environment.scene

        this.pointer.addMovementListener(() => {
            this.updateObjectIntersects()
            this.updatePointerStyle()
        })
    }

    addClickListener(objectName: string, listener: () => any): void {
        window.addEventListener('click', () => {
            if (this.objectClicked(objectName))
                listener()
        })
    }
    
    private updateObjectIntersects(): void {
        this.raycaster.setFromCamera(this.pointer.position, Global.camera.instance)
        this.objectIntersects = this.raycaster.intersectObjects(this.scene.children)
    }

    private updatePointerStyle(): void {
        if (this.objectClicked('Cube037_1'))
            this.pointer.setCursorStyle('pointer')
        else
            this.pointer.setCursorStyle('default')
    }

    private objectClicked(name: string): boolean {
        return this.getIntersectedObject(name) !== undefined
    }

    private getIntersectedObject(name: string): Object3D<Object3DEventMap> | undefined {
        return this.objectIntersects.find(i => i.object.name === name)?.object
    }
}