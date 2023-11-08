import { Scene } from 'three'

import Camera from '../Camera'
import ObjectInteractivityHandler from '../ObjectInteractivityHandler'
import Renderer from '../Renderer'
import CSSRenderer from '../CSSRenderer'
import OverlayHandler from '../UI/OverlayHandler'
import MessageHandler from '../UI/MessageHandler'
import ModalHandler from '../UI/ModalHandler'
import World from '../World/World'

export default class Global {
    static scene: Scene
    static cssScene: Scene
    static world: World
    static camera: Camera
    static renderer: Renderer
    static cssRenderer: CSSRenderer
    static overlayHandler: OverlayHandler
    static messageHandler: MessageHandler
    static modalHandler: ModalHandler
    static objectInteractivityHandler: ObjectInteractivityHandler
}