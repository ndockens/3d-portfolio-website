import { render, screen } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'

import ComputerOS from '../../src/App/UI/ComputerOS'

const user: UserEvent = userEvent.setup()

function renderComputerOS(): void {
    render(<ComputerOS />)
}

function getSignInButton(): HTMLElement {
    return screen.getByText('Sign In')
}

async function clickSignInButton(): Promise<void> {
    const signInButton: HTMLElement = getSignInButton()
    return user.click(signInButton)
}

describe('Computer OS', () => {
    test('When first loaded, displays the sign-in screen', () => {
        renderComputerOS()

        const signInScreen: HTMLElement = screen.getByTestId('sign-in-screen')
        
        expect(signInScreen).toBeTruthy()
    })

    test('When user signs in, displays the desktop', async () => {
        renderComputerOS()

        await clickSignInButton()
        const desktop: HTMLElement = screen.getByTestId('desktop')

        expect(desktop).toBeTruthy()
    })
})