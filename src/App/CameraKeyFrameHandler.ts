import { Vector3 } from 'three'

import Camera from './Camera'
import Global from './Utilities/Global'

interface CameraKeyFrame {
    id: number
    position: Vector3
    target: Vector3
    triggerType: string
    triggerValue: string
}

export default class CameraKeyFrameHandler {
    private readonly keyFrames: CameraKeyFrame[] = [
        {
            id: 1,
            position: new Vector3(0, 60, 140),
            target: new Vector3(0, 0, 0),
            triggerType: 'keyPress',
            triggerValue: 'Escape',
        },
        {
            id: 2,
            position: new Vector3(0, 0, 0),
            target: new Vector3(24, 8, 0),
            triggerType: 'objectClick',
            triggerValue: 'Cube037_1',
        }
    ]

    private camera: Camera
    private currentFrame: any

    constructor(camera: Camera) {
        this.camera = camera
        this.currentFrame = this.keyFrames[0]

        this.addEventListeners()
    }
    
    private addEventListeners(): void {
        for (const frame of this.keyFrames) {
            switch (frame.triggerType) {
                case 'keyPress':
                    this.addKeyPressListener(frame)
                    break;
                case 'objectClick':
                    this.addObjectClickListener(frame)
                    break;
            }
        }
    }

    private addObjectClickListener(frame: CameraKeyFrame): void {
        const objectName = frame.triggerValue
        Global.objectInteractivityHandler.addClickListener(objectName, () => {
            this.update(frame)
        })
    }

    private addKeyPressListener(frame: CameraKeyFrame): void {
        const key = frame.triggerValue
        window.addEventListener('keydown', (e) => {
            if (e.key === key) {
                this.update(frame)
            }
        })
    }

    private update(frame: CameraKeyFrame): void {
        if (this.currentFrame.id !== frame.id) {
            this.currentFrame = frame
            this.camera.moveTo(frame.position)
            this.camera.lookAt(frame.target)
        }
    }
}