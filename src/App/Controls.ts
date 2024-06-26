import { Camera, MathUtils, Vector3 } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Controls {
    // private readonly minDistance: number = 80
    private readonly maxDistance: number = 200
    private readonly minPolarAngleDegrees: number = 30
    private readonly maxPolarAngleDegrees: number = 90
    private readonly minAzimuthAngleDegrees: number = -45
    private readonly maxAzimuthAngleDegrees: number = 45

    readonly initialTarget = new Vector3(0, 10, 0)

    instance: OrbitControls

    constructor(camera: Camera, canvas: HTMLElement) {
        this.instance = this.createInstance(camera, canvas)
    }

    onLoop(): void {
        this.instance.update()
    }

    private createInstance(camera: Camera, canvas: HTMLElement): OrbitControls {
        const controls = new OrbitControls(camera, canvas)
        this.setAdditionalProperties(controls)
        return controls
    }

    private setAdditionalProperties(controls: OrbitControls): void {
        controls.enableDamping = true
        controls.target.copy(this.initialTarget)
        // controls.minDistance = this.minDistance
        controls.maxDistance = this.maxDistance
        controls.minPolarAngle = MathUtils.degToRad(this.minPolarAngleDegrees)
        controls.maxPolarAngle = MathUtils.degToRad(this.maxPolarAngleDegrees)
        controls.minAzimuthAngle = MathUtils.degToRad(this.minAzimuthAngleDegrees)
        controls.maxAzimuthAngle = MathUtils.degToRad(this.maxAzimuthAngleDegrees)
    }
}