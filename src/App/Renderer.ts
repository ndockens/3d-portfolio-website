import { WebGLRenderer } from 'three';

import Global from './Utilities/Global';

export default class Renderer {
    private instance: WebGLRenderer

    constructor() {
        this.instance = new WebGLRenderer({
            canvas: Global.canvas,
            antialias: true,
          })
        this.instance.setSize(window.innerWidth, window.innerHeight)
        this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.instance.shadowMap.enabled = true
        this.setResizeLister()
    }

    setResizeLister() {
        window.addEventListener('resize', () => {
            this.instance.setSize(window.innerWidth, window.innerHeight)
            this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        });
    }

    loop() {
        this.instance.render(Global.scene, Global.camera.instance)
    }
}