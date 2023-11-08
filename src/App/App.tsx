// import { Scene } from 'three'

// import Camera from './Camera'
// import ObjectInteractivityHandler from './ObjectInteractivityHandler'
// import Renderer from './Renderer'
// import CSSRenderer from './CSSRenderer'
// import OverlayHandler from './UI/OverlayHandler'
// import MessageHandler from './UI/MessageHandler'
// import ModalHandler from './UI/ModalHandler'
// import Global from './Utilities/Global'
// import World from './World/World'

// export default class App {
//     private readonly initialMessage: string = 'Nathan Dockens - Software Engineer'

//     constructor() {
//         Global.scene = new Scene()
//         Global.cssScene = new Scene()
//         Global.world = new World()
//         Global.objectInteractivityHandler = new ObjectInteractivityHandler()
//         Global.renderer = new Renderer()
//         Global.cssRenderer = new CSSRenderer()
//         Global.camera = new Camera()
//         Global.overlayHandler = new OverlayHandler()
//         Global.messageHandler = new MessageHandler()
//         Global.modalHandler = new ModalHandler()

//         this.displayInitialMessage()
//         this.loop()
//     }

//     displayInitialMessage(): void {
//         setTimeout(() => {
//             Global.messageHandler.display(this.initialMessage)
//         }, 500)
//     }

//     loop(): void {
//         Global.camera.onLoop()
//         Global.renderer.onLoop()
//         Global.cssRenderer.onLoop()
//         window.requestAnimationFrame(() => this.loop())
//     }
// }

import { Canvas } from '@react-three/fiber'

export default function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

