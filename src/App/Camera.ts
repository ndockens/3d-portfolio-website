import { MathUtils, PerspectiveCamera } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import Global from './Utilities/Global'

export default class Camera {
    // Camera
    private readonly fieldOfView: number = 35
    private readonly nearPlane: number = 0.1
    private readonly farPlane: number = 200
    private readonly startPositionY: number = 70
    private readonly startPositionZ: number = 120

    // Controls
    private readonly minPolarAngleDegrees: number = 0
    private readonly maxPolarAngleDegrees: number = 90
    private readonly minAzimuthAngleDegrees: number = -90
    private readonly maxAzimuthAngleDegrees: number = 90

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
        controls.minPolarAngle = MathUtils.degToRad(this.minPolarAngleDegrees)
        controls.maxPolarAngle = MathUtils.degToRad(this.maxPolarAngleDegrees)
        controls.minAzimuthAngle = MathUtils.degToRad(this.minAzimuthAngleDegrees)
        controls.maxAzimuthAngle = MathUtils.degToRad(this.maxAzimuthAngleDegrees)

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