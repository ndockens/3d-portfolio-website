import { Scene, TextureLoader } from 'three'

import Camera from './Camera'
import Renderer from './Renderer'
import Global from './Utilities/Global'
import World from './World/World'

export default class App {
    constructor() {
        Global.canvas = document.querySelector('canvas.threejs')
        Global.scene = new Scene()
        Global.world = new World()
        Global.camera = new Camera()
        Global.renderer = new Renderer()

        this.loop()
    }

    loop(): void {
        Global.camera.onLoop()
        Global.renderer.onLoop()
        window.requestAnimationFrame(() => this.loop())
    }
}