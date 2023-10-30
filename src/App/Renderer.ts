import { WebGLRenderer } from 'three'
import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js'

import Global from './Utilities/Global'

export default class Renderer {
    private instance: WebGLRenderer
    private cssInstance: CSS3DRenderer
    private maxPixelRatio: number = 2

    constructor() {
        this.instance = this.createRenderer()

        this.cssInstance = new CSS3DRenderer()
        this.cssInstance.domElement.style.position = 'absolute'
        this.cssInstance.domElement.style.top = '0px'
        document.querySelector('body')?.appendChild(this.cssInstance.domElement);
        
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
        this.cssInstance.setSize(window.innerWidth, window.innerHeight)
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
        this.cssInstance.render(Global.cssScene, Global.camera.instance)
    }
}