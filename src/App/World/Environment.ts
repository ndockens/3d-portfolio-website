import {
    AmbientLight,
    Color,
    DirectionalLight,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    NoBlending,
    PlaneGeometry,
    PointLight,
    Scene,
    SpotLight,
} from 'three'
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import Global from '../Utilities/Global'
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js'

export default class Environment {
    private readonly backgroundColorCode: number = 0xaaccff
    private readonly ambientLightColorCode: number = 0xffffff
    private readonly pathToRoomModel: string = '/models/secret-room.glb'
    
    private gltfLoader: GLTFLoader
    scene: Scene

    constructor() {
        this.scene = Global.scene
        this.gltfLoader = new GLTFLoader()
        // this.setSceneBackground()
        this.addRoom()
        this.addLights()
    }

    private setSceneBackground(): void {
        this.scene.background = new Color(this.backgroundColorCode)
    }

    private async addRoom(): Promise<void> {
        const roomModel: GLTF = await this.gltfLoader.loadAsync(this.pathToRoomModel)
        roomModel.scene.position.y = -15
        roomModel.scene.scale.setScalar(15)
        roomModel.scene.rotateY(MathUtils.degToRad(45))
        this.scene.add(roomModel.scene)
    }

    private addPortraitImage(): void {
        const element = document.createElement('div')
        element.innerHTML = 'Hello World'
        element.style.width = '7.5px'
        element.style.height = '14.5px'
        element.style.background = '#ff0000'
        element.style.color = '#000000'
        element.style.fontSize = '0.5px'

        const object = new CSS3DObject(element)
        object.position.set(25.6, 8.4, -2.4)
        object.rotation.set(MathUtils.degToRad(0), -0.78, 0)

        Global.cssScene.add(object);

        // const geometry = new PlaneGeometry(7.5, 14.5)

        // const material = new MeshStandardMaterial()
        // material.blending = NoBlending
        // material.opacity = 0
        // material.transparent = true

        // const mesh = new Mesh(geometry, material)
        
        // mesh.position.copy(object.position);
        // mesh.rotation.copy(object.rotation);
        // mesh.scale.copy(object.scale);

        // this.scene.add(mesh);
    }

    private addLights(): void {
        // this.addAmbientLight()
        // this.addSpotLight()
        this.addPointLight()
        // this.addDirectionalLight()
    }

    private addAmbientLight(): void {
        const ambientLight = new AmbientLight(this.ambientLightColorCode, 1)
        this.scene.add(ambientLight)
    }

    private addSpotLight(): void {
        const spotLight = new SpotLight(0xffffff, 3000, 100, MathUtils.degToRad(70))
        spotLight.position.y = 50
        this.scene.add(spotLight) 
    }

    private addPointLight(): void {
        const pointLight = new PointLight(0xffffff, 2000)
        pointLight.position.y = 30
        this.scene.add(pointLight) 
    }

    private addDirectionalLight(): void {
        const directionalLight = new DirectionalLight(0xffffff, 2)
        directionalLight.position.x = 50
        this.scene.add(directionalLight) 
    }
}