import { PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import Global from './Utilities/Global';

export default class Camera {
    private controls: OrbitControls
    instance: PerspectiveCamera
    
    constructor() {
        this.instance = new PerspectiveCamera(
            35,
            window.innerWidth / window.innerHeight,
            1,
            100
          );
        this.instance.position.y = 5
        this.instance.position.z = 10

        this.controls = new OrbitControls(this.instance, Global.canvas);
        this.controls.enableDamping = true;

        window.addEventListener('resize', () => {
            this.instance.aspect = window.innerWidth / window.innerHeight
            this.instance.updateProjectionMatrix()
        });
    }

    loop() {
        this.controls.update()
    }
}