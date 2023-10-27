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
    private readonly tweenTransitionSpeed = 2000
    private readonly keyFrames: any[] = [
        {
            id: 1,
            position: new Vector3(0, 60, 140),
            target: new Vector3(0, 0, 0),
            triggerType: 'keyPress',
            triggerValue: 'Escape'
        },
        {
            id: 2,
            position: new Vector3(0, 0, 0),
            target: new Vector3(24, 8, 0),
            triggerType: 'objectClick',
            triggerValue: 'Cube037_1'
        }
    ]

    controls: Controls
    instance: PerspectiveCamera
    
    constructor() {
        this.instance = this.createInstance()
        this.controls = new Controls(this.instance, Global.canvas)
        
        this.addWindowResizeListener()
        this.addKeyFrameListeners()
    }

    onLoop(): void {
        TWEEN.update()
        this.controls.onLoop()
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

    private addKeyFrameListeners(): void {
        for (const frame of this.keyFrames) {
            if (frame.triggerType === 'objectClick') {
                Global.objectInteractivityHandler.addClickListener(frame.triggerValue, () => {
                    this.moveTo(frame.position)
                    this.lookAt(frame.target)
                })
            } else if (frame.triggerType === 'keyPress') {
                window.addEventListener('keydown', (e) => {
                    if (e.key === frame.triggerValue) {
                        this.moveTo(frame.position)
                        this.lookAt(frame.target)
                    }
                })
            }
        }
    }

    private lookAt(target: Vector3): void {
        new TWEEN.Tween(this.controls.instance.target)
            .to(target, this.tweenTransitionSpeed)
            .easing(this.tweenEasingType)
            .start()
    }

    private moveTo(position: Vector3): void {
        new TWEEN.Tween(this.instance.position)
            .to(position, this.tweenTransitionSpeed)
            .easing(this.tweenEasingType)
            .start()
    }
}