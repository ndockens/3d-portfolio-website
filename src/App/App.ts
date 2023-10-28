import { Scene } from 'three'

import Camera from './Camera'
import ObjectInteractivityHandler from './ObjectInteractivityHandler'
import Renderer from './Renderer'
import MessageHandler from './UI/MessageHandler'
import ModalHandler from './UI/ModalHandler'
import Global from './Utilities/Global'
import World from './World/World'

export default class App {
    private readonly initialMessage: string = 'Nathan Dockens - Software Engineer'

    constructor() {
        Global.canvas = document.querySelector('canvas.threejs')
        Global.scene = new Scene()
        Global.cssScene = new Scene()
        Global.world = new World()
        Global.objectInteractivityHandler = new ObjectInteractivityHandler()
        Global.camera = new Camera()
        Global.renderer = new Renderer()
        Global.messageHandler = new MessageHandler()
        Global.modalHandler = new ModalHandler()

        this.displayInitialMessage()
        this.loop()
    }

    displayInitialMessage(): void {
        setTimeout(() => {
            Global.messageHandler.display(this.initialMessage)
        }, 500)
    }

    loop(): void {
        Global.camera.onLoop()
        Global.renderer.onLoop()
        window.requestAnimationFrame(() => this.loop())
    }
}