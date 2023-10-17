import { WebGLRenderer } from 'three'

import Global from './Utilities/Global'

export default class Renderer {
    private instance: WebGLRenderer
    private maxPixelRatio: number = 2

    constructor() {
        this.instance = this.createRenderer()
        this.initializeRendererProperties()
        this.setWindowResizeListener()
    }

    private createRenderer() {
        return new WebGLRenderer({
            canvas: Global.canvas,
            antialias: true,
        })
    }

    private initializeRendererProperties() {
        this.setSize()
        this.setPixelRatio()
        this.enableShadowMapping()
    }

    private setSize() {
        this.instance.setSize(window.innerWidth, window.innerHeight)
    }

    private setPixelRatio() {
        this.instance.setPixelRatio(Math.min(window.devicePixelRatio, this.maxPixelRatio))
    }

    private enableShadowMapping() {
        this.instance.shadowMap.enabled = true
    }

    private setWindowResizeListener() {
        window.addEventListener('resize', () => {
            this.setSize()
            this.setPixelRatio()
        })
    }

    loop() {
        this.instance.render(Global.scene, Global.camera.instance)
    }
}