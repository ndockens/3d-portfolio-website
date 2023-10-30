import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js'

import Global from './Utilities/Global'

export default class CSSRenderer {
    private readonly cssPosition: string = 'absolute'
    private readonly cssTop: string = '0'

    instance: CSS3DRenderer

    constructor() {
        this.instance = new CSS3DRenderer()
        
        this.initializeProperties()
        this.addRendererElementToWebPage()
        this.setWindowResizeListener()
    }

    onLoop(): void {
        this.instance.render(Global.cssScene, Global.camera.instance)
    }

    private initializeProperties(): void {
        this.setSize()
        this.instance.domElement.style.position = this.cssPosition
        this.instance.domElement.style.top = this.cssTop
    }

    private setSize(): void {
        this.instance.setSize(window.innerWidth, window.innerHeight)
    }

    private addRendererElementToWebPage(): void {
        document.body.appendChild(this.instance.domElement)
    }

    private setWindowResizeListener(): void {
        window.addEventListener('resize', () => {
            this.setSize()
        })
    }
}