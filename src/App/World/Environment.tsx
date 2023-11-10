import {
    // AmbientLight,
    // Color,
    // DirectionalLight,
    MathUtils,
    PointLight,
    Scene,
    // SpotLight,
} from 'three'
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js'
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import ReactDOM from 'react-dom/client'

import ComputerMonitorScreen from '../UI/ComputerMonitorScreen'
import Global from '../Utilities/Global'

export default class Environment {
    // private readonly backgroundColorCode: number = 0xaaccff
    // private readonly ambientLightColorCode: number = 0xffffff
    private readonly pathToRoomModel: string = '/models/secret-room.glb'
    
    private gltfLoader: GLTFLoader
    scene: Scene

    constructor() {
        this.scene = Global.scene
        this.gltfLoader = new GLTFLoader()
        // this.setSceneBackground()
        this.addRoom()
        this.addWhiteboardContent()
        this.addComputerScreen()
        this.addLights()
    }

    // private setSceneBackground(): void {
    //     this.scene.background = new Color(this.backgroundColorCode)
    // }

    private async addRoom(): Promise<void> {
        const roomModel: GLTF = await this.gltfLoader.loadAsync(this.pathToRoomModel)
        roomModel.scene.position.y = -15
        roomModel.scene.scale.setScalar(15)
        roomModel.scene.rotateY(MathUtils.degToRad(45))
        this.scene.add(roomModel.scene)
    }

    private addWhiteboardContent(): void {
        const element = document.createElement('div')
        element.innerHTML = 'Hello World'
        element.style.width = '20px'
        element.style.height = '15px'
        element.style.background = 'rgba(255, 255, 255, 0)'
        element.style.color = '#000000'
        element.style.fontSize = '1px'

        const object = new CSS3DObject(element)
        object.position.set(-26.2, 28, -3)
        object.rotation.set(MathUtils.degToRad(0), MathUtils.degToRad(45), 0)

        Global.cssScene.add(object)
    }

    private addComputerScreen(): void {
        const element = document.createElement('div')

        const object = new CSS3DObject(element)
        object.position.set(16.8, 8, 7.5)
        object.rotation.set(MathUtils.degToRad(0), MathUtils.degToRad(-45), 0)

        Global.cssScene.add(object)

        ReactDOM.createRoot(element).render(<ComputerMonitorScreen />)
    }

    private addLights(): void {
        // this.addAmbientLight()
        // this.addSpotLight()
        this.addPointLight()
        // this.addDirectionalLight()
    }

    // private addAmbientLight(): void {
    //     const ambientLight = new AmbientLight(this.ambientLightColorCode, 1)
    //     this.scene.add(ambientLight)
    // }

    // private addSpotLight(): void {
    //     const spotLight = new SpotLight(0xffffff, 3000, 100, MathUtils.degToRad(70))
    //     spotLight.position.y = 50
    //     this.scene.add(spotLight) 
    // }

    private addPointLight(): void {
        const pointLight = new PointLight(0xffffff, 2000)
        pointLight.position.y = 30
        this.scene.add(pointLight) 
    }

    // private addDirectionalLight(): void {
    //     const directionalLight = new DirectionalLight(0xffffff, 2)
    //     directionalLight.position.x = 50
    //     this.scene.add(directionalLight) 
    // }
}