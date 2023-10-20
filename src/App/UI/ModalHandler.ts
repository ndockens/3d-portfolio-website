export default class ModalHandler {
    private modal: HTMLElement
    private modalTitle: HTMLElement
    private modalDescription: HTMLElement
    private modalClose: HTMLElement

    constructor() {
        this.modal = document.getElementById('myModal')!;
        this.modalDescription = document.getElementById('modalDescription')!;
        this.modalTitle = document.getElementById('modalTitle')!;
        this.modalClose = document.getElementsByClassName('close')[0] as HTMLElement;
        this.modalClose.onclick = () => {
            this.closeModal()
        }
        this.addModalListener()
    }
  
    openModal(title: string, description: string) {
        this.modalTitle.innerHTML = title;
        this.modalDescription.innerHTML = description;
        this.modal.style.display = 'block';
        this.modal.classList.remove('fadeOut');
        this.modal.classList.add('fadeIn');
    }
  
    closeModal() {
        this.modal.classList.remove('fadeIn');
        this.modal.classList.add('fadeOut');
        setTimeout(() => {
            this.modal.style.display = 'none';
        }, 600);
    }

    addModalListener(): void {
        window.addEventListener('keypress', (e) => {
            switch (e.key) {
                case 'p':
                    this.openModal(
                        'Profile',
                        `About
                        <br><br>
                        I\'m a detail-oriented software craftsman with a passion for clean code. I focus on creating quality software using industry best practices, and am highly interested in test-driven approaches like TDD and BDD. I also enjoy mentoring others and helping them become better developers.
                        <br><br><br><br>
                        Education
                        <br><br>
                        I studied Computer Information Systems at Northwestern State University, earning my Bachelor's degree when I graduated in 2016.
                        <br><br><br><br>
                        Skills
                        <br><br>
                        I've worked with a number of different technologies. Below is what I consider to be my core skillset.
                        <br><br>
                        Technical Skills:<br>
                        - Full-Stack Web Development<br>
                        - Object-Oriented Programming<br>
                        - Unit & Integration Testing<br>
                        - Clean Code<br>
                        - Relational Database Queries
                        <br><br>
                        Languages & Frameoworks:<br>
                        - C#/.NET<br>
                        - JavaScript<br>
                        - TypeScript<br>
                        - HTML<br>
                        - CSS<br>
                        - React<br>
                        - React Native<br>
                        - SQL<br>
                        `
                    )
                    break;
                case 'e':
                    this.openModal(
                        'Experience',
                        `Software Engineer<br>
                        Dockens Technology Solutions
                        <br><br>
                        Helping organizations overcome challenges through high-quality software. I founded Dockens Technology Solutions to continue my tech career with a focus on consulting and custom software/technology products.
                        <br><br><br><br>
                        Software Engineer<br>
                        Affirma
                        <br><br>
                        As a software engineer consultant, I helped solve problems and drive value for Affirma's clients by developing and maintaining custom software. I worked with several clients in the technology and insurance industries, including tech giant Microsoft.
                        <br><br><br><br>
                        Software Engineer<br>
                        Walmart
                        <br><br>
                        Software engineer on a unique team focused on the creation of prototypes and MVP applications. I worked alongside my team designing and implementing web applications to enable and streamline business processes. I also supported a suite of legacy products, enabling employees to do their jobs effectively and make informed decisions.`
                    )
                    break;
                case 'c':
                    this.openModal('Credits', '')
                    break;

            }
        })
    }
  }