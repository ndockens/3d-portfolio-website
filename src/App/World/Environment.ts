import {
    AmbientLight,
    BoxGeometry,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    PlaneGeometry,
    Scene,
} from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import Global from '../Utilities/Global'

export default class Environment {
    private gltfLoader: GLTFLoader
    private scene: Scene

    constructor() {
        this.scene = Global.scene

        this.gltfLoader = new GLTFLoader()
        this.gltfLoader.load('/models/sci_fi_room.glb', (loadedAsset) => {
            loadedAsset.scene.scale.setScalar(0.1)
            loadedAsset.scene.rotateY(MathUtils.degToRad(45))
            this.scene.add(loadedAsset.scene)
        })
        
        // this.addFloor()
        // this.addCenterpiece()
        this.addLights()
    }

    private addFloor() {
        const floorGeometry = new PlaneGeometry(20, 20)
        const floorMaterial = new MeshStandardMaterial({ color: 'grey' })
        const floor = new Mesh(floorGeometry, floorMaterial)
        floor.rotateX(MathUtils.degToRad(-90))

        this.scene.add(floor)
    }

    private addCenterpiece() {
        const centerpieceGeometry = new BoxGeometry(2, 2, 2)
        const centerpieceMaterial = new MeshStandardMaterial({ color: 'darkgrey' })
        const centerpiece = new Mesh(centerpieceGeometry, centerpieceMaterial)
        centerpiece.position.set(0, 1, 0)
        
        this.scene.add(centerpiece)
    }

    private addLights() {
        const ambientLight = new AmbientLight(0xffffff, 0.5)
        this.scene.add(ambientLight)
    }
}