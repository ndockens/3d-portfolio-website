import { WebGLRenderer } from 'three'

import Global from './Utilities/Global'

export default class Renderer {
    private readonly antiAlias: boolean = true
    private readonly maxPixelRatio: number = 2

    instance: WebGLRenderer

    constructor() {
        this.instance = new WebGLRenderer({ antialias: this.antiAlias })
        
        this.initializeProperties()
        this.addRendererElementToWebPage()
        this.setWindowResizeListener()
    }

    onLoop(): void {
        this.instance.render(Global.scene, Global.camera.instance)
    }

    private initializeProperties(): void {
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

    private addRendererElementToWebPage(): void {
        document.body.appendChild(this.instance.domElement)
    }

    private setWindowResizeListener(): void {
        window.addEventListener('resize', () => {
            this.setSize()
            this.setPixelRatio()
        })
    }
}