import { Scene } from 'three'

import World from '../World/World'
import Camera from '../Camera'
import Renderer from '../Renderer'

export default class Global {
    static canvas: any
    static scene: Scene
    static world: World
    static camera: Camera
    static renderer: Renderer
}