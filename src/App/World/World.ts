import Environment from './Environment'

export default class World {
    environment: Environment
    
    constructor() {
        this.environment = new Environment()
    }
}