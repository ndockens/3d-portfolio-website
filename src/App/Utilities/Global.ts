import { Scene } from 'three'

import Camera from '../Camera'
import ObjectInteractivityHandler from '../ObjectInteractivityHandler'
import Renderer from '../Renderer'
import MessageHandler from '../UI/MessageHandler'
import ModalHandler from '../UI/ModalHandler'
import World from '../World/World'

export default class Global {
    static canvas: any
    static scene: Scene
    static cssScene: Scene
    static world: World
    static camera: Camera
    static renderer: Renderer
    static messageHandler: MessageHandler
    static modalHandler: ModalHandler
    static objectInteractivityHandler: ObjectInteractivityHandler
}