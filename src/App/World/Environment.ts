import {
    AmbientLight,
    MathUtils,
    Scene,
    SpotLight,
} from 'three'
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import Global from '../Utilities/Global'

export default class Environment {
    private readonly pathToRoomModel: string = '/models/isometric_room.glb'
    
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
        loadedAsset.scene.scale.setScalar(20)
        loadedAsset.scene.rotateY(MathUtils.degToRad(-45))
        this.scene.add(loadedAsset.scene)
    }

    private addLights(): void {
        this.addAmbientLight()
        this.addSpotLight()
    }

    private addAmbientLight(): void {
        const ambientLight = new AmbientLight(0xffffff, 0.5)
        this.scene.add(ambientLight)
    }

    private addSpotLight(): void {
        const spotLight = new SpotLight(0xffffff, 700, 50, MathUtils.degToRad(70))
        spotLight.position.y = 40
        this.scene.add(spotLight) 
    }
}