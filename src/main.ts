import App from './App/App'

new App()

const message = document.getElementsByClassName('initial-message')[0] as HTMLElement

if (message !== null) {
    setTimeout(() => {
        message.classList.add('fadeIn')
        setTimeout(() => {
            message.classList.add('fadeOut')
            setTimeout(() => message.style.display = 'none', 5000)
        }, 7000)
    }, 1000)
}