import { AmbientLight, BoxGeometry, MathUtils, Mesh, MeshStandardMaterial, PlaneGeometry, Scene } from 'three'

import Global from '../Utilities/Global'

export default class Environment {
    constructor() {
        const scene: Scene = Global.scene
        
        const floorGeometry = new PlaneGeometry(20, 20)
        const floorMaterial = new MeshStandardMaterial({ color: 'grey' })
        const floor = new Mesh(floorGeometry, floorMaterial)
        floor.rotateX(MathUtils.degToRad(-90))
        scene.add(floor)

        const centerpieceGeometry = new BoxGeometry(2, 2, 2)
        const centerpieceMaterial = new MeshStandardMaterial({ color: 'darkgrey' })
        const centerpiece = new Mesh(centerpieceGeometry, centerpieceMaterial)
        centerpiece.position.set(0, 1, 0)
        scene.add(centerpiece)

        const ambientLight = new AmbientLight(0xffffff, 0.5)
        scene.add(ambientLight)
    }
}