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

    private createRenderer(): WebGLRenderer {
        return new WebGLRenderer({
            canvas: Global.canvas,
            antialias: true,
        })
    }

    private initializeRendererProperties(): void {
        this.setSize()
        this.setPixelRatio()
        this.enableShadowMapping()
    }

    private setSize(): void {
        this.instance.setSize(window.innerWidth, window.innerHeight)
    }

    private setPixelRatio(): void {
        this.instance.setPixelRatio(Math.min(window.devicePixelRatio, this.maxPixelRatio))
    }

    private enableShadowMapping(): void {
        this.instance.shadowMap.enabled = true
    }

    private setWindowResizeListener(): void {
        window.addEventListener('resize', () => {
            this.setSize()
            this.setPixelRatio()
        })
    }

    onLoop(): void {
        this.instance.render(Global.scene, Global.camera.instance)
    }
}