export default class MessageHandler {
    private readonly messageElementClassName: string = 'message'
    private messageElement: HTMLElement

    constructor() {
        this.messageElement = this.getMessageElement()
    }

    display(message: string): void {
        this.fadeIn(message)
        setTimeout(() => this.fadeOut(), 7000)
    }

    private getMessageElement(): HTMLElement {
        const element: Element = document.getElementsByClassName(this.messageElementClassName)[0]

        if (element === null)
            throw new Error(`Could not find an element with class name \"${this.messageElementClassName}\"`)

        return element as HTMLElement
    }

    private fadeIn(message: string): void {
        setTimeout(() => {
            this.messageElement.innerHTML = message
            this.messageElement.style.display = 'block'
            this.messageElement.classList.add('fadeIn')
            this.messageElement.classList.remove('fadeOut')
        }, 1000)
    }

    private fadeOut(): void {
        this.messageElement.classList.add('fadeOut')
        this.messageElement.classList.remove('fadeIn')
        setTimeout(() => {
            this.messageElement.innerHTML = ''
            this.messageElement.style.display = 'none'
        }, 5000)
    }
}