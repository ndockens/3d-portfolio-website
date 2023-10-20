import { Scene } from 'three'

import Camera from './Camera'
import Renderer from './Renderer'
import MessageHandler from './UI/MessageHandler'
import Global from './Utilities/Global'
import World from './World/World'

export default class App {
    private readonly initialMessage: string = 'Nathan Dockens - Software Engineer'

    constructor() {
        Global.canvas = document.querySelector('canvas.threejs')
        Global.scene = new Scene()
        Global.world = new World()
        Global.camera = new Camera()
        Global.renderer = new Renderer()
        Global.messageHandler = new MessageHandler()

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