import { render, screen } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'

import SignInScreen from '../../src/App/UI/SignInScreen'

const user: UserEvent = userEvent.setup()

function renderSignInScreen(props: any) {
    render(<SignInScreen {...props} />)
}

function getSignInButton(): HTMLElement {
    return screen.getByText('Sign In')
}

async function clickSignInButton(): Promise<void> {
    const signInButton: HTMLElement = getSignInButton()
    return user.click(signInButton)
}

describe('Sign-In Screen', () => {
    test('Contains the "sign in" button', () => {
        renderSignInScreen({})

        const signInButton: HTMLElement = getSignInButton()
        
        expect(signInButton).toBeTruthy()
    })

    test('When "sign in" is clicked, calls the passed-in function to sign in', async () => {
        const fakeSignInFunction: jest.Mock = jest.fn();
        renderSignInScreen({ signIn: fakeSignInFunction })

        await clickSignInButton()

        expect(fakeSignInFunction).toHaveBeenCalledTimes(1)
    })
})