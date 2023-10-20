import App from './App/App'

new App()

const message = document.getElementsByClassName('message')[0] as HTMLElement

if (message !== null) {
    setTimeout(() => {
        message.classList.add('fadeIn')
        message.classList.remove('fadeOut')
        setTimeout(() => {
            message.classList.add('fadeOut')
            message.classList.remove('fadeIn')
            setTimeout(() => message.style.display = 'none', 5000)
        }, 7000)
    }, 1000)
}