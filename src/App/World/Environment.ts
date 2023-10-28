import {
    AmbientLight,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    NoBlending,
    PlaneGeometry,
    Scene,
    SpotLight,
} from 'three'
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import Global from '../Utilities/Global'
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js'

export default class Environment {
    private readonly pathToRoomModel: string = '/models/isometric_room.glb'
    
    private gltfLoader: GLTFLoader
    scene: Scene

    constructor() {
        this.scene = Global.scene
        this.gltfLoader = new GLTFLoader()

        this.addRoom()
        this.addPortraitImage()
        this.addLights()
    }

    private async addRoom(): Promise<void> {
        const roomModel: GLTF = await this.gltfLoader.loadAsync(this.pathToRoomModel)
        roomModel.scene.position.y = -15
        roomModel.scene.scale.setScalar(20)
        roomModel.scene.rotateY(MathUtils.degToRad(-45))
        this.scene.add(roomModel.scene)
    }

    private addPortraitImage(): void {
        const element = document.createElement('div')
        element.innerHTML = 'Hello World'
        element.style.width = '300px'
        element.style.height = '600px'
        element.style.background = '#ff0000'

        const object = new CSS3DObject(element)
        object.position.set(25.6, 8.4, -2.4)
        object.rotation.set(MathUtils.degToRad(0), -0.78, 0)

        Global.cssScene.add(object);

        const geometry = new PlaneGeometry(7.5, 14.5)

        const material = new MeshStandardMaterial()
        material.blending = NoBlending
        material.opacity = 0
        material.transparent = true

        const mesh = new Mesh(geometry, material)
        
        mesh.position.copy(object.position);
        mesh.rotation.copy(object.rotation);
        mesh.scale.copy(object.scale);

        this.scene.add(mesh);
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