import {
    AmbientLight,
    MathUtils,
    Scene,
} from 'three'
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import Global from '../Utilities/Global'

export default class Environment {
    private readonly pathToRoomModel: string = '/models/sci_fi_room.glb'
    
    private gltfLoader: GLTFLoader
    private scene: Scene

    constructor() {
        this.scene = Global.scene
        this.gltfLoader = new GLTFLoader()

        this.addRoom()
        this.addLights()
    }

    private async addRoom(): Promise<void> {
        const loadedAsset: GLTF = await this.gltfLoader.loadAsync(this.pathToRoomModel)
        loadedAsset.scene.scale.setScalar(0.1)
        loadedAsset.scene.rotateY(MathUtils.degToRad(45))
        this.scene.add(loadedAsset.scene)
    }

    private addLights(): void {
        const ambientLight = new AmbientLight(0xffffff, 0.7)
        this.scene.add(ambientLight)
    }
}