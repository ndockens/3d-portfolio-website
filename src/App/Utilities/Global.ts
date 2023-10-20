import { Scene } from 'three'

import Camera from '../Camera'
import Renderer from '../Renderer'
import MessageHandler from '../UI/MessageHandler'
import World from '../World/World'

export default class Global {
    static canvas: any
    static scene: Scene
    static world: World
    static camera: Camera
    static renderer: Renderer
    static messageHandler: MessageHandler
}