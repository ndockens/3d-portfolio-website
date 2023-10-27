import { Scene } from 'three'

import Camera from '../Camera'
import Renderer from '../Renderer'
import MessageHandler from '../UI/MessageHandler'
import ModalHandler from '../UI/ModalHandler'
import PointerHandler from './PointerHandler'
import World from '../World/World'

export default class Global {
    static canvas: any
    static scene: Scene
    static world: World
    static camera: Camera
    static renderer: Renderer
    static messageHandler: MessageHandler
    static modalHandler: ModalHandler
    static pointerHandler: PointerHandler
}