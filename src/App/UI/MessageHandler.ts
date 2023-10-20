export default class MessageHandler {
    private readonly htmlClass_fadeIn: string = 'fadeIn'
    private readonly htmlClass_fadeOut: string = 'fadeOut'
    private readonly htmlClass_message: string = 'message'
    private readonly errorMessage_messageElementNotFound = `Could not find an element with class name \"${this.htmlClass_message}\"`
    
    // All speeds are in milliseconds
    private readonly fadeOutDelay: number = 7000
    private readonly hideMessageDelay: number = 5000
    private readonly typingSpeed: number = 100

    private messageElement: HTMLElement

    constructor() {
        this.messageElement = this.getMessageElement()
    }

    display(message: string): void {
        this.reset()
        this.type(message)
        this.fadeOut()
    }

    private getMessageElement(): HTMLElement {
        const element: Element = document.getElementsByClassName(this.htmlClass_message)[0]

        if (element === null)
            throw new Error(this.errorMessage_messageElementNotFound)

        return element as HTMLElement
    }

    private reset(): void {
        this.messageElement.innerHTML = ''
        this.messageElement.style.display = 'block'
        this.messageElement.classList.remove(this.htmlClass_fadeIn)
        this.messageElement.classList.remove(this.htmlClass_fadeOut)
    }

    private type(message: string, charIndex: number = 0): void {
        if (charIndex < message.length) {
            this.messageElement.innerHTML += message.charAt(charIndex);
            charIndex++;
            setTimeout(() => this.type(message, charIndex), this.typingSpeed);
        }
    }

    private fadeOut(): void {
        setTimeout(() => {
            this.messageElement.classList.add(this.htmlClass_fadeOut)
            this.messageElement.classList.remove(this.htmlClass_fadeIn)
            this.hideMessageElement()
        }, this.fadeOutDelay)
    }

    private hideMessageElement(): void {
        setTimeout(() => {
            this.messageElement.style.display = 'none'
        }, this.hideMessageDelay)
    }
}