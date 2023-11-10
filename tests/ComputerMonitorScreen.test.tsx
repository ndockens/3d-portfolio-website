import { render, screen } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'

import ComputerMonitorScreen from '../src/App/UI/ComputerMonitorScreen'
import ComputerDesktop from '../src/App/UI/ComputerDesktop'
import SignInScreen from '../src/App/UI/SignInScreen'

const user: UserEvent = userEvent.setup()

async function clickSignInButton(): Promise<void> {
    const signInButton: HTMLElement = screen.getByText('Sign In')
    return user.click(signInButton)
}

describe('Computer OS', () => {
    test('When first loaded, displays the sign-in screen', () => {
        render(<ComputerMonitorScreen />)

        const signInScreen: HTMLElement = screen.getByTestId('sign-in-screen')
        
        expect(signInScreen).toBeTruthy()
    })

    test('When user signs in, displays the desktop', async () => {
        render(<ComputerMonitorScreen />)

        await clickSignInButton()
        const desktop: HTMLElement = screen.getByTestId('desktop')

        expect(desktop).toBeTruthy()
    })
})

describe('Sign-In Screen', () => {
    test('Contains a "sign in" button', () => {
        render(<SignInScreen />)

        const signInButton: HTMLElement = screen.getByText('Sign In')
        
        expect(signInButton).toBeTruthy()
    })

    test('When "sign in" is clicked, calls the passed-in function to sign in', async () => {
        const fakeSignInFunction: jest.Mock = jest.fn();
        render(<SignInScreen signIn={fakeSignInFunction} />)

        await clickSignInButton()

        expect(fakeSignInFunction).toHaveBeenCalledTimes(1)
    })
})

describe('Computer Desktop', () => {
    test('A shortcut to the "profile" app is displayed', async () => {
        render(<ComputerDesktop />)

        const profileShortcut: HTMLElement = screen.getByText('Profile')

        expect(profileShortcut).toBeTruthy()
    })
})