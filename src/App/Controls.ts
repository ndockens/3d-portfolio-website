import { Camera, MathUtils } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Controls {
    private readonly minPolarAngleDegrees: number = 0
    private readonly maxPolarAngleDegrees: number = 90
    private readonly minAzimuthAngleDegrees: number = -90
    private readonly maxAzimuthAngleDegrees: number = 90

    private instance: OrbitControls

    constructor(camera: Camera, canvas: HTMLElement) {
        this.instance = this.createInstance(camera, canvas)
    }

    private createInstance(camera: Camera, canvas: HTMLElement): OrbitControls {
        const instance = new OrbitControls(camera, canvas)
        instance.enableDamping = true
        instance.minPolarAngle = MathUtils.degToRad(this.minPolarAngleDegrees)
        instance.maxPolarAngle = MathUtils.degToRad(this.maxPolarAngleDegrees)
        instance.minAzimuthAngle = MathUtils.degToRad(this.minAzimuthAngleDegrees)
        instance.maxAzimuthAngle = MathUtils.degToRad(this.maxAzimuthAngleDegrees)

        return instance
    }

    onLoop(): void {
        this.instance.update()
    }
}