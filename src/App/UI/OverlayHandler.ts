export default class OverlayHandler {

    constructor() {
        this.setStartButtonClickHandler()
    }

    private setStartButtonClickHandler() {
        const startButton: HTMLElement = document.getElementsByClassName('start-button')[0] as HTMLElement
        startButton.onclick = this.dismiss
    }

    private dismiss() {
        const overlay: HTMLElement = document.getElementsByClassName('overlay')[0] as HTMLElement
        overlay.style.opacity = '0'
        overlay.style.display = 'none'
    }
}