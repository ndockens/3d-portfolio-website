import { PerspectiveCamera } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import Global from './Utilities/Global'

export default class Camera {
    private readonly farPlane: number = 100
    private readonly fieldOfView: number = 35
    private readonly nearPlane: number = 1
    private readonly startPositionY: number = 5
    private readonly startPositionZ: number = 10

    private controls: OrbitControls
    instance: PerspectiveCamera
    
    constructor() {
        this.instance = this.createCamera()
        this.controls = this.createControls()
        this.setWindowResizeListener()
    }

    private createCamera(): PerspectiveCamera {
        const camera = new PerspectiveCamera(
            this.fieldOfView,
            this.calculateAspectRatio(),
            this.nearPlane,
            this.farPlane
        )
        camera.position.y = this.startPositionY
        camera.position.z = this.startPositionZ

        return camera
    }

    private createControls(): OrbitControls {
        const controls = new OrbitControls(this.instance, Global.canvas)
        controls.enableDamping = true

        return controls
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
        this.controls.update()
    }
}