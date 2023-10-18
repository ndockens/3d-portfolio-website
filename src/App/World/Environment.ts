import {
    AmbientLight,
    MathUtils,
    Scene,
} from 'three'
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import Global from '../Utilities/Global'

export default class Environment {
    private gltfLoader: GLTFLoader
    private scene: Scene

    constructor() {
        this.scene = Global.scene
        this.gltfLoader = new GLTFLoader()

        this.loadAssets()
        this.addLights()
    }

    private async loadAssets(): Promise<void> {
        const loadedAsset: GLTF = await this.gltfLoader.loadAsync('/models/sci_fi_room.glb')
        loadedAsset.scene.scale.setScalar(0.1)
        loadedAsset.scene.rotateY(MathUtils.degToRad(45))
        this.scene.add(loadedAsset.scene)
    }

    private addLights(): void {
        const ambientLight = new AmbientLight(0xffffff, 0.5)
        this.scene.add(ambientLight)
    }
}