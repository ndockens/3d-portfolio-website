import {
    AmbientLight,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    PlaneGeometry,
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

    private addGround(): void {
        const geometry = new PlaneGeometry(1000, 1000)
        const material = new MeshStandardMaterial({ color: 0xffffff })
        const ground = new Mesh(geometry, material)
        ground.position.y = -18
        ground.rotateX(MathUtils.degToRad(-90))
        this.scene.add(ground)
    }

    private async addRoom(): Promise<void> {
        const roomModel: GLTF = await this.gltfLoader.loadAsync(this.pathToRoomModel)
        roomModel.scene.position.y = -15
        roomModel.scene.scale.setScalar(20)
        roomModel.scene.rotateY(MathUtils.degToRad(-45))
        this.scene.add(roomModel.scene)
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
        const spotLight = new SpotLight(0xffffff, 700, 100, MathUtils.degToRad(70))
        spotLight.position.y = 25
        this.scene.add(spotLight) 
    }
}