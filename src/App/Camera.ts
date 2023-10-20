import { PerspectiveCamera } from 'three'

import Controls from './Controls'
import Global from './Utilities/Global'

export default class Camera {
    private readonly fieldOfView: number = 35
    private readonly nearPlane: number = 1
    private readonly farPlane: number = 300
    private readonly startPositionY: number = 60
    private readonly startPositionZ: number = 140

    private controls: Controls
    instance: PerspectiveCamera
    
    constructor() {
        this.instance = this.createInstance()
        this.controls = new Controls(this.instance, Global.canvas)
        this.setWindowResizeListener()
    }

    private createInstance(): PerspectiveCamera {
        const camera = new PerspectiveCamera(this.fieldOfView,this.calculateAspectRatio())
        this.setAdditionalProperties(camera)
        return camera
    }

    private setAdditionalProperties(camera: PerspectiveCamera): void {
        camera.near = this.nearPlane
        camera.far = this.farPlane
        camera.position.y = this.startPositionY
        camera.position.z = this.startPositionZ
    }

    private calculateAspectRatio(): number {
        return window.innerWidth / window.innerHeight
    }

    private setWindowResizeListener(): void {
        window.addEventListener('resize', () => {
            this.instance.aspect = this.calculateAspectRatio()
            this.instance.updateProjectionMatrix()
        })
    }

    onLoop(): void {
        this.controls.onLoop()
    }
}