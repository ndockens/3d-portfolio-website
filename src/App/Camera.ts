import { PerspectiveCamera, Vector3 } from 'three'
import * as TWEEN from '@tweenjs/tween.js'

import Controls from './Controls'
import Global from './Utilities/Global'

export default class Camera {
    private readonly fieldOfView: number = 35
    private readonly nearPlane: number = 1
    private readonly farPlane: number = 300
    private readonly startPosition: Vector3 = new Vector3(0, 60, 140)
    private readonly tweenEasingType = TWEEN.Easing.Quintic.InOut

    controls: Controls
    instance: PerspectiveCamera
    
    constructor() {
        this.instance = this.createInstance()
        this.controls = new Controls(this.instance, Global.canvas)
        this.addWindowResizeListener()
        this.addKeyPressListener()
    }

    private createInstance(): PerspectiveCamera {
        const camera = new PerspectiveCamera(this.fieldOfView,this.calculateAspectRatio())
        this.setAdditionalProperties(camera)
        return camera
    }

    private setAdditionalProperties(camera: PerspectiveCamera): void {
        camera.near = this.nearPlane
        camera.far = this.farPlane
        camera.position.copy(this.startPosition)
    }

    private calculateAspectRatio(): number {
        return window.innerWidth / window.innerHeight
    }

    private addWindowResizeListener(): void {
        window.addEventListener('resize', () => {
            this.instance.aspect = this.calculateAspectRatio()
            this.instance.updateProjectionMatrix()
        })
    }

    private addKeyPressListener(): void {
        window.addEventListener('keypress', (e) => {
            switch (e.key) {
                case 'p':
                    this.lookAtPortrait()
                    break;
                default:
                    this.goToDefaultPosition()
            }
        })
    }

    private goToDefaultPosition(): void {
        const focalPointTween = new TWEEN.Tween(this.controls.instance.target)
            .to(new Vector3(0, 0, 0), 2000)
            .easing(this.tweenEasingType)

        const positionTween = new TWEEN.Tween(this.instance.position)
            .to(this.startPosition)
            .easing(this.tweenEasingType)

        focalPointTween.start()
        positionTween.start()
    }

    private lookAtPortrait(): void {
        const focalPointTween = new TWEEN.Tween(this.controls.instance.target)
            .to(new Vector3(30, 5, 0), 2000)
            .easing(this.tweenEasingType)

        const positionTween = new TWEEN.Tween(this.instance.position)
            .to(new Vector3(20, 0, 20), 2000)
            .easing(this.tweenEasingType)

        focalPointTween.start()
        positionTween.start()
    }

    onLoop(): void {
        TWEEN.update()
        this.controls.onLoop()
    }
}